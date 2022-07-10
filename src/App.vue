<template>
  <TheHeader />
  <TheList />
  <p class="signature">Made on VUE.js</p>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheList from "./components/TheList";

export default {
  name: "App",
  components: {
    TheHeader,
    TheList,
  },
};
</script>

<style lang="scss">
// body {
//   margin: 0;
//   padding: 0;
//   font-family: "Poppins", sans-serif;
//   background-color: #ebfdfd;
// }
a {
  color: inherit;
  text-decoration: none;
}

.signature {
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  color: rgba(#2b283a, 0.25);
  margin-bottom: 20px;
}
</style>
