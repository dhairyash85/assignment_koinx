import Navbar from "./component/Navbar";
import { IoTriangleSharp } from "react-icons/io5";
import Chart from "./component/Chart";

const fundamentalsData = [
  { label: "Bitcoin Price", value: "$16,814.50" },
  { label: "24h Low/24h High", value: "$16,382.6/$16,874.50" },
  { label: "7d Low/7d High", value: "$16,382.6/$16,874.50" },
  { label: "Trading Volume", value: "$32,242,202,784" },
  { label: "Market Cap Rank", value: "#1" },
  { label: "Market Cap", value: "$323,542,202,784" },
  { label: "Market Cap Dominance", value: "38.343%" },
  { label: "Volume / Market Cap", value: "0.0718" },
  {
    label: "All-Time High",
    value: "$69,044.96",
    percentage: "-74.3%",
    date: "Nov 10, 2021 (About a year ago)",
  },
  {
    label: "All-Time Low",
    value: "$67.81",
    percentage: "24729.1%",
    date: "Jul 06, 2013 (Over 9 years ago)",
  },
];

export default function Home() {
  return (
    <div className="bg-[#EFF2F5] h-full w-screen">
      <Navbar />
      <div className="p-5 flex flex-col">
        <h1 className="font-thin text-gray-400 text-sm">
          Cryptocurrencies {">>"}{" "}
          <span className="font-bold text-black">Bitcoin</span>
        </h1>
        <div className="bg-white mt-3 rounded-lg p-4">
          <div className="flex gap-2 items-center mb-5">
            <img
              className="h-8 w-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s"
              alt="Bitcoin"
            />
            <h1 className="font-semibold">Bitcoin</h1>
            <p className="text-sm font-thin -translate-y-2">BTC</p>
            <div className="bg-[#808A9D] ml-4 text-white p-2 font-semibold rounded-lg">
              Rank #1
            </div>
          </div>
          <div className="flex gap-3">
            <h1 className="text-2xl font-semibold text-black mr-4">
              $46,953.04
            </h1>
            <div className="bg-[#EBF9F4] flex items-center rounded-md px-2 py-1 gap-2">
              <IoTriangleSharp className="h-3 w-3 text-[#14B079]" />
              <p className="text-[#14B079] font-bold">2.51%</p>
            </div>
            <p className="text-sm font-semibold text-gray-500">(24H)</p>
          </div>
          <p className="text-black font-semibold text-lg">₹13,42,343</p>
          <Chart />
        </div>
        <div className="flex justify-between pt-7 mb-4 text-xs border-b-2 border-spacing-2">
          <p className="text-blue-500 font-bold underline">Overview</p>
          <p className="text-gray-500 font-semibold">Fundamentals</p>
          <p className="text-gray-500 font-semibold">News Insights</p>
          <p className="text-gray-500 font-semibold">Sentiments</p>
          <p className="text-gray-500 font-semibold">Team</p>
          <p className="text-gray-500 font-semibold">Technicals</p>
          <p className="text-gray-500 font-semibold">Tokenomics</p>
        </div>
        <div className="bg-white rounded-lg py-2 px-3 mb-10">
          <h1 className="font-semibold text-lg">
            Fundamentals{" "}
            <span className="bg-gray-400 rounded-full text-xs py-0.5 px-2 text-white">
              i
            </span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 mt-3 gap-x-10 grid-flow-row pb-12">
            {fundamentalsData.map((item, index) => (
              <div
                key={index}
                className="border-b pb-3 border-b-gray-400 text-gray-400 flex justify-between items-center"
              >
                <p>{item.label}</p>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <p className="text-black">{item.value}</p>
                  {item.percentage && (
                    <p
                      className={`text-${
                        item.percentage[0] === "-" ? "red" : "green"
                      }-500`}
                    >
                      {item.percentage}
                    </p>
                  )}
                  {item.date && <p className="text-xs">{item.date}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white py-2 px-4 rounded-lg mb-10">
          <h1 className="font-semibold text-lg py-4">Sentiment</h1>
          <p className="font-semibold text-gray-400 py-2">
            Key Events{" "}
            <span className="bg-gray-600 rounded-full text-xs py-0.5 px-2 text-white">
              i
            </span>
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            <div className="rounded-lg bg-[#E8F4FD] p-3 flex gap-4 flex-1">
              <div className="h-max w-max min-w-max">
                <img className="w-max min-w-max" src="/newsletter.png"></img>
              </div>
              <div>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-sm text-gray-500 ">
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-[#EBF9F4] p-3 flex gap-4 flex-1">
              <div className="h-max w-max min-w-max">
                <img className="w-max min-w-max" src="/upArrow.png"></img>
              </div>
              <div>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-sm text-gray-500 ">
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-2 px-4 rounded-lg mb-10">
          <h1 className="font-semibold text-lg py-4">About Bitcoin</h1>
          <p className="text-black font-bold">What is Bitcoin?</p>
          <p className="text-black ">Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
          
        </div>
      </div>
    </div>
  );
}
