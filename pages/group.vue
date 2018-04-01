<template>
  <main>
    <div class="wrapper">
      <div class="box item1">One</div>
      <div class="box item2">Two</div>
      <div class="box item3">Three</div>
      <div class="box item4">Four</div>
      <div class="box item5">Five</div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
  margin: 0 0 20px 0;
  width: 60%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 24%);
  grid-template-rows: repeat(3, 100px);
  justify-content: center;
  align-content: end;
}

.box {
  background-color: #444;
  border-radius: 3px;
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