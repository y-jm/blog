/*
 * @Author: Jank
 * @LastEditors: Jank
 * @Date: 2021-07-26 19:31:27
 * @LastEditTime: 2021-08-01 16:37:41
 * @Description:
 */
export default ({ router }) => {
    /**
     * 路由切换事件处理
     */
    router.beforeEach((to, from, next) => {
        //触发百度的pv统计
        if (typeof _hmt != "undefined") {
            if (to.path) {
                _hmt.push(["_trackPageview", to.fullPath]);
            }
        }
        // continue
        next();
    });
};
