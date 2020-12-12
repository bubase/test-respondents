import {defineParams} from '@/middleware/define-params.js'

export function state() {
  return {
    conditionTypes: { // доступные виды условий
      notSelected: {
        type: 'notSelected',
        params: [],
      },
      respondentAge: {
        type: 'respondentAge',
        params: [
          {
            valuesType: 'range',
            ranges: {
              from: null,
              to: null,
            },
          }
        ],
      },
      loyaltyCardType: {
        type: 'loyaltyCardType',
        params: [
          {
            valuesType: 'select',
            values: ['not-selected','bronze','silver','gold'],
          }
        ],
      },
      loyaltyCardStatus: {
        type: 'loyaltyCardStatus',
        params: [
          {
            valuesType: 'select',
            values: ['not-selected','active','blocked','not-active'],
          }
        ],
      },
    },
    addedConditions: [ // добавленные условия
      {
        type: 'respondentAge',
        params: [
          {
            valuesType: 'range',
            ranges: {
              from: null,
              to: null,
            },
          },
          {
            valuesType: 'range',
            ranges: {
              from: null,
              to: null,
            },
          },
        ],
      },
      {
        type: 'loyaltyCardStatus',
        params: [
          {
            valuesType: 'select',
            value: 'not-selected',
          },
        ],
      },
      {
        type: 'loyaltyCardType',
        params: [
          {
            valuesType: 'select',
            value: 'bronze',
          },
        ],
      },
    ],
  }
}

export const mutations = {
  setSelectParam(s, payload) {
    // console.log(s.addedConditions[payload.conditionIndex].params[payload.paramIndex]);
    // console.log(payload.value);
    s.addedConditions[payload.conditionIndex].params[payload.paramIndex].value = payload.value
  },
  setRangeParam(s, payload) {
    s.addedConditions[payload.conditionIndex].params[payload.paramIndex].ranges[payload.border] = payload.value
  },
  addCondition(s) {
    s.addedConditions.push({
      ...(s.conditionTypes.notSelected),
    })
  },
  addParam(s, payload) {
    const valuesType = s.conditionTypes[payload.conditionType].params[0].valuesType;
    s.addedConditions[payload.conditionIndex].params.push(defineParams(valuesType));
  },
  deleteAddedCondition(s, index) {
    s.addedConditions.splice(index, 1);
  },
  replaceCondition(s, payload) {
    const condition = s.conditionTypes[payload.type];

    const newCondition = { ...(condition), params: condition.type === 'notSelected' ? [] : [defineParams(condition.params[0].valuesType)]}
    s.addedConditions.splice(payload.index, 1, newCondition);
  },
}

export const actions = {
  sendConditions ({ getters }) {
    const data = getters.getAddedConditionsList
    this.$axios.post('https://ensdjc1m6uhr.x.pipedream.net', data)
  }
}

export const getters = {
  getConditionTypes: (s) => s.conditionTypes,
  getAddedConditionsList: (s) => s.addedConditions,
}
