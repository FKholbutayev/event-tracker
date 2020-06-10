<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      timout: null
    }
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.timout = setTimeout(() => this.remove(this.notification), 5000)
  },
  beforeDestroy() {
    clearTimeout(this.timout)
  },
  methods: mapActions('notification', ['remove']),
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`
    }
  }
}
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
