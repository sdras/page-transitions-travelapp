<template>
  <nav>
    <ul>
      <nuxt-link exact to="/"><li>{{ users[0].name | firstName }}'s Home</li></nuxt-link>
      <nuxt-link to="/place"><li>{{ users[0].name | firstName }}'s Places</li></nuxt-link>
      <nuxt-link to="/group"><li>{{ users[0].name | firstName }}'s Group Trips</li></nuxt-link>
    </ul>
    <transition-group :class="{ 'place' : (page === 'place'), 'group' : (page === 'group') }" tag="div">
      <div class="profile-photo" key="profile">
        <img :src="users[0].img" />
        <div class="online"></div>
      </div>
      <div class="profile-photo-secondary two" key="profile2">
        <img src="/profile3.jpg" />
        <div class="online"></div>
      </div>
      <div class="profile-photo-secondary three" key="profile3">
        <img src="/profile4.jpg" />
        <div class="online"></div>
      </div>
      <div class="profile-photo-secondary four" key="profile4">
        <img src="/profile5.jpg" />
        <div class="online"></div>
      </div>
      <button key="follow" class="follow">Follow</button>
      <h2 key="profile-name" class="profile-name">{{ users[0].name }}</h2>
    </transition-group>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['page', 'users']),
  filters: {
    firstName(input) {
      var lastIndex = input.lastIndexOf(' ')
      return input.substring(0, lastIndex)
    }
  }
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

@mixin group($top, $left) {
  position: absolute;
  top: $top;
  left: $left;
  display: block;
  transition: 0.4s all ease-out;
}

@mixin online($size, $position, $border) {
  position: absolute;
  background: #07dc3c;
  border-radius: 50% 50%;
  width: $size;
  height: $size;
  right: $position;
  bottom: $position;
  border: $border;
  opacity: 0;
}

.profile-photo {
  width: 200px;
  @include group(150px, 0);
  img {
    border-radius: 4px;
  }
  .online {
    @include online(40px, 10px, 2px solid black);
  }
}

.profile-photo-secondary {
  @include group(150px, 0);
  width: 50px;
  height: 50px;
  opacity: 0;
  transition: none;
  img {
    border-radius: 50% 50%;
  }
  .online {
    @include online(10px, 0px, 1px solid black);
  }
}

.profile-photo,
.profile-photo-secondary {
  img {
    transition: 0.4s all ease;
    width: 100%;
  }
}

.follow {
  font-weight: bold;
  width: 150px;
  @include group(320px, 220px);
}

.profile-name {
  font-size: 35px;
  @include group(355px, 0);
}

//animations
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

.group {
  .follow {
    opacity: 0;
    transition: none;
  }
  .profile-photo {
    transform: translate3d(-70px, -70px, 0) scale(0.25);
    img {
      border-radius: 50% 50%;
    }
  }
  .two {
    transform: translate3d(65px, 5px, 0);
    transition: 0.4s all ease-in-out;
    transition-delay: 0.05s;
    opacity: 1;
  }
  .three {
    transform: translate3d(120px, 5px, 0);
    transition: 0.4s all ease-in-out;
    transition-delay: 0.1s;
    opacity: 1;
  }
  .four {
    transform: translate3d(175px, 5px, 0);
    transition: 0.4s all ease-in-out;
    transition-delay: 0.15s;
    opacity: 1;
  }
  .online {
    opacity: 1;
  }
  .profile-name {
    transform: translate3d(0px, -125px, 0);
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