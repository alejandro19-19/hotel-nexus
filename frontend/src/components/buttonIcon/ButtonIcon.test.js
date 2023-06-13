import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ButtonIcon from "./ButtonIcon";
import { BrowserRouter } from "react-router-dom";
import { Context } from "../../context/Context";

test("renders content", () => {
  const { getByText, getByAltText } = render(
    <BrowserRouter>
      <ButtonIcon text="Test" icon="test.png" link="/" />
    </BrowserRouter>
  );

  // Assert that the text is rendered correctly
  const textElement = getByText("Test");
  expect(textElement).toBeInTheDocument();

  // Assert that the icon is rendered correctly
  const iconElement = getByAltText("icon");
  expect(iconElement).toHaveAttribute("src", "test.png");
});

// test("Button click", () => {
//   const navigate = jest.fn();
//   const setAppState = jest.fn();
//   const contextValue = { setAppState };

//   const { getByTestId } = render(
//     <BrowserRouter>
//       <Context.Provider value={contextValue}>
//         <ButtonIcon text="Test" icon="test.png" link="/" />
//       </Context.Provider>
//     </BrowserRouter>
//   );

//   const button = getByTestId("btn-div");
//   fireEvent.click(button);

//   // Assert that the navigate function is called with the correct link
//   expect(navigate).toHaveBeenCalledWith("/");

//   // Assert that the setAppState function is called with the correct value
//   expect(setAppState).toHaveBeenCalledWith({
//     loggedIn: false,
//     typeUser: "",
//     name: "",
//     token: "",
//   });
// });
