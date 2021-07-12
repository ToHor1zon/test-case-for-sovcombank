<template>
  <div class="search-by-name__wrapper">
    <Input :placeholder="'Введите название объекта (бизнес-центра, торгового центра, новостройки, логопарка)'" class="search-by-name__input" />
    <AcceptButton />
  </div>
</template>

<script>
import Input from './elements/Input.vue';
import AcceptButton from './elements/AcceptButton.vue';

export default {
  name: 'SearchByName',
  components: {
    Input,
    AcceptButton,
  }
}
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