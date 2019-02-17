<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg=deger1Return />

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from 'vuex';

import DenemeService from "@/services/deneme.service";

export default {
  name: "home",
  components: {
    HelloWorld
  },
 	mounted() {
 		this.$store.dispatch("deger1Getir");
    this.getrequest();
 	},
  methods: {
    getrequest() {
      
      DenemeService
        .deneme()
        .then(() => { console.log('a')});
    }
  },
  computed: {
  	...mapState([
  		"deger1",
  	]),
  	deger1Return() {
  		return `${this.deger1}`;
  	}
  }
};
</script>
