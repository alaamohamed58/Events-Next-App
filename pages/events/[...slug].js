import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { getFilteredEvents } from "../../dummy-data";
const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = +filteredData[0],
    filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2022 ||
    filteredYear < 2021 ||
    filteredMonth > 12 ||
    filteredMonth < 1
  ) {
    return <p>please enter a valid filter</p>;
  }

  const filterEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });
  if (!filterEvents || filterEvents.length === 0) {
    return <p>No Event Found!</p>;
  }
  const date = new Date(filteredYear, filteredMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />

      <EventList items={filterEvents} />
    </Fragment>
  );
};
export default FilteredEventsPage;
