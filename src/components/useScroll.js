import React from "react";
import { useInView } from "react-intersection-observer";
// Framer motion
import { useAnimation } from "framer-motion";

export const useScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({threshold: 0.3})

    if (view) {
        controls.start("shown");
    } else {
        controls.start("hidden");
    }

    return [element, controls];
}