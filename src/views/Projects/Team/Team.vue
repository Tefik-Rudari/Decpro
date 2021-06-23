<template>
  <div class="main-area">
    <h1 class="subheading text-center dark--text">Meet Our Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text class="text-left">
              <v-card-title class="black--text">{{ person.name }}</v-card-title>
              <div class="grey--text">Position: {{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn to="/contact" class="#2B2B37">
                <v-icon small left class="fa fa-envelope"></v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Fisnik Jetishi",
          role: "CEO",
          avatar: require("../../../assets/team/fisnik-jetishi-512x512.jpg")
        },
        {
          name: "Genc Thaçi",
          role: "COO edhe Inxh. i Hidroteknikes",
          avatar: require("../../../assets/team/Genc-thaqi-512-512.png")
        },
        {
          name: "Rinor Morina",
          role: "Inxhinier i Strukturës",
          avatar: require("../../../assets/team/rinor-morina-512x512.jpg")
        },
        {
          name: "Agan Lezi",
          role: "Inxhinier i Elektrikës",
          avatar: require("../../../assets/team/agan-lezi-512x512.jpg")
        },
        {
          name: "Ramadan Gashi",
          role: "Inxhinier i Makinerisë",
          avatar: require("../../../assets/team/ramadan-gashi-512x512.jpg")
        }
      ]
    };
  }
};
</script>

<style scoped>
.main-area {
  margin-top: 150px;
  margin-bottom: 100px;
}

.subheading {
  padding-bottom: 20px;
}
</style>
