"use client";
import React from "react";

function loadSVG() {
  fetch("/navigation_wheel.svg")
    .then((response) => {
      return response.text();
    })
    .then((svg) => {
      document.getElementById("scroll_wheel").innerHTML = svg;
      document.querySelector("#scroll_wheel svg").classList.add("fixed");
      document.querySelector("#scroll_wheel svg").classList.add("right-[-20%]");
      document.querySelector("#scroll_wheel svg").classList.add("h-[100vh]");
      document.querySelector("#scroll_wheel svg").classList.add("w-[100vh]");

      document
        .querySelector("#scroll_wheel svg")
        .setAttribute("preserveAspectRatio", "xMidYMid slice");
    });
}
loadSVG();

function ScrollWheel() {
  return <div id="scroll_wheel"></div>;
}

export default ScrollWheel;
