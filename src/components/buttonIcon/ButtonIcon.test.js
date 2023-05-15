import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import ButtonIcon from "./ButtonIcon";
import { BrowserRouter } from "react-router-dom";

test("renders content", () => {
  const componente = render(
    <BrowserRouter>
      <ButtonIcon />
    </BrowserRouter>
  );
  console.log(componente);
});
