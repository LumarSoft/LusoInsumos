import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

// Dropdown
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  return (
    <div className="h-16 w-full flex justify-between px-4 md:px-28 2xl:px-80 2xl:h-28 items-center py-4 fixed text-4xl top-0 left-0">
      {/* Dropdown aparece nada mas en caso de responsive */}
      <DropdownComponent />

      <a>
        <img src="/logo.png" className="w-auto h-14 md:h-16 2xl:h-24 block" />
      </a>

      {/* aca irian las categorias */}

      <div className="flex gap-2 md:gap-4 items-center text-red">
        <a>
          <FaUser className="text-red-800 hidden lg:block" />
        </a>
        <a>
          <FaShoppingCart className="text-cyan-600" />
        </a>
      </div>
    </div>
  );
};

const DropdownComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="block lg:hidden">
        <GiHamburgerMenu />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
