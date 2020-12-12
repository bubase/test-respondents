<template>
  <div class="conditions">
    <PollsCondition
      v-for="(condition, index) in getAddedConditionsList"
      :key="index"
      :condition-index="index"
      :condition="condition"
    />
    <div class="condition__add" @click="addCondition">
      <p>
        Нажмите, чтобы добавить новое условие выборки. <br />
        Все условия связываются между собой логическим "И"
      </p>
    </div>
    <button @click="onButtonNext  ">Далее(send data)</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import PollsCondition from '@/components/polls/PollsCondition.vue'
export default {
  components: {
    PollsCondition,
  },
  computed: {
    ...mapGetters(['getAddedConditionsList']),
  },
  methods: {
    ...mapMutations(['addCondition']),
    onButtonNext() {
      alert('Check response on https://requestbin.com/r/ensdjc1m6uhr/1lWzGYlsDIRPvLiVmcTiy5uTWXG')
      this.$store.dispatch('sendConditions')
    }
  }
}
</script>

<style lang="scss" scoped>
.conditions {
  display: flex;
  flex-direction: column;
  padding: 30px;
  button {
    height: 30px;
    align-self: flex-end;
  }
}
.condition__add {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(0, 128, 0, 0.281);
  margin: 20px 0;

  p {
    color: green;
    text-align: center;
  }

  button {
    height: 30px;
  }
}
</style>
