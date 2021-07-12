<template>
  <select :name="props.name">
    <option v-for="option in options" :key="option.value" :value="option.value">
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