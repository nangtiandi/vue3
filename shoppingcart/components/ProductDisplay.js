app.component('product-display',{
    props : {
        premium : {
            type : Boolean,
            required : true
        }
    },
    template: 
    `<div class="col-md-8">
    <div class="d-flex align-items-start">
        <div class="card my-3 mx-2 shadow w-50">
            <div class="card-header">
                <img :src="image" alt="" class="img-fluid w-100" style="max-height: 250px;">
            </div>
            <div class="card-body">
                <!-- <button class="btn btn-info" v-on:click="cart +=1">Add to Cart</button> -->
                <button class="btn btn-info" @click="addToCart()" :class="{disabledButton: !stock}" :disabled="!stock">Add to cart</button>
            </div>
        </div>
        <div class="card mx-2 w-100 border-0">
            <div class="card-body">
                <h3> {{title}} </h3>
                <p v-if="stock">In Stock</p>
                <p v-else="stock"><del> Sold out</del></p>
                <p>Shipping : {{ship}}</p>
                <p v-for="detail in details">{{detail}}</p>

                <div class="box" v-for="(variant ,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" :style="{backgroundColor: variant.color}"> 

                </div>
            </div>
        </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
</div>
`,
data() {
    return {
        brand : 'F&F',
        product : 'Diamond Watch',
        // image : './assets/img/d.jpeg',
        selectedVariant : 0,
        // invetory : 0
        // stock : false,
        details : ['တခုယူတခုလက်ဆောင်','25% discount','50% cupon discount'],
        variants : [
            {id : 1, color : 'grey',image : './assets/img/e.jpeg',quantity :10},
            {id : 2, color : 'green',image : './assets/img/d.jpeg', quantity : 0}
        ],
        reviews : []
    }
},
methods: {
    addToCart(){
        // this.cart += 1;
        this.$emit('add-to-cart')
        // $emit() method က global component 
    },
    updateVariant(index){
        this.selectedVariant = index;
        console.log(index)
    },
    addReview(review){
        this.reviews.push(review)
    }
},
computed: {
    title(){
        return this.brand +' => ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    stock(){
        return this.variants[this.selectedVariant].quantity
    },
    ship(){
        if(this.premium){
            return "Premium members are free!";
        }else{
            return "you will tax 2500";
        }
    }
}
})