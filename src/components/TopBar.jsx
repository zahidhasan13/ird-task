import Image from "next/image";
import React from "react";
import searchIcon from "@/assets/search.png";
import profile from "@/assets/profile.png";
import setting from "@/assets/settings.svg";
import menu from "@/assets/menu.png";
import language from "@/assets/language.png";
import gSetting from "@/assets/g-setting.png";

const TopBar = () => {
  return (
    // <div className="flex items-center justify-between">
    //   <div>
    //     <h2 className="text-2xl">Duas Page</h2>
    //   </div>
    //   <div className="flex items-center">
    //     <div className="flex items-center bg-white rounded-md p-1 mr-20">
    //       <input
    //         type="text"
    //         className="px-2 py-2 focus:outline-none"
    //         placeholder="Search by Dua Name"
    //       />
    //       <button className="bg-gray-200 py-2 px-5 rounded-md">
    //         <Image src={searchIcon} alt="search-icon" />
    //       </button>
    //     </div>
    //     <div className="flex items-center space-x-5">
    //       <div className="flex items-center space-x-2">
    //         <Image src={profile} alt="profile" />
    //         <Image src={downIcon} alt="profile" />
    //       </div>
    //       <Image src={setting} alt="setting" />
    //     </div>
    //   </div>
    // </div>
    <div className="xl:col-start-2 xl:col-span-full 2xl:col-start-2 2xl:col-span-full 2xl:z-[-1] 3xl:col-start-2 3xl:col-span-full 3xl:z-[-16]">
      <div className="right-10 lg:left-[1rem] xl:left-1  hidden xl:relative mb-20 lg: xl:block 2xl:block 3xl:block">
        <div className="grid grid-cols-[82.2%,1fr] xl:w-[99%] 2xl:grid-cols-[82.2%,1fr] 3xl:grid-cols-[81%,1fr]">
          <div className="flex flex-row justify-between">
            <div className="text-left flex items-center">
              <div>
                <h1 className="text-2xl dark:text-dark-text">Dua Page</h1>
                <p className="text-sm text-mute-grey-200 dark:text-dark-text"></p>
              </div>
            </div>
            <div className="flex flex-row items-center relative">
              <form className="sm-max:w-full">
                <div className="w-82 sm-max:w-full relative md:mr-6 md:w-72 lg:mr-6">
                  <div className="flex justify-between sm-max:flex-col sm-max:gap-4">
                    <input
                      id="search_box"
                      className="placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder: placeholder:text-sm bg-white sm-max:bg-gray-200 w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  sm:text-sm sm-max:dark:bg-dark-bg-lite md:dark:bg-dark-bg-dark dark:bg-dark-bg dark:placeholder:opacity-[.6] lg:dark:bg-dark-bg-dark "
                      placeholder="Search by Dua Name"
                      type="text"
                      name="search"
                      value=""
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center bg-gray-100 dark:bg-dark-bg-dark md-min:dark:hover:text-gray-400 dark:text-gray-500 cursor-pointer md-minhover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-[9px] rounded-md md-min:absolute right-1 top-1 sm-max:bg-primary md:bg-white md:dark:bg-dark-bg-lite lg:bg-white lg:dark:bg-dark-bg-lite sm-max:focus:bg-green-700"
                    >
                      <span className="flex items-center sm-max:hidden">
                        <Image src={searchIcon} alt="Search" />
                      </span>
                      <p className="hidden sm-max:block sm-max:text-white">
                        Search
                      </p>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end">
            <div className="md:-z-[1] lg:-z-[1]">
              <div className="relative">
                <button
                  className="
                text-opacity-90
                group inline-flex items-center rounded-md px-3 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-body-bg focus-visible:ring-opacity-75 
                sm:px-0
                "
                  id="headlessui-popover-button-:r0:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <Image src={profile} alt="profile" />
                  <svg
                    className="ml-2 mr-2"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                      fill="#868686"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <Image
                src={setting}
                className="2xl:hidden 3xl:hidden"
                alt="settings"
              />
              <main className="2xl:hidden 3xl:block fixed overflow-hidden bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out z-20 translate-x-full transition-all delay-200 opacity-0">
                <section className="right-0 xs:w-[280px] sm:w-[340px] md:w-[340px] lg:w-[340px] xl:w-[340px] rounded-l-3xl z-20 bg-white dark:bg-dark-bg-dark absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform translate-x-full">
                  <article className="relative w-full flex flex-col overflow-none h-full scrl xl:pb-0">
                    <div
                      id="right-bar"
                      className="overflow-hidden w-full 2xl:w-[270px] 3xl:w-[300px]"
                    >
                      <div className="bg-white dark:bg-dark-bg w-full h-[85.5vh] rounded-3xl scrl-left pb-16 xs:rounded-3xl xs:h-[72vh] xs:pb-2 sm:h-fit sm:rounded-3xl md:h-screen md:rounded-l-3xl md:rounded-r-none lg:h-screen lg:rounded-l-3xl lg:rounded-r-none xl:h-screen xl:rounded-l-3xl xl:rounded-r-none 2xl:w-full 3xl:w-full">
                        <div
                          className=" pt-9 pb-6 
          xs:pt-0
          sm:pt-0
          "
                        >
                          <p className="text-center text-xl dark:text-dark-text xs:hidden sm:hidden">
                            Settings
                          </p>
                        </div>
                        <div className="xs:pb-4 sm:pb-4 w-full">
                          <div className="mx-4 my-4">
                            <div className="border-x-devider border-x-1 border-b-1 rounded-lg dark:border-none dark:bg-dark-bg-dark">
                              <div className="cursor-pointer">
                                <div className="dark:bg-dark-bg-lite transition duration-300 delay-[10ms] bg-dua-bg flex flex-row w-full rounded-lg">
                                  <div className="bg-primary w-1 rounded-tl-lg rounded-bl-lg"></div>
                                  <div className="p-2 flex flex-row items-center w-full">
                                    <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                      <Image src={language} alt="language" />
                                    </div>
                                    <p className="text-primary font-medium  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                      Language Settings
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="">
                                <div className="py-6 rounded-b-lg">
                                  <div className="flex flex-row gap-x-3 mx-4 justify-center">
                                    <button className="bg-primary text-white rounded-md   w-29 h-10 text-ms xs:w-full sm:w-full">
                                      English
                                    </button>
                                    <button className=" dark:bg-dark-bg-lite text-black dark:text-[#e4e4e4] border border-solid border-[#cccdcf] dark:border-none rounded-md w-29 h-10 text-ms xs:w-full sm:w-full">
                                      বাংলা
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mx-4 my-4">
                            <div className="">
                              <div className="cursor-pointer">
                                <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                                  <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                                  <div className="p-2 flex flex-row items-center w-full">
                                    <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                      <Image src={gSetting} alt="general" />
                                    </div>
                                    <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                      General Settings
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mx-4 my-4">
                            <div className="">
                              <div className="cursor-pointer">
                                <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                                  <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                                  <div className="p-2 flex flex-row items-center w-full">
                                    <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                      <Image src={menu} alt="font" />
                                    </div>
                                    <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                      Font Settings
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mx-4 my-4">
                            <div className="">
                              <div className="cursor-pointer">
                                <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                                  <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                                  <div className="p-2 flex flex-row items-center w-full">
                                    <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                      <Image src={menu} alt="font" />
                                    </div>
                                    <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                      Appearance Settings
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </section>
                <section className=" w-screen h-full cursor-pointer "></section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
