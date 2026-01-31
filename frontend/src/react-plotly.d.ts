declare module "react-plotly.js" {
  import * as React from "react";
  import { PlotParams } from "./lib/utils";

  const Plot: React.FC<PlotParams>;
  export default Plot;
}

