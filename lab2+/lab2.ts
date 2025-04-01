// 1. Тип для массива студентов
type Student ={
    id: number;
    name: string;
    group: number;
}

let array: Student[] = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

// 2. Интерфейс для машины
interface CarsType {
    manufacturer?: string;
    model?: string;
}

let car: CarsType = {}; 
car.manufacturer = "manufacturer";
car.model = 'model';

// 3. Массив машин
const car1: CarsType = {};
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {};
car2.manufacturer = "manufacturer";
car2.model = 'model';

type ArrayCarsType = {
    cars: CarsType[];
}

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car, car2]
}];

// 4. Типы для студентов и оценок
type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; 
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; 
type DoneType = boolean;

type MarkType = {
    subject: string;
    mark: MarkFilterType;
    done: DoneType;
};

type StudentType = {
    id: number;
    name: string;
    group: GroupFilterType;
    marks: Array<MarkType>;
};

type GroupType = {
    students: StudentType[];
    studentsFilter: (group: number) => Array<StudentType>;
    marksFilter: (mark: number) => Array<StudentType>;
    deleteStudent: (id: number) => void;
    mark: MarkFilterType;
    group: GroupFilterType;
};

// Реализация методов для GroupType
const group: GroupType = {
    students: [
        { id: 1, name: "Иван", group: 1, marks: [{ subject: "Математика", mark: 10, done: true }] },
        { id: 2, name: "Мария", group: 2, marks: [{ subject: "Физика", mark: 8, done: false }] },
        { id: 3, name: "Алексей", group: 10, marks: [{ subject: "Химия", mark: 5, done: true }] },
    ],
    studentsFilter(group) {
        const filtered = this.students.filter(student => student.group === group);
        console.log(`Студенты группы ${group}:`);
        return filtered;
    },
    marksFilter(mark) {
        const filtered = this.students.filter(student => student.marks.some(m => m.mark === mark));
        console.log(`Студенты с оценкой ${mark}:`);
        return filtered;
    },
    deleteStudent(id) {
        console.log(`Удаление студента с id: ${id}`);
        this.students = this.students.filter(student => student.id !== id);
        console.log(`Оставшиеся студенты:`, this.students);
    },
    mark: 5, 
    group: 10 
};

console.log(group.studentsFilter(10));
console.log(group.marksFilter(5));
console.log(group.deleteStudent(3));
