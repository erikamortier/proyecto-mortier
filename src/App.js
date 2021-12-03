import Navbar from "./components/Navbar"
import CartWidget from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"


function App () {

const greeting = [{nombre: "Erika"}]

  return (
    <><Navbar />
    <CartWidget />
    <ItemListContainer greeting={greeting} /></>
  )
  
}
export default App
