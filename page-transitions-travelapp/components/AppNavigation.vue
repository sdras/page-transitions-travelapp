<template>
  <nav>
    <ul>
      <nuxt-link exact to="/"><li>index</li></nuxt-link>
      <nuxt-link to="/place"><li>place</li></nuxt-link>
    </ul>
    <transition-group :class="{ 'place' : (page === 'place') }" tag="div">
      <div class="profile-photo" 
        key="profile"
      >
        <img src="/profile2.jpg" />
      </div>
      <button key="follow" class="follow">Follow</button>
    </transition-group>
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

nav {
  max-width: 1000px;
  margin: 0 auto;
}

.profile-photo {
  width: 200px;
  position: absolute;
  top: 150px;
  left: 200px;
  transition: 0.5s all ease-out;
  img {
    width: 100%;
    border-radius: 4px;
  }
}

.follow {
  position: absolute;
  font-weight: bold;
  width: 150px;
  top: 320px;
  left: 420px;
  display: block;
  transition: 0.5s all ease-out;
}

.place {
  .follow {
    transform: translate3d(-215px, -80px, 0);
  }
  .profile-photo {
    transform: translate3d(-20px, -100px, 0) scale(0.75);
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
</style>