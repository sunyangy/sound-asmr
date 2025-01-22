import "./App.css";
import Layout from "./components/Layout";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <div className="min-h-screen dark:bg-slate-900 font-serif">
      <DarkModeProvider>
        <Layout />
      </DarkModeProvider>
    </div>
  );
}

export default App;
