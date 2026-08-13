import type { Metadata } from "next";
import { Site } from "./site";

export const metadata: Metadata = {
  title: "Martini LabSystem | Laboratory equipment & solutions",
  description:
    "Laboratory equipment distribution backed by over 20 years of experience. Instruments, furniture, consumables and practical support.",
};

export default function Home() {
  return <Site />;
}
