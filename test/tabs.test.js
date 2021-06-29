const expect = chai.expect;
import Vue from 'vue'
import Tabs from '@/components/tabs'
import TabsHead from '@/components/tabs-head'
import TabsBody from '@/components/tabs-body'
import TabsPane from '@/components/tabs-pane'
import TabsItem from '@/components/tabs-item'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    it('接受selected属性.', (done) => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <g-tabs selected ="movie">
                <g-tabs-head class="frank">
                    <g-tabs-item name="movie">电影</g-tabs-item>
                    <g-tabs-item name="record">纪录片</g-tabs-item>
                    <g-tabs-item name="play">综艺</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="movie">电影相关资讯</g-tabs-pane>
                    <g-tabs-pane name="record">纪录片相关资讯</g-tabs-pane>
                    <g-tabs-pane name="play">综艺相关资讯</g-tabs-pane>
                </g-tabs-body>
            </g-tabs>`;
        let vm = new Vue({
            el:div
        })
        vm.$nextTick(()=>{
            let x = vm.$el.querySelector(`.tabs-item[data-name="movie"]`);
            expect(x.classList.contains('active')).to.be.true;
            done()
        })
    })
})
