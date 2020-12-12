<template>
  <div class="condition">
    <div class="condition__name">
      <label for="condition" class="condition__title">Условие</label>
      <select class="condition__select-type" v-model="selectedCondition" name="condition" >
        <option disabled value="">Выберите один из вариантов</option>
        <option
          v-for="(conditionType, index) in getConditionTypes"
          :key="index"
          :value="conditionType.type"
        >
          {{ conditionType.type | valueToText }}
        </option>
      </select>
    </div>
    <PollsConditionParams
      v-for="(param, index) in getAddedConditionsList[conditionIndex].params"
      :key="index"
      :condition="condition"
      :condition-index="conditionIndex"
      :param-index="index"
    />
    <div class="condition__buttons">
      <button @click="onAddButton">Добавить диапазон</button>
      <button @click="$store.commit('deleteAddedCondition', conditionIndex)">Удалить условие</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PollsConditionParams from '@/components/polls/PollsConditionParams.vue'

export default {
  props: ['conditionIndex', 'condition'],
  components: {
    PollsConditionParams,
  },
  filters: {
    valueToText(value) {
      switch(value) {
        case 'notSelected': return 'Не выбрано'
        case 'respondentAge': return 'Возраст респондента'
        case 'loyaltyCardStatus': return 'Статус карты лояльности'
        case 'loyaltyCardType': return 'Тип карты лояльности'
        default: return ''
      }
    }
  },
  computed: {
    ...mapGetters(['getConditionTypes', 'getAddedConditionsList']),
    selectedCondition: {
      get() {
        return this.getAddedConditionsList[this.conditionIndex].type
      },
      set(value) {
        this.$store.commit('replaceCondition', {
          index: this.conditionIndex,
          type: value,
        })
      }
    }
  },
  methods: {
    onAddButton() {
      if (this.condition.type === 'notSelected') {
        console.log('нужно выбрать условие'); // тут будет появление попапа с ошибкой
      } else {
        this.$store.commit('addParam', {
          conditionIndex: this.conditionIndex,
          conditionType: this.condition.type,
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.condition {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid #eee;

  &__name,
  &__buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__title {
    display: flex;
    width: 30%;
  }

  &__select-type {
    width: 70%;
  }

  input,
  select,
  button {
    height: 30px;
  }
}
</style>
