<template>
  <div class="pt-16 h-full">
    <Header />
    <main>
      <div class="bg-primary h-full overflow-scroll">
        <main class="h-screen">
          <nuxt />
        </main>
      </div>
    </main>
    <div v-on:click="isHidden = true" v-if="!isHidden" class="explanatory">
      <div>
        <p>
          hello, just to be clear, after my vacation I was bombarded with a
          bunch of work at my company, I was asked to take on extra hours.
        </p>
        <p>
          A lot of time has passed since the receipt of the test task and it is
          no longer decent to delay even longer, as I remember. I don't know
          when the chaos in my company will end, so I decided to throw off what
          I have. there are a few things left unfinished.
        </p>
        <p>
          I am truly sorry that this is the case. I hope you understand me and
          do not be strict, thanks for the priceless (and first) experience.
          With respect and best regards Dumitru.
        </p>
        <p>Just click</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
  data: () => ({
    showExplanatory: "",
    isHidden: false,
  }),
  beforeMount() {
    this.showExplanatory = localStorage.getItem("storedData");
    console.log(!!this.showExplanatory);
  },
  async fetch() {
    await this.$store.dispatch("getFifaCards");
  },
  methods: {
    hideExplanatory() {
      localStorage.setItem("storedData", false);
    },
  },
};
</script>

<style lang="scss">
html,
body {
  overflow: hidden;
  height: 100%;
  margin: 0;
}

* {
  box-sizing: border-box;
}

section {
  height: 100vh;
}

.explanatory {
  width: 100%;
  height: 100vh;
  background: rgba(65, 63, 63, 0.8);
  position: absolute;
  top: 0;
  div {
    top: 300px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    width: 300px;
    p {
      line-height: 23px;
    }
  }
}
</style>
