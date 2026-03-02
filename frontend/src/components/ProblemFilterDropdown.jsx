import { ChevronDown, X, Filter, CheckCircle } from "lucide-react";

const ProblemFilterDropdown = ({
  array,
  defaultName,
  filter,
  name,
  setName,
}) => {
  return (
    <div className="dropdown dropdown-center">
      <div
        tabIndex={0}
        role="button"
        className={`group flex items-center gap-2 px-2 py-1 rounded-lg
        transition-all duration-200 hover:opacity-90 cursor-pointer
        ${name === "" ? "bg-primary text-primary-content" : "bg-secondary text-primary-content"}`}
      >
        {/* Small screen → show Filter icon */}
        <Filter className="size-5 md:hidden" />

        {/* Medium & up → show Name + Chevron */}
        <div className="hidden md:flex items-center gap-2">
          <span>{defaultName}</span>
          <ChevronDown className="size-4 transition-transform duration-200 group-focus:rotate-180" />
        </div>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content mt-2 menu bg-base-300 rounded-box z-10 w-52 p-2 shadow-lg"
      >
        {array.map((string, idx) => (
          <li
            key={idx}
            className="rounded-lg hover:bg-accent hover:text-accent-content"
          >
            <button
              className="flex items-center justify-between w-full px-3 py-1.5 rounded-lg text-sm hover:bg-primary/80 hover:text-primary-content"
              onClick={() => {
                filter(string);
                setName(string);
              }}
            >
              <span>{string}</span>
              {name === string && <CheckCircle size={16} />}
            </button>
          </li>
        ))}

        {/* Clear Filter */}
        {name !== "" && (
          <li>
            <button
              onClick={() => {
                filter();
                setName("");
              }}
              className="flex items-center justify-center gap-2
              text-sm text-primary hover:bg-primary/10
              rounded-box py-2 transition-all duration-200"
            >
              <X className="size-4" />
              Clear Filter
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProblemFilterDropdown;
