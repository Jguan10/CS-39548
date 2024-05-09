import { useSelector, useDispatch } from "react-redux";
import NavBar from "./NavBar";
import { clear } from "../shop";

export default function Cart() {
  const items = useSelector((state) => state.shop.value);
  const dispatch = useDispatch();

  function clearCart() {
    dispatch(clear());
  }

  return (
    <>
      <NavBar />
      <button onClick={clearCart}>clear</button>
      <div id="menu">
        {items.map((item) => (
          <div className="menu-item">
            <img src={item.imageSrc} />
            <div>{item.name}</div>
            <div>${item.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}
