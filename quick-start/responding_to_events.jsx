// You can respond to events by declaring event handler functions inside your components:

    function MyButton() {
        function handleClick() {
            alert('You clicked me!');
        }

        return (
            <button onClick={handleClick}> {/* O React vai chamar a função no evento. Não chame (assim: hanvdleClick()) ela!(*/}
                Click me
            </button>
        );
    }

//IMPORTANTE:
// Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button.

//------------------------------------------

// Sobre a nomenclatura hanldle/handler:

// “Handler” não é algo especial do React — é convenção de nome.

// São funções que você cria para lidar com eventos:

    // handleClick
    // handleChange
    // handleSubmit