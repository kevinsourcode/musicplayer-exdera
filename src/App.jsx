import Topbar from "./components/Topbar";
import PlayerControls from "./components/PlayerControls";
import Sidebar from "./components/Sidebar";
import TopMusic from "./components/TopMusic";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";

function App() {
  return (
    <div className='relative w-full h-screen overflow-hidden p-8'>
      <div className='flex'>
        <Sidebar />
        <div className='w-full p-6'>
          <Topbar />
          <TopMusic />
          <div className='flex w-full justify-between'>
            <Popular />
            <Recommended />
          </div>
        </div>
      </div>
      <PlayerControls />
    </div>
  );
}

export default App;
