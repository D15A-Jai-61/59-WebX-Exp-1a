class Student {
    studentName: string;
    subjectMarks: number[];

    constructor(studentName: string, subjectMarks: number[]) {
        this.studentName = studentName;
        this.subjectMarks = subjectMarks;
    }

    // Step 3: Calculate the total marks
    getTotalMarks(): number {
        return this.subjectMarks.reduce((acc, mark) => acc + mark, 0);
    }

    // Step 4: Calculate the average marks
    getAverageMarks(): number {
        return this.getTotalMarks() / this.subjectMarks.length;
    }

    // Step 5: Determine if the student has passed or failed
    isPassed(): boolean {
        const average = this.getAverageMarks();
        return average >= 40;
    }

    // Step 6: Display the student result
    displayResult(): void {
        console.log(`Student Name: ${this.studentName}`);
        console.log(`Average Marks: ${this.getAverageMarks()}`);
        console.log(`Result: ${this.isPassed() ? "Passed" : "Failed"}`);
    }
}

// Example usage
const student1 = new Student("John Doe", [45, 38, 50]);
const student2 = new Student("Jane Smith", [75, 82, 65]);

student1.displayResult();
student2.displayResult();
