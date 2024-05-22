import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

type Props = {
  positive: number;
  negative: number;
};

export default function BasicPie({ positive, negative }: Props) {
  const total = positive + negative;
  const negativePercentage = ((negative / total) * 100).toFixed(0);
  const positivePercentage = ((positive / total) * 100).toFixed(0);

  return (
    <div className="flex ml-20 flex-col items-center gap-5 h-full">
      <PieChart
        className="pieChart"
        series={[
          {
            data: [
              {
                id: 0,
                value: Number(positivePercentage),
                label: "Positive",
                color: "#41D77C",
              },
              {
                id: 1,
                value: Number(negativePercentage),
                label: "Negative",
                color: "#EE4C4C",
              },
            ],
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 10, // Lower the min angle to display smaller values
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
          },
        }}
        tooltip={{}}
        width={400}
        height={200}
      />
      <div className="flex text-dark-slate-gray text-sm -ml-20 items-center gap-5">
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
