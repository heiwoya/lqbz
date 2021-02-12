

//独立COOKIE文件     ck在``里面填写，多账号换行
let flwurlVal= `https://passport.fanli.com/mobileapi/v4/user/getUserInfo?ref=&userid=225959918&verify_code=4a0667d7e684ba34cbbce73ba930fec5&c_src=1&c_v=7.17.1.2&c_aver=1.0&devid=69127949306371&abtest=63809_b-320_a-154_b-876_b-316_b-8_d-140_b-22_a-708_b-104_a-1170_a-598_a-104_b-86_b-12_b-6_b-36_d-82_b-12_a-54_b-14_b-92e0`
let flwheaderVal= `{"Accept-Encoding":"gzip, deflate, br","Cookie":"FirstUrl=//m.fanli.com/; LandingUrl=https%3A//huodong.fanli.com/sign53023%3Fspm%3Dpage_name.h5.pty-rk_sign%7Eloc-sycc%7Estd-63148%26devid%3D69127949306371%26c_aver%3D1.0%26c_src%3D1%26c_v%3D7.17.1.2%26c_nt%3Dwifi%26abtest%3D61747_c-26_d-2036_b-320_a-154_b-876_b-210_c-84_b-22_b-8_d-140_b-22_a-708_b-104_a-12_a-1154_b-4_a-2_b-580_d-16_a-104_b-86_b-12_b-6_b-34_k-14_b-70_b-12_a-54_b-10_a-24_b-4_b-14_a-c6db%26ci%3D%257B%255C%2522ud%255C%2522%253A%255C%2522from%253Ddb%2526local%253Dmappindexhaowu_activity%2526id%253D424389%2526id_type%253Dactivity%255C%2522%257D; __fl_trace_cpc=CD137CEB-BF32-4ACF-9352-62EDA8C55834; __utmv=F700B0C5-A2DB-48B4-88F4-6B95A133259A; PHPSESSID=4a0667d7e684ba34cbbce73ba930fec5; __fl_trace_cnpc=E3C71593-54A5-4B59-BB26-04E038D1CEDF; __utmt=36128d-37160c-46553b-48835b-53691b-54682a-55010b-56834b-57109c-60078b-60857a-61189b-61208b-65881b-66582k-72211b-72720b-72750b-75425b-77468b-77533b-79098b-79210a-79279b-79387b-79570a; loginverify=82f1b6edda7a6e38; prolong=1613123934; prouserid=225959918; prousername=1377770615220180502454; prousernameutf=1377770615220180502454; story57007=1; __utmp=422391402.1685172781.1390751064; __webapp_f_duixian_tips_show=1; __utmo=4178976618.3756220629.2032599979","Connection":"keep-alive","Accept":"application/json, text/javascript, */*; q=0.01","Referer":"https://huodong.fanli.com/sign53023?spm=page_name.h5.pty-rk_sign~loc-sycc~std-63148&devid=69127949306371&c_aver=1.0&c_src=1&c_v=7.17.1.2&c_nt=wifi&abtest=61747_c-26_d-2036_b-320_a-154_b-876_b-210_c-84_b-22_b-8_d-140_b-22_a-708_b-104_a-12_a-1154_b-4_a-2_b-580_d-16_a-104_b-86_b-12_b-6_b-34_k-14_b-70_b-12_a-54_b-10_a-24_b-4_b-14_a-c6db&ci=%7B%5C%22ud%5C%22%3A%5C%22from%3Ddb%26local%3Dmappindexhaowu_activity%26id%3D424389%26id_type%3Dactivity%5C%22%7D","Host":"huodong.fanli.com","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Fanli/7.17.1.2 (ID:1-225959918-69127949306371-17-0; WVC:WK; SCR:1125*2436-3.0)","f-refer":"wv_h5","Accept-Language":"zh-cn","X-Requested-With":"XMLHttpRequest"}`
let flwspbodyVal= `content=pxUCN8pFFs9Nr1CvMJZZYi9FGEeUU%2BUvULKehV5tkz0ED0thU%2BBkZHBDI1jXLur%2BtjLbfESUQws4rf1KRM3B5P%2BgS9zggeJWaPPD0SBAqIkcss3qOQlhUHIa8WisT5qHMXxHLIB9C%2BPIyE0Nt082t8%2FAezxO3BfXZ1DhBtdrpAriyE7z6Yc3a9DqvNt2Z27viqLMw3eNiz6ZDZEtVGBzl%2BEsXuVbnYrja%2FW8%2BeOUWyOmqjpVKibyVvWQdm98%2BRK07u67qqZseRiB0XXvU%2FOpB8ti1sadaWNbM%2FbD6NnUY2MsmHIeN04FGw%3D%3D`
let flwqwbodyVal= `content=pxUCN8pFFs9Nr1CvMJZZYtcfNbpfMbjRULKehV5tkz0ED0thU%2BBkZJ21fHL15tpxlY5tXhtV04YfdaMKpntVcYEPkx03r1Y5Lh%2Fb7Dw3y7XiP51OFAWcbOlxfOn6zdIkYnHE%2BDj9dHZ6AL1qfTVvKeUkwv%2FfVTgHTwLDjoejo0oguiLcSWnLDhU0aeCfiuCB2BJE4X15Upk8ZmYPyR0X20qatW%2BEBp9bAFeLO7%2FvfvCD1qz3%2F80imgpMIhYJtHjnXYvnmgQeN8RFevQq9gsBmiJbdzw1Ax2NxGX%2B%2FRSlDBY%3D`



let flwcookie = {
  flwurlVal: flwurlVal,  
  flwheaderVal: flwheaderVal,  
  flwspbodyVal: flwspbodyVal, 
  flwqwbodyVal: flwqwbodyVal, 


}

module.exports =  flwcookie
  


