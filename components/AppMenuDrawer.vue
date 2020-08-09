<template>
  <transition mode="out-in" name="menu">
    <div class="menudrawer" v-if="menuOpened">
      <nuxt-link exact to="/"
        >{{ selectedUser.name | firstName }}'s Home</nuxt-link
      ><br />
      <nuxt-link to="/place"
        >{{ selectedUser.name | firstName }}'s Places</nuxt-link
      ><br />
      <nuxt-link to="/group"
        >{{ selectedUser.name | firstName }}'s Group Trips</nuxt-link
      >
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    menuOpened: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(["selectedUser"])
  },
  filters: {
    firstName(input) {
      var lastIndex = input.lastIndexOf(" ");
      return input.substring(0, lastIndex);
    }
  }
};
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
  z-index: 10000;
}

a,
a:visited,
a:active {
  color: white;
}

.menu-enter-active {
  transition: all 0.3s ease;
}
.menu-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.menu-enter,
.menu-leave-to {
  transform: scale(0.9);
  transform-origin: "100% 0%";
  opacity: 0;
}
</style>
