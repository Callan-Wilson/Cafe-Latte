import { defineStore } from "pinia";
import { createClient } from "contentful";
import utils from "../utils.js"

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
      events: {},
      gallery:[],
      location:{},
      loaded: false,
      galleryLoaded: false,
    },
    functions:{
      text: '',
      gallery: [],
      services: [],
      loaded: false
    },
    menu: {
      text: '',
      items: [],
      pdf: ''
    },
    contact:{
      text: ''
    }
  }),

  actions: {
    async loadHomeContent(){
      try {
        await Promise.all([this.getHomeContent(), this.getGalleryContent()]);
        console.log('Content loaded successfully');
      } catch (error) {
        console.error('Error loading content:', error);
      }
    },

    async getGalleryContent(){
      await client
      .getEntries({
        content_type: "homeGallery",
      })
      .then((response) => {
        if(!response?.items?.length){
          throw new Error({message: "Couldn't get gallery content"})
        }
        let galleryContent = response?.items.map((item) => ({url: item.fields.postUrl, image: utils.getImageUrl(item.fields.image)}))
       
        this.$patch((state) => {
          state.home.gallery = galleryContent;
          state.home.galleryLoaded = true;
        });
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    },

    async getFunctionsContent(){
      await client
      .getEntries({
        content_type: "functionsContent",
      })
      .then((response) => {
        if(!response?.items?.length){
          throw new Error({message: "Couldn't get gallery content"})
        }
    
        let functionsText = response?.items.find((item) => item.fields.title == 'Functions Text').fields.paragraph
        let functionsServices = response?.items.filter((item) => item.fields.title.toLowerCase().includes('card')).map(item => ({text:item.fields.cardText , icon:item.fields.cardIcon.fields.file.url}))
        let functionsGallery = response?.items.find((item) => item.fields.title == 'Functions Gallery').fields.galleryImage.map((item) => utils.getImageUrl(item))

        console.log(functionsServices, 'service cards');
  
        this.$patch((state) => {
          state.functions.text = functionsText;
          state.functions.gallery = functionsGallery;
          state.functions.services = functionsServices;
          state.functions.loaded = true;
        });
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    },
    async getLocationContent(){

    },

   async getPdf(){
      await client
      .getEntries({
        content_type: "menuPdf", 
      })
      .then((response) => {
        if(!response){
          throw new Error({message: "Couldn't get menu pdf"})
        }
        //patch state
        this.$patch((state) => {
          state.menu.pdf = response.items[0].fields.pdf.fields.file.url;
         
        });

      })
      .catch((error) => {
        console.log("Error:", error);
      });
    },

    async getHomeContent() {
      await client
      .getEntries({
        content_type: "homeContent",
      })
      .then((response) => {
        const content = response?.items.map((item) => item.fields)
        if(!content.length){
          throw new Error({message: "Couldn't get home content"})
        }
        //banner

        // events
        let eventsContent = content.find(item => item.title.includes('Event'))
        eventsContent.image = utils.getImageUrl(eventsContent.image);

        //location
        const locationContent = content.find(item => item.title.includes('Location'));

        //patch state
        this.$patch((state) => {
          state.home.events = eventsContent;
          state.home.location = locationContent;
          state.home.loaded = true;
        });

      })
      .catch((error) => {
        console.log("Error:", error);
      });
    },
    async getMenuContent(){

      await Promise.all([this.getMenuItems(), this.getMenuText()]);
   
    },
    async getMenuText(){
      await client
      .getEntries({
        content_type: "menuText",
      })
      .then((response) => {
        this.menu.text = response.items[0].fields.text
    })
      .catch((error) => {
        console.log("Error:", error);
      });
    },
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
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    },
    async getContactContent(){
      await client
      .getEntries({
        content_type: "contactContent",
      })
      .then((response) => {
        console.log(response, 'res')
        this.contact.text = response.items[0].fields.text;
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    }
  },

});
