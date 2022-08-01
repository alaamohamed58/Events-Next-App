import { useRouter } from "next/router";
import { Fragment } from "react";

import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogisitics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
const EventDetail = () => {
  const router = useRouter();

  const eventid = router.query.eventid;

  const event = getEventById(eventid);

  if (!event) {
    return <p>Event is not found!</p>;
  }

  const { title, description, image, date, location } = event;

  return (
    <Fragment>
      <EventSummary tite={title} />
      <EventLogisitics
        date={date}
        imageAlt={title}
        address={location}
        image={image}
      />
      <EventContent>
        <p> {description} </p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetail;
