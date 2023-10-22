import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slideImages } from "./SliderData";
// import image1 from "./image/slide (1).jpg";

// const slideImagesx = [
//   {
//     path: "./src/image/slide (1).jpg",
//     caption: "Slide 1",
//   },
//   {
//     path: "./src/image/slide (1).png",
//     caption: "Slide 2",
//   },
// ];

// const spanStyle = {
//   padding: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "450px",
};

function Home() {
  return (
    <div className="Home">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="each-slide"
              style={{
                ...divStyle,
                backgroundImage: `url('${slideImage.path}')`,
              }}
            >
              {/* <span className="caption" style={spanStyle}>
                {slideImage.caption}
              </span> */}
            </div>
          </div>
        ))}
      </Slide>
      <h1>Welcome to Dashword</h1>
      <p>This is the home page of the app.</p>
    </div>
  );
}

export default Home;
