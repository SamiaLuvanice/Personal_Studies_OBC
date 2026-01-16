import { FiSearch } from "react-icons/fi";

export default function SearchForm() {
  return (
    <form
      className=" min-w-0 flex-grow flex"
      onSubmit={(ev) => ev.preventDefault()}
    >
      <input
        className="
        min-w-0 w-full p-2 rounded-l-lg border-2 border-transparent
        bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50
        focus:outline-none focus:border-primary-400
      "
        type="text"
        placeholder="Pesquisar..."
      />
      <button
        className="
      min-w-0 py-2 px-4 rounded-r-lg border-2 border-transparent
      bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50
      focus:outline-none focus:border-primary-400 focus:text-primary-400
      hover:border-primary-400 hover:text-primary-400transition-colors
      "
      >
        <FiSearch />
      </button>
    </form>
  );
}
