import Mock from 'mockjs';

// const foundData = (username) => {
//   let data;
//   if (username == 'admin') {
//     data = {
//       //将请求json格式返回
//       code: 200,
//       data: {
//         user: {
//           id: '1',
//           username: '张三',
//           menu: [],
//         },
//       },
//     };
//   }
//   tableListData = data;
//   return data;
// };
// export default Mock.mock('/login','post',(req,res) {
//     res.json(foundData(req.body.username))
// })
export default Mock.mock('/login', 'post', {
  success: true,
  message: '成功',
  data: {
    //将请求json格式返回
    code: 200,
    data: {
      user: {
        id: '1',
        username: '张三',
      },
    },
  },
});
