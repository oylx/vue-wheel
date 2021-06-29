<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label">
        <div v-for="item in items" class="level1" @click="leftSelected = item">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-items :items="rightItems"></cascader-items>
    </div>
  </div>
</template>

<script>
// template里面使用跟name相同的标签，那就是自己
export default {
  name: 'cascaderItems',
  props: {
    items: {
      type: Array,
    },
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children;
      } else {
        return null;
      }
    },
  },
  data() {
    return {
      leftSelected: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "var";
.cascaderItem {
  border: 1px solid #f00;
  margin: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .right {
    margin-top: -1px;
  }
}
</style>
