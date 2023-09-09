import React, { useEffect, useState } from "react";
import { FaUserNinja } from "react-icons/fa";
const Header = () => {
  return (
    <div className="bg-purple-400 h-20 sticky top-0 z-9999">
      <div className="flex w-full justify-center items-center h-full gap-1">
        <FaUserNinja size={"40px"} />
        <h1 className="font-bold text-4xl font-serif underline underline-offset-4">
          TaskNinja
        </h1>
      </div>
    </div>
  );
};

export default Header;
