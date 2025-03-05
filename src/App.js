import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
import ConfusionMatrix from "./components/ConfusionMatrix";

function App() {
  

  return (
    <div>
      <TopBar />
      <Navbar />

      <div className="flex flex-row ">
        <MainBody />
        <ConfusionMatrix />
      </div>
      
    </div>
  );
}

export default App;
