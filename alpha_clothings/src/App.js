import "./categories.style.scss";
import CategoryItem from "./components/categories/categories.component";
function App() {
  const categories = [
    {
      title: "Top Wear",
      id: 1,
      imageUrl: "https://ibb.co/54kXWm6",
    },
    { title: "Bottom Wear", id: 2, imageUrl: "https://ibb.co/ZWFTrm6.png" },
    { title: "FootWear", id: 3, imageUrl: "https://ibb.co/H401bsC.png" },
    { title: "Accessory ", id: 4, imageUrl: "https://ibb.co/QdxksKt.png" },
    {
      title: "Under/night Wear",
      id: 5,
      imageUrl: "https://ibb.co/rZZPms7.png",
    },
    { title: "Sports Wear", id: 6, imageUrl: "https://ibb.co/rZZPms7" },
  ];
  return <CategoryItem />;
}

export default App;
// https://ibb.co/rZZPms7
// https://ibb.co/fHJ4DQq
// https://ibb.co/ZWFTrm6
// https://ibb.co/QdxksKt
// https://ibb.co/M7M0vYy
// https://ibb.co/H401bsC
// https://ibb.co/YjC6ZMQ
// https://ibb.co/54kXWm6
