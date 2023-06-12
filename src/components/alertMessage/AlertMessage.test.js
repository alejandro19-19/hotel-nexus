import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import AlertMessage from "./AlertMessage";

test("renders content alert", () => {
  const componente = render(
      <AlertMessage />
  );
  componente.debug();
});

