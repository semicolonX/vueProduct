<template>
	<div id="layout">
		<div class="app-header">
			<span class="goBack">
				返回
			</span>
			<h2 class="head">{{mag}}</h2>
		</div>
		
		<div class="app-content">
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		data () {
			return {
				mag: 'i am layout'
			}
		}
	}
</script>

<style>
	body,html{
		width: 100%;
		height: 100%;
	}
	.app-header{
		width: 100%;
		height: 45px;
		line-height: 45px;
		background-color: #2C3E50;
		color: white;
	}
	.app-header .goBack, .app-header .head{
		float: left;
		
	}
	.app-header .goBack{
		margin-left: 6%;
		width: 10%;
		font-size: 14px;
	}
	.app-header .head{
		width: 66%;
		text-align: center;
		font-size: 17px;
	}
	
</style>