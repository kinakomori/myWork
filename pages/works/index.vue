<template>
  <div class="wrapper" v-scroll="addSticky" id="top">
    <page>
      <template v-slot:title>
        UI/UX
      </template>
      <!-- <ul
        class="navList"
        :class="{ navSticky : stickyStyle }"
      >
        <li v-for="(item, index) in navItems" :key="index">
          <button
            type="button"
            @click="change(item)"
            class="navButton"
            :class="{ navButtonActive : item === isActive }">
            <nuxt-link v-scroll-to="'#title'" to>
              {{ item }}
            </nuxt-link>
          </button>
        </li>
      </ul> -->
      <!-- <div class="containerBox" id="title">
        <transition name="fade">
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
        </transition>
      </div> -->
    </page>
  </div>
</template>

<script>
import Page from '~/layouts/page.vue';
import WorksUi from './worksUi.vue';
import WorksLp from './worksLp.vue';
import WorksLogo from './worksLogo.vue';
import WorksIllustration from './worksIllustration.vue';

const navPosition = 420;

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
      navItems: ['UI','LP','Logo'],
      isActive: 'UI',
      stickyStyle: false,
    }
  },
  directives: {
    scroll: {
      inserted(el, binding) {
        const f = evt => {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f);
          }
        };
        window.addEventListener('scroll', f);
      },
    },
  },
  methods: {
    change(pageName) {
      this.isActive = pageName;
      window.scrollTo(0,0);
    },
    addSticky() {
      this.stickyStyle = window.scrollY > navPosition;
    },
  },
}
</script>

<style scoped>
.wrapper {
}
.navList {
  display: inline-flex;
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
.navButton {
  font-size: 18px;
  color: #fff;
  width: 80px;
  height: 80px;
}
.navSticky .navButton {
  height: 50px;
  width: 100px;
}
.navButton:hover {
  background: rgba(0, 0, 0, 0.15);
  transition: background 0.3s ease-in ;
}
.navButtonActive {
  position: relative;
}
.navButtonActive::before {
  content: '';
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, .7); 
  bottom: 0;
  left: 0;
  position: absolute;
}
@keyframes slideIn {
  0% {
    transform: translateY(-40px);
    opacity: 0;
    width: 50%;
  }
  100% {
    transform: translate(0);
    opacity: 1;
    width: 100%;
  }
}
.containerBox {
  padding-right: 8vw;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .6s ease-in;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
  transition: opacity .3s ease-in;
}
</style>
