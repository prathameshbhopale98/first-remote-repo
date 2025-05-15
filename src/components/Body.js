import Card, { promotedCard } from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [data, setData] = useState([]);
  const [newFilteredData, setNewFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  const EnhancedCard = promotedCard(Card);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    const newData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7097373&lng=74.2370076&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await newData.json();

    setData(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setNewFilteredData(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  function handleClick() {
    const filteredData = data.filter((res) => res.info.avgRating > 4.4);
    setNewFilteredData(filteredData);
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSearchClick() {
    let filteredByName = data.filter((e) =>
      e.info.name.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredByName.length === 0) {
      alert("Restaurant not found...");
    } else {
      setNewFilteredData(filteredByName);
    }
  }

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <input
        className="border-2 border-gray-400 rounded-sm ml-4 my-3 w-80"
        type="text"
        onChange={handleChange}
        value={search}
      />
      <button
        className="bg-[#f0f0f0] rounded-[3px] px-2 mx-2 my-3"
        onClick={handleSearchClick}
      >
        Search
      </button>
      <button id="filter-btn" onClick={handleClick}>
        Top Rated Restarurants
      </button>

      <div className="flex flex-wrap justify-evenly">
        {newFilteredData.map((x) => (
          <Link to={"/restaurant/" + x.info.id} key={x.info.id}>
            {x.info.aggregatedDiscountInfoV3 ? (
              <EnhancedCard data={x} />
            ) : (
              <Card data={x} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
