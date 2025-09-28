import PropTypes from "prop-types";
import Widget from "./Widget";

export default function Category({ category, removeWidget }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {category.widgets.map((widget, idx) => (
          <Widget
            key={widget.id || widget.name + idx} // use id if available
            widget={widget}
            categoryName={category.name}
            removeWidget={removeWidget}
          />
        ))}
      </div>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    widgets: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string,
        chartData: PropTypes.array,
        pieData: PropTypes.array,
      })
    ).isRequired,
  }).isRequired,
  removeWidget: PropTypes.func.isRequired,
};
