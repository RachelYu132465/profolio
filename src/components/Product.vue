<template>
<div>
 
 
    <h1>past </h1>
    

<!--<div class="md-layout-item md-size-25">-->
  <div class="md-layout md-gutter">
<productitem class="col-12 col-md-4 offset-md-4"
      v-for="product  in  products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :image="product.image"
      :price="product.price"
    />
 </div> 

 <!--</div>-->
   </div>
</template>

<script>
  /* eslint-disable vue/no-unused-components */
import productitem from "../components/includes/productitem.vue";
import { MdLayout } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';


  export default {
    name: 'Product',
    
    components: {

productitem,
MdLayout,

}
,
  
computed: {
    products() {
      return this.$store.getters.products;
    }
  }
}



  

</script>


<style scoped>
.caption-full {
  padding-right: 10px;
  padding-left: 10px;
}
.ratings {
  padding-right: 10px;
  padding-left: 10px;
  color: #d17581;
}
</style>