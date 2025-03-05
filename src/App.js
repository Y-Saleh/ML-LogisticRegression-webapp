import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
import ConfusionMatrix from "./components/ConfusionMatrix";

function App() {
  

  return (
    <div>
      <TopBar />
      <Navbar />

      <div className="max-w-[1140px] m-auto flex-col space-y-8">

        

        <div className="flex flex-col m-auto p-8">
          <MainBody />
        </div>

        <div className="flex flex-col m-auto p-8">
          <ConfusionMatrix />
        </div>
      </div>
      
    </div>
  );
}

export default App;
