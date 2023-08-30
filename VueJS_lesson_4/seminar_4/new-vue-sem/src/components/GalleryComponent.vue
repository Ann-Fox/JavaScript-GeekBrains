<template>
    <img class="big" :src="selectImg">
    <div>
<img @click="selectPrincess(princess)" v-for="princess in princesses" :key="princess.id" :src="princess">
    </div>
</template>

<script>
import princess1 from '@/assets/img/1.jpg'
import princess2 from '@/assets/img/2.jpg'
import princess3 from '@/assets/img/3.jpg'
import princess4 from '@/assets/img/4.jpg'
    export default {
        name: "GalleryComponent",
      
        data() {
            return {
                selectImg: '',
                princesses: {
                    princess1,
                    princess2,
                    princess3,
                    princess4
                                   }
            }
        },
        methods: {
            selectPrincess(princess){
                this.selectImg = princess;
            }
        },
    }
</script>

<style scoped>
div {
    display: flex;
    gap: 10px;
}

img {
    width: 150px;
}

.big {
    width: 300px;
}
</style>

<!-- Создайте компонент галереи изображений, который будет отображать одно большое изображения и под ним будет находиться три мини изображения, при клике на любое мини изображение оно будет отображаться вместо большого изображения. -->