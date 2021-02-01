<template>
    <div class="dashboard">
        <router-link :to="{name: 'ProductAdd'}">Add Product</router-link>
        <h1>Dashboard</h1>
        <div>
            <ul v-show="errors.length">
                <li v-for="(error, index) in errors" :key="index" v-text="error"></li>
            </ul>
        </div>
        <div class="table-wrapper">
            <table v-if="products.length" class="table">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in products" :key="product.id">
                        <td v-text="index+((current_page-1)*10)+1"></td>
                        <td v-text="product.title"></td>
                        <td v-text="product.description"></td>
                        <td v-text="product.price"></td>
                        <td>
                            <img class="product-image" :src="product.image" alt="product.title">
                        </td>
                        <td>
                            <ul class="action">
                                <li>
                                    <router-link :to="{
                                        name: 'ProductEdit',
                                        params: {
                                            id: product.id
                                        }
                                    }">Edit</router-link>
                                </li>
                                <li>
                                    <a href="#" @click.prevent="deleteProduct(product.id)">Delete</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="pagination">
                <a href="#" @click.prevent="prevPage" :class="{null : prev==null}">Prev</a>
                <a href="#" @click.prevent="nextPage" :class="{null : next==null}">Next</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name: "Dashboard",
    data(){
        return {
            products: [],
            next: null,
            prev: null,
            current_page: null,
            errors:[],
        }
    },
    methods: {
        loadData(url){
            axios.get(url).then(({data}) => {
                this.products = data.data;
                this.next = data.links.next;
                this.prev = data.links.prev;
                this.current_page = data.meta.current_page;
            });
        },
        deleteProduct(id){
            axios.delete(`products/${id}`).then(({data}) => {
                if(data.status==200){
                    this.loadData(`products?page=${this.current_page}`);
                }
            }).catch(({response}) => {
                if(response.data.status == 404){
                    this.errors.push(response.data.message);
                }
            });
        },
        nextPage(){
            if(this.next){
                this.loadData(`products?page=${this.current_page+1}`);
            }
        },
        
        prevPage(){
            if(this.prev){
                this.loadData(`products?page=${this.current_page-1}`);
            }
        }
    },
    created(){
        this.loadData('products');
    }
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    .dashboard{
        width: 90%;
        margin: 20px auto;
    }
    .pagination{
        width: 30%;
        display: flex;
        margin: 10px auto;
        justify-content: center;
    }
    .pagination a{
        margin: 5px 20px;
        text-decoration: none;
        color: white;
        background: #4FC3A1;
        padding: 5px 10px;
        border-radius: 4px;
    }
    .null{
        background: #9dc2b7 !important;
    }
    .action{
        display: flex;
        align-items: center;
        list-style: none;
    }
    .action li{
        margin: 0 5px;
        padding: 4px 8px;
        border-radius: 5px;
    }
    .action li a{
        text-decoration: none;
        color: white;
    }
    .action li:first-child{
        background: #4FC3A1;
    }
    
    .action li:last-child{
        background: #c34f4f;
    }
    .product-image{
        max-width: 50px;
        max-height: 50px;
    }
    table-wrapper{
        margin: 10px 70px 70px;
        box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
    }

    .table {
        border-radius: 5px;
        font-size: 16px;
        font-weight: normal;
        border: none;
        border-collapse: collapse;
        background-color: white;
    }
        
    .table td, .table th {
        text-align: center;
        padding: 8px;
    }

    .table td {
        border-right: 1px solid #f8f8f8;
        font-size: 16px;
    }

    .table thead th {
        color: #ffffff;
        background: #4FC3A1;
    }


    .table thead th:nth-child(odd) {
        color: #ffffff;
        background: #324960;
    }

    .table tr:nth-child(even) {
        background: #F8F8F8;
    }

    /* Responsive */

    @media (max-width: 767px) {
        .table {
            display: block;
        }
        .table-wrapper:before{
            content: "Scroll horizontally >";
            display: block;
            text-align: right;
            font-size: 16px;
            color: white;
            padding: 0 0 10px;
        }
        .table thead, .table tbody, .table thead th {
            display: block;
        }
        .table thead th:last-child{
            border-bottom: none;
        }
        .table thead {
            float: left;
        }
        .table tbody {
            width: auto;
            position: relative;
            overflow-x: auto;
        }
        .table td, .table th {
            padding: 20px .625em .625em .625em;
            height: 60px;
            vertical-align: middle;
            box-sizing: border-box;
            overflow-x: hidden;
            overflow-y: auto;
            width: 120px;
            font-size: 16px;
            text-overflow: ellipsis;
        }
        .table thead th {
            text-align: left;
            border-bottom: 1px solid #f7f7f9;
        }
        .table tbody tr {
            display: table-cell;
        }
        .table tbody tr:nth-child(odd) {
            background: none;
        }
        .table tr:nth-child(even) {
            background: transparent;
        }
        .table tr td:nth-child(odd) {
            background: #F8F8F8;
            border-right: 1px solid #E6E4E4;
        }
        .table tr td:nth-child(even) {
            border-right: 1px solid #E6E4E4;
        }
        .table tbody td {
            display: block;
            text-align: center;
        }
    }
</style>
