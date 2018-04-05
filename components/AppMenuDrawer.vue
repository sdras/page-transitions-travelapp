<template>
  <transition
    mode="out-in"
    @before-enter="beforeEnter"
    @enter="enter"
    :css="false">
    <div class="menudrawer" v-if="menuOpened">
      <nuxt-link exact to="/">{{ users[0].name | firstName }}'s Home</nuxt-link><br />
      <nuxt-link to="/place">{{ users[0].name | firstName }}'s Places</nuxt-link><br />
      <nuxt-link to="/group">{{ users[0].name | firstName }}'s Group Trips</nuxt-link>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import { TweenMax, TimelineMax, Sine, Expo } from 'gsap'

export default {
  props: {
    menuOpened: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    beforeEnter(el) {
      TweenMax.set(el, {
        opacity: 0,
        scale: 0,
        transformOrigin: '100% 0%'
      })
      TweenMax.set(el.childNodes, {
        opacity: 0
      })
    },
    enter(el, done) {
      TweenMax.fromTo(
        el,
        0.2,
        {
          opacity: 0,
          scale: 0
        },
        {
          opacity: 1,
          scale: 1,
          ease: Sine.easeOut
        }
      )
      TweenMax.staggerFromTo(
        el.childNodes,
        0.45,
        {
          opacity: 0
        },
        {
          delay: 0.1,
          opacity: 1,
          ease: Sine.easeOut
        },
        0.04
      )
      done()
    }
  },
  computed: mapState(['page', 'users']),
  filters: {
    firstName(input) {
      var lastIndex = input.lastIndexOf(' ')
      return input.substring(0, lastIndex)
    }
  }
}
</script>

<style scoped>
.menudrawer {
  background: rgba(0, 0, 0, 0.8);
  line-height: 1.8;
  text-align: right;
  position: absolute;
  right: 0px;
  top: 45px;
  padding: 20px;
  border-radius: 4px;
  z-index: 5000;
}

a,
a:visited,
a:active {
  color: white;
}
</style>