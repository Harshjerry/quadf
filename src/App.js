
import Navbar from "./components/navbar";
import Announcement1 from "./components/announcement1";
import Announcement2 from "./components/announcement2";
import Table from "./components/table";

import Status from "./components/statusbar";
function App() {
  return (
    <div className="App">
  <Navbar/>
  <Announcement1/>
  <Status/>
  <Announcement2/>
  <Table/>
    </div>
  );
}

export default App;
