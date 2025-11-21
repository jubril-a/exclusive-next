import Constraint from "./Constraint";
import { NavClient } from "./NavClient";
import Account from "./Account";

const Navbar = () => {
    

  return (
    <div className="border-b border-b-[#c6c6c648] sticky top-0 z-100 bg-white">
        <div className="bg-black p-2">
            <p className="text-[#FAFAFA] text-center text-sm">Summer Sale For All Gaming Deals And Free Express Delivery - OFF 50%!  <a className="underline text-white font-semibold" href="/#gaming">Shop Now</a></p>
        </div>
        <Constraint>
            <nav className="flex items-center py-4">
                <NavClient />
                <Account />
            </nav>
        </Constraint>
    </div>
  )
}

export default Navbar