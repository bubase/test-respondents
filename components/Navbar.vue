<template>
  <nav class="nav">
    <ul>
      <li>
        <nuxt-link
          exact
          no-prefetch
          active-class="nav__link_active"
          to="/"
          class="nav__link"
        >
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          active-class="nav__link_active"
          to="/polls"
          class="nav__link"
        >
          Опросы
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          active-class="nav__link_active"
          to="/call-center"
          class="nav__link"
        >
          Колл-центр
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          active-class="nav__link_active"
          to="/users"
          class="nav__link"
        >
          Пользователи
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          active-class="nav__link_active"
          to="/black-lists"
          class="nav__link"
        >
          Черные списки
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  width: 15%;
  border: 1px #eee solid;

  ul {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    height: 100%;
  }

  li {
    flex-basis: 15%;
    border: 1px #eee solid;
    border-radius: 10px;
    margin: 0 10px 10px;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #000;
    text-decoration: none;
  }

  &__link_active {
    font-weight: bold;
  }
}
</style>
