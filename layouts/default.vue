<template>
  <div>
    <app-navigation />
    <nuxt/>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
  components: {
    AppNavigation
  }
}
</script>


<style>
body {
  background: white;
  color: #333;
  font-family: 'Josefin Sans', serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  line-height: 1.2;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a,
a:visited,
a:active {
  color: orangered;
  text-decoration: none;
}

button {
  margin-bottom: 10px;
  background: orangered;
  border: 0;
  cursor: pointer;
  padding: 6px 8px;
  font-size: 16px;
  color: white;
  border-radius: 4px;
}

h1,
h2,
h3,
h4 {
  font-family: 'Playfair Display', serif;
  font-weight: normal;
}

main {
  max-width: 1000px;
  margin: 0 auto;
}

.page-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
}

.page-leave-active {
  transition: all 0.2s ease-in;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: scale(0.99);
  transform-origin: 50% 0%;
}
</style>
