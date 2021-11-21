import React from "react";
import "./TechStack.css";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: "./images/html.png",
    title: "HTML",
  },
  {
    img: "./images/css.png",
    title: "CSS",
  },
  {
    img: "./images/javascript.png",
    title: "JavaScript",
  },
  {
    img: "./images/react.png",
    title: "React JS",
  },
  {
    img: "./images/figma.png",
    title: "Figma",
  },
  {
    img: "./images/mui.png",
    title: "Material UI",
  },
  {
    img: "./images/bootstrap.png",
    title: "Bootstrap 5",
  },
  {
    img: "./images/jquery.png",
    title: "jQuery",
  },
  {
    img: "./images/python.png",
    title: "Python",
  },
  {
    img: "./images/django.png",
    title: "Django",
  },
];

const TechStack = () => {
  return (
    <div className="tech-stack">
      <div className="container">
        <div className="row">
          <h1>Tech Stack</h1>
          <div className="col-10 offset-1">
            <Box
              sx={{
                width: "80%",
                height: "80vh",
                margin: " auto",
                marginBottom: "3rem",
              }}
            >
              <ImageList variant="masonry" cols={5} gap={4}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
