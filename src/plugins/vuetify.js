import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);
export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#0D0D1A", //Zezë e mbyllt + kaltër
        secondary: "#34343F", // hirtë e mbyllt
        tertiary: "#30303B", //hirtë
        quaternary: "#525265", // hirtë eqeltë
        quinary: "#0E0E1A", // zezë
        senary: "#CAC9CE", // Hirët
        septenary: "#292935", //hirtë
        octonary: "#2B2B37", //hirtë
        nonary: "#FDFDFD", //bardhë
        denary: "#F2F2F5", // bardhë + hirtë
        color3: "#F0F8FF",

        error: "#f83e70"
      }
    }
  }
});
