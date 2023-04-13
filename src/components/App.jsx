import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';

export const App = () => {
  // return <div>App</div>;
  return (
    <>
      {/* сюди ставимо заголовок */}
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};
