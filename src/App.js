import Navbar from "./Components/Navbar.js";
import NewsItems from "./Components/NewsItems.js";


function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
      <NewsItems/>
      </div>
    </>
  );
}

export default App;
