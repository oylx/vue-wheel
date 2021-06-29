<template>
  <div class="cascaderItem" :style="{'height':height}">
    <div class="left">
      <div class="label">
        <div v-for="item in items" class="level1" @click="leftSelected = item">
          {{ item.name }}
          <icon class="icon" v-if="item.children" name="right"></icon>
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
import Icon from './icon';
export default {
  name: 'cascaderItems',
  components: { Icon },
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
    height: 100%;
    padding: .3em 0;
  }
  .right {
    height: 100%;
    border-left: 1px solid $grey;
  }
  .label {
    padding: .3em 1em;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 1em;
      transform: scale(0.5);
    }
  }
}
</style>
