<script setup lang="ts">


</script>

<template>
  <div id="binding_practice">
    <p>
      select one :
    </p>
    <select>
      <option value="click"> one click</option>
      <option value="dblclick"> double click</option>
    </select>
    <input type="text" placeholder="first name">
    <input type="text" placeholder="last name">
    <button>
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

}
</style>