import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";


function App() {
  

  return (
    <div>
      <TopBar />
      <Navbar />

      <div className="max-w-[1140px] m-auto flex-col space-y-8">

        <MainBody />
        
      </div>
      
    </div>
  );
}

export default App;
