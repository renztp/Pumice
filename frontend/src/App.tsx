import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <div className="main-body">
        <Sidebar />
        <div className="content p-5">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default App;
