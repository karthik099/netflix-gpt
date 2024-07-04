import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import Browse from "./Browse";
import Login from "./Login";
import Header from "./Header";

function Body() {
  const appRouter = createBrowserRouter([{ path: "/", element: <Login/>}]);

  return (
    <div >
      {/* <Header/> */}
      <Login/>
      <Browse />
    </div>
  );
}

export default Body;                                                                                        
