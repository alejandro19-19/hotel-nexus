import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import ImageSlider from "./ImageSlider";

test("renders content", () => {
  
    const component = render(
      <ImageSlider/>
    );
    //console.log(component)
    component.debug()
  });