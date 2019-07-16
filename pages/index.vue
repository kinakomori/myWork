<template>
  <main class="container">
    <hr class="line">
    <section class="box">
      <logo class="logo" />
      <ul class="nav">
        <li class="navItem">
          <nuxt-link to="/works" class="navItemLink">
            WORKS
          </nuxt-link>
        </li>
        <li class="navItem">
          <nuxt-link to="/career" class="navItemLink">
            CAREER
          </nuxt-link>
        </li>
        <li class="navItem">
          <nuxt-link to="/profile" class="navItemLink">
            PROFILE
          </nuxt-link>
        </li>
      </ul>
      <div class="boxGradient"></div>
    </section>
  </main>
</template>

<script>
import Logo from '~/components/logo.vue';
export default {
  components: {
    Logo,
  }
}
</script>

<style scoped>
.container
{
  height: 100vh;
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.box {
  width: 280px;
  height: 630px;
  display: flex;
  justify-content: center;
  position: relative;
  /* animation: Gradient 10s ease infinite; */
}
.boxGradient {
  width: inherit;
  height: inherit;
  position: absolute;
  z-index: -1;
  background-image: linear-gradient(
    -45deg,
    rgba(0,162,226,0.9) 0%,
    rgba(0,242,173,0.6) 33%,
    rgba(0,162,226,0.9) 66%,
    rgba(0,242,173,0.6) 100%
  );
  background-size: 400% 400%;
  animation: Blur 0.5s ease-in forwards;
}
@keyframes Gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
@keyframes Blur {
  0% {
    opacity: 0;
    filter: blur(10px);
  }
  20% {
    opacity: 0.1;
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
.line {
  height: 200vh;
  border: none;
  border-right: 1px solid rgb(177, 196, 208);
  position: absolute;
  z-index: -2;
  top: -50%;
  transform: rotate(45deg);
  /* animation: Rotation 1.5s ease forwards; */
}
@keyframes Rotation {
	0% {
    opacity: 0;
    transform: rotate(-45deg);
	}
  50% {
    opacity: 0.3;
		transform: rotate(45deg);
  }
	100% {
    opacity: 1;
		transform: rotate(45deg);
	}
}
.logo {
  position: absolute;
  top: 172px;
  transform: translateX(-3px);
}
.nav {
  font-size: 3.6rem;
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  text-align: center;
  animation: fadeIn 0.3s ease-in forwards;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.navItem {
  position: relative;
  height: 62px;
}
.navItem::after,
.navItem::before {
  content: "";
  display: block;
  border-top: 1px solid #00ffcd;
  border-bottom: 1px solid #00ffcd;
  width: 0%;
  height: 100%;
  position: absolute;
  bottom: 0;
  transition: width 0.3s ease-in;
}
.navItem::after {
  left: 0;
}
.navItem::before {
  right: 0;
}
.navItem:hover::after,
.navItem:hover::before {
  transition: width 0.2s ease-in;
  width: 50%;
}
.navItemLink {
  position: relative;
  color: #C7FFF4;
  transform: translateY(0);
  transition: all 0.3s ease-in;
  display: flex;
  font-family: 'EB Garamond', serif;
  height: 100%;
  font-style: italic;
  z-index: 1;
  line-height: 1;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.navItemLink:hover {
  transform: translateY(-2px);
  color: #005577;
  transition: all 0.4s ease-in;
}
.background {
  position: fixed;
}
</style>
