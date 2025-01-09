"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      setAnimationScroll();
    });
}
loadSVG();

function setAnimationScroll() {
  gsap.registerPlugin(ScrollTrigger);

  let runAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#scroll_wheel",
      start: "top top",
      end: "+1000",
      scrub: true,
      pin: true,
    },
  });

  runAnimation.add([
    gsap.to("#geekroom, #pear, #home", 2, {
      opacity: 0,
    }),
  ]);
}

function ScrollWheel() {
  return <div id="scroll_wheel"></div>;
}

export default ScrollWheel;
