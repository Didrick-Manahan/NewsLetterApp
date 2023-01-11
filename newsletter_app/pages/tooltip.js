import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
//import Tour from "reactour";
import { TourProvider } from "@reactour/tour";
import { useTour } from "@reactour/tour";

import Loadable from "react-loadable";

//const Tour = Loadable({
//  loader: () => import("reactour"),
//  loading: () => null,
//});

const ToolTipPage = (props) => {
  const { setIsOpen } = useTour();
  return (
    <div>
      <TourProvider steps={steps}>
        <h1>Testing ToolTip</h1>

        <p id="my-anchor-id">Tooltip</p>

        <Tooltip anchorId="my-anchor-id" content="hello world" place="bottom" />
      </TourProvider>

      <button onClick={() => setIsOpen(true)}>Open Tour</button>
    </div>
  );
};

const steps = [
  {
    selector: ".first-step",
    content: "This is my first Step",
  },
  // ...
];

export default ToolTipPage;
