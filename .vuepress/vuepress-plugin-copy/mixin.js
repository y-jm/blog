import CodeCopy from "./CodeCopy.vue";
import Vue from "vue";
export default{
    updated(){
        //异步加载，防止阻塞
        setTimeout(()=>{
            let pre=document.querySelectorAll('div[class*="language-"] pre');
            pre.forEach(el=>{
                //防止重复写入节点
                if(el.classList.contains("code-copy-el")) return;
                let ComponentClass=Vue.extend(CodeCopy);
                let instance=new ComponentClass();
                instance.code=el.innerText;
                instance.$mount();
                el.classList.add("code-copy-el");
                el.appendChild(instance.$el);
            })
        },100)
    },
}