<template>
  <div class="wrapper">
    <page>
      <template v-slot:title>
        WORKS
      </template>
      <ul class="navList">
        <li v-for="(item, index) in navItems" :key="index">
          <button
            type="button"
            @click="change(item)"
            class="navButton"
            :class="{ navButtonActive : item === isActive }">
            {{ item }}
          </button>
        </li>
      </ul>
      <template v-if="isActive === 'UI'">
        <works-ui></works-ui>
      </template>
      <template v-else-if="isActive === 'LP'">
        <works-lp></works-lp>
      </template>
      <template v-else-if="isActive === 'Logo'">
        <works-logo></works-logo>
      </template>
      <template v-else-if="isActive === 'Illustration'">
        <works-Illustration></works-Illustration>
      </template>
    </page>
  </div>
</template>

<script>
import Page from '~/layouts/page.vue';
import WorksUi from './worksUi.vue';
import WorksLp from './worksLp.vue';
import WorksLogo from './worksLogo.vue';
import WorksIllustration from './worksIllustration.vue';
export default {
  components: {
    Page,
    WorksUi,
    WorksLp,
    WorksLogo,
    WorksIllustration,
  },
  data () {
    return {
      navItems: ['UI','LP','Logo','Illustration'],
      isActive: 'UI',
    }
  },
  methods: {
    change(pageName) {
      this.isActive = pageName;
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
}
.navList {
  display: inline-flex;
  border-top: 1px solid rgba(255, 255, 255, 0.65);
}
.navButton {
  padding: 24px;
  font-size: 18px;
  color: #fff;
}
.navButton:hover {
  background: rgba(0, 0, 0, 0.15);
  transition: background .3s ease-in;
}
.navButtonActive {
  position: relative;
}
.navButtonActive::before {
  content: '';
  width: 100%;
  height: 5px;
  background: rgb(0, 128, 160); 
  bottom: 0;
  left: 0;
  position: absolute;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
