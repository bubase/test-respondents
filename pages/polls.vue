<template>
  <div class="polls">
    <nav>
      <PollsTabs />
    </nav>
    <section>
      <NuxtChild />
    </section>
  </div>
</template>

<script>
import PollsTabs from '@/components/polls/PollsTabs.vue'

export default {
  components: {
    PollsTabs,
  },
}
</script>

<style lang="scss" scoped>
.polls {
  box-shadow: 2px 2px 12px #eee;
}
</style>
