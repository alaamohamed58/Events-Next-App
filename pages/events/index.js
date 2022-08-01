import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "../../components/events/event-search";
const AllEvents = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventHandeler = (month, year) => {
    const evenLink = `events/${year}/${month}`;

    router.push(evenLink);
  };
  return (
    <Fragment>
      <EventSearch onSearch={findEventHandeler} />
      <EventList items={events} />{" "}
    </Fragment>
  );
};
export default AllEvents;
