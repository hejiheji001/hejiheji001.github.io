var bannedKeys = ["aXJzdHRlc3Q="];
var myList = [];
var usedList = [];
var preset = [];
var presetX = 
[
"EO2017091303036658453@064ac303a5d6@",
"EO2017091303036661701@b7c82bf2b7bc@",
"EO2017091303036670840@b59761c7105c@",
"EO2017091303036665904@d2d9fa43c4e2@",
"EO2017091303036656666@b23de965a5aa@",
"EO2017091303036658678@c0b8bafdaeee@",
"EO2017091303036664413@b2f488855130@",
"EO2017082303036386287@f5ae41851eb3@",
"EO2017091303036663300@c3750f6dc624@",
"EO2017090603036594827@e21c43e3d581@",
"EO2017083003036460875@c0f66bda0047@",
"EO2017081603036213908@a7f1847f72df@",
"EO2017091303036666030@c98494796b74@",
"EO2017083003036458350@d99f040bc058@",
"EO2017091303036664306@bfdd72edcb4f@",
"EO2017082303036382387@db8860b6c8db@",
"EO2017082303036386647@f69518146f13@"];

var preset3 = [];
var preset1 = [
	"EO2017092003036769523@d2fd0acf8957@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bv5QB6RpuZV5+3aFHOlAjJw07jooi+hpk2aBuNTC8Jqw=@",
	"EO2017092003036774064@a98379d2062b@UmGdgjarlMiIaazfERBDfAPv12XU9g5BmM+A9fZjPvoSVqTHA941WEchZwPJile12aBuNTC8Jqw=@",
	"EO2017092003036774255@efe7e138f0ac@UmGdgjarlMiIaazfERBDfAPv12XU9g5BPVuvd5q98oNKqnoztl8w32Dd7Ktwh54q2aBuNTC8Jqw=@",
	"EO2017091303036658434@0676bdf65b7f@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPhONNXSt4boc7CZkqqfiVVuQNIvocOVkc2aBuNTC8Jqw=@",
	"EO2017092003036768584@e419bc820584@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bmt1gwXcWEVgSVqTHA941WJE1j7prjTUk2aBuNTC8Jqw=@",
	"EO2017092003036767561@ca938b347830@UmGdgjarlMiIaazfERBDfAPv12XU9g5BZBdQC+x4+zWW2Q4olJV/fPnMxWYhnryk2aBuNTC8Jqw=@",
	"EO2017092003036771449@adb0d7ddd313@UmGdgjarlMiIaazfERBDfAPv12XU9g5BnCHbkMgxMr5uywAV0IShHjYleeAzTWqI2aBuNTC8Jqw=@",
	"EO2017092003036768519@ee154700cf92@UmGdgjarlMiIaazfERBDfAPv12XU9g5BWHLQK0xC9d3+D3i4Q10XTGUQEiPP+wCL2aBuNTC8Jqw=@",
	"EO2017092003036768326@d21ad4025d9f@UmGdgjarlMiIaazfERBDfAPv12XU9g5BW6VhVx8Y6TlKqnoztl8w3/CVeE2EsQW92aBuNTC8Jqw=@",
	"EO2017070703035260482@f5822945a911@UmGdgjarlMjDqfksanOqpwflaCUwKft4kfolJL0VhD9Snw1jJR6aSyfAHoBwsXbT2aBuNTC8Jqw=@",
	"EO2017092003036765472@b0ad8d9c3afc@UmGdgjarlMiIaazfERBDfAPv12XU9g5BvalEqJ2MYS5RpJVhQ7c8Hc4HH44a2Jf52aBuNTC8Jqw=@",
	"EO2017092003036767437@da4904b84d04@UmGdgjarlMiIaazfERBDfAPv12XU9g5BMM39Dv389EoqAjao/kbwtC0r1RGmPFQm2aBuNTC8Jqw=@",
	"EO2017092003036774112@e5ff9d59da41@UmGdgjarlMiIaazfERBDfAPv12XU9g5B8tGIIZUNdsBMCaG3jx07WpK+P8oVP3yD2aBuNTC8Jqw=@",
	"EO2017092003036767566@d4bd73dc8ba2@UmGdgjarlMiIaazfERBDfAPv12XU9g5BmJ/qp+S7U4BxPvBD7zjjxOOWPh4ACDQq2aBuNTC8Jqw=@",
	"EO2017092003036770503@e0e8c145ffde@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bg5rtdcXQTsRxPvBD7zjjxA04E9jw5hM22aBuNTC8Jqw=@",
	"EO2017092003036767550@accc6b95f1ed@UmGdgjarlMiIaazfERBDfAPv12XU9g5BYG+qQHmuGvdxPvBD7zjjxFe4qy8EubJz2aBuNTC8Jqw=@",
	"EO2017092003036767364@db7cb3f64999@UmGdgjarlMiIaazfERBDfAPv12XU9g5BkfcpQunUS5tKqnoztl8w3zG1EBlyaLMz2aBuNTC8Jqw=@",
	"EO2017092003036774274@b5d5a1202598@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bz/j8oJtFd9alBmspJuqgAlp26CwSaouW2aBuNTC8Jqw=@",
	"EO2017092003036769535@b7c604815b9f@UmGdgjarlMiIaazfERBDfAPv12XU9g5B1Frd/n+bBngcfI+5x3oW/D7JuXDluMmp2aBuNTC8Jqw=@",
	"EO2017090603036591253@046f0ece3aee@UmGdgjarlMiIaazfERBDfB0nAj8bV2bO0zziItVzvIlSnw1jJR6aS0kbRTM00ZfH2aBuNTC8Jqw=@",
	"EO2017080903036132155@a1913fbdcec0@UmGdgjarlMjDqfksanOqp46v6oo0AWDWVoBsTDeCNrpSnw1jJR6aS0kbRTM00ZfH2aBuNTC8Jqw=@",
	"EO2017092003036770438@d53609f45ce5@UmGdgjarlMiIaazfERBDfAPv12XU9g5Br2ho+Z8jbd5Snw1jJR6aS5v0F+ZEyj1E2aBuNTC8Jqw=@",
	"EO2017092003036771185@bc5ed8712973@UmGdgjarlMiIaazfERBDfAPv12XU9g5B6+zMzuy6eTRDq95RSstVLRzeialtmT0+2aBuNTC8Jqw=@",
	"EO2017092003036772501@c1f386cc0bb0@UmGdgjarlMiIaazfERBDfAPv12XU9g5Btg6RqRunpHwa7hNvFpPqJfHDLLm7o08o2aBuNTC8Jqw=@",
	"EO2017092003036767423@bb33f3ad6e86@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bm/O4d1hBm7c7CZkqqfiVVhLec7Ml8kDM2aBuNTC8Jqw=@",
	"EO2017092003036767508@d3b97ef834aa@UmGdgjarlMiIaazfERBDfAPv12XU9g5BU9VHTUFbaFQ7CZkqqfiVVotqsH8mjd7m2aBuNTC8Jqw=@",
	"EO2017092003036774907@ec7b0e12384d@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bju5CEV4gWkHxSR5I4zD0QUSHiLnT7AXS2aBuNTC8Jqw=@",
	"EO2017092003036766508@cfb0c73ba9a9@UmGdgjarlMiIaazfERBDfAPv12XU9g5BMvE6MUbGHYPxSR5I4zD0QduCRVzjw4Vx2aBuNTC8Jqw=@",
	"EO2017092003036770365@fe85c18b03b8@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bu5ksrg6Q1HAqAjao/kbwtMmzYvw0PFW22aBuNTC8Jqw=@",
	"EO2017092003036766588@e8ffbb152807@UmGdgjarlMiIaazfERBDfAPv12XU9g5BdjJ68621Uct+3aFHOlAjJzHGIz/keh/62aBuNTC8Jqw=@",
	"EO2017092003036767535@cfc61dc4e221@UmGdgjarlMiIaazfERBDfAPv12XU9g5B9o1yDFefjf5Snw1jJR6aS9wCqH93lkTI2aBuNTC8Jqw=@",
	"EO2017091303036656588@f879e1a4154b@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPVjsVZGxAzM5Snw1jJR6aS9wCqH93lkTI2aBuNTC8Jqw=@",
	"EO2017090603036589174@d0af553d1536@UmGdgjarlMiIaazfERBDfB0nAj8bV2bO8EkuswWGDkVSnw1jJR6aS9wCqH93lkTI2aBuNTC8Jqw=@",
	"EO2017092003036766734@efe090001484@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bm2DYW4qRzI5xPvBD7zjjxHhna7ubu+Dk2aBuNTC8Jqw=@",
	"EO2017092003036773111@d60dcde3c5fa@UmGdgjarlMiIaazfERBDfAPv12XU9g5B10peduaoqSz+D3i4Q10XTGL91EPQSg/w2aBuNTC8Jqw=@",
	"EO2017092003036769268@acfc7e61b2f9@UmGdgjarlMiIaazfERBDfAPv12XU9g5B+lJQFnTTlvDxSR5I4zD0Qaln4r5kz5Tc2aBuNTC8Jqw=@",
	"EO2017092003036774878@e38c6ae731dc@UmGdgjarlMiIaazfERBDfAPv12XU9g5BKdCNXdOlkHX1VtWVdxoGagNEjxZBCLZG2aBuNTC8Jqw=@",
	"EO2017092003036767544@d0163e3976ea@UmGdgjarlMiIaazfERBDfAPv12XU9g5B/Kr9fvU+MXYSVqTHA941WCTNZsvDkkz72aBuNTC8Jqw=@",
	"EO2017092003036772479@e1f88fd90f43@UmGdgjarlMiIaazfERBDfAPv12XU9g5Br+l7o+njCyRxPvBD7zjjxGNCYbSjvUn42aBuNTC8Jqw=@",
	"EO2017092003036771436@b2fd2ea61906@UmGdgjarlMiIaazfERBDfAPv12XU9g5Br+l7o+njCyRxPvBD7zjjxGNCYbSjvUn42aBuNTC8Jqw=@",
	"EO2017092003036772295@b3291fbcb6a4@UmGdgjarlMiIaazfERBDfAPv12XU9g5B+hKFnGcq5xtSnw1jJR6aS/NCVoA6Zu9e2aBuNTC8Jqw=@",
	"EO2017091303036661711@f9c6da2948e4@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPeBVgpWOU2QcIuCwgclqnIu7D4tilGXXp2aBuNTC8Jqw=@",
	"EO2017092003036769338@e1b60150e5dc@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bu2sWauoeAvfxSR5I4zD0QcLlbumi5PAy2aBuNTC8Jqw=@",
	"EO2017092003036773388@ca79a2e9cdca@UmGdgjarlMiIaazfERBDfAPv12XU9g5B1+Ud+cPfppXxSR5I4zD0Qc8QJtCOCD9j2aBuNTC8Jqw=@",
	"EO2017092003036774899@e98553da2bc5@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bg3YdeDqmxmBKqnoztl8w33wzoLpIDWLG2aBuNTC8Jqw=@",
	"EO2017092003036768352@cd56699a97ee@UmGdgjarlMiIaazfERBDfAPv12XU9g5BOfevOmTA+a0qAjao/kbwtG7R7YWyZ36D2aBuNTC8Jqw=@",
	"EO2017092003036774853@f66289bea9d9@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bp2emCsnyN51RpJVhQ7c8HZF6bStzdv0H2aBuNTC8Jqw=@",
	"EO2017092003036765712@f4dd18b7c7ac@UmGdgjarlMiIaazfERBDfAPv12XU9g5B3/I8mJtI32BRpJVhQ7c8HSxwjLWLHGO/2aBuNTC8Jqw=@",
	"EO2017092003036770491@d90ca5dd9302@UmGdgjarlMiIaazfERBDfAPv12XU9g5BuQmfaeRp+GWfM1k6bwP23zZo3gQ6h6K92aBuNTC8Jqw=@",
	"EO2017092003036767314@ed9197d82edc@UmGdgjarlMiIaazfERBDfAPv12XU9g5BZFpiS4yH1HdSnw1jJR6aSwZmxXOdyLNs2aBuNTC8Jqw=@",
	"EO2017092003036768412@deeba67eb3fe@UmGdgjarlMiIaazfERBDfAPv12XU9g5BlktP1V2KdgnxSR5I4zD0QaKWMIFjR4DH2aBuNTC8Jqw=@",
	"EO2017092003036769556@b21995d394e7@UmGdgjarlMiIaazfERBDfAPv12XU9g5B4JI6JksSHNVmPSHFYKmGL4wcWhrPfXS92aBuNTC8Jqw=@",
	"EO2017092003036773135@ec2dda37e51e@UmGdgjarlMiIaazfERBDfAPv12XU9g5BuhBOBhoTwjKlBmspJuqgAik+Y3ByQaKb2aBuNTC8Jqw=@",
	"EO2017092003036764718@d83fd8b6567b@UmGdgjarlMiIaazfERBDfAPv12XU9g5BUcsOOu0xZ90IuCwgclqnIoCDkVYIISbz2aBuNTC8Jqw=@",
	"EO2017092003036768351@dfba1c6d9ead@UmGdgjarlMiIaazfERBDfAPv12XU9g5B2gBTJpr11jdKqnoztl8w38eV//VpPNAi2aBuNTC8Jqw=@",
	"EO2017092003036771454@d5aec1f9e9fd@UmGdgjarlMiIaazfERBDfAPv12XU9g5BB/lOJeusnMbxSR5I4zD0QYmujF1XhfDm2aBuNTC8Jqw=@",
	"EO2017092003036774848@e751dd9b2ab8@UmGdgjarlMiIaazfERBDfAPv12XU9g5B0CK+YRjyKmqfM1k6bwP2326nbR2sUL9f2aBuNTC8Jqw=@",
	"EO2017092003036769288@a9de8959e397@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bp+fJ94yBefzYD9tqF+3rKrRvLCSkiPNC2aBuNTC8Jqw=@",
	"EO2017092003036764677@ef9f618bbdbb@UmGdgjarlMiIaazfERBDfAPv12XU9g5BqkVCx5w4S6bxSR5I4zD0QQOY5tYeHMdk2aBuNTC8Jqw=@",
	"EO2017092003036767297@fd9c447ace3d@UmGdgjarlMiIaazfERBDfAPv12XU9g5BiEERPURUBKn+D3i4Q10XTOwszCNLEjGM2aBuNTC8Jqw=@",
	"EO2017092003036772540@c59eae423eb4@UmGdgjarlMiIaazfERBDfAPv12XU9g5BBdTI3d60lA5RpJVhQ7c8HYBTapPGynrK2aBuNTC8Jqw=@",
	"EO2017092003036765603@bef6eec41ddb@UmGdgjarlMiIaazfERBDfAPv12XU9g5BMbDDzqZYXThmjJWAtZ7715Stm9oy8B8o2aBuNTC8Jqw=@",
	"EO2017092003036770439@ad7dc54c65a3@UmGdgjarlMiIaazfERBDfAPv12XU9g5BXjChb4SSeQUqAjao/kbwtOy9ZC/tKUES2aBuNTC8Jqw=@",
	"EO2017092003036768319@b9bb195bdde4@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bu+lS2wv70W9MCaG3jx07WpG8J5B2HMTm2aBuNTC8Jqw=@",
	"EO2017092003036766475@de64b67cecb2@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bp8KYRGMDubE7CZkqqfiVVlov5CHd+O7U2aBuNTC8Jqw=@",
	"EO2017092003036765555@b4e0c157d41a@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bk9iPBxPy6RFmPSHFYKmGL03wL7tM+dDV2aBuNTC8Jqw=@",
	"EO2017092003036770344@ce3c1617c1a0@UmGdgjarlMiIaazfERBDfAPv12XU9g5BoGwhnWknwdgSVqTHA941WJ2VoTgWcVml2aBuNTC8Jqw=@",
	"EO2017092003036774891@bda4bce3eb20@UmGdgjarlMiIaazfERBDfAPv12XU9g5B6IVda7E9+Q87CZkqqfiVVjaufuOQOMQb2aBuNTC8Jqw=@",
	"EO2017092003036768331@bc3b5afa5c93@UmGdgjarlMiIaazfERBDfAPv12XU9g5BsaL7/a93RzFmPSHFYKmGLy6FLtYX7E+A2aBuNTC8Jqw=@",
	"EO2017092003036772472@c73486139dab@UmGdgjarlMiIaazfERBDfAPv12XU9g5BRKQlqwOYZfB+3aFHOlAjJ8Q2WQ5M8JxH2aBuNTC8Jqw=@",
	"EO2017092003036774842@d71781b12e18@UmGdgjarlMiIaazfERBDfAPv12XU9g5BcZwyvV/+WxFSnw1jJR6aSxQUcEyQ6ewa2aBuNTC8Jqw=@",
	"EO2017092003036771218@cb2744269d72@UmGdgjarlMiIaazfERBDfAPv12XU9g5BLpdjXV42+4pSnw1jJR6aSz23hLkEOE0f2aBuNTC8Jqw=@",
	"EO2017092003036772315@d2b48adeb398@UmGdgjarlMiIaazfERBDfAPv12XU9g5BJM7Ehu+dCZRSnw1jJR6aS2Zd3mGeFI6J2aBuNTC8Jqw=@",
	"EO2017092003036764609@af4c2a74786e@UmGdgjarlMiIaazfERBDfAPv12XU9g5BIR81NC47pK1mPSHFYKmGL2Fz4L+rGazL2aBuNTC8Jqw=@",
	"EO2017092003036770383@f27717dd630d@UmGdgjarlMiIaazfERBDfAPv12XU9g5BezGwym+4l5RSnw1jJR6aS+c1zVUxpgeW2aBuNTC8Jqw=@",
	"EO2017092003036773198@fa94016c21d8@UmGdgjarlMiIaazfERBDfAPv12XU9g5BoeTB8zNQ4yZKqnoztl8w3+/HUeTX6aEN2aBuNTC8Jqw=@",
	"EO2017092003036774075@cdfcf579ef8f@UmGdgjarlMiIaazfERBDfAPv12XU9g5BmzsVk/eMYrSW2Q4olJV/fDFhoOwy9mxy2aBuNTC8Jqw=@",
	"EO2017092003036769368@ddeea5194388@UmGdgjarlMiIaazfERBDfAPv12XU9g5BuX5dlgrufs+W2Q4olJV/fCrv3tnMnWZF2aBuNTC8Jqw=@",
	"EO2017092003036774001@bece904ca120@UmGdgjarlMiIaazfERBDfAPv12XU9g5BiBKkHNPf6eDxSR5I4zD0QcBzwdhhdxUy2aBuNTC8Jqw=@",
	"EO2017092003036772559@b6138dc3a1d3@UmGdgjarlMiIaazfERBDfAPv12XU9g5BAVF3Wf5vbjUqAjao/kbwtAj8XPTQtdnG2aBuNTC8Jqw=@",
	"EO2017092003036771503@f3a069038926@UmGdgjarlMiIaazfERBDfAPv12XU9g5BfcP2d9I3q7sqAjao/kbwtOAF5Xf9WAbM2aBuNTC8Jqw=@",
	"EO2017092003036765708@f956aafe5d5a@UmGdgjarlMiIaazfERBDfAPv12XU9g5B67XeVs5znUgqAjao/kbwtAoe2liNjAB52aBuNTC8Jqw=@",
	"EO2017092003036770328@daf3128eda39@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bdhnz8Ruigl1+3aFHOlAjJ9aaSBPNRlb82aBuNTC8Jqw=@",
	"EO2017092003036770370@a87ce5aabea3@UmGdgjarlMiIaazfERBDfAPv12XU9g5BGIiy6Ydz0s87CZkqqfiVVrlhHeJgu4z42aBuNTC8Jqw=@",
	"EO2017091303036658504@e688cf175a46@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPGdonfMAfEnA7CZkqqfiVVrlhHeJgu4z42aBuNTC8Jqw=@",
	"EO2017090603036596790@e49f55dd97d4@UmGdgjarlMiIaazfERBDfB0nAj8bV2bOGpJHrl1c/UE7CZkqqfiVVrlhHeJgu4z42aBuNTC8Jqw=@",
	"EO2017083003036465914@cd2ccc1aa24b@UmGdgjarlMjDqfksanOqp3ZYdimQM55G7tXBXHXE68w7CZkqqfiVVrlhHeJgu4z42aBuNTC8Jqw=@",
	"EO2017061403034688060@68438ed922f9@UmGdgjarlMgUUcyuaagJodPD9QbtjI7PVzCNWzNhwhJSnw1jJR6aSwGQBLl1zSqu2aBuNTC8Jqw=@",
	"EO2017092003036765731@c291d35e0433@UmGdgjarlMiIaazfERBDfAPv12XU9g5BkPQR92FQRZ1Snw1jJR6aS0tej981wBWT2aBuNTC8Jqw=@",
	"EO2017092003036764708@c338317ecfc7@UmGdgjarlMiIaazfERBDfAPv12XU9g5BiYb95rV9zbAqAjao/kbwtOV/Kgffs0X12aBuNTC8Jqw=@",
	"EO2017092003036771507@aa4f459c34e4@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bk15GOBX67WxSnw1jJR6aSyQNLZED+BiG2aBuNTC8Jqw=@",
	"EO2017092003036769315@eb483eef22af@UmGdgjarlMiIaazfERBDfAPv12XU9g5B1bc6IzGzm+xzTJ48rAhXqCV01sA5FDc32aBuNTC8Jqw=@",
	"EO2017092003036766725@ce917fb5a8b6@UmGdgjarlMiIaazfERBDfAPv12XU9g5BIaRRyPS/MGlRpJVhQ7c8Hd2yAvoVPGFF2aBuNTC8Jqw=@",
	"EO2017092003036766497@c36dd707cc56@UmGdgjarlMiIaazfERBDfAPv12XU9g5BoPyf+4SNpMRKqnoztl8w31naNmrxX+8g2aBuNTC8Jqw=@",
	"EO2017092003036769262@fa831192b258@UmGdgjarlMiIaazfERBDfAPv12XU9g5BY0lSb0q+HNc7CZkqqfiVVl8fLC+StlG62aBuNTC8Jqw=@",
	"EO2017092003036773167@c03f3abd21d5@UmGdgjarlMiIaazfERBDfAPv12XU9g5BIHakyaY2m6JKqnoztl8w37HZBPXv/YxN2aBuNTC8Jqw=@",
	"EO2017092003036765493@c994268d6e07@UmGdgjarlMiIaazfERBDfAPv12XU9g5BxGqakzlCmdEIuCwgclqnIg3kz91gUdAr2aBuNTC8Jqw=@",
	"EO2017091303036658687@fa678f035849@UmGdgjarlMiIaazfERBDfAPv12XU9g5BSftG42MNjXRnGXUP+TBJCrXj46R1Choy2aBuNTC8Jqw=@",
	"EO2017092003036774035@bfeab5e754be@UmGdgjarlMiIaazfERBDfAPv12XU9g5BJn0mzbNGNhiW2Q4olJV/fIfN8tSTqS8l2aBuNTC8Jqw=@",
	"EO2017092003036764647@ec210c3ff100@UmGdgjarlMiIaazfERBDfAPv12XU9g5BuDgbxzQ1F8pzTJ48rAhXqMif2xnlmMZA2aBuNTC8Jqw=@",
	"EO2017092003036768299@b53bde772ee5@UmGdgjarlMiIaazfERBDfAPv12XU9g5BOPnCoUcnpE/ZmwYQzEdtZVM0VLY6efv22aBuNTC8Jqw=@",
	"EO2017092003036772495@de2229047a01@UmGdgjarlMiIaazfERBDfAPv12XU9g5Br1u/l28q81ZMCaG3jx07WoBmb4iMcOQM2aBuNTC8Jqw=@",
	"EO2017092003036764709@b54c431e506d@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bgw12z8siN7jxSR5I4zD0QY1tAoPJXfj82aBuNTC8Jqw=@",
	"EO2017092003036774006@b877b586f621@UmGdgjarlMiIaazfERBDfAPv12XU9g5B2F7XIVHNQUUy8msexwur13V+SYOMpQh22aBuNTC8Jqw=@",
	"EO2017092003036772304@f755780ed9ed@UmGdgjarlMiIaazfERBDfAPv12XU9g5BHWWwyEyVh5txPvBD7zjjxE2FpadBpnWD2aBuNTC8Jqw=@",
	"EO2017092003036769365@d6b36daaafc4@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bhc2l+oc6CjoqAjao/kbwtHUbP0emN/J22aBuNTC8Jqw=@",
	"EO2017092003036768378@d038243d60bd@UmGdgjarlMiIaazfERBDfAPv12XU9g5BAgiKKt6J9x0IuCwgclqnIoNnMVV9VvIU2aBuNTC8Jqw=@",
	"EO2017092003036764608@fc48e7781258@UmGdgjarlMiIaazfERBDfAPv12XU9g5B2FGudnzCRhpKqnoztl8w3+aaAfknHkBy2aBuNTC8Jqw=@",
	"EO2017092003036768316@dfe1c6b45ca0@UmGdgjarlMiIaazfERBDfAPv12XU9g5ByvPv2ZFTw0EqAjao/kbwtP/W2KRL1Fge2aBuNTC8Jqw=@",
	"EO2017092003036772262@fe2da597bfc7@UmGdgjarlMiIaazfERBDfAPv12XU9g5BunnR3DFuc55Kqnoztl8w3++axuKi4/y22aBuNTC8Jqw=@",
	"EO2017092003036773970@f2f745770d3b@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bcd91F115IlRKqnoztl8w3/Ol80McAOW62aBuNTC8Jqw=@",
	"EO2017092003036767265@c81611365a7f@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bn9ng4fk4qbVKqnoztl8w352W79dxjTl12aBuNTC8Jqw=@",
	"EO2017092003036772261@bff1e7995ada@UmGdgjarlMiIaazfERBDfAPv12XU9g5BjVKdwvY7Ncwa7hNvFpPqJUvbeBtWjtF92aBuNTC8Jqw=@",
	"EO2017092003036766410@b0428edeea29@UmGdgjarlMiIaazfERBDfAPv12XU9g5BEv5wmHQZkTZSnw1jJR6aSylittpHX5nW2aBuNTC8Jqw=@",
	"EO2017092003036771254@df87ede2ccca@UmGdgjarlMiIaazfERBDfAPv12XU9g5BVZ7sHcA8btUqAjao/kbwtOkntR7p1euG2aBuNTC8Jqw=@",
	"EO2017092003036764727@e0bd33a67608@UmGdgjarlMiIaazfERBDfAPv12XU9g5BwR29thQnLFFSnw1jJR6aS5Ypm/Q2weKR2aBuNTC8Jqw=@",
	"EO2017092003036764641@d21ca33aaf33@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bbp5lFPO8V2lKqnoztl8w3yscun82GP5w2aBuNTC8Jqw=@",
	"EO2017092003036769380@fdf0f6e0f8c2@UmGdgjarlMiIaazfERBDfAPv12XU9g5B/48U8FS1MHtxPvBD7zjjxFhrCYgjjWn52aBuNTC8Jqw=@",
	"EO2017092003036769344@d617fe5a7fd3@UmGdgjarlMiIaazfERBDfAPv12XU9g5ByDFo2rl/j1+lBmspJuqgAlggOlZlmk1N2aBuNTC8Jqw=@",
	"EO2017092003036770384@c6dfc6b52ba6@UmGdgjarlMiIaazfERBDfAPv12XU9g5BAtRey+nnE0YqAjao/kbwtIzcI1Ld8uRx2aBuNTC8Jqw=@",
	"EO2017092003036769291@cb14b78e80e3@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bta1s7bJeHN9Snw1jJR6aS4lqo+5gcMxY2aBuNTC8Jqw=@",
	"EO2017092003036771272@d9c458d574d1@UmGdgjarlMiIaazfERBDfAPv12XU9g5BVVrM5C2dC3tSnw1jJR6aS8zWBHpafGVR2aBuNTC8Jqw=@",
	"EO2017092003036774073@eed3ec7111ff@UmGdgjarlMiIaazfERBDfAPv12XU9g5BqogfpdKr1aFSnw1jJR6aS/2t8Y7r1g9S2aBuNTC8Jqw=@",
	"EO2017092003036765578@d3eaf4a35bcb@UmGdgjarlMiIaazfERBDfAPv12XU9g5BTpgxWHqFfkRRpJVhQ7c8HWrp0odByD9V2aBuNTC8Jqw=@",
	"EO2017092003036766478@fb083766177a@UmGdgjarlMiIaazfERBDfAPv12XU9g5BD5KV6CIesZRxPvBD7zjjxNyGOSXXQH8G2aBuNTC8Jqw=@",
	"EO2017083003036460242@ac13c3698018@UmGdgjarlMjDqfksanOqp3ZYdimQM55G9CkzjAOFAYFxPvBD7zjjxCGNR3yFDwGg2aBuNTC8Jqw=@",
	"EO2017090603036592977@f1aa56d6ab94@UmGdgjarlMiIaazfERBDfB0nAj8bV2bO1sBLx9CXr1RxPvBD7zjjxCGNR3yFDwGg2aBuNTC8Jqw=@",
	"EO2017091303036656529@06c1f77d37d0@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPEfJ+hL7olbdxPvBD7zjjxCGNR3yFDwGg2aBuNTC8Jqw=@",
	"EO2017092003036765484@b4ab249a6cfc@UmGdgjarlMiIaazfERBDfAPv12XU9g5BS3OeXetEl2xMCaG3jx07Wh8ic7g6mLoX2aBuNTC8Jqw=@",
	"EO2017092003036771231@ae08e47700b6@UmGdgjarlMiIaazfERBDfAPv12XU9g5BSQmRZtvGtEFMCaG3jx07WkQQVRkCzQgn2aBuNTC8Jqw=@",
	"EO2017080203036051402@864247bef9d7@UmGdgjarlMjDqfksanOqp1pIb3DQXe+e6NqHYxYC96j1VtWVdxoGahQiDRQlnAYY2aBuNTC8Jqw=@",
	"EO2017092003036771351@d7ff30406ea7@UmGdgjarlMiIaazfERBDfAPv12XU9g5BzFXuFMVEEWdxPvBD7zjjxJhAD33FZOe52aBuNTC8Jqw=@",
	"EO2017092003036771360@ce5e2cb869d5@UmGdgjarlMiIaazfERBDfAPv12XU9g5Biy1lzvXX1eBSnw1jJR6aSzu++ubPrKt52aBuNTC8Jqw=@",
	"EO2017092003036774254@e18c8f46e43e@UmGdgjarlMiIaazfERBDfAPv12XU9g5BFiNi5ona7j6lBmspJuqgAvLRBOb6jqWx2aBuNTC8Jqw=@",
	"EO2017092003036769527@f686ce6a81ee@UmGdgjarlMiIaazfERBDfAPv12XU9g5BM3gNT1lk/w1RpJVhQ7c8HcjoYCtZViT32aBuNTC8Jqw=@",
	"EO2017092003036767548@aab199f517ef@UmGdgjarlMiIaazfERBDfAPv12XU9g5BS+VglsHIUWBRpJVhQ7c8HV0FaZNrevbb2aBuNTC8Jqw=@",
	"EO2017092003036769531@bcd9a7eea610@UmGdgjarlMiIaazfERBDfAPv12XU9g5BmPp/63exLaf+D3i4Q10XTAKEr2tDHOEf2aBuNTC8Jqw=@",
	"EO2017092003036769557@efcd25c2635b@UmGdgjarlMiIaazfERBDfAPv12XU9g5BC8ks96qF5eufM1k6bwP230bEjP6CWmjQ2aBuNTC8Jqw=@",
	"EO2017092003036770536@ecfbdb990b4f@UmGdgjarlMiIaazfERBDfAPv12XU9g5BC5dB3hGdhNJKqnoztl8w39f0vd0238Rg2aBuNTC8Jqw=@",
	"EO2017083003036457149@e2bbdc3ebf85@UmGdgjarlMjDqfksanOqp3ZYdimQM55GAulk1105Cb71VtWVdxoGahQiDRQlnAYY2aBuNTC8Jqw=@",
	"EO2017090603036591943@b154abfba1f4@UmGdgjarlMiIaazfERBDfB0nAj8bV2bOzidjsML5re31VtWVdxoGahQiDRQlnAYY2aBuNTC8Jqw=@",
	"EO2017092003036773158@d3c4ea37efed@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bms93eobYJaH1VtWVdxoGahQiDRQlnAYY2aBuNTC8Jqw=@",
	"EO2017091303036665949@f190ea014807@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPwfXan6Brr+f1VtWVdxoGahQiDRQlnAYY2aBuNTC8Jqw=@",
	"EO2017092003036771496@b881713d2791@UmGdgjarlMiIaazfERBDfAPv12XU9g5BW77YA6XyiuNmjJWAtZ7714bhuu8ZxB6G2aBuNTC8Jqw=@",
	"EO2017092003036766717@cc6cf5370c47@UmGdgjarlMiIaazfERBDfAPv12XU9g5BdeoeUAES6AAfK63mVA1scOTjeZk516ws2aBuNTC8Jqw=@",
	"EO2017092003036774063@f594ff32dd34@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bw/XK4vNc4LISVqTHA941WBUTeVJ0dQuj2aBuNTC8Jqw=@",
	"EO2017092003036772238@fe5522d1106e@UmGdgjarlMiIaazfERBDfAPv12XU9g5BExkHn97rErN+3aFHOlAjJxo3aC7WTZ732aBuNTC8Jqw=@",
	"EO2017092003036772541@d3a6b133b431@UmGdgjarlMiIaazfERBDfAPv12XU9g5BY2lvwqdWbI0SVqTHA941WHr/nlmqg5n12aBuNTC8Jqw=@",
	"EO2017091303036657485@d3ca7e46fee0@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPCVz308ptZfgCy6e4xbfNqADJMd4uZU1C2aBuNTC8Jqw=@",
	"EO2017092003036764621@f1d09d150e85@UmGdgjarlMiIaazfERBDfAPv12XU9g5B045h0gspltoCy6e4xbfNqADJMd4uZU1C2aBuNTC8Jqw=@",
	"EO2017092003036771440@b95baf56b60d@UmGdgjarlMiIaazfERBDfAPv12XU9g5BFdpYpO/Tuv9xPvBD7zjjxFAdBlKyOl/02aBuNTC8Jqw=@",
	"EO2017092003036768557@dbaa7f5de04f@UmGdgjarlMiIaazfERBDfAPv12XU9g5BPKHheB6AMx07CZkqqfiVVnsnkpWGywOW2aBuNTC8Jqw=@",
	"EO2017092003036770333@d0a8361f6515@UmGdgjarlMiIaazfERBDfAPv12XU9g5BiEh1TmFQw+tKqnoztl8w3+W+wkl5qFrI2aBuNTC8Jqw=@",
	"EO2017092003036765599@b055551b4f42@UmGdgjarlMiIaazfERBDfAPv12XU9g5BscWPLHcbnU7xSR5I4zD0QTfy1JzewtwY2aBuNTC8Jqw=@",
	"EO2017092003036768355@faf5be41e38e@UmGdgjarlMiIaazfERBDfAPv12XU9g5B4rfvGEZmcD0qAjao/kbwtO1koPgy7xP62aBuNTC8Jqw=@",
	"EO2017092003036732221@e32a5b45c57f@UmGdgjarlMiIaazfERBDfAPv12XU9g5B3qpf9mbHWoXxSR5I4zD0QVhDcj/zzt9R2aBuNTC8Jqw=@",
	"EO2017092003036772235@b1edbb59fd08@UmGdgjarlMiIaazfERBDfAPv12XU9g5B15WchBHlTS1mPSHFYKmGL9bANT724m5J2aBuNTC8Jqw=@",
	"EO2017092003036773148@f1217f08ca4e@UmGdgjarlMiIaazfERBDfAPv12XU9g5BhjnGkgP1wwRDq95RSstVLackFIujgIEa2aBuNTC8Jqw=@",
	"EO2017092003036771214@e04278a09fde@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bgumpu0ZWh3FKqnoztl8w3zhrCgNcUpHE2aBuNTC8Jqw=@",
	"EO2017092003036765520@df4de88099bf@UmGdgjarlMiIaazfERBDfAPv12XU9g5BLA8c+0yHeOxMCaG3jx07WtOfguT6sQXA2aBuNTC8Jqw=@",
	"EO2017091303036660366@da491479e97b@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPukWQrd8P1lBMCaG3jx07WtOfguT6sQXA2aBuNTC8Jqw=@",
	"EO2017081603036214964@dbdecfd4f8e7@UmGdgjarlMiIaazfERBDfAPv12XU9g5BlR0yYbyjPaxRpJVhQ7c8HWnsPGyD0beS2aBuNTC8Jqw=@",
	"EO2017092003036767302@bbdaa7bc3585@UmGdgjarlMiIaazfERBDfAPv12XU9g5B8H7qid6l+rQqAjao/kbwtKROlkMX61NI2aBuNTC8Jqw=@",
	"EO2017092003036774839@f1a854f1b2c3@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bjrgy0xKi3ceW2Q4olJV/fCcLdJSYFuzP2aBuNTC8Jqw=@"
];
var used = [];

