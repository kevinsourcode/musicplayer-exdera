import { FiHome, FiRadio, FiHeart, FiMic, FiCalendar, FiLayers } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className=' border border-gray-400 p-8 bg-white rounded-xl'>
      <div className='flex flex-col items-center relative -top-12 -mb-6'>
        <img className='bg-black rounded-full h-10 w-10' />
        <h4>Ankur Tripathi</h4>
        <p>tripathiankur913@gmail.com</p>
      </div>
      <div className='mb-8'>
        <h3 className='text-2xl font-bold mb-2'>Browse</h3>
        <ul className='flex flex-col gap-2'>
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
        <h3 className='text-2xl font-bold mb-2'>Discover</h3>
        <ul className='flex flex-col gap-2'>
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
