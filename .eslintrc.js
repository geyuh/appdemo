module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 2, //开启eslint检测
    // quotes: [2, 'double'], //使用双引号
    'no-dupe-args': 2, //禁止在 function 定义中出现重复的参数
    'no-dupe-keys': 2, //禁止在对象字面量中出现重复的键
    'react-native/no-inline-styles': 0, //禁止行内样式
    // 强制类型后面要有一个","
    'flowtype/delimiter-dangle': [2, 'only-multiline'],
    // 在 : 后强制加空格
    'flowtype/space-after-type-colon': [2, 'always'],
    // 在 | & 符号中,强制加空格
    'flowtype/union-intersection-spacing': [2, 'always'],
    // 对象展开时总是要添加逗号，一行时行末不需要逗号
    // 'comma-dangle': [2, 'never'],
    //缩进用两个空格
    // indent: ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    semi: [2, 'never'],
  },
}
