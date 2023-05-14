import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import CardInformation from "./CardInformation";

test("renders content", () => {
  
    const component = render(
      <CardInformation/>
    );

    component.debug()
    //console.log("NO ME RENDERIZO")
  });