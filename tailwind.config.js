/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.js"],
  theme: {
    extend: {
        colors:{
            "brown": {
                100:"#ECE0D1",
                300:"#DBC1AC",
                600:"#967259",
                900:"#634832"
            }
        }
    },
  },
  plugins: [
    function ({addvariant}){
      addvariant('child','& > *');
      addvariant('child:hover','& > *:hover');
    }
  ],
}