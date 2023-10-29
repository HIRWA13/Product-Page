export default function Header(props) {
  const links = ["collections", "Men", "Women", "About", "Contact"];
  return (
    <>
      <header className="sticky top-0 bg-white py-1">
        <div className="flex justify-between items-center md:w-[80%] mx-auto mt-2 font-KumbRegular">
          <div className="flex gap-4 items-center md:gap-20">
            <div className="md:hidden">
              <img src="/images/icon-menu.svg" />
            </div>
            <div>
              <img src="/images/logo.svg" className="cursor-pointer" />
            </div>
            <ul className=" hidden md:flex  gap-10 text-sm  text-darkishGreyBlue ">
              {links.map((link) => (
                <li
                  className="cursor-pointer hover:text-neutralDarkBlue"
                  key={link}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 md:gap-16 items-center relative">
            <div>
              <img
                src="/images/icon-cart.svg"
                alt="cart icon"
                className="cursor-pointer"
                onClick={props.cartModalHandler}
              />
            </div>
            <div className=" w-[30px] lg:w-[50px]">
              <img
                src="/images/image-avatar.png"
                alt=""
                className="md:border rounded-full  lg:border-primaryOrange lg:border-4"
              />
            </div>
          </div>
        </div>
        <hr className="w-[80%] mx-auto mt-5" />
      </header>
    </>
  );
}
