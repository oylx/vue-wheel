import  Vue from 'vue'
import  Button from './button.vue'
import  Icon from './icon'
import  ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: "#app",
    data: {
        loading1: false
    }
})

/**
 * 测试icon
 */
import chai from 'chai'
const expect = chai.expect;
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:'set'
        }
    })
    button.$mount('#a');
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-set')
}

/**
 * 测试loading
 */
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:'set',
            loading:true
        }
    })
    button.$mount('#b');
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')

}
/**
 * 测试icon order
 */
{
    const Constructor = Vue.extend(Button);
    const div = document.createElement('div');
    document.body.appendChild(div)
    const button = new Constructor({
        propsData:{
            icon:'set',
            iconPosition:'right'
        }
    })
    button.$mount(div);
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
}
