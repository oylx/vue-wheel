<template>
  <div class="cascaderItem" :style="{'height':height}">
    <div class="left">
      <div class="label">
        <div v-for="item in items" class="level1" @click="leftSelected = item">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-items :height="height" :items="rightItems"></cascader-items>
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
    height: {
      type: String,
    }
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
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    border: 1px solid red;
    height: 100%;
  }
  .right {
    height: 100%;
  }
}
</style>
