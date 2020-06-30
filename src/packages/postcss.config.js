module.exports = () => ({
  plugins: {
    'postcss-nesting': {},
    'postcss-autoreset': {
      reset: {
        boxSizing: 'border-box',
        '-webkit-box-sizing':  'border-box',
        '-moz-box-sizing': 'border-box',
        width: 'auto',
        maxWidth: 'none',
        outline: 'none',
        margin: 0,
        padding: 0,
        border: 0,
        background: 'none',
        fontSize: '100%',
        fontFamily: '"Inter", sans-serif',
        lineHeight: 'normal',
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        '&:focus': {
          outline: 'none',
        },
      },
      rulesMatcher: (rule) => rule.selector.match(/^\.[\w-]+(?:::before|::after)?$/),
    },
    'postcss-nested': {},
    'autoprefixer': {
      grid: 'autoplace',
    },
    'postcss-custom-properties': {
      importFrom: '../../common/variables.css',
    },
    cssnano: {},
  },
});
