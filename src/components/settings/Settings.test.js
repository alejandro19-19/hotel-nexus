import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Settings from "./Settings";
import { Context } from "../../context/Context";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import colombia from "../../assets/flag-colombia.svg";
import us from "../../assets/flag-us.svg";

test("renders content", () => {
  const mockAppState = {
    name: "John Doe",
  };

  const setAppState = jest.fn();

  const { getByText } = render(
    <BrowserRouter>
      <Context.Provider value={{ appState: mockAppState, setAppState }}>
        <Settings />
      </Context.Provider>
    </BrowserRouter>
  );

  // Assert that the name is rendered
  expect(getByText(mockAppState.name)).toBeInTheDocument();
});

test("toggles menu on click", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Settings />
    </BrowserRouter>
  );

  const menuToggle = getByTestId("menu-toggle");
  const menu = getByTestId("menu");

  // Initial state: menu should be hidden
  expect(menu).toHaveClass("menu");

  // Click on the menu toggle
  fireEvent.click(menuToggle);

  // After click: menu should be visible
  expect(menu).toHaveClass("menu activeMenu");

  // Click on the menu toggle again
  fireEvent.click(menuToggle);

  // After second click: menu should be hidden
  expect(menu).toHaveClass("menu");
});
// test("renders correct language icon", () => {
//   const mockAppState = {
//     name: "John",
//     language: "es", // Simulamos que el idioma es español
//   };

//   const { getByText } = render(
//     <BrowserRouter>
//       <Context.Provider value={{ appState: mockAppState }}>
//         <Settings />
//       </Context.Provider>
//     </BrowserRouter>
//   );

//   // Verificamos que el texto del botón coincida con la opción esperada
//   const button = getByText(/Language/i); // Reemplaza "Español" con el texto esperado en el botón
//   expect(button).toBeInTheDocument();
// });