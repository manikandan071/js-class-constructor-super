//class method

class data {
    constructor(year){
        this.year=year;
    }
    age(x){
        return x - this.year;
    }
}

let date=new Date();
let year=date.getFullYear();

let myData=new data(1998);

console.log("i am " + (myData.age(year)) + " years old");


class working {
    constructor(year){
        this.year=year;
    }
    totalYear(){
        let toDay=new Date();
        return toDay.getFullYear() - this.year;
    }
}

let joiningYear=new working(2019);

console.log("my working experience is " + joiningYear.totalYear()+ " years");

//Class Inheritance

class mydetails {
    constructor(name){
        this.myName=name;
    }
    present(){
        return "my name is " + this.myName;
    }
}
class myBio extends mydetails{
    constructor(name,age){
        super(name);
        this.age=age;
    }
    show(){
        return this.present() + " " + this.age + " year old";
    }
}

let overallData=new myBio("manikandan", 24);

console.log(overallData.show());

class myCar{
    constructor(brand){
        this.name=brand;
    }
    show(){
        return this.name;
    }
}

let carBrand=new myCar("ford");

console.log(carBrand.show());

