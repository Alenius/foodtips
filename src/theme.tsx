export default {
  color: {
    primaryBackgroundColor: '#282c34',
    secondaryBackgroundColor: '#454754',
    lightgreen: '#8cd881',
    yellow: '#F9F871',
    teal: '#00a9bc',
    black: '#101010',
    lightgray: 'lightgray',
  },
  // since the body has font-size of 62.5%
  // the base font is 10px large. This makes
  // it easy to calculate based on rems and ems.
  rem: {
    xs: '0.625rem', // 10px
    s: '0.75rem', // 12px
    m: '1rem', // 16px
    l: '1.5rem', // 24px
    xl: '2rem', // 32px
    xxl: '2.5rem', // 40px
    xxxl: '3rem', // 52px
  },
  em: {
    xs: '0.625em', //10px
    s: '0.75em', // 12px
    m: '1em', // 16px
    l: '1.5em', // 24px
    xl: '2em', // 32px
    xxl: '2.5em', // 40px
    xxxl: '3em', // 52
  },
  screenSize: {
    small: '600px',
    medium: '900px',
  },
};
