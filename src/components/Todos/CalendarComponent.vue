<template>
  <div>
      <b-card v-bind:title="value == '' ? now : value" class="lta" style="margin: 5px;">
      <b-form-datepicker id="datepicker" v-model="value" class="mb-2" 
        v-on:context="onChangeDate(value)"
      >
      </b-form-datepicker>
      <p>Value: '{{ value }}'</p>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['now'],
  data() {
      return {
        value: '',
      }
    },
  methods: {
    onChangeDate(value) {
      console.log(value)
      this.$emit('@change', value)
    }
  },
}
</script>

<style>
</style>
