import {type Ref, ref} from "vue";
import type {InfoWebDTO} from "@/models/dto/info/InfoWebDTO";
import type {LocalWebDTO} from "@/models/dto/info/LocalWebDTO";

/**
 * # 全局信息
 * 用于获取全局信息，包含全局信息；包括站点的名称、描述、关键字、备案号等基本信息；
 */
const getGlobalInfo: Ref<InfoWebDTO> = ref<InfoWebDTO>({} as InfoWebDTO);

/**
 * # 本地信息
 * 用于存储网站的一些基本信息的变量信息；
 */
const getLocalInfo: Ref<LocalWebDTO> = ref<LocalWebDTO>({} as LocalWebDTO);

export {getGlobalInfo, getLocalInfo}
