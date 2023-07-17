<template>
  <div class="container">
    <div class="input-button-container">
      <el-input
        class="input-field"
        @keyup.enter.native="addToDo"
        placeholder="Add To Do"
        v-model.trim="newItem"
        clearable
      ></el-input>
      <el-button @click="addToDo" type="success" round>
        Add Task
      </el-button>
    </div>

    <div v-if="toDoList.length > 0" class="table-container">
      <el-table border :data="toDoList" style="width: 100%">
        <el-table-column prop="task" label="Task" width="180">
          <template slot-scope="scope">
            <p>{{ scope.row.task }}</p>
          </template>
        </el-table-column>
        <el-table-column label="Action" width="180">
          <template slot-scope="scope">
            <el-button type="danger" @click="removeToDo(scope.$index)" round>
              Remove
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div v-else class="no-tasks-message">
      Add a to-do item using the input field above.
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
        this.toDoList.push({ task: this.newItem });
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.no-tasks-message {
  margin-top: 20px;
  color: #C90404;
}

.table-container {
  display: flex;
  justify-content: center;
}
</style>
