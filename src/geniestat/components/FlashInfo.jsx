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
          <marquee className="flex-1">
            Nous sommes en promotion. Les prix de nos formations ont été reduits
            de 50%{" "}
            <Link to="/formations" className="text-blue-500 text-bold ml-2.5">
              cliquez ici pour commencer.
            </Link>
            {"  "}
            Avoir un CV professionnel peut booster votre chance de décrocher un
            boulot de votre rêve, alors que notre objectif est de vous voir
            reussir
            <Link to="/contact-us" className="text-blue-500 text-bold ml-2.5">
              {" "}
              Contactez-nous pour votre assistance
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
