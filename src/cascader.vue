<template>
  <div class="cascader">
    <div class="trigger">
    </div>
    <div class="popover">
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item';
import CascaderX from './cascader-x';

export default {
  name: 'GuluCascader',
  components: {
    CascaderX,
    CascaderItem,
  },
  props: {
    // 属性不要以data开头,eg: dataSource
    source: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
.cascader {
  .trigger {
    border: 1px solid #f00;
    height: 32px;
    width: 100px;
  }
  .popover {
    border: 1px solid #000;
    height: 200px;
    width: 80px;
  }
}
</style>
