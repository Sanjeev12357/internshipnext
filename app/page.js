import HomePage from "@/components/Home/HomePage";
import RightSiderbar from "@/components/Home/RightSiderbar";
import LeftSidebar from "@/components/Home/Sidebar";




export default function Home() {
  return (
    <div className="flex ">
      <LeftSidebar />
      <HomePage />
      <div className="hidden ">
        <RightSiderbar />
      </div>
    </div>
  );
}
