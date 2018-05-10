<template>
<div>
  <section class="container" style="padding-top:50px">
    <h2 class="text-center my-4 py-4">Compare Journals</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">The Dark Arts Outsmarted</th>
          <th scope="col">Curses and Counter-curses</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            Publisher
          </th>
          <td>
            Flourish & Blotts Publishers
          </td>
          <td>
            Ward Lock & Co.
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
            Identities Revealed?
          </th>
          <td class="table-success">
            Yes
          </td>
          <td class="table-success">
            Yes
          </td>
        </tr>
        <tr>
          <th scope="row">
            Identities Published?
          </th>
          <td class="table-danger">
            No
          </td>
          <td class="table-success">
            Yes
          </td>
        </tr>
        <tr>
          <th scope="row">
            Co-review Policy
          </th>
          <td>
            Curabitur dignissim lorem sit amet tristique fringilla. Proin tempor, ex ut ultrices semper, augue mi maximus eros, vitae tempor mi metus ut metus. Donec luctus enim ipsum, non semper sem semper in.
          </td>
          <td>
            Quisque vel arcu eu leo gravida feugiat ac vel diam. Nulla maximus felis rutrum justo porta malesuada. Duis pretium quam vel velit congue vehicula.
          </td>
        </tr>
        <tr>
          <th scope="row">
            PR Transfer Policy
          </th>
          <td>
            Mauris turpis erat, interdum ac sapien id, tempor fermentum dui. Praesent a dolor aliquam magna varius feugiat eu nec justo.
          </td>
          <td>
            Sed sed risus aliquet, congue ante aliquet, maximus turpis. Donec aliquet ipsum a massa venenatis scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </td>
        </tr>
        <tr>
          <th scope="row">
            Seperate fields for technical & impact evaluation?
          </th>
          <td class="table-danger">
            No
          </td>
          <td class="table-success">
            Yes
          </td>
        </tr>
        <tr>
          <th scope="row">
            Deposit peer review info into ORCiD?
          </th>
          <td class="table-danger">
            No
          </td>
          <td class="table-success">
            Yes
          </td>
        </tr>
        <tr>
          <th scope="row">
            Can users archive preprints?
          </th>
          <td class="table-danger">
            No
          </td>
          <td class="table-success">
            Yes
          </td>
        </tr>
        <tr>
          <th scope="row">
            When can a preprint be posted?
          </th>
          <td class="table-warning">
            Before acceptance only
          </td>
          <td class="table-success">
            Anytime
          </td>
        </tr>
        <tr>
          <th scope="row">
            Preprint Licensing Policy
          </th>
          <td>
            Suspendisse varius sit amet arcu in ornare. Etiam euismod erat in dictum consectetur.
          </td>
          <td>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris consequat dui a lectus rhoncus, vel interdum nibh euismod. Donec nulla metus, feugiat eu ligula at, venenatis auctor ipsum.
          </td>
        </tr>
        <tr>
          <th scope="row">
            Can preprints be cited?
          </th>
          <td class="table-success">
            Yes
          </td>
          <td class="table-danger">
            No
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
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
}

.row {
  margin-top: 100px;
}

tr>th:first-of-type {
  width: 200px;
}

tr>td {
  width: 50%;
}
</style>
