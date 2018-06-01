<template lang='pug'>
div.col-sm-6.col-md-4.col-lg-3(v-if='q && a')
  p <strong>{{q}}</strong>: {{a}}
</template>

<script>
export default {
  props: [
    'q', 'a'
  ]
}
</script>
