	
	function trim(str) {
		return str.replace(/(^\s*)|(\s*$)/g, "");
	}
	//标点验证
	function checkPointer(str){
		
		return (/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(str));
		
	}
	
	//非空验证
	
	function checkNull(str){
		
		str=trim(str);	
					
		if(str.length!=0){
			return true;
	    }
		if(str!=null&&str!=''){
			return true;
		}
		return false;
	}
	//验证手机字符串
	
	function checkMobileStrs(str){
		
		if(str==null||str==" "){
			return false;
		}
	
	    if(str.indexOf(',')!= -1){
			var charArray = str.split(',');
		  
			for(i=0;i<charArray.length;i++){
			   
				if(!checkMobile(charArray[i])){
				
				   return false;
				   
				}
			
			}
			return true;
	    }
	    else{
	       return checkMobile(str);
	    }	
 
	}	
	
	//手机号验证
	
	function checkMobile(str){
		
		if(str==null||str==''){
			return false;
		} 
       if(!compStrLength(str,12))
       {
          return false;
       }  
		return (/^(130|131|132|133|134|135|136|137|138|139|147|150|151|152|153|155|156|157|158|159|180|181|182|183|184|185|186|187|188|189)[0-9]{8}/.test(str));
	}

	function filterMobile(formName){///////////过滤手机号码	
	    var mobile=document.getElementById("mobile");
	    var str=mobile.value;
	    var newstr='';
	    if(str.indexOf(',')!= -1){
			var charArray = str.split(',');
			charArray=charArray.delRepeat();// 先去重复数据
			for(i=0;i<charArray.length;i++){
				if(checkMobile(charArray[i])){
				   if(newstr==''){
					   newstr=newstr+charArray[i];
				   }else{
					   newstr=newstr+','+charArray[i];
				   }
				}
			}
			
	    }
	    else{
			if(checkMobile(str)){
			   newstr=str;
			}	    
	    }	
           
		var formObj = document.forms[formName];     
		var formEl = formObj.elements;     
		for (var i=0; i<formEl.length; i++)     {         
			var element = formEl[i];         
			if (element.type == 'textarea' && element.id == 'mobile'){
			    element.value = newstr;
			 }     
		} 
	}	
	
    
	function checkContentIllegalChar(str){// 短信内容屏蔽字验证
		
			var non_special_char_regexp = "|--|sp_|xp_|\\|dir |cmd |^|$|'|copy |format |and |exec |insert |select |delete |update |count |%|chr |mid |master |truncate |char |declare ";
			var non_special_char_regexp2 = " dir| cmd| copy| format| and| exec| insert| select| delete| update| count| chr| mid| master| truncate| char| declare";
//			var non_special_char_regexp3 = "江独裁|江八点|江泽民|李鹏|朱镕基|胡锦涛|温家宝|锦涛|十六大|共产党|政治风波|疆独|民猪|民运|古怪歌|推翻|示威|政变|静坐|分裂|台*湾|吕秀莲|独立|西藏|中华民国|造反|新华内情|达赖|镇压|东突|开放|游行|上访|罢课|罢工|集会|广闻|打倒|压迫|反革命|无能|教徒|人权|迫害|正法|预约|日本|反目|抗日|小泉|靖国神社|日货|钓鱼台|涉日|香港总部|主席|邓小平|共匪|六四|洪志|法轮|宏志|真善忍|大法|fa lun |falun|发轮|发伦|发抡|法沦|发囵|发仑|发纶|法抡|法纶|法囵|法伦|功友|弟子|师傅|师父|法论|法.轮.功|法 轮 功|自焚|玄`机|现身|人民大众|时事参考|人民内情真相|新华举报|鸡毛信文汇|人民真实报告|大参考|大纪元|杂志|联总之声|传单|舆论|美国之音| 人民报讯|E周刊|博讯|人民报|中俄边界新约|国研新闻邮件|简鸿章|新闻封锁|人民大众时事参考|联总之声传单|九.评|九评|九—评|猛料|六合彩|色情|嫖娼|三陪|他妈的|龙卷风|淫秽|黄色|非典|包赢|日他|Soccer01.com|中奖|大奖|特等奖|黑庄|13423205670|性技高照|春宵激情|突厥斯坦|印尼伊斯兰祈祷团|东突厥斯坦|伊斯兰运动|拉登|拉丹|自由运动|回民|中国移动通信|小灵通|CDMA|绿色环保手机|IP17908|语音|拨打|合约|广告|7.310|9.635|兆赫|灵动卡|群发|短信|自考|汇款|折扣|抽奖|奖金|投资|促销|打折|免费|优惠|盛大|开盘|火爆|火暴|火热|消费|超值|签证|移民|蓝印|报价|卫星|特惠|惊爆|发票|现金|大礼|平米|别墅|惊喜|返利热线|诱惑|快感|春宵|激情|成人|黄毒|复制|验货|淫荡|推销|抽大奖|抢|狂|销售|贷款|公关|套牌|利息|窃听器|一等奖|小灵通MA|中国银联|刷卡消费|KC短信|商务领航|深圳国领|深圳红岭|代开发票|提供|热线|资金|担保|请愿|台湾|咨询|麻将|发沦|法仑|集团|发论|朱容基|人民真实报道|人民报讯|东突厥斯坦伊斯兰运动|玄机|九-评|预约卡|反日|钓鱼岛|潜在用户|银行联合管理局|操你娘|SIM卡抽奖|傻B|日你妈|鸡巴|操你|小鸡鸡|dafa|强奸|fuck|妓女|干你娘|天葬|三码|六码|九码|枪支|迷药|王八蛋|婊子|蠢猪|畜生|弹药|暴乱|我X X你|我XX你|通信维权|txwq.net|新唐人|华人媒体|肉棒|J巴|做爱|作爱|淫|68170802|伴游|刻章|倒卖|反攻|特价机票|打折机票|001工程|16大|17年|21世纪中国基金会|23条|610洗脑班|6-4tianwang|89-64cdjp|9评|bignews|bitch|boxun|B样|chinaliberal|chinamz|chinesenewsnet|cnd|creaders|dajiyuan|dfdz|dpp|falu|falundafa|fa轮|flg|freechina|freedom|freenet|GCD|hongzhi|hrichina|huanet|hypermart.net|incest|jiangdongriji|lihongzhi|making|minghui|minghuinews|nacb|naive|nmis|paper64|peacehall|playboy|renminbao|renmingbao|safeweb|sex|shit|simple|svdc|tibetalk|triangle|triangleboy|UltraSurf|unixbox|ustibet|voa|voachinese|wangce|wstaiji|xinsheng|yuming|zhengjian|zhengjianwang|zhenshanren|zhuanfalun|爱国者同盟|安魂网|八九|八老|巴赫|白军|白立朴|白梦|白皮书|包皮|保钓|鲍戈|鲍彤|暴政|北大三角地论坛|北韩|北京当局|北京政权|北京之春|北美自由论坛|贝领|被盗|屄|逼样|布局十七大|彩民|蔡崇国|蔡武|藏独|操逼|操比|操蛋|操你妈|操他|曹长青|曹刚川|插你|柴玲|常劲|车仑|陈炳基|陈蒙|陈破空|陈水扁|陈希同|陈小同|陈宣良|陈一谘|陈总统|陳水扁|成人书库|程凯|程铁军|程真|迟浩田|持不同政见|赤匪|赤化|赤龙|赤裸|出卖|出售答案|春夏之交|春夏自由论坛|打炮|大b|大逼|大比|大彩|大花逼|大纪元新闻网|大纪园|大家论坛|大陆当局|大史|大史记|大史纪|大中国论坛|大中华论坛|大众真人真事|戴相龙|弹劾|登辉|邓笑贫|邓颖超日记|迪里夏提|地下教会|地下刊物|第四代|电视流氓|丁关根|丁元|丁子霖|东北独立|东方红时空|东方时空|东南西北论谈|东社|东土耳其斯坦|东西南北论坛|东洲|动乱|独裁|独裁政治|独夫|独立台湾会|独立中文笔会|杜智富|多维|屙民|俄国|二B|二逼|发愣|发抡功|发伦功|发论公|发论功|发骚|发正念|法*功|法lun功|法功|法会|法愣|法抡功|法轮功|法輪|法十轮十功|法谪|法谪功|反封锁|反封锁技术|反腐败论坛|反攻大陆|反共|反人类|反社会|方励之|方舟子|放入春药|飞扬论坛|斐得勒|废除劳教签名|废统|费良勇|分家在|粉嫩小洞|粉饰太平|风波记|风雨神州|风雨神州论坛|封从德|封杀|冯东海|冯素英|佛展千手法|阝月|付申奇|复转军人|傅申奇|傅志寰|干死你|肛交|肛门|高官|高文谦|高薪养廉|高瞻|高自联|睾丸|戈扬|鸽派|歌功颂德|蛤蟆|个人崇拜|工力|工自联|功法|共产|共党|共黨|共狗|共军|狗b|狗操|狗卵子|狗娘|狗屎|孤独|古兰经|关卓中|贯通两极法|龟公|龟头|郭伯雄|郭罗基|郭平|郭岩华|国家安全|国家机密|国军|国贼|哈批|韩东方|韩联潮|汉风|汉奸|何德普|何勇|和平请愿书|河殇|贺国强|红灯区|红岗|红魂网站|红色恐怖|红兽|宏法|洪传|洪吟|洪哲胜|胡紧掏|胡锦滔|胡锦淘|胡景涛|胡平|胡耀邦|胡总书记|护法|花花公子|华建敏|华通时事论坛|华夏文摘|华语世界论坛|华岳时事论坛|黄慈萍|黄祸|黄局|黄菊|黄翔|回民暴|回民暴动|悔过书|火凤凰|鸡八|姬胜德|积克馆|基督|激情大片|激情电影|集体上访|集体做爱|纪元|寂寞|贾庆林|贾廷安|贾育台|奸淫|建国党|贱逼|贱比|贱货|贱人|江core|江ze民|江蛤蟆|江流氓|江罗|江绵恒|江青|江戏子|江则民|江泽慧|江责民|江澤民|江贼|江贼民|江折民|江猪|江猪媳|江主席|姜春云|将则民|茳澤民|僵贼|僵贼民|讲法|蒋彦永|蔣彥永|酱猪媳|交媾|叫床|教养院|接班|揭批书|戒严|金尧如|禁看|经文|惊暴双乳|精液|精子|警察|军转安置|军转干部|开放杂志|看中国|抗议|考后付款|考前发放|靠你妈|跨世纪的良心犯|狂操|邝锦文|来京上访|兰大|蓝丝带|烂逼|烂比|烂货|劳动教养所|劳改|劳教|老江|老姜|老毛|老人政治|黎安友|李长春|李大师|李登辉|李红痔|李宏志|李宏治|李洪宽|李洪志|李继耐|李兰菊|李岚清|李老师|李录|李禄|李瑞环|李少民|李淑娴|李旺阳|李文斌|李小朋|李小鹏|李月月鸟|李志绥|李总理|李总统|里藏春|理想信念斗争|连胜德|联合起诉最高人民法院|联总|廉政大论坛|炼功|梁光烈|梁擎墩|两岸关系|两岸三地论坛|两个中国|两会|两会报道|两会新闻|聊聊|廖锡龙|林保华|林彪|林长盛|林樵清|林慎立|林昭纪念奖|凌锋|刘宾深|刘宾雁|刘刚|刘国凯|刘华清|刘俊国|刘凯中|刘千石|刘青|刘山青|刘士贤|刘文胜|刘晓波|刘晓竹|刘永川|流亡|柳树中学|龙虎豹|娄义|陆委会|吕京花|绿色雨|抡功|伦功|轮大|轮功|轮奸|罗干|罗礼诗|裸干|妈批|马大维|马克思|马良骏|马三家|马时敏|卖逼|卖比|卖国|瞒报|毛厕洞|毛都露出|毛片|毛泽东|毛贼东|美国参考|猛男强奸|蒙独|蒙古独|蒙古独立|孟令伟|密穴|绵恒|民国|民进党|民联|民意|民意论坛|民阵|民主|民主墙|民族矛盾|民族问题|明Hui|明慧|莫伟强|木犀地|木子论坛|奶头真红|奶子|南大自由论坛|南华早报|闹事|倪育贤|你妈|你妈的|你娘|你说我说论坛|牛逼|牛比|潘国平|盘古乐队|泡沫经济";
//			var non_special_char_regexp4 = "喷你|屁眼|平反|破鞋|祁建|齐墨|钱达|钱国梁|钱其琛|枪手|抢粮记|乔石|亲美|亲日|钦本立|秦晋|青天白日旗|轻舟快讯|清纯|情妇|情色大片|情色电影|庆红|去你妈的|全国两会|群奸|群体灭绝|热比娅|热站政论网|人民真实|人民之声论坛|仁吉旺姆|日内瓦金融|日你|日死你|日元贷款|肉洞|肉棍|肉体|肉穴|乳房|瑞士金融大学|骚逼|骚货|骚穴|傻逼|善恶有报|上海帮|上海孤儿院|少妇|邵家健|射精|神通加持法|沈彤|升天|生者和死者|盛华仁|盛雪|失密|十八摸|十七年|石戈|时代论坛|时事论坛|世界经济导报|世界通|事实独立|试卷|试题答案|收容所|数据中国|双十节|氵去|氵去车仑工力|水扁|税力|税票|司马晋|司马璐|司徒华|斯诺|四川独|四川独立|四级答案|宋xx|宋平|宋书元|宋祖英|苏家屯|苏绍智|苏晓康|他妈|他母亲|台独|台盟|台湾独|台湾独立|台湾狗|台湾建国运动组织|台湾青年独立联盟|台湾政论区|台湾自由联盟|太子党|贪官|汤光中|唐柏桥|唐捷|陶驷驹|讨伐|讨伐中宣部|滕文生|天安门|天安门录影带|天安门母亲|天安门事件|天安门屠杀|天安门一代|天怒|舔奶|同胞书|童屹|统独|统独论坛|统战|涂运普|屠杀|外交论坛|外交与方略|外蒙|晚年周恩来|万润南|万维读者论坛|万晓东|汪岷|亡党|王宝森|王炳章|王策|王超华|王丹|王辅臣|王刚|王涵万|王沪宁|王军涛|王力雄|王瑞林|王润生|王若望|王希哲|王秀丽|王冶坪|网特|尉健行|魏京生|魏新生|温加饱|温元凯|文革|文化大革命|文学城|窝囊中国|我操|我操你|我的后讨伐中宣部时代|我日|我是回民|无帮国|无界浏览器|吴百益|吴邦国|吴方城|吴官正|吴弘达|吴宏达|吴仁华|吴学灿|吴学璨|吾尔开希|五不|伍凡|西藏独|西藏独立|西藏论坛|洗脑|下体|先天健康法|香港明报|项怀诚|项小吉|小参考|小穴|晓德|肖强|邪恶|泄密|谢长廷|谢选骏|谢中之|心藏大恶|辛灏年|新党|新观察论坛|新华通论坛|新疆独|新疆独立|新生网|新语丝|信用危机|邢铮|性爱|性福|性交|性交大赛|性交姿势|性欲|熊炎|熊焱|修炼|徐邦秦|徐才厚|徐匡迪|徐水良|许家屯|学潮|学联|学习班|学运|学自联|雪山狮子|亚洲自由之声|严家其|严家祺|阎明复|颜射|燕南评论|央视内部晚会|杨怀安|杨建利|杨巍|杨月清|杨周|姚月谦|夜话紫禁城|一党专政|一党专制|一塌糊涂|一中一台|伊斯兰|义解|异见人士|异议人士|易丹轩|易志熹|阴唇|阴道|阴道被捅|阴蒂|阴茎|阴水|淫水|淫图|淫穴|尹庆民|英语四六级答案|鹰派|由喜贵|幼齿|幼女|于大海|于浩成|余英时|舆论反制|宇明网|欲望|远志明|岳武|在十月|昝爱宗|则民|择民|泽民|贼民|曾培炎|曾庆红|张伯笠|张博涵|张钢|张宏堡|张开双腿|张林|张万年|张伟国|张昭富|张志清|招妓|赵海青|赵南|赵品潞|赵晓微|赵紫阳|哲民|真相|真象|争鸣论坛|正见网|正邪大决战|正义党论坛|郑义|郑源|政权|政治反对派|政治犯|支那|指点江山论坛|致胡书记的公开信|中俄边界|中俄密约|中功|中共|中国报禁|中国泛蓝联盟|中国复兴论坛|中国改革年代政治斗争|中国孤儿院|中国和平|中国论坛|中国社会的艾滋病|中国社会进步党|中国社会论坛|中国威胁论|中国问题论坛|中国真实内容|中国之春|中国猪|中國當局|中华大地|中华大众|中华讲清|中华人民实话实说|中华人民正邪|中华时事|中华养生益智功|中华真实报道|中宣部|钟山风雨论坛|周恩来忏悔|周恩来后悔|周恩来自责|周锋锁|周刊纪事|周天法|周旋|朱嘉明|朱琳|朱毛|朱溶剂|猪操|猪聋畸|猪毛|主义|专业代考|专制|转法轮|转化|自民党|自已的故事|自由民主论坛|自由写作奖|自由亚洲|自主择业|宗教压迫|走光|走私|作秀|做爱经典|做爱全过程|做爱挑逗|A片|X夜激情|波波|处女终结者|调情|发情|风骚|干柴烈火|高潮|嘿咻|簧片|禁区|老二|两性狂情|裸体|咪咪|命根|情色|情欲|热辣|骚|色诱|色欲|少女高潮|失身|双腿间的禁地|销魂|小弟弟|性高潮|性事|性游戏|夜激情|阴毛|隐私|云雨|4．25事件|泡沫经济1|捐献|灾区|专卖|大盘|证券|股票|省委|中央|奥运|北京|辅导|特价|封顶|公寓|疯狂|性感|暑假|暑期|补课|平方米|捐赠|招商|地震|街铺|旺铺|四川|产权|酒店|按摩|桑拿|KTV|抢购|游戏|留学|出国|样版|培训|赠送|keyname|l2590803027|TMD|暗杀|报警|北美讲坛|北美讲坛s|笨蛋|病业说|超常科学|陈至立|冲突|打架|打压|大便|大法弟子|大纪|登天梯|邓晓平|颠覆中国政权|颠覆中华人民共和国政|电信|东突厥斯坦伊斯兰|毒气|赌具|短信广告|短信商务广告|恶劣|恶势力|恶心|法L功|法轮大法|法轮佛法|法正|珐.輪功|反腐败|放屁|分裂中国|分裂中华人民共和国|封杀酱猪媳|腐败|该 死|干 你 妈|高利贷|公证|狗逼|广 闻|鬼子|国民党|核污染|黑车|衡阳万通房产|胡书记|华夏文摘快递|回良玉|鸡吧|鸡鸡|几巴|几吧|假钞|讲事实 要说法|结帐|巨奖|军委主席|开天目|康涛杰|老 婊 子|老子|李 洪 志|李三共志|李向东|联合行动|联通|联通贵宾卡|联通商务通|联总这声传单|领事馆|流氓|六 四|六●四|论坛|马会|梦网洪志|名山县|明慧网|末世论|你爸|牛B|虐待|锘挎瘺娉戒笢1234|锘挎瘺娉戒笢12345|窃听王|求购|人民之声|人渣|忍无可忍|三水法轮|骚 货|煞笔|省委大门集合|省政府大门集合|使馆|刷卡|水深火热|死亡|宿命论|隧道|台湾共合国|贪污犯|唐家璇|天府广场集会|推翻社会主义制度|网通|吴仪|五套功法|下法轮|下岗工人|现金奖|消业论|小来子|小平|小泉纯一郎|阳痿|以身护法|以血护法|阴 道|阴胫|宇宙真理|糟蹋|泽东|张中伟|找政府评理|真善美|中共当局|中共独裁|中共统治|中国六四真相|中国民主党联合总部|中华大地思考|周永康|朱金基|紫阳|自杀|自由网|总书记|阻止中华人民共和国统|代理|第一次|慧网|汕尾|圆满|证件|被日|信用卡空卡|猪头|妈的|奶奶的|KC网站|KC提示|KC嘉年华|机票|航空售票|俄罗斯|坐台|移动|出台|党退|退党|短信群发|分众|杂种|狗日的|12590|259o|dpp大法|rfa|taip|安装卫星电视|北京之春民主论坛|北美论坛|本公司|本公司代开|操你妈逼|成人电影|成人频道|成人生活片|春夏论坛|代开票|代人报仇|短信平台|二手车|发~票|各种发票|九成新|林保华射精|刘士贤司马晋|龙虎豹宋书元|麻将机|卖国唐捷|绵恒异议人士|男女公关|南大论坛|盛雪辛灏年|四联航空|台湾联盟|套牌车|无抵押贷款|五不争鸣论坛|性服务|学潮晚年周恩来|移动禁忌的敏感词|追讨债务|滚蛋|去死|死去|冠希|艳照门|艳门照|财富|高考|套现|信用卡|结款|房款|楼盘|收费|招生|限量|特卖|赌博|彩票|增值税|毛泽乐|钱庄|17大|十七大|九成新车|中共中央|娇嫩欲滴|搞日|办证|公证局|公安|地税局|登记|代款|将军|情感|葳独|特色|民航|售票|限量特卖|首付|基地|开发区|国庆|回馈|开课|开幕|发售|筹额|奶粉|房源|电子狗|电$子&狗|电 子 狗|加密狗|开业|天线|全套节目|外新闻|电子*狗|狗|热销|火爆热销|平方|医院|爆热|红旗|政策|自由|亦凡|发 票|抽 奖|赠品|世界|协会|总部|售楼|购房|买房|派送|礼品|成本价|现房|银行卡|银行|车位|新房|购买|低价|考试|购车|户型|盈利|讲座|联系|积分|会员|造业";
		var non_special_char_regexp3 = "江独裁|江八点|江泽民|李鹏|朱镕基|胡锦涛|温家宝|锦涛|十六大|共产党|政治风波|疆独|民猪|民运|古怪歌|推翻|示威|政变|静坐|分裂|台*湾|吕秀莲|独立|西藏|中华民国|造反|新华内情|达赖|镇压|东突|开放|游行|上访|罢课|罢工|集会|广闻|打倒|压迫|反革命|无能|教徒|人权|迫害|正法|预约|日本|反目|抗日|小泉|靖国神社|日货|钓鱼台|涉日|香港总部|主席|邓小平|共匪|六四|洪志|法轮|宏志|真善忍|大法|fa lun |falun|发轮|发伦|发抡|法沦|发囵|发仑|发纶|法抡|法纶|法囵|法伦|功友|弟子|师傅|师父|法论|法.轮.功|法 轮 功|自焚|玄`机|现身|人民大众|时事参考|人民内情真相|新华举报|鸡毛信文汇|人民真实报告|大参考|大纪元|杂志|联总之声|传单|舆论|美国之音| 人民报讯|E周刊|博讯|人民报|中俄边界新约|国研新闻邮件|简鸿章|新闻封锁|人民大众时事参考|联总之声传单|九.评|九评|九—评|猛料|六合彩|色情|嫖娼|三陪|他妈的|龙卷风|淫秽|黄色|非典|包赢|日他|Soccer01.com|中奖|大奖|特等奖|黑庄|13423205670|性技高照|春宵激情|突厥斯坦|印尼伊斯兰祈祷团|东突厥斯坦|伊斯兰运动|拉登|拉丹|自由运动|回民|中国移动通信|小灵通|CDMA|绿色环保手机|IP17908|语音|拨打|合约|广告|7.310|9.635|兆赫|灵动卡|群发|短信|自考|汇款|折扣|抽奖|奖金|投资|促销|打折|免费|优惠|盛大|开盘|火爆|火暴|火热|消费|超值|签证|移民|蓝印|报价|卫星|特惠|惊爆|发票|现金|大礼|平米|别墅|惊喜|返利热线|诱惑|快感|春宵|激情|成人|黄毒|复制|验货|淫荡|推销|抽大奖|抢|狂|销售|贷款|公关|套牌|利息|窃听器|一等奖|小灵通MA|中国银联|刷卡消费|KC短信|商务领航|深圳国领|深圳红岭|代开发票|提供|热线|资金|担保|请愿|台湾|咨询|麻将|发沦|法仑|集团|发论|朱容基|人民真实报道|人民报讯|东突厥斯坦伊斯兰运动|玄机|九、评|九-评|预约卡|反日|钓鱼岛|潜在用户|银行联合管理局|操你娘|SIM卡抽奖|傻B|日你妈|鸡巴|操你|小鸡鸡|dafa|强奸|fuck|妓女|干你娘|天葬|三码|六码|九码|枪支|迷药|王八蛋|婊子|蠢猪|畜生|弹药|暴乱|我X X你|我XX你|通信维权|txwq.net|新唐人|华人媒体|肉棒|J巴|做爱|作爱|淫|68170802|伴游|刻章|倒卖|反攻|特价机票|打折机票|001工程|16大|17年|21世纪中国基金会|23条|610洗脑班|6-4tianwang|89-64cdjp|9评|bignews|bitch|boxun|B样|chinaliberal|chinamz|chinesenewsnet|cnd|creaders|dajiyuan|dfdz|dpp|falu|falundafa|fa轮|flg|freechina|freedom|freenet|GCD|hongzhi|hrichina|huanet|hypermart.net|incest|jiangdongriji|lihongzhi|making|minghui|minghuinews|nacb|naive|nmis|paper64|peacehall|playboy|renminbao|renmingbao|safeweb|sex|shit|simple|svdc|tibetalk|triangle|triangleboy|UltraSurf|unixbox|ustibet|voa|voachinese|wangce|wstaiji|xinsheng|yuming|zhengjian|zhengjianwang|zhenshanren|zhuanfalun|爱国者同盟|安魂网|八九|八老|巴赫|白军|白立朴|白梦|白皮书|包皮|保钓|鲍戈|鲍彤|暴政|北大三角地论坛|北韩|北京当局|北京政权|北京之春|北美自由论坛|贝领|被盗|屄|逼样|布局十七大|彩民|蔡崇国|蔡武|藏独|操逼|操比|操蛋|操你妈|操他|曹长青|曹刚川|插你|柴玲|常劲|车仑|陈炳基|陈蒙|陈破空|陈水扁|陈希同|陈小同|陈宣良|陈一谘|陈总统|陳水扁|成人书库|程凯|程铁军|程真|迟浩田|持不同政见|赤匪|赤化|赤龙|赤裸|出卖|出售答案|春夏之交|春夏自由论坛|打炮|大b|大逼|大比|大彩|大花逼|大纪元新闻网|大纪园|大家论坛|大陆当局|大史|大史记|大史纪|大中国论坛|大中华论坛|大众真人真事|戴相龙|弹劾|登辉|邓笑贫|邓颖超日记|迪里夏提|地下教会|地下刊物|第四代|电视流氓|丁关根|丁元|丁子霖|东北独立|东方红时空|东方时空|东南西北论谈|东社|东土耳其斯坦|东西南北论坛|东洲|动乱|独裁|独裁政治|独夫|独立台湾会|独立中文笔会|杜智富|多维|屙民|俄国|二B|二逼|发愣|发抡功|发伦功|发论公|发论功|发骚|发正念|法*功|法lun功|法功|法会|法愣|法抡功|法轮功|法輪|法十轮十功|法谪|法谪功|反封锁|反封锁技术|反腐败论坛|反攻大陆|反共|反人类|反社会|方励之|方舟子|放入春药|飞扬论坛|斐得勒|废除劳教签名|废统|费良勇|分家在|粉嫩小洞|粉饰太平|风波记|风雨神州|风雨神州论坛|封从德|封杀|冯东海|冯素英|佛展千手法|阝月|付申奇|复转军人|傅申奇|傅志寰|干死你|肛交|肛门|高官|高文谦|高薪养廉|高瞻|高自联|睾丸|戈扬|鸽派|歌功颂德|蛤蟆|个人崇拜|工力|工自联|功法|共产|共党|共黨|共狗|共军|狗b|狗操|狗卵子|狗娘|狗屎|孤独|古兰经|关卓中|贯通两极法|龟公|龟头|郭伯雄|郭罗基|郭平|郭岩华|国家安全|国家机密|国军|国贼|哈批|韩东方|韩联潮|汉风|汉奸|何德普|何勇|和平请愿书|河殇|贺国强|红灯区|红岗|红魂网站|红色恐怖|红兽|宏法|洪传|洪吟|洪哲胜|胡紧掏|胡锦滔|胡锦淘|胡景涛|胡平|胡耀邦|胡总书记|护法|花花公子|华建敏|华通时事论坛|华夏文摘|华语世界论坛|华岳时事论坛|黄慈萍|黄祸|黄局|黄菊|黄翔|回民暴|回民暴动|悔过书|火凤凰|鸡八|姬胜德|积克馆|基督|激情大片|激情电影|集体上访|集体做爱|纪元|寂寞|贾庆林|贾廷安|贾育台|奸淫|建国党|贱逼|贱比|贱货|贱人|江core|江ze民|江蛤蟆|江流氓|江罗|江绵恒|江青|江戏子|江则民|江泽慧|江责民|江澤民|江贼|江贼民|江折民|江猪|江猪媳|江主席|姜春云|将则民|茳澤民|僵贼|僵贼民|讲法|蒋彦永|蔣彥永|酱猪媳|交媾|叫床|教养院|接班|揭批书|戒严|金尧如|禁看|经文|惊暴双乳|精液|精子|警察|军转安置|军转干部|开放杂志|看中国|抗议|考后付款|考前发放|靠你妈|跨世纪的良心犯|狂操|邝锦文|来京上访|兰大|蓝丝带|烂逼|烂比|烂货|劳动教养所|劳改|劳教|老江|老姜|老毛|老人政治|黎安友|李长春|李大师|李登辉|李红痔|李宏志|李宏治|李洪宽|李洪志|李继耐|李兰菊|李岚清|李老师|李录|李禄|李瑞环|李少民|李淑娴|李旺阳|李文斌|李小朋|李小鹏|李月月鸟|李志绥|李总理|李总统|里藏春|理想信念斗争|连胜德|联合起诉最高人民法院|联总|廉政大论坛|炼功|梁光烈|梁擎墩|两岸关系|两岸三地论坛|两个中国|两会|两会报道|两会新闻|聊聊|廖锡龙|林保华|林彪|林长盛|林樵清|林慎立|林昭纪念奖|凌锋|刘宾深|刘宾雁|刘刚|刘国凯|刘华清|刘俊国|刘凯中|刘千石|刘青|刘山青|刘士贤|刘文胜|刘晓波|刘晓竹|刘永川|流亡|柳树中学|龙虎豹|娄义|陆委会|吕京花|绿色雨|抡功|伦功|轮大|轮功|轮奸|罗干|罗礼诗|裸干|妈批|马大维|马克思|马良骏|马三家|马时敏|卖逼|卖比|卖国|瞒报|毛厕洞|毛都露出|毛片|毛泽东|毛贼东|美国参考|猛男强奸|蒙独|蒙古独|蒙古独立|孟令伟|密穴|绵恒|民国|民进党|民联|民意|民意论坛|民阵|民主|民主墙|民族矛盾|民族问题|明Hui|明慧|莫伟强|木犀地|木子论坛|奶头真红|奶子|南大自由论坛|南华早报|闹事|倪育贤|你妈|你妈的|你娘|你说我说论坛|牛逼|牛比|潘国平|盘古乐队|泡沫经济|喷你|屁眼|平反|破鞋|祁建|齐墨|钱达|钱国梁|钱其琛|枪手|抢粮记|乔石|亲美|亲日|钦本立|秦晋|青天白日旗|轻舟快讯|清纯|情妇|情色大片|情色电影|庆红|去你妈的|全国两会|群奸|群体灭绝|热比娅|热站政论网|人民真实|人民之声论坛|仁吉旺姆|日内瓦金融|日你|日死你|日元贷款|肉洞|肉棍|肉体|肉穴|乳房|瑞士金融大学|骚逼|骚货|骚穴|傻逼|善恶有报|上海帮|上海孤儿院|少妇|邵家健|射精|神通加持法|沈彤|升天|生者和死者|盛华仁|盛雪|失密|十八摸|十七年|石戈|时代论坛|时事论坛|世界经济导报|世界通|事实独立|试卷、|试题答案|收容所|数据中国|双十节|氵去|氵去车仑工力|水扁|税力|税票|司马晋|司马璐|司徒华|斯诺|四川独|四川独立|四级答案|宋xx|宋平|宋书元|宋祖英|苏家屯|苏绍智|苏晓康|他妈|他母亲|台独|台盟|台湾独|台湾独立|台湾狗|台湾建国运动组织|台湾青年独立联盟|台湾政论区|台湾自由联盟|太子党|贪官|汤光中|唐柏桥|唐捷|陶驷驹|讨伐|讨伐中宣部|滕文生|天安门|天安门录影带|天安门母亲|天安门事件|天安门屠杀|天安门一代|天怒|舔奶|同胞书|童屹|统独|统独论坛|统战|涂运普|屠杀|外交论坛|外交与方略|外蒙|晚年周恩来|万润南|万维读者论坛|万晓东|汪岷|亡党|王宝森|王炳章|王策|王超华|王丹|王辅臣|王刚|王涵万|王沪宁|王军涛|王力雄|王瑞林|王润生|王若望|王希哲|王秀丽|王冶坪|网特|尉健行|魏京生|魏新生|温加饱|温元凯|文革|文化大革命|文学城|窝囊中国|我操|我操你|我的后讨伐中宣部时代|我日|我是回民|无帮国|无界浏览器|吴百益|吴邦国|吴方城|吴官正|吴弘达|吴宏达|吴仁华|吴学灿|吴学璨|吾尔开希|五不|伍凡|西藏独|西藏独立|西藏论坛|洗脑|下体|先天健康法|香港明报|项怀诚|项小吉|小参考|小穴|晓德|肖强|邪恶|泄密|谢长廷|谢选骏|谢中之|心藏大恶|辛灏年|新党|新观察论坛|新华通论坛|新疆独|新疆独立|新生网|新语丝|信用危机|邢铮|性爱|性福|性交|性交大赛|性交姿势|性欲|熊炎|熊焱|修炼|徐邦秦|徐才厚|徐匡迪|徐水良|许家屯|学潮|学联|学习班|学运|学自联|雪山狮子|亚洲自由之声|严家其|严家祺|阎明复|颜射|燕南评论|央视内部晚会|杨怀安|杨建利|杨巍|杨月清|杨周|姚月谦|夜话紫禁城|一党专政|一党专制|一塌糊涂|一中一台|伊斯兰|义解|异见人士|异议人士|易丹轩|易志熹|阴唇|阴道|阴道被捅|阴蒂|阴茎|阴水|淫水|淫图|淫穴|尹庆民|英语四六级答案|鹰派|由喜贵|幼齿|幼女|于大海|于浩成|余英时|舆论反制|宇明网|欲望|远志明|岳武|在十月|昝爱宗|则民|择民|泽民|贼民|曾培炎|曾庆红|张伯笠|张博涵|张钢|张宏堡|张开双腿|张林|张万年|张伟国|张昭富|张志清|招妓|赵海青|赵南|赵品潞|赵晓微|赵紫阳|哲民|真相|真象|争鸣论坛|正见网|正邪大决战|正义党论坛|郑义|郑源|政权|政治反对派|政治犯|支那|指点江山论坛|致胡书记的公开信|中俄边界|中俄密约|中功|中共|中国报禁|中国泛蓝联盟|中国复兴论坛|中国改革年代政治斗争|中国孤儿院|中国和平|中国论坛|中国社会的艾滋病|中国社会进步党|中国社会论坛|中国威胁论|中国问题论坛|中国真实内容|中国之春|中国猪|中國當局|中华大地|中华大众|中华讲清|中华人民实话实说|中华人民正邪|中华时事|中华养生益智功|中华真实报道|中宣部|钟山风雨论坛|周恩来忏悔|周恩来后悔|周恩来自责|周锋锁|周刊纪事|周天法|周旋|朱嘉明|朱琳|朱毛|朱溶剂|猪操|猪聋畸|猪毛|主义|专业代考|专制|转法轮|转化|自民党|自已的故事|自由民主论坛|自由写作奖|自由亚洲|自主择业|宗教压迫|走光|走私|作秀|做爱经典|做爱全过程|做爱挑逗|A片|X夜激情|波波|处女终结者|调情|发情|风骚|干柴烈火|高潮|嘿咻|簧片|禁区|老二|两性狂情|裸体|咪咪|命根|情色|情欲|热辣|骚|色诱|色欲|少女高潮|失身|双腿间的禁地|销魂|小弟弟|性高潮|性事|性游戏|夜激情|阴毛|隐私|云雨|4．25事件|泡沫经济1|捐献|灾区|专卖|大盘|证券|股票|省委|中央|奥运|北京|辅导|特价|封顶|公寓|疯狂|性感|暑假|暑期|补课|平方米|捐赠|招商|地震|街铺|旺铺|四川|产权|酒店|按摩|桑拿|KTV|抢购|游戏|留学|出国|样版|培训|赠送|keyname|l2590803027|TMD|暗杀|报警|北美讲坛|北美讲坛s|笨蛋|病业说|超常科学|陈至立|冲突|打架|打压|大便|大法弟子|大纪|登天梯|邓晓平|颠覆中国政权|颠覆中华人民共和国政|电信|东突厥斯坦伊斯兰|毒气|赌具|短信广告|短信商务广告|恶劣|恶势力|恶心|法L功|法轮大法|法轮佛法|法正|珐.輪功|反腐败|放屁|分裂中国|分裂中华人民共和国|封杀酱猪媳|腐败|该 死|干 你 妈|高利贷|公证|狗逼|广 闻|鬼子|国民党|核污染|黑车|衡阳万通房产|胡书记|华夏文摘快递|回良玉|鸡吧|鸡鸡|几巴|几吧|假钞|讲事实 要说法|结帐|巨奖|军委主席|开天目|康涛杰|老 婊 子|老子|李 洪 志|李三共志|李向东|联合行动|联通|联通贵宾卡|联通商务通|联总这声传单|领事馆|流氓|六 四|六●四|论坛|马会|梦网洪志|名山县|明慧网|末世论|你爸|牛B|虐待|锘挎瘺娉戒笢1234|锘挎瘺娉戒笢12345|窃听王|求购|人民之声|人渣|忍无可忍|三水法轮|骚 货|煞笔|省委大门集合|省政府大门集合|使馆|刷卡|水深火热|死亡|宿命论|隧道|台湾共合国|贪污犯|唐家璇|天府广场集会|推翻社会主义制度|网通|吴仪|五套功法|下法轮|下岗工人|现金奖|消业论|小来子|小平|小泉纯一郎|阳痿|以身护法|以血护法|阴 道|阴胫|宇宙真理|糟蹋|泽东|张中伟|找政府评理|真、善、忍|真善美|中共当局|中共独裁|中共统治|中国六四真相|中国民主党联合总部|中华大地思考|周永康|朱金基|紫阳|自杀|自由网|总书记|阻止中华人民共和国统|代理|第一次|慧网|汕尾|圆满|证件|被日|信用卡空卡|猪头|妈的|奶奶的|KC网站|KC提示|KC嘉年华|机票|航空售票|俄罗斯|坐台|移动|出台|党退|退党|短信群发|分众|杂种|狗日的|12590|259o|dpp大法|rfa|taip|安装卫星电视|北京之春民主论坛|北美论坛|本公司|本公司代开|操你妈逼|成人电影|成人频道|成人生活片|春夏论坛|代开票|代人报仇|短信平台|二手车|发~票|各种发票|九成新|林保华射精|刘士贤司马晋|龙虎豹宋书元|麻将机|卖国唐捷|绵恒异议人士|男女公关|南大论坛|盛雪辛灏年|四联航空|台湾联盟|套牌车|无抵押贷款|五不争鸣论坛|性服务|学潮晚年周恩来|移动禁忌的敏感词|追讨债务|滚蛋|去死|死去|冠希|艳照门|艳门照|财富|高考|套现|信用卡|结款|房款|楼盘|收费|招生|限量|特卖|赌博|彩票|增值税|毛泽乐|钱庄|17大|十七大|九成新车|中共中央|娇嫩欲滴|搞日|办证|公证局|公安|地税局|登记|代款|将军|情感|葳独|特色|民航|售票|限量特卖|首付|基地|开发区|国庆|回馈|开课|开幕|发售|筹额|奶粉|房源|电子狗|电$子&狗|电 子 狗|加密狗|开业|天线|全套节目|外新闻|电子*狗|狗|热销|火爆热销|平方|医院|爆热|红旗|政策|自由|亦凡|发 票|抽 奖|赠品|世界|协会|总部|售楼|购房|买房|派送|礼品|成本价|现房|银行卡|银行|车位|新房|购买|低价|考试|购车|户型|盈利|讲座|联系|积分|会员|迷魂药|迷奸药|卖淫|催情药|处女|充气娃娃|造业|中国移动|中国网通|中国联通|中国电信|周恩来|毛泽东123|毛泽东2|猪毛1|不得好死|骗子|死老婆|死儿子|伟哥|航天|张健|yy通讯录|生肖|九成|一码|一肖|票据|透支|摇奖|公证处|代开|彤体|欧美成人|狂野|狂吟|雷管|炸药|思想开放|体健貌端|操他妈|我日你娘|薛伟|学生证|结欠|班机|疫情|安拉|孙文|十七届|信产|奸商|发改委|江核心|肉鸡|付款|录音|方说|想怎么玩就怎么玩|檫进|鸡芭|刺激|荫道抽檫|军 火|军火|唐志权|piao|免联考|新疆暴乱|张健平|安全套|私募基金|私 募|私募|阳光私募|房 地 产|地 产|商品房|购 房|评估|验资|婚外情|侦探|张林荣|劵|焗|㎡|地价|楼面|佛教|必中|惠泽社|中心彩霸|www.82995.com|www.400995.com|票务|评估车辆|AP8899|BAISE8.COM|BAIYIDU.COM|BLOGSKY.COM|CASHFIESTA|CC.TOPZJ.COM|CCTV30.NET|CN960.COM|CN-EDU.NET.CN|COO1.CN|北高联|市工联|六.四|7·22|4·25|维勒|南华|陆委|党国|赤色|何清涟|林幼芳|薛飞|张宏民|华岳|江锦恒|项怀城|宏恩|洪治|海龙大厦|陈良宇|KK36K.COM|KK6K.COM|KOOOK.COM|L23.CN|LUOLE.COM|MFXDY.COM|MM6888.COM|MMDYY.COM|MMMJJJ.COM|MP668.COM|MP8888.19.CN|MSMSHOTEL.COM|MTV139.COM|MYCOOL.COM|MYLEADING.COM|MYRICE.COM|MYRMVB.COM|NUD8.COM|O788.NET|P9988.COM|PK黑社会|PP44551.COM|QQ1234.CN|QQDY.NET|QU78.COM|RDYI.COM|TAOBAO.COM|tian'anmen|six-four|TOM368.COM|UFOYY.COM|USERRATE|VHP123.COM|VICP.NET|VV510.COM|WIN40.COM|WWW.KKKMM.COM|XINGFO.COM|XZFN.COM|YAHOO123|YU520.COM|ZZZG.COM|办理证件|蔡子民|陈炳德|陈云林|成人片|成思危|出售假币|出售枪支|出售手枪|春药|大学骚乱|戴海静|帝国之梦|独自偷欢|短信群发器|对日强硬|恶搞晚会|反华|反政府|肛温|高干子弟|韩启德|何鲁丽|怀春少女|换妻俱乐部|黄色小电影|昏药|机巴|激情小电影|佳静安定片|上海合作组织|上天在警告世人|生化武器|生化袭击|生物武器|生者与死者|师&傅&李&洪&志|十二个春秋|十七大前后的中国|事纪神|市长自杀|双规|台湾特工|贪恋权力|坦&荡&正&法&路|体协原副主席宋万年|天安门自焚|天药|铁路|同化宇宙|突&破&网&络&封&锁|屠城|退脏不咎|退脏帐号|瓦良格|完全自杀手册|万&古&事&為&法&來|万&古&事&为&法&来|王斌余|威海政府掀全民募捐|浪潮|未来自由中国在民间|瘟疫|窝囊的中国|无线针孔摄象机|武装冲突|五一&游行|物价上涨|西藏&暴乱|西藏&独立|西藏&起义|西藏边防|希望之声|洗&脑&酷&刑|系统神学|湘潭韶山|湘阴群体事件|乡亲铡刀|消息封锁|邪灵|新股发行|新唐人电视|新闻管制|新一届|性伴侣|性幻想|许万平|学生运动|血吸虫|血洗|逊克农场26队|艳照|杨长军天安门广场自残事件|野鸡|一手操控|一夜情|医生状告医院|颐和园|银--行|银-行|银行卡诈骗|淫邪|隐瞒数据|隐瞒疫情|隐形无线耳机|庸医|用&真&像&打&破&禁&锢|尤甘斯克|舆论钳制|玉素甫|原帐号|圆明网|张戎|张万钧|张玉凤&毛泽东|帐--号|帐-号|帐号|账 号|账户|招--行|招-行|招待费耗资3700亿|招行|赵&紫&阳|哲蚌寺|政府黑暗|政协委员|郑茂清|郑筱萸案件|证券&巨资|支持藏独|中--行|中-行|中共高层|中国反卫星武器|中国农民调查|中国铁路&签名|中国丈夫毛泽东的情事|中天行公司|中行|中院工作报告|重疫区|祝春林|专制政权|转&法&轮|追悼会|紫陽|总统号|趙&紫&陽|谪系人马|芙蓉姐姐|浏阳河水出现异味|滕&兴&善|滕兴善|监听王|蒋树声|蒋正华|禁书|靖志远|巨乳美女|军长发威|军中声音|黎阳平|李海峰|林文漪|六四事件|CRDY.NET|DGCAR.COM|堪布|新生|天目|境界|邪魔|放光明制作中心|正信|清楚邪恶|放下执着|公道话|健康法|真耶稣教会|统一教|公投|翻案|慢驶|罢驶|冤案|家族势力|白粉|黑帮|EstaZolam|艾司唑仑|舒乐安定|Sleeping Pill|丸仔|拍丸|北姑|北妹|嫩穴|恶搞|三公|外围|对冲|大庄|赔率|出千|设局|下盘|波胆|刷卡成功|买春|爆炸装置|拨968|国家领导人|未来震源|汕特农信社|汕头农村信用社|高息不要|赶快取款|破产|重组|免房费名模女儿|名模尊享|赌球|曾道人|肖中特|特别号码|仙灵签|中特|套牌小车|毒品|点数优惠|地下钱庄|向外代办|司有代票|司有代税|司有开票|司有开税|发票代理|发票代办|发票提供|4-Jun|df'd|DY1122.COM|DY587.COM|DY867.COM|falungong|GF84.COM|GZXSG|HAODY8.3126.COM|HDY123.COM|HK8866.0234.NET|http://w6.pykz.com|https://u3.igliss.com|HUITIANXIA.COM|IE0.NET|IING.CN|IYN.COM|JISHUQI.COM|JXSEDU.COM|K6DY.COM|高干子女|高校暴乱|高校群体事件|高校骚乱|耿惠昌|古方迷香|官商勾结|鬼村|郭国汀|枪支弹药|窃听器材|色狐|色虎|色情服务|色情小电影|身份证生成器|升达毕业证|手机复制|天鹅之旅|投毒杀人|透视眼镜|吴阶平|IP668|夏勇|肖捷|谢旭人|性狐|性交易|许嘉璐|血腥图片|阳毛|杨洁篪|摇头丸|淫靡|远程偷拍|张定发|张小平|侦探设备|郑恩宠|郑万通|周济|猪蓝耳病|子女任职名单|自杀指南|自制手枪|zsjbk|罗豪才|麻醉钢枪|麻醉枪|麻醉药|麻醉乙醚|买卖枪支|毛一鲜|美穴|蒙汗药粉|迷★奸|迷昏药|蜜穴|牟新生|拍肩神药|枪决女犯|枪决现场|强效失忆药|强硬发言|乔清晨|三唑仑|自杀手册|kaiping.5d6d.com|jmc365|gunzhou|奸|淫乱|迷幻药|枪|枪枝|法*轮*功|移动公司|移动手机卡|移动卡|Content|滴智慧|滴智囊|点滴智囊|点滴智慧|SIM卡|手机智能卡|聚会|冲击|子弹|报复|爆炸|武器|气功|对抗|拷贝|轮回|不影响对方|聚集|绝食|劳工|1.37E+10|飞雪|税票据|统治|多功能手机卡|转世|冰毒|税点低|工运|64运动|抵制|农运|维权|血腥|手枪|针扎|法，轮，功|法，轮|法 轮|法　轮　功|\|坐交|诅咒|自由亚洲电台|自由亚州|自慰|自拍|自摸|庄家|转法|专政|专业拷贝|助考|朱德|朱？基|终结者|智能卡|智能SIM|制服|指标股|执法犯法|政治|震动棒|贞操带手铐|贞操|造爱|援交|欲罢不能|于幼军|幼交|应招|樱井|银龙岛|阴囊|阴门|阴茎增大|阴户|一码中特|一党|一本道|夜总会|夜勤病栋|妖野|阳具|艳舞|颜均|学生妹|胸罩|性虐待|性免费电影|性感内衣裤|性感猫装|性爱用品|行房|刑警|星崎未来|信息产业部|信产局|新唐人电视台|小泽圆|小泽园|小泽玛莉亚|小电影|消防队|向忠发|下注|夕树舞子|吸储|西藏流亡政府|武腾兰|武藤兰|武警|无修正|无网界浏览|无网界|无毛|无界浏览|无界|文字狱|慰安妇|推油|吐血|土匪政府|偷听器|偷税|偷情|偷拍|偷窥|捅我|捅你|同志用品|同房|跳蛋|添空|特码|讨债公司|唐子|唐人电视台|太石村|台湾团结联盟|孙中山|宋庆龄|宋美龄|丝袜美腿|丝袜|司法警官|司法部门|司法部|私处|爽死|双证|双轨|双峰|书记|兽性|兽交|首长";
		var non_special_char_regexp4 = "手机游戏|手机铃声下载|手机铃声|十八岁以下|师涛|绳虐|声色场所|慎入|身份证号码生成器|少女峰|少儿勿入|少儿不宜|上床|汕尾东洲|色友|色情网站|色狼|三唑|三浦爱佳|三级片|三级|三个代表|入珠环|肉欲|任自元|人大|群射|群交|全仓|权重股|强歼|强盗警察|强暴|钱还没汇吧|蒲团|迫害法轮功|破处|骗局|彭德怀|喷血|喷尿|喷精|判断|盘口|虐杀|女优|女女|女教师|你妈逼|你敢上吗|内射|内裤|男女自慰用品|母子|明心网|明思网|民警|迷奸|猛插|妹痛|妹疼|美臀|美腿|美少女|美女|毛泽东复活|猫肉|马英九|马亚莲|马经|马嘉爵|麻衣|妈个|裸|罗永忠|罗长福|论公|论功|论攻|沦公|沦功|沦攻|伦公|伦攻|轮公|轮攻|乱伦|乱交|露毛|露点|漏税|六四天网|六合采|流氓警察|刘少奇|留园网|凌辱|铃声下载|菱恝|连发|李远哲|李元龙|李毅斌|李先念|李建平|李红志|李洪志师父|老虎机|拉斯维加斯|捆绑|狂干|口交|口技|空难|开苞|绝版|巨波|九评共产党|九六七六六七二二|惊暴|惊 喜|惊 爆|惊 暴|京爆|京暴|京 爆|京 暴|近亲|禁片|金泽文子|姐痛|姐疼|叫床女优|交警|交大高考招生黑幕|交班|蒋世华|蒋经国|蒋介石|蒋方良|检察院|假币|妓师|及川奈央|极景|激流中国|激 情|火车票|火 爆|火 暴|黄琦|黄丽满|黄菊　|换妻|华国锋|护士|红智|红志|弘法|洪智|黑瞎子岛|黑社会|何山|和弦|国家信息|共铲党|公款|公检法|公安局|公安部|功德圆满|更衣|革命|哥痛|哥疼|高智晟|高价票|高干|干她|干他|干你|傅怡彬|夫妻性事|风花|封锁|丰乳|放盘|泛绿|泛蓝|饭岛爱|反宇宙|发/票|多选|多党|杜导斌|赌徒|董必武|丁字裤|调教|颠覆国家政权|弟痛|弟疼|地下先烈们|地下的先烈们|底裤|邓力群|道具|荡妇|单选|代办|大泽惠|大片|大陆|大鸡巴|大盖帽|大 纪元|达赖喇嘛|吹萧|床上功夫|床第教战|川岛和津实|臭作|城管|陈秋兰|陈独秀|潮吹|朝河兰|超跌股|长濑爱|插我|插她|插他|插插|草莓牛奶|蔡陆军|博彩|博采|波霸|拨打9680|拨9676|变态|变频棒|避孕套|逼真女下体|被迫|被虐|被逼|暴干|暴动|薄格|包胡|百家乐|白秀华|把钱汇到|按摩棒|《新京报》|[sm]|[hz]|[av]|SM用品|A级|AV女优|1989天安门|18岁以下勿入|18岁以下勿看|18岁以下|18禁|东突契斯坦|法轮功好|迫害致死|非法拘禁|邪恶势力|助师世间行|遭受迫害|下载|台湾国|活佛|爱液|奶头|五邑小区在线|董建华|李驻铭|基本法|二十四条|京官治港|特首|直选|曾荫权|张京生|党棍|税点优|税率低|税率优|点数低|点数优|税金优|税后付款|税查验|税上网|税号码改13|税务|票优惠联系|脱衣舞|代办证件|上网文凭|发票刻章车牌|信息封锁|洪法|修正法|龙华经|封圣|武装反抗|敌对分子|难属|海外民运|宪政|麒麟文化|梵蒂冈|私家侦探|天灭中共|反奥运|破坏奥运|抵制游行|抵制示威|抵制奥运|福娃出事|安装天线节目|春宫|卖春|陪睡觉|叫小姐|叫鸡|男妓|国家领导|罢餐|罢市|维护权益|言论自由|兴奋剂|蛋白同化制剂|肽类激素|赌恒指|发票代开|车辆手续发票|对外代理|代理税率|税点优惠|税率优惠|优惠税金|定税企业|对外代办|票源正规|国地税|税金低|文凭车辆|对宗教自由的迫害|大善大忍|讲清真象|大法之声|法正乾坤|大法洪转|破坏大法|练功点|证实大法|转化班|现世现报|破坏正法者|走入邪悟者|新经文|师父评注|超高级功法|开周天秘法|白痴|混蛋|自然功|小日本|实际神|蠢蛋|蠢货|八婆|三陪女|主神教|菩提功|菩提教会|宏宝大法王|金普提上师|菩提法门|玄音大法|高层生命|诸世纪|破迷与正心|大纪元网|讲清真相|世界开运气功|空劲功|中天一气功|自然静坐法|大层功|殉道圣人|摩门教|复临安息日会|观音法门|一贯道|师傅法身|宗教迫害|亚洲自由电台|自由导报|赤党|网络封锁|相互勾联|党禁|平反六四|民选参政|渗透中共|政治变革|呼吁书|串联聚会|以商养政|以文养政|民运返家|恐怖手段|十足十恶|政治诉求|绝食宣言|四无目标|社会民主派民运|八四纲领|政体改造论|民运功绩论|和平改革八位一体|四步行动|废除中共一党专制统治|极权专政|中共特权阶层|中共统治集团|中共当权者|民生危机|党棍官僚|突破信息封锁|网络活动颠覆|人权保障|对人权的侵害|虐待人权和宗教自由|宇宙大法|宇宙众生|贺信彤|践踏人权|各界众生|邪恶生命|邪恶因素|爱护与救度|救度一切众生|残酷迫害|疯狂施暴|保持正念|抵制邪恶|救度世人|突破封锁|阎庆新|圆顿|金麒麟网|慈心佛性|五至七步功|呼喊派|烧饼歌|玛雅预言|霍比预言|格庵遗录|真相资料|大陆教会|合一共融|巴哈依教|伊扎布特|偷越边境|潜入潜出|台人治台|地下律师服务点|打工者俱乐部|外来工协会|公民私权|告全国同胞书|颠覆国家|真修弟子|假冒|家乐福游行|家乐福示威|反法游行|反法示威|地动仪|雪灾西藏地震|福娃火车相撞地震|日本军舰|人权调查|反共游击队|民怨|血债|卖国贼|义军|高压|异己|兵运|联名信|颠覆|骚乱|血渍|社会不公|谢万军|魔难|救度|暴行|盖棺定论|酷行|六一零|法轮功信徒|罄竹难书|真念|蛊惑|讲真相|觉者|消业|上层次|正念|结印|业力|魔障|善念|圣火|噶玛巴|仁波切|密宗|裸秀|吞精|T台|乳霸|媚娘|裸选|全裸|奶交|欲火|真空秀|脱光光|狼式服务|电动红床，税票|票/据|发-票|【发】【票】|增值税票|发＊票|漂*据|票*据|（发）（票）|陈进|消魂|兑领|撕票|撕 票|撕　票|绑架|绑 架|绑　架|癌症村|安徽高考文科统分|安徽农民工子弟学校|安全投毒|暗访摄像包|包机|保钓活动|保钓行动|冰&点|冰点|勃起|不为人知的故事|藏族&独立|查禁八本图书|超 级短信|超 级信使|超级 短信|超级 信使|超级&短信|超级&信使|超级短信|超级信 使|超科学|朝令夕改|陈光诚|陈水扁过境美国|陈晖|出国考察|摧毁旧卫星|达赖&抗议|大紀元|大连建厂|大面积爆发|戴松林疑案|党魁|党专制|倒行逆施|滴&滴&血&泪&唤&君&醒|抵制法货|抵制家乐福|抵制日货|东海天然气|杜湘成|二手汽车|法hl|法hhl|法&轮|法&轮h|法&轮&转&动|法&仑|法&輪|法&囵|法＆轮|法国&游行|反垄断法|反宇宙的力量|仿五四枪/狙击枪|放&光&明&镜&像|废除劳教签名活动|封城|福建戒毒所|福莱斯特|甘丹寺|高家伟|高考舞弊|高考泄题|高考移民|高校&游行|高校罢餐|高校罢课|高莺莺死亡案件|工--行|工-行|公开信|国家恐怖主义|国家药监局|国统会|哈工大女博士|韩桂芝|汉唐证券|杭州湾跨海大桥|航空母舰|核电站|河南&艾滋病|黑龙江&干部|衡阳中级人民法院|衡阳中院|衡阳中院工作报告|宏观调控|红顶商人|胡温面临的地雷阵|沪-昆|沪昆|婚外恋|祸国殃民|鸡奸|姬鹏飞|嘉禾事件|假新闻|建--行|建-行|江xx|江黑心|江家班|江卖国|江氏|江氏集团|江氏一只黑手|江系人马|讲&真&相&民&谣|讲&真&相&诗&歌|焦国标|交--行|交-行|交行|经租房|境外并购|九&评|九评讲播|救渡世人|绝食抗议|军权膨胀|军用炸药|开单提成|康妮·契普卡|康晓光|康小光|克劳塞维茨|库尔勒市长|扩大台湾农产品|拉案|拉法叶舰|拉萨&戒严|拉萨&抗议|喇嘛&抗议|力霸|两性|两性视频|辽宁海城二台子社区|辽宁两会|刘胡兰|刘杰告状信|刘志华生活腐败|流氓政权|六合彩/买码|六四屠城|陆建华|绿色台商|轮&工&力|裸之秀|马英泽|美国副国务卿|门徒会|迷魂药/迷奸药|缅甸问题|民运分子|民主自由|明&慧&网|明斯克号|漠&视&人&权&施&独&裁|木塔里甫|内部日记|尼日利亚|你&有&权&知&道|农--行|农-行|农行|炮轰中国教育部|平可夫|普渡众生|瀑布沟|汽车反测速雷达|禽流感|清水君|萬&古&事&為&法&來|取款风波|取消利息税|权贵私有化|权威主义|人大代表|人大主任|人权圣火|人权圣火之歌|溶心法理|萨拉托加|三峡旅游资源被垄断|三峡移民|三唑伦|色拉寺|杀戮|杀人奶粉|山西黑砖窑|试卷|中国国家防火墙|嫂|活体器官移植|活人器官|黄色影视|黄色小说|黄色文学|黄色网站|黄色图片|黄色漫画|黄色电影|根敦？确吉尼玛|丰乳美臀|成人影视|成人性爱用品|成人小说|成人文学|成人网站|成人图片|成人区|成人漫画|成人论坛|zhuanfalu|xxx|www.tibetalk.com|voa.gov|tianwang|self-immolation|secretchina.com|rfa.org|renminbao.com|porn|peacehall.com|paper|oppression|minghui.cc|minghui.ca|libertytimes.com.tw|kanzhongguo.com|hypermart|hrw.org|hrichina.org|hentai|faluninfo|falundafa.org|epochtimes.com|epochtimes|dajiyuan.com|censor|cdjp|bbc.co.uk|anime|Yinlong Island|WORD|PX|Nine commentaries|Li Hongzhi|G点刺激棒|G点|Falun Dafa|96800266|96766722|96766702|1Pondo|(sm)|(hz)|(av)|获得软件+详细阅读|0033.CN|00M.CN|0159.COM|0234.NET|0788.NET|0807.NET|117MM.COM|123838.CN|138SUIDY.COM|163.CN.COM|163.SH|168108.COM|1718DY.COM|17JY.COM|18858.COM|18SUIDY.COM|2006KK.COM|2006OK.OOM.CN|21WEBSKY.COM|22144.COM|26533.COM|29bbs.com|3126.COM|335.CN|3367.THISTV|35588.COM|35E.NET|37639.COM|4?25|400U|434.FUL|44299.COM|444577.COM|444667.COM|444669.COM|44551.COM|45553.COM|518.SH|55163.CN|555023.COM|555998.COM|55893.COM|566166.COM|566166.NET|5680.CN|5K5.CN|63569.COM|6688.I567.CN|6699.NET|678618.COM|7?22|70288.COM|76543.cn|7799.CN|7X77|8888666.3377.CN|88WONG.COM|8QU.NET|8V8X.COM|9126.NET|91i.net|96.CN|99735.COM|9SOHO.COM|ADS4CN.COM|AK66%37.COM|AK667.COM|AK77Y.COM|AM100|ANYP.CN|发票供应|发票出售|发票需要|发票办理|税票代理|税票代办|税票代开|税票提供|税票供应|税票出售|税票需要|税票办理|税务代|你好税提供|你好票提供|您好税提供|您好票提供|司有税票|有票开|I2590|.{0|8}|101.redirectme.net|2008奥运性感泳装|207.44.142.89|24.83.220.95|24.87.30.178|29t.com|51&游行|9&评|DA&法|FAllg|Faggg|SCRIPT|The Unknown Story|Ucloo|X泽民|airfresh_1.tripod|baishishi|bbs.ievista.com|belong.zapto.org|breakit.batcave.net|briefcase.yahoo.com|dal|dadaobao.myetang.com|dd21.kaxb.com|dick|donghua.zapto.org|elite.zapto.org|fgg|fall|freenet-china.org|fresh.hopto.org|ftp.xinhone.com|gau12.amxy.com|gui.hopto.org|h119.ath.cx|https://|lookatme0.tripod.ca|love21cn|loveroot|lt;embed|lt;img|ming.got-game.org|movie.yygov.com|mzc.zapto.org|noblock.no-ip.com|nolie.redirectme.net|nu18.com|okte|pointsmoney.com|qmnoog.homeip.net|qxbbs.homeftp.net|spr.hopto.org|spring.bounceme.net|suck|sy01.nhua.org|twfgm.no-ip.com|u1.tengotech.com|uc***|uw.slyip.com|w8.base-v.ch|w8.sullyhome.net|web3.km120.com|www.111shop.com|www.12488.com|www.500movies.com|www.90550.com|www.boybbs.net|www.dajiyuan.com|www.dajiyuan.com.cn|www.downdown.net|www.geocities.com|www.hellocd.com|www.hhslut.com|www.hkgirlz.com|www.in-wa.com|www.minghui|www.minghui.org|www.pussyasians.com|www.taiwanmovie.com|www.xys2.org|www6.kinghost.com|xiaopin.zapto.org|xxboy.net|zapto.org|zhina444.allhere.com|zhina444.xrs.net|大h|大hh&元|—";
		  var charArray=new Array()
			charArray[0]=non_special_char_regexp;
			charArray[1]=non_special_char_regexp2;
			charArray[2]=non_special_char_regexp3;
			charArray[3]=non_special_char_regexp4;
			var illegalStr='';
			for(j=0;j<charArray.length;j++){
				var a = charArray[j].split("|");
								
				for(i=0; i<a.length; i++){
										
					if(str.indexOf(a[i])!= -1){
						illegalStr=illegalStr+a[i];
						break;
					}
					
				}
			}
		   return illegalStr;
	}	
	
	
	//座机号验证
	
	function checkTelephone(str){
	
		var myArray=new Array();
		myArray = str.split(";");
		for(var i=0;i<myArray.length;i++){
			if(myArray[i]==null||myArray[i]==''){
				return false;
			} 
	
			var exp1 = /^[0-9\-\;]*$/;
			var exp2 = /^(086-(0\d{3}|0\d{2})-(\d{8}|\d{7}))+(-(\d{4}|\d{3}))?/;
			
			if(!(exp1.test(myArray[i]) && exp2.test(myArray[i]))){
				return false;
			}
	       if(!compStrLength(myArray[i],20))
	       {
	          return false;
	       } 
       }
		return true;
	}
	
	//身份证验证

	function checkPersonId(str){
		if(str==null||str==''){
			return false;
		}
		
		var exp1=/(^\d{15}$)|(^\d{17}([0-9]|X)$)/;

		if(exp1.test(str)==false){
		
			return false;
		
		}else if(str.length==18){
		
			var iSs = 0;
			
			var iY=0;
		
			var szVerCode="10X98765432";
		
			var iw=new Array();
		
			iw[0] = 7;
			iw[1] = 9;
			iw[2] = 10;
			iw[3] = 5;
			iw[4] = 8;
			iw[5] = 4;
			iw[6] = 2;
			iw[7] = 1;
			iw[8] = 6;
			iw[9] = 3;
			iw[10] = 7;
			iw[11] = 9;
			iw[12] = 10;
			iw[13] = 5;
			iw[14] = 8;
			iw[15] = 4;
			iw[16] = 2;	
			
			for(i=0;i<17;i++){
			
				iSs+= iw[i]*(str.substr(i,1)-"0");
			
			}
						
			iY = iSs % 11;
			
			var eChr=str.substr(17,1);
			
			var vChr=szVerCode.substr(iY,1);
						
			if(eChr==vChr){
			
				return true;
			
			}else{
			
				return false;
			
			}
			
			
		
		}else{
		
			//15位 未增加算法验证			
		
			return true;
		
		}

		
	}

	//非法字符验证
	
	function checkIllegalChar(str){
		
			// var non_special_char_regexp = ":,;,>,<,--,sp_,xp_,\\,dir,cmd,^,+,$,',copy,format,and,exec,insert,select,delete,update,count,*,%,chr,mid,master,truncate,char,declare";
			var non_special_char_regexp = ":,\",>,<,--,sp_,xp_,\\,dir ,cmd ,^,+,$,',copy ,format ,and ,exec ,insert ,select ,delete ,update ,count ,*,%,chr ,mid ,master ,truncate ,char ,declare ";
			var non_special_char_regexp2 = " dir, cmd, copy, format, and, exec, insert, select, delete, update, count, chr, mid, master, truncate, char, declare";
			var charArray=new Array()
			charArray[0]=non_special_char_regexp;
			charArray[1]=non_special_char_regexp2;
			for(j=0;j<charArray.length;j++){
				var a = charArray[j].split(",");
				
				var strint = str.length;
				
				for(i=0; i<a.length; i++){
					
					str=str.replace(a[i], "");
					
					if(str.length<strint){
						return false;
					}
					
				}
			}
		
		return true;
	}

	//数字验证
	
	function checkNumber(str){
		
		if(str==null||str==''){
			return false;
		}

		var Number = "0123456789";
		for (i = 0; i < str.length;i++)
		{   
		    // Check that current character isn't whitespace.
		    var c = str.charAt(i);
		    if (Number.indexOf(c) == -1) return false;
		}
		return true


	}
	
	//纯字母验证

	function checkChar(str){
		
		if(str==null||str==''){
			return false;
		}

		return /^[A-Za-z]*$/.test(str);
	}
	
	//电子邮件验证
	
	function checkEmail(str){
		var myArray=new Array();
		myArray = str.split(";");
		for(var i=0;i<myArray.length;i++){
		
			if(myArray[i]==null||myArray[i]==''){
				return false;
			}
	
			var result=myArray[i].match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);   
		    if(result==null) return false;   
		}
	 
	return true;
	}
	
	//日期验证
	
	function checkDate(str){
	
	
		if(str==null||str==''){
			return false;
		}

		return /([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))/.test(str);
		
	}
	
	//验证域名
	
	function checkDomain(str){
		
		if(str==null||str==" "){
			return false;
		}
	
	    if(str.indexOf(';')!= -1){
			var charArray = str.split(';');
		  
			for(i=0;i<charArray.length;i++){
			   
				if(!checkChinaDomian(charArray[i])){
				
				   return false;
				   
				}
			
			}
			return true;
	    }
	    else{
	       return checkChinaDomian(str);
	    }	
 
	}
   function checkChinaDomian(str){   
		var ym = new Array();
		
		ym[0]=".com.cn";
		ym[1]=".com";   
		ym[2]=".ac";   
		ym[3]=".net";   
		ym[4]=".org";   
		ym[5]=".edu";   
		ym[6]=".gov";   
		ym[7]=".biz";   
		ym[8]=".cc";   
		ym[9]=".info";   
		ym[10]=".tv";   
		ym[11]=".name";   
		ym[12]=".hk";   
		ym[13]=".中国";   
		ym[14]=".公司";   
		ym[15]=".网路";   
		ym[16]=".政务";   
		ym[17]=".公益";  
		ym[18]='.cn'; 


		var i=0;
		for(var j=0;j<ym.length;j++){
		  if(str.indexOf(ym[j]) != -1)
		  {
		     i=i+1;
		     var a = str.substring(str.lastIndexOf(ym[j])+ym[j].length,str.length);
			
		     if(a.length>0){
		        return false;
		     }
		  }
		}
		if(i==0){	
		   return checkDomianDetails(str);
		}
		return true;	
   }	
	function checkDomianDetails(str)
	{

		var strRegex = "[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\\.?";  	        
        var re=new RegExp(strRegex);  
        if (re.test(str)){ 
			return true;	
        }
		return false;	
	}	
   
    function checkNumberAndCharater(str){
   		var checkStr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._/-?=+-,";
		for (i = 0; i < str.length;i++)
		{   
		    var c = str.charAt(i);
		    if (checkStr.indexOf(c) == -1) return false;
		}
		return true;
    }	
	//验证ip地址
	
	function checkIp(str){

		if(str==null||str==''){
			return false;
		}
		// 0.0.0.0 -- 255.255.255.255
		//   /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/  
		var pattern=/^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/;
		return pattern.test(str);

	}
	
	/*判断起始IP是否小于终于IP
	* 黄志鲁
	*/
  function compareIp(startIp,endIp){
		if (startIp == endIp) {
			return true;
		}
	    //分解每个域作判断
		for (var i = 0; i < 4; i++) {
			var index1 = startIp.indexOf(".");
			var index2 = endIp.indexOf(".");
			var tmp1;
			var tmp2;
			if (-1 != index1) {
				tmp1 = startIp.substring(0, index1);
				tmp2 = endIp.substring(0, index2);
				startIp = startIp.substring(index1 + 1, startIp.length);
				endIp = endIp.substring(index2 + 1, endIp.length);
			} else {
				tmp1 = startIp.substring(0, startIp.length);
				tmp2 = endIp.substring(0, endIp.length);
			}
			
			if (1 == compInteger(tmp1, tmp2)) {
				return false;
			}
			if (2 == compInteger(tmp1, tmp2)) {
				break;
			}
		}
		return true;

	}
		//比较整数大小
	//黄志鲁
	function compInteger(strValue1, strValue2){
	      var  nValue1, nValue2 ;
	      nValue1 = parseInt(strValue1) ;
	      nValue2 = parseInt(strValue2) ;
	
	      if (nValue1 > nValue2){
	          return 1 ;
	       }
	      if (nValue1 == nValue2){
	          return 0 ;
	       }
	      if (nValue1 < nValue2){
	          return 2 ;
	       }   
	  }
	     //验证字符串的长度，不大于指定的值
	//罗飞翔   
    function compStrLength(strValue,strLength){
       if(strValue.length>=parseInt(strLength)){
          return false;
       }
        return true;
    }
    
    
    
     /**
    	判断要上传的文件类型是否符合规范
    	documentValue： 标签的 value
    	type 上传类型  1表示前置附件  2.批量导入xls
    */
    function ValidateFileType(documentValue,type){
    	var types=null;
    	if(type==1){
    		types=new Array("jpg","bmp","gif","png","jpeg");
    	}else if(type==2){
    		types=new Array("xls");
    	}
    	//var files=document.getElementsByName(documentName);
    	
    	
    	//for(var i=0;i<files.length;i++){

    	//	var filetype=files[i].value.substring(files[i].value.lastIndexOf(".")+1);
			var filetype=documentValue.substring(documentValue.lastIndexOf(".")+1);
    		var flag=false;
    		for(var j=0;j<types.length;j++){
    			if(filetype.toLowerCase()==types[j]){
    				flag=true;
    			}
    		}
    		if(!flag){
    			return false;
    		}
    	//}
    	return true;
    }
	function checkFirstPage(str){
		
		if(str==null||str==" "){
			return false;
		}
	
	    if(str.indexOf(';')!= -1){
			var charArray = str.split(';');
		  
			for(i=0;i<charArray.length;i++){
			   
				if(!checkDetailPage(charArray[i])){
				
				   return false;
				   
				}
			
			}
			return true;
	    }
	    else{
	       return checkDetailPage(str);
	    }	
 	
	}
   function checkDetailPage(str){   
		var ym=new Array();

		ym[0]='.com.cn';
		ym[1]='.com';   
		ym[2]='.ac';   
		ym[3]='.net';   
		ym[4]='.org';   
		ym[5]='.edu';   
		ym[6]='.gov';   
		ym[7]='.biz';   
		ym[8]='.cc';   
		ym[9]='.info';   
		ym[10]='.tv';   
		ym[11]='.name';   
		ym[12]='.hk';   
		ym[13]='.cn';
		
		var i=0;
		for(j=0;j<ym.length;j++){
		  if(str.indexOf(ym[j]) != -1)
		  {
		     i=i+1;
		     var a = str.substring(str.lastIndexOf(ym[j])+ym[j].length,str.lastIndexOf(ym[j])+ym[j].length+1);
			 if(a.length>0){
			     if(a!="/"){
			        return false;
			     }
			 }
		  }
		}
		if(i==0){	
		   return checkDomianDetails(str);
		}
		return true;	
   }
    function ValidateFileHtml(documentValue){
    	var types=null;
    	types=new Array("asp","jsp","html","aspx","htm");
		var filetype=documentValue.substring(documentValue.lastIndexOf(".")+1);
   		var flag=false;
   		for(var j=0;j<types.length;j++){
   			if(filetype.toLowerCase()==types[j]){
   				flag=true;
   			}
   		}
   		if(!flag){
   			return false;
   		}
    	return true;
    }	
    

    
Array.prototype.delRepeat=function(){  

     var newArray=[];  

    var provisionalTable = {};  

    for (var i = 0, item; (item= this[i]) != null; i++) {  

         if (!provisionalTable[item]) {  

            newArray.push(item);  

             provisionalTable[item] = true;  

         }  

     }  

     return newArray;  

 } 

    