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

let visit;

// Counts a visit once per browser session, so reloading doesn't skip ahead.
function readVisit() {
  if (visit === undefined) {
    try {
      let n = Number(localStorage.getItem("rm-visits")) || 0;
      if (!sessionStorage.getItem("rm-counted")) {
        n += 1;
        localStorage.setItem("rm-visits", String(n));
        sessionStorage.setItem("rm-counted", "1");
      }
      visit = Math.max(n, 1);
    } catch {
      visit = 1;
    }
  }
  return visit;
}

const noSubscribe = () => () => {};
const pad = (n) => String(n).padStart(2, "0");

// A different Swahili proverb on every visit: a small reason to come back.
export default function Methali() {
  const n = useSyncExternalStore(noSubscribe, readVisit, () => 0);
  const index = (Math.max(n, 1) - 1) % methali.length;
  const { sw, en } = methali[index];

  return (
    <figure
      className={`text-center transition-opacity duration-700 ${n ? "opacity-100" : "opacity-0"}`}
    >
      <figcaption className="label mb-8 text-ink-muted">
        {n > 1 ? `Karibu tena · Visit ${pad(n)}` : "Karibu · First visit"}
      </figcaption>
      <blockquote
        lang="sw"
        className="display mx-auto max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)]"
      >
        {sw}
      </blockquote>
      <p className="display display-em mx-auto mt-6 max-w-xl text-xl sm:text-2xl">
        {en}
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-8">
        <span className="chip chip-lg">
          Methali {pad(index + 1)} / {methali.length}
        </span>
        <span className="chip chip-lg">A new one every visit</span>
      </div>
    </figure>
  );
}
