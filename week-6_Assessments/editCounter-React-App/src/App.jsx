import EditCounter1 from "./components/EditCounter1";
import EditCounter2 from "./components/EditCounter2";
import EditCounter3 from "./components/EditCounter3";
import EditCounter4 from "./components/EditCounter4";

function App() {
  return (
    <div className="bg-red-400 min-h-screen p-10">
      <div className="grid grid-cols-2 gap-10 max-w-2xl mx-auto">
        <EditCounter1 />
        <EditCounter2 />
        <EditCounter3 />
        <EditCounter4 />
      </div>
    </div>
  );
}

export default App;