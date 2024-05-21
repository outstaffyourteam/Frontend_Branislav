import { cn } from "../lib/utils";

type Props = { isPositive: boolean };

const ArticlePill = ({ isPositive }: Props) => {
  return (
    <div
      className={cn(
        "py-2 px-3 text-white rounded-[28px]",
        isPositive ? "bg-paris-green" : "bg-carmine-pink"
      )}
    >
      Article
    </div>
  );
};

export default ArticlePill;
