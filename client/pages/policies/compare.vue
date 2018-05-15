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
            {{firstPolicy.publisher}}
          </td>
          <td>
            {{secondPolicy.publisher}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            Open Reports?
          </th>
          <td class="table-success">
            {{firstPolicy.openReports}}
          </td>
          <td class="table-danger">
            {{secondPolicy.openReports}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            Identities Revealed?
          </th>
          <td class="table-success">
            {{firstPolicy.identitiesRevealed}}
          </td>
          <td class="table-success">
            {{secondPolicy.identitiesRevealed}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            Identities Published?
          </th>
          <td class="table-danger">
            {{firstPolicy.identitiesPublished}}
          </td>
          <td class="table-success">
            {{secondPolicy.identitiesPublished}}

          </td>
        </tr>
        <tr>
          <th scope="row">
            Co-review Policy
          </th>
          <td>
            {{firstPolicy.coReviewPolicy}}
          </td>
          <td>
            {{secondPolicy.coReviewPolicy}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            PR Transfer Policy
          </th>
          <td>
            {{firstPolicy.prTransferPolicy}}
          </td>
          <td>
            {{secondPolicy.prTransferPolicy}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            Seperate fields for technical & impact evaluation?
          </th>
          <td class="table-danger">
            {{firstPolicy.separateFields}}
          </td>
          <td class="table-success">
            {{secondPolicy.separateFields}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            Deposit peer review info into ORCiD?
          </th>
          <td class="table-danger">
            {{firstPolicy.orcidDeposit}}
          </td>
          <td class="table-success">
            {{secondPolicy.orcidDeposit}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            Can users archive preprints?
          </th>
          <td class="table-danger">
            {{firstPolicy.prearchive}}
          </td>
          <td class="table-success">
            {{secondPolicy.prearchive}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            When can a preprint be posted?
          </th>
          <td class="table-warning">
            {{firstPolicy.preprintTimes}}
          </td>
          <td class="table-success">
            {{secondPolicy.preprintTimes}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            Preprint Licensing Policy
          </th>
          <td>
            {{firstPolicy.licensingPolicy}}
          </td>
          <td>
            {{secondPolicy.licensingPolicy}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            Can preprints be cited?
          </th>
          <td class="table-success">
            {{firstPolicy.citePreprints}}
          </td>
          <td class="table-danger">
            {{secondPolicy.citePreprints}}
          </td>
        </tr>

      </tbody>
    </table>
  </section>
</div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      firstPolicy: {
        publisher: 'Flourish & Blotts Publishers',
        openReports: true,
        identitiesRevealed: true,
        identitiesPublished: false,
        coReviewPolicy: 'Curabitur dignissim lorem sit amet tristique fringilla. Proin tempor, ex ut ultrices semper, augue mi maximus eros, vitae tempor mi metus ut metus. Donec luctus enim ipsum, non semper sem semper in.',
        prTransferPolicy: 'Mauris turpis erat, interdum ac sapien id, tempor fermentum dui. Praesent a dolor aliquam magna varius feugiat eu nec justo.',
        separateFields: false,
        orcidDeposit: false,
        prearchive: false,
        preprintTimes: 'Before acceptance only',
        licensingPolicy: 'Suspendisse varius sit amet arcu in ornare. Etiam euismod erat in dictum consectetur.',
        citePreprints: true
      },
      secondPolicy: {
        publisher: 'Ward Lock & Co.',
        openReports: false,
        identitiesRevealed: true,
        identitiesPublished: true,
        coReviewPolicy: 'Quisque vel arcu eu leo gravida feugiat ac vel diam. Nulla maximus felis rutrum justo porta malesuada. Duis pretium quam vel velit congue vehicula.',
        prTransferPolicy: 'Sed sed risus aliquet, congue ante aliquet, maximus turpis. Donec aliquet ipsum a massa venenatis scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        separateFields: true,
        orcidDeposit: true,
        prearchive: true,
        preprintTimes: 'Any time',
        licensingPolicy: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris consequat dui a lectus rhoncus, vel interdum nibh euismod. Donec nulla metus, feugiat eu ligula at, venenatis auctor ipsum.',
        citePreprints: false
      }
    }
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
