<template>
  <a href="https://github.com/slowspirit/" class="avatar-box" target="_blank">
    <p class="avatar-name">{{ name }}</p>
    <img
      class="avatar-image"
      src="@/assets/images/portrait.jpeg"
      alt="avatar"
    />
    <p class="avatar-surname">{{ surname }}</p>
  </a>
</template>

<script>
export default {
  data() {
    return {
      name: "Aleksei",
      surname: "Rechitskiy",
    };
  },
};
</script>

<style scoped>
.avatar-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -90px;
}
.avatar-image {
  border-radius: 50%;
  margin: 0 10px;
}
p {
  font-weight: 500;
  letter-spacing: 0.5px;
}
@media (max-width: 860px) {
  .avatar-box {
    margin-left: -35px;
  }
  .avatar-image {
    display: none;
  }
  p:first-child {
    margin-right: 5px;
  }
}
</style>