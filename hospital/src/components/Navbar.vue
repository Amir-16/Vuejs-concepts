<template>
    <div>

        <nav>
            <ul>
            <li><a href="">Home</a> </li>
              <li> <a href="">Details</a>   </li>
              <li> <a href="">Doctors List</a> </li>
              <li> <a href="">About </a> </li>

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


<style >

    nav{
        text-align: center;
    }
   nav ul{
        padding: 0px;

    }
   nav li{
       display: inline-block;
       list-style-type: none;
       margin: 0px;
       padding: 10px;


    }

</style>

