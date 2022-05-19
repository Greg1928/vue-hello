var app = new Vue(
    {
    el: "#app",
    data: {
      message: "Hello Vue!",
      src: "./img/vue.png",
      alt: "vue_image",
      date: "You loaded this page on " + new Date().toLocaleString()
    }
  }
  )