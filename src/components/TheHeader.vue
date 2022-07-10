<template>
  <header>
    <div class="container">
      <div class="header__inner">
        <h1 class="header__title">Recent projects</h1>
        <TheAvatar />
        <a
          class="header__cv-link"
          href="./files/Frontend-Rechitskiy_A.pdf"
          target="_blank"
        >
          CV
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import TheAvatar from "./TheAvatar.vue";
export default {
  name: "TheHeader",
  components: {
    TheAvatar,
  },
  data() {
    return {};
  },
  methods: {
    readFile() {
      window.open("./files/Frontend-Rechitskiy_A.pdf", "_blank"); //to open in new tab
    },
  },
};
</script>

<style scoped>
header {
  background-color: #1a6868;
  color: white;
}
.container {
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 15px;
}
.header__inner {
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__title {
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
}
.header__cv-link {
  border: 1px solid #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  padding: 5px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  cursor: pointer;
}
@media (max-width: 860px) {
  .header__title {
    font-size: 16px;
    line-height: 18px;
    width: 80px;
  }
  .container {
    padding: 0 10px;
  }
  .header__cv-link {
    font-size: 16px;
    line-height: 18px;
  }
}
</style>

