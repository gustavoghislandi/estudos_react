// Resumo sobre renderização:

    // Renderização só acontece quando state muda ou props mudam

    // Effects nunca causam render sozinhos, a menos que chamem setState e o valor seja diferente

    // UseEffect sem array → roda sempre depois de cada render, mas não causa renderização

    // UseEffect com dependência → roda quando a dependência muda, pode chamar setState e gerar render

    // Valores derivados → nunca use state se você pode calcular no render

    // É ruim setar state dentro de Effects porque cada set agenda uma nova renderização.

    // Já se fora fora do Effect, eles renderizam no mesmo ciclo, é um único render em lote (bem mais eficiente).

        //UseEffect certo é “side effect puro”

            // Fetch API

            // Logs

            // Assinaturas/subscriptions

            // Timers

        // Se realmente precisar de setState dentro do effect

            // Tente colocar múltiplos setStates no mesmo effect → reduz renders

            // Confirme que o valor muda mesmo (shallow compare)