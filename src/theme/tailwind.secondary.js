//const  COLORS  = require('./constants');
const COLORS = require('./variables');

module.exports = {
  name: 'Secondary',
  extend: {
    colors: {
      ...COLORS,
      primary: COLORS.green,
      'theme-btn-primary-text': COLORS.white,
    },
  },
};
