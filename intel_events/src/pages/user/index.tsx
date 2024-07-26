import React, { useContext, useState } from "react";
import SideMenu from "../../components/SideMenu";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import CustomCard from "../../components/CustomCard";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import CustomSearch from "../../components/CustomSearch";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Date>();

  const events = useSelector((state: RootState) => state.events);

  const { user } = useContext(AuthContext) || {};

  const filteredEvents = events.filter(
    (event) =>
      event.eventName.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex justify-between text-slate-500 ">
      <div className="w-1/8 md:w-1/5">
        <SideMenu />
      </div>
      <div className="flex flex-col md:flex-row w-full relative left-16 lg:left-0">
        <div className="p-10 md:px-5 w-full md:w-3/5">
          <CustomSearch
            query={query}
            handleChange={(e) => setQuery(e.target.value)}
          />

          <div className=" py-10   ">
            <p>Welcome,</p>
          </div>
          <p>Tasks for Today</p>
          <div className="py-4 flex flex-col gap-4 md:w-full">
            {filteredEvents.length > 0 ? (
              <>
                {filteredEvents.map(
                  ({ id, eventName, description, time, date, location }) => (
                    <div key={id} className="">
                      <CustomCard
                        title={eventName}
                        description={description}
                        time={date}
                        date={time}
                      />
                    </div>
                  ),
                )}
              </>
            ) : (
              <div className="justify-center text-center items-center mx-auto">
                <p className="text-amber-700 font-bold text-2xl">
                  No Available Events
                </p>
                <Link to="/user/create_event" className="text-amber-700 ">
                  Create an event now
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="p-10 hidden lg:block  md:w-2/5 border-none bg-amber-50 justify-center h-screen ">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
