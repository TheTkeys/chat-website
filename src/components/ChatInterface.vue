<template>
  <div class="chat-interface">
    <div v-if="messages.length === 0" id="header">
      <h1>GPT Website 开启一段聊天之旅</h1>
      <h1>{{ icon }}</h1>
      <div style="max-width: 720px;" class="md:flex items-start text-center gap-3.5">
        <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
          <h2 class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            Examples
          </h2>
          <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            <button @click="inputText = 'Explain quantum computing in simple terms'" class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">"Explain quantum computing in simple terms" →</button>
            <button @click="inputText = 'Got any creative ideas for a 10 year old’s birthday?'" class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">"Got any creative ideas for a 10 year old’s birthday?" →</button>
            <button @click="inputText = 'How do I make an HTTP request in Javascript?'" class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">"How do I make an HTTP request in Javascript?" →</button>
          </ul>
        </div>
        <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
          <h2 class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
            Capabilities
          </h2>
          <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">Remembers what user said earlier in the conversation</li>
            <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">Allows user to provide follow-up corrections</li>
            <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">Trained to decline inappropriate requests</li>
          </ul>
        </div>
        <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
          <h2 class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            Limitations
          </h2>
          <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">May occasionally generate incorrect information</li>
            <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">May occasionally produce harmful instructions or biased content</li>
            <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">Limited knowledge of world and events after 2021</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="chat-messages">
      <div v-for="(message, index) in messages" :key="index" :class="{'chat-message': true, 'user-background': message.role !== 'user'}">
        <div class="chat-avatar">
          <svg style="background-color: rgb(25, 195, 125);" v-if="message.role !== 'user'" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="h-6 w-6" role="img"><title>ChatGPT</title><text x="-9999" y="-9999">ChatGPT</text><path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path></svg>
          <svg style="background-color: rgb(242, 131, 191);" v-else t="1684921754327" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2724" width="200" height="200"><path d="M835.2 765.5c-69-71.3-155.8-118.5-250.8-137.4 49.6-31.7 82.7-87.1 82.7-150.2 0-98.2-79.9-178.2-178.2-178.2s-178.2 79.9-178.2 178.2c0 63.1 33.1 118.5 82.7 150.2-94.9 18.9-181.7 66.1-250.7 137.4-17.8 18.4-17.8 48.3 0 66.7C234.4 926.9 357.3 979 489 979c131.7 0 254.6-52.1 346.2-146.8 17.8-18.4 17.8-48.3 0-66.7zM379.6 477.9c0-60.3 49.1-109.4 109.4-109.4s109.4 49.1 109.4 109.4S549.3 587.3 489 587.3s-109.4-49-109.4-109.4zM489 910.2c-106 0-205.4-39.4-282.1-111.4 76.7-72 176.1-111.4 282.1-111.4 106 0 205.3 39.4 282.1 111.4-76.7 72-176.1 111.4-282.1 111.4z" fill="#ffffff" p-id="2725"></path><path d="M922.9 551.8c-17.8 0-32.7-13.7-34.1-31.4C872.7 313.9 699.6 150.8 489 150.8S105.3 313.9 89.2 520.4c-1.4 17.8-16.3 31.4-34.1 31.4-20.2 0-36-17.3-34.4-37.4C39.8 272.8 242.5 82 489 82s449.2 190.8 468.3 432.4c1.6 20.1-14.2 37.4-34.4 37.4z" fill="#ffffff" p-id="2726"></path></svg>
        </div>
          <!-- <div v-html="parseMarkdown(message.content)"></div> -->
        <v-md-preview style="width: 800px;" :text="message.content"></v-md-preview>
      </div>
    </div>
    <div class="chat-input-group">
      <div class="chat-input">
        <textarea placeholder="发送消息" @keydown="sendMessage" id="prompt-textarea" v-model="inputText" type="text"></textarea>
        <div @click="sendMessage">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </div>
      </div>
    </div>
    <div v-if="messages.length" class="clear-button" @click="clearChatHistory">清空所有记录</div>
  </div>
