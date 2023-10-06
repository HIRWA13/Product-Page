import { useState } from "react";

import item from "../../assets/itemData/item";

export default function Aside() {
  const [cartCount, setCartCount] = useState(1)
  const increaseCartCount = () => {
    setCartCount(prevCount => prevCount >= 0 ? cartCount + 1 : 0)
  }
  const decreaseCartCount = () => {
    setCartCount(prevCount => prevCount > 1 ? cartCount - 1 : 1)
  }
  const data = item.data;
  return (
    <>
      <aside className="mt-10 px-2 space-y-2">
        <h1 className="text-sm uppercase text-primaryOrange font-KumbBold opacity-80">{data.company}</h1>
        <h2 className="text-4xl font-KumbBold capitalize opacity-80">{data.title}</h2>
        <p className="text-lg opacity-60 w-3/4">{data.description}</p>
        <div className="flex gap-2 items-center">
          <p className="text-3xl font-KumbBold">${data.newPrice}</p>
          <p className="text-primaryOrange font-KumbBold opacity-80 bg-primaryPaleOrange px-2 py-1 rounded-md">{data.discount}%</p>
        </div>
        <p className="text-xl opacity-40 font-KumbBold line-through">${data.oldPrice}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-6 bg-lightGrayishBlue rounded-lg">
            <div className="text-2xl py-2 px-2 opacity-70 font-bold cursor-pointer select-none" onClick={decreaseCartCount}>-</div>
            <div className="text-2xl py-2 px-1 opacity-70 font-bold select-none">{cartCount}</div>
            <div className="text-2xl py-2 px-2 opacity-70 font-bold cursor-pointer select-none" onClick={increaseCartCount}>+</div>
          </div>
          <button className="py-3 px-16 bg-primaryOrange text-white rounded-lg font-KumbBold">add to cart</button>
        </div>
      </aside>
    </>
  );
}
