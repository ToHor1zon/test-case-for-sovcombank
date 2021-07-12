<template>
  <button @click="$emit('click', isActive)" class="search-footer-button">
    <div
      :class="[
        'search-footer-button__icon',
        { 'search-footer-button__icon--active': isActive },
      ]"
    >
      +
    </div>
    <div>{{ title }}</div>
  </button>
</template>

<script>
export default {
  name: "FooterOption",
  props: {
    title: {
      type: String,
      require: true,
    },
    isActive: {
      type: Boolean,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
.search-footer-button {
  display: flex;
  align-items: center;
  color: $background-primary;
  cursor: pointer;

  &:hover {
    .search-footer-button__icon {
      transform: rotate(10deg);
    }

    .search-footer-button__icon--active {
      transform: rotate(35deg);
    }
  }

  &:first-child {
    margin-right: 20px;
  }

  &__icon {
    border: 2px solid $background-primary;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    padding-bottom: 0;
    font-size: 24px;
    line-height: 22px;
    margin-right: 8px;
    transition: 0.2s;

    &--active {
      transform: rotate(45deg);
      color: #e25050;
    }
  }
}

button {
  border: 0;
  font-size: 18px;
  background-color: inherit;
}
</style>