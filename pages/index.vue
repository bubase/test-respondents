<template>
  <div>
    <h1 class="title">Home page</h1>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$router.push('/polls/respondents') // ux проверки
  }
}
</script>
