<template>
<div>
  <section class="container" style="padding-top:100px">
    <h1 class="text-center mb-4 pb-4">Name1 vs Name2</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name1</th>
          <th scope="col">Name2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            Publisher
          </th>
          <td>
            Good Publisher
          </td>
          <td>
            Bad Publisher
          </td>
        </tr>
        <tr>
          <th scope="row">
            Open Reports?
          </th>
          <td class="table-success">
            Yes
          </td>
          <td class="table-danger">
            No
          </td>
        </tr>
        <tr>
          <th scope="row">
            Name
          </th>
          <td>
            Name1
          </td>
          <td>
            Name
          </td>
        </tr>
        <tr>
          <th scope="row">
            Name
          </th>
          <td>
            Name1
          </td>
          <td>
            Name
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.col-md-4 {
  text-align: justify;
  text-justify: inter-word;
}
.col-md-4 p {
  max-width:250px;
  margin-left: auto;
  margin-right: auto;
}
.row {
  margin-top: 100px;
}
tr>th:first-of-type {
  width:200px;
}
</style>
