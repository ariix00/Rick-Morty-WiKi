import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { clx } from "../../utils/clx";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const setActiveTrue = () => {
    setActive(true);
  };
  const setActiveFalse = () => {
    setActive(false);
  };

  return (
    <div className="flex justify-between gap-5 items-center px-10 relative overflow-hidden">
      <Link to="/" className="text-center text-6xl p-1">
        <img src="/public/title.png" alt="" className="min-w-96 max-w-96" />
      </Link>

      <div className="flex justify-around text-center gap-5 max-[800px]:flex-col items-center">
        <button
          className="max-[800px]:flex hidden bg-lime-300 hover:brightness-75 active:brightness-50 rounded-xl p-2 duration-200"
          onClick={setActiveTrue}
        >
          <img src="src/assets/menu.png" alt="" className="min-w-10 w-10" />
        </button>
        <NavLink
          to="/characters"
          className={({ isActive }) =>
            isActive
              ? "text-lime-300 text-2xl max-[800px]:hidden"
              : "text-slate-600 text-2xl max-[800px]:hidden hover:shadow-lg"
          }
        >
          Characters
        </NavLink>
        <NavLink
          to="/episodes"
          className={({ isActive }) =>
            isActive
              ? "text-lime-300 text-2xl max-[800px]:hidden"
              : "text-slate-600 text-2xl max-[800px]:hidden hover:shadow-lg"
          }
        >
          Episodes
        </NavLink>
        <NavLink
          to="/location"
          className={({ isActive }) =>
            isActive
              ? "text-lime-300 text-2xl max-[800px]:hidden"
              : "text-slate-600 text-2xl max-[800px]:hidden hover:shadow-lg"
          }
        >
          Locations
        </NavLink>
      </div>

      <div
        className={clx(
          "flex text-center gap-5 flex-col items-end fixed top-0 bg-black/80 backdrop-blur-sm w-full h-screen z-50 duration-300 transition-all min-[800px]:hidden overflow-x-hidden",
          active ? "right-[0%]" : "-right-full"
        )}
      >
        <button
          className="max-[800px]:flex hidden bg-lime-300 p-2 px-4 roundel-xl text-4xl hover:brightness-75 duration-200"
          onClick={setActiveFalse}
        >
          X
        </button>
        <div className="flex flex-col mt-10 gap-5 w-screen">
          <NavLink
            to="/characters"
            className="text-lime-300 text-3xl px-2 w-full bg-lime-300/20 hover:brightness-75 active:brightness-50 duration-300 p-2"
            onClick={setActiveFalse}
          >
            Characters
          </NavLink>
          <NavLink
            to="/episodes"
            className="text-lime-300 text-3xl bg-lime-300/20 hover:brightness-75 active:brightness-50 duration-300 p-2"
            onClick={setActiveFalse}
          >
            Episodes
          </NavLink>
          <NavLink
            to="/location"
            className="text-lime-300 text-3xl bg-lime-300/20 hover:brightness-75 active:brightness-50 duration-300 p-2"
            onClick={setActiveFalse}
          >
            Locations
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
