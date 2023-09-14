const Topbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center w-full'>
        <img src='' alt='' className='w-3 h-3 bg-black ' />
        <input placeholder='Search for Songs, Artists, etc..' className='w-full ml-10 bg-transparent' />
      </div>
      <div className='flex gap-4 items-center'>
        <a className='py-3 px-4 rounded-l-2xl rounded-r-2xl w-52 text-center border border-gray-400 font-bold'>Upgrade To Premium</a>
        <img className='w-3 h-3 bg-black' src='' alt='' />
        <img className='w-3 h-3 bg-black' src='' alt='' />
      </div>
    </div>
  );
};

export default Topbar;
