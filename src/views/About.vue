<template>
  <v-app>
    <v-main>
      <v-img src="../../src/assets/decpro-mug.jpg"> </v-img>

      <head>
        <link rel="shortcut icon" href="../favicon.ico" />
        <link
          href="http://fonts.googleapis.com/css?family=Raleway:400,800,300"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" type="text/css" href="css/normalize.css" />
        <link rel="stylesheet" type="text/css" href="css/demo.css" />
        <link rel="stylesheet" type="text/css" href="css/set1.css" />
      </head>
      <div class="container ourcompany1">
        <h1>Our company</h1>
        <h3>
          Ekipi i kompanise sone operon susksesshem dhe eshte i pandryshuar qe
          nga themelimi. Detyrat e projektimit dhe menaxhimit per secilen fushe
          inxhinierike kryhen nga stafi i ngushte i kompanise te cilet udheheqin
          punet se bashku me ekipet e tyre.
        </h3>
      </div>
      <Team class="teambcg" />
      <Services />
    </v-main>
  </v-app>
</template>

<script>
import Team from "./Projects/Team/Team.vue";
import Services from "./Services/Services";

export default {
  name: "App",
  components: {
    Team,
    Services,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.ourcompany1 {
  text-align: center;
}
.ourcompany1 h1 {
  margin-top: 60px;
  margin-bottom: 60px;
  font-weight: 400;
}
.ourcompany1 h3 {
  font-size: 20px !important;
  font-weight: 400;
}
.teambcg{
  background-color: #f2f2f5 !important;
  padding: 60px 0px;
}
</style>
