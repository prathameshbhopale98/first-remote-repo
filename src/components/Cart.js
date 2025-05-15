import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.data);
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <h3>{item.name}</h3>
      ))}
    </div>
  );
};

export default Cart;
