export class Student {
    private static idCounter = 10000;
    public studentId: string;
    public courses: string[] = [];
    public balance: number = 0;

    constructor(public firstName: string, public lastName: string) {
        this.studentId = Student.generateStudentId();
    }

    private static generateStudentId(): string {
        return (this.idCounter++).toString();
    }

    public enroll(course: string): void {
        this.courses.push(course);
        this.balance += 500; // Assuming each course costs 500
    }

    public viewBalance(): void {
        console.log(`Balance for ${this.firstName} ${this.lastName} (ID: ${this.studentId}): $${this.balance}`);
    }

    public payTuition(amount: number): void {
        this.balance -= amount;
        console.log(`Payment of $${amount} received. New balance: $${this.balance}`);
    }

    public showStatus(): void {
        console.log(`Student: ${this.firstName} ${this.lastName}`);
        console.log(`ID: ${this.studentId}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
    }
}