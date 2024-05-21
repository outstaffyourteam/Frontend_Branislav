import Divider from "../Divider";
import ListItem from "./ListItem";

type Props = {};

const CandidateBio = (props: Props) => {
  return (
    <div className="flex w-full flex-col items-start gap-10">
      <div className="flex flex-col lg:items-start sm:items-center gap-6 w-full">
        <div className="flex flex-col items-start gap-3">
          <p className="text-dark-slate-gray text-4xl font-bold">
            Donald Trump
          </p>
          <p className="text-dark-slate-gray">The Republicans</p>
        </div>
        <Divider />
      </div>
      <div className="flex flex-col lg:items-start sm:items-center gap-4">
        <p className="text-dark-slate-gray  text-2xl font-medium">
          About the Candidate
        </p>
        <p className="text-dark-slate-gray">
          Former President Trump was the first candidate to declare his intent
          to run for the GOP nomination in 2024. He also became the first former
          president to face any kind of criminal charges after being indicted by
          a Manhattan grand jury in a case related to a payoff to a porn star.
          He now faces federal criminal charges, too, related to his alleged
          mishandling of classified documents that were discovered at his
          Mar-a-Lago resort. (Trump has denied wrongdoing in both cases.)
        </p>
      </div>
      <Divider />
      <div className="flex flex-col w-full lg:items-start sm:items-center gap-4">
        <p className="text-dark-slate-gray text-2xl font-medium">
          Campaign positions
        </p>
        <ListItem text="Support legislation that represents a “record investment” in police" />
        <ListItem text="Pardon 'a large portion' of the people convicted of federal offenses for their participation in the Jan. 6, 2021, attack on the U.S. Capitol." />
        <ListItem text="Sign an executive order instructing federal agencies to 'cease all programs that promote the concept of sex and gender transition at any age'; punish doctors who provide gender-affirming care to minors." />
        <ListItem text="“Get something done” on abortion; has declined to specify how many weeks into a pregnancy he would support a ban; has said a federal ban would need to include exceptions for rape, incest and life of the mother." />
      </div>
    </div>
  );
};

export default CandidateBio;
