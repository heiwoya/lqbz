/*

 @𝐃𝐃
//++++++++++++++++++++++++++++++++-



说明:

书旗小说 签到可以获得金币兑换现金  商店下载软件

圈x获取不到ck就把body改成header

打开软件签到获取ck 签过到可能获取不到ck
 
⚠️注意有2个主机名 昵称 签到 邀请书友 计时奖励 看视频赚金币2个 阅读时长 现金提现 获取10分钟阅读 账号金币 每日阅读任务 签到奖励  共12个ck

时长ck必须每天获取暂时无法解决


//**********surge

书旗小说 = type=http-request,pattern=^https:\/\/(ocean|api-access)\.(shuqireader|pangolin-sdk-toutiao)\.com\/*,requires-body=1,max-size=0,script-path=sqxssign.js

定时 书旗小说 = type=cron,cronexp=0 10 0 * * *,script-path=sqxssign.js



//**********圈x

签到获取ck
^https:\/\/(ocean|api-access)\.(shuqireader|pangolin-sdk-toutiao)\.com\/* url script-request-body sqxssign.js





定时 0 10 0 * * * sqxssign.js, tag=书旗小说, enabled=true





//********loon

签到获取ck
http-request ^https:\/\/(ocean|api-access)\.(shuqireader|pangolin-sdk-toutiao)\.com\/* script-path=sqxssign.js, requires-body=true, timeout=10, tag=书旗小说




定时 cron "0 10 0 * * *" script-path=sqxssign.js


//*******小火箭

签到获取ck
书旗小说 = type=http-request,script-path=sqxssign.js,pattern=^https:\/\/(ocean|api-access)\.(shuqireader|pangolin-sdk-toutiao)\.com\/*,max-size=131072,requires-body=true,timeout=10,enable=true




MITM= api-access.pangolin-sdk-toutiao.com, ocean.shuqireader.com





*/














const DD ='书旗小说APP';

