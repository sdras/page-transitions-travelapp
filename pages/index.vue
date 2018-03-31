<template>
  <main>
    <div></div>
    <div class="mapcontain" ref="mapcontain">
      <p>
        <icon-base icon-name="mappin"><icon-map-pin /></icon-base> 
        Checked in at Honolulu location
      </p>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import IconBase from '~/components/IconBase.vue'
import IconMapPin from '~/components/IconMapPin.vue'

export default {
  components: {
    IconBase,
    IconMapPin
  },
  computed: mapState(['page', 'users']),
  mounted() {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

    mapboxgl.accessToken =
      'pk.eyJ1Ijoic2RyYXNuZXIiLCJhIjoiY2pmZzBqZmptMjI1eTMzbWl1bGExMHppZyJ9.diPXryPOiyMuqcV4mpNOlg'
    var map = new mapboxgl.Map({
      container: this.$refs.mapcontain,
      style: 'mapbox://styles/sdrasner/cjfg0watl6rkv2sllf6hepdd5'
    })
  }
}
</script>

<style>
.mapboxgl-missing-css {
  display: none;
}
</style>

<style lang="scss" scoped>
main {
  padding: 20px 0;
  border-top: 1px solid #ddd;
  margin-top: 120px;
  display: flex;
}

.mapcontain {
  width: 50%;
  height: 400px;
}
</style>
