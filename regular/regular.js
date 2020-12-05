export class RegExpHelper {
  static NON_NEGATIVE_INTEGER (val) {
    return /^\d+$/.test(val)
  }
  static POSITION_INTEGER (val) {
    return /^[0-9]*[1-9][0-9]*$/.test(val)
  }
  static EMAIL (val) {
    return /[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val)
  }
  static URL (val) {
    return /^[a-zA-z]+:\/\/(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/.test(val)
  }
  static USERNAME (val) {
    return /^([a-zA-Z0-9_\u4e00-\u9fa5]{2,20})$/.test(val)
  }
  static PASSWORD (val) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(val)
  }
}

