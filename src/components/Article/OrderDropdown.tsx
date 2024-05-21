import { ArticleOrder } from "@/types/Article";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../Dropdown";

type Props = {
  order: ArticleOrder;
  setOrder: (order: ArticleOrder) => void;
};
const OrderDropdown = ({ order, setOrder }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border capitalize border-dark-slate-gray/25 px-4 flex items-center gap-4 py-2 rounded-[20px]">
        {order}
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-aluminium text-white">
        <DropdownMenuItem
          className="hover:text-white/80 duration-200 transition-colors cursor-pointer"
          onClick={() => setOrder("latest")}
        >
          Latest
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="hover:text-white/80 duration-200 transition-colors cursor-pointer"
          onClick={() => setOrder("oldest")}
        >
          Oldest
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OrderDropdown;
