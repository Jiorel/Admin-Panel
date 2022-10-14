import { Content } from "./Content/Content";
import { Navbar } from "./Navbar/Navbar";
import { Sidebar } from "./Sidebar/Sidebar";
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
