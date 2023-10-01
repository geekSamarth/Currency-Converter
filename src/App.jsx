import { useState } from "react";
import { InputBox } from "./components";
import chaiImage from "./assets/chaiImage.jpg";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };
  return (
    <main
      className="w-full "
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="w-full md:w-5/6 px-3 py-16 md:py-0 flex flex-col gap-7 md:flex-row mx-auto">
        <div className="w-full md:w-1/2 flex items-center ">
          <img src={chaiImage} alt="chai Image" className="rounded-full" />
        </div>
        <div className="w-full md:w-1/2 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
          <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convert();
                }}
              >
                <div className="w-full mb-1">
                  <InputBox
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    
                  />
                </div>
                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={swap}
                  >
                    swap
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">
                  <InputBox label="To" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                >
                  Convert {fromCurrency.toUpperCase()} to
                  {toCurrency.toUpperCase()}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;
