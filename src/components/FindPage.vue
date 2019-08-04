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
                <div :style="'height:'+screenWidth+'px'" v-for="(card,index) in datalist" :key="index" class="card">
                    <img
                        class="cardImg"
                        width="100%"
                        :src="card.picUrl"
                    />
                    <p>{{card.name}}</p>
                </div>
            </div>
        </div>
        <div  class="findbody">
            <div class="findtitle">
                <div v-show="status">
                    <label  class="findtitlename">新碟</label>
                    <label class="titletwo">|</label>
                    <label @click="newDisc" class="findtitletwo">新歌</label>
                </div>
                <div v-show="!status">
                    <label @click="newDisc" class="findtitletwo">新碟</label>
                    <label class="titletwo">|</label>
                    <label class="findtitlename">新歌</label>
                </div>
                <van-button v-show="status" plain  size="small" style="color:black;border-color:#e8eaec;border-radius:50px" ><span>更多新碟</span></van-button>
                <van-button v-show="!status" plain  size="small" style="color:black;border-color:#e8eaec;border-radius:50px" ><span>推荐新歌</span></van-button>
            </div>
            <div v-show="status" class="findbodycard">
                <div :style="'height:'+screenWidth+'px'" v-for="(card,index) in discListThree" :key="index" class="card">
                    <img
                        class="cardImg"
                        width="100%"
                        :src="card.picUrl"
                    />
                    <p>{{card.name}}</p>
                </div>
            </div>
            <div v-show="!status" class="findbodycard">
                <div :style="'height:'+screenWidth+'px'" v-for="(card,index) in songListThree" :key="index" class="card">
                    <img
                        class="cardImg"
                        width="100%"
                        :src="card.album.picUrl"
                    />
                    <p>{{card.album.name}}</p>
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
            status: true,
            images: [
                'https://p1.music.126.net/J7GkNCPr5ro6v-cFMFPoGg==/109951164259290772.jpg',
                'https://p1.music.126.net/csNfhmB5B-ce22eTUwLTUg==/109951164258219899.jpg',
                'https://p1.music.126.net/YUXGoDab5klimOkcNgHBoA==/109951164259280309.jpg',
                'https://p1.music.126.net/836iP64Wd0pVstrsTjYsqQ==/109951164259305108.jpg'
            ],
            screenWidth: '',
            datalist: [],
            discList: [],
            discListThree: [],
            songList: [],
            songListThree: [],
        }
    },
    methods:{
        getDate(){
            axios.get('/personalized').then( (response)=>{
                this.datalist = response.data.result;
            })
            axios.get('/top/album').then((response)=>{
                this.discList = response.data.albums;
                for(var i = 0 ; i< 3 ; i++){
                    this.discListThree[i] = this.discList[i];
                }
            })
            axios.get('/top/songs').then((response)=>{
                console.log(response.data.data);
                this.songList = response.data.data;
                for(var i = 0 ; i< 3 ; i++){
                    this.songListThree[i] = this.songList[i];
                }
                console.log(this.songListThree);
            })
        },
        newDisc(){
            this.status = !this.status;
        }
    },
    mounted(){
        window.onresize = () => {
            return (() => {
                this.screenWidth = (document.body.clientWidth+60)/3;
                console.log("mounted:"+(document.body.clientWidth)/3);
            })();
        };
        this.getDate();
    },
    created(){
        console.log("created:"+(document.body.clientWidth)/3);
        this.screenWidth = (document.body.clientWidth+60)/3;
        this.getDate();
    }
}
</script>
<style scoped>
.card p{
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.cardImg{
    border-radius:5px
}
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
    margin-bottom:20px
}
.titletwo{
    color: #e8eaec
}
.findtitlename{
    font-size: 16px;
    font-weight: 600
}
.findtitletwo{
    color: grey;
    font-size: 14px
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
