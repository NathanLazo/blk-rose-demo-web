import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { type Dispatch, type SetStateAction } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/DropdownMenu";

export default function ThemeSwitcher({
  setTheme,
  theme,
}: {
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
  theme: "light" | "dark";
}) {
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <div className=" z-50 ml-8 cursor-pointer rounded-xl p-1">
            {theme === "light" && <SunIcon className="h-6 w-6 text-zinc-400" />}
            {theme === "dark" && <MoonIcon className="h-6 w-6 text-zinc-400" />}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-38 bg-zinc-800/90">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
              <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
              <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
