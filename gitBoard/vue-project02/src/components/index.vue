<template>
	<div class="index-warp">
		<div class="trunk">
			<template v-for="productList in productLists">
				<h6 class="trunkHead">{{ productList.pLTitle }}</h6>
				<ul class="trunkBody">
					<li v-for="item in productList.pLList">
						<router-link :to="{path:'/policyList',params:{ref:'item.refA'}}">{{ item.name }}</router-link>
						<!--<a :href="'/policyList?ref=' + item.refA ">{{ item.name }}</a>--> 
					</li>
				</ul>
			</template>
			
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import testData from '../assets/js/testData'
	
	//console.log(testData.testData().productLists)
	
	let productLists = testData.testData().productLists;
	productLists[0].pLList.sort(sortPrem('name'))
	productLists[1].pLList.sort(sortPrem('name'))
	productLists[2].pLList.sort(sortPrem('name'))
	
	export default {
		data () {
			return {
				productLists: testData.testData().productLists,
				msg: 'i am  policyList'
			}
		}
	}
	
	//根据一个字段实现数组的排序   降序效果从底到高
	function sortPrem(prem){	
		return function (a,b){
			var value1 = a[prem].length;
			var value2 = b[prem].length;
			if(value1 == ""){
				value1 =0;
			}
			if(value2 == ""){
				value2 =0;
			}
			if(value1 > value2){
				return 1;
			}
			else if(value1 < value2){
				return -1;
			}
			else{
				//这里为了防止都是0的时候数据再次点击出现二次排序，设置了一个预设想，将相同的数据和>相同处理。
				return 0;
			}
		}
	}
</script>

<style scoped>
	a{
		text-decoration: none;
		color: #333333;
	}
	.index-warp{
		width: 94%;
		height: 100%;
		padding-left: 6%;
		min-height: 30px;
		float: left;
		background-color: white;
		font-size: 14px;
	}
	.index-warp .trunkHead{
		width: 100%;
		float: left;
		height: 30px;
		line-height: 30px;
		font-size: 17px;
		margin-top: 15px;
	}
	.trunkHead:nth-child(1){
		color: #36E180;
	}
	.trunkHead:nth-child(3){
		color: orange;
	}
	.trunkHead:nth-child(5){
		color: #F41811;
	}
	.index-warp .trunkBody{
		width: 100%;
		min-height: 40px;
		float: left;
	}
	.index-warp li{
		width: 20%;
		margin-right: 4%;
		min-height: 30px;
		line-height: 20px;
		float: left;
		border: 1px dashed green;
		border-radius: 5px;
		margin-top: 10px;
		text-align: center;
		font-size: 14px;
		color: #333333;
		display: table-cell;
	}
	.trunkBody:nth-child(2) li{
		border-color: #36E180;
	}
	.trunkBody:nth-child(4) li{
		border-color: orange;
	}
	.trunkBody:nth-child(6) li{
		border-color: #F41811;
	}
</style>