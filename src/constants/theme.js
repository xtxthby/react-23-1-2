// це ті кольори які в index.js

export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    black: '#010101',
    green: '#4caf50',
    red: '#f44336',
    blue: '#2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',
    },
    // це по дізайн системі яка базується на 4-х
    // або 8-х тачках в системі дизайну, це марджин. падінг
    // можна подивитись в стилях на падінгу Event.styled.jsx
  spacing: value => `${4 * value}px`,
});