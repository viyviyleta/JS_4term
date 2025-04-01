abstract class BaseUser {
    constructor(id:number, name:string){};

    abstract getRole():string;
    abstract getPermissions():Array<string>;
}


class Guest extends BaseUser{
    getRole(): string{
        return "Guest";
    }

    getPermissions(): Array<string> {
        return ["Просмотр контента"];
    }
}


class User extends BaseUser{
    getRole(): string{
        return "User";
    }

    getPermissions(): Array<string> {
        return ["Просмотр контента", "Добавление комментариев"];
    }
}

class Admin extends BaseUser{
    getRole(): string{
        return "User";
    }

    getPermissions(): Array<string> {
        return ["Просмотр контента", "Добавление комментариев", "Удаление комментариев", "Управление пользователями"];
    }
}

const guest = new Guest(1, "Гость");
console.log(guest.getPermissions());
const admin = new Admin(2, "Админ");
console.log(admin.getPermissions());

