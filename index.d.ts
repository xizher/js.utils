/**
 * 对象深拷贝
 * @param {Object} obj Javascript对象
 * @returns {Object} 深拷贝后的对象引用
 */
export declare function deepCopy (obj: Object): Object
/**
 * 获取GUID字符串
 * @returns {String} GUID字符串
 */
export declare function guid (): String
/**
 * 获取当前页面的根地址
 * @returns {String} 根地址字符串
 */
export declare function getRootPath (): String
/**
 * 获取指定范围随机数
 * @param {Number} minValue 最小值
 * @param {Number} maxValue 最大值
 * @returns {Number} 指定范围的随机数
 */
export declare function randomRange (minValue: Number, maxValue: Number): Number

/**
 * 加密算法
 * @param str 需要加密的字符串
 * @returns 加密后的字符串
 */
export declare function enCrypto (str: string): string

/**
 * 解密算法
 * @param str 需要解密的字符串
 * @returns 解密后的字符串
 */
export declare function deCrypto (str: string): string

/**
 * Crypto加密解密配置
 * @param options 配置信息
 */
export declare function setCryptoConfig (options: {
  key: string, iv: string
}) : void

/**
 * 设置cookie
 * @param key cookid键
 * @param value cookie值
 * @param options cookie过期事件配置
 */
export declare function setCookie (key: string, value: string, options: {
  days?: number, hours?: number, minutes?: number
}) : void

/**
 * 删除cookie
 * @param key cookie键
 */
export declare function delCookie (key: string) : void

/**
 * 获取cookie
 * @param key cookie键
 */
export declare function getCookie (key) : string

export declare class RegExpHelper {
  static '非负整数' (val: any) : boolean
  static '正整数' (val: any) : boolean
  static 'email' (val: any) : boolean
  static 'url' (val: any) : boolean
}
