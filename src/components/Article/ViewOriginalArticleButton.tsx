import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "../lib/utils";

type Props = { href: string; isPositive: boolean };

const ViewOriginalArticleButton = ({ href, isPositive }: Props) => {
  return (
    <Link
      className={cn(
        "flex items-center gap-2 transition-colors duration-200",
        isPositive
          ? "text-paris-green hover:text-paris-green/80"
          : "text-carmine-pink hover:text-carmine-pink/80"
      )}
      href={href}
    >
      <p>View Original Article</p>
      <ArrowRight />
    </Link>
  );
};

export default ViewOriginalArticleButton;
