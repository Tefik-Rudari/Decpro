<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center flex-wrap" data-aos="fade-right">
          <h1 id="Title1">Who are we!</h1>
          <h4 id="Content1">
            Ne jemi nje kompani me baze ne Prishtine, e cila kryen sherbime te
            inxhinierise civile me prioritet projektimin e strukturave te
            objekteve si dhe instalimet hidraulike, mekaninerike dhe elektrike.
          </h4>
        </div>
        <div class="col-md-6" data-aos="fade-left">
          <img
            src="../../assets/decpro-graphic-element.jpg"
            alt
            class="img-fluid"
          />
        </div>
      </div>
    </div>

    <div class="denary">
      <div class="container">
        <div class="row denary">
          <div class="col-md-6" data-aos="fade-right">
            <v-img src="../../../src/assets/decpro-mug.jpg"> </v-img>
          </div>
          <div class="col-md-6 align-self-center" data-aos="fade-left">
            <h1 id="Title2">Sherbimet qe ofrojme</h1>
            <h4 id="Content2">
              Kompania jone ben dizajnimin inxhinierik te shtepive, villave,
              objekteve administrative, objekteve shume-banesore, objekteve
              industriale. Ne projektojme infrastrukture rrugore, ujesjellese
              dhe kanalizime, projekte gjeoteknike, gjeodezike dhe GIS sisteme.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.col-md-6 {
  padding: 0;
}
#Title1 {
  color: aliceblue;
  padding-left: 50px;
}
#Content1 {
  color: aliceblue;
  padding-left: 50px;
}
#Title2 {
  padding-right: 40px;
  padding-left: 20px;
}
#Content2 {
  padding-right: 40px;
  padding-left: 20px;
}
</style>
