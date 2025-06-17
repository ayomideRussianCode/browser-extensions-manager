import React from "react";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <div className="w-full h-[700px] bg-[hsl(227,75%,14%)]">
        <div className="flex">
          <TopBar />
        </div>
        <div >
          <div className="flex flex-col items-center justify-center" >
            <div>
              <h1 className="text-4xl text-white font-bold justify-center items-center mb-4">Extensions List</h1>
              <div className="w-full flex gap-2"> 
                <button className="bg-[hsl(3,86%,64%)] text-2xl font-semibold text-[hsl(227,75%,14%)] rounded-full px-8 py-4 w-full">All</button>
                <button className="bg-[hsl(225,23%,24%)]   text-2xl font-semibold text-white rounded-full px-6 py-4 w-full">Active</button>
                <button className="bg-[hsl(225,23%,24%)]  text-2xl font-semibold text-white rounded-full px-6 py-4 w-full">Inactive</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
