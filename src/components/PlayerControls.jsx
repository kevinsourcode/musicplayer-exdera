const PlayerControls = () => {
  return (
    <div className='rounded-l-full rounded-r-full border border-gray-400 p-6 flex gap-4 items-center'>
      <img src='' alt='' className='w-6 h-6 bg-black' />
      <div className='flex flex-col'>
        <h5>Available (Natural Visual)</h5>
        <p>Justin Bieber</p>
      </div>
      <div className='flex gap-4 items-center'>
        <img src='' alt='' className='w-6 h-6 bg-black' />
        <img src='' alt='' className='w-10 h-10 bg-black' />
        <img src='' alt='' className='w-6 h-6 bg-black' />
        <p>4:01</p>
        <progress className='w-[825px]'></progress>
        <p>4:54</p>
        <img src='' alt='' className='w-6 h-6 bg-black' />
        <img src='' alt='' className='w-6 h-6 bg-black' />
        <img src='' alt='' className='w-6 h-6 bg-black' />
      </div>
    </div>
  );
};

export default PlayerControls;
