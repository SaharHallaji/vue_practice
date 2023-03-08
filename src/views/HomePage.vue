<script setup lang="ts">

import {ref} from "vue";
import type {Ref} from "vue";
interface book {
  title: Ref<string>,
  pages?: number
}
const books: book = { title:ref("hi")}

</script>

<template>
  <main>
    home
    <p>
      {{ books.title + "sahar" }}
    </p>
  </main>
</template>
