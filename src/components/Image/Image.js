import React from "react";

import { SImage } from "./styles";

function Image({ height, src, width }) {
  return <SImage height={height} src={src} width={width} />;
}

export default Image;
