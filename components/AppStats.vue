<template>
  <div class="stats">
    <div class="bio">
      <p>{{ selectedUser.bio }}</p>
    </div>
    <div>
      <span class="desc">Followers</span><br>
      <span class="lg">{{ selectedUser.followers }}</span>
    </div>
    <div>
      <span class="desc">Following</span><br>
      <span class="lg">{{ selectedUser.following }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedUser: {
      type: Object
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
  line-height: 1.2;
}

.lg {
  font-size: 40px;
}

.bio {
  width: 60%;
  line-height: 1.4;
}

@media screen and (max-width: 980px) {
  .bio {
    display: none;
  }
  .stats {
    justify-content: flex-end;
    div {
      padding-left: 20px;
    }
  }
}

@media screen and (max-width: 600px) {
  .stats {
    display: none;
  }
}
</style>