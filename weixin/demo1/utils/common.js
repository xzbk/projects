function hello(user){
    return '欢迎回来：+${user}';
}
function back(user) {
  return '欢迎下次再来：${user}';
}
module.exports.hello=hello;
exports.back=back;