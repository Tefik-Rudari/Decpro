<template>
  <div class="main-section nonary">
    <!-- Carousel -->
    <v-carousel hide-delimiters :show-arrows="false" height="700px">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="slide-x-transition"
        transition="slide-x-transition"
      >
        <div class="container text-right">
          <div class="container title" color="primary">
            {{ item.title }}
            <p class="lead">
              DEC Pro është kompani me seli në Prishtinë e cila kryen shërbime
              të inxhinierisë civile me prioritet projektimin dhe ndërtimin.
            </p>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>

    <DecproPage class="denary" />
    <!-- COMPONENTS -->
    <Accordion />
  </div>
</template>

<script>
import Accordion from "../Accordion/Accordion.vue";
import DecproPage from "../DecproPage/DecproPage.vue";

export default {
  name: "Projects",
  components: {
    Accordion,
    DecproPage
  },
  data() {
    return {
      items: [
        {
          src: require("../../../assets/decpro-pattern.jpg"),
          title: "Dec PROJECTS"
        }
      ]
    };
  }
};
</script>

<style>
.main-section {
  padding-bottom: 10px;
  width: 100%;
}

.main-section p {
  margin-top: 30px;
}

.title {
  position: absolute;
  bottom: 50px;
}

.info-section {
  margin-top: 100px;
}
</style>
