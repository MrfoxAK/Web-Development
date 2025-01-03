import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar/>

      <div className="cards">
        <Card title="Card 1" description="Card 1 Description" />
        <Card title="Card 2" description="Card 2 Description" />
        <Card title="Card 3" description="Card 3 Description" />
        <Card title="Card 4" description="Card 4 Description" />
      </div>

      <Footer/>
    </>
  )
}

export default App
