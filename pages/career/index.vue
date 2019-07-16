<template>
  <div class="wrapper">
    <page>
      <template v-slot:title>
        CAREER
      </template>
      <p class="text">準備中</p>
    </page>
  </div>
</template>

<script>
import Page from '~/layouts/page.vue';

const navPosition = 420;

export default {
  components: {
    Page,
  },
  data () {
    return {
      navItems: ['UI','LP','Logo'],
      isActive: 'UI',
      stickyStyle: false,
    }
  },
}
</script>

<style scoped>
.wrapper {
  background-image: linear-gradient(
    -45deg,
    rgb(1, 212, 153) 0%,
    rgba(0,162,226,1) 100%
  );
  color: #fff;
  min-height: 100vh;
}
.text {
  padding: 40px;
}
</style>
