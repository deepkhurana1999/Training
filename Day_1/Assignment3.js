function counter()
{
    let count = 0;
    function itr()
    {
        count = count +1;
        return count; 
    }
    return itr;
}

let cItr = counter();
let i = 1;
while(i<=10)
{
    console.log(cItr());
    i++;
}