const $ = new Env(DD);
$.idx = ($.idx = ($.getval('sqxsSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符

const logs=0;//设置0关闭日志,1开启日志

const log=0;//0关闭系统日志,1开启系统日志,和系统通知不要一起打开,关闭系统通知就要打开,系统日志

const noNolog=0;//1关闭系统通知,0打开系统通知



let dd = "" //



const getBindinfosignurlArr = [];
let getBindinfoSignurl = "";
const getBindinfosignheaderArr = [];
let getBindinfoSignheader = "";

const boxTasksignurlArr = [];
let boxTaskSignurl = "";
const boxTasksignheaderArr = [];
let boxTaskSignheader = "";

const signInActionsignbdArr = [];
let signInActionSignbd = "";
const signInActionsignheaderArr = [];
let signInActionSignheader = "";

const infosignbdArr = [];
let infoSignbd = "";

const lotterysignbdArr = [];
let lotterySignbd = "";
const lotterysignheaderArr = [];
let lotterySignheader = "";

const rewardsignbdArr = [];
let rewardSignbd = "";
const rewardsignheaderArr = [];
let rewardSignheader = "";

const getAdInfosignurlArr = [];
let getAdInfoSignurl = "";

const activitysignbdArr = [];
let activitySignbd = "";

const withdrawsignbdArr = [];
let withdrawSignbd = "";

const oceansignurlArr = [];
let oceanSignurl = "";
const oceansignbdArr = [];
let oceanSignbd = "";
const oceansignheaderArr = [];
let oceanSignheader = "";

const uploadsignbdArr = [];
let uploadSignbd = "";
const uploadsignheaderArr = [];
let uploadSignheader = "";

const tenminutessignbdArr = [];
let tenminutesSignbd = "";




getBindinfosignurlArr.push($.getdata("getBindinfosignurl"));
getBindinfosignheaderArr.push($.getdata("getBindinfosignheader"));
 
 boxTasksignheaderArr.push($.getdata("boxTasksignheader"));
 boxTasksignurlArr.push($.getdata("boxTasksignurl"));

signInActionsignbdArr.push($.getdata("signInActionsignbd"));
 signInActionsignheaderArr.push($.getdata("signInActionsignheader"));

infosignbdArr.push($.getdata("infosignbd"));

lotterysignbdArr.push($.getdata("lotterysignbd"));
 lotterysignheaderArr.push($.getdata("lotterysignheader"));

rewardsignbdArr.push($.getdata("rewardsignbd"));
 rewardsignheaderArr.push($.getdata("rewardsignheader"));

getAdInfosignurlArr.push($.getdata("getAdInfosignurl"));

activitysignbdArr.push($.getdata("activitysignbd"));

withdrawsignbdArr.push($.getdata("withdrawsignbd"));


oceansignurlArr.push($.getdata("oceansignurl"));
oceansignheaderArr.push($.getdata("oceansignheader"));
oceansignbdArr.push($.getdata("oceansignbd"));



uploadsignheaderArr.push($.getdata("uploadsignheader"));
uploadsignbdArr.push($.getdata("uploadsignbd"));

tenminutessignbdArr.push($.getdata("tenminutessignbd"));




 // boxjs中设置多账号数
  let sqxsCount = ($.getval('sqxsCount') || '1') - 0;
  for (let i = 2; i <= sqxsCount; i++) {
    if ($.getdata(`getBindinfosignurl${i}`)) {	
  getBindinfosignurlArr.push($.getdata(`getBindinfosignurl${i}`));
getBindinfosignheaderArr.push($.getdata(`getBindinfosignheader${i}`));

boxTasksignheaderArr.push($.getdata(`boxTasksignheader${i}`));
 boxTasksignurlArr.push($.getdata(`boxTasksignurl${i}`));
 
signInActionsignheaderArr.push($.getdata(`signInActionsignheader${i}`));
 signInActionsignbdArr.push($.getdata(`signInActionsignbd${i}`));

infosignbdArr.push($.getdata(`infosignbd${i}`));


lotterysignheaderArr.push($.getdata(`lotterysignheader${i}`));
 lotterysignbdArr.push($.getdata(`lotterysignbd${i}`));

rewardsignheaderArr.push($.getdata(`rewardsignheader${i}`));
 rewardsignbdArr.push($.getdata(`rewardsignbd${i}`));

getAdInfosignurlArr.push($.getdata(`getAdInfosignurl${i}`));

activitysignbdArr.push($.getdata(`activitysignbd${i}`));

withdrawsignbdArr.push($.getdata(`withdrawsignbd${i}`));



oceansignurlArr.push($.getdata(`oceansignurl${i}`));
oceansignheaderArr.push($.getdata(`oceansignheader${i}`));
oceansignbdArr.push($.getdata(`oceansignbd${i}`));


uploadsignheaderArr.push($.getdata(`uploadsignheader${i}`));
uploadsignbdArr.push($.getdata(`uploadsignbd${i}`));

tenminutessignbdArr.push($.getdata(`tenminutessignbd${i}`));



    }
  }

!(async () => {
if (typeof $request != "undefined") {
    await sqxssign()
  } else{
    await Sign()
    await Msg()
}
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


async function Sign() {

if (!getBindinfosignurlArr[0]) {
    $.msg($.name, '运行前需要获取cookie点击前往\n', 'https://render-web.shuqireader.com/render/sq-subject/page/tm-miniapp-download/?serviceWorkerOn=1', {"open-url": "https://render-web.shuqireader.com/render/sq-subject/page/tm-miniapp-download/?serviceWorkerOn=1"});
    return;
  } else {console.log(`\n************ 脚本共${getBindinfosignurlArr.length}个${$.name}账号  ************\n`
  );
  console.log(`\n============ 脚本执行时间(TM)：${new Date(new Date().getTime() + 0 * 60 * 60 * 1000).toLocaleString('zh', {hour12: false})}  =============\n`)}

  for (let i = 0; i < getBindinfosignurlArr.length; i++) {
getBindinfoSignurl = getBindinfosignurlArr[i];
getBindinfoSignheader = getBindinfosignheaderArr[i];
boxTaskSignheader = boxTasksignheaderArr[i];
boxTaskSignurl = boxTasksignurlArr[i];
 signInActionSignbd = signInActionsignbdArr[i];
signInActionSignheader = signInActionsignheaderArr[i];
infoSignbd = infosignbdArr[i];
lotterySignbd = lotterysignbdArr[i];
lotterySignheader = lotterysignheaderArr[i];
rewardSignbd = rewardsignbdArr[i];
rewardSignheader = rewardsignheaderArr[i];
getAdInfoSignurl = getAdInfosignurlArr[i];	
activitySignbd = activitysignbdArr[i];
withdrawSignbd = withdrawsignbdArr[i];
oceanSignbd = oceansignbdArr[i];
oceanSignheader = oceansignheaderArr[i];
oceanSignurl = oceansignurlArr[i];
uploadSignbd = uploadsignbdArr[i];
uploadSignheader = uploadsignheaderArr[i];
tenminutesSignbd = tenminutessignbdArr[i];




      await console.log(`..........................................\n\n🔔开始执行【${$.name+(i+1)}】\n`) 

    await getBindinfo()
    await boxTask()
    await signInAction()
    await info()
    await lottery()
    await reward()
    await upload()
    await getAdInfo()
    await activity()
    await tenminutes()
    await Thirty()
    await Sixty()
    await twenty()
    await eighty()
    await ocean()
    await withdraw()
}
}







function getBindinfo() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : getBindinfoSignurl,
        headers : JSON.parse(getBindinfoSignheader),     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.getBindinfo = data;
if($.getBindinfo.status==200)
console.log("...开始执行【"+$.getBindinfo.data.nickname+"】账号任务...\n")
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}






function boxTask(timeout=0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : boxTaskSignurl,
        headers : JSON.parse(boxTaskSignheader),
           }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.boxTask = data;
if ($.boxTask.status == 200)

for(let i=0;i<$.boxTask.data.tasks.length;i++)
 {
var gg=$.boxTask.data.tasks[i].status==0?"(未完成)":"(已完成)";
if($.boxTask.data.tasks[i].actTaskId!=undefined)
console.log("阅读"+$.boxTask.data.tasks[i].taskTitle+",可获得"+$.boxTask.data.tasks[i].rewards+"💰"+gg+"\n");

}
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}


function signInAction() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction",
        headers : JSON.parse(signInActionSignheader),
        body: signInActionSignbd,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.signInAction = data;
if($.signInAction.status== 200)
dd+= "【每日签到打卡】"+"打卡成功✅";

if($.signInAction.status== 10016)
dd+= "【每日签到打卡】"+$.signInAction.message;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}


function info() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/info",
        headers : JSON.parse(signInActionSignheader),
        body: infoSignbd,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.info = data;
if($.info.status== 200)
dd+= $.info.data.copyWriting+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}


function lottery() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery",
        headers : JSON.parse(lotterySignheader),
        body: lotterySignbd,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.lottery = data;
if($.lottery.status== 200)
dd+= "【30秒计时奖励】"+$.lottery.data.awardMessage+",进度"+$.lottery.data.chanceCurrentCnt+"/"+$.lottery.data.chanceMaxCnt+"\n";

if($.lottery.status== 900202)
dd+= "【30秒计时奖励】"+$.lottery.message+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}



