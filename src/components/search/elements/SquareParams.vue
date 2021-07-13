<template>
  <div class="square-params">
    <template v-if="isActive">
      <Input type="number" name="square-from" placeholder="от" class="square__input" />
      <Input type="number" name="square-to" placeholder="до" class="square__input" />
      <DisabledInput value="м²" class="square__input" />
    </template>
    <PlaceholderButton @click="$emit('clickPlaceholderSquare')" v-else title="Добавить метраж" />
  </div>
</template>

<script>
import Input from "./Input.vue";
import DisabledInput from "./DisabledInput.vue";
import PlaceholderButton from "./PlaceholderButton.vue";

export default {
  name: "SquareParams",
  components: {
    Input,
    DisabledInput,
    PlaceholderButton,
  },
  props: {
    isActive: {
      type: Boolean,
      require: true,
    }
  }
};
</script>

<style scoped lang="scss">
.square {
  &-params {
    display: flex;
    flex-basis: 33%;
  }

  &__input {
    margin-right: 1px;
  }
}
</style>