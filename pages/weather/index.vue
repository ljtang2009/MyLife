<template>
	<view class="app">
		<view class="top_row">
			<view>上海市</view>
			<view>8月28日 周五</view>
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
	export default {
		data() {
			return {

			};
		},
		methods: {
			onShow: () => {
				uniCloud.callFunction({
					name: 'generalAPI',
					data: {
						method: 'getTime',
						params: {
							format: 'M月D日'
						}
					}
				}).then(res => {
					console.log('res', res);
				}).catch(err => {
					console.log('err', err);
				})
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
