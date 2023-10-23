<template>
  <editor-full :document="document" />
</template>

<script>
import { defaultDocument } from '~/assets/template-surat/notaDinas'

export default {
  data () {
    return {
      document: defaultDocument
    }
  }
}
</script>
