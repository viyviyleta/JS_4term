var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["Bad_request"] = 400] = "Bad_request";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["Internal_Server_Error"] = 500] = "Internal_Server_Error";
})(HttpStatus || (HttpStatus = {}));
function success(data) {
    return [HttpStatus.OK, data];
}
function error(message, status) {
    return [status, null, message];
}
var res1 = success({ message: "Данные успешно получены" });
console.log(res1);
var res2 = error("Ошибка авторизации", HttpStatus.Unauthorized);
console.log(res2);
