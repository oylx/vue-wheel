<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <!--      :class="[popoverClassName]" 传递props的class属性-->
      <cascader-items class="popover" :height="popoverHeight" :items="source"></cascader-items>
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
    popoverHeight: {
      type: String,
    },
  },
  data() {
    return {
      popoverVisible: true, // 不要用showPopover,show是动作,函数
    };
  },
};
</script>

<style scoped lang="scss">
.cascader {
  position: relative;

  .trigger {
    border: 1px solid #f00;
    height: 32px;
    width: 100px;
  }

  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: #ffffff;
    border: 2px solid green;
    //height: 200px;
    display: flex;

    .label {
      white-space: nowrap;
    }
  }
}
</style>
