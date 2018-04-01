<template>
  <div>

    <icon-base 
      v-for="n in rating" 
      icon-name="full star" 
      color="orangered"
      :key="n"
    >
      <icon-star-full />
    </icon-base>

    <icon-base 
      v-for="x in maxRating" 
      icon-name="empty star" 
      color="orangered"
      :key="x + 5"
    >
      <icon-star-empty />
    </icon-base>

  </div>
</template>

<script>
import IconBase from '~/components/IconBase.vue'
import IconStarFull from '~/components/IconStarFull.vue'
import IconStarEmpty from '~/components/IconStarEmpty.vue'

export default {
  props: {
    rating: {
      type: Number,
      default: 4
    }
  },
  computed: {
    maxRating() {
      return 5 - this.rating
    }
  },
  components: {
    IconBase,
    IconStarFull,
    IconStarEmpty
  }
}
</script>

<style scoped>

</style>