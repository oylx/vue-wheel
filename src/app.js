import  Vue from 'vue'
import  Button from './button.vue'
import  Icon from './icon'
import  ButtonGroup from './button-group'
import  Input from './input'
import  Row from './row'
import  Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from "./plugin";

// Vue.component('g-button',Button)
// Vue.component('g-icon', Icon)
// Vue.component('g-button-group', ButtonGroup)
// Vue.component('g-input', Input)

//用户自主选择plugin
Vue.use(plugin);
new Vue({
    el: "#app",
    data: {
        loading1: false,
        message:1
    },
    components:{
        'g-button':Button,
        'g-icon':Icon,
        'g-button-group': ButtonGroup,
        'g-input':Input,
        'g-row':Row,
        'g-col':Col,
        'g-layout':Layout,
        'g-sider':Sider,
        'g-header':Header,
        'g-content':Content,
        'g-footer':Footer,
        'g-toast':Toast
    },
    created(){

    },
    methods:{
        inputChange(e){
            console.log(e)
        },
        showToast(){
            this.$toast('<strong>hi</strong>')

            // this.$toast('<strong>hi</strong>',{
            //     closeButton:{
            //         text:'好的',
            //         callback(vm){
            //             vm.log('用户说知道了')
            //         }
            //     }
            // })
        }
    }
})

// /**
//  * 测试icon
//  */
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect;
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData:{
//             icon:'set'
//         }
//     })
//     vm.$mount('#a');
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#icon-set')
// }
//
// /**
//  * 测试loading
//  */
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData:{
//             icon:'set',
//             loading:true
//         }
//     })
//     vm.$mount('#b');
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#icon-loading')
//
// }
// /**
//  * 测试icon order
//  */
// {
//     const Constructor = Vue.extend(Button);
//     const div = document.createElement('div');
//     document.body.appendChild(div)
//     const vm = new Constructor({
//         propsData:{
//             icon:'set',
//             iconPosition:'right'
//         }
//     })
//     vm.$mount(div);
//     let svg = vm.$el.querySelector('svg');
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
// }
// /**
//  * 测试函数点击
//  */
// {
//     //mock
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData:{
//             icon:'set'
//         }
//     })
//
//
//
//     vm.$mount()
//
//     let spy = chai.spy(function(){});
//
//     vm.$on('click',spy);
//
//     let button = vm.$el;
//     button.click();
//     expect(spy).to.have.been.called()
// }
