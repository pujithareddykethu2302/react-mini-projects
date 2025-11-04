import { useState } from "react";

const GreetingMessage = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);



  const handleBlur = () => {
    if (message.trim() !== "") setShowMessage(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    setShowMessage(false); 
  };

  return (
    <div className="p-6">
      <p className="text-2xl font-bold text-[#0C2B4E]">Greeting Message</p>
      <p className="text-[#1A3D64] mt-2">
        Build a component that displays a greeting message when the user finishes typing.
      </p>

      <div className="mt-4">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Type your name..."
            className="border border-[#1A3D64] focus:border-[#0C2B4E]  p-2 rounded-md w-full max-w-sm outline-none"


        />

        {showMessage && (
          <p className="text-[#0C2B4E] mt-3 text-lg font-medium">
            👋 Hello, {message}!
          </p>
        )}
      </div>
    </div>
  );
};

export default GreetingMessage;
