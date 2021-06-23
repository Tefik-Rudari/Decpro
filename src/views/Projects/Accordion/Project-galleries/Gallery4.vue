<template>
  <v-col cols="12" sm="8" offset-sm="2">
    <h2 class="text-center">Engineering</h2>
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.id"
        class="d-flex child-flex"
        cols="6"
      >
        <v-card flat tile class="d-flex zoom">
          <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2 foto">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "Projects",

  data() {
    return {
      items: [
        {
          id: "22",
          src: require("../../../../assets/project4/image-1.jpg")
        },
        {
          id: "23",
          src: require("../../../../assets/project4/image-2.jpg")
        },
        {
          id: "24",
          src: require("../../../../assets/project4/image-3.jpg")
        },
        {
          id: "25",
          src: require("../../../../assets/project4/image-4.jpg")
        }
      ]
    };
  }
};
</script>

<style scoped>
.zoom {
  transition: transform 0.7s;
}
.zoom:hover {
  transform: scale(2);
  z-index: 1;
}
h2 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-bottom: 80px;
}
</style>
