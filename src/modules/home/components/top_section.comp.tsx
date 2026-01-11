/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from "react";
import TopSectionUI from "./top_section.UI";
import TopFurnitureImage1 from "@/assets/images/chair.png";
import TopFurnitureImage2 from "@/assets/images/white_chair.png";
import TopFurnitureImage3 from "@/assets/images/cauch.png";
import ElectonicsImage from "@/assets/images/electronic.png";


/* SLIDES DATA */
const slides = [
  {
    img: TopFurnitureImage1.src,
    text: "Figma ipsum component variant main layer. Stroke hand ellipse move shadow thumbnail arrow.",
  },
  {
    img: TopFurnitureImage2.src,
    text: "Our Buyer Protection is added for a fee to every purchase made with the “Buy now” button.",
  },
  {
    img: TopFurnitureImage3.src,
    text: "Alo cream colored sweatshirt size medium. Stains on front of shirt as shown in photos",
  },
];

/* VARIANTS */
const imageForward = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { y: 180, opacity: 0 },
};

const imageRise = {
  initial: { y: 180, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
};

const imageLastExit = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 180, opacity: 0 },
};

const textForward = {
  initial: { x: -300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { y: 180, opacity: 0 },
};

const textRise = {
  initial: { y: 180, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
};

const textLastExit = {
  initial: { x: -300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -180, opacity: 0 },
};

/* MAIN LOGIC */
const TopSectionComp = () => {
  const [fIndex, setFIndex] = useState(0);
  const [fDirection, setFDirection] = useState("static-start");
  const [eIndex, setEIndex] = useState(0);

  /* AUTO SLIDER */
  useEffect(() => {
    const int = setInterval(() => {
      if (fIndex === 0) {
        setFDirection("forward");
        setFIndex(1);
      } else if (fIndex === 1) {
        setFDirection("forward");
        setFIndex(2);
      } else {
        setFDirection("backward");
        setFIndex(0);
      }
    }, 6000);

    return () => clearInterval(int);
  }, [fIndex]);

  /* IMAGE VARIANTS */
  const getImageVariant = () => {
    if (fDirection === "static-start") return {};
    if (fDirection === "forward" && fIndex === 2) return imageForward;
    if (fDirection === "forward" && fIndex === 1) return imageRise;
    if (fDirection === "backward" && fIndex === 0) return imageLastExit;
    return imageForward;
  };

  /* TEXT VARIANTS */
  const getTextVariant = () => {
    if (fDirection === "static-start") return {};
    if (fDirection === "forward" && fIndex === 2) return textForward;
    if (fDirection === "forward" && fIndex === 1) return textRise;
    if (fDirection === "backward" && fIndex === 0) return textLastExit;
    return textForward;
  };

  /* DOT HANDLERS */
  const handleDotClick = (dot: any) => {
    if (dot < fIndex) setFDirection("backward");
    else setFDirection("forward");
    setFIndex(dot);
  };

  return (
    <TopSectionUI
      fIndex={fIndex}
      eIndex={eIndex}
      slides={slides}
      ElectonicsImage={ElectonicsImage.src}
      getTextVariant={getTextVariant}
      getImageVariant={getImageVariant}
      onDotClick={handleDotClick}
      onElectronicDotClick={setEIndex}
    />
  );
}


export default TopSectionComp;