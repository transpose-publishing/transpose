<template>
<div v-if="q && a" class="col-sm-6 col-md-4 col-lg-3">
  <p><strong>{{q}}</strong>: {{a}}</p>
</div>
</template>

<script>
export default {
  props: [
    'q', 'a'
  ]
}
</script>
