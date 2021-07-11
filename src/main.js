import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BaseSpinner from './components/ui/BaseSpinner.vue';

import './assets/styles/index.scss';

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');

app.component('base-spinner', BaseSpinner);
