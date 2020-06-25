<template>
  <a-row>
    <a-col :span="6">
      <a-card style="height: 35px" title="Backlog"></a-card>
      <draggable class="list-group kanban-column" :list="backlog" group="tasks">
        <a-card
          class="list-group-item"
          v-for="element in backlog"
          :key="element.name"
        >{{ element.name }}</a-card>
      </draggable>
    </a-col>
    <a-col :span="6">
      <a-card style title="In Progress"></a-card>
      <draggable class="list-group kanban-column" :list="inProgress" group="tasks">
        <a-card
          class="list-group-item"
          v-for="element in inProgress"
          :key="element.name"
        >{{ element.name }}</a-card>
      </draggable>
    </a-col>
    <a-col :span="6">
      <a-card style title="QA"></a-card>
      <draggable class="list-group kanban-column" :list="backlog" group="tasks">
        <a-card
          class="list-group-item"
          v-for="element in backlog"
          :key="element.name"
        >{{ element.name }}</a-card>
      </draggable>
    </a-col>
    <a-col :span="6">
      <a-card style title="Done"></a-card>
      <draggable class="list-group kanban-column" :list="backlog" group="tasks">
        <a-card
          class="list-group-item"
          v-for="element in backlog"
          :key="element.name"
        >{{ element.name }}</a-card>
      </draggable>
    </a-col>
  </a-row>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'Boards',
  components: {
    draggable
  },
  data() {
    return {
      // for new tasks
      newTask: "",
      // 4 arrays to keep track of our 4 statuses
      backLog: [],
      inProgress: [],
      qa: [],
      done: []
    };
  }
}
</script>

<style scoped>
.kanban-column {
  min-height: 300px;
}
</style>
