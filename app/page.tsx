import type { Metadata } from "next";
import { Site } from "./site";

export const metadata: Metadata = {
  title: "Martini LabSystem | 20 lat doświadczenia",
  description:
    "Aparatura i wyposażenie laboratoryjne. Martini LabSystem łączy 20 lat doświadczenia z praktycznym doradztwem.",
};

export default function Home() {
  return <Site />;
}
