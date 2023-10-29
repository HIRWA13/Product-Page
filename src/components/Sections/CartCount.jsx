export default function CartCount(props) {
  return (
    <>
      <h1 className="text-lg text-primaryOrange font-KumbBold absolute opacity-70 hidden md: right-64  md:top-1" ref={props.show}>
            {props.cartItem.name !== "" ? props.cartCount : 0}
      </h1>
    </>
  );
}
