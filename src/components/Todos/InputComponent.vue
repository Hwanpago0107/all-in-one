<template>
  <div>
    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="2">
          <label :for="today">오늘 할일</label>
        </b-col>
        <b-col sm="9">
          <b-form-input v-model="text" :id="today"></b-form-input>
        </b-col>
        <b-col sm="1">
          <b-button variant="primary" v-on:click="onClickBtn(text)">+</b-button>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
export default {
  props: ['now', 'today'],
  data() {
      return {
        text : ''
      }
    },
  methods: {
    onClickBtn (text) {
      this.$emit('@insert', text)
    }
  },
}
</script>

<style>
</style>
