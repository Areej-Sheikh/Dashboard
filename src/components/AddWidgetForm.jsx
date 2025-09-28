import { useState } from "react";
import PropTypes from "prop-types";

export default function AddWidgetForm({ categories, addWidget }) {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    categories.length > 0 ? categories[0].name : ""
  );
  const [chartType, setChartType] = useState("none"); 
  const [chartData, setChartData] = useState([{ label: "", value: "" }]);

  const handleDataChange = (index, field, value) => {
    const newData = [...chartData];
    newData[index][field] = value;
    setChartData(newData);
  };

  const addDataPoint = () => setChartData([...chartData, { label: "", value: "" }]);
  const removeDataPoint = (index) => {
    const newData = chartData.filter((_, i) => i !== index);
    setChartData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!widgetName || !widgetText) return;

    let widget = { name: widgetName, text: widgetText };

    if (chartType !== "none") {
      const parsedData = chartData
        .filter(d => d.label && d.value)
        .map(d => ({ name: d.label, value: Number(d.value) }));

      if (chartType === "bar") widget.chartData = parsedData.map(d => ({ month: d.name, value: d.value }));
      if (chartType === "pie") widget.pieData = parsedData;
    }

    addWidget(selectedCategory, widget);

    // Reset form
    setWidgetName("");
    setWidgetText("");
    setChartType("none");
    setChartData([{ label: "", value: "" }]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6 border p-4 rounded bg-white shadow">
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
        className="border p-2 rounded"
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border p-2 rounded"
      >
        {categories.map((cat) => (
          <option key={cat.name} value={cat.name}>{cat.name}</option>
        ))}
      </select>

      <select
        value={chartType}
        onChange={(e) => {
          setChartType(e.target.value);
          setChartData([{ label: "", value: "" }]); // reset chart data on type change
        }}
        className="border p-2 rounded"
      >
        <option value="none">No Chart</option>
        <option value="bar">Bar Chart</option>
        <option value="pie">Pie Chart</option>
      </select>

      {(chartType === "bar" || chartType === "pie") && (
        <div className="flex flex-col gap-2 border p-2 rounded bg-gray-50">
          {chartData.map((dataPoint, index) => (
            <div key={index} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder={chartType === "bar" ? "Month" : "Name"}
                value={dataPoint.label}
                onChange={(e) => handleDataChange(index, "label", e.target.value)}
                className="border p-1 rounded flex-1"
              />
              <input
                type="number"
                placeholder="Value"
                value={dataPoint.value}
                onChange={(e) => handleDataChange(index, "value", e.target.value)}
                className="border p-1 rounded w-24"
              />
              {chartData.length > 1 && (
                <button type="button" onClick={() => removeDataPoint(index)} className="text-red-500">✕</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addDataPoint} className="bg-green-500 text-white px-2 py-1 rounded mt-2">+ Add Data Point</button>
        </div>
      )}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600">
        + Add Widget
      </button>
    </form>
  );
}

AddWidgetForm.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  addWidget: PropTypes.func.isRequired,
};
