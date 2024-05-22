import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

type Props = {};

const CandidateInfo = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-4 bg-soft-peach rounded-lg w-full">
      <div className="flex flex-col items-center gap-3">
        <p>Campaign Website</p>
        <Link
          className="text-orange-primary"
          href={"https://www.donaldjtrump.com/"}
        >
          http://www.donaldjtrump.com/
        </Link>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p>Social Media</p>
        <div className="flex items-center gap-2">
          <Facebook fill="#FCA000" stroke="#fff" strokeWidth={0} />
          <Twitter fill="#FCA000" stroke="#fff" strokeWidth={0.5} />
          <Instagram fill="#FCA000" stroke="#fff" strokeWidth={2} />
          <Youtube fill="#FCA000" stroke="#fff" strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default CandidateInfo;
