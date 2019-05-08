<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'WheelTabs',
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        provide(){
          return {
              eventBus:this.eventBus
          }
        },
        mounted() {
            this.eventBus.$emit('update:selected',this.selected)
        },
        data() {
            return {
                eventBus: new Vue()
            }
        }
    }
</script>
<style>

</style>
