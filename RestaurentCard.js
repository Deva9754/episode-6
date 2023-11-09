
import { CDN_URL } from "../Utils/constants";

const RestaurentCard = ( props ) => {
    const { rescard } = props;
    const {
      name,
      cloudinaryImageId,
      costForTwo,
      cuisines,
      deliveryTime,
      avgRating,
    } = rescard?.data;
  
     console.log(rescard?.data);
    return (
      <div className="cards">
        <img
          src={CDN_URL+cloudinaryImageId}
          alt={name}
          className="res-logo"
        />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>DeliveryTime: {deliveryTime}</p>
        <p>₹{costForTwo / 100} FOR TWO</p>
        <p>{avgRating}Stars</p>

      </div>
    );
  };

  export default RestaurentCard;