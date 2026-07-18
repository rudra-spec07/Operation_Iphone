import { useEffect, useRef, useState } from "react";

const funnyMessages = [
  "😂 Nice try!",
  "Catch me if you can!",
  "Still chasing me? 🤣",
  "Bro just press OK 😭",
  "Mission Impossible 😈",
  "You're never catching me 😂",
];

const MovingButton = ({ text = "No Chance" }) => {
  const buttonRef = useRef(null);

  const [attempts, setAttempts] = useState(0);

  const positions = [
  { left: "25%", top: "45%" },
  { left: "75%", top: "45%" },
  { left: "30%", top: "60%" },
  { left: "70%", top: "60%" },
  { left: "50%", top: "72%" },
  { left: "25%", top: "78%" },
  { left: "75%", top: "78%" },
];

  const [index, setIndex] = useState(0);

  const moveButton = () => {
    let next;

    do {
      next = Math.floor(Math.random() * positions.length);
    } while (next === index);

    setIndex(next);
    setAttempts((prev) => prev + 1);
  };

  useEffect(() => {
    moveButton();
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        onMouseEnter={moveButton}
        onTouchStart={(e) => {
        
          moveButton();
        }}
        style={{
          position: "absolute",
          left: positions[index].left,
          top: positions[index].top,
          transform: "translate(-50%, -50%)",
          zIndex: 20,
        }}
        className="rounded-xl bg-red-500 px-6 py-3 font-bold text-white shadow-xl transition-all duration-300 select-none"
      >
        {text}
      </button>

      <div className="mt-36 text-center text-white">
        <p className="font-medium">
          {funnyMessages[attempts % funnyMessages.length]}
        </p>

        <p className="text-sm opacity-80">
          Attempts: {attempts}
        </p>
      </div>
    </>
  );
};

export default MovingButton;