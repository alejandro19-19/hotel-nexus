import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import CardRoom from "./CardRoom";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

test("renders content cardroom", () => {
  const componente = render(
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <CardRoom />
      </I18nextProvider>
    </BrowserRouter>
  );
  componente.debug();
});

// test("Button click cardroom", () => {

//   const component = render(
//     <BrowserRouter>
//       <I18nextProvider i18n={i18next}>
//         <CardRoom />
//       </I18nextProvider>
//     </BrowserRouter>
//   );

//   const button = component.getByTestId("click2");
//   fireEvent.click(button);
// });