<template>
  <div id="app">
  <navbar></navbar>

  <div class="container">
   <div class="row">
      <div class="col-sm-9  d-flex justify-content-between">
             <product :items="items"></product>

            
      </div>

      <div class="col-sm-3">
 
          <cart></cart>
      </div>
   </div>
  </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Product from './components/Product';
import data from './data.js';

export default{
    components:{
        Navbar,
        Cart,
        Product
    },
    data(){
      return {
         items:[]
      }
    },
    mounted(){
      this.items = data;
    }


}
</script>

<style>
.container{
  padding-top:10px;
}


</style>
