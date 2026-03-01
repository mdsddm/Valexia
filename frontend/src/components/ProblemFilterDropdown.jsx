import { ChevronDown, X, Filter } from "lucide-react";

const ProblemFilterDropdown = ({
  array,
  defaultName,
  filter,
  name,
  setName,
}) => {
  return (
    <div className="dropdown dropdown-hover dropdown-center">
      <div
        tabIndex={0}
        role="button"
        className="group flex items-center mt-1 gap-2 px-4 py-2 rounded-lg
        transition-all duration-200
        bg-primary text-primary-content
        hover:opacity-90 cursor-pointer"
      >
        {/* Small screen → show Filter icon */}
        <Filter className="size-5 md:hidden" />

        {/* Medium & up → show Name + Chevron */}
        <div className="hidden md:flex items-center gap-2">
          <span>{name === "" ? defaultName : name}</span>
          <ChevronDown className="size-4 transition-transform duration-200 group-focus:rotate-180" />
        </div>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-300 rounded-box z-10 w-52 p-2 shadow-lg"
      >
        {array
          .filter((string) => string !== name)
          .map((string, idx) => (
            <li
              key={idx}
              className="rounded-box hover:bg-accent hover:text-accent-content"
            >
              <button
                className="w-full text-left rounded-box"
                onClick={() => {
                  filter(string);
                  setName(string);
                }}
              >
                {string}
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
