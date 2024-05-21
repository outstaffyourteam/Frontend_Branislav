import { PieChart } from "@mui/x-charts/PieChart";

type Props = {
  positive: number;
  negative: number;
};

export default function BasicPie({ positive, negative }: Props) {
  return (
    <div className="flex ml-20 flex-col items-center gap-5 h-full">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: positive, color: "#41D77C" },
              { id: 1, value: negative, color: "#EE4C4C" },
            ],
          },
        ]}
        tooltip={{}}
        width={400}
        height={200}
      />
      <div className="flex -ml-20 items-center gap-5">
        <div className="flex items-center gap-2">
          <div className="bg-[#41D77C] rounded-xl w-4 h-1.5" />
          <p>Positive</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#EE4C4C] rounded-xl w-4 h-1.5" />
          <p>Negative</p>
        </div>
      </div>
    </div>
  );
}
