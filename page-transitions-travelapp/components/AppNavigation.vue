<template>
  <nav>
    <h2>Simple Transition Group For Layout: {{ page }}</h2>
    <ul>
      <nuxt-link exact to="/"><li>index</li></nuxt-link>
      <nuxt-link to="/place"><li>place</li></nuxt-link>
    </ul>
    <br>
    <svg :class="{ 'active' : (page === 'place') }" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 447 442">
      <transition-group name="list" tag="g">
        <rect class="items rect" ref="rect" key="rect" width="171" height="171"/>
        <circle class="items circ" key="circ" id="profile" cx="382" cy="203" r="65"/>
        <g class="items text" id="text" key="text">
          <rect x="56" y="225" width="226" height="16"/>
          <rect x="56" y="252" width="226" height="16"/>
          <rect x="56" y="280" width="226" height="16"/>
        </g>
        <rect class="items footer" key="footer" id="footer" y="423" width="155" height="19" rx="9.5" ry="9.5"/>
      </transition-group>
    </svg>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['page'])
}
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  li {
    display: inline-block;
    margin-right: 10px;
  }
  a,
  a:active,
  a:visited {
    color: white;
    text-decoration: none;
  }
}

.nuxt-link-active {
  font-weight: bold;
}

.items,
.list-move {
  transition: all 0.4s ease;
}

.list-leave-active {
  position: absolute;
}

#text {
  transform-origin: 50% 50%;
}

svg {
  fill: #a8dadc;
}

.active {
  fill: #e63946;
  .rect {
    transform: translateY(30px);
  }
  .circ {
    transform: translateX(30px) scale(0.5);
  }
  .text {
    transform: rotate(90deg) scaleX(0.08) translate3d(-300px, -35px, 0);
  }
  .footer {
    transform: translateX(100px);
  }
}
</style>