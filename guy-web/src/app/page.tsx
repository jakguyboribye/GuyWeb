import LinkBoxes from "./components/LinkBoxes";

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
      <section className=" bg-black p-10 w-full h-auto flex-row">
        <div className="w-full flex">
          <img src="https://mrwallpaper.com/images/hd/the-iconic-friendly-face-of-kermit-the-frog-jo8at50q5d6se8j3.jpg" alt="" className="w-1/4"/>
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
