import item from "../../assets/itemData/item";

export default function Aside() {
  const data = item.data;
  return (
    <>
      <aside className="p-8 space-y-2">
        <h1 className="text-sm uppercase text-primaryOrange font-KumbRegular">{data.company}</h1>
        <h2 className="text-6xl font-KumbBold capitalize">{data.title}</h2>
        <p className="text-lg opacity-60 w-3/4">{data.description}</p>
        <div className="flex gap-2 items-center">
          <p className="text-3xl font-KumbBold">${data.newPrice}</p>
          <p className="text-primaryOrange font-KumbBold opacity-80 bg-primaryPaleOrange px-2 py-1 rounded-md">{data.discount}%</p>
        </div>
        <p className="text-xl opacity-40 font-KumbBold">${data.oldPrice}</p>
        <div className="flex items-center gap-8">
          <div className="flex gap-6 bg-lightGrayishBlue">
            <div className="text-xl p-2">-</div>
            <div className="text-xl p-2">0</div>
            <div className="text-xl p-2">+</div>
          </div>
          <button className="py-2 px-6 bg-primaryOrange text-white rounded-lg">add to cart</button>
        </div>
      </aside>
    </>
  );
}
