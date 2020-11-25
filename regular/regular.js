export class RegExpHelper {
  static '非负整数' (val) {
    return /^\d+$/.test(val)
  }
  static '正整数' (val) {
    return /^[0-9]*[1-9][0-9]*$/.test(val)
  }
  static 'email' (val) {
    return /[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val)
  }
  static 'url' (val) {
    return /^[a-zA-z]+:\/\/(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/.test(val)
  }
}

