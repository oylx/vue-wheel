<template>
  <div class="cascaderItem">
    {{ sourceItem.name }}
    <cascader-item
      v-if="sourceItem.children"
      v-for="item in sourceItem.children"
      :source-item="item"
    ></cascader-item>
  </div>
</template>

<script>
// template里面使用跟name相同的标签，那就是自己
export default {
  name: 'cascaderItem',
  props: {
    sourceItem: {
      type: Object,
    },
  },
};
</script>

<style scoped>
  .cascaderItem{
    border: 1px solid #f00;
    margin: 10px;
  }
</style>
