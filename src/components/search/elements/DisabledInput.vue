<template>
  <input disabled :value="value" />
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    value: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
input {
  padding: 0 10px;
  font-size: 18px;
  width: 100%;
  height: 43px;
  border: 0;
}
</style>