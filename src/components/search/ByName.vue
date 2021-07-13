<template>
  <form id="search-by-name__form" class="search-by-name__wrapper">
    <Input
      name="name"
      type="text"
      placeholder="Введите название объекта (бизнес-центра, торгового центра, новостройки, логопарка)"
      class="search-by-name__input"
    />
    <AcceptButton @click="acceptHandler" />
  </form>
</template>

<script>
import Input from "./elements/Input.vue";
import AcceptButton from "./elements/AcceptButton.vue";

import { getFormData } from "../../helpers/form";

export default {
  name: "SearchByName",
  components: {
    Input,
    AcceptButton,
  },
  methods: {
    acceptHandler() {
      const formData = getFormData("#search-by-name__form");
      console.log(formData);
    },
  },
};
</script>

<style lang="scss">
.search-by-name {
  &__wrapper {
    display: flex;
  }

  &__input {
    flex-grow: 1;
  }
}
</style>