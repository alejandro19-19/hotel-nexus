import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";

test("renders content", () => {
  
    const component = render(
      <Header/>
    );
    console.log(component)
  });