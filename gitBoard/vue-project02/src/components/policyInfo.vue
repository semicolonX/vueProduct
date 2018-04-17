<template>
	<div class="pInfoBoard">
		<div id="policy">
            <div class="policy" v-for="policyInfo in policyInfos" v-show="policyInfo.policyInfo.length">
				<div class="policyTitle">
					<span>保单号: </span>
					<span class="policyNum">{{ policyInfo.policyNo }}</span>
				</div>
				<div class="policyBody" v-for="item in policyInfo.policyInfo">
					<div class="policyInfo">
						<div class="policyName">
							{{ item.policyName }}
						</div>
						<div class="policyDate">
							<span class="policyEnd">截止日期：{{ item.endDate }}</span>
						</div>
						<div class="policyMoney">
							本金： {{ item.Smoney }}元
						</div>
						<div class="policyReceive">
							领取金额： <span class="receive">{{ item.Kmoney }}</span>元
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	//let policyInfos = sessionStorage.getItem('policyInfos');
	
	
	
	export default {
		data () {
			return {
				policyInfos: ''
			}
		},
        mounted:function(){
            // 取到路由带过来的参数 
            let routerParams = this.$route.params.poIn;
    
            if(!routerParams){
               // routerParams = [];
                routerParams = JSON.parse(sessionStorage.getItem('policyInfos'));
            }
            
            for (let i = 0 ; i < routerParams.length ; i++) {
                let item = routerParams[i].policyInfo;
                for (let j = 0 ; j < item.length ; j++) {
                    if(item[j].selected == false){
                        item.splice(j--,1);
                    }
                }
            }
            console.log(routerParams);
            // 将数据放在当前组件的数据内
            this.policyInfos = routerParams;
        }
	}
</script>

<style scoped>
	.pInfoBoard{
		background-color: rgba(0,0,0,0.1);
	    font-size: 14px;
	}
	.policy{
	    width: 100%;
	    min-height: 120px;
	    font-size: 14px;
	    background-color: white;
	    border-top: 1px solid gainsboro;
	    margin-bottom: 15px;
	}
	.policy .policyTitle{
        width: 100%;
        min-height: 40px;
        line-height: 40px;
        width: 355px;
        padding: 0 6%;
        border-bottom: 1px solid gainsboro;
    }
    .policy .policyBody{
        padding: 10px 0;
        width: 100%;
        height: 100px;
        border-bottom: 1px dashed gainsboro;
        
    }
    .policy .policyBody .policyBtn{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid gainsboro;
        margin: 35px 10px;
        float: left; 
    }
    .policy .policyBody .pBActive{
        background-color: orangered;
    }
    .policy .policyBody .policyInfo{
        margin-left: 6%;
        float: left;
        
    }
    .policy .policyBody .policyInfo div{
        line-height: 25px;
    }
    .policy .policyBody .policyInfo .policyName{
        color: orangered;
    }
    .policy .policyBody .policyInfo .receive{
        border: none;
        width: 100px;
        color: orangered;
        font-size: 17px;
        font-weight: bold;
        padding-top: 5px;
    }
</style>