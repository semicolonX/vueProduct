<template>
	<div class="policyBoard">
		<!--客户信息-->
		<div class="customerInfo">
			<div class="customerTitle">
				<span>姓名 </span>
				<span class="policyTotal">共 2 张保单</span>
			</div>
			<div class="customerBody">
				<div class="cBL">
					<div class="dealTotal">共 3 笔领取交易</div>
					<div>
						金额总计：<span class="moneyTotal"> 5440.34元</span>
					</div>
				</div>
				<div class="cBR" v-on:click="checkAll($event)">全部领取</div>
			</div>
		</div>
		
		<div class="tips" >
			请选择要领取的保单
		</div>
		<div class="policy" v-for="(policyInfo,i) in policyInfos" >
			<div class="policyTitle">
				<span>保单号: </span>
				<span class="policyNum">{{ policyInfo.policyNo }}</span>
			</div>
			<div class="policyBody" v-for="(item,index) in policyInfo.policyInfo"  >
				<div class="policyBtn"  v-bind:class="[{'pBActive' : (item.selected==true)}]" v-on:click="policyBtn(i,index,$event)" >
					
				</div>
				<div class="policyInfo">
					<div class="policyName">
						{{ item.policyName }}
					</div>
					<div class="policyDate">
						<span class="policyEnd">截止日期 {{ item.endDate }}</span>
					</div>
					<div>
						领取方式: 银行转账
					</div>
					<div class="policySum">
						实际金额: {{ item.Smoney }}元
					</div>
					<div class="policyReceive">
						领取金额: <input type="number" class="receive" :value="item.Kmoney" placeholder="请输入" />元
					</div>
				</div>
			</div>
			
		</div>
		
		<div class="bottomFixed">
			<div class="checkAll" v-bind:class="[{'cAActive' : checkAllFlag}]" v-on:click="checkAll($event)">
				
			</div>
			<div class="checkAllW">
				全选&emsp;
			</div>
			<div class="policyChecked">
				<div>
					已选 <span id="checkSum">{{sumBs}}</span> 笔
				</div>
				<div>
					合计 <span id="moneySum">{{sumMoneys}}</span> 元
				</div>
			</div>
			<div class="submit" v-on:click="submitData">
				确&nbsp;定
			</div>
			
		</div>
		
		<div id="example"></div>
		
	</div>
</template>

<script>
	import Vue from 'vue'
	import testData from '../assets/js/testData'
	
	export default {
		data () {
			return {
				policyInfos: testData.testData().policyInfos,
				checkAllFlag: false,
				sumMoneys: 0,
				sumBs: 0,
				msg: 'i am  policyList'
			}
		},
		methods:{
			policyBtn: function(i,index,e){	//单选按钮
				if(this.policyInfos[i].policyInfo[index].selected){
					this.policyInfos[i].policyInfo[index].selected = false;
				}else{
					this.policyInfos[i].policyInfo[index].selected = true;
				}
				
				let pInfoSelect = false;	//按钮是否全部被勾选
				let sumMoney = 0;	//合计 元
				let sumB = 0;	//合计 笔
				
				for (let k = 0 ; k < this.policyInfos.length ; k++) {
					
					let policyInfo = this.policyInfos[k].policyInfo;
					for (let j = 0 ; j < policyInfo.length ; j++) {
						
						if( policyInfo[j].selected == false ){
							pInfoSelect = true;
						}else{
							sumMoney += parseFloat(policyInfo[j].Kmoney);
							sumB ++;
						}
					}
				}
				
				this.sumMoneys= sumMoney.toFixed(2);
				this.sumBs = sumB;
				
				if( pInfoSelect ){
					this.checkAllFlag = false;
				}else{
					this.checkAllFlag = true;
				}
//				console.log(e.target.className)
//				if (e.target.className.indexOf("pBActive") == -1) {
//                  e.target.className = "policyBtn pBActive"; //切换按钮样式
//              }
				
			},
			checkAll: function(e){	//全选按钮
				if(this.checkAllFlag == false){
					this.checkAllFlag = true;
				}else{
					this.checkAllFlag = false;
				}
				
				let sumMoney = 0;	//合计 元
				let sumB = 0;	//合计 笔
				for (let k = 0 ; k < this.policyInfos.length ; k++) {
					
					let policyInfo = this.policyInfos[k].policyInfo;
					for (let j = 0 ; j < policyInfo.length ; j++) {
						
						policyInfo[j].selected = this.checkAllFlag;
						sumMoney += parseFloat(policyInfo[j].Kmoney);
						sumB ++;
					}
				}
				
				if(this.checkAllFlag){
					this.sumMoneys= sumMoney.toFixed(2);
					this.sumBs = sumB;
				}else{
					this.sumMoneys= 0.00;
					this.sumBs = 0;
				}
				
			},
			submitData: function() {
				sessionStorage.setItem("policyInfos", JSON.stringify(this.policyInfos));
                //this.$router.push({path:'/policyInfo'});
                this.$router.push({name:'test',query:{"poIn":this.policyInfos}});
				//window.location.href = '/policyInfo';
			}
		}
		
	}
	
