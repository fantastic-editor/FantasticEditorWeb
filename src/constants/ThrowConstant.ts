import {type Ref, ref} from "vue";
import type {ExceptionDTO} from "@/models/dto/ExceptionDTO";

/**
 * # 全局抛出模态框
 * 用于全局抛出模态框，当需要抛出模态框时，将此值设置为 true，即可抛出模态框；
 */
const globalThrowModal: Ref<boolean> = ref<boolean>(false)

/**
 * # 全局抛出异常
 * 用于全局抛出异常，当需要抛出异常时，将此值设置为异常对象，即可抛出异常；
 */
const globalThrowTrace: Ref<ExceptionDTO> = ref<ExceptionDTO>({} as ExceptionDTO)

export {globalThrowModal, globalThrowTrace}
