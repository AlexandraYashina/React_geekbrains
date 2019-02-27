class Developer {
    constructor(name, department)  {
        this.name = name;
        this.department = department;
    }

    displayInfo() {
        return `Имя: ${this.name}, отдел: ${this.department}`;
    }
}

export default Developer;