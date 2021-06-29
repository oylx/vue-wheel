<template>
  <div class="cascaderItem" :style="{'height':height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        {{ item.name }}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-items :height="height" :items="rightItems" :level="level+1" :selected="selected"
                      @update:selected="onUpdateSelected"></cascader-items>
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
    },
    selected: {
      type: Array,
      default: () => { return [];},
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level];
      if (currentSelected && currentSelected.children) {
        return currentSelected.children;
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
  methods: {
    onClickLabel(item) {
      // 数组的操作不能直接赋值，this.selected[this.level] = item错误，只能push等API操作或者$set
      // 但是this.$set(this.selected, this.level, item)写法，vue不允许修改props，用下面的写法
      const copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      // 如果更新了，则删掉之后的数据
      copy.splice(this.level + 1);
      this.$emit('update:selected', copy);
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected);
    },
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