</template>

<script>
import chatRequest from '../network/chat/chat.ts'
export default {
  components: {
  },
  data() {
    return {
      inputText: "",
      icon: '\u{1F642}',
      sending: false,
      messages: []
    };
  },
  methods: {
    sendMessage(e) {
      if (!e.shiftKey && e.keyCode === 13) {
        e.preventDefault()
      }
      if ((e.type === 'click' || (!e.shiftKey && e.keyCode === 13)) && this.inputText !== '' && !this.sending) {
        
        this.sending = true
        this.messages.push({
          role: 'user',
          content: this.inputText
        })

        // 发送后清除文本框
        this.inputText = ''

        // 滚动到最底部
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight + 200,
            behavior: "smooth"
          })
        }, 0)
        chatRequest.postMessage(this.messages).then(res => {
          this.sending = false

          // 删除临时聊天框
          this.messages.pop()

          this.messages.push(res.choices[0].message)

          localStorage.setItem('chatMessages', JSON.stringify(this.messages))
          // 滚动到最底部
          setTimeout(() => {
            window.scrollTo({
              top: document.body.scrollHeight + 200,
              behavior: "smooth"
            })
          }, 0)
        }, err => {
          console.log(err)
        })

        // 添加临时聊天框
        this.messages.push({
          role: 'assistant',
          content: '### 努力回答中...'
        })
      }
    },

    clearChatHistory() {
      
      if (localStorage.getItem('chatMessages')) {
        localStorage.removeItem('chatMessages')
      }

      this.messages = []
    }
  },
  created() {
    let chatMessages = JSON.parse(localStorage.getItem('chatMessages'))
    if (chatMessages) {
      this.messages = chatMessages
    }
  },
  mounted() {
    
    // 滚动到最底部
    window.scrollTo(0, document.body.scrollHeight);
  }
};
</script>

<style scoped>
.chat-interface {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

#header {
  color: rgb(33, 53, 71);
  margin: auto;
  margin-top: 40px;
  flex-flow: column;
  align-items: center;
  display: flex;
}

.chat-messages {
  width: 100%;
  flex: 1;
  overflow-y: auto;
  margin-bottom: 100px;
}

.chat-message {
  display: flex;
  justify-content: center;
  padding: 0 200px;
  min-width: 500px;
  
  border-bottom: 1px solid ;
  border-color: rgba(0,0,0,.1);
}

.chat-avatar {
  margin-top: 30px;
  margin-right: 10px;
}
.chat-avatar svg {
  color: white;
  width: 30px;
  height: 30px;
  padding: 4px;
  box-sizing: border-box;
}


.chat-input-group {
  position: fixed;
  margin-bottom: 50px;
  bottom: 0;
  width: 100%;
  z-index: 100;
}

.chat-input {
  margin: auto;
  width: 700px;
  display: flex;
  align-items: center;
  position: relative;
}

#prompt-textarea {
  width: 100%;
  /* max-height: 200px;  */
  height: 36px; 
  overflow-y: hidden;
  resize: none;
  border: 0 solid #d9d9e3;
  outline: none;
  /* box-sizing: border-box; */
  box-shadow: 0 0 6px rgb(175, 175, 175);
  border-radius: 3px;

  color: inherit;
  font-family: inherit;
  font-weight: inherit;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 30px;
  word-break: break-all;
}

.chat-input div {
  position: absolute;
  right: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
.chat-input div:hover {
  background-color: rgb(224, 224, 224);
  cursor: pointer;
}
.clear-button {
  box-shadow: 0 0 6px rgb(175, 175, 175);
  
  position: fixed;
  border-radius: 3px;
  padding: 8px;
  margin: 10px;
  color: #ffffff;
  font-size: 14px;
  background-color: rgb(245, 108, 108);
}
.clear-button:hover {
  background-color: rgb(247, 137, 137);
  cursor: pointer;
}

.user-background {
  background-color: rgba(247,247,248);
}


</style>
