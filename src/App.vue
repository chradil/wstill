<template>
<div id="app">
  <div class="topnav" id="nav">
  
    <router-link v-on:click="expand" class="icon" id="icon" to="/"><i class="fa fa-bars" ></i></router-link>
    <router-link class="link" :to="{ name: 'Home'}">HOME</router-link> 
    <router-link class="link" to="/calendar">EVENTS</router-link>
      </div>
    <router-view/>
    </div>

</template>

<style>

.home, .calendar, .about, .map{
  padding-top:100px;

}

.vc-day{
  height:7em;
  width:8em;
  border: 1px solid rgb(209, 228, 221);

}

body{
  background-color:#28303d;

}

.top{
  background-color:#78a6a1;

}

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  top:0px;
  left:0px;
  padding: 30px;
  width:100%;
  position:fixed;
  background-color:rgb(209, 228, 221);
  z-index:10;
}

#nav a {
  font-weight: bold;
  font-size:2em;
  color: #2c3e50;
  padding-right:1.5em;
  text-decoration:none;
  float:right;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

p{
  padding-left:1.5em;  
  padding-right:1.5em;
  font-size:1.5em;
  text-align:left;

}

h1{
  padding:1em;
  font-size:4em;
  color:rgb(209, 228, 221);

}

img {
  float:left;
  padding:2em;

}

.top{
  display: inline-block;

}

.icon {
  display: none;
}

@media screen and (max-width: 700px) {
  .topnav .link {display: none;}
  .icon {
    float: right;
    display: block;
    text-align:center;
  }
  .topnav .responsive {position: relative;}

  .responsive .link{
    float: none;
    display: inline-block;
    position:relative;
    width:100%;
  }

}


@media screen and (max-width: 1000px) {
  h1{
    padding:1em;
    font-size:3em;
    color:rgb(209, 228, 221);

  }

}


</style>
<script>
  export default {
      methods: {
          expand(){
              console.log('clicked');
              var x = document.getElementById("nav");
              let y = document.getElementsByClassName("link");
              if (x.className === "topnav") {
                x.className += " responsive";
              } else {
                x.className = "topnav";
              }
              for(let i=0;i<y.length;i++){
                if (y[i].className === "link") {
                console.log(y[i]);
                  y[i].className += " responsive";
                } else {
                  y[i].className = "link";
                }
              }
          }
      }
  };
</script>


