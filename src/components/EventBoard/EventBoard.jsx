import PropTypes from 'prop-types';
import { Event } from 'components/Event/Event';
// цей замінюємо
// import css from './EventBoard.module.css';
// на цей
import {Board} from './EventBoard.styled';


// це під import css
// export const EventBoard = ({ events }) => {
//   return (
//         //  із css беремо eventBoard клас і додаємо в div клас className
//         <div className={css.eventBoard}>
//           {/* перебіраємо масив, деструкрурузуємо значення */}
//           {events.map(({ name, location, speaker, type, time }) => (
//                // так як ID немає то використовуємо 
//                 // унікальне імя для ключа 
//             <Event
//             key={name}
//             name={name}
//             location={location}
//             speaker={speaker}
//             type={type}
//             start={time.start}
//             end={time.end}
//             />
//             ))}
//         </div>
//     );
// };

// це під import {Board}
export const EventBoard = ({ events }) => {
  return (
        //  із css беремо eventBoard клас і додаємо в div клас className
        <Board>
          {/* перебіраємо масив, деструкрурузуємо значення */}
          {events.map(({ name, location, speaker, type, time }) => (
               // так як ID немає то використовуємо 
                // унікальне імя для ключа 
            <Event
            key={name}
            name={name}
            location={location}
            speaker={speaker}
            type={type}
            start={time.start}
            end={time.end}
            />
            ))}
        </Board>
    );
};

EventBoard.propTypes = {
    events: PropTypes.arrayOf(
    //   супер строгий exact
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    }),
  ),
};