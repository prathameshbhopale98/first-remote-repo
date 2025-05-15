const Card = (props) => {
  const { data } = props;
  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  } = data.info;

  console.log(props);

  return (
    <div className="w-[280px] h-[320px] mx-1">
      <div>
        <img
          className="w-full h-[175px] object-cover rounded-md"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>

      <h3 className="font-bold">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p className="font-medium">{avgRating} Stars</p>
    </div>
  );
};

export const promotedCard = (Card) => {
  return (props) => {
    const { header, subHeader } = props.data.info.aggregatedDiscountInfoV3;
    return (
      <div className="relative top-0 -z-10">
        <label className="absolute top-[130px] bg-gray-600 text-white text-lg font-bold ml-2 px-2">
          {header} {subHeader}
        </label>
        <Card data={props.data} />
      </div>
    );
  };
};

export default Card;
