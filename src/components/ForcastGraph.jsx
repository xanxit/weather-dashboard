import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ForcastGraph = (forcastData) => {
  const graphData = forcastData.forcastData;
  return (
    <>
      <ResponsiveContainer width="100%" className="md:!-ml-10 -ml-4 mt-8 graph-container">
        <AreaChart
          width={500}
          height={100}
          data={graphData}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"dt_txt"} />
          <YAxis />
          <Tooltip contentStyle={{textTransform: "capitalize"}} />
          <Area
            type="monotone"
            dataKey={"temp"}
            stroke="#004EE4"
            strokeWidth={2}
            fillOpacity={1}
            fill="#F7FBFE"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default ForcastGraph;
