import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import FlashInfoData from "../Data/FlashInfosData";
import { Link } from "react-router-dom";

const FlashInfo = () => {
  const [showFlashInfo, setFlashInfo] = useState(true);

  return (
    <div className="bg-black text-white flex items-center justify-between px-4">
      {showFlashInfo && (
        <>
          <marquee scrollamount="2" className="flex-1">
            Formation en analyse de données avec Excel en cours
            <Link to="/formations/2" className="text-blue-500 text-bold ml-2.5">
              commencer la formation
            </Link>
          </marquee>
          <div
            onClick={() => setFlashInfo(false)}
            className="cursor-pointer ml-4"
            aria-label="Close Flash Info"
          >
            <Close />
          </div>
        </>
      )}
    </div>
  );
};

export default FlashInfo;
