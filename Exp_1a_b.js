var Student = /** @class */ (function () {
    function Student(studentName, subjectMarks) {
        this.studentName = studentName;
        this.subjectMarks = subjectMarks;
    }
    // Step 3: Calculate the total marks
    Student.prototype.getTotalMarks = function () {
        return this.subjectMarks.reduce(function (acc, mark) { return acc + mark; }, 0);
    };
    // Step 4: Calculate the average marks
    Student.prototype.getAverageMarks = function () {
        return this.getTotalMarks() / this.subjectMarks.length;
    };
    // Step 5: Determine if the student has passed or failed
    Student.prototype.isPassed = function () {
        var average = this.getAverageMarks();
        return average >= 40;
    };
    // Step 6: Display the student result
    Student.prototype.displayResult = function () {
        console.log("Student Name: ".concat(this.studentName));
        console.log("Average Marks: ".concat(this.getAverageMarks()));
        console.log("Result: ".concat(this.isPassed() ? "Passed" : "Failed"));
    };
    return Student;
}());
// Example usage
var student1 = new Student("John Doe", [45, 38, 50]);
var student2 = new Student("Jane Smith", [75, 82, 65]);
student1.displayResult();
student2.displayResult();
