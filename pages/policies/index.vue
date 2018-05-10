<template>
<div>
  <section class="container" style="padding-top:100px">
    <h1 class="text-center mb-4 pb-4">Policies</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Policy</th>
          <th scope="col">Publisher</th>
          <th scope="col">Open Reports</th>
          <th scope="col">Identities Revealed?</th>
          <th scope="col">Identities Published?</th>
          <th scope="col">Preprint posting window</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">OAP</th>
          <td>Example Publisher</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Any time</td>
        </tr>
        <tr>
          <th scope="row">MyPol</th>
          <td>Cool Publisher</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Any time</td>
        </tr>
        <tr>
          <th scope="row">GoldOA</th>
          <td>Bad Publisher</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Any time</td>
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
</style>
