import React, { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";
import { CiCircleChevUp } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

interface ICard {
  description: string;
  title: string;
  time: Date | string;
  date: Date | string;
}

const CustomCard = ({ description, title, time, date }: ICard) => {
  const [isOpen, setIsOpen] = useState(false);

  const formattedDate = new Date(date).toLocaleDateString();
  const formattedTime = new Date(time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col gap-3 divide-y bg-orange-50 border border-orange-200 shadow-lg rounded-md">
      <div className=" text-amber-900 font-semibold rounded-md p-3 w-full flex divide-x space-x-3 items-center  ">
        <div>
          {isOpen ? (
            <button type="button" onClick={handleToggle}>
              <CiCircleChevUp />{" "}
            </button>
          ) : (
            <button type="button" onClick={handleToggle}>
              <CiCircleChevDown />
            </button>
          )}
        </div>

        <div className="flex justify-between w-full">
          <div className="px-3">{title}</div>
          <div className="flex items-center gap-2 text-red-400">
            <CiCalendarDate />
            <p>{formattedDate}</p>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="bg-white flex p-4 justify-between w-full">
          <div className=" text-red-400 ">{description}</div>
          <div className="flex flex-row text-red-400 gap-3 items-center">
            <IoMdTime />
            <p>{formattedTime}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomCard;
