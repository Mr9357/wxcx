/***********************************

> 应用名称：Bilibili大会员通用破解模板[墨鱼版]
> 软件版本：7.63.0
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 解锁说明：解锁VIP番剧和影视
> 更新时间：2024-01-14
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]
  
# ～ Bilibili大会员（2024-01-14）@ddgksf2013
^https?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player.*\.(v3|v2|v1).Play(URL|View|er).*$ url script-request-header BilibiliProCrack.js


[mitm] 

hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*

***********************************/

 


var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = '_uuid=A66A814E-C77B-D94B-2D4B-334C16A36F3126436infoc; buvid3=365DFB89-F45F-4CF6-81B4-E69BFA98AB6D49136infoc; b_nut=1705203027; buvid4=F97E990E-6364-E659-3B8A-0A72C1642C2027163-124011403-Nb%2BFKdit7lM8nvnvfMSiFA%3D%3D; Buvid=Y646F56E95C9BC2C47B9AE9D2A6E96DEA078; SESSDATA=45decb15%2C1720582843%2Cbf09f811CjB8uqmxUpbS9166-izdsh_wS-EKCT2oht4NUJNtEnww6YPrRE4-ImRlVUiHMWVhmboSVjBZUlpjSzFHdUVDREtObzBBZENOMzV4S1pGOV9tSklCODFzTHBreWFpbkJKOG5FbWNCWEdWZ01CVFl2Z3pkdmRDZ2dsU3hkYjl6ZU02dmZ3eEhxZDhnIIEC; DedeUserID=1545829; DedeUserID__ckMd5=200cc14ea12e6816; bili_jct=44bca603838e729cc759be95eadfc8b3; sid=p8wl11n5; buvid_fp=2272f02d7550fcefbfad7632779b200e';
modifiedHeaders['x-bili-device-bin'] = 'CAEQhK+MJBokWTY0NkY1NkU5NUM5QkMyQzQ3QjlBRTlEMkE2RTk2REVBMDc4IgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoNaVBob25lIDcgUGx1c1IGMTUuMC4yagY3LjU3LjByQDY0MUUwOUE3MERCOTQzNzU1MUJDMTA1MzhGQjMzNDU2MjAxOTEyMjYyMTU2NTlDQzk4MUUzMDc5NzEzNjZFNkR49M2b38Ex';
modifiedHeaders['Authorization'] = 'identify_v1 6dcd144522bcfbda39b92e1e2b3c7111CjB8uqmxUpbS9166-izdsh_wS-EKCT2oht4NUJNtEnww6YPrRE4-ImRlVUiHMWVhmboSVjBZUlpjSzFHdUVDREtObzBBZENOMzV4S1pGOV9tSklCODFzTHBreWFpbkJKOG5FbWNCWEdWZ01CVFl2Z3pkdmRDZ2dsU3hkYjl6ZU02dmZ3eEhxZDhnIIEC';
modifiedHeaders['User-Agent'] = 'bili-universal/75700100 os/ios model/iPhone 7 Plus mobi_app/iphone osVer/15.0.2 network/2';
modifiedHeaders['buvid'] = ''Y646F56E95C9BC2C47B9AE9D2A6E96DEA078;
modifiedHeaders['x-bili-metadata-bin'] = 'CtwBNmRjZDE0NDUyMmJjZmJkYTM5YjkyZTFlMmIzYzcxMTFDakI4dXFteFVwYlM5MTY2LWl6ZHNoX3dTLUVLQ1Qyb2h0NE5VSk50RW53dzZZUHJSRTQtSW1SbFZVaUhNV1ZobWJvU1ZqQlpVbHBqU3pGSGRVVkRSRXRPYnpCQlpFTk9NelY0UzFwR09WOXRTa2xDT0RGelRIQnJlV0ZwYmtKS09HNUZiV05DV0VkV1owMUNWRmwyWjNwa2RtUkRaMmRzVTNoa1lqbDZaVTAyZG1aM2VFaHhaRGhuSUlFQxIGaXBob25lGgVwaG9uZSCEr4wkKgVhcHBsZTIkWTY0NkY1NkU5NUM5QkMyQzQ3QjlBRTlEMkE2RTk2REVBMDc4OgNpb3M=';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCGMyZmM0OWFj';
modifiedHeaders['x-bili-trace-id'] = '718d0458aceb81421e0695b33d65a359:1e0695b33d65a359:0:0';
modifiedHeaders['x-bili-exps-bin'] = '';
$done({'headers': modifiedHeaders});