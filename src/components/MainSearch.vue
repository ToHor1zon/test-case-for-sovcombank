<template>
  <div class="main-search">
    <div class="main-search-body__wrapper">
      <form>
        <div>
          <SearchByOptions
            v-if="isOptionSearch"
            @clickPlaceholderSquare="isActiveSquare=true" 
            @clickPlaceholderPrice="isActivePrice=true" 
            :isActivePrice="isActivePrice"
            :isActiveSquare="isActiveSquare"
          />
          <SearchByName v-else />
        </div>
      </form>
    </div>
    <div class="footer__wrapper">
      <div class="footer-switcher__wrapper">
        <Switcher
          :checked="isOptionSearch"
          @clickOnSwitcher="switcherStateHandler"
        />
      </div>
      <div v-if="isOptionSearch" class="footer-params__wrapper">
        <FooterOption
          @click="clickOnPriceOption"
          :title="'Цена'"
          :isActive="isActivePrice"
        />
        <FooterOption
          @click="clickOnSquareOption"
          :title="'Метраж'"
          :isActive="isActiveSquare"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchByName from "./search/ByName.vue";
import SearchByOptions from "./search/ByOptions.vue";
import FooterOption from "./search/elements/FooterOption.vue";
import Switcher from "./search/elements/Switcher.vue";

export default {
  name: "MainSearch",
  components: {
    SearchByOptions,
    SearchByName,
    Switcher,
    FooterOption,
  },
  data() {
    return {
      isOptionSearch: true,
      isActivePrice: false,
      isActiveSquare: false,
    };
  },
  methods: {
    switcherStateHandler(isChecked) {
      this.isOptionSearch = isChecked;
    },
    clickOnPriceOption() {
      this.isActivePrice = !this.isActivePrice;
    },
    clickOnSquareOption() {
      this.isActiveSquare = !this.isActiveSquare;
    },
  },
};
</script>

<style lang="scss">
.main-search {
  &-body {
    &__wrapper {
      background: linear-gradient(
        to right,
        $background-primary,
        $background-secondary
      );
      padding: 30px 15px;
    }
  }

  .footer {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      background-color: rgba(68, 171, 231, 0.2);
      padding: 15px 40px;
    }

    &-switcher {
      &__wrapper {
        display: flex;
        align-items: center;
      }
    }

    &-params {
      &__wrapper {
        display: flex;
      }
    }
  }
}
</style>
