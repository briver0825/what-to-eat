<script setup lang='ts'>
import StreamlineEmojisFaceSavoringFood from '@/components/icon/StreamlineEmojisFaceSavoringFood.vue'

import { useMenuStore } from '@/store/menus';
import { ref } from 'vue';

const menuStore = useMenuStore();

const resultShow = ref(false);

const openResult = () => {
  if (!menuStore.todayMenuLength) {
    menuStore.getTodayMenu()
  }
  resultShow.value = true
  
};

</script>
<template>
  <div class="max-h-screen bg-white px-8 box-border max-w-600px mx-auto">
    <h1 class="text-center text-xl pt-10 text-gray-700">今天吃啥子？</h1>
    <div class="text-center text-xs text-gray-500 leading-6">
      亲爱的晶晶小公主，今天又不知道吃点什么啦？ <br> 让我来给你点建议叭～
    </div>

    <div class="py-8">
      <img src="@/assets/banner.png" class="w-full" alt="">
    </div>

    <div class="px-6 mt-4">
      <van-button type="primary" block class="font-bold !rounded-lg" v-if="menuStore.todayMenuLength" @click="openResult">看看今天吃点啥</van-button>
      <van-button type="primary" block class="font-bold !rounded-lg" v-else @click="openResult">帮本公主选！</van-button>
    </div>
  </div>  

  <van-dialog v-model:show="resultShow" title="今天吃这个" :showConfirmButton="false">
    <div class="p-4">
      <div class="pb-4">
        <ul class="leading-7 text-center">
          <li>
            午餐：{{ menuStore.todayMenu[0] }}
          </li>
          <li>
            晚餐：{{ menuStore.todayMenu[1] }}
          </li>
        </ul>
      </div>

      <div class="px-4">
        <van-button type="primary" block class="font-bold !rounded-lg" @click="resultShow = false">
          <div class="flex items-center">
            <span class="pr-1">好的，本公主收到</span>
            <StreamlineEmojisFaceSavoringFood/>
          </div>
        </van-button>
      </div>
    </div>
  </van-dialog>
</template>
