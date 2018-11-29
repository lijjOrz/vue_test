var vm = new Vue ({
    el:'#bodybg',
    data:{
        show: false,
        backgroundstyle:{
            backgroundImage: 'url(../infinity/images/bg.jpg)',
            backgroundRrepeat: 'no-repeat',
            backgroundSize: '100%' + ' '+'100%',
            height: window.innerHeight + 'px',
        },
        items:[
            {message: '新闻'},
            {message: '图片'},
            {message: '网页'},
            {message: '视频'},
            {message: '地图'}
        ],
        cricles: [],
        onoffkg: false,
        onoffkgz: false,
        onoffkgs: true,
        radius: 100,
        touming:100,
        colorcricles:[
            {onoffcolor: true, color: '#ccc'},
            {onoffcolor: false, color: 'red'},
            {onoffcolor: false, color: '#02abfe'},
            {onoffcolor: false, color: '#00de79'},
        ],
        wenzicolor:'#ccc',
    },
    methods:{
        showon:function(){
            this.show = true
        },
        showoff:function(){
            this.show = false
        },
        onoff:function(){
           this.onoffkg = !this.onoffkg
        },
        onoffz:function(){
            this.onoffkgz = !this.onoffkgz
        },
        onoffs:function(){
            this.onoffkgs = !this.onoffkgs
        },
        onoffcolor:function(val){
            for(var i = 0; i < this.colorcricles.length; i++ ){
                this.colorcricles[i].onoffcolor = false
            }
            this.colorcricles[val].onoffcolor = true
            this.wenzicolor = this.colorcricles[val].color
        }
    },
    mounted: function(){
        var criclenumber = []
        criclenumber.length = 6
        this.cricles = this.cricles.concat(criclenumber)

        // this.arr = this.arr.concat(anotherArr);
    }
})