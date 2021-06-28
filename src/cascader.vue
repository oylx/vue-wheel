<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover" v-if="popoverVisible">
      <div class="level1">
        <div class="label">
          <div v-for="item1 in source" class="level1" style="border: solid 1px red" @click="level1Selected = item1">
            {{ item1.name }}
          </div>

        </div>
      </div>
      <div class="level2">
        <div class="label">
          <div v-for="item2 in level2Items.children" @click="level2Selected = item2">
            {{ item2.name }}
          </div>
        </div>
      </div>
      <div class="level">
        <div class="label">
          <div v-for="item3 in level3Items.children">
            {{ item3.name }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Cascader',
  components: {
  },
  props: {
    // 属性不要以data开头,eg: dataSource
    source: {
      type: Array,
    },
  },
  data() {
    return {
      popoverVisible: true, // 不要用showPopover,show是动作,函数
      level1Selected: '',
      level2Selected: '',
    };
  },
  computed: {
    level2Items() {
      if(this.level1Selected) {
        return this.level1Selected
      } else {
        return {}
      }
    },
    level3Items() {
      if(this.level2Selected) {
        return this.level2Selected
      } else {
        return {}
      }
    },
  }
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
    display: flex;
    .label {
      white-space: nowrap;
    }
  }
}
</style>
