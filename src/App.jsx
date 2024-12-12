import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen font-dm antialiased flex flex-col">
      <Header />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
