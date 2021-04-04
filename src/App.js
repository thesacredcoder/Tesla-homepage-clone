import "./App.css";
import Header from "../src/components/Header/Header";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPannels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPannels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LERN MORE"
          rightBtnLink=""
          twoButtons={true}
          first
        />
        <Item
          title="Model S"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="EXISTING INVENTORY"
          twoButtons
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="EXISTING INVENTORY"
          twoButtons
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="EXISTING INVENTORY"
          twoButtons
        />
        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="EXISTING INVENTORY"
          twoButtons
        />
        <Item
          title="Solar for New Roof"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panel"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="LESRN MORE"
          twoButtons
        />
        <Item
          title="Accessories"
          desc=""
          descLink=""
          backgroundImg={Accessories}
          leftBtnTxt="SHOP NOW"
        />
      </div>
    </div>
  );
}

export default App;
