let reset = require('../common/reset.js');

module.exports = (ctx) => ({
  plugins: {
    'postcss-nesting': {},
    'postcss-autoreset': {
      reset: reset,
      rulesMatcher: (rule) => rule.selector.match(/^\.[\w-]+(?:::before|::after)?$/),
    },
    'postcss-nested': {},
    'autoprefixer': {
      grid: 'autoplace',
    },
    'postcss-custom-properties': {
      importFrom: '../../common/variables.css',
    },
    cssnano: ctx.env === 'minify' ? {} : false,
  },
});
