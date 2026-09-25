"use client";
import { useSyncExternalStore } from "react";

const methali = [
  { sw: "Haba na haba hujaza kibaba.", en: "Little by little fills the measure." },
  { sw: "Pole pole ndio mwendo.", en: "Slowly, slowly is the way to go." },
  { sw: "Penye nia pana njia.", en: "Where there is a will, there is a way." },
  { sw: "Usipoziba ufa utajenga ukuta.", en: "Fill the crack, or you will be building a wall." },
  { sw: "Kidole kimoja hakivunji chawa.", en: "One finger cannot crush a louse." },
  { sw: "Mtaka cha mvunguni sharti ainame.", en: "Whoever wants what is under the bed must bend down." },
  { sw: "Akili ni nywele, kila mtu ana zake.", en: "Wisdom is like hair: everyone has their own." },
  { sw: "Asiyefunzwa na mamaye hufunzwa na ulimwengu.", en: "Whoever is not taught by their mother is taught by the world." },
  { sw: "Maji yakimwagika hayazoleki.", en: "Spilt water cannot be gathered up." },
  { sw: "Mchagua jembe si mkulima.", en: "The one who fusses over the hoe is no farmer." },
];

let pick;

// Chosen once per page load; the server renders nothing so hydration never mismatches.
const readPick = () => (pick ??= Math.floor(Math.random() * methali.length));
const noSubscribe = () => () => {};

// A random Swahili proverb on each load.
export default function Methali() {
  const index = useSyncExternalStore(noSubscribe, readPick, () => -1);
  const { sw, en } = methali[Math.max(index, 0)];

  return (
    <figure
      className={`text-center transition-opacity duration-700 ${index < 0 ? "opacity-0" : "opacity-100"}`}
    >
      <blockquote
        lang="sw"
        className="display mx-auto max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)]"
      >
        {sw}
      </blockquote>
      <p className="display display-em mx-auto mt-6 max-w-xl text-xl sm:text-2xl">
        {en}
      </p>
    </figure>
  );
}
