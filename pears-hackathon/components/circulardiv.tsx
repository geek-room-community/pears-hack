import React from "react";
import centreImage from "@/assets/center-gif.gif";
import "./PieChart.css";
import logo1 from "@/assets/Group 295.svg";
import logo2 from "@/assets/Info.svg";
import logo3 from "@/assets/Trophy.svg";
import logo4 from "@/assets/Management.svg";
import logo5 from "@/assets/Clip Appearance.svg";
import logo6 from "@/assets/User Groups.svg";
import logo7 from "@/assets/Phone Message.svg";
import Image from "next/image";

const PieChart = ({ activeIndex }: { activeIndex: number }) => {
  const radius = 290;
  const outerRadius = radius + 80;
  const numberOfElements = 10;
  const squareSize = 35;
  const angleStep = 360 / numberOfElements;

  const activeColor = "#FFFFFF";
  const defaultColor = "#33FF57";

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  // Calculate active index
  const adjustedActiveIndex =
    (activeIndex - 5 + numberOfElements) % numberOfElements;

  return (
    <div
      style={{
        position: "relative",
        width: `${2 * outerRadius}px`,
        height: `${2 * outerRadius}px`,
        borderRadius: "50%",
        backgroundColor: "#020202",
        boxShadow: "0 0 15px 5px rgba(0, 255, 0, 0.7)",
        overflow: "hidden",
      }}
    >
      {/* Outer circle */}
      <div
        className="outer-circle"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: `${2 * outerRadius}px`,
          height: `${2 * outerRadius}px`,
          borderRadius: "50%",
          backgroundColor: "#020202",
        }}
      >
        <div
          className="inner-circle"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${
              activeIndex * angleStep
            }deg)`,
            width: `${2 * radius}px`,
            height: `${2 * radius}px`,
            borderRadius: "50%",
            backgroundColor: "#171717",
            transition: "transform 1s ease-in-out",
          }}
        >
          {Array.from({ length: numberOfElements }, (_, index) => {
            const angle = angleStep * (numberOfElements - index);
            const x =
              radius +
              (radius - squareSize) * Math.cos((angle * Math.PI) / 180);
            const y =
              radius +
              (radius - squareSize) * Math.sin((angle * Math.PI) / 180);

            const color =
              index === adjustedActiveIndex ? activeColor : defaultColor;

            if (index >= 7) {
              // Square logos for logo8, logo9, logo10
              return (
                <div
                  key={index}
                  className="logo-square"
                  style={{
                    top: `${y}px`,
                    left: `${x}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
              );
            }

            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: `${y}px`,
                  left: `${x}px`,
                  transform: "translate(-50%, -50%)",
                  width: `${squareSize}px`,
                  height: `${squareSize}px`,
                  color: color,
                  borderRadius: "4px",
                }}
              >
                <Image
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Center image */}
        <div
          className="center-image"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: `${2 * radius - 50}px`,
            height: `${2 * radius - 50}px`,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src={centreImage}
            alt="Center Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
