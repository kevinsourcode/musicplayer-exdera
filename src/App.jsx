import Topbar from "./components/Topbar";
import PlayerControls from "./components/PlayerControls";
import Sidebar from "./components/Sidebar";
import TopMusic from "./components/TopMusic";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";

function App() {
  return (
    <div className='relative w-full h-screen pt-8 flex flex-col justify-between'>
      <div className='flex h-full pl-8'>
        <Sidebar />
        <div className='h-full w-full pl-6 flex flex-col'>
          <div className='flex flex-col h-full'>
            <Topbar />
            <TopMusic />
          </div>
          <div className='flex w-full justify-between max-h-[350px]'>
            <Popular />
            <Recommended />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-screen'>
        <PlayerControls />
      </div>
    </div>
  );
}

export default App;
