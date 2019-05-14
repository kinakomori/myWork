<template>
  <section class="container">
    <nuxt-link to="/" class="topLink">
      戻る
    </nuxt-link>
    <h1 class="pageTitle">
      <slot name="title"></slot>
    </h1>
    <slot></slot>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.topLink {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: background 0.3s ease-out;
}
.topLink:hover {
  background: rgba(255, 255, 255, 1);
  transition: background 0.3s ease-in;
}
.container {
  margin-left: 16vw;
  width: 68vw;
  padding-bottom: 60px;
  border-left: 1px solid rgba(255, 255, 255, 0.65);
}
.pageTitle {
  font-family: 'EB Garamond', serif;
  font-style: italic;
  color: #fff;
  font-weight: normal;
  font-size: 62px;
  padding-top: 60px;
  letter-spacing: 2px;
  margin-bottom: 40px;
}
</style>
