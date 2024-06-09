import Header from "./features/header/Header";
import Sidebar from "./features/sidebar/components/Sidebar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <div className="main-body">
        <Sidebar />
        <div className="content p-5 bg-[#F4F5F6]">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default App;
