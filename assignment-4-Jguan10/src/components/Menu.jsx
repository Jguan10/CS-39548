import { MENU } from "../assets/data";
import { addItem } from "../shop";
import { useDispatch } from "react-redux";
import NavBar from "./NavBar";

const Menu = () => {
  // Hint: Add an onClick handler to add each item to the cart

  const dispatch = useDispatch();

  function addMenuItem(item) {
    dispatch(addItem(item));
  }

  return (
    <div id="menu">
      {MENU.map((item) => (
        <div onClick={() => addMenuItem(item)} className="menu-item">
          <img src={item.imageSrc} />
          <div>{item.name}</div>
          <div>${item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
