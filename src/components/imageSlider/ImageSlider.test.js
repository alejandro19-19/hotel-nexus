import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Importa la extensión de expect
import ImageSlider from "./ImageSlider";

test("renders images correctly", () => {
  const { getByAltText } = render(<ImageSlider />);

  // Assert that the first image is rendered
  const firstImage = getByAltText("Image 1");
  expect(firstImage).toBeInTheDocument();

  // You can also assert the presence of other images if needed
  // const secondImage = getByAltText("");
  // const thirdImage = getByAltText("");
  // ...

  // Add assertions for the rest of the images
});

test("slides to previous image when left arrow is clicked", () => {
  const { getByAltText, getByTestId } = render(<ImageSlider />);

  // Simulate clicking the left arrow
  const leftArrow = getByAltText("arrow1");
  fireEvent.click(leftArrow);

  // Assert that the previous image is displayed
  const previousImage = getByAltText("Image 5");
  expect(previousImage).toBeInTheDocument();
});

test("slides to the previous image when left arrow is clicked", () => {
  const { getByAltText, getByTestId } = render(<ImageSlider />);

  // Set the initial image to be the first one
  const initialImage = getByAltText("Image 1");
  expect(initialImage).toHaveAttribute("src", "img1.png");

  // Simulate clicking the left arrow when image is 0
  const leftArrow = getByAltText("arrow1");
  fireEvent.click(leftArrow);

  // Assert that the image state is updated correctly to the last image (img5.png)
  const updatedImage = getByAltText("Image 5");
  expect(updatedImage).toHaveAttribute("src", "img5.png");
});

test("slides to the next image when right arrow is clicked", () => {
  const { getByAltText, getByTestId } = render(<ImageSlider />);

  // Set the initial image to be the first one
  const initialImage = getByAltText("Image 1");
  expect(initialImage).toHaveAttribute("src", "img1.png");

  // Simulate clicking the right arrow when image is 0
  const rightArrow = getByAltText("arrow2");
  fireEvent.click(rightArrow);

  // Assert that the image state is updated correctly to the second image (img2.png)
  const updatedImage = getByAltText("Image 2");
  expect(updatedImage).toHaveAttribute("src", "img2.png");

  fireEvent.click(rightArrow);
  const updatedImage3 = getByAltText("Image 3");
  expect(updatedImage3).toHaveAttribute("src", "img3.png");
  
  fireEvent.click(rightArrow);
  const updatedImage4 = getByAltText("Image 4");
  expect(updatedImage4).toHaveAttribute("src", "img4.png");

  fireEvent.click(rightArrow);
  const updatedImage5 = getByAltText("Image 5");
  expect(updatedImage5).toHaveAttribute("src", "img5.png");
  
  fireEvent.click(rightArrow);
  const updatedImage1 = getByAltText("Image 1");
  expect(updatedImage1).toHaveAttribute("src", "img1.png");
  
});

test("slides to next image when right arrow is clicked", () => {
  const { getByAltText, getByTestId } = render(<ImageSlider />);

  // Simulate clicking the right arrow
  const rightArrow = getByAltText("arrow2");
  fireEvent.click(rightArrow);

  // Assert that the next image is displayed
  const nextImage = getByAltText("Image 2");
  expect(nextImage).toBeInTheDocument();
});

test("slides to a specific image when button is clicked", () => {
  const { getByAltText, getByTestId } = render(<ImageSlider />);

  // Simulate clicking a specific button (e.g., button for the third image)
  const thirdButton = getByTestId("btn-2");
  fireEvent.click(thirdButton);

  // Assert that the corresponding image is displayed
  const thirdImage = getByAltText("Image 2");
  expect(thirdImage).toBeInTheDocument();
});

test("slides to a specific image when button is clicked", () => {
  const { getByAltText, getByTestId } = render(<ImageSlider />);

  // Simulate clicking a specific button (e.g., button for the third image)
  const thirdButton = getByTestId("btn-1");
  fireEvent.click(thirdButton);

  // Assert that the corresponding image is displayed
  const thirdImage = getByAltText("Image 1");
  expect(thirdImage).toBeInTheDocument();
});
test("slides to a specific image when button is clicked", () => {
  const { getByAltText, getByTestId } = render(<ImageSlider />);

  // Simulate clicking a specific button (e.g., button for the third image)
  const thirdButton = getByTestId("btn-2");
  fireEvent.click(thirdButton);

  // Assert that the corresponding image is displayed
  const thirdImage = getByAltText("Image 2");
  expect(thirdImage).toBeInTheDocument();
});
test("slides to a specific image when button is clicked", () => {
  const { getByAltText, getByTestId } = render(<ImageSlider />);

  // Simulate clicking a specific button (e.g., button for the third image)
  const thirdButton = getByTestId("btn-3");
  fireEvent.click(thirdButton);

  // Assert that the corresponding image is displayed
  const thirdImage = getByAltText("Image 3");
  expect(thirdImage).toBeInTheDocument();
});
test("slides to a specific image when button is clicked", () => {
  const { getByAltText, getByTestId } = render(<ImageSlider />);

  // Simulate clicking a specific button (e.g., button for the third image)
  const thirdButton = getByTestId("btn-4");
  fireEvent.click(thirdButton);

  // Assert that the corresponding image is displayed
  const thirdImage = getByAltText("Image 4");
  expect(thirdImage).toBeInTheDocument();
});
test("slides to a specific image when button is clicked", () => {
  const { getByAltText, getByTestId } = render(<ImageSlider />);

  // Simulate clicking a specific button (e.g., button for the third image)
  const thirdButton = getByTestId("btn-5");
  fireEvent.click(thirdButton);

  // Assert that the corresponding image is displayed
  const thirdImage = getByAltText("Image 5");
  expect(thirdImage).toBeInTheDocument();
});