export default function TextInput({ id, label, value, setValue }) {
  return (
    <div style={{display: "flex", gap: "2rem", alignItems: "center"}}>
      <label htmlFor={id}>{label}:</label>
      <input
        type="text"
        name={label}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
