import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js"; 
import Body from "./Components/Body.js";

// const RestaurentList = (props) => {
//   const { resList } = props;
  //console.log(resList);
//   <div className="restaurent-container">
//   <RestaurentList resList={resList} />
// </div>
  
  
// };
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
