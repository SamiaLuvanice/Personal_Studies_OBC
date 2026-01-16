import { useRef } from "react";

export default function RefExemplo() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "rgba(252, 156, 156, 1)";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focar no Input</button>
      <hr />
    </div>
  );
}
