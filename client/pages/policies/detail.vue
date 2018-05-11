<template>
<div class="container">
  <header style="padding-top:50px; padding-bottom:50px;">
    <h1 class="text-center">Example Policy</h1>
  </header>
  <section class="details">
    <div class="row">
    <Infocard q="Policy ID" :a="card.policyId"/>
    <Infocard q="Publisher" :a="card.publisher"/>
    <Infocard q="Policy Heading" :a="card.policyHeading"/>
    <Infocard v-for="journal in card.journals" :key="journal" q="Journal" :a="journal"/>
    <Infocard v-for="_policy in card.parentPolicies" :key="_policy" q="Parent Policy" :a="_policy"/>
    <Infocard v-for="_policy in card.childPolicies" :key="_policy" q="Child Policy" :a="_policy"/>
    <Infocard q="RoMEO Issues?" :a="card.flagRomeo"/>
    <Infocard q="Peer Review Policy URL" :a="card.peerReviewUrl"/>
    <Infocard q="Publish Peer Reviews?" :a="card.openReports"/>
    <Infocard q="Reviewer identities revealed to author?" :a="card.identitiesRevealed"/>
    <Infocard q="Reviewer identities published?" :a="card.identitiesPublished"/>
    <Infocard q="Co-review URL" :a="card.coReviewUrl"/>
    <Infocard q="Co-review Policy" :a="card.coReviewPolicy"/>
    <Infocard q="Is the co-reviewer explicitly invited to contribute?" :a="card.coReviewInvited"/>
    <Infocard q="Peer Review Transfer URL" :a="card.transferUrl"/>
    <Infocard q="Peer Review Transfer Policy" :a="card.transferPolicy"/>
    <Infocard q="Peer Review Form URL" :a="card.reviewFormUrl"/>
    <Infocard q="Review Form Section Titles" :a="card.reviewStructure"/>
    <Infocard q="Separate fields for technical & impact evaluation?" :a="card.separateStructure"/>
    <Infocard q="Dedicated field for identifying co-reviewers?" :a="card.coReviewField"/>
    <Infocard q="PR Credit Policy URL" :a="card.creditUrl"/>
    <Infocard q="PR info deposited into ORCiD?" :a="card.orcidPeerReview"/>
    <Infocard q="Can users archive preprints?" :a="card.prearchiving"/>
    <Infocard q="Preprint Restrictions" :a="card.prerestrictions"/>
    <Infocard v-for="url in card.copyrightUrls" :key="url" q="Copyright URL" :a="url"/>
    <Infocard v-for="cond in card.conditions" :key="cond" q="Condition" :a="cond"/>
    <Infocard q="Preprint Policy URL" :a="card.preprintUrl"/>
    <Infocard q="Allowed Preprint Version" :a="card.preprintVersion"/>
    <Infocard q="Allowed Preprint Publication Timeframe" :a="card.preprintTime"/>
    <Infocard q="Can preprints be cited in reference list?" :a="card.preprintCitation"/>
    <Infocard q="Acceptable Servers / Server Characteristics" :a="card.acceptableServers"/>
    <Infocard q="Type of media coverage/discussion of preprints allowed" :a="card.preprintMedia"/>
    <Infocard q="Preprint Media Policy URL" :a="card.preprintMediaUrl"/>
    <Infocard q="Preprint Licensing Policy" :a="card.preprintLicensing"/>
    <Infocard q="Preprint Licensing Policy URL" :a="card.preprintLicensingUrl"/>
    <Infocard q="Scoop Protection Policy" :a="card.scoopProtection"/>
    <Infocard q="Scoop Protection Policy URL" :a="card.scoopProtectionUrl"/>
    <Infocard q="Policy on incorporating community reviews/comments into editorial assessment" :a="card.communityReviews"/>
    <Infocard q="Community Review Policy URL" :a="card.communityReviewsUrl"/>
  </div>
  </section>
</div>
</template>

<script>
import Infocard from '~/components/Infocard.vue';
export default {
  components: {
    Infocard
  },
  data() {
    return {
      card: {
        policyId: "romeo_1063",
        publisher: "Radical Philosophy Group",
        policyHeading: "[Default policy]",
        journals: ["Radical Philosophy"],
        parentPolicies: [],
        childPolicies: [],
        flagRomeo: "None",
        peerReviewUrl: "http://example.com",
        openReports: "Yes",
        identitiesRevealed: "",
        identitiesPublished: "",
        coReviewUrl: "",
        coReviewPolicy: "",
        coReviewInvited: "",
        transferUrl: "",
        transferPolicy: "",
        reviewFormUrl: "",
        reviewStructure: "",
        separateStructure: "",
        coReviewField: "",
        creditUrl: "",
        orcidPeerReview: "",
        prearchiving: "",
        prerestrictions: "",
        copyrightUrls: [],
        conditions: [],
        preprintUrl: "http://example.org",
        preprintVersion: "before review only",
        preprintTime: "before acceptance only",
        preprintCitation: true,
        acceptableServers: "Lorem ipsum",
        preprintMedia: "Lorem ipsum",
        preprintMediaUrl: "http://example.com",
        preprintLicensing: "Lorem Blah blah",
        preprintLicensingUrl: "http://example.com",
        scoopProtection: "Lorem ipsum",
        scoopProtectionUrl: "http://example.com",
        communityReviews: "Lorem ipsum",
        communityReviewsUrl: "http://example.com"
      }
    }
  }
}
</script>

<style>
</style>
