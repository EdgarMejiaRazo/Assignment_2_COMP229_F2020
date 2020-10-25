/*-- Assignment 2 Web Application Development COMP229 Edgar Adrian Mejia Razo Centennial College 301066027 WINTER 2020 */

// IIFE -- Inmediatly Invoked Function Expression
// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();

/*-- Assignment 2 Web Application Development COMP229 Edgar Adrian Mejia Razo Centennial College 301066027 WINTER 2020 */