import { createApp } from 'vue'
import App from './App.vue'
import { Input, Button } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'

createApp(App)
  .use('Input', Input)
  .use('Button', Button)
  .mount('#app')