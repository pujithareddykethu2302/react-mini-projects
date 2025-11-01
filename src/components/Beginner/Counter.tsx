import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6">
      <p className="text-2xl font-bold text-[#DFD0B8]">Counter App</p>
      <p className="text-[#1A3D64] mt-2">
        Create a counter app with increment, decrement, and reset buttons.
      </p>
      <div className="flex flex-row my-3">
        <button
          type="button"
          onClick={() => {
            setCount(count - 1);
          }}
          className="p-2 bg-[#0C2B4E] text-[#F4F4F4] w-10 mr-2"
        >
          -
        </button>
        <p className="mr-2 flex justify-center items-center">{count}</p>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
          className="p-2 bg-[#0C2B4E] text-[#F4F4F4] w-10 mr-2"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
