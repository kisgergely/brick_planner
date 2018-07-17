<template>
  <div class="base">
    <table class="table is-hoverable is-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Rate</th>
          <th>Group</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Gergely Kis</th>
          <td>gergely.kis@brickvisual.com</td>
          <td>COO</td>
          <td>Back Office</td>

        </tr>
        <tr>
          <th>Gergely Kis</th>
          <td>gergely.kis@brickvisual.com</td>
          <td>COO</td>
          <td>Back Office</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ResourceTable',
  data () {
    return {
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

</style>
