<template>
  <v-app class="primary">
    <v-main>
      <Slideshow />
      <Stories />
      <Overlays />
    </v-main>
  </v-app>
</template>

<script>
import Overlays from "../views/Components/Overlays.vue";
import Stories from "../views/Components/Stories.vue";
import Slideshow from "../views/Components/Slideshow.vue";

export default {
  name: "Home",
  meta: [
    {
      vmid: "Home",
      name: "",
      content:
        " Ne jemi nje kompani me baze ne Prishtine, e cila kryen sherbime te inxhinierise civile me prioritet projektimin e strukturave te objekteve si dhe instalimet hidraulike, mekaninerike dhe elektrike."
    }
  ],
  components: {
    Overlays,
    Stories,
    Slideshow
  },
  data() {
    return {};
  }
};
</script>

<style>
.v-application--wrap {
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  max-width: 100%;
  position: relative;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  width: 100%;
}
</style>
