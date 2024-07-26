import React, { useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CustomCard from "../../components/CustomCard";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Event } from "../../types";
import { deleteEvent, editEvent } from "../../slice/eventSlice";
import { useDispatch } from "react-redux";
import SideMenu from "../../components/SideMenu";
import CustomSearch from "../../components/CustomSearch";

const Events = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state: RootState) => state.events);

  const [query, setQuery] = useState("");

  const handleDelete = (event: Event) => {
    dispatch(deleteEvent(event));
  };

  const handleEdit = (eventId: string) => {
    navigate(`/user/editEvent/${eventId}`);
  };

  const filteredEvents = events.filter(
    (event) =>
      event.eventName.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div className="flex ">
      <div className="w-1/8 md:w-1/5">
        <SideMenu />
      </div>
      <div className="py-10 w-3/5  relative left-32 md:left-16 lg:left-0">
        <p className="text-lg md:text-2xl font-bold py-6">Events</p>

        <CustomSearch
          query={query}
          handleChange={(e) => setQuery(e.target.value)}
        />
        <div className="">
          <div className="py-10 flex flex-col gap-4 ">
            {filteredEvents.length > 0 ? (
              <>
                {filteredEvents.map(
                  ({ id, eventName, description, time, date, location }) => (
                    <div
                      key={id}
                      className="flex flex-col md:flex-row w-full gap-4 md:justify-between items-center "
                    >
                      <div className="md:w-3/4">
                        <CustomCard
                          title={eventName}
                          description={description}
                          time={time}
                          date={date}
                        />
                      </div>
                      <div className=" flex gap-5 font-bold">
                        <button
                          title="edit"
                          type="button"
                          onClick={() => handleEdit(id)}
                          className="text-3xl text-green-800"
                        >
                          <CiEdit />
                        </button>
                        <button
                          title="delete"
                          type="button"
                          onClick={() =>
                            handleDelete({
                              id,
                              eventName,
                              description,
                              time,
                              date,
                              location,
                            })
                          }
                          className="text-3xl text-red-800"
                        >
                          <MdOutlineDeleteOutline />
                        </button>
                      </div>
                    </div>
                  ),
                )}
              </>
            ) : (
              <div
                className="justify-center text-center items-center mx-auto text-amber-700
          "
              >
                <p className=" font-bold text-2xl  ">No Available Events</p>
                <Link to="/create_event" className=" ">
                  Create an event now
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
