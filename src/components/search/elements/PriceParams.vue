<template>
  <div class="price-params">
    <template v-if="isActive">
      <Input :placeholder="'от'" class="price__input" />
      <Input :placeholder="'до'" class="price__input" />
      <DisabledInput :value="'₽/месяц'" class="price__input" />
    </template>
    <PlaceholderButton @clickPlaceholder="$emit('clickPlaceholderPrice')" v-else :title="'Добавить цену'" />
  </div>
</template>

<script>
import Input from "./Input.vue";
import DisabledInput from "./DisabledInput.vue";
import PlaceholderButton from "./PlaceholderButton.vue";

export default {
  name: "PriceParams",
  components: {
    Input,
    DisabledInput,
    PlaceholderButton
  },
  props: {
    isActive: {
      type: Boolean,
      require: true,
    }
  },
};
</script>

<style scoped lang="scss">
.price {
  &-params {
    display: flex;
    flex-grow: 1;
    flex-basis: 60%;
  }

  &__input {
    margin-right: 1px;
  }
}
</style>