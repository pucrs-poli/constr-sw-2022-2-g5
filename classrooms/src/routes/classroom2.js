const classroomController = require('../controllers/classroomController');
const { checkAccessToken } = require("../middlewares/middleware");
/*
enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
  }
  enum Authorization {
    ACCESS_TOKEN = "ACCESS_TOKEN",
    NO_ACCESS_TOKEN = "NO_ACCESS_TOKEN",
  }
*/
const HTTPMethod = Object.freeze({"GET":"GET", "POST":"POST", "PUT":"PUT", "PATCH":"PATCH", "DELETE":"DELETE"})

const Authorization = Object.freeze({"ACCESS_TOKEN":"ACCESS_TOKEN", "NO_ACCESS_TOKEN":"NO_ACCESS_TOKEN"})


class Router {
app;
  constructor(app) {
    this.app = app;
}

  createRoute(path, method, controllerFunction, authorization) {
    switch (method) {
      case HTTPMethod.GET:
        {
          if (authorization === Authorization.NO_ACCESS_TOKEN) {
            this.app.get(path, controllerFunction);
          } else {
            this.app.get(path, checkAccessToken, controllerFunction);
          }
        }
        break;
      case HTTPMethod.POST:
        if (authorization === Authorization.NO_ACCESS_TOKEN) {
          this.app.post(path, controllerFunction);
        } else {
          this.app.post(path, checkAccessToken, controllerFunction);
        }
        break;
      case HTTPMethod.PUT:
        if (authorization === Authorization.NO_ACCESS_TOKEN) {
          this.app.put(path, controllerFunction);
        } else {
          this.app.put(path, checkAccessToken, controllerFunction);
        }
        break;
      case HTTPMethod.PATCH:
        if (authorization === Authorization.NO_ACCESS_TOKEN) {
          this.app.patch(path, controllerFunction);
        } else {
          this.app.patch(path, checkAccessToken, controllerFunction);
        }
        break;
      case HTTPMethod.DELETE:
        if (authorization === Authorization.NO_ACCESS_TOKEN) {
          this.app.delete(path, controllerFunction);
        } else {
          this.app.delete(path, checkAccessToken, controllerFunction);
        }
        break;
    }
  }

  /*
    Routes.
  */
   setupRoutes() {
    this.createRoute(
      "/classroom",
      HTTPMethod.GET,
      classroomController.getAllClassrooms,
      Authorization.NO_ACCESS_TOKEN
    );
    this.createRoute(
      "/classroom:id",
      HTTPMethod.GET,
      classroomController.getClassroom,
      Authorization.ACCESS_TOKEN
    );
    this.createRoute(
      "/classroom",
      HTTPMethod.POST,
      classroomController.createClassroom,
      Authorization.ACCESS_TOKEN
    );
    this.createRoute(
      "/classroom:id",
      HTTPMethod.PUT,
      classroomController.putClassroom,
      Authorization.ACCESS_TOKEN
    );
    this.createRoute(
      "/classroom/:id",
      HTTPMethod.PATCH,
      classroomController.patchClassroom,
      Authorization.ACCESS_TOKEN
    );
    this.createRoute(
      "/classroom/:id",
      HTTPMethod.DELETE,
      classroomController.deleteClassroom,
      Authorization.ACCESS_TOKEN
    );
  }
}


module.exports = {
    Router
}