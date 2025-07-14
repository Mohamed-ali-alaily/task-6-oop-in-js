// task-2

// Step 1: Member Class
class Member {
    #email;
    #id;

    constructor(name, id, email) {
        this.name = name;
        this.#id = id;
        this.email = email;
    }

    get id() {
        return this.#id;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        if (email.includes("@")) {
            this.#email = email;
        } else {
            this.#email = "example@university.com";
            console.log("Invalid email");
        }
    }

    performTask() {
        console.log("Member performing general task");
    }
}

// Step 2: Professor Class
class Professor extends Member {
    constructor(name, id, email, department) {
        super(name, id, email);
        this.department = department;
        this.courses = [];
    }

    addCourse(courseName) {
        this.courses.push(courseName);
        console.log(`Professor ${this.name} added course: ${courseName}`);
    }

    viewCourses() {
        console.log(`Courses taught by Professor ${this.name}:`);
        this.courses.forEach((c, i) => console.log(`${i + 1}. ${c}`));
    }

    performTask() {
        console.log(`Professor ${this.name} is preparing and teaching courses`);
    }
}

// Step 3: Student Class
class Student extends Member {
    constructor(name, id, email, major) {
        super(name, id, email);
        this.major = major;
        this.enrolledCourses = [];
    }

    enroll(courseName) {
        this.enrolledCourses.push(courseName);
        console.log(`${this.name} enrolled in: ${courseName}`);
    }

    viewCourses() {
        console.log(`Courses enrolled by ${this.name}:`);
        this.enrolledCourses.forEach((c, i) => console.log(`${i + 1}. ${c}`));
    }

    performTask() {
        console.log(`${this.name} is studying and attending classes`);
    }
}

// Step 4: Admin Class
class Admin extends Member {
    constructor(name, id, email) {
        super(name, id, email);
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
        console.log(`Admin ${this.name} added member: ${member.name}`);
    }

    removeMember(memberId) {
        this.members = this.members.filter(m => m.id !== memberId);
        console.log(`Admin ${this.name} removed member with ID: ${memberId}`);
    }

    listMembers() {
        console.log(`Members managed by Admin ${this.name}:`);
        this.members.forEach(m => console.log(`- ${m.name} (${m.email})`));
    }

    performTask() {
        console.log(`Admin ${this.name} is managing university records`);
    }
}

// Step 5: Create and Use Objects
const admin1 = new Admin("Dr. mohamed", 1, "admin@university.com");
const prof1 = new Professor("Dr. ali", 2, "ali@cs.edu", "Computer Science");
const student1 = new Student("ahmed", 3, "ahmed@student.edu", "front end developer");

admin1.addMember(prof1);
admin1.addMember(student1);

prof1.addCourse("Data Structures");
prof1.addCourse("Algorithms");

student1.enroll("Data Structures");
student1.enroll("object orinted programming");

const allMembers = [admin1, prof1, student1];

console.log("\n--- Performing Tasks ---");
allMembers.forEach(m => m.performTask());

console.log("\n--- Admin Members ---");
admin1.listMembers();

console.log("\n--- Professor Courses ---");
prof1.viewCourses();

console.log("\n--- Student Enrollments ---");
student1.viewCourses();
