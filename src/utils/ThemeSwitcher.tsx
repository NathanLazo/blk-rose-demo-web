import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { type Dispatch, type SetStateAction } from "react";

export default function ThemeSwitcher({
  setTheme,
  theme,
}: {
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
  theme: "light" | "dark";
}) {
  return (
    <>
      <button
        className="cursor-pointer rounded-xl p-1 "
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" && (
          <SunIcon className="h-5 w-5 text-zinc-300 transition-colors  hover:text-zinc-50" />
        )}
        {theme === "dark" && (
          <MoonIcon className="h-5 w-5 text-zinc-300 transition-colors hover:text-zinc-50 " />
        )}
      </button>
    </>
  );
}
