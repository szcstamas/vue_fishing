import headerActions from "./actions";
import headerMutations from "./mutations";
import headerStates from "./states";

const headerModule = {
  namespaced: true,
  state: headerStates,
  mutations: headerMutations,
  actions: headerActions
};

export default headerModule;
