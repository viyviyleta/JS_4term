enum HttpStatus{
    OK = 200,
    Bad_request = 400,
    Unauthorized = 401,
    Internal_Server_Error = 500
}


type ApiResponse<T> = [status:HttpStatus, data: T | null, error?: string];

function success<T>(data:T): ApiResponse<T>{
    return [HttpStatus.OK, data];
}

function error(message:string, status: HttpStatus):ApiResponse<null>{
    return [status, null, message];
}

const res1 = success({ message: "Данные успешно получены" });
console.log(res1);

const res2 = error("Ошибка авторизации", HttpStatus.Unauthorized);
console.log(res2);