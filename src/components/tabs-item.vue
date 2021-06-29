<template>
  <div class="tabs-item" @click="onClick" :class="tabsActiveClasses" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WheelTabsItem',
  data() {
    return {
      active: false,
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      required: true,
    },
  },
  computed: {
    tabsActiveClasses() {
      return {
        active: this.active,
        disabled: this.disabled,
      };
    },
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = this.name === name;
    });
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit('update:selected', this.name, this);
      this.$emit('click', this);
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
  border: 1px solid red;

  .left {
    height: 100%;
    padding: .3em 0;
  }

  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
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
