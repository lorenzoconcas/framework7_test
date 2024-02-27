// Import Vue
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

// Import Framework7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
//app translations
import messages from './locales.js';

// Import App Component
import App from '../components/app.vue';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const app = createApp(App);
const pinia = createPinia();

//if user selected a custom locale, use it, otherwise use the browser's locale
let locale = localStorage.getItem('locale');
if (!locale) {
    //i18nvue expects locale in format "it" instead of "it-IT"
    locale = navigator.language.split('-')[0];
}
const i18n = createI18n({
    locale: locale, // set locale
    fallbackLocale: 'it', // set fallback locale
    messages, // set locale messages
});

// Register Framework7 Vue components
registerComponents(app);

// Mount the app
app
    .use(pinia)
    .use(i18n)
    .mount('#app');