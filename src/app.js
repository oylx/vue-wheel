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
            // this.$toast('<strong>你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗</strong>')

            this.$toast(`hi${parseInt(Math.random()*100)}`,{
                closeButton:{
                    text:'关闭',
                    autoClose:false,
                    callback(vm){
                        vm.log('用户说知道了')
                    },
                },
                position:'middle',
                enableHtml:true
            })
        }
    }
})


