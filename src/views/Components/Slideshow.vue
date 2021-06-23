<template>
  <section>
    <div id="slideshow">
      <v-carousel hide-delimiter-background show-arrows-on-hover cycle>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../../../src/assets/decpro-bag.jpg")
        },
        {
          src: require("../../../src/assets/decpro-mug.jpg")
        },
        {
          src: require("../../../src/assets/decpro-thumbnail-2.jpg")
        },
        {
          src: require("../../../src/assets/decpro-pen.jpg")
        }
      ]
    };
  }
};
</script>

<style></style>
