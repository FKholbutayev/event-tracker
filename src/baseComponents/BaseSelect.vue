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
export default {
  props: {
    label: String,
    value: [String, Number],
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
