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
        <icon-base class="menu" icon-name="menu" icon-color="white" width="28" height="28">
          <icon-three-dot />
        </icon-base>
        <transition-group tag="div">
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
          <h2 key="profile-name" class="profile-name">
            <span v-if="page === 'group'" class="user-trip">{{ users[0].trips[0] }}</span>
            <span v-else>{{ users[0].name }}</span>
          </h2>
          <div class="side-icon" key="sideicon">
            <icon-base 
              v-if="page === 'index'"
              icon-name="mail" 
              icon-color="white" 
              width="22" 
              height="22"
            >
              <icon-mail />
            </icon-base>
            <icon-base 
              v-else
              icon-name="plus" 
              width="18" 
              height="18"
            >
              <icon-plus />
            </icon-base>
          </div>
          <aside key="aside">
            <p class="map-pin">
              <icon-base 
                icon-name="mappin" 
                width="18" 
                height="18"
              >
                <icon-map-pin />
              </icon-base>
              British Overseas Territory
            </p>
            <p class="calendar">
              <icon-base 
                icon-name="calendar" 
                width="18" 
                height="18"
              >
                <icon-calendar />
              </icon-base>
              {{ users[0].days }} days traveling
            </p>
          </aside>
        </transition-group>
        
        <app-stats :users="users" />
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import AppStats from './AppStats.vue'
import IconBase from './IconBase.vue'
import IconMail from './IconMail.vue'
import IconPlus from './IconPlus.vue'
import IconMapPin from './IconMapPin.vue'
import IconCalendar from './IconCalendar.vue'
import IconThreeDot from './IconThreeDot.vue'

export default {
  components: {
    AppStats,
    IconBase,
    IconMail,
    IconPlus,
    IconMapPin,
    IconCalendar,
    IconThreeDot
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

<style scoped lang="scss">
header {
  width: 100vw;
  height: 300px;
  position: relative;
  // background: url('/header1.jpg') no-repeat center center;
  // background-size: cover;
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
  transform: scale(1.1);
  opacity: 0;
}

.bk-img {
  position: fixed;
  width: 100vw;
  height: 300px;
  overflow: hidden;
  top: 0;
}

.nav-wrapper {
  width: 100vw;
  position: relative;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
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

aside p {
  text-align: right;
  position: absolute;
  right: 0;
  top: 250px;
  color: white;
}

.calendar,
.map-pin {
  transition: 0.4s all ease-out;
  opacity: 0;
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

.side-icon {
  position: absolute;
  top: 220px;
  right: 0;
  display: block;
  transition: 0.4s all ease-out;
  padding: 12px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50% 50%;
  cursor: pointer;
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
  .side-icon {
    transform: translate3d(0, -40px, 0);
    background: rgba(255, 255, 255, 0.9);
  }
  .calendar {
    opacity: 1;
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
  .two,
  .three,
  .four {
    transition: 0.4s all ease-in-out;
    opacity: 1;
  }
  .two {
    transform: translate3d(65px, 5px, 0);
  }
  .three {
    transform: translate3d(120px, 5px, 0);
  }
  .four {
    transform: translate3d(175px, 5px, 0);
  }
  .online {
    opacity: 1;
  }
  .profile-name {
    transform: translate3d(0px, -125px, 0);
    color: white;
  }
  .side-icon {
    transform: translate3d(0, -40px, 0);
    background: rgba(255, 255, 255, 0.9);
  }
  .map-pin {
    opacity: 1;
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