import { useState, useRef } from "react";
import RightPopUp from "../PopUp/PopUp";

import item from "../../assets/itemData/item";
import CartModal from "./CartModal";
import CartCount from "./CartCount";

const countStyles = {
  color: "rgba(0, 0, 0, 0.8)",
};

export default function Aside(props) {
  const [cartCount, setCartCount] = useState(1);
  const [cartItem, setCartItem] = useState({});
  const ref = useRef();
  const countRef = useRef();
  const notifyUser = () => {
    ref.current.style.marginRight = "300px";
  };
  const showCartCount = () => {
    countRef.current.style.display = "block";
  };

  const increaseCartCount = () => {
    setCartCount((prevCount) => (prevCount >= 0 ? cartCount + 1 : 0));
  };
  const decreaseCartCount = () => {
    setCartCount((prevCount) => (prevCount > 1 ? cartCount - 1 : 1));
  };
  const data = item.data;

  const cartHandler = () => {
    setCartItem(() => {
      return {
        name: data.title,
        price: data.newPrice,
        image: data.images[0],
      };
    });
    notifyUser();
    setTimeout(() => {
      ref.current.style.marginRight = "0px";
      showCartCount();
    }, 2000);
  };

  return (
    <>
      <aside className="md:mt-10 p-4 md:space-y-6 border-2">
        <h1 className="text-sm uppercase text-primaryOrange font-KumbBold opacity-80">
          {data.company}
        </h1>
        <h2 className="text-2xl md:text-4xl font-KumbBold capitalize opacity-80">
          {data.title}
        </h2>
        <p className="text-lg opacity-60">{data.description}</p>
        <div className="flex flex-col items-start">
          <div className="flex">
            <p className="text-3xl font-KumbBold opacity-80">
              ${data.newPrice}
            </p>
            <p className="text-primaryOrange font-KumbBold opacity-80 bg-primaryPaleOrange px-2 py-1 rounded-md">
              {data.discount}%
            </p>
          </div>
          <p className="text-xl opacity-40 font-KumbBold line-through">
          ${data.oldPrice}
        </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-6 bg-lightGrayishBlue rounded-lg select-none">
            <div
              className="text-2xl py-2 px-2 opacity-70 font-bold cursor-pointer select-none text-primaryOrange"
              onClick={decreaseCartCount}
              style={cartCount === 1 ? countStyles : null}
            >
              -
            </div>
            <div className="text-2xl py-2 px-1 opacity-70 font-bold select-none w-10 text-center">
              {cartCount}
            </div>
            <div
              className="text-2xl py-2 px-2 opacity-70 font-bold cursor-pointer select-none text-primaryOrange"
              onClick={increaseCartCount}
            >
              +
            </div>
          </div>
          <button
            onClick={cartHandler}
            className="w-48 py-3 px-4 md:py-3 md:px-4 bg-primaryOrange text-white rounded-lg font-KumbBold"
          >
            Add to cart
          </button>
        </div>
      </aside>
      {props.isVisible && (
        <CartModal cartItem={cartItem} item={item} cartCount={cartCount} />
      )}
      <RightPopUp update={ref} />
      <CartCount cartCount={cartCount} cartItem={cartItem} show={countRef} />
    </>
  );
}
