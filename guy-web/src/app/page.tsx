import Image from "next/image";
import Video from 'next-video';
import harkonen from "../../videos/harkonen.mp4"


export default function Home() {
  return (
    <main className="">
      <Video src={harkonen} autoPlay loop controls={false} />;
    </main>
  );
}
