<template lang='pug'>
.container
  header(style="padding-top:50px; padding-bottom:50px;")
    h1.text-center {{policy['policy-id']}}
  section.details
    .row
      Infocard(q="Policy ID" :a="policy['policy-id']")
      Infocard(q="Publisher" :a="policy.publisher")
      Infocard(q="Policy Heading" :a="policy['policy-heading']")
      Infocard(v-for="journal in policy.journals" :key="journal" q="Journal" :a="journal")
      Infocard(v-for="_policy in policy['parent-policies']" :key="_policy" q="Parent Policy" :a="_policy")
      Infocard(v-for="_policy in policy['child-policies']" :key="_policy" q="Child Policy" :a="_policy")
      Infocard(q="RoMEO Issues?" :a="policy['flag-romeo']")
      Infocard(q="Peer Review Policy URL" :a="policy['peer-review-url']")
      Infocard(q="Publish Peer Reviews?" :a="policy['open-reports']")
      Infocard(q="Reviewer identities revealed to author?" :a="policy['identities-revealed']")
      Infocard(q="Reviewer identities published?" :a="policy['identities-published']")
      Infocard(q="Co-review URL" :a="policy['co-review-url']")
      Infocard(q="Co-review Policy" :a="policy['co-review-policy']")
      Infocard(q="Is the co-reviewer explicitly invited to contribute?" :a="policy['co-review-invited']")
      Infocard(q="Peer Review Transfer URL" :a="policy['transfer-url']")
      Infocard(q="Peer Review Transfer Policy" :a="policy['transfer-policy']")
      Infocard(q="Peer Review Form URL" :a="policy['review-form-url']")
      Infocard(q="Review Form Section Titles" :a="policy['review-structure']")
      Infocard(q="Separate fields for technical & impact evaluation?" :a="policy['separate-structure']")
      Infocard(q="Dedicated field for identifying co-reviewers?" :a="policy['co-review-field']")
      Infocard(q="PR Credit Policy URL" :a="policy['credit-url']")
      Infocard(q="PR info deposited into ORCiD?" :a="policy['orcid-peer-review']")
      Infocard(q="Can users archive preprints?" :a="policy['prearchiving']")
      Infocard(q="Preprint Restrictions" :a="policy['prerestrictions']")
      Infocard(v-for="url in policy['copyright-urls']" :key="url" q="Copyright URL" :a="url")
      Infocard(v-for="cond in policy.conditions" :key="cond" q="Condition" :a="cond")
      Infocard(q="Preprint Policy URL" :a="policy['preprint-url']")
      Infocard(q="Allowed Preprint Version" :a="policy['preprint-version']")
      Infocard(q="Allowed Preprint Publication Timeframe" :a="policy['preprint-time']")
      Infocard(q="Can preprints be cited in reference list?" :a="policy['preprint-citation']")
      Infocard(q="Acceptable Servers / Server Characteristics" :a="policy['acceptable-servers']")
      Infocard(q="Type of media coverage/discussion of preprints allowed" :a="policy['preprint-media']")
      Infocard(q="Preprint Media Policy URL" :a="policy['preprint-media-url']")
      Infocard(q="Preprint Licensing Policy" :a="policy['preprint-licensing']")
      Infocard(q="Preprint Licensing Policy URL" :a="policy['preprint-licensing-url']")
      Infocard(q="Scoop Protection Policy" :a="policy['scoop-protection']")
      Infocard(q="Scoop Protection Policy URL" :a="policy['scoop-protection-url']")
      Infocard(q="Policy on incorporating community reviews/comments into editorial assessment" :a="policy['community-reviews']")
      Infocard(q="Community Review Policy URL" :a="policy['community-reviews-url']")
      Infocard(q="Other Comments" :a="policy.comments")
</template>

<script>
import Infocard from '~/components/Infocard.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  async fetch ({ store, params }) {
    await store.dispatch('journals/get', params.id);
  },
  components: {
    Infocard
  },
  computed: {
    ...mapGetters('journals', {
      findJournal: 'get'
    }),
    policy() {
      return this.findJournal(this.$route.params.id);
    }
  },
  methods: {
    ...mapActions('journals', {
      getJournal: 'get'
    })
  },
}
</script>

<style>
Infocard {
  text-align: left;
}
</style>
