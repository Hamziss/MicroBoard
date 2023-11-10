import { Home, Menu } from 'lucide-react'
const MainLeft = () => {
  return (
    <div className="flex justify-between items-center w-20 h-12 px-[5px] py-0  text-slate-700">
      <div className='h-8 w-8 flex items-center justify-center border border-slate-200 rounded-md border-solid cursor-pointer hover:shadow-lg bg-white'>
        <Home />
      </div>
      <div className='h-8 w-8 flex items-center justify-center border border-slate-200 rounded-md border-solid cursor-pointer hover:shadow-lg bg-white'>
        <Menu />
      </div>
    </div>
  );
};

export default MainLeft;
