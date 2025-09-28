import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function WidgetPieChart({ data, dataKey, nameKey }) {
  const colors = ["#3182ce", "#63b3ed", "#90cdf4", "#f56565", "#ed8936"];
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={data} dataKey={dataKey} nameKey={nameKey} outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

WidgetPieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  dataKey: PropTypes.string.isRequired,
  nameKey: PropTypes.string.isRequired,
};
