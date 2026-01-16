export default function Button({ active, children, icon }) {
  const backgroundColor = active ? "bg-zinc-200 dark:bg-zinc-900" : "";
  return (
    <button
      className={`
            py-2 px-4 w-full text-left rounded-lg 
            ${backgroundColor} transition-colors
            hover:bg-zinc-200 hover:dark:bg-zinc-900
            `}
    >
      {icon}
      {children}
    </button>
  );
}
