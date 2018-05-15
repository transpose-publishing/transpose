<template>
  <div>
    <button @click="newJournal()">Make New Journal</button>
    <button @click="displayJournals()">Display Journals</button>
    <p>{{journals}}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      journals: []
    }
  },
  methods: {
    ...mapActions('journals', {
      createJournal: 'create',
      findJournals: 'find'
    }),
    newJournal() {
      this.createJournal({"name": "hell yeah"});
    },
    displayJournals() {
      return this.findJournals({query:{}}).then((response) => {
        this.journals = response.data;
        return response;
      })
    }
  },
}
</script>
