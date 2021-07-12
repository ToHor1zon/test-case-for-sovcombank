<template>
  <input :name="name" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    name: {
      type: String,
      require: true,
    },
    placeholder: {
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