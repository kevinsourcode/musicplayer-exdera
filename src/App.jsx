import Topbar from "./components/Topbar";
import PlayerControls from "./components/PlayerControls";
import Sidebar from "./components/Sidebar";
import TopMusic from "./components/TopMusic";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";

function App() {
  return (
    <div className='relative w-full h-screen pt-8 pl-8 pr-8 flex flex-col justify-between'>
      <div className='flex h-full'>
        <Sidebar />
        <div className='h-full w-full p-6 flex flex-col '>
          <div className='flex flex-col flex-1'>
            <Topbar />
            <TopMusic />
          </div>
          <div className='flex flex-1 w-full justify-between'>
            <Popular />
            <Recommended />
          </div>
        </div>
      </div>
      <div>
        <PlayerControls />
      </div>
    </div>
  );
}

export default App;
