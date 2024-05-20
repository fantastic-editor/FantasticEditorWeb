import {type Ref, ref} from "vue";

/**
 * # 全局抛出模态框
 * 用于全局抛出模态框，当需要抛出模态框时，将此值设置为 true，即可抛出模态框；
 */
const globalThrowModal: Ref<boolean> = ref<boolean>(false)

export {globalThrowModal}
