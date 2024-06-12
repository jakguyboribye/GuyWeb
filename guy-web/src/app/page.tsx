import LinkBoxes from "./components/LinkBoxes";
import { Avatar } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <section className="relative w-full h-1/4 overflow-hidden">
        <img src="homebanner1.jpeg" alt="" className="block w-full h-auto opacity-60" />
        <div className="absolute inset-0 flex flex-col justify-center items-left ml-[5%]">
          <p className="text-white text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold my-[1%] font-title" id="fadein">Hello There !</p>
          <p className="text-white text-1xl sm:text-2xl md:text-2xl lg:text-4xl font-bold my-[1%] font-title" id="fadein">Welcome to my website</p>
        </div>
      </section>
      <section className=" bg-gray-800 p-10 w-full h-auto flex-row">
        <div className="w-full flex">
          <Avatar size='xl' name='Jakguy Boriboon' src=""></Avatar>
        </div>
      </section>
      <section className="bg-white w-full h-auto">
        <div className="w-full flex items-center align-middle">
          <LinkBoxes />
          <LinkBoxes />
          <LinkBoxes />
          <LinkBoxes />
        </div>
      </section>
    </main>

  );
}
