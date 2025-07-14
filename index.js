// #TASK-1 Hospital Management System

// Step 1: Base User Class
class User {
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
            this.#email = "example@gmail.com";
            console.log("Invalid email");
        }
    }

    performTask() {
        console.log("User performing general task");
    }
}

// Step 2: Admin Class
class Admin extends User {
    constructor(name, id, email) {
        super(name, id, email);
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
        console.log(`Admin ${this.name} added user ${user.name}`);
    }

    removeUser(userEmail) {
        this.users = this.users.filter(
            (user) => user.email != userEmail
        );
        console.log("User removed");
    }

    listUsers() {
        console.log(`Users managed by Admin ${this.name}:`);
        this.users.forEach(user => console.log(`- ${user.name} (${user.email})`));
    }

    performTask() {
        console.log(`Admin ${this.name} is managing users`);
    }
}

// Step 3: Doctor Class
class Doctor extends User {
    constructor(name, id, email, specialty) {
        super(name, id, email);
        this.specialty = specialty;
        this.diagnosedPatients = [];
    }

    diagnose(patientName, disease) {
        this.diagnosedPatients.push({ patientName, disease });
        console.log(`Dr. ${this.name} diagnosed ${patientName} with ${disease}`);
    }

    listDiagnosedPatients() {
        console.log(`Diagnosed patients by Dr. ${this.name}:`);
        this.diagnosedPatients.forEach((p, i) => {
            console.log(`${i + 1}. ${p.patientName} - ${p.disease}`);
        });
    }

    performTask() {
        console.log(`Dr. ${this.name} is diagnosing patients`);
    }
}

// Step 4: Patient Class
class Patient extends User {
    constructor(name, id, email) {
        super(name, id, email);
        this.appointments = [];
    }

    bookAppointment(doctor, date) {
        this.appointments.push({ doctor: doctor.name, date });
        console.log(`${this.name} booked an appointment with Dr. ${doctor.name} on ${date}`);
    }

    viewAppointments() {
        console.log(`Appointments for ${this.name}:`);
        this.appointments.forEach((a, i) => {
            console.log(`${i + 1}. Dr. ${a.doctor} on ${a.date}`);
        });
    }

    performTask() {
        console.log(`${this.name} is booking appointments`);
    }
}

// Step 5: Create and Use Objects
const admin1 = new Admin("mohamed", 1, "admin@hospital.com");
const doctor1 = new Doctor("Dr. ali", 2, "ali@clinic.com", "Cardiology");
const patient1 = new Patient("ahmed", 3, "ahmed@mail.com");

admin1.addUser(doctor1);
admin1.addUser(patient1);

doctor1.diagnose("ahmed", "High Blood Pressure");
patient1.bookAppointment(doctor1, "2025-07-22");

const allUsers = [admin1, doctor1, patient1];

console.log("\n--- Performing Tasks ---");
allUsers.forEach(user => user.performTask());

console.log("\n--- Admin's Managed Users ---");
admin1.listUsers();

console.log("\n--- Diagnosed Patients ---");
doctor1.listDiagnosedPatients();

console.log("\n--- Patient Appointments ---");
patient1.viewAppointments();



