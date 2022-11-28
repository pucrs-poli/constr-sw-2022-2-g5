class CannotFindClassroomError extends Error {
    constructor(message) {
      console.log(message);
      super(message);
      this.name = 'CannotFindClassroomError';
    }
  }
  
  module.exports = { CannotFindClassroomError };
  