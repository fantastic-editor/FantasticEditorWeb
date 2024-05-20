/**
 * # 网站信息数据传输对象
 * 网站信息数据传输对象，用于返回网站信息的数据；
 */
export type InfoWebDTO = {
    /**
     * 网站标题
     */
    title: string;
    /**
     * 网站副标题
     */
    subTitle: string;
    /**
     * 网站图标
     */
    webIcon: string;
    /**
     * 网站描述
     */
    webDescription: string;
    /**
     * 网站关键字
     */
    webKeywords: string;
    /**
     * 网站版权
     */
    webCopyRight: string;
}
