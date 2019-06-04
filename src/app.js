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
import plugin from "./plugin"
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import TabsItem from './tabs-item'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapseItem'

// Vue.component('g-button',Button)
// Vue.component('g-icon', Icon)
// Vue.component('g-button-group', ButtonGroup)
// Vue.component('g-input', Input)

//用户自主选择plugin
//
Vue.use(plugin);
new Vue({
    el: "#app",
    data: {
        selectedTab:'movie'
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
        'g-toast':Toast,
        'g-tabs':Tabs,
        'g-tabs-item':TabsItem,
        'g-tabs-body':TabsBody,
        'g-tabs-head':TabsHead,
        'g-tabs-pane':TabsPane,
        'g-popover':Popover,
        'g-collapse':Collapse,
        'g-collapse-item':CollapseItem,
    },
    created(){

    },
    methods:{
        inputChange(e){
            console.log(e)
        },
        showToast({position}){
            // this.$toast('<strong>你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗</strong>')

            this.$toast(`hi${parseInt(Math.random()*100)}`,{
                closeButton:{
                    text:'关闭',
                    callback(vm){
                        vm.log('用户说知道了')
                    },
                },
                autoClose:false,//false或数字，去除delay鸡肋
                position:position,
                enableHtml:true
            })
        }
    }
})


