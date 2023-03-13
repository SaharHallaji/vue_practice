<script setup lang="ts">
import {ref} from "vue";

const selectedEvent = ref("click")
const firstName = ref("")
const lastName = ref("")
function showMsg(){
  alert("your name is : " + firstName.value + " " + lastName.value)
}
</script>

<template>
  <div id="binding_practice">
    <p>
      select one :
    </p>
    <select v-model="selectedEvent">
      <option value="click"> one click</option>
      <option value="dblclick"> double click</option>
    </select>
    <input type="text" v-model="firstName" placeholder="first name">
    <input type="text" v-model="lastName" placeholder="last name">
    <button @[selectedEvent]="showMsg">
      submit
    </button>
  </div>
</template>

<style scoped>
#binding_practice {
  display: flex;
  flex-direction: column;
}

select,input {
  padding: 10px;
  border: 1px #2c3e50 solid;
  background-color: white;
  outline: none;
  border-radius: 5px;
  margin-bottom: 10px;
}
button{
  background-color: #00bd7e;
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

</style>