<template>
  <ul class="polls__tabs">
    <li>
      <nuxt-link
        exact
        no-prefetch
        active-class="polls__tab_active"
        to="polls/params"
        class="polls__tab"
      >
        Параметры
      </nuxt-link>
    </li>
    <li>
      <nuxt-link
        exact
        no-prefetch
        active-class="polls__tab_active"
        to="polls/questions"
        class="polls__tab"
      >
        Вопросы
      </nuxt-link>
    </li>
    <li>
      <nuxt-link
        exact
        no-prefetch
        active-class="polls__tab_active"
        to="polls/logic"
        class="polls__tab"
      >
        Логика
      </nuxt-link>
    </li>
    <li>
      <nuxt-link
        exact
        no-prefetch
        active-class="polls__tab_active"
        to="polls/conditions"
        class="polls__tab"
      >
        Условия
      </nuxt-link>
    </li>
    <li>
      <nuxt-link
        exact
        no-prefetch
        active-class="polls__tab_active"
        to="polls/respondents"
        class="polls__tab"
      >
        Респонденты
      </nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.polls {
  &__tabs {
    padding: 0 30px;
    height: 3rem;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
  }

  &__tab {
    text-decoration: none;
    color: green;
  }

  &__tab_active {
    font-weight: bold;
  }
}
</style>
