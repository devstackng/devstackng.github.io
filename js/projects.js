const vueApp = new Vue({
  el: '#vueProjects',
  data: { 
    projects: [
      {
        image: "/img/projects/hiis-claims.jpg",
        name: "Health Insurance Innovative Systems",
        categories_id: [1, 2],
        url: ""
      },
      {
        image: "img/projects/hiis-mobile.jpg",
        name: "HIIS Mobile Application",
        categories_id: [2],
        url: ""
      },
      {
        image: "img/projects/feedintel.jpg",
        name: "Feedintel",
        categories_id: [1, 2],
        url: ""
      },
      {
        image: "img/projects/hsdf.jpg",
        name: "EFSS - Electronic File Sharing System",
        categories_id: [1, 4],
        url: ""
      },
      {
        image: "img/projects/healthjobber.jpg",
        name: "HealthJobber",
        categories_id: [1],
        url: ""
      },
      {
        image: "img/projects/hj-mobile.jpg",
        name: "HJ Mobile",
        categories_id: [2],
        url: ""
      },
      {
        image: "img/projects/gaps-flyer.png",
        name: "GAPS",
        categories_id: [1, 2],
        url: ""
      },
      {
        image: "img/projects/filterland-crm.png",
        name: "Filterland CRM",
        categories_id: [1, 3],
        url: ""
      },
      {
        image: "img/projects/amina-flyer.png",
        name: "Amina.ai",
        categories_id: [1, 2],
        url: ""
      }
   ],
   categories: [
     {
       id: 1,
       name: "Web Apps"
     },
     {
       id: 2,
       name: "Mobile Apps"
     },
     {
       id: 3,
       name: "Progressive Web Apps"
     },
     {
       id: 4,
       name: "Websites"
     }
   ]
  },
  mounted() {
    console.log('mounted', this)
  }
})