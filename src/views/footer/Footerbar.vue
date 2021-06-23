<template>
  <footer>
    <v-footer dark padless>
      <v-card flat tile class="primary white--text text-center">
        <v-card-text>
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="primary"
            href="https://www.facebook.com/DECProjects/"
            target="_blank"
          >
            <v-icon dark>
              mdi-facebook
            </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="primary"
            href="https://www.instagram.com/deccpro/"
            target="_blank"
          >
            <v-icon dark>
              mdi-instagram
            </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="primary"
            to="/"
            target="_blank"
          >
            <v-icon dark>
              mdi-web
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0"> </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>DecPro</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>
