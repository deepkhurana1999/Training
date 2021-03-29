(function (){

    console.log('Two Way data binding implementation');
    var elements = document.querySelectorAll('[data-geek]');
    // console.log(elements);
    var dbrepo = {};

    elements.forEach((element) =>
    {
        if(element.type === 'text')
        {
        
            var bindingElement = element.getAttribute('data-geek');
            addToScope();
            element.onkeyup = () => {
                dbrepo[bindingElement] = element.value;
            }
        }

        function addToScope()
        {
            if(!dbrepo.hasOwnProperty(bindingElement))
            {
                let value;

                Object.defineProperty(dbrepo,bindingElement,
                    {
                        configurable: true,
                        enumerable: true,
                        set: function(newValue)
                        {
                            value = newValue;
                            elements.forEach(e => {
                                if(e.getAttribute('data-geek') === bindingElement)
                                {
                                    if(e.type == 'text')
                                    {
                                        e.value = newValue;
                                    }
                                    else if(!e.type)
                                    {
                                        e.innerHTML = newValue;
                                    }
                                }
                            })
                        },
                        get:function()
                        {
                            return value;
                        }

                    })
            }
        }
    });

})();