<template lang='pug'>
li(v-if='a') <strong v-if='q'>{{q}}:</strong> {{a}}
</template>

<script>
export default {
  props: [
    'q', 'a'
  ]
}
</script>
