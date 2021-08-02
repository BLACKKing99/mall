<template>
  <div class="check-button">
    <img
      src="@/assets/img/cart/tick.svg"
      alt=""
      class="check-button-img"
      :class="{ isactive: ischange }"
    />
  </div>
</template>

<script>
export default {
  props: {
    ischange: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style>
.check-button {
  height: 30px;
}
.check-button-img {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: solid 2px #ccc;
}
.isactive {
  border-color: red;
  background: red;
}
</style>