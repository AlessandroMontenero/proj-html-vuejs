

const { createApp } = Vue

  createApp({
    data() {
      return {
        navItems: [
          {
            label: 'HOME',
            url: '#',
            new: false
          },
          {
            label: 'ABOUT',
            url: '#',
            new: false
          },
          {
            label: 'PRICES',
            url: '#',
            new: false
          },
          {
            label: 'COURSES',
            url: '#',
            new: false
          },
          {
            label: 'LOCATIONS',
            url: '#',
            new: false
          },
          {
            label: 'BLOG',
            url: '#',
            new: false
          },
        ]
      }
    }
  }).mount('#navbar')

  createApp({
    data() {
      return {
        newName: '',
        newEmail: '',
        newTelephone: '',
        newLocation: ''
      }
    },
    methods: {
      requestACallback() {
        let newRequest = {
          name: this.newName,
          email: this.newEmail,
          telephone: this.newTelephone,
          location: this.newLocation
        }
        console.log(newRequest)
        this.newName = ''
        this.newEmail = ''
        this.newTelephone = ''
        this.newLocation = ''
      }
    }
  }).mount('#requestACallback')

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#footer')
