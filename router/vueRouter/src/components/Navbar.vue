<template>

      <div>
          <nav>
                <ul>
                    <router-link to="/">Home</router-link>
                    <router-link to="/contact">Contact</router-link>
                    <router-link to="/products">Products</router-link>
                    <router-link to="/about">About</router-link>
                </ul>
          </nav>

      </div>

</template>


<script>
export default {
  name:'Navbar',
  data(){
    return{

    }
  }
  
}
</script>

<style>

      nav{
        text-align: center;
      }
      nav.ul{
        padding: 10px;
      }
      nav.li{
          list-style-type: none;
          display: inline-block;
          margin: 0px;
          padding: 10px;
      }

</style>