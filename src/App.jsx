import Header from "../src/components/Header"
import Footer from "./components/Footer"
import Dish from "./components/Dish"

function App() {

  const tableDish =[
    {
      name:"Tacos à l’unité",
      img:"https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      price: 3
    },
    {
      name:"Enchiladas",
      img:"https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      price: 12
    },
    {
      name:"Mole poblano",
      img:"https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      price: 15
    }

  ]



  return (
    <>
      <Header/>
      {tableDish.map((dish, index) => (
        <Dish key={index} name={dish.name} img={dish.img} price={dish.price} />
      ))}
      <Footer/>
    </>
  )
}

export default App
