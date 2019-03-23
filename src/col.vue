<template>
    <div class="col" :class="[`col-${span}`,offset && `offset-${offset}`]"
    :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <div style="border: 1px solid green;">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Col',
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String],
            }
        },
        data(){
            return{
                gutter:0
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col{
        height: 100px;
        width: 100%;
        background-color: gold;
        border: 1px solid #000;
        $class-prefix:col-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: 100%/24*$n;
            }
        }
        $class-prefix:offset-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: 100%/24*$n;
            }
        }
    }
</style>