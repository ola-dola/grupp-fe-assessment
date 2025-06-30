import { Menu } from "lucide-react";
import Logo from "../assets/logo.svg";

function Topbar() {
  return (
    <header className="p-4 bg-white top-0 fixed z-10 flex items-center justify-between w-full border-b border-gray-200 md:hidden">
      <img src={Logo} alt="App Logo" className="h-8 w-auto" />

      <div className="p-1 focus:bg-gray-100">
        <Menu />
      </div>
    </header>
  );
}

export default Topbar;
