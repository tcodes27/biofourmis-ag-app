import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header
        title="International Metrics"
        subtitle="A holistic, end-to-end solution designed to augment drug efficacy with digital therapeutics"
      />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
