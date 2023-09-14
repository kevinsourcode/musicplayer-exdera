import PopularSongDetail from "./PopularSongDetail";

const Popular = () => {
  return (
    <div className='overflow-y-scroll'>
      <h2 className='font-bold text-3xl text-black'>Popular</h2>
      <div>
        <PopularSongDetail />
      </div>
    </div>
  );
};

export default Popular;