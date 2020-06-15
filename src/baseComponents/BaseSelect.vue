<template>
  <div>
    <label v-if="label"> {{ label }}</label>
    <select
      :value="value"
      v-on="$listeners"
      @change="updateValue"
      v-bind="$attrs"
    >
      <option
        v-for="option in options"
        :value="option"
        :selected="option === value"
        :key="option"
        >{{ option }}</option
      >
    </select>
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin'

export default {
  inheritAttrs: false,
  mixins: [formFieldMixin],
  props: {
    value: [String, Number],
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
