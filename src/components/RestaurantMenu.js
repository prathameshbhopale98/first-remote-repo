import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
const RestaurantMenu = () => {
  // const [menu, setMenu] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { id } = useParams();

  const menu = useRestaurantMenu(id);

  // useEffect(() => {
  //   fetchRestaurantMenu();
  // }, []);

  // const fetchRestaurantMenu = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7097373&lng=74.2370076&restaurantId=" +
  //       id
  //   );

  //   const json = await data.json();

  //   const { info } = json?.data?.cards[2]?.card?.card;
  //   console.log(json);
  //   console.log(info);

  //   setMenu(json.data);
  // };

  if (menu === null) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage } =
    menu?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||
  //   menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     ?.categories[0];

  // menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  //   .categories[0]

  // console.log(itemCards);

  // console.log(menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log(categories);

  return (
    <div className="w-1/2 mx-auto p-2">
      <h1 className="font-bold text-3xl">{name}</h1>
      <p>
        {avgRating} - {costForTwoMessage}
      </p>
      {/* <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul> */}
      <div>
        {categories.map((category, index) => (
          <RestaurantMenuCategory
            data={category.card.card}
            isActive={activeIndex === index}
            onShow={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
