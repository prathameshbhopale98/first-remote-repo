import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuItem = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item.card.info));
  };

  return (
    <div>
      {items.map((item) => (
        <div>
          <div className="flex justify-between mt-2">
            <div className="w-10/12">
              <h3 className="text-lg font-semibold">{item.card.info.name}</h3>
              <p className="text-sm mb-2">
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              <p className="text-xs mb-2">{item.card.info.description}</p>
            </div>

            <div className="relative">
              <img
                className="w-32 h-28 object-cover mb-1 rounded-md"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.card.info.imageId
                }
              ></img>
              <button
                onClick={() => handleClick(item)}
                className="border-2 border-green-400 rounded-md p-1 absolute bottom-3 left-9 bg-gray-50"
              >
                Add +
              </button>
            </div>
          </div>
          <hr className="border-t-2 border-gray-400 pt-1" />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuItem;
