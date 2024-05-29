/**
 * # 异常数据传输对象
 * 异常数据传输对象，用于记录异常信息；
 *
 * @property cause 异常原因
 * @property stackTrace 堆栈跟踪
 */
export type ExceptionDTO = {
    cause?: string;
    stackTrace: StackTrace[];
}

/**
 * # 堆栈跟踪
 * 堆栈跟踪，用于记录异常的堆栈信息；
 *
 * @property classLoaderName 类加载器名称
 * @property moduleName 模块名称
 * @property moduleVersion 模块版本
 * @property methodName 方法名称
 * @property fileName 文件名称
 * @property lineNumber 行号
 * @property nativeMethod 是否为本地方法
 * @property className 类名称
 */
export type StackTrace = {
    classLoaderName?: string;
    moduleName?: string;
    moduleVersion?: string;
    methodName: string;
    fileName: string;
    lineNumber: number;
    nativeMethod: boolean;
    className: string;
}
