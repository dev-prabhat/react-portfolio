import {About, Home, Projects, Skills, Navbar} from "./components"

function App() {
  return (
    <main className=" bg-[#0a192f] text-[#ccd6f6]">
      <Navbar/>   
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
  );
}

export default App;
