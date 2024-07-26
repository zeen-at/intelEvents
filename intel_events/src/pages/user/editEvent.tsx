import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import SideMenu from "../../components/SideMenu";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import { EventSchema } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { EventPayload } from "../../types";
import { createEvent, editEvent } from "../../slice/eventSlice";
import { toast } from "react-toastify";
import { RootState } from "../../redux/store";

const EditEvent = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();

  const events = useSelector((state: RootState) =>
    state.events.find((event) => event.id === eventId),
  );

  const [initialEvent, setInitialEvent] = useState<EventPayload | null>(null);

  useEffect(() => {
    if (events) {
      setInitialEvent({
        eventName: events.eventName,
        description: events.description,
        location: events.location,
        date: new Date(events.date),
        time: new Date(events.time),
      });
    }
  }, [events]);

  const handleEdit = (values: EventPayload) => {
    dispatch(
      editEvent({
        eventName: values.eventName,
        description: values.description,
        location: values.location,
        date: values.date,
        time: values.time,
        id: eventId as string,
      }),
    );
    toast.success("Event edited successfully!");
    navigate("/user/events");
  };

  if (!initialEvent) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex">
      <div className="w-1/8 md:w-1/5">
        <SideMenu />
      </div>
      <div className="py-10 w-3/5  relative left-32 md:left-16 lg:left-0">
        <p className="text-2xl text-orange-700 py-6 font-semibold ">
          Edit Existing Event
        </p>
        <Formik
          initialValues={initialEvent}
          validationSchema={EventSchema}
          onSubmit={handleEdit}
        >
          {({
            touched,
            values,
            setFieldValue,
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form className="flex flex-col gap-10 py-6" onSubmit={handleSubmit}>
              <CustomInput
                placeholder="Event name"
                name="eventName"
                value={values.eventName}
                handleChange={handleChange}
                handleBlur={handleBlur}
                type="text"
                error={errors.eventName}
              />
              <CustomInput
                placeholder={"Description"}
                name={"description"}
                value={values.description}
                handleChange={handleChange}
                handleBlur={handleBlur}
                type={"text"}
              />
              <CustomInput
                placeholder={"location"}
                name={"location"}
                value={values.location}
                handleChange={handleChange}
                handleBlur={handleBlur}
                type={"text"}
              />
              <div className="border-b border-b-orange-800 px-4 w-full ">
                <DatePicker
                  name="date"
                  selected={values.date}
                  onChange={(date: Date | null) => setFieldValue("date", date)}
                  onBlur={handleBlur}
                  className="outline-none"
                />
                {/* {touched.date && errors.date ? <p>{errors.date}</p> : ""} */}
              </div>
              <div className="border-b border-b-orange-800 px-4 w-full ">
                <DatePicker
                  name="time"
                  dateFormat="p"
                  showTimeSelect
                  selected={values.time}
                  onChange={(time: Date | null) => setFieldValue("time", time)}
                  className="outline-none"
                />
              </div>

              <CustomButton title={"Update Event"} type={"submit"} />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditEvent;
