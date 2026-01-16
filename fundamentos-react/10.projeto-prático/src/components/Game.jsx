export function Game({ title, cover, onRemove }) {
  return (
    <div className="game">
      <img src={cover} alt={`Capa do jogo ${title}`} />
      <h2>{title}</h2>
      <button onClick={onRemove}>Remover</button>
    </div>
  );
}
