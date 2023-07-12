import { defineStore } from "pinia";

import axios from "axios"
import {   ref , computed } from "vue"


export const useProductStore = defineStore('useProductStore', () => {
    const products = ref([])

    const input = ref('')

    const list_products = computed( () => products.value )

    const load_products = computed( () => products.value.length > 0 )


    const fetch_products = async () => {
        //await axios.get('https://fakestoreapi.com/products')
        await axios.get(import.meta.env.VITE_API)
        .then((response) => {
            //console.log(response.data)
            products.value = response.data
            console.log(products.value)
        }).catch( (err) =>  {
            console.log(err)
        })
    }

    const search_product = computed(() => {
        if (input.value.length < 3) return products.value

        return products.value.filter((prd) => {
            if(prd.title.toLowerCase().includes(input.value.toLocaleLowerCase()) == false) {
                return false
            } else {
                return prd.title.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())
            }
        })
    })

    return { products , fetch_products ,  list_products , load_products , input , search_product }

})