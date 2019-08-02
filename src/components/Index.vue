<template>
    <div>
        <div class="father">
            <div class="navChile">
                <van-row >
                    <van-col span="4">
                        <div class="icon">
                            <van-icon color="#fff" size="25px" name="wap-nav" />
                        </div>
                    </van-col>
                    <van-col span="16">
                        <ul class="nav_tab">
                            <router-link v-for="(item,index) in list" :key="index" :to="item.router" tag="li">
                                <div  :class="{'mypage':item.mypage}"  @click="aa(index)">
                                    <span>{{item.name}}</span>
                                </div>
                            </router-link>
                        </ul>
                    </van-col>
                    <van-col span="4">
                        <div class="icon">
                            <van-icon style="margin-top:3px;" color="#fff" name="search" size="20px"/>
                        </div>
                    </van-col>
                </van-row>
            </div>
            <div style="margin-top:46px">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[
                {name:'我的',mypage:false,router:'./userPage'},
                {name:'发现',mypage:true,router:'./findPage'},
                {name:'云村',mypage:false,router:'./findPage'},
                {name:'视频',mypage:false,router:'./findPage'}
            ],
            active: '',
            isActive:false,
            mypage:true,
            colorStyle: false,
            index: 'findpage',
            
        }
    },
    methods: {
        onClickLeft() {
            this.$toast('返回');
        },
        onClickRight() {
            this.$toast('按钮');
        },
        aa(index){
            console.log(index);
            this.list[index].mypage = true;
            for(var i=0 ; i < this.list.length ; i++){
                if(i!=index){
                    this.list[i].mypage = false;
                }

            }
        }
    },
    
}
</script>
<style scoped>
.father{
    position: relative;
}
.navChile{
    height:46px;
    background-color:#d94038;
    position: fixed;
    width: 100%;
    top: 0
}
.nav_tab{
    display: flex;
    justify-content: center;
    color:#e2877e;
    height: 46px;
    line-height: 46px;
}
.nav_tab li{
    width: 20%;
    text-align: center;
}
.icon{
    display: flex;
    align-items: center;
    align-content: center;
    height: 46px;
    justify-content: center
}
.mypage{
    color: #fff
}
.colorStyle{
    color: #e2877e
}
</style>
