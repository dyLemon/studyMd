<script setup lang="ts">
import { ref } from "vue";
const dialogVisible = ref(false);
const handChanl = () => {
  dialogVisible.value = false;
};
const onClick = () => {
  dialogVisible.value = true;
};
</script>
<template>
  <demoButton @click="onClick">ddd</demoButton>
  <!-- <Button>demo</Button> -->
  <!-- <dialogUi :dialogVisible="dialogVisible"></dialogUi> -->
  <imageUi></imageUi>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
