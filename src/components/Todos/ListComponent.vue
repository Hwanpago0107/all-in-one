<template>
  <div>
    <b-card-group deck v-for="(date, index2) in dates" v-bind:key="index2" class="mx-3">
      <b-card no-body>
        <b-card-header>{{ date }}</b-card-header>
        <b-list-group flush v-for="(todo, index) in todos" v-bind:key="index">
          <b-list-group-item v-if="date === todo.date">
            {{ todo.text }}
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  props: ['todos', 'dates'],
  data() {
      return {
        text : '',
        header : '',
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
