class Animal{
  constructor(name,legCount){
    
    this.name = name
    this.legCount = legCount;

  }
  describe(){
    console.log(this.name + " has " + this.legCount + " legs");
  }
}


const dog = new Animal("Dog", 4); // create object
dog.describe(); // call function on object