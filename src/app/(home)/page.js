import { Toaster } from "react-hot-toast";
import Category from "./Catagory";
import HomeSlider from "./HomeSlider";
import InstragramPage from "./InstragamPage";
import PeoplePage from "./Peomplepage";
import ProductPage from "./product/page";









export default function Home() {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <Category></Category>
      <div>
        <ProductPage></ProductPage>
      </div>
      <InstragramPage></InstragramPage>
      <div id="view">
        <PeoplePage></PeoplePage>
      </div>
     


    </div>
  )
}
