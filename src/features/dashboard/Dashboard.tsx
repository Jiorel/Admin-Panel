import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import * as api from "api";
import "./Dashboard.scss";

export function Dashboard() {
  const { data: posts, isLoading: isPostsLoading } = useQuery(
    ["posts"],
    api.getPosts
  );

  const { data: users, isLoading: isUsersLoading } = useQuery(
    ["users"],
    api.getUsers
  );

  if (isPostsLoading || isUsersLoading) return null;

  const chartData = [
    {
      name: "posts",
      value: posts.length,
      color: "#47B5FF",
    },
    {
      name: "users",
      value: users.length,
      color: "#FD841F",
    },
  ];

  return (
    <div className="dashboard">
      <PieChart width={1100} height={400}>
        <Tooltip />
        <Legend
          align="left"
          verticalAlign="middle"
          iconSize={25}
          iconType="circle"
          layout="vertical"
        />
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {chartData.map(({ name, color }) => (
            <Cell key={name} fill={color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
