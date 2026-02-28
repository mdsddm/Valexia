import { ChevronDown, X } from "lucide-react";
const ProblemFilterDropdown = ({
  array,
  defaultName,
  filter,
  name,
  setName,
}) => {
  return (
    <div className="dropdown dropdown-hover">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-btn rounded-lg transition-all duration-200 bg-primary text-primary-content"
      >
        {name === "" ? defaultName : name}
        <ChevronDown />
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2"
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
        {/* Clear LI */}
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
