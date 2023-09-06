
import Category from "./Catagory/Catagory";
import InstragramPage from "./InstragramFlow/page";
import PeoplePage from "./Paeplereviw/page";





export default function Home() {

  return (
    <div>

      <Category></Category>
      <InstragramPage></InstragramPage>
      <div id="view">
        <PeoplePage></PeoplePage>
      </div>



    </div>
  )
}
