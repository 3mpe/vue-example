<template>
  <div class="about">
    <h1>{{ deger1 }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';

export default {
  name: "about",
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