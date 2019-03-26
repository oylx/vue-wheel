const expect = chai.expect;
import Vue from 'vue'
import Toast from './../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })
})
describe('props',()=>{
    const Constructor = Vue.extend(Toast);
    let vm;
    it('接收autoClose属性', (done) => {
        let div = document.createElement('div');
        document.body.appendChild(div)
        vm = new Constructor({
            propsData: {
                autoClose:1
            }
        }).$mount(div)
        vm.$on('close',()=>{
            expect(document.body.contains(vm.$el)).to.eq(false)
            done()//异步一定加done
        })

    })
    it('接收position属性', () => {
        let div = document.createElement('div');
        document.body.appendChild(div)
        vm = new Constructor({
            propsData: {
                position:'bottom'
            }
        }).$mount(div)
        const colElement = vm.$el;
        expect(colElement.classList.contains('position-bottom')).to.equal(true)

    })
    it('接收enableHtml属性', () => {
        let div = document.createElement('div');
        document.body.appendChild(div)
        vm = new Constructor({
            propsData: {
                enableHtml:true
            }
        })
        vm.$slots.default=[`<strong id="hi">hi</strong>`];
        vm.$mount(div);
        let slot = vm.$el.querySelector('#hi')
        expect(slot).to.exist//exist是属性

    })
    // it('接受 closeButton属性', () => {
    //     const callback = sinon.fake();
    //     vm = new Constructor({
    //         propsData: {
    //             closeButton: {
    //                 text: '关闭吧',
    //                 callback,
    //             },
    //         }
    //     }).$mount()
    //     let closeButton = vm.$el.querySelector('.close')
    //     expect(closeButton.textContent.trim()).to.eq('关闭吧')
    //     closeButton.click()
    //     expect(callback).to.have.been.called
    // })
    it('接收closeButton属性', () => {
        const callback = sinon.fake();
        let div = document.createElement('div');
        document.body.appendChild(div)
        vm = new Constructor({
            propsData: {
                closeButton:{
                    text:'关闭的n次方',
                    callback(vm){
                        vm.log('用户说知道了')
                    },
                },
            }
        }).$mount(div)
        vm.$on('close', callback)
        // vm.$on('close',()=>{})//要加done
        let element = vm.$el.querySelector('.close')
        expect(element.innerText).to.eq('关闭的n次方')
        // done()

        // let closeButton = vm.$el.querySelector('.close');
        // expect(closeButton.textContent.trim()).to.eq('关闭的n次方')
        // closeButton.click()
        // expect(callback).to.have.been.called
    })

})