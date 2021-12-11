<template>
  <h3 class="title">{{selectedTab}}</h3>
</template>

<script>
export default {
  props: ["selectedTab"],
  methods: {
  }
}
</script>

<style>
h3.title {
  text-align: left;
  margin-left: 10px;
}
</style>
