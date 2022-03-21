module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    colors:{
      primary:'#01EF78',
      secondary:'#285943',
      black:'black',
      white:'white',
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
    require('@tailwindcss/forms'),
  
  ],
}
