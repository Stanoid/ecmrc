module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    colors:{
      primary:'#042A2B',
      secondary:'black',
      black:'black',
      white:'#fff',
      gray:'gray',
      red:'red',
      transparent:'transparent',
      
     
    },
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
