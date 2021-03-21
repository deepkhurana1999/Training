
function Dog(name, color)
{
    this.name = name;
    this.color = color;
}

let d = new Dog("D","white");
for (let value of Object.values(d)) {
    console.log(value);
}