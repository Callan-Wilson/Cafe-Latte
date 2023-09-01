import { defineStore } from "pinia";
import { createClient } from "contentful";

const client = createClient({
  space: "h4008btd2eyr",
  environment: "master", // defaults to 'master' if not set
  accessToken: "uA1iFcBasf1fjZc5FXX0aYPhMWo9Mj8rc8ySRIVFXpg",
});

export const useContentfulStore = defineStore({
  id: "contentful",
  state: () => ({
    home: {
      banner: "",
    },
    menu: {
      items: [],
    },
  }),
  getters: {},
  actions: {
    // async getEntries() {
    //   try {
    //     const response = await client.getEntries();
    //     console.log(response.items);
    //   } catch (error) {
    //     console.error("Error fetching Contentful data:", error);
    //   }
    // },

    // async getHomeContent() {
    //   await client
    //     .getEntry("21cuPdKyJxp3kdYGcqEIUw")
    //     .then((entry) => {
    //       console.log(entry);
    //       this.home.banner = entry.fields.image.fields.file.url;
    //     })
    //     .catch(console.error);
    // },
    async getMenuItems() {
      await client
        .getEntries({
          content_type: "menuItem",
        })
        .then((response) => {
          this.menu.items = response.items.map((item) => ({
            title: item.fields.title,
            description: item.fields.description,
            image: item.fields.image.fields.file.url,
            dietary: item.fields.dietary,
            order: item.fields.order,
            filter: item.fields.filter.map(item => item.toLowerCase()),
          })).sort((a,b) => a.order - b.order);
          console.log(response, "menu items");
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    },
  },
});
