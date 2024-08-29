import LinkBoxes from "./components/LinkBoxes";

export default function Home() {
  return (
    <main>
<section className="relative w-full h-64 md:h-1/4 overflow-hidden">
  <img src="homebanner2.jpeg" alt="" className="block w-full h-full object-cover opacity-60" />
  <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:ml-[5%]">
    {/* Content inside */}
  </div>
</section>

<section className="bg-black p-4 md:p-10 w-full h-auto flex flex-col md:flex-row" style={{
  backgroundImage: "url('bg.png')", 
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
}}>
  <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 py-8 md:py-11">
    <div className="w-full md:w-[46%] block justify-center items-center backdrop-filter rounded-[30px] shadow-lg p-4 md:p-6">
      <h1 className="text-white text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold my-2 md:my-4 font-title">Hi I'm</h1>
      <h1 className="text-blue-600 text-xl sm:text-2xl md:text-2xl lg:text-6xl font-bold my-2 md:my-4 font-title" id="fadein">Jakguy Boriboon</h1>
      <p className="text-white mt-4 md:mt-8">
        👋 Hello! I'm Jakguy Boriboon, a student and developer at the Faculty of Information and Communication Technology at Mahidol University🧑‍💻 . <br /><br />
        I'm currently pursuing a degree in Computer Science, I'm passionate about all things tech and enjoy diving deep into programming-related subjects and discussions. <br /><br />
        This website is my hobby project to express my interests and growth🤓. 
      </p>
      <iframe className="w-full md:w-[80%] h-[20%] md:h-[20%] mt-4 md:mt-10" src="https://open.spotify.com/embed/track/6dOtVTDdiauQNBQEDOtlAB?utm_source=generator" width="100%" height="100%" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div className="w-full md:w-[30%] block justify-center items-center backdrop-filter rounded-[30px] shadow-lg p-4">
      <img src="me2.jpg" alt="" className="w-full h-auto" />
    </div>
  </div>
</section>

      <section className="bg-white w-full h-auto py-10 text-center">
        <h1 className=" text-5xl font-bold pb-12">My Contacts</h1>
        <div className="flex flex-wrap w-full justify-center">
          <LinkBoxes
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            title="LinkedIn"
            description="My Career Milestones"
            link="https://www.linkedin.com/in/jakguyb/" />

          <LinkBoxes
            image="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            title="GitHub"
            description="My GitHub"
            link="https://github.com/jakguyboribye" />

          <LinkBoxes
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            title="Instagram"
            description="Eye Gee"
            link="https://www.instagram.com/jakguyboribye/" />

          <LinkBoxes
            image="https://static.vecteezy.com/system/resources/previews/023/741/147/original/discord-logo-icon-social-media-icon-free-png.png"
            title="Discord"
            description="Add me on Discord"
            link="http://discordapp.com/users/UserID375244905171124224" />

          <LinkBoxes
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg"
            title="X"
            description="Dumb Bird"
            link="https://twitter.com/JakghuyBrb" />

          <LinkBoxes
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/320px-LINE_logo.svg.png"
            title="LINE"
            description="Add me on LINE"
            link="https://line.me/ti/p/MHqIaWCc2K" />

          <LinkBoxes
            image="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
            title="YouTube"
            description="yootoob"
            link="https://youtube.com/@jakguy5851?si=q5UHoNPrmOxBOSm2" />

          <LinkBoxes
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/768px-Adobe_Acrobat_DC_logo_2020.svg.png"
            title="CV"
            description="my curriculum vitae"
            link="#" />

        </div>
      </section>



    </main>

  );
}
