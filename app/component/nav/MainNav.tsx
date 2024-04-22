
import Link from "next/link";
import Contain from "../Contain";
import SearchArea from "./SearchArea";
import Categories from "./Categories";

const MainNav = () => {
  return <div className="sticky top-0 w-full bg-orange-300 z-30 shadow-sm">
    <div className="py-4 border-b-[1px]">
    <Contain>
    <div className="flex items-center justify-between gap-3 md:gap-0 ">
    <Link href="/" className="font-bold text-3xl text-teal-200">PAWS&Play</Link>

    <div className="md:flex hidden">
        <SearchArea/>
    </div>
    </div>
    </Contain>
    </div>
    <Categories/>
  </div>;
};

export default MainNav;
