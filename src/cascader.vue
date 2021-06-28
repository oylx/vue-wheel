<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="sourceItem in source">
        <cascader-item :source-item="sourceItem"></cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item';
import CascaderX from './cascader-x';
export default {
  name: 'GuluCascader',
  components: { CascaderX, CascaderItem, },
  props: {
    // 属性不要以data开头,eg: dataSource
    source: {
      type: Array,
    }
  }
};
</script>

<style scoped lang="scss">
.cascader {

}
</style>
