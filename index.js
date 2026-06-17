class Person {
    constructor(name, adult, age) {
        this.name = name;
        this.adult = adult;
        this.age = age;
        this.hobbies = hobbies;
    }

    set age(newAge) {
        if (newAge < 14) {

            alert(`${this.name} you can not get a job yet you have to wait until you are 14 or older`);
        } else {
            this._age = newAge;
        }
    }

    get age() {
        return this._age;
    }
}
