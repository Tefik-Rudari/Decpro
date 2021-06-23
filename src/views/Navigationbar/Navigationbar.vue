<template>
  <nav class="navbar navbar-expand-md navbar-light py-4" id="main-nav">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <h4 class="text-light d-inline align-middle tt">DEC</h4>
        <img
          src="../../assets/decpro-logo-light.png"
          width="35"
          height="50"
          alt
        />
        <h4 class="text-light d-inline align-middle tt">PRO</h4>
      </router-link>
      <b-navbar-toggle
        target="nav-collapse"
        class="navbar-toggler navbar-dark"
      ></b-navbar-toggle>
      <b-collapse id="nav-collapse" class="collapse navbar-collapse" is-nav>
        <b-navbar-nav class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="text-light nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="text-light nav-link"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/services" class="text-light nav-link"
              >Services</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="text-light nav-link"
              >About us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="text-light nav-link"
              >Contact</router-link
            >
          </li>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigationbar",
  data: () => ({
    scrollPosition: null
  }),
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style scoped>
.tt {
  font-weight: 400;
  margin: 0 10px;
}

.navbar {
  box-shadow: 0px 1px 3px 0px #0d0d1a;
  opacity: 1;
  background: #0d0d1a;
}

.navbar .nav-item {
  font-size: 1.4rem;
  padding-right: 1.4rem;
}
</style>
