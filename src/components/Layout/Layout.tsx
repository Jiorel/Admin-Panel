import { Content } from "./Content/Content";
import { Sidebar } from "./Sidebar/Sidebar";
import "./Layout.scss";

export function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <Content />
    </div>
  );
}
