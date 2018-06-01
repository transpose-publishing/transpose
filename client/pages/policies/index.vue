<template lang='pug'>
div
  section.container(style='padding-top:100px')
    h1.text-center.mb-4.pb-4 policies
    p.text-center.text-muted.mb-1 search by publisher, journal, or policy id
    <input class="form-control mx-auto mb-4 text-center" style="max-width:300px;" placeholder="" v-model="searchTerm" @keyup.enter="searchPolicies">
    table.table.table-striped
      thead
        tr
          th(scope="col") Policy
          th(scope="col") Publisher
          th(scope="col") Open Reports
          th(scope="col") Identities Revealed?
          th(scope="col") Identities Published?
          th(scope="col") Preprint posting window
      tbody
        tr(v-for="journal in journals" :key="journal._id")
          th(scope='row')
            nuxt-link(:to="{ path: '/policies/' + journal._id }") {{journal['policy-id']}}
          td {{journal.publisher}}
          td {{journal['open-reports']}}
          td {{journal['identities-revealed']}}
          td {{journal['identities-published']}}
          td {{journal['preprint-time']}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  async fetch ({ store, params }) {
    await store.dispatch('journals/find', {query:{}});
  },
  data() {
    return {
      searchTerm: '',
      journals: []
    }
  },
  computed: {
    ...mapGetters('journals', {
      allJournals: 'list'
    })
  },
  methods: {
    ...mapActions('journals', {
      findJournals: 'find'
    }),
    searchPolicies() {
      if (!this.searchTerm) {
        this.journals = this.allJournals;
        return;
      }
      this.findJournals({query:{
        $search: this.searchTerm
      }}).then((results) => {
        // this.journals = null;
        // debugger;
        this.journals = results.data;
        // debugger;
      });
    }
  },
  created() {
    this.journals = this.allJournals;
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
