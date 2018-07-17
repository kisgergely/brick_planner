<template>
  <div class="base">
    <table class="table is-hoverable is-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Client</th>
          <th>PM</th>
          <th>Budget Hours</th>
          <th>Allocated Hours</th>
          <th>Registered Hours</th>
          <th>Booking Stage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1402</th>
          <td>sample</td>
          <td>38</td>
          <td>23</td>
          <td>12</td>
          <td>3</td>
          <td>68</td>
          <td>
            <div class="select is-small is-white is-fullwidth">
              <!-- <select>
                <option>NO Proposal OK</option>
                <option>NO Timing</option>
                <option>Ready - Cip</option>
                <option>Ready - Dani</option>
                <option>Ready - Marci</option>
                <option>Ready - Attila</option>
                <option>Ready - Andris</option>
              </select> -->
              <select v-model="selectedManager" v-on:change="onManagerSelect">
                <option v-for="(manager, index) in projectManagers" :key="index" :value="manager">{{ manager.status }} - {{ manager.name }}</option>
              </select>
            </div>
            </td>
        </tr>
        <tr>
          <th>1402</th>
          <td>sample</td>
          <td>38</td>
          <td>23</td>
          <td>12</td>
          <td>3</td>
          <td>68</td>
          <td>
            <div class="select is-small is-white is-fullwidth">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
            <!-- <div class="circle is-primary"></div> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProjectsTable',
  data () {
    return {
      selectedManager: { name: 'Béla', status: 'Ready', color: 'red' },
      projectManagers: [
        { name: 'Andris', status: 'Ready', color: 'red' },
        { name: 'Béla', status: 'Ready', color: 'red' },
        { name: 'Józsi', status: 'Ready', color: 'red' }
      ]
    }
  },
  methods: {
    onManagerSelect () {
      console.log(this.selectedManager)
    }
  }
}
</script>

<style scoped>
.base {
  padding:10px
}
.table {
  width:100%;
}
th, td {
  text-align:center
}
select {
  background-color:green;
  color:white
}
.circle {
  width: 10px;
  height: 10px;
  border-radius: 20px;
}
</style>
