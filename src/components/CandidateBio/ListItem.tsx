import ListPointMarker from "@/images/icons/ListPointMarker";

type Props = { text: string };

const ListItem = ({ text }: Props) => {
  return (
    <div className="flex items-start w-full h-full gap-4">
      <div className="min-w-[10px]">
        <ListPointMarker />
      </div>
      <p className="text-dark-slate-gray text-lg -mt-1">{text}</p>
    </div>
  );
};

export default ListItem;
