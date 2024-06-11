export default function Home() {
  return (
<main>
<div className="relative w-full h-1/2 overflow-hidden">
    <img src="homebanner1.jpeg" alt="" className="block w-full h-auto opacity-60" />
    <div className="absolute inset-10 flex-row items-center justify-center pt-[4%] px-[2%]">
        <p className="text-white text-[400%] font-bold font-title">Hello There !</p>
        <p className="text-white text-[250%] font-bold font-title">Welcome to my website</p>
    </div>
</div>
</main>
  );
}
