import PropTypes from "prop-types";
import WidgetChart from "./WidgetChart";
import WidgetPieChart from "./WidgetPieChart";

export default function Widget({ widget, categoryName, removeWidget }) {
  return (
    <div className="bg-white shadow rounded p-4 relative hover:shadow-lg transition duration-300">
      <strong className="block text-lg mb-2">{widget.name}</strong>
      <p className="text-gray-600 mb-2">{widget.text}</p>

      {/* Render charts if data exists */}
      {widget.chartData && (
        <WidgetChart data={widget.chartData} dataKey="value" nameKey="month" />
      )}
      {widget.pieData && (
        <WidgetPieChart data={widget.pieData} dataKey="value" nameKey="name" />
      )}

      <button
        onClick={() => removeWidget(categoryName, widget.id)}
        className="absolute top-2 right-2 text-black text-xl rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-300"
      >
        X
      </button>
    </div>
  );
}

Widget.propTypes = {
  widget: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
    chartData: PropTypes.arrayOf(
      PropTypes.shape({
        month: PropTypes.string,
        value: PropTypes.number,
      })
    ),
    pieData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.number,
      })
    ),
  }).isRequired,
  categoryName: PropTypes.string.isRequired,
  removeWidget: PropTypes.func.isRequired,
};