function reward() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/",
        headers : JSON.parse(rewardSignheader),
        body: rewardSignbd,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.reward = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}


function upload() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://jcollection.shuqireader.com/collection/iosapi/reading/upload",
        headers : JSON.parse(uploadSignheader),
        body: uploadSignbd,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.reward = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}






function getAdInfo() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : getAdInfoSignurl,
        headers : JSON.parse(signInActionSignheader),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.getAdInfo = data;
if($.getAdInfo.status== 200)
dd+= "【看视频赚金币】"+"可获得"+$.getAdInfo.data.extInfo.prizeUnit+"💰金币,进度"+$.getAdInfo.data.extInfo.chanceCurrentCnt+"/"+$.getAdInfo.data.extInfo.chanceMaxCnt+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}




function activity() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://ocean.shuqireader.com/api/activity/v1/task/reward",
        headers : JSON.parse(signInActionSignheader),
        body:activitySignbd,
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.activity = data;
if($.activity.status== 200)
dd+= "【邀请书友任务】"+"获得+"+$.activity.data.rewards[1].desc+"💰\n";
if($.activity.status== 40004)
dd+= "【邀请书友任务】"+$.activity.message+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}




function tenminutes() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://ocean.shuqireader.com/api/activity/v1/task/reward",
        headers : JSON.parse(signInActionSignheader),
        body: tenminutesSignbd.replace(/actTaskId=\d*/, `actTaskId=287`),
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.tenminutes = data;
if($.tenminutes.status== 200)
dd+= "【每日阅读任务】"+"10分钟阅读+"+$.tenminutes.data.rewardTip+"💰\n";
if($.tenminutes.status== 40004)
dd+= "【每日阅读任务】"+"10分钟阅读"+$.tenminutes.message+"\n";
if($.tenminutes.status== 40003)
dd+= "【每日阅读任务】"+"10分钟阅读"+$.tenminutes.message+"\n";
if($.tenminutes.status== 40016)
dd+= "【每日阅读任务】"+"10分钟阅读"+$.tenminutes.message+"\n";
if($.tenminutes.status== 40002)
dd+= "【每日阅读任务】"+"10分钟阅读"+$.tenminutes.message+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}


