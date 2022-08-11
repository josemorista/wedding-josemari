import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia).mount('#app');

export {
	app
};