<template>
<div class="col-sm-4 col-md-3 col-lg-2">
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
