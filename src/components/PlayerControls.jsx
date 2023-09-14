import { useState, useEffect } from "react";

import { FiFastForward } from "react-icons/fi";
import useSound from "use-sound";
import violet from "../assets/mp3/tory.mp3";

const PlayerControls = (props) => {
  const [playing, setPlaying] = useState(false);

  const [play, { pause, duration, sound }] = useSound(violet);

  const [currTime, setCurrTime] = useState({
    min: "0",
    sec: "00",
  });

  const [time, setTime] = useState({
    min: "3",
    sec: "46",
  });

  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    const time = {
      min: min,
      sec: secRemain,
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (playing) {
      pause(); // this will pause the audio
      setPlaying(false);
    } else {
      play(); // this will play the audio
      setPlaying(true);
    }
  };

  return (
    <div className='rounded-l-full rounded-r-full border p-4 flex gap- items-center z-1000 bg-white'>
      <div className='flex items-center pl-6 gap-6'>
        <img src={props.albumArt} alt='' className='rounded-full w-[60px] h-[60px]' />
        <div className='flex flex-col pl-6 w-[300px]'>
          <h5 className='text-2xl font-bold'>{props.title}</h5>
          <p className='text-xl'>{props.artist}</p>
        </div>
      </div>
      <div className='flex w-full gap-10 items-center '>
        <div className='flex items-center gap-4 w-full justify-between'>
          <div className='flex items-center gap-4 pl-24'>
            <FiFastForward className=' transform rotate-180 h-6 w-6' />
            {!playing ? (
              <svg xmlns='http://www.w3.org/2000/svg' width='54' height='54' viewBox='0 0 54 54' fill='none' onClick={playingButton}>
                <path d='M20 17L36 27L20 37V17Z' stroke='#5E77FB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                <circle cx='27' cy='27' r='25.75' stroke='black' stroke-width='2.5' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' width='54' height='54' viewBox='0 0 54 54' fill='none' onClick={playingButton}>
                <path d='M19 17C19 15.8954 19.8954 15 21 15V15C22.1046 15 23 15.8954 23 17V37C23 38.1046 22.1046 39 21 39V39C19.8954 39 19 38.1046 19 37V17Z' fill='#5E77FB' />
                <path d='M31 17C31 15.8954 31.8954 15 33 15V15C34.1046 15 35 15.8954 35 17V37C35 38.1046 34.1046 39 33 39V39C31.8954 39 31 38.1046 31 37V17Z' fill='#5E77FB' />
                <circle cx='27' cy='27' r='25.75' stroke='black' />
              </svg>
            )}

            <FiFastForward className='w-6 h-6' />
          </div>

          <div>
            <div className='time flex gap-2'>
              <p>
                {currTime.min}:{currTime.sec}
              </p>
              <input
                type='range'
                min='0'
                max={duration / 1000}
                default='0'
                value={seconds}
                className='timeline w-[800px]'
                onChange={(e) => {
                  sound.seek([e.target.value]);
                }}
              />
              <p>
                {time.min}:{time.sec}
              </p>
            </div>
          </div>

          <div className='flex gap-6 items-center pr-4'>
            <svg xmlns='http://www.w3.org/2000/svg' width='23' height='20' viewBox='0 0 23 20' fill='none'>
              <path d='M20.4426 2.54219C18.3873 0.485938 15.054 0.485938 12.9987 2.54219L11.9845 3.55639L10.9703 2.54219C8.91472 0.486619 5.58198 0.486619 3.52642 2.54219C1.47085 4.59775 1.47085 7.93049 3.52642 9.98605L4.54062 11.0003L11.9845 18.4441L19.4284 11.0003L20.4426 9.98605C22.4988 7.93077 22.4988 4.59747 20.4426 2.54219Z' stroke='black' />
              <path d='M16.2646 9.64891C18.3331 9.67188 18.8162 11.574 17.6749 13.1304C16.5335 14.6867 16.2646 14.7713 16.2646 14.7713' stroke='#5E77FB' />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='23' height='22' viewBox='0 0 23 22' fill='none'>
              <path
                d='M21.9816 7.52769C21.3493 6.23077 20.2631 5.50462 19.2124 4.80154C18.4293 4.27693 17.6908 3.78154 17.1678 3.07231L17.0709 2.94154C16.7632 2.52769 16.4124 2.05846 16.3586 1.66462C16.3539 1.63231 16.3354 1.60616 16.3262 1.57385C16.3124 1.52 16.297 1.46923 16.2724 1.42C16.2539 1.38 16.2277 1.34462 16.2001 1.30769C16.1678 1.26616 16.137 1.22616 16.097 1.19231C16.0585 1.15847 16.017 1.13539 15.9739 1.10923C15.9339 1.08616 15.897 1.06462 15.8524 1.04923C15.7986 1.02923 15.7431 1.02154 15.6847 1.01539C15.6555 1.01385 15.6308 1 15.6001 1C15.5816 1 15.5663 1.00923 15.5493 1.01077C15.5308 1.01231 15.5139 1.00462 15.4955 1.00769C15.4616 1.01231 15.4354 1.03077 15.4032 1.04C15.3509 1.05385 15.3016 1.0677 15.2555 1.09231C15.2124 1.11385 15.1755 1.14154 15.1385 1.17231C15.0985 1.20308 15.0601 1.23385 15.0278 1.27231C14.9955 1.30923 14.9724 1.34923 14.9478 1.39077C14.9231 1.43385 14.9001 1.47539 14.8831 1.52308C14.8662 1.57077 14.8601 1.62 14.8539 1.67231C14.8462 1.70308 14.8308 1.73385 14.8308 1.76923V15.4769C14.1862 15.0862 13.3923 14.8462 12.5232 14.8462C10.4016 14.8462 8.677 16.2262 8.677 17.9231C8.677 19.62 10.4016 21 12.5232 21C14.6447 21 16.3693 19.62 16.3693 17.9231V8.95692C17.5247 9.39846 19.4155 10.5231 19.9355 13.1492C19.8385 13.2923 19.7462 13.4477 19.6385 13.5692C19.357 13.8877 19.3893 14.3738 19.7078 14.6538C19.8539 14.7831 20.0355 14.8462 20.2155 14.8462C20.4293 14.8462 20.6401 14.7569 20.7924 14.5846C20.997 14.3523 21.1801 14.0769 21.3555 13.7938C21.3755 13.7692 21.3909 13.7462 21.4077 13.72C22.0293 12.68 22.4416 11.3646 22.5201 10.0646C22.5708 9.22923 22.3847 8.35231 21.9816 7.52769ZM12.5232 19.4615C11.2724 19.4615 10.2155 18.7569 10.2155 17.9231C10.2155 17.0892 11.2724 16.3846 12.5232 16.3846C13.7739 16.3846 14.8308 17.0892 14.8308 17.9231C14.8308 18.7569 13.7739 19.4615 12.5232 19.4615ZM20.9862 9.9677C20.9647 10.3277 20.9093 10.6877 20.8308 11.04C19.7493 8.86923 17.7878 7.73846 16.3693 7.32V4.49385C16.9724 5.13692 17.6724 5.61846 18.3585 6.07693C19.2801 6.69385 20.1508 7.27693 20.6016 8.20154C20.8847 8.77847 21.0201 9.40769 20.9862 9.9677Z'
                fill='#5E77FB'
                stroke='#5E77FB'
              />
              <path d='M10.9847 1H1.75397C1.32936 1 0.984741 1.34462 0.984741 1.76923C0.984741 2.19385 1.32936 2.53846 1.75397 2.53846H10.9847C11.4094 2.53846 11.754 2.19385 11.754 1.76923C11.754 1.34462 11.4094 1 10.9847 1Z' fill='black' stroke='black' />
              <path d='M10.9847 5.61536H1.75397C1.32936 5.61536 0.984741 5.95997 0.984741 6.38458C0.984741 6.8092 1.32936 7.15382 1.75397 7.15382H10.9847C11.4094 7.15382 11.754 6.8092 11.754 6.38458C11.754 5.95997 11.4094 5.61536 10.9847 5.61536Z' fill='black' stroke='black' />
              <path d='M6.36936 10.2308H1.75397C1.32936 10.2308 0.984741 10.5754 0.984741 11C0.984741 11.4246 1.32936 11.7692 1.75397 11.7692H6.36936C6.79397 11.7692 7.13859 11.4246 7.13859 11C7.13859 10.5754 6.79397 10.2308 6.36936 10.2308Z' fill='black' stroke='black' />
              <path d='M6.36936 14.8461H1.75397C1.32936 14.8461 0.984741 15.1907 0.984741 15.6154C0.984741 16.04 1.32936 16.3846 1.75397 16.3846H6.36936C6.79397 16.3846 7.13859 16.04 7.13859 15.6154C7.13859 15.1907 6.79397 14.8461 6.36936 14.8461Z' fill='black' stroke='black' />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='21' viewBox='0 0 22 21' fill='none'>
              <path d='M2.15645 9.22803C1.9528 9.22803 1.78711 9.06706 1.78711 8.8692C1.78711 6.30116 3.94296 4.2119 6.59287 4.2119H15.464V1L20.5284 4.5699L15.464 8.13979L15.464 4.92789H6.59287C4.35075 4.92789 2.52666 6.69595 2.52666 8.8692C2.52666 9.06706 2.36058 9.22803 2.15645 9.22803ZM16.2035 2.40767V6.73296L19.2716 4.5699L16.2035 2.40767Z' fill='#5E77FB' stroke='#5E77FB' />
              <path d='M6.59271 19.8141L6.59119 19.813L1.52832 16.2442L6.59271 12.6735V15.8854H15.4638C17.7059 15.8854 19.53 14.1173 19.53 11.9441C19.53 11.7467 19.6957 11.5861 19.8994 11.5861C20.1035 11.5861 20.2696 11.7467 20.2696 11.9441C20.2696 14.5126 18.1137 16.6022 15.4638 16.6022H6.59271V19.8123V19.8141ZM5.85317 14.0811L2.78513 16.2442L5.85317 18.4064V14.0811Z' fill='white' stroke='black' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