function Thirty() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://ocean.shuqireader.com/api/activity/v1/task/reward",
        headers : JSON.parse(signInActionSignheader),
        body: tenminutesSignbd.replace(/actTaskId=\d*/, `actTaskId=288`),
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.Thirty = data;
if($.Thirty.status== 200)
dd+= "【每日阅读任务】"+"30分钟阅读+"+$.Thirty.data.rewardTip+"💰\n";
if($.Thirty.status== 40004)
dd+= "【每日阅读任务】"+"30分钟阅读"+$.Thirty.message+"\n";
if($.Thirty.status== 40003)
dd+= "【每日阅读任务】"+"30分钟阅读"+$.Thirty.message+"\n";
if($.Thirty.status== 40016)
dd+= "【每日阅读任务】"+"30分钟阅读"+$.Thirty.message+"\n";
if($.Thirty.status== 40002)
dd+= "【每日阅读任务】"+"30分钟阅读"+$.Thirty.message+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}


function Sixty() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://ocean.shuqireader.com/api/activity/v1/task/reward",
        headers : JSON.parse(signInActionSignheader),
        body: tenminutesSignbd.replace(/actTaskId=\d*/, `actTaskId=289`),
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.Sixty = data;
if($.Sixty.status== 200)
dd+= "【每日阅读任务】"+"60分钟阅读+"+$.Sixty.data.rewardTip+"💰\n";
if($.Sixty.status== 40004)
dd+= "【每日阅读任务】"+"60分钟阅读"+$.Sixty.message+"\n";
if($.Sixty.status== 40003)
dd+= "【每日阅读任务】"+"60分钟阅读"+$.Sixty.message+"\n";
if($.Sixty.status== 40016)
dd+= "【每日阅读任务】"+"60分钟阅读"+$.Sixty.message+"\n";
if($.Sixty.status== 40002)
dd+= "【每日阅读任务】"+"60分钟阅读"+$.Sixty.message+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}



