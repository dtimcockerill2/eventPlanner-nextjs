import { getAllEvents, getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";
import Head from "next/head";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default HomePage;
