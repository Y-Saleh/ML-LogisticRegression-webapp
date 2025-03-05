import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
import ConfusionMatrix from "./components/ConfusionMatrix";

function App() {
  

  return (
    <div>
      <TopBar />
      <Navbar />

      <div className="flex flex-col ">
        <MainBody />
        
      </div>

      <div className="flex flex-col ">
      <ConfusionMatrix />
      </div>
      
    </div>
  );
}

export default App;