function twenty() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://ocean.shuqireader.com/api/activity/v1/task/reward",
        headers : JSON.parse(signInActionSignheader),
        body: tenminutesSignbd.replace(/actTaskId=\d*/, `actTaskId=290`),
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.twenty = data;
if($.twenty.status== 200)
dd+= "【每日阅读任务】"+"120分钟阅读+"+$.twenty.data.rewardTip+"💰\n";
if($.twenty.status== 40004)
dd+= "【每日阅读任务】"+"120分钟阅读"+$.twenty.message+"\n";
if($.twenty.status== 40003)
dd+= "【每日阅读任务】"+"120分钟阅读"+$.twenty.message+"\n";
if($.twenty.status== 40016)
dd+= "【每日阅读任务】"+"120分钟阅读"+$.twenty.message+"\n";
if($.twenty.status== 40002)
dd+= "【每日阅读任务】"+"120分钟阅读"+$.twenty.message+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}


function eighty() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://ocean.shuqireader.com/api/activity/v1/task/reward",
        headers : JSON.parse(signInActionSignheader),
        body: tenminutesSignbd.replace(/actTaskId=\d*/, `actTaskId=291`),
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.eighty = data;
if($.eighty.status== 200)
dd+= "【每日阅读任务】"+"180分钟阅读+"+$.eighty.data.rewardTip+"💰\n";
if($.eighty.status== 40004)
dd+= "【每日阅读任务】"+"180分钟阅读"+$.eighty.message+"\n";
if($.eighty.status== 40003)
dd+= "【每日阅读任务】"+"180分钟阅读"+$.eighty.message+"\n";
if($.eighty.status== 40016)
dd+= "【每日阅读任务】"+"180分钟阅读"+$.eighty.message+"\n";
if($.eighty.status== 40002)
dd+= "【每日阅读任务】"+"180分钟阅读"+$.eighty.message+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}


function ocean() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : oceanSignurl,
        headers : JSON.parse(oceanSignheader),
        body: oceanSignbd,
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.ocean = data;
if($.ocean.status== 200)
dd+= "【账号现金提现】"+"提现"+$.ocean.message+"\n";
if($.ocean.status== 230220)
dd+= "【账号现金提现】"+$.ocean.message+"\n";
if($.ocean.status== 230212)
dd+= "【账号现金提现】"+$.ocean.message+"\n";
if($.ocean.status== 503)
dd+= "【账号现金提现】"+$.ocean.message+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}






function withdraw() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://ocean.shuqireader.com/api/activity/xapi/gold/withdraw/info",
        headers : JSON.parse(signInActionSignheader),
        body: withdrawSignbd,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.withdraw = data;
if($.withdraw.status== 200)
dd+= "【账号金币查询】"+"现金"+$.withdraw.data.withdrawableCash+"元💸"+",累计"+$.withdraw.data.gold+"💰金币,"+$.withdraw.data.taskInfo.tasks[0].intro+",提现时长进度"+$.withdraw.data.taskInfo.tasks[0].process+"\n";

        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}











function Msg() {

if(log==1)console.log(dd)

 if(noNolog==0)$.msg($.name,"",dd)

}









