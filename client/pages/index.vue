<template lang='pug'>
div
  header(style='padding-top:100px')
    h1.text-center transpose
    h3.text-center.subtitle
      small Opening up journal review policies
  section.container
    .row
      .col-md-4
        h3.text-center Compare
        p Pit any two journals or policies against each other to see how they compare across many different categories related to size and openness.
      .col-md-4
        h3.text-center Browse
        p Easily check out any journal's policies relating to peer review and preprints, all in a centralized location.
      .col-md-4
        h3.text-center Contribute
        p Help us out by submitting updates to our database. Propose changes in your browser - no coding required.
</template>

<script>
export default {
}
</script>

<style scoped>
.col-md-4 {
  text-align: justify;
  text-justify: auto;
}

.col-md-4 p {
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
}

.row {
}
h3.subtitle {
  margin-bottom: 100px;
  /* color: white; */
}
</style>
