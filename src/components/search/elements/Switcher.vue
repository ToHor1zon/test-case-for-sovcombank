<template>
  <div class="switcher">
    <span @click="clickHandler(true)" :class="{'text-disabled': !checked}">Основной поиск</span>
    <label class="switch" for="switcher">
      <input
        type="checkbox"
        :checked="!checked"
        @click="clickHandler(!checked)"
        id="switcher"
      />
      <div class="slider round"></div>
    </label>
    <span @click="clickHandler(false)" :class="{'text-disabled': checked}">Искать по названию</span>
  </div>
</template>

<script>
export default {
  name: "Switcher",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickHandler(status) {
      if (this.checked === status) return;

      this.$emit('clickOnSwitcher', status);
    },
  },
};
</script>

<style lang="scss">
span {
  cursor: pointer;
  user-select: none;
}

.switcher {
  display: flex;
  align-items: center;

  .switch {
    display: inline-block;
    position: relative;
    height: 28px;
    width: 54px;
    margin: 0 10px;
  }

  .switch input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 20px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 20px;
  }

  input + .slider {
    background-color: $primary-color;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
</style>