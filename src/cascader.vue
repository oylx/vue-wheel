<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover" v-if="popoverVisible">
      <cascader-items :items="source"></cascader-items>
    </div>
  </div>
</template>

<script>

import CascaderItems from './cascader-items';
export default {
  name: 'Cascader',
  components: {
    CascaderItems,
  },
  props: {
    // 属性不要以data开头,eg: dataSource
    source: {
      type: Array,
    },
  },
  data() {
    return {
      popoverVisible: false, // 不要用showPopover,show是动作,函数
    };
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
    border: 1px solid green;
    height: 200px;
    width: 80px;
    .label {
      white-space: nowrap;
    }
  }
}
</style>
