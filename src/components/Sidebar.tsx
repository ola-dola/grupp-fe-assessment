import Logo from "../assets/logo.svg";

function Sidebar() {
  return (
    <aside className="py-8 px-6 w-[280px] bg-white hidden md:block border-r border-gray-200 fixed top-0 bottom-0">
      <div>
        <img src={Logo} alt="App Logo" className="h-8 w-auto" />
      </div>

     
    </aside>
  );
}

export default Sidebar;
