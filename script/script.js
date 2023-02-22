
const { createApp } = Vue

createApp({
  data() {
    return {
      activeTab: 0,
      navPadding: '0.7',
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
          new: true
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
  },
  mounted() {
    addEventListener("scroll", (event)=> {
      if (window.pageYOffset > 30) {
        this.navPadding = '0'
      }
      else {
        this.navPadding = '0.2'
      }
    })
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
      courses: [
        {
          label: 'Pass Plus',
          img: 'courses-passplus.jpg'
        },
        {
          label: 'Intensive Course',
          img: 'course-intensive.jpg'
        },
        {
          label: 'Instructors',
          img: 'courses-instructor.jpg'
        }
      ]
    }
  }
}).mount('#courses')

createApp({
  data() {
    return {
      animation: false,
      ratesBoxes: [
        {
          label: 'PASS RATE',
          value: '95',
        },
        {
          label: 'REFERRAL RATE',
          value: '100'
        },
        {
          label: 'PASS RATE',
          value: '0'
        }
      ],
      contacts: [
        {
          name: 'Mike Hart',
          img: 'instructor-mikehart.jpg',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sunt!',
          facebookLink: '#',
          twitterLink: '#',
          instagramLink: '#'
        },
        {
          name: 'John Smith',
          img: 'instructor-johnsmith.jpg',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sunt!',
          facebookLink: '#',
          twitterLink: '#',
          instagramLink: '#'
        },
        {
          name: 'Angela Hart',
          img: 'instructor-angelahart.jpg',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sunt!',
          facebookLink: '#',
          twitterLink: '#',
          instagramLink: '#'
        }
      ]
    }
  },
  methods: {
    progressValue(index){
      let deg = 0
      let end = parseInt(this.ratesBoxes[index].value)
      let speed = 6
      let progress = setInterval(()=> {
        if (deg != end) {
          deg++;
        }
        if(deg >= end){
          clearInterval(progress)
        }
        this.ratesBoxes[index].value = deg
      }, speed)
      
    }
  },
  mounted () {
    addEventListener("scroll", (event) => {  
      let el = document.getElementById("coursesBottom")
      var elDistanceToTop = parseInt((window.pageYOffset + el.getBoundingClientRect().top)) 
      if (elDistanceToTop <= (window.pageYOffset + window.innerHeight)){
          if (this.animation == false) {
            this.progressValue(0)
            this.progressValue(1)
            this.progressValue(2)
            this.animation = true
          }
      }
    })
    
  }
}).mount('#coursesBottom')

createApp({
  data() {
    return {
      activeIndex: 0,
      testimonials: [
        {
          img: 'testimonial-grant.png',
          name: 'Grant',
          quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae, sequi perspiciatis iure a voluptates minus ducimus enim accusamus! Molestias.'
        },
        {
          img: 'testimonial-harold.png',
          name: 'Harold',
          quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam dolorem ipsum? Quaerat accusantium dignissimos voluptatem facere doloribus numquam debitis!'
        },
        {
          img: 'testimonial-kate.png',
          name: 'Kate',
          quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum necessitatibus est consectetur cupiditate fugit accusamus soluta temporibus maxime doloremque?'
        },
        {
          img: 'testimonial-kelly.png',
          name: 'Kelly',
          quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione alias voluptate molestias officiis illo, sint ipsam provident cupiditate quasi quidem.'
        },
        {
          img: 'testimonial-sophia.png',
          name: 'Sophia Jones',
          quote: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly reccomended.'
        },
      ]
    }
  },
  mounted() {
    setInterval(()=> {
      if (this.activeIndex < (this.testimonials.length - 1)){
        this.activeIndex++
      }
      else {
        this.activeIndex = 0
      }
    }, 5000)
  }
}).mount('#testimonials')

createApp({
  data() {
    return {
      newsArray: [
        {
          title: 'What Car to Start With?',
          date: 'February 7th, 2019',
          comments: '0',
          img: 'blog-choosecar-700x441.jpg',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title: 'Avada Driving School Expanding',
          date: 'February 7th, 2019',
          comments: '0',
          img: 'blogpost-10and2-700x441.jpg',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
      ]
    }
  }
}).mount('#latestNews')

createApp({
  data() {
    return {
      email: ''
    }
  },
  methods: {
    readEmail(){
      console.log(this.email)
      this.email = ''
    }
  }
}).mount('#newsteller')