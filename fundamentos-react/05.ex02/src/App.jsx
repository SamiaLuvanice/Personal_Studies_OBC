import Card from "./components/Card";
import Button from "./components/Button";
import posterImg1 from "./assets/1image.png";
import posterImg2 from "./assets/2image.png";
import posterImg3 from "./assets/3image.png";

function App() {
  return (
    <>
      <h1>Execício 02</h1>
      <Button text="ir ao Blog" />
      <Card title="Poster: Star Wars (1977)" poster={posterImg1} />
      <Card title="Poster: O Senhor dos Anéis (2001)" poster={posterImg2} />
      <Card title="Poster: Matrix (1999)" poster={posterImg3} />
    </>
  );
}

export default App;
