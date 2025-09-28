import { useState } from "react";
import Category from "./Category";
import AddWidgetForm from "./AddWidgetForm";

const initialData = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: 1,
          name: "Cloud Compliance Score",
          text: "Compliance percentage across cloud services",
          pieData: [
            { name: "Compliant", value: 65 },
            { name: "Non-compliant", value: 15 },
            { name: "Compliant", value: 10 },
            { name: "Non-compliant", value: 10 },
          ],
        },
        {
          id: 2,
          name: "Risk Severity Distribution",
          text: "Severity levels of security risks",
          pieData: [
            { name: "Critical", value: 20 },
            { name: "High", value: 35 },
            { name: "Medium", value: 30 },
            { name: "Low", value: 15 },
          ],
        },
        {
          id: 3,
          name: "Recent Alerts",
          text: "Alerts over the past 7 days",
          chartData: [
            { month: "Mon", value: 20 },
            { month: "Tue", value: 10 },
            { month: "Wed", value: 33 },
            { month: "Thu", value: 45 },
            { month: "Fri", value: 52 },
            { month: "Sat", value: 31 },
            { month: "Sun", value: 40 },
          ],
        },
      ],
    },
    {
      name: "User Analytics",
      widgets: [
        {
          id: 4,
          name: "Active Users",
          text: "Daily active users over a week",
          chartData: [
            { month: "Mon", value: 200 },
            { month: "Tue", value: 350 },
            { month: "Wed", value: 400 },
            { month: "Thu", value: 250 },
            { month: "Fri", value: 500 },
            { month: "Sat", value: 600 },
            { month: "Sun", value: 700 },
          ],
        },
        {
          id: 5,
          name: "User Growth by Segment",
          text: "New sign-ups by region this month",
          pieData: [
            { name: "North", value: 500 },
            { name: "South", value: 300 },
            { name: "East", value: 400 },
            { name: "West", value: 200 },
            { name: "International", value: 150 },
          ],
        },
        {
          id: 6,
          name: "Churn Rate",
          text: "Users leaving per week",
          chartData: [
            { month: "Mon", value: 50 },
            { month: "Tue", value: 40 },
            { month: "Wed", value: 35 },
            { month: "Thu", value: 45 },
            { month: "Fri", value: 30 },
            { month: "Sat", value: 25 },
            { month: "Sun", value: 20 },
          ],
        },
      ],
    },
    {
      name: "Marketing Insights",
      widgets: [
        {
          id: 7,
          name: "Email Campaign Performance",
          text: "Open rate vs Click rate over a week",
          chartData: [
            { month: "Mon", value: 30 },
            { month: "Tue", value: 45 },
            { month: "Wed", value: 50 },
            { month: "Thu", value: 40 },
            { month: "Fri", value: 55 },
            { month: "Sat", value: 60 },
            { month: "Sun", value: 50 },
          ],
        },
        {
          id: 8,
          name: "Traffic Sources",
          text: "Website visits by source this month",
          pieData: [
            { name: "Organic", value: 400 },
            { name: "Paid", value: 300 },
            { name: "Referral", value: 150 },
            { name: "Social", value: 250 },
            { name: "Email", value: 100 },
          ],
        },
        {
          id: 9,
          name: "Campaign ROI",
          text: "Revenue vs Cost over 4 months",
          chartData: [
            { month: "Jan", value: 5000 },
            { month: "Feb", value: 7000 },
            { month: "Mar", value: 6000 },
            { month: "Apr", value: 8000 },
            { month: "May", value: 5000 },
            { month: "Jun", value: 7000 },
            { month: "Jul", value: 6000 },
            { month: "Aug", value: 8000 },
          ],
        },
      ],
    },
    {
      name: "Sales Dashboard",
      widgets: [
        {
          id: 10,
          name: "Monthly Sales",
          text: "Total sales per month",
          chartData: [
            { month: "Jan", value: 12000 },
            { month: "Feb", value: 15000 },
            { month: "Mar", value: 14000 },
            { month: "Apr", value: 16000 },
            { month: "May", value: 15500 },
            { month: "Jun", value: 17000 },
          ],
        },
        {
          id: 11,
          name: "Top Products",
          text: "Sales distribution by product",
          pieData: [
            { name: "Product A", value: 4000 },
            { name: "Product B", value: 3000 },
            { name: "Product C", value: 5000 },
            { name: "Product D", value: 2500 },
          ],
        },
        {
          id: 12,
          name: "Regional Performance",
          text: "Revenue by region",
          chartData: [
            { month: "North", value: 8000 },
            { month: "South", value: 6000 },
            { month: "East", value: 5000 },
            { month: "West", value: 4000 },
            { month: "International", value: 3000 },
          ],
        },
      ],
    },
  ],
};

export default function Dashboard() {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const addWidget = (categoryName, widget) => {
    const newWidget = { ...widget, id: Date.now() };
    setData((prevData) => ({
      categories: prevData.categories.map((cat) =>
        cat.name === categoryName
          ? { ...cat, widgets: [...cat.widgets, newWidget] }
          : cat
      ),
    }));
    setShowAddForm(false);
  };

  const removeWidget = (categoryName, widgetId) => {
    setData((prevData) => ({
      categories: prevData.categories.map((cat) =>
        cat.name === categoryName
          ? { ...cat, widgets: cat.widgets.filter((w) => w.id !== widgetId) }
          : cat
      ),
    }));
  };

  const filteredCategories = searchTerm
    ? data.categories.map((cat) => ({
        ...cat,
        widgets: cat.widgets.filter(
          (w) =>
            w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            w.text.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
    : data.categories;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="flex mb-4 gap-2">
        <input
          type="text"
          placeholder="Search widgets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded flex-grow"
        />
        <button
          onClick={() => {}}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>

        <button
          onClick={() => setShowAddForm((prev) => !prev)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {showAddForm ? "Close Form" : "Add Widget"}
        </button>
      </div>

      {showAddForm && (
        <AddWidgetForm categories={data.categories} addWidget={addWidget} />
      )}

      {filteredCategories.map((cat) => (
        <Category key={cat.name} category={cat} removeWidget={removeWidget} />
      ))}
    </div>
  );
}
