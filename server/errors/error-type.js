let ErrorType = {
    GENERAL_ERROR: { id: 1, httpCode: 600, message: "A big fuck up which we'll never tell you of had just happend. And now : A big fat lie....'A general error ....'", isShowStackTrace: true },
    UNAUTHORIZED: { id: 2, httpCode: 401, message: "Login failed, invalid user name or password", isShowStackTrace: false },
    USER_NAME_ALREADY_EXIST: { id: 3, httpCode: 601, message: "User name already exist", isShowStackTrace: false },
    EMAIL_NOT_VALID: { id: 4, httpCode: 602, message: "Incorrect Email Format ", isShowStackTrace: false },
    EMAIL_ALREADY_EXIST: { id: 5, httpCode: 603, message: "Email already exist", isShowStackTrace: false },
    VACATION_ALREADY_EXIST: { id: 6, httpCode: 604, message: "Vacation already exist", isShowStackTrace: false },
    VACATION_DOESNT_EXIST: { id: 7, httpCode: 605, message: "Vacation dosent exist", isShowStackTrace: false }
}

module.exports = ErrorType;