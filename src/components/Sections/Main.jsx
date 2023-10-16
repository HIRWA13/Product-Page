import ImagesSection from "../imagesSection/ImagesSection"
import Aside from "./Aside"

export default function Main(props) {
  
  return (
    <>
        <section className="py-4 md:w-3/5 mx-auto grid grid-cols-1 md:grid-cols-2 md:mt-10 md:gap-20">
            <ImagesSection/>
            <Aside isVisible={props.isVisible} />
        </section>
    </>
  )
}