function SmartPhone(name, cost, model, org)
{
    if(!new.target)
        throw 'SmartPhone must be called with new keyword.';
    this.title = name;
    this.price = cost;
    this.model = model;
    this.company = org;
}

try{
    let phone = new SmartPhone('Lenovo P2', 12000, 'P2a42', 'Lenovo');
    console.log(phone);
    SmartPhone('Lenovo P2', 12000, 'P2a42', 'Lenovo');
}
catch(e)
{
    console.log(e);
}

