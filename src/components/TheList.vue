<template>
  <div class="container">
    <ul class="list">
      <li class="list-item" v-for="project in dataBase" :key="project.id">
        <TheCard
          :title="project.title"
          :subtitle="project.subtitle"
          :siteUrl="project.siteUrl"
          :gitUrl="project.gitUrl"
          :stack="project.stack"
          :imageUrl="project.imageUrl"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import dataBase from "./data.js";
import TheCard from "./TheCard.vue";
export default {
  data() {
    return {
      dataBase: dataBase,
    };
  },
  components: {
    TheCard,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 15px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 30px -10px;
  padding: 0;

  @media (max-width: 1135px) {
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 30px 0 50px;
  }

  @media (max-width: 860px) {
    align-items: center;
    margin: 20px 0;
  }
}
.list-item {
  box-sizing: border-box;
  flex: 0 1 50%;
  padding: 10px;
  @media (max-width: 1135px) {
    padding: 0 0 15px;
  }
}
</style>
