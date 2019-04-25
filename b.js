
class Person{
    /**
     * @param {string} name 
     * @param {number} height 
     * @param {object} school 
     */
    constructor(name, height, school){
        this.name = name;
        this.height = height;
        this.school = school;
    }
    getData(){
        return `Bạn ${this.name} đang học tại trường ${this.school.name}` ;
    }
}
const school = {
    name: 'KPT',
    address : 'Quan 10'
}
const ti = new Person('Ti',160, school);
const teo = new Person('Teo',160, {name:'Khoa Pham Training'});

console.log(teo.getData())
