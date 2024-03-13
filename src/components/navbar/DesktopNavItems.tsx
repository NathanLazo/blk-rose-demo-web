import clsx from "clsx";
import React from "react";
import { Navigation } from "../ui/Navigation";

export default function DesktopNavItems({
  items,
  navigate,
  ready,
}: {
  items: string[];
  navigate: () => void;
  ready: boolean;
}) {
  return (
    <div className="relative">
      <div
        className={clsx(
          { hidden: !ready },
          "absolute inset-y-0 h-full w-[var(--size)] translate-x-[var(--position)] rounded-full bg-white/10 transition-[width,transform] duration-300",
        )}
      ></div>
      <div
        className={clsx(
          { hidden: !ready },
          "absolute bottom-0 h-1/3 w-[var(--size)] translate-x-[var(--position)] rounded-full bg-white opacity-20 blur-md transition-[width,transform] duration-300",
        )}
      ></div>

      <Navigation.List as="ul" className="relative flex items-center gap-3">
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
                href="#"
                className={clsx(
                  [
                    isActive
                      ? "text-shadow-sm text-white/75"
                      : "text-white/60 hover:text-white/75",
                  ],
                  "inline-block px-4 py-1.5 text-sm font-light transition-[text-shadow,color] duration-300",
                )}
                onClick={setActive}
              >
                {item}
              </a>
            )}
          </Navigation.Item>
        ))}
      </Navigation.List>
    </div>
  );
}
