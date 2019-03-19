Vue.component('g-slides', {
    template: `
        <div class="g-slides">
        <div class="window">
            <div ref="container" class="g-slides-inner" style="width:100px;">
                <slot></slot>
            </div>
        </div>
        </div>
    `,
    created() {
        setTimeout(()=>{
            this.$refs.container.style.transform=`translateX(-100px)`
        }, 3000)
    },
});
new Vue({
    el: `#app`
})