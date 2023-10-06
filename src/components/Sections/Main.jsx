import ImagesSection from "../imagesSection/ImagesSection"
import Aside from "./Aside"

export default function Main() {
  return (
    <>
        <section className="w-3/5 mx-auto flex item-center  justify-around mt-10 border-2">
            <ImagesSection/>
            <Aside/> 
        </section>
    </>
  )
}