export default {
   motionHook: {
      initial: {
         y: 100,
         opacity: 0,
      },
      enter: {
         y: 0,
         opacity: 1,
      },
      delay: 200,
   },
   vueProgressBarOption: {
      color: '#bffaf3',
      failedColor: '#874b4b',
      thickness: '3px',
      transition: {
         speed: '0.2s',
         opacity: '0.6s',
         termination: 300,
      },
      autoRevert: true,
      location: 'left',
      inverse: false,
   },
}
