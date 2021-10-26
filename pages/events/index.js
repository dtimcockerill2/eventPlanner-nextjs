import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventsSearch";
import { Fragment } from "react";

function EventsPage() {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventSearch />
      <EventList items={events} />
    </Fragment>
  );
}

export default EventsPage;
