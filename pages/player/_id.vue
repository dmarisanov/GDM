<template>
  <section class="container mx-auto bg-secondary pt-12 h-screen">
    <!-- <img :src="urlFor(playerImg)" height="426" width="426" loading="lazy" /> -->
    <div class="list">
      <div
        class=""
        v-for="(key, value) in playerData.statistics"
        :key="(key, value)"
      >
        <div class="c-cssTable__th">{{ value.slice(0, 3).toUpperCase() }}</div>
        <ul>
          <li v-for="(key, value) in key" :key="(key, value)">
            <div>{{ value }}</div>
            <div>{{ key }}</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="info">
      <div class="title">
        <span class="text-4xl font-bold mr-2">{{ playerData.name }}</span>
        <u
          @click="$router.push(`/`)"
          class="text-sm font-bold decoration-dotted text-[#848282] cursor-pointer"
          >View all cards</u
        >
      </div>
      <div class="info__blok justify-between">
        <div>
          <span>Club</span>
          <span>{{ playerData.club }}</span>
        </div>
        <div class="vl"></div>
        <div>
          <span>league</span>
          <span>{{ playerData.league }}</span>
        </div>
        <div class="vl"></div>
        <div>
          <span>Nation</span>
          <span>{{ playerData.nation }}</span>
        </div>
        <div class="vl"></div>
        <div>
          <span>Strong Foot</span>
          <span>{{ playerData.strongFoot }}</span>
        </div>
        <div class="vl"></div>
        <div>
          <span>Age</span>
          <span>{{ playerData.age }}</span>
        </div>
        <div class="vl"></div>
        <div>
          <span>Height</span>
          <span>{{ playerData.height }}</span>
        </div>
        <div class="vl"></div>
        <div>
          <span>Workrates</span>
          <span>
            {{
              playerData.workRatesAttacking?.charAt(0) +
              "/" +
              playerData.workRatesDefensive?.charAt(0)
            }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    playerData: {},
    playerImg: "",
  }),
  methods: {},
  mounted() {
    const playerID = this.$route.params.id;
    const players = this.$store.state.players;
    this.playerData = players.find((i) => i._id === playerID);
    this.playerImg = this.playerData.cardImage.asset._ref;
  },
};
</script>

<style lang="scss">
$screenSize: 1024px;

.list {
  display: flex;
  justify-content: center;
  background-color: #0f0f0f;
  margin: 66px 25px;
  padding: 11px 0 60px;
  border-radius: 16px;

  div {
    margin-right: 8px;
  }

  @media screen and (max-width: $screenSize) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: 9px;
  }
}
.vl {
  border-left: 1px solid #44444b;
  width: 0 !important;
}

.info {
  padding: 0 42px;
  .title {
    margin-bottom: 46px;
  }
}

.info__blok {
  display: flex;
  div {
    height: 60px;
    width: 117px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    span:first-child {
      font-weight: bold;
      color: #848282;
    }
  }

  @media screen and (max-width: $screenSize) {
    flex-direction: column;

    div {
      flex-direction: row;
      width: 100%;
      border-bottom: 1px solid #44444b;
      margin-bottom: 14px;
      height: 30px;
    }
    .vl {
      display: none;
    }
    span {
      flex: 1;
    }
  }
}

.c-cssTable__th {
  font-size: 14px;
  font-weight: bold;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  padding: 6px 0 6px 0;
}

ul {
  li {
    display: flex;
    justify-content: space-between;
    margin: 12px 10px 10px 0;

    div:first-child {
      text-transform: capitalize;
    }

    @media screen and (max-width: $screenSize) {
      margin-right: 0;
    }
  }
}
</style>
