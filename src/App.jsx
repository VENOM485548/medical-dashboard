import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Header from "./components/Header/Header";
import DashboardMain from "./components/DashboardMainContent/DashboardMain";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <DashboardMain />
    </div>
  );
};

export default App;
