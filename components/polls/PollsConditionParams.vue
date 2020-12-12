<template>
  <div v-if="!(condition.type === 'notSelected')" class="condition__params">
    <label class="condition__params-name" for="condition-value"
      >{{ paramsTypeName }}</label
    >
    <div v-if="valuesType === 'range'" class="condition__params-range">
      <label for="condition__params-from">от</label>
      <input
        v-model="rangeFrom"
        class="condition__params-from"
        type="number"
        name="condition__params-from"
      />
      <label for="condition__params-to">до</label>
      <input
        v-model="rangeTo"
        class="condition__params-to"
        type="number"
        name="condition__params-to"
      />
    </div>
    <div v-if="valuesType === 'select'" class="condition__params-select">
      <select
        v-model="selectedParam"
        class="condition__select-value"
        name="condition-value"
      >
        <option
          v-for="(option, index) in paramValuesToSelect"
          :key="index"
          :value="option"
        >
          {{ option | valueToText }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  filters: {
    valueToText(value) {
      switch(value) {
        case 'not-selected': return 'Не выбрано'
        case 'bronze': return 'Бронзовая'
        case 'silver': return 'Серебристая'
        case 'gold': return 'Золотая'
        case 'active': return 'Активная'
        case 'blocked': return 'Заблокированная'
        case 'not-active': return 'Неактивная'
        default: return ''
      }
    }
  },
  props: ['conditionIndex', 'condition', 'paramIndex'],
  computed: {
    ...mapGetters(['getConditionTypes', 'getAddedConditionsList']),
    paramValuesToSelect() {
      const types = this.getConditionTypes[this.condition.type].params[0];
      if (types) {
        return types.values
      }
      return types
    },
    paramSelectedValue() {
      // console.log(this.getAddedConditionsList[this.conditionIndex].params[this.paramIndex]);

      const param = this.getAddedConditionsList[this.conditionIndex].params[this.paramIndex]
      if (param.valuesType === 'select') {
        return param.value
      }
      if (param.valuesType === 'range') {
        return param.ranges
      }
      return null
    },
    valuesType() {
      return this.condition.params[this.paramIndex].valuesType;
    },
    paramsTypeName() {
      switch (this.condition.type) {
        case 'respondentAge': return 'Диапазон'
        case 'loyaltyCardType': return 'Тип'
        case 'loyaltyCardStatus': return 'Статус'
        default: return ''
      }
    },
    selectedParam: {
      get() {
        return this.paramSelectedValue
      },
      set(value) {
        this.$store.commit('setSelectParam', {
          conditionIndex: this.conditionIndex,
          paramIndex: this.paramIndex,
          value
        })
      }
    },
    rangeFrom: {
      get() {
        return this.paramSelectedValue.from
      },
      set(value) {
        this.$store.commit('setRangeParam', {
          conditionIndex: this.conditionIndex,
          paramIndex: this.paramIndex,
          border: 'from',
          value
        })
      }
    },
    rangeTo: {
      get() {
        return this.paramSelectedValue.to
      },
      set(value) {
        this.$store.commit('setRangeParam', {
          conditionIndex: this.conditionIndex,
          paramIndex: this.paramIndex,
          border: 'to',
          value
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.condition__params {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  &-name {
    display: flex;
    align-items: center;
    width: 30%;
  }

  &-range,
  &-select {
    width: 70%;
  }
}
</style>
