<template>
  <div class="search-by-option__wrapper">
    <div class="search-by-option-main__wrapper">
      <Select :name="'city'" :options="cities" class="search-by-option-main__select" />
      <Select :name="'typeOfDeal'" :options="typesOfDeal" class="search-by-option-main__select" />
      <Select :name="'typeOfArea'" :options="typesOfArea" class="search-by-option-main__select" />
      <AcceptButton />
    </div>
  </div>
</template>

<script>
import AcceptButton from "./elements/AcceptButton.vue";
import Select from "./elements/Select.vue";

export default {
  name: "SearchByOptions",
  components: {
    Select,
    AcceptButton,
  },
  data() {
    return {
      cities: [
        { name: "Москва", id: 1 },
        { name: "Санкт-Петербург", id: 2 },
        { name: "Краснодар", id: 3 },
      ],
      typesOfDeal: [
        { name: "Аренда", id: 1 },
        { name: "Покупка", id: 2 },
      ],
      typesOfArea: [
        { name: "Офис", id: 1 },
        { name: "Квартира", id: 2 },
      ],
    };
  },
};
</script>

<style lang="scss">
.search-by-option {
  &-main {
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    
    &__select {
      flex-grow: 1;
      flex-basis: 0;
      min-width: 180px;
    }
  }
}
</style>