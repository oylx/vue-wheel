<template>
  <div class="cascaderItem" :style="{'height':height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        <span class="name">{{ item.name }}</span>
        <icon class="icon" v-if="rightArrowVisible(item)" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <!--此处不能简写 :selected.sync="selected" -->
      <!--因为 :selected="selected" @update:selected="selected = $event" 是父接受子数据传入，这里有子数据主动传入父-->
      <cascader-items ref="right" :height="height" :items="rightItems" :level="level+1" :selected="selected"
                      @update:selected="onUpdateSelected"></cascader-items>
    </div>
  </div>
</template>

<script>
// template里面使用跟name相同的标签，那就是自己
import Icon from './icon';

export default {
  name: 'CascaderItems',
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
    loadData: {
      type: Function,
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  updated() {
    console.log('cascader items updated');
    console.log(JSON.stringify(this.items));
  },
  computed: {
    rightItems() {
      if (this.selected[this.level]) {
        let selected = this.items.filter((item) => item.name === this.selected[this.level].name);
        if (selected && selected[0].children && selected[0].children.length > 0) {
          return selected[0].children;
        }
      }
    },
  },
  data() {
    return {
      leftSelected: null,
    };
  },
  methods: {
    rightArrowVisible(item) {
      return this.loadData ? !item.isLeaf : item.children;
    },
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

<style scoped lang="scss">
@import "var";

.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;

  .left {
    height: 100%;
    padding: .3em 0;
    overflow: auto;
  }

  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }

  .label {
    padding: .5em 1em;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      background: $grey;
    }

    > .name {
      margin-right: 1em;
      user-select: none;
    }

    display: flex;
    align-items: center;

    .icon {
      margin-left: auto;
      transform: scale(0.5);
    }
  }
}
</style>
