<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluCollapseItem",
        props: {
            title: {
                type: String,
                required: true
            },
            name:{
                type:String,
                required: true
            }
        },
        data () {
            return {
                open: false
            }
        },
        inject:['eventBus'],
        methods:{
            toggle (){
                if(this.open){
                    this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
                }else{
                    this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
                }
            },
            close(){
                this.open = false
            },
            show(){
                this.open = true
            }
        },
        mounted(){
            this.eventBus && this.eventBus.$on('update:selected',names=>{
                if(names.indexOf(this.name)<0){
                    this.close()
                }else{
                    this.show()
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .collapseItem {
        > .title {
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }
        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
        > .content {
            padding: 8px;
        }
    }
</style>
