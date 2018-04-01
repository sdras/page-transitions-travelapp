<template>
  <main>
    <div class="places">
      <p class="top">{{ users[0].name }}'s Places</p>
      <h1>{{ places[0].name }}</h1>
      <p><strong>Rating: {{ places[0].rating }}</strong></p>
      <p><app-star-rating /></p>

      <div class="main-img"></div>
      <p>{{ places[0].description }}</p>
    </div>
    <aside>
      <h3>Other Trips</h3>

    </aside>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import IconBase from '~/components/IconBase.vue'
import IconMapPin from '~/components/IconMapPin.vue'
import AppStarRating from '~/components/AppStarRating.vue'

export default {
  components: {
    IconBase,
    IconMapPin,
    AppStarRating
  },
  computed: mapState(['page', 'users', 'places'])
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: space-between;
}

h1 {
  font-size: 45px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.top {
  text-transform: uppercase;
  font-size: 14px;
  color: #666;
  padding: 0;
  margin: 30px 0 0;
}

p {
  margin: 10px 0;
}

.places {
  width: 60%;
}

aside {
  width: 35%;
  padding: 20px;
  margin: 40px 0 0 20px;
  background: #eee;
  float: right;
}

.main-img {
  background: url('/header1.jpg') center center;
  background-size: cover;
  width: 100%;
  height: 240px;
}
</style>