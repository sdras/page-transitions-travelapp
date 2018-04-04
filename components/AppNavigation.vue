<template>
  <header :class="{ 'place' : (page === 'place'), 'group' : (page === 'group') }">

    <transition-group name="bk" tag="div" class="bk-img">
      <div key="img1" v-if="page === 'index'" class="header-img1"></div>
      <div key="img2" v-else-if="page === 'place'" class="header-img2"></div>
      <div key="img3" v-else class="header-img3"></div>
    </transition-group>

    <div class="nav-wrapper">
      <nav>
        <ul>
          <nuxt-link exact to="/"><li>{{ users[0].name | firstName }}'s Home</li></nuxt-link>
          <nuxt-link to="/place"><li>{{ users[0].name | firstName }}'s Places</li></nuxt-link>
          <nuxt-link to="/group"><li>{{ users[0].name | firstName }}'s Group Trips</li></nuxt-link>
        </ul>

        <div @click="menuOpened = !menuOpened">
          <icon-base class="menu" icon-name="menu" icon-color="white" width="28" height="28">
            <icon-three-dot/>
          </icon-base>
        </div>
        <app-menu-drawer :menuOpened="menuOpened" />

        <app-nav-transition :users="users"/>

        <app-stats v-if="page === 'index'" :users="users" />
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import { TimelineMax, Expo, Sine, Back } from 'gsap'
import AppStats from './AppStats.vue'
import IconBase from './IconBase.vue'
import IconThreeDot from './IconThreeDot.vue'
import AppMenuDrawer from './AppMenuDrawer.vue'
import AppNavTransition from './AppNavTransition.vue'

export default {
  data() {
    return {
      saved: false,
      menuOpened: false
    }
  },
  components: {
    AppStats,
    IconBase,
    IconThreeDot,
    AppMenuDrawer,
    AppNavTransition
  },
  methods: {
    toggleFollow() {
      if (this.following) {
        this.$store.commit('removeFollower')
      } else {
        this.$store.commit('addFollower')
      }
      this.following = !this.following
    },
    addAnimation() {
      const tl = new TimelineMax()

      tl.add('start')
      tl.to(
        '.plus',
        0.75,
        {
          rotation: -360,
          transformOrigin: '50% 50%',
          ease: Expo.easeOut
        },
        'start'
      )
      tl.to(
        '.line2',
        0.7,
        {
          scaleY: 0.5,
          x: -2,
          rotation: -45,
          transformOrigin: '50% 100%',
          ease: Expo.easeOut
        },
        'start'
      )
      tl.to(
        '.line1',
        0.7,
        {
          rotation: -50,
          x: 7,
          scaleX: 3,
          transformOrigin: '50% 100%',
          ease: Expo.easeOut
        },
        'start'
      )
      tl.fromTo(
        '.saveinfo',
        0.5,
        {
          autoAlpha: 0
        },
        {
          autoAlpha: 1,
          ease: Sine.easeOut
        },
        'start'
      )
      tl.to(
        '.saveinfo',
        0.4,
        {
          autoAlpha: 0,
          ease: Expo.easeIn
        },
        'start+=1'
      )

      return tl
    },
    removeAnimation() {
      const tl = new TimelineMax()

      tl.add('begin')
      tl.to(
        '.plus',
        0.75,
        {
          rotation: 0,
          transformOrigin: '50% 50%',
          ease: Expo.easeOut
        },
        'begin'
      )
      tl.to(
        '.line2',
        0.7,
        {
          scaleY: 1,
          x: 0,
          rotation: 0,
          transformOrigin: '50% 100%',
          ease: Expo.easeOut
        },
        'begin'
      )
      tl.to(
        '.line1',
        0.7,
        {
          rotation: 0,
          x: 0,
          scaleX: 1,
          transformOrigin: '50% 100%',
          ease: Back.easeOut
        },
        'begin'
      )

      tl.timeScale(1.2)

      return tl
    },
    addPlace() {
      if (!this.saved && this.page !== 'index') {
        this.addAnimation()
        this.saved = true
      } else {
        this.removeAnimation()
        this.saved = false
      }
    }
  },
  computed: mapState(['page', 'users']),
  filters: {
    firstName(input) {
      var lastIndex = input.lastIndexOf(' ')
      return input.substring(0, lastIndex)
    }
  },
  watch: {
    menuOpened(val) {
      if (val) {
        TweenMax.to('.first', 0.2, {
          x: 18,
          ease: Sine.easeOut
        })
        TweenMax.to('.last', 0.2, {
          x: -18,
          ease: Sine.easeOut
        })
        TweenMax.staggerTo(
          '.first, .middle, .last',
          0.2,
          {
            fill: '#7eebe6',
            ease: Sine.easeOut
          },
          0.04
        )
      } else {
        TweenMax.to('.first', 0.2, {
          x: 0,
          ease: Sine.easeIn
        })
        TweenMax.to('.last', 0.2, {
          x: 0,
          ease: Sine.easeIn
        })
        TweenMax.to('.first, .middle, .last', 0.2, {
          fill: '#fff'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
header {
  width: 100vw;
  height: 300px;
  position: relative;
  &:before {
    content: '';
    z-index: 10;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 36%,
      rgba(0, 0, 0, 0.65) 100%
    ); /* FF3.6-15 */
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 36%,
      rgba(0, 0, 0, 0.65) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 36%,
      rgba(0, 0, 0, 0.65) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr='#00000000',
        endColorstr='#a6000000',
        GradientType=1
      ); /* IE6-9 fallback on horizontal gradient */
    opacity: 0.6;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
  }
}

@mixin header ($imgurl) {
  background: url($imgurl) center center;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 300px;
}

.header-img1 {
  @include header('/header1.jpg');
}

.header-img2 {
  @include header('/header2.jpg');
}

.header-img3 {
  @include header('/header3.jpg');
}

.bk-enter-active,
.bk-leave-active {
  transition: all 0.4s ease;
}

.bk-enter,
.bk-leave-to {
  transform: scale(1.1) translateZ(0);
  opacity: 0;
}

.bk-img {
  position: absolute;
  width: 100vw;
  height: 300px;
  overflow: hidden;
  top: 0;
}

.nav-wrapper {
  width: 100vw;
  position: relative;
  z-index: 1000;
  background: rgba(4, 67, 98, 0.25);
}

@media screen and (max-width: 1030px) {
  .nav-wrapper {
    padding: 0 20px;
  }
}

ul {
  list-style: none;
  padding: 15px 0;
  li {
    display: inline-block;
    margin-right: 40px;
  }
  a,
  a:active,
  a:visited {
    color: white;
    text-decoration: none;
  }
}

@media screen and (max-width: 600px) {
  ul {
    display: none;
  }
}

.nuxt-link-active {
  font-weight: bold;
}

nav {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.menu {
  position: absolute;
  right: 0;
  top: 8px;
  cursor: pointer;
}
</style>