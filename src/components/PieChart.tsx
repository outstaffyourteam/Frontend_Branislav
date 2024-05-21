import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

type Props = {
  positive: number;
  negative: number;
};

export default function BasicPie({ positive, negative }: Props) {
  return (
    <Box>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: positive, color: "#41D77C" },
              { id: 1, value: negative, color: "#EE4C4C" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
      <Box display="flex" justifyContent="center" marginTop={2}>
        <Box display="flex" alignItems="center" marginRight={2}>
          <Box width={16} height={16} bgcolor="#41D77C" marginRight={1} />
          <Typography variant="body2">{`Positive`}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box width={16} height={16} bgcolor="#EE4C4C" marginRight={1} />
          <Typography variant="body2">{`Negative`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
