<template>
  <div>
    <div>
      <!-- <Select />
      <Select />
      <Select /> -->
      <AcceptButton />
    </div>
  </div>
</template>

<script>
import AcceptButton from "./elements/AcceptButton.vue";
// import Select from "./elements/Select.vue";

export default {
  name: "SearchByOptions",
  components: {
    // Select,
    AcceptButton,
  },
  data() {
    return {
      city: null,
      typeOfDeal: null, // сделать через enum
      typeOfArea: null, // сделать через enum
    };
  },
};
</script>