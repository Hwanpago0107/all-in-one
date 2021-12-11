export default {
  data: [
    { date: '', text: ''}
  ],

  list() {
    return Promise.resolve(this.data)
  },
  
  add(text = '', date = '') {
    text = text.trim()
    if (!text) return 
    if (this.data.some(item => item.text === text)) {
      this.remove(text)
    }
    this.data = [{date, text}, ...this.data]
  },
  
  remove(text) {
    this.data = this.data.filter(item => item.text !== text)
  }
}