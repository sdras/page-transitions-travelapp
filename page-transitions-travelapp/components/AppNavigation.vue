<template>
  <nav>
    <ul>
      <nuxt-link exact to="/"><li>index</li></nuxt-link>
      <nuxt-link to="/place"><li>place</li></nuxt-link>
    </ul>
    <div class="profile-photo" :class="{ 'active' : (page === 'place') }">
      <img src="/profile2.jpg" />
    </div>

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
    color: black;
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