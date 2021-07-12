<template>
  <div>
    <div class="main-search-body__wrapper">
      <form>
        <SearchByName v-if="isOptionSearch" />
        <SearchByOptions v-else />
      </form>
    </div>
    <div class="main-search-footer__wrapper">
      <div class="main-search-footer-switcher__wrapper">
        <Switcher :checked="isOptionSearch" @clickOnSwitcher="switcherStateHandler" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchByName from "./search/ByName.vue";
import SearchByOptions from "./search/ByOptions.vue";
import Switcher from "./search/elements/Switcher.vue";

export default {
  components: {
    SearchByOptions,
    SearchByName,
    Switcher,
  },
  data() {
    return {
      isOptionSearch: false,
    };
  },
  methods: {
    switcherStateHandler(isChecked) {

      this.isOptionSearch = isChecked;
    }
  }
};
</script>

<style lang="scss">
.main-search {
  &-body {
    &__wrapper {
      background: linear-gradient(
        to right,
        rgb(77, 177, 235),
        rgb(134, 206, 228)
      );
      padding: 30px 15px;
    }
  }

  &-footer {
    &__wrapper {
      background-color: rgba(68, 171, 231, 0.2);
      padding: 15px 40px;
    }

    &-switcher {
      &__wrapper {
        display: flex;
        align-items: center;
      }
    }
  }
}

</style>
