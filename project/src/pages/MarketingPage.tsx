import { FaMedal } from "react-icons/fa";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify center flex-col">
        <div className="flex items-center shadow-sm p-4 mb-4 uppercase rounded-full bg-amber-100 text-amber-700">
          <FaMedal size={24} color="gold" />
          No 1 Task Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 py-2 rounded-md pb-4 w-fit">
          Work Forward
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center">
        Collaborate , manage projects, and reach new productivity peaks.From
        high rises to the home office, the way your team work is
        unique-Accomplish all with taskify.And get the Full Advantage
      </div>
      <button className="bg-amber-200 text-amber-800 rounded-md px-4 py-2 mt-4 cursor-pointer">
        Get Taskify For Free
      </button>
    </div>
  );
};

export default MarketingPage;
