import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const ToolTipPage = () => {
  return (
    <div>
      <h1>Testing ToolTip</h1>

      <p id="my-anchor-id">Tooltip</p>

      <Tooltip anchorId="my-anchor-id" content="hello world" place="bottom" />
    </div>
  );
};

export default ToolTipPage;
