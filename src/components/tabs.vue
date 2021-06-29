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
            this.$children.forEach(vm=>{//vm:head body
                vm.$children.forEach(childVm=>{//childVm:item pane
                    if(childVm.$options.name === 'WheelTabsItem' && this.selected === childVm.name){
                        this.eventBus.$emit('update:selected',this.selected,childVm);
                    }
                })
            })
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
