<template>
  <div class="card">
    <a class="card__image-link" :href="siteUrl" target="_blank">
      <img class="card__image" :src="imageUrl" :alt="title" />
    </a>
    <div class="card__info">
      <h2 class="card__title">{{ title }}</h2>
      <h3 class="card__subtitle">
        {{ subtitle }}
      </h3>
      <p class="card__text">
        <span>Technologies:</span><br />
        {{ stack }}
      </p>
      <div class="card__links links">
        <a class="links__item" :href="siteUrl" target="_blank">GET A LOOK</a>
        <a class="links__item" :href="gitUrl" target="_blank">REPOSITORY</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCard",
  props: ["id", "title", "subtitle", "siteUrl", "gitUrl", "stack", "imageUrl"],
};
</script>

<style lang="scss" scoped>
.card {
  align-items: flex-start;
  background-color: #fff;
  border: 1px solid #2b283a;
  border-radius: 3px;
  color: #2b283a;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 300;
  line-height: 150%;
  min-height: 580px;
  padding: 20px;
  @media (max-width: 1135px) {
    align-items: flex-start;
    flex-direction: row;
    max-width: 100%;
    min-height: auto;
    padding: 15px;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 10px 10px 20px;
  }
  &__image-link {
    width: 100%;
    @media (max-width: 1135px) {
      width: auto;
    }
  }
  &__image {
    display: block;
    height: 324px;
    width: 100%;
    object-fit: none;
    @media (max-width: 1135px) {
      height: auto;
      max-width: 500px;
      object-fit: cover;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    @media (max-width: 1135px) {
      flex-grow: 0;
      margin-left: 10px;
      width: 50%;
    }
    @media (max-width: 860px) {
      width: 100%;
      margin: 0;
    }
  }
  &__title {
    display: block;
    margin: 20px 0;
    @media (max-width: 860px) {
      font-size: 18px;
      line-height: 20px;
    }
  }
  &__subtitle {
    font-weight: 500;
    max-width: 500px;
    margin-bottom: auto;
    @media (max-width: 1135px) {
      margin-bottom: 20px;
    }
    @media (max-width: 860px) {
      font-size: 16px;
      line-height: 18px;
    }
  }
  &__text {
    max-width: 400px;
    span {
      font-weight: 500;
    }
  }
  &__links {
    margin-top: 25px;
  }
}

.links {
  align-items: center;
  display: flex;
  justify-content: space-between;
  &__item {
    color: #008b8b;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 22px;
    text-transform: uppercase;
    @media (max-width: 860px) {
      font-size: 16px;
      line-height: 18px;
    }
  }
}
</style>