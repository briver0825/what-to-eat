import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'
import { computed } from "vue";

export const useMenuStore = defineStore('menus-store', () => {
    const menus = ['黄鼠狼鸡公煲', '虾溜达蛙', '卤肥肠饭', '美式培根意面', '酸笋煮鸡爪', '大鸡腿饭', '瑞兴烧鸭', '螺蛳粉']

    const getToday = () => new Date().toISOString().split('T')[0]

    const allMenus = useLocalStorage('all-menus', menus)
    const todayMenu = useLocalStorage<string[]>('today-menu', [])

    const lastUpdateDay = useLocalStorage('last-update-day1', new Date().toISOString().split('T')[0])

    const getRandomElement = (array: string[]): string => {
        var randomIndex = Math.floor(Math.random() * array.length);

        return array[randomIndex];
    }

    const getTodayMenu = () => {
        const menu1 = getRandomElement(allMenus.value)
        const menu2 = getRandomElement(allMenus.value)

        todayMenu.value = [menu1, menu2]
    }

    const todayMenuLength = computed(() => {
        return todayMenu.value.filter(Boolean).length
    })

    // 判断是否是新的一天
    const today = getToday()
    if (lastUpdateDay.value !== today) {
        todayMenu.value = []
    }

    return {
        allMenus,
        todayMenu,
        todayMenuLength,
        getTodayMenu
    }
})
