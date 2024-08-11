#! /usr/bin/env node
import readlineSync from 'readline-sync';
import {Student} from './student.js'

// Main program logic
const students: Student[] = [];

function addStudent() {
    const firstName = readlineSync.question('Enter first name: ');
    const lastName = readlineSync.question('Enter last name: ');

    const student = new Student(firstName, lastName);
    students.push(student);

    console.log(`Student ${firstName} ${lastName} added with ID: ${student.studentId}`);
}

function enrollStudent() {
    const studentId = readlineSync.question('Enter student ID: ');
    const course = readlineSync.question('Enter course to enroll: ');

    const student = students.find(stu => stu.studentId === studentId);
    if (student) {
        student.enroll(course);
        console.log(`Student ${studentId} enrolled in course: ${course}`);
    } else {
        console.log(`Student with ID ${studentId} not found.`);
    }
}

function viewStudentBalance() {
    const studentId = readlineSync.question('Enter student ID: ');

    const student = students.find(stu => stu.studentId === studentId);
    if (student) {
        student.viewBalance();
    } else {
        console.log(`Student with ID ${studentId} not found.`);
    }
}

function payTuition() {
    const studentId = readlineSync.question('Enter student ID: ');
    const amount = parseFloat(readlineSync.question('Enter amount to pay: '));

    const student = students.find(stu => stu.studentId === studentId);
    if (student) {
        student.payTuition(amount);
    } else {
        console.log(`Student with ID ${studentId} not found.`);
    }
}

function showStudentStatus() {
    const studentId = readlineSync.question('Enter student ID: ');

    const student = students.find(stu => stu.studentId === studentId);
    if (student) {
        student.showStatus();
    } else {
        console.log(`Student with ID ${studentId} not found.`);
    }
}

function main() {
    while (true) {
        console.log('\n1. Add Student');
        console.log('2. Enroll in Course');
        console.log('3. View Balance');
        console.log('4. Pay Tuition');
        console.log('5. Show Student Status');
        console.log('6. Exit');
        
        const choice = readlineSync.question('Enter choice: ');
        
        switch (choice) {
            case '1':
                addStudent();
                break;
            case '2':
                enrollStudent();
                break;
            case '3':
                viewStudentBalance();
                break;
            case '4':
                payTuition();
                break;
            case '5':
                showStudentStatus();
                break;
            case '6':
                console.log('Exiting...');
                return;
            default:
                console.log('Invalid choice, please try again.');
        }
    }
}

main();
