const expect = chai.expect;
import Vue from 'vue'
import Col from './../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })
})
describe('属性',()=>{
    const Constructor = Vue.extend(Col);
    let vm;
    afterEach(()=>{
        vm.$destroy();
    })
    it('接收span属性', () => {
        vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount()
        const colElement = vm.$el
        expect(colElement.classList.contains('col-1')).to.equal(true)
        vm.$destroy()
    })
    it('接收offset属性', () => {

        vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount()
        const colElement = vm.$el
        console.log(colElement)
        expect(colElement.classList.contains('offset-1')).to.equal(true)
        vm.$destroy()
    })
    it('接收widePc属性', () => {
        vm = new Constructor({
            propsData: {
                widePc: {
                    span:1,
                    offset:1
                }
            }
        }).$mount()
        const colElement = vm.$el
        expect(colElement.classList.contains('col-wide-pc-1')).to.equal(true)
        expect(colElement.classList.contains('offset-wide-pc-1')).to.equal(true)
        vm.$destroy()
    })
    it('接收pc属性', () => {
        vm = new Constructor({
            propsData: {
                pc: {
                    span:1,
                    offset:1
                }
            }
        }).$mount()
        const colElement = vm.$el
        expect(colElement.classList.contains('col-pc-1')).to.equal(true)
        expect(colElement.classList.contains('offset-pc-1')).to.equal(true)
        vm.$destroy()
    })
    it('接收narrowPc属性', () => {
        vm = new Constructor({
            propsData: {
                narrowPc: {
                    span:1,
                    offset:1
                }
            }
        }).$mount()
        const colElement = vm.$el
        console.log(colElement.classList)
        expect(colElement.classList.contains('col-narrow-pc-1')).to.equal(true)
        expect(colElement.classList.contains('offset-narrow-pc-1')).to.equal(true)
        vm.$destroy()
    })
    it('接收ipad属性', () => {
        vm = new Constructor({
            propsData: {
                ipad: {
                    span:1,
                    offset:1
                }
            }
        }).$mount()
        const colElement = vm.$el
        console.log(colElement.classList)
        expect(colElement.classList.contains('col-ipad-1')).to.equal(true)
        expect(colElement.classList.contains('offset-ipad-1')).to.equal(true)
        vm.$destroy()
    })
})