<template>
  <main>

    <div class="places">
      <p class="top">{{ users[0].name }}'s Places</p>
      <h1>{{ places[0].name }}</h1>
      <p><strong>Rating: {{ places[0].rating }}</strong></p>
      <div class="stars"><app-star-rating /></div>

      <div class="main-img"></div>
      <p>{{ places[0].description }}</p>
    </div>

    <aside class="sidebar">
      <h3>Other Trips</h3>
      <div v-for="place in places" class="location" :key="place.name">
        <img :src="place.img" :alt="place.name" />
        <p class="top"><strong>{{ place.name }}</strong></p>
        <p>{{ place.description }}</p>
        <hr />
      </div>
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
h1 {
  font-size: 45px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.location img {
  width: 70px;
  float: left;
  margin: 0 10px 10px 0;
}

p,
.stars {
  margin: 10px 0;
}

.main-img {
  background: url('/header1.jpg') center center;
  background-size: cover;
  width: 100%;
  height: 240px;
}

.top {
  margin: 30px 0 0;
}
</style>