<template>
    <div>
        <div class="list" v-for="( item, index ) in data" :key="index">
            <div class="tits">{{item.name}}</div>
            <div class="flex">
                <div class="jdt">
                    <div class="jdt_k">
                        <div class="jdt_bor" :style="{width: item.percent+'%' ,background:item.kcolor}">
                          <!-- <span class="jdt_nub">75%</span> -->
                        </div>
                    </div>
                </div>
                <div class="nubs">{{item.num}}</div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'PieChart',
    props:['data'],
    mounted() {
   
    },
    methods: {
      
    }
};
</script>



<style >
.list{
    margin-top: 2px;
}
.flex{
    display: flex;
    align-items: center;
}
.jdt{
    width: 100%;
    height: 10px;
}
.tits{
    font-size: 12px;
    margin-top:6px;
}
.nubs{
    font-size:12px;
    margin-left: 2px;
    font-family:fg;
}
.jdt_k {
    width: 100%;
    background-color: rgba(0, 130, 255, .38);
    border-radius: 6px;
    overflow: hidden;
}
   
.jdt_bor {
    height: 10px;
    border-radius: 6px;
    transition: width 1s ease-in-out;
    position: relative;
    width: 0;
}
  
   
.jdt_nub {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: white;
    font-size: 14px;
}
</style>
