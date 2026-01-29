// Bibliotecas (clients) de data fetching no front-end — ou seja, ferramentas para buscar, cachear, sincronizar e atualizar dados vindos do backend (REST ou GraphQL), principalmente em apps React.

// Resumo do papel deles:

    // Fazem requisições HTTP (GET, POST, etc. ou queries GraphQL)
    // Gerenciam estado assíncrono (loading, erro, sucesso)
    // Mantêm cache e evitam requisições desnecessárias
    // Atualizam os dados automaticamente quando algo muda

// Em uma frase:

    // React Query, SWR e RTK Query → clientes de dados para APIs REST
    // Apollo e Relay → clientes de dados para APIs GraphQL

// Eles não são o backend, nem substituem a API — são a “ponte inteligente” entre o front-end e o servidor.

//--------

// Eles ficam no front-end, dentro da sua aplicação React, entre os componentes e a API.

// Pense neles como uma camada de acesso a dados.

// Onde eles ficam na prática?

    // 📁 No projeto React
    // São instalados via npm / yarn
    // Envolvem a aplicação com um Provider
    // São usados dentro dos componentes (ou hooks)

//--------

// React Query
    
    // Biblioteca para buscar, cachear e sincronizar dados de APIs REST.
    // Cuida de loading, erro, cache e refetch automático sem dor de cabeça.

// SWR

    // Abordagem simples baseada em stale-while-revalidate para busca de dados.
    // Muito leve, fácil de usar e ótima para apps React menores ou médios.

// RTK Query
    
    // Solução oficial do Redux Toolkit para data fetching.
    // Integra cache, invalidação e estado global sem precisar escrever reducers.

// Apollo
    
    // Cliente completo para GraphQL no front-end.
    // Gerencia cache, queries, mutations e subscriptions de forma robusta.

// Relay
    
    // Cliente GraphQL focado em performance e escalabilidade.
    // Exige mais configuração, mas é ideal para apps grandes e complexos.

// React Query

// Use quando:

    // Sua API é REST
    // Você não quer Redux
    // Quer algo poderoso e flexível

// 👉 Ótimo padrão “default” hoje em dia

// SWR

// Use quando:

    // Projeto pequeno ou médio
    // Precisa de algo simples e leve
    // Pouca lógica de cache complexa

// 👉 Ideal pra dashboards e apps rápidos

// RTK Query

// Use quando:

    // Já usa Redux Toolkit
    // Quer centralizar dados no store
    // Precisa de cache + invalidação integrados

// 👉 Redux sem sofrimento

// Apollo

// Use quando:

    // Usa GraphQL
    // Quer produtividade rápida
    // App médio ou grande

// 👉 O mais popular no mundo GraphQL

// Relay

// Use quando:

    // App muito grande
    // Performance é crítica
    // Time confortável com GraphQL avançado

// 👉 Overkill pra projetos pequenos

//--------------------

// Exemplos de uso:

// Exemplo 1️⃣ React Query (REST)
// Setup (uma vez)

    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

    const queryClient = new QueryClient();

    root.render(
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );

// Uso no componente

    import { useQuery } from "@tanstack/react-query";

    function Users() {
        const { data, isLoading, error } = useQuery({
            queryKey: ["users"],
            queryFn: () =>
                fetch("https://api.exemplo.com/users").then(res => res.json())
        });

        if (isLoading) return <p>Carregando...</p>;
        if (error) return <p>Erro!</p>;

        return data.map(user => <p key={user.id}>{user.name}</p>);
    }

// 👉 Aqui o React Query cuida do fetch, cache e estado.

// Exemplo 2️⃣ SWR (REST)

    import useSWR from "swr";

    const fetcher = url => fetch(url).then(res => res.json());

    function Users() {
        const { data, error, isLoading } = useSWR(
            "https://api.exemplo.com/users",
            fetcher
        );

        if (isLoading) return <p>Carregando...</p>;
        if (error) return <p>Erro!</p>;

        return data.map(user => <p key={user.id}>{user.name}</p>);
    }

// 👉 Mesma ideia, mas mais simples e direto.

// Exemplo 3️⃣ RTK Query (REST + Redux)
// Definição da API

    import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

    export const api = createApi({
        reducerPath: "api",
        baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
        endpoints: builder => ({
            getUsers: builder.query({
                query: () => "users"
            })
        })
    });

    export const { useGetUsersQuery } = api;

// Uso no componente

    function Users() {
        const { data, isLoading } = useGetUsersQuery();

        if (isLoading) return <p>Carregando...</p>;

        return data.map(user => <p key={user.id}>{user.name}</p>);
    }

// 👉 Aqui tudo fica integrado ao Redux.

// Exemplo 4️⃣ Apollo (GraphQL)
// Setup

    import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

    const client = new ApolloClient({
        uri: "/graphql",
        cache: new InMemoryCache()
    });

// Uso no componente

    import { gql, useQuery } from "@apollo/client";

    const GET_USERS = gql`
            query {
                users {
                id
                name
                }
            }
            `;

    function Users() {
        const { data, loading } = useQuery(GET_USERS);

        if (loading) return <p>Carregando...</p>;

        return data.users.map(u => <p key={u.id}>{u.name}</p>);
    }


// 👉 Apollo fala GraphQL nativamente.

// Exemplo 5️⃣ Relay (GraphQL)

    const UsersQuery = graphql`
        query UsersQuery {
            users {
            id
            name
            }
        }
        `;

    function Users() {
        const data = useLazyLoadQuery(UsersQuery, {});

        return data.users.map(u => <p key={u.id}>{u.name}</p>);
    }


// 👉 Relay é mais rígido, mas muito performático.

// Resumão mental 🧠

    // Componente React
    //    ↓
    // React Query / SWR / RTK Query / Apollo / Relay
    //    ↓
    // API (REST ou GraphQL)