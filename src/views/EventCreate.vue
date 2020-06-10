<template>
  <div>
    <div>Event created by {{ user.name }}</div>
    <p>Categories {{ catLegth }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    catLegth() {
      return this.$store.getters.catLength
    },
    ...mapState(['user', 'categories'])
  }
}
</script>

<style scoped></style>
