<template>
  <nav>
    <ul>
      <nuxt-link exact to="/"><li>Sophia's Home</li></nuxt-link>
      <nuxt-link to="/place"><li>Sophia's Places</li></nuxt-link>
      <nuxt-link to="/group"><li>Sophia's Group Trips</li></nuxt-link>
    </ul>
    <transition-group :class="{ 'place' : (page === 'place') }" tag="div">
      <div class="profile-photo" 
        key="profile"
      >
        <img src="/profile2.jpg" />
      </div>
      <button key="follow" class="follow">Follow</button>
      <h2 key="profile-name" class="profile-name">Sophia Gonzalez</h2>
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
  padding: 15px 0;
  background: rgba(0, 0, 0, 0.4);
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

nav {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.profile-photo {
  width: 200px;
  position: absolute;
  top: 150px;
  left: 0px;
  transition: 0.4s all ease;
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
  left: 220px;
  display: block;
  transition: 0.4s all ease-out;
}

.profile-name {
  position: absolute;
  top: 355px;
  left: 0px;
  font-size: 35px;
  display: block;
  transition: 0.4s all ease-out;
}

.place {
  .follow {
    transform: translate3d(-215px, -80px, 0);
  }
  .profile-photo {
    transform: translate3d(-20px, -100px, 0) scale(0.75);
  }
  .profile-name {
    transform: translate3d(140px, -125px, 0) scale(0.75);
    color: white;
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