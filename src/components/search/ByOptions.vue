<template>
  <form id="search-by-options__form" class="search-by-options">
    <div class="main__wrapper">
      <Select
        name="city"
        :options="cities"
        class="main__select"
      />
      <Select
        name="typeOfDeal"
        :options="typesOfDeal"
        class="main__select"
      />
      <Select
        name="typeOfArea"
        :options="typesOfArea"
        class="main__select"
      />
      <AcceptButton @click="acceptHandler" />
    </div>

    <div class="optional__wrapper">
        <PriceParams @clickPlaceholderPrice="$emit('clickPlaceholderPrice')" :isActive="isActivePrice" class="price" />
        <SquareParams @clickPlaceholderSquare="$emit('clickPlaceholderSquare')"  :isActive="isActiveSquare" class="square" />
    </div>
  </form>
</template>

<script>
import AcceptButton from "./elements/AcceptButton.vue";
import Select from "./elements/Select.vue";
import SquareParams from "./elements/SquareParams.vue";
import PriceParams from "./elements/PriceParams.vue";

import { getFormData } from "../../helpers/form";

export default {
  name: "SearchByOptions",
  components: {
    Select,
    AcceptButton,
    SquareParams,
    PriceParams,
  },
  props: {
    isActivePrice: {
      type: Boolean,
      require: true,
    },
    isActiveSquare: {
      type: Boolean,
      require: true,
    },
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
  methods: {
    acceptHandler() {
      const formData = getFormData('#search-by-options__form');
      console.log(formData);
    },
  },
};
</script>

<style lang="scss">
.search-by-options {
  .main {
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }

    &__select {
      flex-grow: 1;
      flex-basis: 0;
      min-width: 180px;
    }
  }

  .optional {
    &__wrapper {
      display: flex;
    
      .price {
        flex-grow: 3;
        margin-right: 20px;
      }

      .square {
        flex-grow: 1;
      }
    }
  }
}
</style>