function sqxssign() {


if ($request.url.indexOf("getBindinfo?") > 0) {
    
const getBindinfoSignurl = $request.url;
if (getBindinfoSignurl)
$.setdata(getBindinfoSignurl,"getBindinfosignurl" + $.idx);
 const getBindinfoSignheader = JSON.stringify($request.headers);
if(getBindinfoSignheader)
$.setdata(getBindinfoSignheader,"getBindinfosignheader" + $.idx);
    
    $.msg($.name + $.idx,"","[获取昵称数据]✅成功");}
else  
if ($request.url.indexOf("boxTask?") > -1) {
    
const boxTaskSignurl = $request.url;
if(boxTaskSignurl)
$.setdata(boxTaskSignurl,"boxTasksignurl" + $.idx);
    const boxTaskSignheader = JSON.stringify($request.headers);
if(boxTaskSignheader)
$.setdata(boxTaskSignheader,"boxTasksignheader" + $.idx);
 
    $.msg($.name + $.idx,"","[获取每日阅读任务数据]✅成功");}

else  
if ($request.url.indexOf("signInAction") > -1) {
    const signInActionSignheader = JSON.stringify($request.headers);
if(signInActionSignheader)
$.setdata(signInActionSignheader,"signInActionsignheader" + $.idx);
 const signInActionSignbd = $request.body;
if(signInActionSignbd)
    $.setdata(signInActionSignbd,"signInActionsignbd" + $.idx);

    
    $.msg($.name + $.idx,"","[获取签到数据]✅成功");}

else  
if ($request.url.indexOf("api/activity/xapi/signin/v5/info") > -1) {
 const infoSignbd = $request.body;
if(infoSignbd)
    $.setdata(infoSignbd,"infosignbd" + $.idx);

    
    $.msg($.name + $.idx,"","[获取签到奖励数据]✅成功");}

else  
if ($request.body.indexOf("actTaskId=262") > -1) {
 const activitySignbd = $request.body;
if(activitySignbd)
    $.setdata(activitySignbd,"activitysignbd" + $.idx);

    $.msg($.name + $.idx,"","[获取邀请书友数据]✅成功");}



else  
if ($request.url.indexOf("lottery") > -1) {
    const lotterySignheader = JSON.stringify($request.headers);
if(lotterySignheader)
$.setdata(lotterySignheader,"lotterysignheader" + $.idx);
 const lotterySignbd = $request.body;
if(lotterySignbd)
    $.setdata(lotterySignbd,"lotterysignbd" + $.idx);

    
    $.msg($.name + $.idx,"","[获取30秒计时奖励数据]✅成功");}
  

else  
if ($request.url.indexOf("reward/") > -1) {
    const rewardSignheader = JSON.stringify($request.headers);
if(rewardSignheader)
$.setdata(rewardSignheader,"rewardsignheader" + $.idx);
 const rewardSignbd = $request.body;
if(rewardSignbd)
    $.setdata(rewardSignbd,"rewardsignbd" + $.idx);    
    $.msg($.name + $.idx,"","[获取看视频赚金币数据]✅成功");}

else
if ($request.url.indexOf("getAdInfo?") > 0) {
    
const getAdInfoSignurl = $request.url;
if (getAdInfoSignurl)
$.setdata(getAdInfoSignurl,"getAdInfosignurl" + $.idx);
    $.msg($.name + $.idx,"","[获取看视频进度数据]✅成功");}


else  
if ($request.url.indexOf("api/activity/xapi/gold/withdraw/info") > -1) {
 const withdrawSignbd = $request.body;
if(withdrawSignbd)
    $.setdata(withdrawSignbd,"withdrawsignbd" + $.idx);

    
    $.msg($.name + $.idx,"","[获取账号金币数据]✅成功");}

else
if ($request.url.indexOf("withdraw?") > 0) {
    
const oceanSignurl = $request.url;
if (oceanSignurl)
$.setdata(oceanSignurl,"oceansignurl" + $.idx);
 const oceanSignheader = JSON.stringify($request.headers);
if(oceanSignheader)
$.setdata(oceanSignheader,"oceansignheader" + $.idx);
    const oceanSignbd = $request.body;
if(oceanSignbd)
    $.setdata(oceanSignbd,"oceansignbd" + $.idx);
    $.msg($.name + $.idx,"","[获取提现数据]✅成功");}



else  
if ($request.body.indexOf("actTaskId=287") > -1) {
 const tenminutesSignbd = $request.body;
if(tenminutesSignbd)
    $.setdata(tenminutesSignbd,"tenminutessignbd" + $.idx);    
    $.msg($.name + $.idx,"","[获取10分钟任务数据]✅成功");}

else  
if ($request.url.indexOf("upload") > -1) {
    const uploadSignheader = JSON.stringify($request.headers);
if(uploadSignheader)
$.setdata(uploadSignheader,"uploadsignheader" + $.idx);
 const uploadSignbd = $request.body;
if(uploadSignbd)
    $.setdata(uploadSignbd,"uploadsignbd" + $.idx);    
    $.msg($.name + $.idx,"","[获取阅读时长数据]✅成功");}






}





























function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
