let testData = {
	productLists: [
		{
			pLTitle: '领取类',
			pLList: [
				{
					'name':'红利领取',
					'refA':'sdf1'
				},
				{
					'name':'生存金领取',
					'refA':'sdf2'
				},
				{
					'name':'万能险部分领取',
					'refA':'sdf3'
				},
				{
					'name':'投连险随时领取',
					'refA':'sdf4'
				},
				{
					'name':'满期金贴补',
					'refA':'sdf5'
				}
			]
		},
		{
			pLTitle: '信息变更类',
			pLList: [
				{
					'name':'投保人资料变更',
					'refA':'sdf2'
				},
				{
					'name':'投保人变更',
					'refA':'sdf2'
				},
				{
					'name':'客户联系方式变更',
					'refA':'sdf3'
				},
				{
					'name':'客户基本资料变更',
					'refA':'sdf4'
				},
				{
					'name':'受益人及受益人资料变更',
					'refA':'sdf5'
				},
				{
					'name':'职业类别变更',
					'refA':'sdf3'
				},
				{
					'name':'客户重要资料变更(保单层)',
					'refA':'sdf4'
				},
				{
					'name':'客户重要资料变更(客户层)',
					'refA':'sdf5'
				}
			]
		},
		{
			pLTitle: '保单变更类',
			pLList: [
				{
					'name':'增加附加特约责任',
					'refA':'sdf2'
				},
				{
					'name':'红利领取方式变更',
					'refA':'sdf2'
				},
				{
					'name':'保险合同效力确认及签名变更',
					'refA':'sdf3'
				},
				{
					'name':'附加特约责任终止',
					'refA':'sdf4'
				},
				{
					'name':'续保方式变更',
					'refA':'sdf5'
				},
				{
					'name':'交费期间变更',
					'refA':'sdf3'
				},
				{
					'name':'领取年龄变更',
					'refA':'sdf4'
				},
				{
					'name':'生存金领取转账授权及取消',
					'refA':'sdf5'
				},
				{
					'name':'领取方式变更',
					'refA':'sdf2'
				},
				{
					'name':'补充告知',
					'refA':'sdf3'
				},
				{
					'name':'基本保额增加',
					'refA':'sdf4'
				},
				{
					'name':'保单补发',
					'refA':'sdf5'
				},
				{
					'name':'新增附加险',
					'refA':'sdf3'
				},
				{
					'name':'提前交清',
					'refA':'sdf4'
				},
				{
					'name':'保单挂失与挂失解除',
					'refA':'sdf5'
				}
			]
		}
	],
	policyInfos:[
		{
			'policyNo':'23345JDH87HCK9836278',
			'policyInfo':[
				{
					'policyName':'民生今生无忧年金保险(万能型)',
					'policyNumber':'114402',
					'endDate':'2018-11-01',
					'Kmoney':'1810.11',
					'Smoney':'1810.11',
					'selected':false
				}
			]
		},
		{
			'policyNo':'23345JDH87HCK9836279',
			'policyInfo':[
				{
					'policyName':'富贵鑫盈',
					'policyNumber':'114411',
					'endDate':'2018-11-01',
					'Kmoney':'1820.12',
					'Smoney':'1820.12',
					'selected':false
				},
				{
					'policyName':'民生今生无忧提前给付重大保险',
					'policyNumber':'114403',
					'endDate':'2018-11-01',
					'Kmoney':'1810.11',
					'Smoney':'1810.11',
					'selected':false
				}
			]
		}
	]
}

export default {
	name: 'testData',
    testData: function(){
        return testData
    }
}
