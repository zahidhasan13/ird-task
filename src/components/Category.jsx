import React from "react";
import categoryIcon from "@/assets/cat-icon.png";
import search from "@/assets/search.png";
import Image from "next/image";

const Category = () => {
  return (
    <div className="fixed h-[85.5vh] z-[0] lg:top-[119px] lg:w-[350px] xl:w-[350px] 2xl:w-[350px] 3xl:w-[350px] overflow-hidden bg-white rounded-2xl dark:bg-dark-bg xs:hidden sm:hidden md:hidden lg:block xs:h-screen sm:h-screen lg:h-[74vh]">
      <div className="fixed w-[350px] rounded-t-2xl bg-[#1FA45B] justify-center items-center h-14 flex flex-row px-5">
        <p className="text-base text-white mx-auto">Categories</p>
      </div>
      <div className="fixed overflow-hidden w-[350px] mt-14">
        <div className="mx-3 pt-4">
          <label className="relative block w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Image src={search} alt="search" />
            </span>
            <input
              id="filerted_catList"
              className="h-12   placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-[#1FA45B] focus:ring-primary focus:ring-1  
        sm:text-sm dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96a2b4]"
              placeholder="Search Categories"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div
          className='h-[calc(100vh-32vh)] lg:h-[calc(100vh_-_45.5vh)] 3xl:h-[68vh]"
               scrl-cat pb-8  mb-4 overflow-hidden'
        >
          <div className="mt-4">
            <div className="group scroll-mt-4">
              <a href="/duas/dua's-importance?cat=1">
                <div className="cursor-pointer bg-white flex justify-between items-center mx-3 dark:bg-transparent my-2">
                  <div className="bg-icon-bg dark:bg-dark-bg-dark group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark">
                    <div className="flex flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
                      <div className="bg-dua-bg dark:bg-dark-bg  flex rounded-lg items-center h-14 w-14 xs:w-12 xs:h-12">
                        <Image
                          src={categoryIcon}
                          alt="duar_gurutto"
                          className="p-3"
                        />
                      </div>
                      <div className="w-40 text-left ml-2 ">
                        <p className="text-base  style-kalpurush text-black style-inter-cat dark:text-dark-text sm:text-mss">
                          Dua's Importance
                        </p>
                        <p className="text-mute-grey text-xs mt-1 dark:text-dark-text xs:text-[11px] ">
                          Subcategory: 7
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row w-12 items-center xl:hidden">
                      <div className="bg-devider w-0.1 mr-3 h-12 dark:hidden"></div>
                      <div className="flex flex-col gap-y-1 justify-center items-center">
                        <p className="text-base dark:text-dark-text xs:text-sm sm:text-mss">
                          21
                        </p>
                        <p className="text-mute-grey text-xs dark:text-dark-text xs:text-[11px]">
                          Duas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="ml-12 border-l-2 border-dotted my-2 border-[#1FA45B]">
                <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 ">
                  <div className="flex flex-row my-2">
                    <div className="bg-[#1FA45B] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
                    <div className="flex flex-col justify-start items-start">
                      <a href="/duas/dua's-importance?cat=1&amp;subcat=1">
                        <p className="text-title cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs style-Kalpurush">
                          The servant is dependent on his Lord
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="bg-[#1FA45B] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
                    <div className="flex flex-col justify-start items-start">
                      <a href="/duas/dua's-importance?cat=1&amp;subcat=2">
                        <p className="text-title cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs style-Kalpurush">
                          The most important thing to ask Allah for
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="bg-[#1FA45B] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
                    <div className="flex flex-col justify-start items-start">
                      <a href="/duas/dua's-importance?cat=1&amp;subcat=3">
                        <p className="text-title cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs style-Kalpurush">
                          Ask for paradise &amp; protection from fire
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="bg-[#1FA45B] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
                    <div className="flex flex-col justify-start items-start">
                      <a href="/duas/dua's-importance?cat=1&amp;subcat=4">
                        <p className="text-title cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs style-Kalpurush">
                          Dua to remain steadfast on the religion
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="bg-[#1FA45B] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
                    <div className="flex flex-col justify-start items-start">
                      <a href="/duas/dua's-importance?cat=1&amp;subcat=5">
                        <p className="text-title cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs style-Kalpurush">
                          Dua of good outcome in all deeds
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="bg-[#1FA45B] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
                    <div className="flex flex-col justify-start items-start">
                      <a href="/duas/dua's-importance?cat=1&amp;subcat=6">
                        <p className="text-title cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs style-Kalpurush">
                          Seeking whatever good Allah can bestow
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="bg-[#1FA45B] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
                    <div className="flex flex-col justify-start items-start">
                      <a href="/duas/dua's-importance?cat=1&amp;subcat=7">
                        <p className="text-title cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs style-Kalpurush">
                          Shelter from horror, misery, evil consequences and
                          rejoicing of the enemy
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
