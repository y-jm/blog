import CodeCopy from "./CodeCopy.vue";
import Vue from "vue";
export default{
    updated(){
        //异步加载，防止阻塞
        setTimeout(()=>{
            let pre=document.querySelectorAll('div[class*="language-"] pre');
            if(!pre) return "";
            pre.forEach(el=>{
                //防止重复写入节点
                if(el.classList.contains("code-copy-el")) return;
                let ComponentClass=Vue.extend(CodeCopy);
                let instance=new ComponentClass();
                instance.code=el.innerText;
                instance.$mount();
                el.classList.add("code-copy-el");
                el.parentNode.appendChild(instance.$el);
                //绑定鼠标悬浮事件（显示copy）
                el.parentNode.addEventListener("mouseover",function(){
                    instance.$el.style.opacity=0.5;
                },false);
                 //绑定鼠标悬浮事件（隐藏copy）
                el.parentNode.addEventListener("mouseout",function(){
                    instance.$el.style.opacity=0;
                },false);
            })
        },100)
    },
}