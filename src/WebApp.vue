<template>
  <div id="app">
    <!-- これ動かない -->
    <!-- <v-counter :user="user" some=3 msg="Test1"/> -->
    <v-counter
      :user="jsonUser"
      @inc="debug"
      msg="Test2"
    />
  </div>
</template>

<script lang="ts">
import { User } from './components/Counter.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private user: User = {
    name: 'k-okina',
    age: 23,
  };

  get jsonUser(): string {
    return JSON.stringify(this.user);
  }

  public mounted() {
    setInterval(() => {
      this.user = Object.assign({}, this.user, { age: this.user.age + 1 });
    }, 1000);
  }

  public debug(e: CustomEvent) {
    // e.detailに配列でpayloadが入る
    console.log('debug', e.detail);
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
