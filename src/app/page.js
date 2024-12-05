import Display from "@/components/Display";
import Hero from "@/components/Hero";
import History from "@/components/History";
import TextImage from "@/components/textImage";
import TextVideo from "@/components/TextVideo";
import TextVideo2 from "@/components/TextVideo2";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <TextImage/>
      <Display/>
      <History/>
      <TextVideo/>
      <TextVideo2/>
    </div>
  );
}
