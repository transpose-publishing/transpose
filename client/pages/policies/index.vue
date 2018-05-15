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
        <tr v-for="journal in journals" :key="journal._id">
          <th scope="row"><nuxt-link :to="{ path: '/policies/' + journal._id }">{{journal['policy-id']}}</nuxt-link></th>
          <td>{{journal.publisher}}</td>
          <td>{{journal['open-reports']}}</td>
          <td>{{journal['identities-revealed']}}</td>
          <td>{{journal['identities-published']}}</td>
          <td>{{journal['preprint-time']}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  async fetch ({ store, params }) {
    await store.dispatch('journals/find', {query:{}});
  },
  computed: {
    ...mapGetters('journals', {
      journals: 'list'
    })
  },
  methods: {
    ...mapActions('journals', {
      findJournals: 'find'
    })
  },
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
