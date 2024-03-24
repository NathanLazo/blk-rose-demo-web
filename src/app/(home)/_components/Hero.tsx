"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "~/components/ui/AuroraBackground";
import BuyButton from "./BuyButton";

export function Hero() {
  return (
    <div className="h-screen overflow-hidden">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-center gap-4 px-4"
        >
          <div className="text-center text-3xl font-bold dark:text-white md:text-7xl">
            Discover the Black Rose Collection.
          </div>
          <div className="py-4 text-base font-extralight dark:text-neutral-200 md:text-4xl">
            Perfect blend of comfort and style.
          </div>
          <BuyButton />
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
