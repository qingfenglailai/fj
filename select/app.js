
new Vue({
    el:"#root",
    data:{
        datas:[
            {
                id:1,
                title:5456465,
            },
            {
                id:2,
                title:222222,
            },
            {
                id:3,
                title:84564545,
            },
        ],
        state:false,
        title:"",
    },
    methods:{
        aa(){
            this.state=true;
        },
        bb(val){
            this.title = val;
            this.state=false;
        }
    }
})