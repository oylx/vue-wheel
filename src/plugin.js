import Toast from './toast'
export default {
    install(Vue){
        Vue.prototype.$toast =function (message,toastOptions) {
            let Constructor = Vue.extend(Toast);
            let toast = new Constructor(toastOptions?{
                propsData:{
                    closeButton:toastOptions.closeButton,
                    enableHtml:toastOptions.enableHtml,
                }
            }:null);
            toast.$slots.default = [message];
            toast.$mount();
            console.log(toast)
            document.body.appendChild(toast.$el)
        }
    }
}
