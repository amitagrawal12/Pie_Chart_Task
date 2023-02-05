import LineCharts from "./components/LineChart";
import BarCharts from "./components/BarCharts";
import TableList from "./components/TableList";
import PieCharts from "./components/PieCharts";
import UserDetails from "./components/UserDetails";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Tabs
        defaultActiveKey="home"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="longer-tabs-redux" title="Redux Implement">
          <UserDetails />
        </Tab>
        <Tab eventKey="home" title="Pie Charts Graph">
          <PieCharts />
        </Tab>
        <Tab eventKey="profile" title="Bar Charts Graph">
          <BarCharts />
        </Tab>
        <Tab eventKey="longer-tab" title="Line Charts Graph">
          <LineCharts />
        </Tab>
        <Tab eventKey="longer-tabs" title="Table List">
          <TableList />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;