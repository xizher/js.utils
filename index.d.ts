/**
 * 对象深拷贝
 * @param {Object} obj Javascript对象
 * @returns {Object} 深拷贝后的对象引用
 */
export declare function deepCopy(obj: Object): Object
/**
 * 获取GUID字符串
 * @returns {String} GUID字符串
 */
export declare function guid(): String
/**
 * 获取当前页面的根地址
 * @returns {String} 根地址字符串
 */
export declare function getRootPath(): String
/**
 * 获取指定范围随机数
 * @param {Number} minValue 最小值
 * @param {Number} maxValue 最大值
 * @returns {Number} 指定范围的随机数
 */
export declare function randomRange(minValue: Number, maxValue: Number): Number
