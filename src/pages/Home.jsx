import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";
import Banner from "./Banner";
import Footer from "./Footer";

// Import images
import burger from "../assets/burger.jpg";
import pizza from "../assets/pizza.jpg";
import pasta from "../assets/pasta.jpeg";
import sushi from "../assets/sushi.jpg";
import tacos from "../assets/tacos.jpg";
import salad from "../assets/salad.jpg";
import steak from "../assets/steak.jpg";
import iceCream from "../assets/ice-cream.jpg";
import friedChicken from "../assets/Chicken.jpg";
import noodles from "../assets/noodles.jpg";
import pancakes from "../assets/pancake.jpg";
import sandwich from "../assets/sandwich.jpg";
import fries from "../assets/fries.jpg";
import soup from "../assets/soup.jpg";
import doughnut from "../assets/nut.jpg";
import cheesecake from "../assets/cheesecake.jpg";

const foodItems = [
  { id: 1, name: "Burger", image: burger, price: "₹199", description: "Juicy beef patty, fresh veggies, and soft buns with delicious sauces." },
  { id: 2, name: "Pizza", image: pizza, price: "₹349", description: "Crispy crust, rich tomato sauce, gooey cheese, and tasty toppings." },
  { id: 3, name: "Pasta", image: pasta, price: "₹249", description: "Creamy or tangy pasta, cooked to perfection with rich Italian flavors." },
  { id: 4, name: "Sushi", image: sushi, price: "₹599", description: "Freshly rolled sushi with seasoned rice, seafood, and dipping sauce." },
  { id: 5, name: "Tacos", image: tacos, price: "₹179", description: "Crispy or soft tortilla shells filled with spiced meat and veggies." },
  { id: 6, name: "Salad", image: salad, price: "₹149", description: "Fresh greens, crunchy veggies, and a light, flavorful dressing." },
  { id: 7, name: "Steak", image: steak, price: "₹699", description: "Perfectly grilled, juicy steak seasoned with aromatic herbs and spices." },
  { id: 8, name: "Ice Cream", image: iceCream, price: "₹99", description: "Creamy and cold dessert in a variety of delicious flavors." },
  { id: 9, name: "Fried Chicken", image: friedChicken, price: "₹299", description: "Crispy, golden-fried chicken with juicy and tender meat inside." },
  { id: 10, name: "Noodles", image: noodles, price: "₹199", description: "Soft, stir-fried noodles tossed in flavorful sauces and veggies." },
  { id: 11, name: "Pancakes", image: pancakes, price: "₹129", description: "Fluffy pancakes topped with syrup, butter, or fresh fruits." },
  { id: 12, name: "Sandwich", image: sandwich, price: "₹159", description: "Fresh bread filled with delicious meats, veggies, and spreads." },
  { id: 13, name: "French Fries", image: fries, price: "₹99", description: "Crispy golden fries, lightly salted and served hot." },
  { id: 14, name: "Soup", image: soup, price: "₹149", description: "Warm, comforting soup packed with flavors and fresh ingredients." },
  { id: 15, name: "Doughnut", image: doughnut, price: "₹89", description: "Sweet, soft, and fluffy doughnuts with different flavors and toppings." },
  { id: 16, name: "Cheesecake", image: cheesecake, price: "₹249", description: "Creamy, rich cheesecake with a buttery crust and tasty toppings." },
];

const Home = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <Banner />
      <div className="food-container">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} className="food-image" />
            <h3 className="food-name">{item.name}</h3>
            <p className="food-description">{item.description}</p>
            <p className="food-price">{item.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(item)}>
              <ShoppingCart size={20} />
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
