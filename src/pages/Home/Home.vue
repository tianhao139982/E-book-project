<template>
    <div class="container-fluid py-5 home"  lazy="loaded">
        <div class="row justify-content-center py-5">
            <div class="text-center col-md-12">
                <div class="title">E-Book</div>
                <div class="subtitle mb-5">一个沉浸交互式新风格线上书店</div>
                <div class="text">你所想要的 都是我们所努力的</div>
            </div>
            <div class="mt-4">
                <button class="btn btn-primary" @click="$router.push('/books')">立即开始探索</button>
            </div>
        </div>
        <div class="out">
            <ve-line :data="chartData"></ve-line>
        </div>
        <div class="out">
            <ve-bar :data="chartData"></ve-bar>
        </div>
        <div class="out">
            <ve-pie :data="chartData"></ve-pie>
        </div>
        <div class="out">
            <ve-ring :data="chartData"></ve-ring>
        </div>
    </div>
</template>

<script>
import VeLine from 'v-charts/lib/line';
import VeBar from 'v-charts/lib/bar';
import VePie from 'v-charts/lib/pie';
import VeRing from 'v-charts/lib/ring';
export default {
        name: "Home",
        components: { 
            VeLine,
            VeBar,
            VePie,
            VeRing
        },
        data() {
            return {
                imgUrl: '../../../public/images/home.png',
                chartData : {
                    columns: ['日期', '销售量'],
                    rows: [
                        { '日期': '1月1日', '销售量': 123 },
                        { '日期': '1月2日', '销售量': 1223 },
                        { '日期': '1月3日', '销售量': 2123 },
                        { '日期': '1月4日', '销售量': 4123 },
                        { '日期': '1月5日', '销售量': 3123 },
                        { '日期': '1月6日', '销售量': 7123 }
                    ]
                }
            }
        },
        mounted(){
            this.chartData = {
                columns: ['日期', '销售量'],
                rows: [
                    { '日期': '1月1日', '销售量': 123 },
                    { '日期': '1月2日', '销售量': 1223 },
                    { '日期': '1月3日', '销售量': 2123 },
                    { '日期': '1月4日', '销售量': 4123 },
                    { '日期': '1月5日', '销售量': 3123 },
                    { '日期': '1月6日', '销售量': 7123 }
                ]
            }
        }
    }
</script>

<style scoped>
    .title{
        font-family: Calibri;
        font: 72px bold;
    }

    .subtitle{
        font-size: 16px;
        font-family: 等线;
    }

    .text{
        font-size: 20px;
    }

    .home[lazy=loaded]{
        height: 600px;
        background:url('../../../public/images/home.png');
        background-size:cover;
    }
    .out{
        background-color: #ffffff;
        margin-top:250px;
    }
</style>
