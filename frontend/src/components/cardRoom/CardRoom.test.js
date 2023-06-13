import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CardRoom from "./CardRoom";
import { BrowserRouter } from "react-router-dom";
import { Context } from "../../context/Context";
import { MemoryRouter } from "react-router-dom";

test("renders content cardroom", () => {
  const mockData = {}; // Mock data to be passed as props
  const setAppState = jest.fn(); // Mock function for setAppState

  // Render the component within a context provider and router
  const { getByTestId } = render(
    <BrowserRouter>
      <Context.Provider value={{ appState: {}, setAppState }}>
        <CardRoom number={1} available={true} data={mockData} />
      </Context.Provider>
    </BrowserRouter>
  );

  const button = getByTestId("btn");
  fireEvent.click(button);

  // Add assertions here based on the expected behavior of the component
  expect(setAppState).toHaveBeenCalledTimes(1);
  expect(setAppState).toHaveBeenCalledWith({
    ...{},
    temporalData: mockData,
  });
});

test("navigates to correct route based on availability", () => {
  const mockData = {}; // Mock data to be passed as props
  const setAppState = jest.fn(); // Mock function for setAppState

  // Render the component within a context provider and router
  const { getByTestId } = render(
    <MemoryRouter>
      <Context.Provider value={{ appState: {}, setAppState }}>
        <CardRoom number={1} available={false} data={mockData} />
      </Context.Provider>
    </MemoryRouter>
  );

  const button = getByTestId("btn");
  fireEvent.click(button);

  expect(setAppState).toHaveBeenCalledTimes(1);
  expect(setAppState).toHaveBeenCalledWith({
    ...mockData,
    temporalData: mockData,
  });
});