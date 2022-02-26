<template>
  <div id="app">
  <navbar></navbar>

  <div class="container">
   <div class="row">
      <div class="col-sm-9  d-flex justify-content-between">
             <product @newItemAdded="addCartItem" :items="items"></product>

            
      </div>

      <div class="col-sm-3">
 
          <cart :items="cart"></cart>
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
         items:[],
         cart:[{
           id:1,
           title:"Orange",
           price: 32,
           photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCstGnwN8sGGaLNG9i02mRyKsTs0F_Eb_GaQ&usqp=CAU"
         }]
      }
    },
    mounted(){
      this.items = data;
    },
    methods:{
      addCartItem(item){
        this.cart.push(item)
      }

    }


}
</script>

<style>
.container{
  padding-top:10px;
}


</style>
