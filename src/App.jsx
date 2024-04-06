import { About } from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Header from "./ui/Header/Header";
import Featured from "./ui/Section/Featured";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Home /> */}
        {/* <Menu /> */}
        {/* <About /> */}
        <Contact />
      </main>
    </>
  );
}

export default App;
