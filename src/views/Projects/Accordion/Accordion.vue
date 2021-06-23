<template>
  <div class="main-dec">
    <div class="container mb-10">
      <div class="container info-header text-center mb-15 mt-15">
        <h1 class="text-dark pb-3">Dec Projects</h1>
        <p class="lead pb-3">Here are some of our future projects!</p>
      </div>
      <v-layout row wrap>
        <v-flex xs12 md5 class="gallery gallery1">
          <Gallery1 />
        </v-flex>
        <v-flex xs12 md7 class="gallery">
          <Gallery2 />
        </v-flex>
        <v-flex xs12 md8 class="gallery3">
          <Gallery3 />
        </v-flex>
        <v-flex xs12 md4>
          <Gallery4 />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import Gallery1 from "./Project-galleries/Gallery1.vue";
import Gallery2 from "./Project-galleries/Gallery2.vue";
import Gallery3 from "./Project-galleries/Gallery3.vue";
import Gallery4 from "./Project-galleries/Gallery4.vue";

export default {
  export: "Accordion",
  components: {
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4
  },
  data: () => ({
    accordion: false,
    popout: true,
    inset: false,
    multiple: true,
    disabled: false,
    readonly: false,
    focusable: true,
    flat: false,
    hover: true,
    tile: false
  })
};
</script>

<style scoped>
.main-dec {
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-bottom: 100px;
}
.gallery1 {
  padding-top: 100px;
}
.gallery {
  margin-bottom: 100px;
}
.gallery3 {
  margin-top: 100px;
}
h1 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
p {
  font-style: italic;
}
</style>
