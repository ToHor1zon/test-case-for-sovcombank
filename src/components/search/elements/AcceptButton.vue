<template>
  <button @click.prevent="$emit('click')">Найти</button>
</template>

<script>
export default {
  name: "SearchAcceptButton",
};
</script>

<style scoped lang="scss">

button {
  border: 0;
  padding: 10px 35px;
  background-color: $primary-color;
  color: #fff;
  font-size: 20px;
}

</style>