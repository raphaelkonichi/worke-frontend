<template>
  <div class="employees-table">
    <table>
        <thead>
            <tr>
                <th class="title-name" @click="sort('name')">Nome <i :class="checkIcon(currentSortDir)"></i></th>
                <th @click="sort('age')">E-mail <i :class="checkIcon(currentSortDir)"></i></th>
                <th @click="sort('breed')">Telefone <i :class="checkIcon(currentSortDir)"></i></th>
                <th @click="sort('gender')">Nível <i :class="checkIcon(currentSortDir)"></i></th>
                <th @click="sort('gender')">Pontos <i :class="checkIcon(currentSortDir)"></i></th>
                <th @click="sort('gender')">Sala <i :class="checkIcon(currentSortDir)"></i></th>
                <th @click="sort('gender')">Ação</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cat in sortedCats" :key="cat.id">
                <td class="employee-header">
                    <img src="../assets/img/photo-girl.jpg" />
                    {{ cat.name }} Silva Santos
                </td>
                <td>{{cat.age}}</td>
                <td>{{cat.breed}}</td>
                <td>{{cat.gender}}</td>
                <td>{{cat.gender}}</td>
                <td>{{cat.gender}}</td>
                <td class="employee-actions">
                    <i class="fa-solid fa-pen" @click="openEmployeeInfo"></i>
                    <i class="fa-solid fa-trash"></i>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="table-footer">
        <button @click="prevPage"><i class="fa-solid fa-angle-left"></i></button> 
        <button @click="nextPage"><i class="fa-solid fa-angle-right"></i></button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cats: [],
            currentSort:'name',
            currentSortDir:'asc',
            pageSize: 4,
            currentPage: 1
        }
    },
    created() {
        fetch('https://www.raymondcamden.com/.netlify/functions/get-cats')
        .then(res => res.json())
        .then(res => {
            this.cats = res;
        })
    },
    computed:{
        sortedCats() {
            return this.cats.sort((a,b) => {
                let modifier = 1;
                if(this.currentSortDir === 'desc') modifier = -1;
                if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
            }).filter((row, index) => {
                let start = (this.currentPage-1)*this.pageSize;
                let end = this.currentPage*this.pageSize;
                if(index >= start && index < end) return true;
            });
        },
    },
    methods: {
        sort(s) {
            if(s === this.currentSort) {
                this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
            }
            this.currentSort = s;
        },
        nextPage() {
            if((this.currentPage*this.pageSize) < this.cats.length) this.currentPage++;
        },
        prevPage() {
            if(this.currentPage > 1) this.currentPage--;
        },
        checkIcon(value) {
            if (value == 'asc') return 'fa-solid fa-angle-up'
            else return 'fa-solid fa-angle-down'
        },
        openEmployeeInfo() {
            this.$emit("openEmployeeInfo")
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.employees-table {
    table {
        background-color: @white;
        width: 100%;
        border-radius: 7px 7px 0 0;

        thead {
            th {
                padding: 15px;
                border-bottom: 1px solid @tableGray;
                font-weight: 800;
                letter-spacing: 0.1em;
                font-size: 12px;
            }

            .title-name {
                width: 30%;
            }
        }

        tbody{
            tr {
                td {
                    padding: 15px 30px;
                    text-align: center;
                    border-bottom: 1px solid @tableGray;
                }

                .employee-header {
                    display: flex;
                    align-items: center;
                    text-align: unset;

                    img {
                        margin-right: 20px;
                        height: 40px;
                        width: 40px;
                    }
                }

                .employee-actions {
                    i {
                        font-size: 18px;
                        margin-right: 10px;
                        cursor: pointer;

                        &:first-child {
                            color: @purple;
                        }

                        &:last-child {
                            color: @pink;
                        }
                    }
                }

                &:last-child td {
                    border-bottom: unset;
                }
            }

        }
    }

    .table-footer {
        padding: 15px;
        background-color: @white;
        border-radius: 0 0 7px 7px;
        box-shadow: 0px -4px 4px rgb(0 0 0 / 4%);
        display: flex;
        justify-content: end;

        button {
            background-color: @white;
            padding: 0 10px 0 10px;
            cursor: pointer;

            i {
                font-size: 18px;
            }
        }
    }
}
</style>