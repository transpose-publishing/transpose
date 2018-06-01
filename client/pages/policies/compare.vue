<template lang='pug'>
div
  section.container(style="padding-top:50px;")
    h3.text-center.my-4.py-4 Type the name of a journal or policy to search.
    table.table
      thead
        tr
          th(scope="col")
          th(scope="col") The Dark Arts Outsmarted
          th(scope="col") Curses and Counter-curses
      tbody
        tr
          th(scope='row') Publisher
          td {{firstPolicy.publisher}}
          td {{secondPolicy.publisher}}
        tr
          th(scope='row') Open Reports?
          td.table-success {{firstPolicy.openReports}}
          td.table-danger {{secondPolicy.openReports}}
        tr
          th(scope="row") Identities Revealed?
          td.table-success {{firstPolicy.identitiesRevealed}}
          td.table-success {{secondPolicy.identitiesRevealed}}
        tr
          th(scope="row") Identities Published?
          td.table-danger {{firstPolicy.identitiesPublished}}
          td.table-success {{secondPolicy.identitiesPublished}}
        tr
          th(scope="row") Co-review Policy
          td {{firstPolicy.coReviewPolicy}}
          td {{secondPolicy.coReviewPolicy}}
        tr
          th(scope="row") PR Transfer Policy
          td {{firstPolicy.prTransferPolicy}}
          td {{secondPolicy.prTransferPolicy}}
        tr
          th(scope="row") Seperate fields for technical & impact evaluation?
          td.table-danger {{firstPolicy.separateFields}}
          td.table-success {{secondPolicy.separateFields}}
        tr
          th(scope="row") Deposit peer review info into ORCiD?
          td.table-danger {{firstPolicy.orcidDeposit}}
          td.table-success {{secondPolicy.orcidDeposit}}
        tr
          th(scope="row") Can users archive preprints?
          td.table-danger {{firstPolicy.prearchive}}
          td.table-success {{secondPolicy.prearchive}}
        tr
          th(scope="row") When can a preprint be posted?
          td.table-warning {{firstPolicy.preprintTimes}}
          td.table-success {{secondPolicy.preprintTimes}}
        tr
          th(scope="row") Preprint Licensing Policy
          td {{firstPolicy.licensingPolicy}}
          td {{secondPolicy.licensingPolicy}}
        tr
          th(scope="row") Can preprints be cited?
          td.table-success {{firstPolicy.citePreprints}}
          td.table-danger {{secondPolicy.citePreprints}}
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
