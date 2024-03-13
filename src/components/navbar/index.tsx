"use client";
import React from "react";
import { ThemeProvider } from "~/utils/ThemeProvider";
import ThemeSwitcher from "~/utils/ThemeSwitcher";
import { Navigation } from "~/components/ui/Navigation";
import clsx from "clsx";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import DesktopNavItems from "./DesktopNavItems";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");
  const items = [
    "Overview",
    "Integrations",
    "Activity",
    "Domains",
    "Usage",
    "Monitoring",
  ];

  function navigate() {
    // the callback is fired once the animation is completed
    // to allow smooth transition
  }

  const handleAnimation = () => {
    // when tab is clicked, we want to animate the {children} opacity
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme={theme}
      disableTransitionOnChange
    >
      <div className="fixed z-50 mt-4 hidden w-full items-center justify-center md:flex   ">
        <Navigation
          as="nav"
          className="relative rounded-full border border-white/10 bg-white/5 p-3"
        >
          {({
            ready,
            size,
            position,
            duration,
          }: {
            ready: boolean;
            size: number;
            position: number;
            duration: number;
          }) => (
            <div
              style={{
                // @ts-expect-error // ignore this line
                "--size": size,
                "--position": position,
                "--duration": duration,
              }}
              className="flex"
            >
              <div
                className={clsx(
                  { hidden: !ready },
                  "absolute bottom-0 h-1/2 w-[var(--size)] translate-x-[var(--position)] bg-white/75 blur-xl transition-[width,transform] duration-300",
                )}
              ></div>

              <div className="absolute inset-0 rounded-full bg-zinc-800/90"></div>

              <DesktopNavItems
                items={items}
                navigate={navigate}
                ready={ready}
              />
              <ThemeSwitcher setTheme={setTheme} theme={theme} />

              {/* TODO: Shopping cart here */}

              {/* TODO: User Dropdown here */}
            </div>
          )}
        </Navigation>
      </div>

      {children}
    </ThemeProvider>
  );
}
