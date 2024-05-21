import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "../lib/utils";

type Props = { href: string; isPositive: boolean };

const ViewOriginalArticleButton = ({ href, isPositive }: Props) => {
  return (
    <Link
      className={cn(
        "flex items-center gap-2",
        isPositive ? "text-paris-green" : "text-carmine-pink"
      )}
      href={href}
    >
      <p>View Original Article</p>
      <ArrowRight />
    </Link>
  );
};

export default ViewOriginalArticleButton;
