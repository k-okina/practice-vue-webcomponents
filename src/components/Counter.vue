<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ userObj.name }}</h2>
    <h2>{{ userObj.age }}</h2>
    <div>カウント: {{ count }}</div>
    <button @click="inc">inc1</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

export interface User {
  name: string;
  age: number;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private some!: number;
  @Prop() private user!: string;

  get userObj(): User {
    console.log(this.user);
    return JSON.parse(this.user);
  }

  private count = 0;

  private inc(): void {
    this.count++;
    this.$emit('inc', this.count, 'hello');
  }
}
</script>
