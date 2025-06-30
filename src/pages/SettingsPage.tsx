import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function SettingsPage() {
  return (
    <>
      <Topbar />
      <div className="flex items-start">
        <Sidebar />
        <main className="flex-1 bg-gray-50 min-h-[180vh]">Olamide is cooking?</main>
      </div>
    </>
  );
}

export default SettingsPage;
