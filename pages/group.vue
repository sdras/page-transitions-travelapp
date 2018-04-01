<template>
  <main>
    <div class="wrapper">
      <div class="box item1"></div>
      <div class="box item2"></div>
      <div class="box item3"></div>
      <div class="box item4"></div>
      <div class="box item5"></div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 0 20px 0;
  width: 60%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 24%);
  grid-template-rows: repeat(3, 120px);
  justify-content: center;
  align-content: end;
}

.box {
  border-radius: 3px;
}

$img-slug: hawaii !default;
$class-slug: item !default;

@for $i from 1 through 6 {
  .#{$class-slug}#{$i} {
    background: url('/hawaii#{$i}.jpg') center center no-repeat;
    background-size: cover;
  }
}

.item1 {
  grid-column: 1 / 5;
}

.item2 {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}

.item3 {
  grid-column: 3 / 5;
}
</style>