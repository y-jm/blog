const path=require("path");
module.exports=(options,ctx)=>{
    return {
        name:"vuepress-plugin-copy",
        define:{
            copyButtonText:options.copyButtonText || "Copy",
            copiedButtonText:options.copiedButtonText || "Copied!",
        },
        clientRootMixin: path.resolve(__dirname,"mixin.js")
    }
}