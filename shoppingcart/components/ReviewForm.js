app.component( 'review-form' , {
    template :
    `
    <div class="col-md-6">
        <div class="card p-3">
        <form action="" @submit.prevent="onSubmit">
        <h3>Leave A review</h3>
        <div class="mb-3">
        <label for="" class="form-label">Name : </label>
        <input type="text" class="form-control" v-model="name">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Review : </label>
            <textarea name="" id=""  rows="5" class="form-control" v-model="review"></textarea>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Rating</label>
            <select name="" id="" class="form-select" v-model.number="rating">
                <option value="">5</option>
                <option value="">4</option>
                <option value="">3</option>
                <option value="">2</option>
                <option value="">1</option>
            </select>
        </div>
        <input type="submit" class="btn btn-info" value="Send">
    </form>
        </div>
    </div>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit() {
            if(this.name === '' || this.review === '' || this.rating === null){
                alert('Please fill all blank!')
                return
            }
            let productReview = {
                name : this.name,
                review : this.review,
                rating : this.rating
            }
            this.$emit('review-submitted',productReview);
            this.name = '';
            this.review = '';
            this.rating = null
        }
    },
})