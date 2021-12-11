<template>
    <ul class="tabs">
        <li v-for="(tab, index) in tabs" v-bind:key="index"
            v-bind:class="{active: tab.name === selectedTab}"
            v-on:click="onClickTab(tab.name)">
            <img v-bind:src="tab.image">
        </li>
    </ul>
</template>

<script>
export default {
  props: ['tabs', 'selectedTab'],
  methods: {
    onClickTab (tab) {
      this.$emit('@change', tab)
    }
  }
}
</script>

<style>
ul.tabs {
  display: flex;
  width: 100%;
  padding-inline-start: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
}
.tabs li {
  display: inline-block;
  width: 20%;
  padding: 15px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  background-color: #eee;
  color: #999;
}
.tabs li.active {
  background-color: #2ac1bc;
  color: #fff;
}

.tabs li img {
  width: 20px;
}
</style>
