<template>
  <div class="home">
    <!-- <v-md-preview :text="str"></v-md-preview> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->

    <chat-interface></chat-interface>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChatInterface from '@/components/ChatInterface.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      str: ""
    }
  },
  components: {
    ChatInterface
  },
});
</script>
