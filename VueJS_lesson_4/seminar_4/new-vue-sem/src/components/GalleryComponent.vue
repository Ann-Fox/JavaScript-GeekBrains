<template>
    <img class="big" :src="selectImg">
    <div>
<img @click="selectPrincess(princess)" v-for="princess in princesses" :key="princess.id" :src="princess">
    </div>
</template>

<script>
    export default {
        name: "GalleryComponent",
      
        data() {
            return {
                selectImg: '',
                princesses: {
                    princess1: "@/assets/img/1.jpg",
                    princess2: "./../assets/img/2.jpg",
                    princess3: "./../assets/img/3.jpg",
                    princess4: './../assets/img/4.jpg',
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
    height: 100%;
}

.big {
    width: 300px;
    height: 100%;
}
</style>

<!-- Создайте компонент галереи изображений, который будет отображать одно большое изображения и под ним будет находиться три мини изображения, при клике на любое мини изображение оно будет отображаться вместо большого изображения. -->