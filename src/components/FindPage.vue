<template>
    <div>
        <div class="carousel">
            <div class="carouselBackground"></div>
            <div class="swipediv">
                <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item class="back" v-for="(image, index) in images" :key="index">
                        <img class="img" :src="image" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="menu">
                <div class="menudiv">
                    <div class="menuBtndiv">
                        <van-icon color="#fff" size="24px" name="invition" />
                    </div>
                    <p>每日推荐</p>
                </div>
                <div class="menudiv">
                    <div class="menuBtndiv">
                        <van-icon color="#fff" size="24px" name="service" />
                    </div>
                    <p>歌单</p>
                </div>
                <div class="menudiv">
                    <div class="menuBtndiv">
                        <van-icon color="#fff" size="24px" name="bar-chart-o" />
                    </div>
                    <p>排行榜</p>
                </div>
                <div class="menudiv">
                    <div class="menuBtndiv">
                        <van-icon color="#fff" size="24px" name="audio" />
                    </div>
                    <p>电台</p>
                </div>
                <div class="menudiv">
                    <div class="menuBtndiv">
                        <van-icon color="#fff" size="24px" name="video" />
                    </div>
                    <p>直播</p>
                </div>
            </div>
        </div>
        <div class="findbody">
            <div class="findtitle">
                <label class="findtitlename">推荐歌单</label>
                <van-button plain  size="small" style="color:black;border-color:#e8eaec;border-radius:50px" ><span>歌单广场</span></van-button>
            </div>
            <div class="findbodycard">
                <div :style="'height:'+screenWidth+'px'" v-for="(card,index) in 6" :key="index" class="card">
                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            images: [
                'https://p1.music.126.net/J7GkNCPr5ro6v-cFMFPoGg==/109951164259290772.jpg',
                'https://p1.music.126.net/csNfhmB5B-ce22eTUwLTUg==/109951164258219899.jpg',
                'https://p1.music.126.net/YUXGoDab5klimOkcNgHBoA==/109951164259280309.jpg',
                'https://p1.music.126.net/836iP64Wd0pVstrsTjYsqQ==/109951164259305108.jpg'
            ],
            screenWidth: ''
        }
    },
    mounted(){
        window.onresize = () => {
            return (() => {
                this.screenWidth = (document.body.clientWidth-30)*0.9/3;
                console.log("mounted:"+(document.body.clientWidth-30)*0.9/3);
            })();
        };
    },
    created(){
        console.log("created:"+(document.body.clientWidth-30)*0.9/3);
        this.screenWidth = (document.body.clientWidth-30)*0.9/3;
        axios.get('/a')
        .then(function (response) {
            console.log(response);
        })

    }
}
</script>
<style scoped>
.findtitle{
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
    align-items:center;
    padding: 0 15px;
}
.findbodycard{
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content:flex-start;
}
.card{
    width: 30%;
    border: 1px solid black;
}
.findtitlename{
    font-size: 16px;
    font-weight: 600
}
.carousel{
    height: 280px;
    border-bottom: 1px solid #e8eaec;
    position: relative;
}
.carouselBackground{
    height:125px;
    background-color: #d94038
}
.menuBtndiv{
    width: 50px;
    height: 50px;
    border-radius:50px;
    background: -webkit-linear-gradient(left, #fc5248 , #de403d); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #fc5248 , #de403d); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #fc5248 , #de403d); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #fc5248 , #de403d); /* 标准的语法（必须放在最后） */
    display: flex;
    justify-content: center;
    align-items: center;
}
.menudiv{
    text-align: center;
}
.menudiv p{
    font-size: 12px;
    margin-top: 10px;
}
.menu{
    padding: 0 15px;
    display: flex;
    justify-content:space-between;
    margin-top: 20px
}
.menuBtn{
    border-radius:50%;
    width: 50px;
    height: 50px
}
.swipediv{
    margin-top: -110px
}
.swipe{
    height:150px;
    width: 100%;
    margin: 0 auto
}
.back{
    height: 100%;
    text-align: center
}
.img{
    width:90%;
    height: 150px;
    border-radius:10px
}
</style>