</script>

<style scoped>
	.policyBoard{
		background: rgba(0,0,0,0.1);
		font-size: 14px;
	}
	.customerInfo{
		width: 100%;
		height: 105px;
		color: #666666;
		background-color: white;
	}
	.customerInfo .customerTitle{
		width: 94%;
		margin-left: 6%;
		border-bottom: 1px solid gainsboro;
		height: 35px;
		line-height: 35px;
	}
	.customerInfo .customerTitle .policyTotal{
		float: right;
		margin-right: 6%;
	}
	.customerInfo .customerBody{
		height: 70px;
		width: 94%;
		margin-left: 6%;
	}
	.customerInfo .customerBody .cBL{
		float: left;
		width: 64%;
		height: 60px;
		line-height: 25px;
		margin-top: 10px;
	}
	.customerInfo .customerBody .cBL .moneyTotal{
		font-size: 16px;
	    font-weight: bolder;
	    color: orangered;
	}
	.customerInfo .customerBody .cBR{
	    height: 35px;
	    line-height: 35px;
	    width: 25%;
	    text-align: center;
	    background-color: orangered;
	    border-radius: 5px;
	    float: right;
	    color: white;
	    margin-right: 6%;
	    margin-top: 17px;
	}
	.tips{
		width: 80%;
	    height: 30px;
	    line-height: 30px;
	    margin-top: 10px;
	    margin-left: 6%;
	}
	
	.policy{
	    width: 100%;
	    min-height: 120px;
	    background-color: white;
	    border-top: 1px solid gainsboro;
	    margin-bottom: 15px;
	}
	.policy .policyTitle{
        width: 100%;
        min-height: 40px;
        line-height: 40px;
        border-bottom: 1px solid gainsboro;
        overflow: hidden;
	}
	.policy .policyTitle span:nth-child(1){
		margin-left: 6%;
	}
    .policy .policyBody{
        padding: 10px 0;
        width: 100%;
        height: 125px;
        border-bottom: 1px dashed gainsboro;
        font-size: 13px;
    }
    .policy .policyBody .policyBtn{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid gainsboro;
        margin: 45px 10px;
        float: left; 
    }
    .policy .policyBody .pBActive{
        background-color: orangered;
    }
    .policy .policyBody .policyInfo{
        margin-left: 5px;
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
        border-bottom: 1px solid orangered;
        width: 100px;
        color: orangered;
        font-size: 17px;
        font-weight: bold;
        padding-top: 5px;
    }
    
    .bottomFixed{
	    width: 100%;
	    height: 50px;
	    background-color: rgba(0,0,0,0.5);
	    position: fixed;
	    bottom: 0;
	    font-size: 14px;
	    line-height: 55px;
	    color: white;
	    
	}
	.bottomFixed .checkAll{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin: 13px;
        border: 1px solid white;
        float: left;
    }
    .bottomFixed .cAActive{
        background-color: orangered;
    }
    .bottomFixed .checkAllW{
        float: left;
    }
    .bottomFixed .policyChecked{
        margin-top: 5px;
        float: left;
    }
    .bottomFixed .policyChecked div{
        line-height: 20px;
    }
    .bottomFixed .policyChecked #checkSum,.bottomFixed .policyChecked #moneySum{
        color: aliceblue;
    }
    .bottomFixed .submit{
        width: 100px;
        height: 50px;
        float: right;
        line-height: 50px;
        text-align: center;
        background-color: #D84C29;
        font-size: 17px;
    }
	
	#example{
	    width: 100%;
	    height: 50px;
	}
	
</style>