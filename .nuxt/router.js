import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _4fa3b846 = () => import('../pages/career/index.vue' /* webpackChunkName: "pages/career/index" */).then(m => m.default || m)
const _000087f7 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _24465f50 = () => import('../pages/works/index.vue' /* webpackChunkName: "pages/works/index" */).then(m => m.default || m)
const _c551c120 = () => import('../pages/works/worksIllustration.vue' /* webpackChunkName: "pages/works/worksIllustration" */).then(m => m.default || m)
const _7efde24b = () => import('../pages/works/worksLogo.vue' /* webpackChunkName: "pages/works/worksLogo" */).then(m => m.default || m)
const _0b8c50b8 = () => import('../pages/works/worksLp.vue' /* webpackChunkName: "pages/works/worksLp" */).then(m => m.default || m)
const _0932d0b4 = () => import('../pages/works/worksUi.vue' /* webpackChunkName: "pages/works/worksUi" */).then(m => m.default || m)
const _119e9bdd = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/career",
			component: _4fa3b846,
			name: "career"
		},
		{
			path: "/profile",
			component: _000087f7,
			name: "profile"
		},
		{
			path: "/works",
			component: _24465f50,
			name: "works"
		},
		{
			path: "/works/worksIllustration",
			component: _c551c120,
			name: "works-worksIllustration"
		},
		{
			path: "/works/worksLogo",
			component: _7efde24b,
			name: "works-worksLogo"
		},
		{
			path: "/works/worksLp",
			component: _0b8c50b8,
			name: "works-worksLp"
		},
		{
			path: "/works/worksUi",
			component: _0932d0b4,
			name: "works-worksUi"
		},
		{
			path: "/",
			component: _119e9bdd,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
