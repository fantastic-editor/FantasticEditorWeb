import {BaseApi, MethodType} from "@/apis/BaseApi";
import type {BaseResponse} from "@/models/BaseResponse";
import type {InfoWebDTO} from "@/models/dto/info/InfoWebDTO";

/**
 * # 全局信息接口
 * 用于获取全局信息，包含全局信息；包括站点的名称、描述、关键字、备案号等基本信息；
 *
 * @returns Promise<BaseResponse<null>> 全局信息
 */
function GlobalInfoApi(): Promise<BaseResponse<InfoWebDTO>> {
    return BaseApi<InfoWebDTO>(
        MethodType.GET,
        "/info",
        null,
        null,
        null,
        null
    );
}

function DebugApi(): Promise<BaseResponse<any>> {
    return BaseApi<null>(
        MethodType.GET,
        "/debug",
        null,
        null,
        null,
        null
    );
}

export {GlobalInfoApi, DebugApi}
