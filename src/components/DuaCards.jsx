import copy from "@/assets/copy.png";
import share from "@/assets/share.png";
import report from "@/assets/report.png";
import memorize from "@/assets/memorize.png";
import fav from "@/assets/fav.png";
import ayatIcon from "@/assets/ayat-icon.png";
import Image from "next/image";

const DuaCards = () => {
  return (
    <div
      className="w-full sm-max:overflow-y-auto scrl sm-max:pb-20
    md-min:h-[calc(100vh-100px)] md:pb-48 md-max:w-[98%] md-max:mx-auto
    lg:pb-6
    xl-min:pb-8 xl:w-full sm-max:px-2 delay-1000 transition duration-1000 ease-linear lg-min:w-[102%] 
    "
    >
      <div class="flex mb-5 flex-row bg-white rounded-lg px-5 py-4 justify-start items-center dark:bg-dark-bg">
        <p class="text-title font-medium leading-[25px]">
          <span class="text-[#1FA45B]  font-medium leading-[25px]">
            Section:{" "}
          </span>
          The servant is dependent on his Lord
        </p>
      </div>
      <div className=" bg-white rounded-lg mb-5 dark:bg-dark-bg">
        <div className="p-6">
          <div>
            <div class="flex flex-row  justify-start items-center ">
              <Image src={ayatIcon} alt="duacard" class="mr-3" />
              <p class="text-[#1FA45B] font-medium style-Kalpurush-dua-title">
                1. The servant is dependent on his Lord #1
              </p>
            </div>
            <div class="flex flex-col justify-start items-start">
              <div class="w-full">
                <p class="mt-5 text-justify leading-8 font-normal">
                  <span>
                    {" "}
                    All human beings depend on Allah for their welfare and
                    prevention of evil in various matters of their religion and
                    world. Allah says (interpretation of the meaning): O
                    mankind, you are those in need of Allah, while Allah is the
                    Free of need, the Praiseworthy.
                  </span>
                </p>
              </div>
              <div>
                <p class="mt-5 style-Kalpurush style-inter font-normal text-[#1FA45B]">
                  Reference:
                </p>
                <div class="mt-1 style-Kalpurush style-inter font-normal dark:text-dark-text">
                  <span> Surah Al-Fatir 35:15</span>
                </div>
              </div>
            </div>
            <div class="flex flex-row items-center justify-between px-6">
              <div class="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
                <audio></audio>
                <div class="flex flex-row items-center gap-x-3 xs:w-full">
                  <input
                    class="hidden"
                    type="range"
                    min="0"
                    max="0"
                    value="0"
                  />
                </div>
                <div class="hidden">
                  <p class="ml-2 text-mute-grey-200 text-sm dark:text-dark-text">
                    00:00
                  </p>
                </div>
                <div class="hidden">
                  <Image
                    class="cursor-pointer w-8  opacity-60"
                    alt="suffle"
                    src={copy}
                  />
                </div>
              </div>
              <div class="flex items-center flex-row justify-between py-6 gap-x-8 xs:gap-x-6">
                <div id="copy" class="relative w-6">
                  <Image class="cursor-pointer" src={copy} alt="copy" />
                </div>
                <div id="bookmark" class="relative w-6">
                  <Image class="cursor-pointer" src={fav} alt="bookmark" />
                </div>
                <div id="plan" class="relative w-6">
                  <Image class="cursor-pointer" src={memorize} alt="plan" />
                </div>
                <div id="share" class="relative w-6">
                  <Image class="cursor-pointer" src={share} alt="share" />
                </div>
                <div id="report" class="relative w-6">
                  <Image class="cursor-pointer" src={report} alt="report" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaCards;
