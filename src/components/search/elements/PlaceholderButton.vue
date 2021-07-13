<template>
  <button @click.prevent="$emit('clickPlaceholder')">{{ title }}</button>
</template>

<script>
export default {
  name: "SearchPlaceholderButton",
  props: {
    title: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
button {
  padding: 10px 35px;
  background-color: inherit;
  color: rgba(100, 100, 100, 0.9);
  border: 2px solid rgba(100, 100, 100, 0.314);
  font-size: 20px;
  flex-grow: 1;
}
</style>