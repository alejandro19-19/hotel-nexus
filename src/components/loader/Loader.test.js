import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Loader from "./Loader";

test("renders content", () => {
  
    const component = render(
      <Loader/>
    );
    //console.log(component)
    component.debug()
  });