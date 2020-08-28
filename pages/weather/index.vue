<template>
	<view class="app">
		<view class="top_row">
			<view>上海市</view>
			<view>{{dateStr}}</view>
		</view>
		<view class="main_info">
			<view>
				<view class="iconfont icon-qingtian" style="font-size: 200rpx;"></view>
				<view>晴</view>
			</view>
			<view>26℃</view>
		</view>


	</view>
</template>

<script>
	const dayjs = require('dayjs');
	require('dayjs/locale/zh-cn');
	dayjs.locale('zh-cn'); // 全局使用

	export default {
		data() {
			return {
				dateStr: '',
			};
		},
		async onLoad() {
			this.dateStr = await this.getDate(); //获取本地日期
			this.getDate({
				sever: true
			}).then(res => {
				this.dateStr = res;
			});
		},
		methods: {
			/**
			 * 获取日期
			 * @param {Object} option
			 * @return {String}
			 */
			async getDate(option) {
				const formatStr = 'M月D日 dddd';
				let tempDateStr = dayjs().format(formatStr);
				if (option && option.sever) {
					tempDateStr = await uniCloud.callFunction({
						name: 'generalAPI',
						data: {
							method: 'getTime',
							params: {
								format: formatStr
							}
						}
					});
					tempDateStr = tempDateStr.result;
				}
				return tempDateStr;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.top_row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.main_info {
		display: flex;
		align-items: center;
		padding-top: 40rpx;

		view {
			flex: 1;
			text-align: center;
		}
	}
</style>
