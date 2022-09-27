import { Content } from "./Content/Content";
import { Sidebar } from "./Sidebar/Sidebar";
import { Navbar } from "./Navbar/Navbar";
import "./Layout.scss";

export function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__content">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}
