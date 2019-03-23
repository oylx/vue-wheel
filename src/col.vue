<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
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
        computed:{
            colClass(){
                let {span,offset}=this;
                return [span && `col-${span}`,offset && `offset-${offset}`];
            },
            colStyle(){
                let {gutter}=this;
                return {paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'};
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