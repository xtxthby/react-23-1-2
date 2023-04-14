import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';
import {Container} from './App.styled'
export const App = () => {
  // return <div>App</div>;
  return (
    <Container>
      {/* сюди ставимо заголовок */}
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </Container>
  );
};
