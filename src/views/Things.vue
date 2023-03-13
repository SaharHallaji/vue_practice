<script setup lang="ts">
import { reactive, ref } from "vue";
const obj = reactive({
  title : "book",
  pages : 345,
  author : "mmd"
})

</script>

<template>
  <div class="parent">
    <ul>
      <li v-for="(value,key,index) in obj">
        {{index}} - {{key}} : {{value}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.parent p:first-child{
  color: chartreuse;
}
</style>