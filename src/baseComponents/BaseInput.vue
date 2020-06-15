<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="value"
      v-on="listeners"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    label: String,
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
