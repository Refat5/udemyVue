<template>
  <div class="row">
            <div v-for="(item ,index) in items" :key="index" class="card"  style="width: 12rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCstGnwN8sGGaLNG9i02mRyKsTs0F_Eb_GaQ&usqp=CAU" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{item.title}}</h5>
                  <p class="card-text">{{item.price}}</p>
                  <a @click="addToCart(item)" class="btn btn-danger text-light"> <strong>+</strong> Add New</a>
                </div>
            </div>
    </div>
</template>

<script>
export default{
  props:['items'],
  methods:{
    addToCart(item){
       this.$emit('newItemAdded',item)
    }
  }
}
</script>

<style></style>