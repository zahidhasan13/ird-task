import books from "@/assets/books.png";
import dua from "@/assets/dua.png";
import fav from "@/assets/fav.png";
import home from "@/assets/home.png";
import icon from "@/assets/icon.png";
import logo from "@/assets/logo.png";
import memorize from "@/assets/memorize.png";
import menu from "@/assets/menu.png";
import rukaya from "@/assets/rukaya.png";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="row-span-full hidden xl:block xl:z-[-1] 2xl:block 2xl:z-[-1] 3xl:block 3xl:z-[-16]">
      <div className="w-[100px] flex flex-col gap-y-5 fixed overflow-hidden">
        <div className="bg-white rounded-3xl px-4 dark:bg-dark-bg lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] 3xl:h-[93vh] scrl-left pb-16">
          <div className="pt-7 mb-10 xl:mb-16 2xl:mb-16 3xl:mb-24 container">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                className="h-13 w-16 mx-auto drop-shadow-primary xl:mb-0 cursor-pointer"
              />
            </Link>
          </div>
          <Link href="/">
            <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center items-center">
                <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <Image src={home} alt="home" />
                </div>
                <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium "></h2>
              </div>
            </div>
          </Link>
          <Link href="#">
            <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center items-center">
                <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <Image src={menu} alt="menu" />
                </div>
                <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium "></h2>
              </div>
            </div>
          </Link>
          <Link href="#">
            <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center items-center">
                <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <Image src={memorize} alt="memorize" />
                </div>
                <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium "></h2>
              </div>
            </div>
          </Link>
          <Link href="#">
            <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center items-center">
                <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <Image src={fav} alt="fav" />
                </div>
                <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium "></h2>
              </div>
            </div>
          </Link>
          <Link href="#">
            <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center items-center">
                <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <Image src={rukaya} alt="rukaya" />
                </div>
                <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium "></h2>
              </div>
            </div>
          </Link>
          <Link href="#">
            <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center items-center">
                <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <Image src={dua} alt="dua" />
                </div>
                <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium "></h2>
              </div>
            </div>
          </Link>
          <Link href="#">
            <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
              <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
              <div className="p-2 flex flex-row justify-center items-center">
                <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                  <Image src={books} alt="books" />
                </div>
                <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium "></h2>
              </div>
            </div>
          </Link>
          <div>
            <div className="pt-6 xl:pt-16 2xl:pt-16 3xl:pt-24 pb-2 text-center">
              <Link href="/">
                <button className="w-13 h-13 bg-[#20A45C] drop-shadow-[#20A45C] rounded-lg lg:mr-4 ml-2 text-white text-sm p-2">
                  <div className="flex justify-center items-center">
                    <p className="hidden">I Want to support</p>
                    <Image src={icon} alt="icon" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
