import Slider from "./Components/Slider"
import Images from "./images";
import Login from "./Components/Login/Login";
import Sell from "./Components/Sell/Sell";
import BankDetails from "./Components/BankDetails/BankDetails";

function App() {
  return (
    <div className="App">
    <Slider images={Images} />
      <Sell />
    </div>
  );
}

export default App;
