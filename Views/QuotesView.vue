<template>
  <div>
    <h2>Random Quotes</h2>

    <p>"{{ quote }}"</p>
    <p>- {{ author }}</p>

    <button @click="getQuote">New Quote</button>

    <GoBack />
  </div>
</template>

<script>
import GoBack from '../components/GoBack.vue'

export default {
  name: 'QuotesView',
  components: { GoBack },
  data() {
    return {
      quote: '',
      author: ''
    }
  },
  methods: {
    async getQuote() {
      try {
        const res = await fetch('https://api.quotable.io/random')
        const data = await res.json()
        this.quote = data.content
        this.author = data.author
      } catch (error) {
        this.quote = 'Could not load quote.'
        this.author = ''
      }
    }
  },
  mounted() {
    this.getQuote()
  }
}
</script>