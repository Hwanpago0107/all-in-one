<template>
  <div id="app">
    <header>
      <h2>all-in-one</h2>
    </header>
    <menu-title v-bind:selected-tab="selectedTab"></menu-title>
    <div v-if="selectedTab === 'Todo'">
      <calendar v-bind:now="now" v-on:@change="onChangeDate"></calendar>
      <inputs v-bind:now="now" v-on:@insert="onClickBtn"></inputs>
      <list v-if="todos != null && todos[0].text !== ''"
            v-bind:todos="todos"
            v-bind:dates="dates"
      >
      </list>
    </div>
    <footer>
      <tabs v-bind:tabs="tabs" v-bind:selected-tab="selectedTab" v-on:@change="onClickTab"></tabs>
    </footer>
  </div>
</template>

<script>
import TabModel from './models/TabModel.js'
import ListModel from './models/ListModel.js'

import TabComponent from './components/TabComponent.vue'
import TitleComponent from './components/TitleComponent.vue'
import CalendarComponent from './components/Todos/CalendarComponent.vue'
import InputComponent from './components/Todos/InputComponent.vue'
import ListComponent from './components/Todos/ListComponent.vue'


const moment = require('moment');

export default {
  name: 'app',
  data () {
    return {
      tabs: [],
      selectedTab: '',
      now: '',
      text: '',
      todos: [],
      dates: []
    }
  },
  components: {
    'tabs': TabComponent,
    'menuTitle': TitleComponent,
    'calendar': CalendarComponent,
    'inputs': InputComponent,
    'list': ListComponent
  },
  created () {
    this.fetchTabImages();
    this.fetchNowTime();
    this.fetchTodoList();
  },
  methods: {
    fetchTabImages() {
      TabModel.list().then(data => {
        this.tabs = data
        this.selectedTab = data[0].name
      })
    },
    fetchNowTime () {
      this.now = moment().format('YYYY-MM-DD')
    },
    fetchTodoList () {
      ListModel.list().then(data => {
        this.todos = data
      })
    },
    onClickTab (tab) {
      this.selectedTab = tab
    },
    onClickBtn (text) {
      this.text = text
      this.insertTodoList(text)
    },
    onChangeDate (date) {
      this.date = date
    },
    insertTodoList (text) {
      const strDate = this.date === '' ? this.now : this.date
      ListModel.add(text, strDate)
      this.fetchTodoList()
      console.log(strDate + "strDate")
      if (this.dates.indexOf(strDate) === -1) {
          this.dates.push(strDate)
      }
      console.log(this.dates)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body, ul {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.container {
  margin: 0 15px 0 15px;
}
header {
  border-bottom: 1px #ccc solid;
  padding: 15px 0  15px 0;
  text-align: center;
}
footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px #ccc solid;
}

.lta {
  text-align: left;
}

.rta {
  text-align: right;
}

.cta {
  text-align: center;
}
</style>
