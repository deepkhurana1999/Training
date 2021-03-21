function ALU(num1 ,num2)
{
    let result = 0;
    if(arguments.length == 2)
    {
        result = num1+num2;
    }
    else if(arguments.length>2)
    {
        let sum = num1 + num2;
        let exSum = 0;
        for (let i=2;i<arguments.length;i++) 
        {
            exSum += arguments[i];
        }
        result = Math.abs(exSum-sum);
    }
    else
    {
        result = arguments['0'];
    }

    if(isNaN(result) && Number.isNaN(result))
        result = 0;
    
    return result;
}


console.log(ALU(6,7,'nice'));
