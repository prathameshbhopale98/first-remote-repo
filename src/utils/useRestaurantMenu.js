import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7097373&lng=74.2370076&restaurantId=" +
        id
    );
    const json = await data.json();

    setMenu(json.data);
  };

  return menu;
};

export default useRestaurantMenu;
