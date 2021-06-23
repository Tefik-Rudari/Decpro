<template>
  <v-app>
    <v-main>
      <Navigationbar></Navigationbar>
      <router-view></router-view>
      <Footerbar> </Footerbar>
    </v-main>
  </v-app>
</template>

<script>
import Navigationbar from "./views/Navigationbar/Navigationbar.vue";
import Footerbar from "./views/footer/Footerbar.vue";

export default {
  name: "App",
  components: {
    Navigationbar,
    Footerbar
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Decprojects ",
    // all titles will be injected into this template
    titleTemplate: ""
  },

  data: () => ({
    //
  })
};
</script>
