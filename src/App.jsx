import { About } from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import Register from "./Pages/Register";
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
        {/* <Contact /> */}
        {/* <Register /> */}
        <Login />
      </main>
    </>
  );
}

export default App;
