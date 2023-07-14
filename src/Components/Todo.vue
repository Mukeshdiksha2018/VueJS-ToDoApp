<template>
    <div class="todos-container">
      <h1 class="heading">ToDos</h1>
      <table v-if="toDoList.length > 0" class="todos-table">
        <thead class="th">
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in toDoList" :key="index">
            <td>{{ item }}</td>
            <td>
              <el-button type="danger" @click="removeToDo(index)">
                Remove
              </el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="no-tasks-message">
        No tasks available.
      </div>
      <div class="input-button-container">
        <el-input
          class="input-field"
          @keyup.enter="addToDo"
          placeholder="Add To Do"
          v-model.trim="newItem"
          clearable
        ></el-input>
        <el-button @click="addToDo" type="success" round>
          Add Task
        </el-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newItem: '',
        toDoList: [],
      };
    },
  
    methods: {
      addToDo() {
        if (this.newItem.trim() !== '') {
          this.toDoList.push(this.newItem);
          this.newItem = '';
        }
      },
      removeToDo(index) {
        this.toDoList.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>

  .th{
    color: #030028;
  }
  .todos-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .todos-table {
    margin-top: 20px;
    border-spacing: 0 10px;
  }
  
  .todos-table th,
  .todos-table td {
    padding: 10px;
    text-align: center;
  }
  
  .no-tasks-message {
    margin-top: 20px;
    color: #C90404;
  }
  
  .input-button-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    align-items: center;
  }
  
  .input-field {
    flex-grow: 1;
    margin-right: 10px;
  }

  .heading{
    color: #030028;
  }
  </style>
  