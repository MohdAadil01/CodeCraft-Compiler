import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
function Header() {
  return (
    <div className="p-3 h-[60px] flex items-center justify-between w-full bg-gray-900 text-white">
      <h2 className="font-bold select-none text-2xl">
        <Link to={"/"}>CodeCraft </Link>
      </h2>
      <ul className="flex gap-2">
        <li>
          <Link to={"/compiler"}>
            <Button variant={"secondary"}>Compiler</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