var showIn = function(){
  $("#in").append("<input type=text class=form-control id=orderId placeholder=订单号> <input type=text class=form-control id=mobile placeholder=手机号><input type=text class=form-control id=code placeholder=兑换码><input type=text class=form-control id=enc placeholder=充值码><textarea id=preset class=form-control placeholder='预设订单和兑换码，以便快速获取地址。格式为 订单号@兑换码@手机号 如 EO2017082303123456789@abcdefg@13588888888 一行一条数据' style='height:200px;font-size: 11px;'></textarea><textarea id=result class=form-control placeholder='破解结果(更新日期2017-09-22 00:00)' style='height:200px'></textarea><iframe id=frame src='' style='position: fixed; border: 1px solid black; top: 0px; right: 0px;background-color: yellow;width: 40%;height: 20%;'>");
  $("#yql").attr("onclick", "getEnc()");
  $("#charge").remove();
  $("#frame").remove();
  $("#yql").text("获取链接");
  var param = location.hash.split("#")[1];
  preset = window["preset" + param];
  
  var latest = removeUsed(preset);
  localStorage.preset = latest.join("\r\n");
  var pl = $("#result").attr("placeholder") + " 现在是: preset" + param + " 剩余码子数量：" + latest.length;	
  $("#result").attr("placeholder", pl);
  if(localStorage.preset.length == 0){
   prompt("复制里面的内容并发我，检查码子使用情况", localStorage.used);
  }
	
  if(localStorage.rm){
  	used = localStorage.rm.split(",");
  }
	
  $("#clear").on("click", clear);
  var p = $("#preset");
  p.val(localStorage.preset);
  p.scrollTop(p[0].scrollHeight);
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
    //$("#yql").text("正在获取...");
 //    $("#yql").attr("disabled", "disabled");
    if(!retry){
     var pre = readLine();
     if(pre.length === 4){
      $("#orderId").val(pre[0].trim()); 
      $("#code").val(pre[1].trim());
      $("#mobile").val(pre[3].trim());
      $("#enc").val(pre[2].trim());
     }
    }
    var mobile = $("#mobile").val().trim();
    var orderId = $("#orderId").val().trim();
    var enc = $("#enc").val().trim();
    if(mobile && orderId && enc){

      // var u = 'https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/main/TDESEncryptByCMBCC.json?paramMap={"orderId":"'+orderId+'","mobile":"'+mobile+'"}';
      //var u = "http://ms.lefone.cn/msflowday/couponShowController/generateCheckCode?enStr=Ko8GEZulztYGzlwL41zvKHByrFzWvp51AP6gW3RSF8A0MwN5zGrMT54iLl5UKI1qdI21FTBBrTk=&mobile=" + mobile;
      getCharge();
	    
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
		//$("#frame").attr("src", u);
		//$("#yql").text("如果黄色框文字中包含true表示验证码发送成功 点击可以重发验证码");
	    	//$("#yql").attr("onclick", "getEnc(true)");
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
	for (var i = 3; i > 0; i--) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	};
	if(used.indexOf(text) == -1){
		used.push(text);
		return text;
	}else{
		return getRandom();
	}
}

