import ImagesSection from "../imagesSection/ImagesSection"
import Aside from "./Aside"

export default function Main() {
  return (
    <>
        <section className="w-3/4 mx-auto flex item-center  justify-around mt-10 border-2 border-green-400">
            <ImagesSection/>
            <Aside/> 
        </section>
    </>
  )
}