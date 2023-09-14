import { FiHome, FiRadio, FiHeart, FiMic, FiCalendar, FiLayers } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className='rounded border border-gray-400 p-4'>
      <div className='flex flex-col items-center relative -top-8'>
        <img className='bg-black rounded-full h-10 w-10' />
        <h4>Ankur Tripathi</h4>
        <p>tripathiankur913@gmail.com</p>
      </div>
      <div>
        <h3 className='text-2xl font-bold'>Browse</h3>
        <ul>
          <li className='flex items-center gap-2'>
            <FiHome />
            Home
          </li>
          <li className='flex items-center gap-2'>
            <FiLayers />
            Playlist
          </li>
          <li className='flex items-center gap-2'>
            <FiHome />
            Home
          </li>
          <li className='flex items-center gap-2'>
            <FiHome />
            Home
          </li>
        </ul>
      </div>
      <div>
        <h3 className='text-2xl font-bold'>Discover</h3>
        <ul>
          <li className='flex items-center gap-2'>
            <FiRadio />
            Radio
          </li>
          <li className='flex items-center gap-2'>
            <FiCalendar />
            Event
          </li>
          <li className='flex items-center gap-2'>
            <FiMic />
            Podcast
          </li>
          <li className='flex items-center gap-2'>
            <FiHeart />
            For You
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
