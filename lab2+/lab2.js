var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
var car = {};
car.manufacturer = "manufacturer";
car.model = 'model';
// 3. Массив машин
var car1 = {};
car1.manufacturer = "manufacturer";
car1.model = 'model';
var car2 = {};
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [{
        cars: [car, car2]
    }];
// Реализация методов для GroupType
var group = {
    students: [
        { id: 1, name: "Иван", group: 1, marks: [{ subject: "Математика", mark: 10, done: true }] },
        { id: 2, name: "Мария", group: 2, marks: [{ subject: "Физика", mark: 8, done: false }] },
        { id: 3, name: "Алексей", group: 10, marks: [{ subject: "Химия", mark: 5, done: true }] },
    ],
    studentsFilter: function (group) {
        var filtered = this.students.filter(function (student) { return student.group === group; });
        console.log("\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u044B \u0433\u0440\u0443\u043F\u043F\u044B ".concat(group, ":"));
        return filtered;
    },
    marksFilter: function (mark) {
        var filtered = this.students.filter(function (student) { return student.marks.some(function (m) { return m.mark === mark; }); });
        console.log("\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u044B \u0441 \u043E\u0446\u0435\u043D\u043A\u043E\u0439 ".concat(mark, ":"));
        return filtered;
    },
    deleteStudent: function (id) {
        console.log("\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430 \u0441 id: ".concat(id));
        this.students = this.students.filter(function (student) { return student.id !== id; });
        console.log("\u041E\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044F \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u044B:", this.students);
    },
    mark: 5,
    group: 10
};
console.log(group.studentsFilter(10));
console.log(group.marksFilter(5));
console.log(group.deleteStudent(3));
