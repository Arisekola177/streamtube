import Link from "next/link"
import Genre from "./Genre"
import SearchMenu from "./SearchMenu"
import ThemeToggler from "./ThemeToggler"


const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between backdrop-blur-2xl transition-colors p-5 bg-[#12121280] gap-4 md:gap-0 sticky z-50 top-0">
       <div>
        <Link href={'/'} className="font-bold text-2xl">Stream<span className="text-red-500">tube</span></Link>
       </div>
       <div className="flex items-center space-x-4">
        {/* Genre */}
        <Genre />
        {/* Search */}
        <SearchMenu />
        {/* ThemeToggle */}
        <ThemeToggler /> 
       </div>
    </div>
  )
}

export default Navbar