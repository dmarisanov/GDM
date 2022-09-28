<template>
  <section>
    <div class="container mx-auto bg-secondary pt-12 table-wrapper">
      <table class="table-auto w-full">
        <thead>
          <tr class="c-cssTable__tr">
            <th
              class="c-cssTable__th"
              v-for="item in tableHeadNames"
              :key="item"
            >
              <div v-on:click="sortedData()">{{ item }}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="c-cssTable__tr bg-table"
            v-for="item in fifaCards"
            :key="item._id"
          >
            <td @click="$router.push(`player/${item._id}`)">
              {{ item.name }}
            </td>
            <td>
              <div class="mx-auto cursor-pointer">{{ item.rating }}</div>
            </td>
            <td>
              <div class="mx-auto">{{ item.position }}</div>
            </td>
            <td>
              <div class="mx-auto">{{ item.cardType }}</div>
            </td>
            <td>
              <div class="mx-auto">{{ item.statistics.pace.average }}</div>
            </td>
            <td>
              <div class="mx-auto">{{ item.statistics.shooting.average }}</div>
            </td>
            <td>
              <div class="mx-auto">{{ item.statistics.passing.average }}</div>
            </td>
            <td>
              <div class="mx-auto">{{ item.statistics.dribbling.average }}</div>
            </td>
            <td>
              <div class="mx-auto">{{ item.statistics.defense.average }}</div>
            </td>
            <td>
              <div class="mx-auto">{{ item.statistics.physical.average }}</div>
            </td>
            <td>
              <div class="mx-auto">
                {{
                  item.workRatesAttacking.charAt(0) +
                  "/" +
                  item.workRatesDefensive.charAt(0)
                }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    fifaCards: [],
    tableHeadNames: [
      "Name",
      "OVR",
      "POS",
      "Type",
      "PAC",
      "SHO",
      "PAS",
      "DRI",
      "DEF",
      "PHY",
      "WR",
    ],
  }),
  beforeMount() {
    this.fifaCards = this.$store.state.players;
  },
  mounted() {},
  methods: {
    sortedData: function () {
      return this.fifaCards.sort(function (a, b) {
        console.log(a, b);
        return a > b;
      });
    },
  },
  computed: {},
};
</script>

<style lang="scss">
* {
  color: #ffffff;
}

$mobileSize: 560px;
@media screen and (max-width: $mobileSize) {
  .table-wrapper {
    overflow: scroll;
  }
}

.c-cssTable__th {
  font-size: 12px;
}
.c-cssTable__th:not(:first-child) {
  border-left: 2px solid #101010;
}

.c-cssTable__tr {
  height: 44px;
  border-bottom: 1px solid #000;
  text-align: center;
  td:nth-child(2) {
    div {
      background-color: #ffffff;
      color: #000;
    }
  }
  td {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: bold;

    div {
      border-radius: 4px;
      width: 46px;
      height: 31px;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000;
    }
  }
  td:nth-child(n + 5):nth-child(-n + 10) {
    div {
      border: 1px solid #ffffff;
    }
  }
}
</style>
