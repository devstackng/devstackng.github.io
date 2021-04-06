const vueApp = new Vue({
  el: '#vueProjects',
  data: { 
    filtered_projects: [],
    projects: [
      {
        image: "img/projects/hiis-claims.jpg",
        name: "Health Insurance Innovative Systems",
        category_ids: [1, 2],
        url: "https://hiisnigeria.github.io/"
      },
      {
        image: "img/projects/hiis-mobile.jpg",
        name: "HIIS Mobile Application",
        category_ids: [2],
        url: "https://hiisnigeria.github.io/"
      },
      {
        image: "img/projects/feedintel.jpg",
        name: "Feedintel",
        category_ids: [1, 2],
        url: "http://feedintel.live/"
      },
      {
        image: "img/projects/hsdf.jpg",
        name: "EFSS - Electronic File Sharing System",
        category_ids: [1, 4],
        url: "http://hsdf-stage.herokuapp.com/"
      },
      {
        image: "img/projects/healthjobber.jpg",
        name: "HealthJobber",
        category_ids: [1],
        url: "http://hjstage.herokuapp.com/"
      },
      {
        image: "img/projects/hj-mobile.jpg",
        name: "HJ Mobile",
        category_ids: [2],
        url: "http://hjstage.herokuapp.com/"
      },
      {
        image: "img/projects/gaps-flyer.png",
        name: "GAPS",
        category_ids: [1, 2],
        url: "https://gapstech.herokuapp.com/"
      },
      {
        image: "img/projects/filterland-flyer.png",
        name: "Filterland CRM",
        category_ids: [1, 3],
        url: "https://demo.filterlandsales.com/"
      },
      {
        image: "img/projects/amina-flyer.png",
        name: "Amina.ai",
        category_ids: [1, 2],
        url: "https://amina.ai/"
      }
   ],
   categories: [
     {
       id: 1,
       name: "Web Apps",
       active: false
     },
     {
       id: 2,
       name: "Mobile Apps",
       active: false
     },
     {
       id: 3,
       name: "Progressive Web Apps",
       active: false
     },
     {
       id: 4,
       name: "Websites",
       active: false
     },
     {
       id: 5,
       name: "All",
       active: true
     }
   ]
  },
  mounted() {
    const vm = this

    vm.filtered_projects = vm.projects
  },
  methods: {
    filterProjects(category, index) {
      const vm = this

      if (category.id === 5) {
        vm.filtered_projects = vm.projects
        vm.categories[index].active = true
        vm.categories.forEach((c, i) => {
          if(index !== i){
            c.active = false
          }
        })
      }
      else {
        vm.filtered_projects = vm.projects.filter((p) => p.category_ids.includes(category.id))
        vm.categories[index].active = true
        vm.categories.forEach((c, i) => {
          if(index !== i){
            c.active = false
          }
        })
      }
    }
  }
})