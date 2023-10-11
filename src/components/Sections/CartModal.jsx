export default function CartModal({ cartItem, cartCount }) {
  return (
    <>
      <article className="p-2 py-4 absolute right-8 top-20 bg-gray-100 shadow-xl w-80 flex flex-col items-center gap-2 rounded-md">
        <div className="w-full">
          <h1 className="p-1 w-full text-base font-semibold capitalize">cart</h1>
          <hr />
        </div>
        {cartItem.name !== undefined ? (
          <div className="mt-1">
            <div className="flex gap-4">
              <div>
                <img src={`/images/${cartItem.image}`} className="w-16" />
              </div>
              <div>
                <h1 className="p-1 text-base font-thin">{cartItem.name}</h1>
                <h1 className="p-1 text-base font-thin">{`${
                  cartItem.price
                } * ${cartCount} ${cartItem.price * cartCount}`}</h1>
              </div>
            </div>
            <button className=" w-full bg-primaryOrange text-white p-2 rounded-md font-KumbBold mt-2">
              Checkout
            </button>
          </div>
        ) : <h1>The cart is empty now</h1>
      }
      </article>
    </>
  );
}
