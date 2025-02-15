import React, { useState } from "react";
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

  const bal = () => {};
  return (
    <div className="flex justify-between gap-5 bg-white/30 items-center px-10  relative w-full">
      <Link to="/" className="text-center text-6xl p-5 ">
        Rick & Morty <span className="text-blue-600">WiKi</span>{" "}
      </Link>

      <div className="flex justify-around text-center gap-5 max-[800px]:flex-col items-cente">
        <button
          className="max-[800px]:flex hidden bg-slate-400 p-5 rounded-xl"
          onClick={setActiveTrue}
        >
          _
        </button>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 text-xl max-[800px]:hidden underline"
              : "text-slate-600 text-xl max-[800px]:hidden hover:shadow-lg"
          }
        >
          Characters
        </NavLink>
        <NavLink
          to="/episodes"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 text-xl max-[800px]:hidden underline"
              : "text-slate-600 text-xl max-[800px]:hidden hover:shadow-lg"
          }
        >
          Episodes
        </NavLink>
        <NavLink
          to="/location"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 text-xl max-[800px]:hidden underline"
              : "text-slate-600 text-xl max-[800px]:hidden hover:shadow-lg"
          }
        >
          Locations
        </NavLink>
      </div>

      <div
        className={clx(
          "flex min-[800px]:justify-around text-center gap-5 max-[800px]:flex-col items-center max-[800px]:fixed top-0 max-[800px]:bg-slate-100 max-[800px]:w-full max-[800px]:h-screen z-50 duration-300 transition-all min-[800px]:hidden",
          active ? "right-[0%]" : "-right-full"
        )}
      >
        <button
          className="max-[800px]:flex hidden bg-slate-400 p-5 roundel-xl"
          onClick={setActiveFalse}
        >
          X
        </button>
        <NavLink
          to="/"
          className="text-blue-600 text-xl px-2"
          onClick={setActiveFalse}
        >
          Characters
        </NavLink>
        <NavLink
          to="/episodes"
          className="text-blue-600 text-xl "
          onClick={setActiveFalse}
        >
          Episodes
        </NavLink>
        <NavLink
          to="/location"
          className="text-blue-600 text-xl "
          onClick={setActiveFalse}
        >
          Locations
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
