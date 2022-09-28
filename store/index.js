export const state = () => ({
  players: [],
});

export const getters = {};

export const mutations = {
  setData(state, data) {
    state.players = data;
  },
};

const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "21fy9g0s",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});
const query = "*[_type == 'fifaCard']";
export const actions = {
  async getFifaCards({ commit }) {
    const players = await client.fetch(query).then((data) => data);
    commit("setData", players);
    return players;
  },
};
