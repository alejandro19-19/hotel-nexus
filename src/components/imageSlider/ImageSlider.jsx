import { Grid } from "@mui/material";
import "./imageSlider.scss";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import arrow from "../../assets/arrow.png";
import { useState } from "react";

const images = [img1, img2, img3, img4, img5];

const ImageSlider = () => {
  const [image, setImage] = useState(0);

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <div className="ImageSlider">
        <div className="container">
          <div className="slide">
            <img src={images[image]} alt={`Image ${image + 1}`} />
          </div>
          <div className="arrows">
            <img
              src={arrow}
              alt="arrow1"
              onClick={() => {
                if (image <= 0) {
                  setImage(4);
                } else {
                  setImage(image - 1);
                }
              }}
            />
            <img
              src={arrow}
              alt="arrow2"
              onClick={() => {
                if (image >= 4) {
                  setImage(0);
                } else {
                  setImage(image + 1);
                }
              }}
            />
          </div>
          <div className="btns">
            <button
              data-testid="btn-1"
              onClick={() => {
                setImage(0);
              }}
            />
            <button
              data-testid="btn-2"
              onClick={() => {
                setImage(1);
              }}
            />
            <button
              data-testid="btn-3"
              onClick={() => {
                setImage(2);
              }}
            />
            <button
              data-testid="btn-4"
              onClick={() => {
                setImage(3);
              }}
            />
            <button
              data-testid="btn-5"
              onClick={() => {
                setImage(4);
              }}
            />
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default ImageSlider;
