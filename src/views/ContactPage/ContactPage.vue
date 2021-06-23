<template>
  <div>
    <!-- PAGE HEADER -->
    <header id="page-header">
      <div class="container contact-header">
        <div class="row">
          <div class="col-md-6 m-auto text-center">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
    </header>

    <!-- CONTACT SECTION -->
    <section id="contact" class="py-3 contact-us">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card p-4">
              <div class="card-body">
                <h4>Kontakti</h4>
                <p>
                  Na kontaktoni neve për ndërtimin tuaj të radhës në numrin
                  kontaktues apo në email-in tonë zyrtar.
                </p>
                <h4>Adresa</h4>
                <p>Prishtinë</p>
                <h4>Email</h4>
                <p>info@decprojects.com</p>
                <h4>Phone</h4>
                <p>+383-49-386-558</p>
                <p>+383-49-725-288</p>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card p-4">
              <div class="card-body">
                <h3 class="text-center">Contact Form</h3>
                <hr />
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        placeholder="Full Name"
                        v-model="name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        name="email"
                        type="text"
                        class="form-control"
                        placeholder="Email"
                        v-model="email"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        name="message"
                        class="form-control"
                        placeholder="Message"
                        v-model="message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        @click="submit"
                        type="submit"
                        value="Submit"
                        class="btn btn-outline-dark btn-block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Projects",
  data() {
    return {
      items: [{ src: require("../../assets/decpro-pattern.jpg") }],
      email: "",
      name: "",
      message: ""
    };
  },
  methods: {
    submit() {
      // console.log("HELLO" + this.name);
      axios
        .post("http://decprojects.net/laravel/api/mail", {
          name: this.name,
          email: this.email,
          message: this.message
        })
        // .then(response => {
        //   "testt message";
        //   console.log(response);
        //   console.log("test");
        // });
    }
  }
};
</script>

<style scoped>
#page-header {
  height: 300px;
  background: url("../../assets/decpro-theme.jpg");
  background-position: -2px -542px;
  background-attachment: fixed;
  color: #fff;
  border-bottom: 1px #eee solid;
  padding-top: 50px;
}

.contact-header {
  margin-top: 110px;
}

.contact-us {
  margin-top: 100px;
}
</style>
