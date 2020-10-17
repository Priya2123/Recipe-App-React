import React from "react";
import { Spring } from "react-spring/renderprops";
import style from "./title.css";
import { motion } from "framer-motion";
import TextLoop from "react-text-loop";

export default function Title() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 1000, delay: 1000 }}
    >
      {(props) => (
        <div style={props}>
          <div style={style.p}>
            <p>
              <span style={{ marginLeft: "530px" }}>Let's</span>
              <br />
              <span
                style={{
                  fontSize: "120px",
                  letterSpacing: "17px",
                  marginLeft: "500px",
                }}
              >
                COOK{" "}
              </span>
              <span>
              <TextLoop style={{fontSize: '8px'}} interval={200}>
            <span>Pizza</span>
            <span>Burger</span>
            <span>Fries</span>
            <span>Chicken</span>
          </TextLoop>
              </span>
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}
