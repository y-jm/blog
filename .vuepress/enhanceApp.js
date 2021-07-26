/*
 * @Author: Jank
 * @LastEditors: Jank
 * @Date: 2021-07-26 19:31:27
 * @LastEditTime: 2021-07-26 19:31:35
 * @Description:
 */
export default ({ router }) => {
    /**
     * 路由切换事件处理
     */
    router.beforeEach((to, from, next) => {
        console.log("切换路由", to.fullPath, from.fullPath);
        //触发百度的pv统计
        if (typeof _hmt != "undefined") {
            if (to.path) {
                _hmt.push(["_trackPageview", to.fullPath]);
                console.log("上报百度统计", to.fullPath);
            }
        }

        // continue
        next();
    });
};
