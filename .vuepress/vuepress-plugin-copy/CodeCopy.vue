<template>
    <span class="code-copy-btn" @click="copyToClipboard">{{buttonText}}</span>
</template>
<script>
export default{
    data(){
        return {
            buttonText:copyButtonText
        }
    },
    methods:{
        copyToClipboard(el){
            this.setClipboard(this.code,this.setText)
        },
        setClipboard(code,cb){
            if(navigator.clipboard){
                navigator.clipboard.writeText(code).then(cb)
            }else{
                let copyEL=document.createElement("textarea");
                document.body.appendChild(copyEL);
                copyEL.value=code;
                copyEL.select();
                document.execCommand("copy");
                copyEL.remove();
                cb();

            }
        },
        setText(){
            this.buttonText=copiedButtonText;
            setTimeout(()=>{
                this.buttonText=copyButtonText;
            },1000);
        }
    }

}
</script>
<style>
    .code-copy-btn{
        position: absolute;
        bottom: 10px;
        right: 7.5px;
        opacity: 0;
        cursor: pointer;
        font-size: 14px;
        z-index: 2;
    }
    .code-copy-btn:hover{
        opacity: 1;
    }
</style>