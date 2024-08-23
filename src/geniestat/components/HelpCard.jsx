import React, { useState } from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const HelpCard = ({ q, a }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white mb-3 border rounded-lg shadow-sm">
      <div
        className="flex justify-between items-center p-4 cursor-pointer border-b border-gray-200"
        onClick={() => setShowAnswer((prev) => !prev)}
      >
        <span>{q}</span>
        {showAnswer ? <ArrowUpward /> : <ArrowDownward />}
      </div>
      {showAnswer && (
        <div className="p-4 border-t bg-blue-800 text-white border-gray-200">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
};

export default HelpCard;
