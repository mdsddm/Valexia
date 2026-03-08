import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-base-100 text-base-content">
      <h1 className="text-5xl md:text-6xl font-bold text-primary">404</h1>

      <p className="text-xl font-semibold mt-2">Page Not Found</p>

      <div className="divider w-80 mx-auto my-4"></div>

      <p className="opacity-70 max-w-lg">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link to="/" className="btn btn-primary mt-8 gap-2">
        Back to Home
        <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
          <path
            d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
