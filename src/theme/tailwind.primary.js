const COLORSS = require('./constants');
//const TEST = require('./variables');
const colors = require('./variables');

//TODO: Format according to the requirement
module.exports = {
  name: 'Primary',
  extend: {
    colors: {
    //  ...COLORSS,
      ...colors.colors,
     // beige: 'orange',
      black: '#2f2d2e',
      'theme-btn-primary-text': COLORSS.black,
    },
  },
};
