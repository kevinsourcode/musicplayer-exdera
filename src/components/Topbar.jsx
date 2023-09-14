//component to show search and other buttons on the top bar

const Topbar = () => {
  return (
    <div className='flex justify-between pr-8 max-w-[1600px] relative'>
      <div className='flex items-center w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
          <path d='M17 17L13.1333 13.1333' stroke='black' />
          <path d='M15.2222 8.11111C15.2222 12.0385 12.0385 15.2222 8.11111 15.2222C4.18375 15.2222 1 12.0385 1 8.11111C1 4.18375 4.18375 1 8.11111 1C12.0385 1 15.2222 4.18375 15.2222 8.11111Z' stroke='#5E77FB' />
        </svg>
        <input placeholder='Search for Songs, Artists, etc..' className='w-full ml-[12px] bg-transparent' />
      </div>
      <div className='flex gap-6 items-center'>
        <a className='py-3 px-4 rounded-l-2xl rounded-r-2xl w-[245px] text-center border-[3px] border-solid border-main-accent font-bold'>Upgrade To Premium</a>
        <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>
          <path d='M12.7546 10C12.7546 11.3556 11.6556 12.4545 10.3 12.4545C8.9444 12.4545 7.84546 11.3556 7.84546 10C7.84546 8.64439 8.9444 7.54546 10.3 7.54546C11.6556 7.54546 12.7546 8.64439 12.7546 10Z' stroke='#5E77FB' />
          <path
            d='M16.3546 12.4545C16.1318 12.9594 16.2387 13.5491 16.6246 13.9436L16.6737 13.9927C16.981 14.2997 17.1536 14.7162 17.1536 15.1505C17.1536 15.5848 16.981 16.0013 16.6737 16.3082C16.3668 16.6155 15.9503 16.7881 15.516 16.7881C15.0817 16.7881 14.6652 16.6155 14.3582 16.3082L14.3091 16.2591C13.9146 15.8732 13.3249 15.7663 12.8201 15.9891C12.3255 16.2011 12.004 16.6865 12.0019 17.2245V17.3636C12.0019 18.2674 11.2692 19 10.3655 19C9.46177 19 8.72914 18.2674 8.72914 17.3636V17.29C8.71618 16.7358 8.36576 16.2459 7.8455 16.0545C7.34061 15.8317 6.75093 15.9386 6.35641 16.3245L6.30732 16.3736C6.00039 16.6809 5.5839 16.8536 5.14959 16.8536C4.71529 16.8536 4.2988 16.6809 3.99187 16.3736C3.6846 16.0667 3.51194 15.6502 3.51194 15.2159C3.51194 14.7816 3.6846 14.3651 3.99187 14.0582L4.04096 14.0091C4.42687 13.6146 4.53379 13.0249 4.31096 12.52C4.09899 12.0254 3.61358 11.704 3.0755 11.7018L2.93641 11.7018C2.03267 11.7018 1.30005 10.9692 1.30005 10.0655C1.30005 9.16172 2.03267 8.42909 2.93641 8.42909H3.01005C3.56423 8.41613 4.05416 8.06571 4.2455 7.54545C4.46833 7.04056 4.36141 6.45088 3.9755 6.05636L3.92641 6.00727C3.61914 5.70034 3.44649 5.28385 3.44649 4.84955C3.44649 4.41524 3.61914 3.99875 3.92641 3.69182C4.23334 3.38455 4.64983 3.2119 5.08414 3.2119C5.51845 3.2119 5.93494 3.38455 6.24187 3.69182L6.29096 3.74091C6.68547 4.12682 7.27516 4.23374 7.78005 4.01091H7.8455C8.34007 3.79894 8.66154 3.31353 8.66368 2.77545V2.63636C8.66368 1.73263 9.39631 1 10.3 1C11.2038 1 11.9364 1.73263 11.9364 2.63636V2.71C11.9386 3.24807 12.26 3.73349 12.7546 3.94546C13.2595 4.16828 13.8492 4.06136 14.2437 3.67546L14.2928 3.62636C14.5997 3.31909 15.0162 3.14644 15.4505 3.14644C15.8848 3.14644 16.3013 3.31909 16.6082 3.62636C16.9155 3.93329 17.0882 4.34979 17.0882 4.78409C17.0882 5.2184 16.9155 5.63489 16.6082 5.94182L16.5591 5.99091C16.1732 6.38543 16.0663 6.97511 16.2891 7.48V7.54545C16.5011 8.04002 16.9865 8.36149 17.5246 8.36364H17.6637C18.5674 8.36364 19.3 9.09626 19.3 10C19.3 10.9037 18.5674 11.6364 17.6637 11.6364H17.59C17.052 11.6385 16.5666 11.96 16.3546 12.4545Z'
            stroke='black'
          />
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='17' height='20' viewBox='0 0 17 20' fill='none'>
          <path d='M8.80005 19.5C9.90005 19.5 10.8 18.6 10.8 17.5H6.80005C6.80005 18.6 7.70005 19.5 8.80005 19.5ZM14.8 13.5V8.5C14.8 5.43 13.17 2.86 10.3 2.18V1.5C10.3 0.67 9.63005 0 8.80005 0C7.97005 0 7.30005 0.67 7.30005 1.5V2.18C4.44005 2.86 2.80005 5.42 2.80005 8.5V13.5L0.800049 15.5V16.5H16.8V15.5L14.8 13.5ZM12.8 14.5H4.80005V8.5C4.80005 6.02 6.31005 4 8.80005 4C11.29 4 12.8 6.02 12.8 8.5V14.5Z' fill='black' />
        </svg>
      </div>
    </div>
  );
};

export default Topbar;
