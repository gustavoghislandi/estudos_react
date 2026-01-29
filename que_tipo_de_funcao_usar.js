//Em React é melhor declarar componentes como? function declaration, expression ou arrow? Por quê?

//No React moderno, ''function expressions'' ou ''arrow functions'' são mais comuns:

    // Expression
    const MyComponent = function() { return <div />; }

    // Arrow
    const MyComponent2 = () => <div />;


//Por quê?

    //Consistência com const/ES6 → evita hoisting confuso.

    //Arrow functions tornam mais fácil usar hooks e manter 'this' previsível.

    //'Function declarations' ainda funcionam, mas menos usada em código React moderno.

//Resumo rápido: → expression ou arrow function com const.
