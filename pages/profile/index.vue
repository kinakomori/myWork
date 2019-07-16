<template>
  <div class="wrapper">
    <page>
      <template v-slot:title>
        PROFILE
      </template>
      <p class="text">高級ホテル・旅館に特化したOTA「一休.com」にて、KPIに基づいたUI改善、及びフロントエンドの実装。<br>またデザイナー職として、新規サービス立ち上げ経験等。</p>
    </page>
  </div>
</template>

<script>
import Page from '~/layouts/page.vue';

export default {
  components: {
    Page,
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
.navList {
  display: inline-flex;
  border-top: 1px solid rgba(255, 255, 255, 0.65);
}
.navSticky {
  border-top: none;
  position: sticky;
  top: 0;
  background-image: linear-gradient(
    -45deg,
    rgb(1, 212, 153,0.1) 0%,
    rgba(0,162,226,0.8) 100%
  );
  animation: slideIn 0.3s ease-out forwards;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.text {
  padding: 40px;
}
</style>
