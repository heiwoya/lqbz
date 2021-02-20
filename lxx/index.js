'use strict';
exports.main_handler = async (event, context, callback) => {
  //解决云函数热启动问题
  delete require.cache[require.resolve('./youth.js')];
  require('./youth.js') //中青签到
  require('./youth_gain.js') //中青浏览赚
  
}
