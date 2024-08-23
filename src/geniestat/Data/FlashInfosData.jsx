import { Link } from "react-router-dom";
const FlashInfoData = {
  id: 1,
  info: `Formation en analyse de données avec Excel en cours ${(
    <Link to="formations/2" className="text-blue-500">
      commencer la formation
    </Link>
  )}`,
};

export default FlashInfoData;
