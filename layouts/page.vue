<template>
  <section class="container">
    <nuxt-link to="/" class="topLink">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" class="topLinkIcon">
        <g transform="translate(-97.139 0)">
          <path d="M104.851,7.693l-6.034,6.02a.982.982,0,0,1-1.39-1.386L102.766,7,97.426,1.673A.982.982,0,0,1,98.816.287l6.034,6.02a.979.979,0,0,1,0,1.386Z"/>
        </g>
      </svg>
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
  background: #005577;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: background 0.3s ease-out;
}
.topLink:hover {
  background: rgb(0, 132, 141);
  transition: background 0.3s ease-in;
}
.topLinkIcon {
  width: 10px;
  fill: #fff;
  transform: rotate(180deg);
}
.container {
  margin-left: 16vw;
  padding-bottom: 60px;
  border-left: 1px solid #e3e3e3;
  min-height: 100vh;
}
.pageTitle {
  font-family: 'EB Garamond', serif;
  font-style: italic;
  font-weight: normal;
  font-size: 72px;
  padding: 60px 0 40px;
  letter-spacing: 2px;
  border-bottom: 1px solid #e3e3e3;
}
</style>
