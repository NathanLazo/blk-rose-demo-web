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
      <div className="fixed z-50 mt-8 flex w-screen items-center px-8">
        <Navigation
          as="nav"
          fluid
          duration={350}
          className="relative mx-auto rounded-2xl bg-zinc-900/50 p-4"
        >
          {({
            ready,
            size,
            position,
            duration,
          }: {
            ready: boolean;
            size: string;
            position: string;
            duration: string;
          }) => (
            <div className="relative">
              <div
                style={{
                  // @ts-expect-error - TS doesn't like the custom properties
                  "--size": size,
                  "--position": position,
                  "--duration": duration,
                }}
                className={clsx(
                  { hidden: !ready },
                  "duration-[--duration] absolute inset-y-0 left-0 h-full w-[--size] translate-x-[--position] rounded-lg bg-zinc-950/70 transition-[width,transform]",
                )}
              />

              <Navigation.List
                as="ul"
                className="relative flex items-center gap-3"
              >
                {items.map((item, index) => (
                  <Navigation.Item
                    key={index}
                    as="li"
                    onActivated={navigate}
                    className=""
                  >
                    {({
                      setActive,
                      isActive,
                    }: {
                      setActive: () => void;
                      isActive: boolean;
                    }) => (
                      <a
                        onClick={setActive}
                        href="#"
                        className={clsx(
                          isActive
                            ? "text-white"
                            : "text-white/60 hover:text-white",
                          "inline-block px-4 py-1 text-sm transition",
                        )}
                      >
                        {item}
                      </a>
                    )}
                  </Navigation.Item>
                ))}
                <ThemeSwitcher theme={theme} setTheme={setTheme} />
              </Navigation.List>
            </div>
          )}
        </Navigation>
      </div>

      {children}
    </ThemeProvider>
  );
}
