export class Student {
    firstName;
    lastName;
    static idCounter = 10000;
    studentId;
    courses = [];
    balance = 0;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentId = Student.generateStudentId();
    }
    static generateStudentId() {
        return (this.idCounter++).toString();
    }
    enroll(course) {
        this.courses.push(course);
        this.balance += 500; // Assuming each course costs 500
    }
    viewBalance() {
        console.log(`Balance for ${this.firstName} ${this.lastName} (ID: ${this.studentId}): $${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`Payment of $${amount} received. New balance: $${this.balance}`);
    }
    showStatus() {
        console.log(`Student: ${this.firstName} ${this.lastName}`);
        console.log(`ID: ${this.studentId}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
    }
}
