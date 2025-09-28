import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function WidgetChart({ data, dataKey, nameKey }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey={nameKey} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={dataKey} fill="#3182ce" />
      </BarChart>
    </ResponsiveContainer>
  );
}

WidgetChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  dataKey: PropTypes.string.isRequired,
  nameKey: PropTypes.string.isRequired,
};
