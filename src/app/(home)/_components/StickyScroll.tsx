/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import clsx from "clsx";
import { ScrollObserver } from "~/components/ui/ScrollObserver";

export default function StickyScroll() {
  const items = [
    {
      title: "Loudness correction",
      content:
        "Ensure that your audio maintains consistent relative loudness across one or many recordings.",
    },
    {
      title: "Speech isolation",
      content:
        "Isolate and boost voices, using neural networks trained to distinguish speech from external noise.",
    },
    {
      title: "Noise reduction",
      content:
        "Eliminate all air conditioners, lawn mowers, noisy neighbors, and other background noises from your recording.",
    },
  ];

  return (
    <div className="min-h-screen w-screen px-8 py-12 md:px-0">
      <div className="pb-24 text-center text-sm text-white/30">Scroll down</div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollObserver className="relative grid grid-cols-2 gap-32">
          {(isHidden: never) => (
            <>
              <ScrollObserver.TriggerGroup className="py-[50vh]">
                {items.map((item, index) => (
                  <ScrollObserver.Trigger
                    id={`features-${index}`}
                    key={index}
                    className="relative scroll-mt-[50vh]"
                  >
                    {(isActive: never) => (
                      <div
                        className={clsx(
                          isActive
                            ? "text-white"
                            : "text-white/10 hover:text-white/30",
                          "relative -mx-8 -mb-4 rounded-2xl p-8 transition duration-300 hover:bg-white/10",
                        )}
                      >
                        <div className="font-epilogue text-4xl font-bold">
                          {item.title}
                        </div>

                        <div className="mt-4 text-lg">{item.content}</div>

                        <a
                          href={`#features-${index}`}
                          className="absolute inset-0"
                        ></a>
                      </div>
                    )}
                  </ScrollObserver.Trigger>
                ))}
              </ScrollObserver.TriggerGroup>

              <div className="sticky top-0 h-[100vh]">
                <div
                  className={clsx(
                    { "opacity-0 delay-100": !isHidden },
                    "absolute inset-0 flex items-center",
                  )}
                >
                  <div className="aspect-square w-full rounded-3xl bg-white/10"></div>
                </div>

                <ScrollObserver.ReactorGroup className="flex items-center justify-center">
                  {items.map((item, index) => (
                    <ScrollObserver.Reactor
                      key={index}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {(isActive: never) => (
                        <div
                          className={clsx(
                            {
                              "opacity-0 delay-100": !isActive,
                              "opacity-100": isActive,
                              "from-purple-100 to-indigo-300": index == 0,
                              "from-cyan-300 to-sky-400": index == 1,
                              "from-amber-300 to-orange-400": index == 2,
                            },
                            "aspect-square w-full rounded-3xl bg-gradient-to-b transition",
                          )}
                        ></div>
                      )}
                    </ScrollObserver.Reactor>
                  ))}
                </ScrollObserver.ReactorGroup>
              </div>
            </>
          )}
        </ScrollObserver>
      </div>
    </div>
  );
}