var clear = function(){
	$("#mobile").val("");
	$("#code").val("");
	$("#orderId").val("");
	$("#rand").val("");
	$("#enc").val("");
	$("#yql").attr("onclick", "getEnc()");
}

var getCharge = function(){
	var mobile = $("#mobile").val().trim();
	var code = $("#code").val().trim();
	var orderId = $("#orderId").val().trim();
	var enc = $("#enc").val().trim();
	//var rand = $("#rand").val().trim();
	//if(rand){
		usedList.push(orderId + "@" + code + "@" + enc + "@");
		localStorage.used = usedList;
		//localStorage.rm = used;
		//var str = "UmGdgjarlMgUUcyuaagJoXIIQ3DK44FsD5G00suinyka7hNvFpPqJcBsljrtwJKX2aBuNTC8Jqw%3D";
		//var u = "http://ms.lefone.cn/msflowday/couponShowController/charegeCoupon?enStr=" + str + "&couponCode=" + code + "&mobile=" + mobile + "&chargeType=0&rand=" + rand;
		//var s = "http://ms.lefone.cn/msflowday/couponShowController/showCoupon.do?enStr=" + str; 
	        //var info = "http://ms.lefone.cn/msflowday/couponShowController/getCouponInfo?enStr=" + str;
		var check = "http://sc.ftqq.com/?c=talkadmin&a=hookdetail&readtoken=59bcbf7b76f8d&wid=24674&param=" + btoa(enc + "#" + code + "#" + mobile);
		var result = "订单：" + orderId + " 码：" + code + " 手机号：" + mobile + " 订单充值查询: " + check;
	        //$("#frame").attr("src", info);
	        //$("#yql").text("请确认黄色框中显示乱码 否则【记录码子并刷新后】再点我一次");
		var extra = " 2款" + orderId;
		if(myList.indexOf(orderId) > -1){
			extra = " 14款" + orderId;
		}
		//$("#frame").attr("src", u);
		$.ajax({
		    url: "http://cors-proxy.htmldriven.com",
		    dataType: "json",
		    timeout: 10000,
		    data: {
			url: "http://www.xiaoxiangzi.com/tool/dwz.asp?domain=" + encodeURIComponent(check)
		    },
		    success: function(dt) {
			var newResult = "订单：" + orderId + " 码：" + code + " 手机号：" + mobile + " 订单充值查询: " + dt.body;
			$.get("https://pushbear.ftqq.com/sub?sendkey=751-9616f3ff7deb3cdfda6f4f547ab5b153&text=服务端流量充值"+extra+"&desp=" + newResult)
		    }
		});
		$("#result").val(result);
		//$("#charge").text("请看黄色框中充值结果");
	//}else{
		//alert("缺少验证码");
	//}
}
