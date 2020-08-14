class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Balithuba High School";

    }
}
const student1 = new Student(23, "amit");
const student2 = new Student(32, "tanvir");
console.log(student1.name, student2);