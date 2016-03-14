import api from "axios";

export const CoffeeShopApi = {

  find() {
    return api.get("/api/coffeeshops");
  },

};
