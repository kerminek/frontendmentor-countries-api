import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  darkMode: boolean | null;
  darkModeSet: React.Dispatch<React.SetStateAction<boolean>> | null;
}

const Header = ({ darkMode, darkModeSet }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-full shadow bg-dmTxt dark:bg-dmElems py-6 px-4 md:px-12">
      <div className="flex justify-between items-center max-w-screen-2xl m-auto">
        <div className="cursor-pointer" onClick={() => navigate("/", { replace: true })}>
          <h1 className="md:text-2xl font-[800]">Where in the world?</h1>
        </div>
        <div className="flex gap-1 cursor-pointer text-[14px] md:text-base" onClick={() => darkModeSet!(!darkMode)}>
          <div className="block dark:hidden">
            <DarkModeOutlinedIcon fontSize="small" />
          </div>
          <div className="hidden dark:block">
            <DarkModeIcon fontSize="small" />
          </div>
          <p className="font-[600] whitespace-nowrap">Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
