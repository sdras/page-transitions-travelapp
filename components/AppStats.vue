<template>
  <div class="stats">
    <div class="bio">
      <p>{{ users[0].bio }}</p>
    </div>
    <div>
      <span class="desc">Followers</span><br>
      <span class="lg">{{ users[0].followers }}</span>
    </div>
    <div>
      <span class="desc">Following</span><br>
      <span class="lg">{{ users[0].following }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.stats {
  font-family: 'Playfair Display', serif;
  display: flex;
  position: absolute;
  right: 0;
  top: 330px;
  width: 60%;
  justify-content: space-between;
}

.lg {
  font-size: 40px;
}

.bio {
  width: 60%;
}
</style>