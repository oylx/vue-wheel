<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{ result || '&nbsp' }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <!--      :class="[popoverClassName]" 传递props的class属性-->
      <cascader-items class="popover" :height="popoverHeight" :items="source"
                      :selected="selected"
                      @update:selected="onUpdateSelected"></cascader-items>
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
    selected: {
      type: Array,
      default: () => { return [];},
    },
  },
  computed: {
    result() {
      return this.selected.map(v => v.name).join('/');
    },
  },
  data() {
    return {
      popoverVisible: false, // 不要用showPopover,show是动作,函数
    };
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected);
    },
  },
};
</script>

<style scoped lang="scss">
@import "var";

.cascader {
  position: relative;

  .trigger {
    height: $input-height;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    min-width: 10em;
    border: 1px solid black;
    border-radius: $border-radius;
  }

  .popover-wrapper {
    margin-top: 8px;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    @extend .box-shadow;
  }
}
</style>
