import { useState } from "react";
import { useAppData } from "../context/AppContext";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuth, user } = useAppData();
  return (
   <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between pl-2 pr-6 md:px-12 py-4 border-b border-white/6 bg-[#080b14]/80 backdrop-blur-xl h-16">
      <Link to={"/"}>
        <img
          src="/jobpilot logo.png"
          alt="JobPilot AI"
          className="h-25 md:h-30 w-35 md:w-40 object-contain mix-blend-screen"
        />
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
        <Link to={"/analyse"} className="hover:text-white transition-colors">
          Analyse
        </Link>
        <Link to={"/jobmatcher"} className="hover:text-white transition-colors">
          JobMatcher
        </Link>
        <Link
          to={"/resumebuilder"}
          className="hover:text-white transition-colors"
        >
          ResumeBuilder
        </Link>
        <Link
          to={"/interviewprep"}
          className="hover:text-white transition-colors"
        >
          InterviewPrep
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-3">
        {isAuth ? (
          <Link
            to={"/account"}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/user.webp"
              alt=""
              className="w-8 h-8 rounded-full object-cover ring-2 p-0.5 ring-white/10"
            />
            <span className="text-sm text-white/70">
              {user?.name?.split(" ")[0]}
            </span>
          </Link>
        ) : (
          <>
            <Link
              to={"/login"}
              className="text-sm text-white/50 hover:text-white transition-colors px-4 py-2"
            >
              Sign in
            </Link>
            <Link
              to={"/login"}
              className="btn-primary text-sm px-5 py-2 rounded-lg"
            >
              Get Started Free
            </Link>
          </>
        )}
      </div>

      {/* mobile view */}
      <button
        className="md:hidden text-white/70 hover:text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </button>

      {open && (
        <div className="absolute top-full inset-x-0 bg-[#080b14]/95 backdrop-blur-xl border-b border-white/6 flex flex-col gap-4 px-6 py-6 md:hidden">
          <Link to={"/analyse"} className="hover:text-white transition-colors">
            Analyse
          </Link>
          <Link
            to={"/jobmatcher"}
            className="hover:text-white transition-colors"
          >
            JobMatcher
          </Link>
          <Link
            to={"/resumebuilder"}
            className="hover:text-white transition-colors"
          >
            ResumeBuilder
          </Link>
          <Link
            to={"/interviewprep"}
            className="hover:text-white transition-colors"
          >
            InterviewPrep
          </Link>

          {isAuth ? (
            <Link
              to={"/account"}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src="/user.webp"
                alt=""
                className="w-8 h-8 rounded-full object-cover ring-2 p-0.5 ring-white/10"
              />
              <span className="text-sm text-white/70">
                {user?.name?.split(" ")[0]}
              </span>
            </Link>
          ) : (
            <>
              <Link
                to={"/login"}
                className="text-sm text-white/50 hover:text-white transition-colors px-4 py-2"
              >
                Sign in
              </Link>
              <Link
                to={"/login"}
                className="btn-primary text-sm px-5 py-2 rounded-lg"
              >
                Get Started Free
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
