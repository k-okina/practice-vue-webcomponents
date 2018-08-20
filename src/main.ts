import Vue from 'vue';
import Counter from './components/Counter.vue';
// import App from './App.vue';
import App from './WebApp.vue';
import wrap from '@vue/web-component-wrapper';


const CustomElement = wrap(Vue, Counter);
window.TestCustomElement = CustomElement;
window.customElements.define('v-counter', CustomElement);

// Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
