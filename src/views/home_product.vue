<template>
    <div class="d-flex justify-content-center" v-if="!product_store.load_products">
        <h2>Loading Items......</h2>
    </div>
    <div class="row mt-3" v-else>
        <div class="col mb-4" v-for="( product, index) in search_product" :key="index">
            <div class="card" style="width: 13rem;">
                <img :src="product.image" class="card-img-top mx-auto" alt="" style="width: 12rem; height: 12rem;">
                <div class="card-body">
                    <h6 class="card-title">{{ product.title }}</h6>
                    <p>Category:{{ product.category }}</p>
                    <p>Price: {{ currencyTHB(product.price) }}</p>
                    <routerLink :to="`/product_detail/${product.id}`" class="btn btn-primary mx-2">Details</routerLink>
                    <button class="btn btn-success" @click="cart_store.add_cart(product.id, product.price)">AddCart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { computed } from 'vue'

//useProducttore
import { useProductStore } from '../store/product';
const product_store = useProductStore()


// currencyTHB
import { currencyTHB } from '../shared/currency';

const list = computed(() => product_store.list_products )

const search_product = computed(() => product_store.search_product)

//useCartStore
import { useCartStore } from '../store/cart';
const cart_store = useCartStore()



</script>

<style lang="scss" scoped>

</style>