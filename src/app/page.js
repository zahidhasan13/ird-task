import Category from "@/components/Category";
import DuaCards from "@/components/DuaCards";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main className="z-0 lg:fixed lg:inset-x-0 xl:fixed xl:inset-x-0 xl:p-6 xl:pb-0 2xl:px-10 2xl:pt-6 2xl:fixed 2xl:inset-x-0 3xl:p-10 3xl:pb-0 3xl:fixed 3xl:inset-x-0">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-11">
          <div>
            <TopBar />
          </div>
          <div className="grid 2xl:grid-cols-11 md:grid-cols-12 gap-5">
            <div className="2xl:col-span-3 md:col-span-4">
              <Category />
            </div>
            <div className="2xl:col-span-6 md:col-span-8">
              <DuaCards />
            </div>
            <div className="col-span-2 md:hidden 2xl:block">5</div>
          </div>
        </div>
      </div>
    </main>
  );
}
