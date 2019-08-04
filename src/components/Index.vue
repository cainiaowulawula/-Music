<template>
    <div>
        <div class="father">
            <div class="navChile">
                <van-row >
                    <van-col span="4">
                        <div class="icon">
                            <van-icon color="#fff" size="25px" name="wap-nav" @click="showPopup"/>
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
        <van-popup
                v-model="show"
                position="left"
                :style="{ width: '80%' ,height: '100%'}"
        >
        <div class="leftmenu">
            <div class="menuhead">
                <img src="../assets/logo.png" class="head_portrait"/>
                <div class="userMessage">
                    <div>
                        <span>忧郁的皮皮虾</span>
                        <van-tag round>Lv.4</van-tag>
                    </div>
                    <div>
                        <van-button plain  size="small" style="color:grey;border-color:grey;border-radius:50px;background-color:#e8eaec" ><span>已签到></span></van-button>
                    </div>
                </div>
            </div>
            <div class="wheel">
                <div class="wheelleft">
                    <p class="wheelvip">开通黑胶VIP</p>
                    <p class="wheelmoney">新客仅5元</p>
                </div>
                <div class="wheelcenter">|</div>
                <div class="wheelright">免费领福利</div>
            </div>
            <div class="bottommenu">
                <van-cell title="附近的人" icon="location-o" />
                <van-cell title="我的订单" icon="cart-o" />
                <van-cell title="扫一扫" icon="scan" />
                <van-cell title="音乐闹钟" icon="clock-o" />
                <van-cell title="音乐云盘" icon="exchange" />
                
            </div>
            <div class="bottommenus">
                <van-cell title="设置" icon="apps-o" />
                <van-cell title="退出" icon="replay" />
            </div>
        </div>
        </van-popup>
    </div>
</template>
<script>
export default {
    data(){
        return {
            show: false,
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
        showPopup() {
            this.show = true;
        },
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
.bottommenu{
    margin: 60px 0 0 0;
    border-top: 1px solid #e9edec;
    padding: 0 20px;
}
.bottommenus{
    margin: 10px 0 0 0;
    border-top: 1px solid #e9edec;
    padding: 0 20px;
}
.leftmenu{
    position: relative;
}
.wheelleft{
    height: 70px;
    margin: 15px 0 0 10px;
}
.wheelcenter{
    font-size: 30px;
    margin: 15px 0 0 -20px;
    color:rgba(0, 0, 0, 0.3)
}
.wheelright{
    color: #fff;
    margin: 25px 10px 0 0;
    font-size: 13px
}
.wheelvip{
    font-size: 16px;
    color: bisque
}
.wheelmoney{
    color: darkgrey;
    font-size: 12px;
}
.wheel{
    width: 86%;
    height:70px;
    border-radius: 5px;
    margin: -30px auto;
    background: -webkit-linear-gradient(left, #0e130f , #363634); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #0e130f , #363634); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #0e130f , #363634); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #0e130f , #363634); /* 标准的语法（必须放在最后） */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    
}
.userMessage{
    display: flex;
    justify-content: space-between;
    margin-top: 20px
}
.menuhead{
    height: 180px;
    padding: 20px;
    background-color: #e9edec
}
.usertab{
    background-color: gray;
    border-radius:10px;
    width: auto
}
.head_portrait{
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: #fff;
    margin-top: 8%
}
.navChile{
    height:46px;
    background-color:#d94038;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2000;
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
