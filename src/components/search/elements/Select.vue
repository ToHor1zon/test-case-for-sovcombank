<template>
  <select :name="name">
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SearchSelect",
  props: {
    name: {
      type: String,
      require: true,
    },
    options: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">

select {
  height: 43px;
  border: 0;
  margin-left: 2px;
  padding: 0 10px;
  font-size: 18px;

  &:first-child {
    margin-left: 0;
  }

  option {
    height: 43px;
  }
}

</style>