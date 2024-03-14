import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main className="xl:max-w-screen-xl my-5 mx-10 fixed">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-11">
          <div>
            <TopBar />
          </div>
          <div className="grid grid-cols-11 gap-5 mt-5">
            <div className="col-span-3">3</div>
            <div className="col-span-6">4</div>
            <div className="col-span-2">5</div>
          </div>
        </div>
      </div>
    </main>
  );
}
