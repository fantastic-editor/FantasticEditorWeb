/**
 * # 基本返回类型
 * 用于返回数据的基本类型，包含输出、状态码、消息、错误消息、数据；
 *
 * @template T 返回数据类型
 * @property {string} output 输出
 * @property {number} code 状态码
 * @property {string} message 消息
 * @property {string} errorMessage 错误消息
 * @property {T} data 数据
 */
export type BaseResponse<T> = {
    output: string;
    code: number;
    message: string;
    errorMessage?: string;
    data?: T;
}
