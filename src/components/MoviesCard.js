import React from "react";

import { IMG_CDN } from "../utils/constants";

const MoviesCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 pr-3">
      <img alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MoviesCard;
