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
import { formFieldMixin } from '@/mixins/formFieldMixin'
export default {
  inheritAttrs: false,
  mixins: [formFieldMixin],
  props: {
    value: [String, Number]
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
