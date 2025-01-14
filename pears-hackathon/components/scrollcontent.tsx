import React, { useEffect, useState } from "react";
import "./ScrollContent.css";
import Home from "./ContentPages/Home";
import Contact from "./ContentPages/Contact";
import AboutUs from "./ContentPages/AboutUs";
import Team from "./ContentPages/Team";
import Highlights from "./ContentPages/Highlights";
import JudgingPanel from "./ContentPages/JudgingPanel";
import Prize from "./ContentPages/Prize";
import PearLogo from "@/assets/pears-logo.svg";
import GRLogo from "@/assets/GRLogo.svg";
import Cross from "@/assets/Cross.svg";
import Image from "next/image";

const ScrollContent = ({
  totalIndexes,
  onIndexChange,
}: {
  totalIndexes: number;
  onIndexChange: (index: number) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const threshold = 600; // Scroll distance threshold for changing index

  const pages = [
    <Home />,
    <AboutUs />,
    <Prize />,
    <Highlights />,
    <JudgingPanel />,
    <Team />,
    <Contact />,
  ];

  const handleScroll = (e: WheelEvent) => {
    const delta = e.deltaY; // Get scroll direction and distance
    const newScrollDistance = scrollDistance + delta;

    if (newScrollDistance >= threshold) {
      // Move to the next index if not at the end
      if (currentIndex < totalIndexes - 1 && currentIndex < 6) {
        setCurrentIndex(currentIndex + 1);
        onIndexChange(currentIndex + 1); // Notify parent
      }
      setScrollDistance(0); // Reset scroll distance
    } else if (newScrollDistance <= -threshold) {
      // Move to the previous index if not at the beginning
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        onIndexChange(currentIndex - 1); // Notify parent
      }
      setScrollDistance(0); // Reset scroll distance
    } else {
      setScrollDistance(newScrollDistance); // Accumulate scroll distance
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollDistance, currentIndex]);

  return (
    <>
      <div className="top-logo-pagenm">
        <div className="logos">
          <Image src={PearLogo} alt="PearsLogo" />
          <Image src={Cross} alt="Cross" id="cross" />
          <Image src={GRLogo} alt="GRLogo" />
        </div>
        <div className="pagenm">
          {
            [
              "HOME",
              "ABOUT US",
              "PRIZES",
              "JUDGING PANEL",
              "HIGHLIGHTS",
              "TEAM",
              "CONTACT US",
            ][currentIndex]
          }
        </div>
      </div>
      <div className="top-logo-pagenm-mobile">
        <Image src={PearLogo} alt="PearsLogo" />
        <div className="pagenm-mobile">
          {
            [
              "HOME",
              "ABOUT US",
              "PRIZES",
              "JUDGING PANEL",
              "HIGHLIGHTS",
              "TEAM",
              "CONTACT US",
            ][currentIndex]
          }
        </div>
        <Image src={GRLogo} alt="GRLogo" />
      </div>
      <div style={{ color: "#fff", textAlign: "center" }}>
        {pages[currentIndex]} {/* Dynamically render the page component */}
      </div>
    </>
  );
};

export default ScrollContent;
