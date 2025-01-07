import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header/Header";
import Weather from "../components/Weather";
import Graph from "../components/Graph/Graph";
import FAQ from "../components/FAQ";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar
      <aside className="hidden lg:block">
        <Sidebar />
      </aside> */}

      {/* Main Content */}
      <main className="flex flex-col flex-grow">
        <div className="grid grid-rows-2">
          <Header />
          <Weather />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 w-[100%]">
          {/* Graph */}
          <div className="md:col-span-2">
            <Graph />
          </div>

          {/* FAQ */}
          <div className="md:col-span-3">
            <FAQ />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
