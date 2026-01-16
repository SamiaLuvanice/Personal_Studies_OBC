import Container from "./components/Container";
import Header from "./components/Header";
import UserContext from "./contexts/UserContext";

export default function App() {
  const user = {
    name: 'Alice',
    email: 'alice@example.com'
  }

  return (
    <>
    <UserContext.Provider value={user}>
      <Header />
      <h1>Usando Contexto</h1>
      <Container>
        <p>Este é nosso APP com contexto.</p>
      </Container>
    </UserContext.Provider>
    <div>
      {/* Não há acesso ao contexto */}
    </div>
</>
  );
}
