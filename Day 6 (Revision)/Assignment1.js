function Animal(owner)
{
    this.owner = owner;
}

function Dog(name, color)
{


    this.name = name;
    this.color = color;
}

let a = new Animal("foo");
let d = new Dog("D","white");

//d.__proto__ = a;
//Dog.prototype = a;

for(i in a){
    Object.prototype[i] = a[i];
}

console.log(d.owner);