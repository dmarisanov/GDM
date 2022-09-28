<template>
  <div class="bg-secondary fixed w-full top-0">
    <div class="header container mx-auto">
      <div @click="$router.push(`/`)" class="menu bg-menu">
        <img src="~/assets/img/menu.svg" />
      </div>
      <img class="logo" src="~/assets/img/RS-logo.png" alt="" />
    </div>
  </div>
</template>

<script></script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.menu {
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.logo {
  width: 107px;
  height: 25px;
  cursor: pointer;
}
</style>
