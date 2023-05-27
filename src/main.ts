import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/init.css'
import './style/chat-gpt.css'

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';

// Prism
import Prism from 'prismjs';
// highlight code
import 'prismjs/components/prism-json';

VMdPreview.use(vuepressTheme, {
  Prism,
});
// markdown支持显示代码行数
// VMdPreview.use(createLineNumbertPlugin())
// markdown支持代码快速复制
VMdPreview.use(createCopyCodePlugin());
// markdown支持emoji
VMdPreview.use(createEmojiPlugin());

createApp(App).use(store).use(router).use(VMdPreview).mount('#app')
