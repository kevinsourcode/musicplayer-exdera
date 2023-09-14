//side navigation bar

const Sidebar = () => {
  return (
    <div className='bg-white rounded-xl h-[700px]'>
      <div className='flex flex-col relative items-center -mt-12 mb-[20px] p-8'>
        <img src='src/assets/proPic.png' className='' />
        <div className='-mt-8 flex flex-col items-center'>
          <h4 className='font-bold text-[18px]'>Ankur Tripathi</h4>
          <p className='text-main-accent text-[15px]'>tripathiankur913@gmail.com</p>
        </div>
      </div>
      <div className='mb-8 w-full flex flex-col'>
        <h3 className='text-2xl font-bold mb-[15px] pl-8'>Browse</h3>
        <ul className='flex flex-col gap-[33px] w-full '>
          <div className='group flex gap-6'>
            <div className='h-full rounded-t-md rounded-b-md bg-main-accent w-2 text-transparent '>h </div>
            <li className='flex items-center gap-2 font-bold w-full text-black hover:cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='17' height='18' viewBox='0 0 17 18' fill='none'>
                <path d='M5.79999 17V9H10.6V17' stroke='#5E77FB' />
                <path d='M1 6.6L8.2 1L15.4 6.6V15.4C15.4 16.2837 14.6837 17 13.8 17H2.6C1.71634 17 1 16.2837 1 15.4V6.6Z' stroke='black' />
              </svg>
              Home
            </li>
          </div>
          <div className='group flex gap-6'>
            <div className='h-full rounded-t-md rounded-b-md bg-transparent w-2 text-transparent group-hover:bg-main-accent'>h </div>
            <li className='flex items-center gap-2 font-bold w-full text-gray-600 hover:cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
                <g opacity='0.5'>
                  <path d='M14.4171 4.71644H2.99009C2.74293 4.71644 2.54071 4.51422 2.54071 4.26706C2.54071 4.01991 2.74293 3.81769 2.99009 3.81769H14.4171C14.6643 3.81769 14.8665 4.01991 14.8665 4.26706C14.8665 4.51422 14.6643 4.71644 14.4171 4.71644Z' fill='black' stroke='black' />
                  <path d='M13.4285 1.89875H3.97873C3.75404 1.89875 3.56787 1.71258 3.56787 1.4879V1.41086C3.56787 1.18617 3.75404 1 3.97873 1H13.4285C13.6532 1 13.8394 1.18617 13.8394 1.41086V1.4879C13.8394 1.71258 13.6532 1.89875 13.4285 1.89875Z' fill='black' stroke='black' />
                  <path d='M15.2806 7.30307H2.12665C1.50715 7.30307 1 7.81022 1 8.42972V15.8733C1 16.4928 1.50715 17 2.12665 17H15.2838C15.9033 17 16.4104 16.4928 16.4104 15.8733V8.42972C16.4072 7.81022 15.9001 7.30307 15.2806 7.30307Z' stroke='black' />
                  <path d='M6.90735 9.935L10.6468 12.3389L6.90735 14.7429V9.935Z' stroke='#5E77FB' />
                </g>
              </svg>
              Playlists
            </li>
          </div>
          <div className='group flex gap-6'>
            <div className='h-full rounded-t-md rounded-b-md bg-transparent w-2 text-transparent group-hover:bg-main-accent'>h </div>
            <li className='flex items-center gap-2 font-bold w-full text-gray-600 hover:cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='17' height='18' viewBox='0 0 17 18' fill='none'>
                <g opacity='0.5'>
                  <path d='M15.2222 17V15.2222C15.2222 13.2585 13.6303 11.6667 11.6667 11.6667H4.55556C2.59188 11.6667 1 13.2585 1 15.2222V17' stroke='black' />
                  <path d='M11.6667 4.55556C11.6667 6.51923 10.0748 8.11111 8.1111 8.11111C6.14742 8.11111 4.55554 6.51923 4.55554 4.55556C4.55554 2.59188 6.14742 1 8.1111 1C10.0748 1 11.6667 2.59188 11.6667 4.55556Z' stroke='#5E77FB' />
                </g>
              </svg>
              Artists
            </li>
          </div>
          <div className='group flex gap-6'>
            <div className='h-full rounded-t-md rounded-b-md bg-transparent w-2 text-transparent group-hover:bg-main-accent'>h </div>
            <li className='flex items-center gap-2 font-bold w-full text-gray-600 hover:cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
                <g opacity='0.5'>
                  <path d='M14.8869 4.71644H3.45988C3.21272 4.71644 3.0105 4.51422 3.0105 4.26706C3.0105 4.01991 3.21272 3.81769 3.45988 3.81769H14.8869C15.1341 3.81769 15.3363 4.01991 15.3363 4.26706C15.3363 4.51422 15.1341 4.71644 14.8869 4.71644Z' fill='#5E77FB' stroke='#5E77FB' />
                  <path d='M13.8983 1.89875H4.44852C4.22383 1.89875 4.03766 1.71258 4.03766 1.4879V1.41086C4.03766 1.18617 4.22383 1 4.44852 1H13.8983C14.123 1 14.3091 1.18617 14.3091 1.41086V1.4879C14.3091 1.71258 14.123 1.89875 13.8983 1.89875Z' fill='#5E77FB' stroke='#5E77FB' />
                  <path d='M15.2806 7.30307H2.12665C1.50715 7.30307 1 7.81022 1 8.42972V15.8733C1 16.4928 1.50715 17 2.12665 17H15.2838C15.9033 17 16.4104 16.4928 16.4104 15.8733V8.42972C16.4072 7.81022 15.9001 7.30307 15.2806 7.30307Z' stroke='black' />
                </g>
              </svg>
              Albums
            </li>
          </div>
        </ul>
      </div>
      <div className='mb-8 w-full flex flex-col'>
        <h3 className='text-2xl font-bold mb-[15px] pl-8'>Discover</h3>
        <ul className='flex flex-col gap-[33px] w-full '>
          <div className='group flex gap-6'>
            <div className='h-full rounded-t-md rounded-b-md bg-transparent w-2 text-transparent group-hover:bg-main-accent'>h </div>
            <li className='flex items-center gap-2 font-bold w-full text-gray-600  hover:cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='15' viewBox='0 0 20 15' fill='none'>
                <g opacity='0.5'>
                  <path d='M11.8004 7.36435C11.8004 8.35867 10.9943 9.16473 9.99997 9.16473C9.00564 9.16473 8.19958 8.35867 8.19958 7.36435C8.19958 6.37002 9.00564 5.56396 9.99997 5.56396C10.9943 5.56396 11.8004 6.37002 11.8004 7.36435Z' stroke='#5E77FB' />
                  <path d='M13.8168 3.54754C14.831 4.56063 15.4009 5.93534 15.4009 7.36886C15.4009 8.80238 14.831 10.1771 13.8168 11.1902M6.18319 11.1812C5.16897 10.1681 4.5991 8.79338 4.5991 7.35986C4.5991 5.92634 5.16897 4.55163 6.18318 3.53854M16.3644 1C19.8785 4.51525 19.8785 10.2135 16.3644 13.7287M3.63564 13.7287C0.121453 10.2135 0.121453 4.51525 3.63564 1' stroke='black' />
                </g>
              </svg>
              Radio
            </li>
          </div>
          <div className='group flex gap-6'>
            <div className='h-full rounded-t-md rounded-b-md bg-transparent w-2 text-transparent group-hover:bg-main-accent'>h </div>
            <li className='flex items-center gap-2 font-bold w-full text-gray-600  hover:cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19' fill='none'>
                <g opacity='0.5'>
                  <path d='M8.55888 12.8704C8.65305 12.9644 8.78067 13.0173 8.91386 13.0173C9.04694 13.0173 9.17456 12.9646 9.26872 12.8704L11.0608 11.0784C11.2569 10.8822 11.2569 10.5645 11.0608 10.3684C10.8648 10.1724 10.5469 10.1724 10.3509 10.3684L8.91386 11.8054L8.25864 11.1502C8.06252 10.9542 7.74474 10.9542 7.54866 11.1502C7.35268 11.3462 7.35268 11.664 7.54866 11.8602L8.55888 12.8704Z' fill='#5E77FB' stroke='#5E77FB' />
                  <path d='M9.30479 15.6042C11.502 15.6042 13.2896 13.8166 13.2896 11.6193C13.2896 9.42204 11.502 7.63452 9.30479 7.63452C7.10742 7.63452 5.31989 9.42206 5.31989 11.6193C5.31989 13.8166 7.10754 15.6042 9.30479 15.6042ZM9.30479 8.63843C10.9485 8.63843 12.2857 9.97563 12.2857 11.6193C12.2857 13.263 10.9485 14.6003 9.30479 14.6003C7.6611 14.6003 6.32378 13.263 6.32378 11.6193C6.32378 9.97563 7.66109 8.63843 9.30479 8.63843Z' fill='#5E77FB' stroke='#5E77FB' />
                  <path d='M15.9862 2.06886H15.0706V1.50194C15.0706 1.22477 14.8459 1 14.5687 1C14.2915 1 14.0667 1.22477 14.0667 1.50194V2.06886H13.0804V1.50194C13.0804 1.22477 12.8556 1 12.5783 1C12.3011 1 12.0764 1.22477 12.0764 1.50194V2.06886H6.5335V1.50194C6.5335 1.22477 6.30873 1 6.03144 1C5.75427 1 5.5295 1.22477 5.5295 1.50194V2.06886H4.54313V1.50194C4.54313 1.22477 4.31836 1 4.04106 1C3.76389 1 3.53912 1.22477 3.53912 1.50194V2.06886H2.62344C1.72839 2.06886 1.00012 2.79712 1.00012 3.69231V16.3767C1.00012 17.2717 1.72839 18 2.62344 18H15.9862C16.8813 18 17.6095 17.2717 17.6095 16.3767V3.69231C17.6095 2.79712 16.8812 2.06886 15.9862 2.06886ZM16.6055 16.3767C16.6055 16.7182 16.3277 16.9961 15.9862 16.9961H2.62346C2.28196 16.9961 2.00401 16.7182 2.00401 16.3767V6.24272H16.6055L16.6055 16.3767ZM2.004 3.69232C2.004 3.35069 2.28195 3.07288 2.62345 3.07288H3.53913V2.57729C3.53913 2.85446 3.7639 3.07923 4.0412 3.07923C4.31837 3.07923 4.54314 2.85446 4.54314 2.57729V3.07288H5.5295V2.57729L5.93563 3.07008L6.03157 3.07923C6.30874 3.07923 6.53351 2.85446 6.53351 2.57729V3.07288H12.0764V2.57729C12.0764 2.85446 12.3011 3.07923 12.5784 3.07923C12.8556 3.07923 13.0804 2.85446 13.0804 2.57729V3.07288H14.0668V2.57729C14.0668 2.85446 14.2915 3.07923 14.5687 3.07923C14.846 3.07923 15.0708 2.85446 15.0708 2.57729V3.07288H15.9862C16.3277 3.07288 16.6056 3.35069 16.6056 3.69232V5.23873H2.00401L2.004 3.69232Z' fill='black' stroke='black' />
                </g>
              </svg>
              Event
            </li>
          </div>
          <div className='group flex gap-6'>
            <div className='h-full rounded-t-md rounded-b-md bg-transparent w-2 text-transparent group-hover:bg-main-accent'>h </div>
            <li className='flex items-center gap-2 w-full font-bold text-gray-600 hover:cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='14' height='20' viewBox='0 0 14 20' fill='none'>
                <g opacity='0.5'>
                  <path d='M6.72725 1C5.37164 1 4.27271 2.09894 4.27271 3.45455V10C4.27271 11.3556 5.37164 12.4545 6.72725 12.4545C8.08286 12.4545 9.1818 11.3556 9.1818 10V3.45455C9.1818 2.09894 8.08286 1 6.72725 1Z' stroke='#5E77FB' />
                  <path d='M12.4545 8.36365V10C12.4545 13.1631 9.89036 15.7273 6.72727 15.7273C3.56419 15.7273 1 13.1631 1 10L1 8.36365' stroke='black' />
                  <path d='M6.72729 15.7273V19' stroke='black' />
                  <path d='M3.45459 19H10' stroke='black' />
                </g>
              </svg>
              Podcast
            </li>
          </div>
          <div className='group flex gap-6 -translate-x-1'>
            <div className='h-full rounded-t-md rounded-b-md bg-transparent w-2 text-transparent group-hover:bg-main-accent'>h </div>
            <li className='flex items-center gap-2 font-bold text-gray-600 w-full hover:cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='19' viewBox='0 0 20 19' fill='none'>
                <g opacity='0.4'>
                  <path d='M17.3025 2.31086C15.5555 0.563047 12.7222 0.563047 10.9752 2.31086L10.1131 3.17293L9.25105 2.31086C7.50382 0.563627 4.671 0.563626 2.92377 2.31086C1.17653 4.05809 1.17653 6.89091 2.92377 8.63814L3.78584 9.50022L10.1131 15.8275L16.4404 9.50022L17.3025 8.63814C19.0503 6.89115 19.0503 4.05785 17.3025 2.31086Z' stroke='black' />
                  <path d='M13.7624 10.8528C15.5207 10.8723 15.9313 12.4892 14.9611 13.8121C13.991 15.1349 11.6979 17.281 11.6979 17.281' stroke='#5E77FB' />
                </g>
              </svg>
              For You
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
