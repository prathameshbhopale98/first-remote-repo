import { useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenuCategory = ({ data, isActive, onShow }) => {
  return (
    <div className="bg-gray-50 py-2 px-1 shadow-md mb-2 cursor-pointer">
      <div
        onClick={() => {
          onShow();
        }}
        className="flex justify-between"
      >
        <h2 className="font-bold text-lg">{data.title}</h2>
        <span className="pr-6">⬇️</span>
      </div>

      {isActive && <RestaurantMenuItem items={data.itemCards} />}
    </div>
  );
};

export default RestaurantMenuCategory;
