import request from '../request'

const postMessage = (messages: Object) => {
  return request('/chat', 'POST', "\"messages\": " + JSON.stringify( messages ), { 'Content-Type': 'text/plain' })
};

export default {
  postMessage
}