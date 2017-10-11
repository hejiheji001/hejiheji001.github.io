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
"EO2017092003036766588@e8ffbb152807@UmGdgjarlMiIaazfERBDfAPv12XU9g5BdjJ68621Uct+3aFHOlAjJzHGIz/keh/62aBuNTC8Jqw=@",
"EO2017100403036989538@badc615164fb@UmGdgjarlMitj9yAoG8NGGf87xHZghpvIfNzbjokOrwqAjao/kbwtLLITv4NR1v32aBuNTC8Jqw=@",
"EO2017092703036926446@d2981e6f136a@UmGdgjarlMiIaazfERBDfCW5IMR+pYC00hQrZw3Tft4IuCwgclqnIg3kz91gUdAr2aBuNTC8Jqw=@",
"EO2017092703036934086@af4117d3d389@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0Qm/7W8nvRuNRpJVhQ7c8HV0FaZNrevbb2aBuNTC8Jqw=@",
"EO2017100403036985495@e7bfe8c26a33@UmGdgjarlMitj9yAoG8NGGf87xHZghpvA2x20ZWqn11Snw1jJR6aS2Zd3mGeFI6J2aBuNTC8Jqw=@",
"EO2017083003036457425@d2d7cc8d8f33@UmGdgjarlMjDqfksanOqp3ZYdimQM55GiPSjy+bu6PwqAjao/kbwtNNwmPp8xMcm2aBuNTC8Jqw=@",
"EO2017070503035276767@228651c2c5b5@UmGdgjarlMiF7fb2WHgbz0zzJHNWSohzfs5126GVDypxPvBD7zjjxAfwEIkaolnt2aBuNTC8Jqw=@",
"EO2017082303036384358@b95162b275b0@UmGdgjarlMjDqfksanOqpwflaCUwKft4rS+pqg8l8bFxPvBD7zjjxAfwEIkaolnt2aBuNTC8Jqw=@",
"EO2017083003036464140@dc4baca5f506@UmGdgjarlMjDqfksanOqp3ZYdimQM55Gx+nS1YEgBb9xPvBD7zjjxAfwEIkaolnt2aBuNTC8Jqw=@",
"EO2017100403036993099@ea7d25455ad5@UmGdgjarlMitj9yAoG8NGGf87xHZghpvKG1vc9fEc/0SVqTHA941WEbIjvlDhyyi2aBuNTC8Jqw=@",
"EO2017100403036991106@af17d17ffca0@UmGdgjarlMitj9yAoG8NGGf87xHZghpvV744DdJGyrpMCaG3jx07WvDlGFPN3O2m2aBuNTC8Jqw=@",
"EO2017092703036941011@acd0276316e6@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0pWikk1l258XZmwYQzEdtZZ5np6eiccti2aBuNTC8Jqw=@",
"EO2017090603036595936@01f3a7282b12@UmGdgjarlMiIaazfERBDfB0nAj8bV2bO/RsnRg16K+FxPvBD7zjjxNOHRz/B6wJR2aBuNTC8Jqw=@",
"EO2017092703036927515@b3047bd11e8c@UmGdgjarlMiIaazfERBDfCW5IMR+pYC08hpnd+Zi+kvxSR5I4zD0QawU4KZxYvlQ2aBuNTC8Jqw=@",
"EO2017092703036929458@d53257751202@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0qTp6AXTkMFEa7hNvFpPqJUkx7ewDhtJ62aBuNTC8Jqw=@",
"EO2017100403036977758@d2353fb6d885@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bjhc+4VQyUDz1VtWVdxoGauvKXHThFxoL2aBuNTC8Jqw=@",
"EO2017092703036934105@df7ba9cf2387@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0VXWpVHcZaBNMCaG3jx07Wh6LvGE6tO9G2aBuNTC8Jqw=@",
"EO2017083003036458904@f3734495b328@UmGdgjarlMjDqfksanOqp3ZYdimQM55G82OPCq1on/FKqnoztl8w3/JUiCuiz2mz2aBuNTC8Jqw=@",
"EO2017092703036944000@f1e37bd7d94c@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0mYQSWuLocLb1VtWVdxoGauvKXHThFxoL2aBuNTC8Jqw=@",
"EO2017101103037038001@c00c8285e49f@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnqIjszvEmPig7CZkqqfiVVtkFHuYKcWKH2aBuNTC8Jqw=@",
"EO2017101103037032950@eadf6f39e7fe@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnDMTUuF3Im6NMCaG3jx07WpG8J5B2HMTm2aBuNTC8Jqw=@",
"EO2017100403036988581@cd2a6773239c@UmGdgjarlMitj9yAoG8NGGf87xHZghpv4EFqLPLVkMYCy6e4xbfNqBe4V80EFgqK2aBuNTC8Jqw=@",
"EO2017101103037037844@acfefaeb521c@UmGdgjarlMitj9yAoG8NGJma3dTWxnhndwYzjas6f1t+3aFHOlAjJ5wd/Qm7TJ1b2aBuNTC8Jqw=@",
"EO2017100403036994104@e6acc649d78f@UmGdgjarlMitj9yAoG8NGGf87xHZghpv89R1whygLaRSnw1jJR6aS0vdcrw/t48I2aBuNTC8Jqw=@",
"EO2017101103037024453@cd0e9272777a@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnGEh7UXWaVs3ZmwYQzEdtZbWB3kqzBjhj2aBuNTC8Jqw=@",
"EO2017101103037027009@dae4448014df@UmGdgjarlMitj9yAoG8NGJma3dTWxnhn8l0/jeb7jKxKqnoztl8w38x0azJz5xoH2aBuNTC8Jqw=@",
"EO2017101103037025384@fa7167ca8de5@UmGdgjarlMitj9yAoG8NGJma3dTWxnhn/mWGgMMNpyNxPvBD7zjjxCNJVh7FYhgb2aBuNTC8Jqw=@",
"EO2017101103037036881@ff958248bcbb@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnwPnW/ALzDHMCy6e4xbfNqJ7jlB1R735T2aBuNTC8Jqw=@",
"EO2017101103037025431@def85f4902c3@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnWJyS6uPgbMUCy6e4xbfNqO46csvZhYoR2aBuNTC8Jqw=@",
"EO2017092703036939044@e6a17b065208@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0Cm73eUpGFJYa7hNvFpPqJVEtA+TIXjvU2aBuNTC8Jqw=@",
"EO2017092703036936010@acb11d4b5a06@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0zdV9Nl2pAvn1VtWVdxoGakY6IuASbJmW2aBuNTC8Jqw=@",
"EO2017092703036934041@c2d288eeb93a@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0vj00dPXuPZOfM1k6bwP233qq74UV2peY2aBuNTC8Jqw=@",
"EO2017101103037028955@c938dd9d5820@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnwR5VEsq1oOMIuCwgclqnIu80wgg+CZg12aBuNTC8Jqw=@",
"EO2017101103037020530@d3f20e14fce1@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnGJF/HUUpeLH1VtWVdxoGauvKXHThFxoL2aBuNTC8Jqw=@",
"EO2017071203035502980@381e8b37b51a@UmGdgjarlMiF7fb2WHgbz9Z4Rve3VY99gd3PjlQ22tBMCaG3jx07Wl/9KWiveGhM2aBuNTC8Jqw=@",
"EO2017101103037021586@cff043a47f4d@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnpxuuM6l+lGJSnw1jJR6aS+phJxu42RVK2aBuNTC8Jqw=@",
"EO2017101103037021668@ce7f1879f9c8@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnbN1LkuFFauZDq95RSstVLVHoN/PRKsJy2aBuNTC8Jqw=@",
"EO2017101103037036892@e41c16452ec2@UmGdgjarlMgUUcyuaagJodEpcRoCrzX5A4+it5wiXNfxSR5I4zD0QUAKBUCaxJYD2aBuNTC8Jqw=@",
"EO2017101103037028947@e453d7ed48a7@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnamXnTF1am4gqAjao/kbwtLzhxRV5JVGY2aBuNTC8Jqw=@",
"EO2017101103037025326@d87894429795@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnZNDMshR0UoGfM1k6bwP236JWq4+kLG4s2aBuNTC8Jqw=@",
"EO2017101103037038791@f668bd2ad1d2@UmGdgjarlMitj9yAoG8NGJma3dTWxnhndc02x457l1RxPvBD7zjjxPCUVPb8bBfY2aBuNTC8Jqw=@",
"EO2017101103037022592@f63ce57734e1@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnrIO4zT14+m3+D3i4Q10XTHPSolzIfeLM2aBuNTC8Jqw=@",
"EO2017100403036988489@fdffd24a9793@UmGdgjarlMitj9yAoG8NGGf87xHZghpvJ1yudxlhkwY7CZkqqfiVVtkFHuYKcWKH2aBuNTC8Jqw=@",
"EO2017101103037023397@fab6c2bc265b@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnU4QL4IUq3YRMCaG3jx07WiSLMeRhAM0k2aBuNTC8Jqw=@",
"EO2017101103037021603@d14481cebeac@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnoJOEeq/E6XNDq95RSstVLYYh4P9Mbc+l2aBuNTC8Jqw=@",
"EO2017083003036458499@fa97a8c83b41@UmGdgjarlMjDqfksanOqp3ZYdimQM55G4IqzDRh7nzBxPvBD7zjjxD3aCPvCDr+U2aBuNTC8Jqw=@",
"EO2017091303036658377@e7b76d18e6da@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPavQO539joZJxPvBD7zjjxD3aCPvCDr+U2aBuNTC8Jqw=@",
"EO2017101103037022621@ca23759facf1@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnMxFSctwYBKFxPvBD7zjjxOfLwYctIQcz2aBuNTC8Jqw=@",
"EO2017092003036771288@c75e63fd50e5@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bkc41aj04CGBxPvBD7zjjxD3aCPvCDr+U2aBuNTC8Jqw=@",
"EO2017100403036996xxx@b0727ac70cd6@UmGdgjarlMitj9yAoG8NGGf87xHZghpvXmyViIaw53hzTJ48rAhXqJOi/TvC1nLr2aBuNTC8Jqw=@",
"EO2017100403036990xxx@fecde2858bf3@UmGdgjarlMitj9yAoG8NGGf87xHZghpvHveA1oQaArtRpJVhQ7c8HcuTbn51XQxS2aBuNTC8Jqw=@",
"EO2017101103037038xxx@ed7fdeaf38bf@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnxJ27PBY0HRICy6e4xbfNqLmIKAvmkCir2aBuNTC8Jqw=@",
"EO2017101103037026xxx@c464742699ad@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnmQ0qphoCK49vsZKMZZ+3tHSB4HOl6+/y2aBuNTC8Jqw=@",
"EO2017101103037029xxx@d1561d24f45b@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnpVejPw/SJqxKqnoztl8w33wzoLpIDWLG2aBuNTC8Jqw=@",
"EO2017091303036663xxx@0638dfb42457@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPo7OTujB3eJtxPvBD7zjjxDAcX+XVKOop2aBuNTC8Jqw=@",
"EO2017092703036937xxx@d814f576a979@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0bRKx7dIFbgdxPvBD7zjjxA04E9jw5hM22aBuNTC8Jqw=@",
"EO2017092003036767xxx@b0cde8ba3c16@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bjhc+4VQyUDz1VtWVdxoGauvKXHThFxoL2aBuNTC8Jqw=@",
"EO2017100403036980xxx@de227c1fddc2@UmGdgjarlMitj9yAoG8NGGf87xHZghpvmjesH3x8TRb1VtWVdxoGauagR6YDEjHj2aBuNTC8Jqw=@",
"EO2017101103037025xxx@d750fbb2cb23@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnd7Czk19483oSVqTHA941WHDKBsTR+wzc2aBuNTC8Jqw=@",
"EO2017101103037029xxx@d1a7e209f0e3@UmGdgjarlMitj9yAoG8NGJma3dTWxnhncGR4cuVfUb0qAjao/kbwtHyaB0m7ID/i2aBuNTC8Jqw=@",
"EO2017100403036989xxx@cddccd642364@UmGdgjarlMitj9yAoG8NGGf87xHZghpvI9xuhSspadMSVqTHA941WHDKBsTR+wzc2aBuNTC8Jqw=@",
"EO2017101103037020xxx@f4ecbcf24777@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnVZ3q+++pzShmPSHFYKmGL9NKp4JDSG+L2aBuNTC8Jqw=@",
"EO2017092003036769xxx@c1544f4ed02b@UmGdgjarlMiIaazfERBDfAPv12XU9g5BSDgMTV+xGQoqAjao/kbwtC9YzBDKJYQ82aBuNTC8Jqw=@",
"EO2017092703036940xxx@cce0cdf2292c@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0Ipaa49OAqWcqAjao/kbwtC9YzBDKJYQ82aBuNTC8Jqw=@",
"EO2017101103037033xxx@ab5f56ec69df@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnPVDuSDyveIRMCaG3jx07WuYh3AhYX1QL2aBuNTC8Jqw=@",
"EO2017101103037023xxx@b1842c22754b@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnFzDJrHTzX+oqAjao/kbwtC9YzBDKJYQ82aBuNTC8Jqw=@",
"EO2017100403036986xxx@b4135749a22d@UmGdgjarlMitj9yAoG8NGGf87xHZghpvoA+iS+e2K0xKqnoztl8w3ygU4czbOwyy2aBuNTC8Jqw=@",
"EO2017101103037038xxx@ae07dee8c027@UmGdgjarlMitj9yAoG8NGJma3dTWxnhngimUxGecF20qAjao/kbwtP82VeYSeEir2aBuNTC8Jqw=@",
"EO2017100403036995xxx@b02a3f74502e@UmGdgjarlMitj9yAoG8NGGf87xHZghpvdVYj1R1/cTnxSR5I4zD0Qc9kKmuzBqKG2aBuNTC8Jqw=@",
"EO2017101103037022xxx@ffbddf8de908@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnDgxNqG9c8C4qAjao/kbwtLLITv4NR1v32aBuNTC8Jqw=@",
"EO2017101103037020xxx@d1b8f4201035@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnK36Iu8CK7llSnw1jJR6aSxYLF5JnjI262aBuNTC8Jqw=@",
"EO2017101103037021xxx@c919a64522c9@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnyOPGFBCcfeNzTJ48rAhXqMNCV2dgj5uP2aBuNTC8Jqw=@",
"EO2017101103037037xxx@c134368b64c1@UmGdgjarlMitj9yAoG8NGJma3dTWxnhn6Z+adkjBZuZRpJVhQ7c8HaRDdGlqUe5A2aBuNTC8Jqw=@",
"EO2017100403036989xxx@aa9f7c9c0047@UmGdgjarlMitj9yAoG8NGGf87xHZghpvpovcp16OeCwcfI+5x3oW/Js+mrb70C0Q2aBuNTC8Jqw=@",
"EO2017101103037039xxx@f9989a65f1f8@UmGdgjarlMitj9yAoG8NGJma3dTWxnhn4N6OB9BmSrIcfI+5x3oW/Js+mrb70C0Q2aBuNTC8Jqw=@",
"EO2017100403036979xxx@d85baa067990@UmGdgjarlMitj9yAoG8NGGf87xHZghpv/fruP/DGQSsqAjao/kbwtHa67u1ufjFw2aBuNTC8Jqw=@",
"EO2017101103037029xxx@c221a1010210@UmGdgjarlMitj9yAoG8NGJma3dTWxnhn+78j+sO5Km0qAjao/kbwtHa67u1ufjFw2aBuNTC8Jqw=@",
"EO2017101103037036xxx@fcfc4db1fcf2@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnp/KY7d0Sq9z+D3i4Q10XTAKEr2tDHOEf2aBuNTC8Jqw=@",
"EO2017101103037031xxx@af2b5cea7aea@UmGdgjarlMitj9yAoG8NGJma3dTWxnhnDO0E1dfUNr4Cy6e4xbfNqKyxdm7Jv6uH2aBuNTC8Jqw=@"
];

var preset6 = [
"EO2017091303036668829@b01a9daa6509@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPZAAD34qEnF7xSR5I4zD0Qc2R1TTDj8Am2aBuNTC8Jqw=@",
"EO2017083003036458433@d867f899740f@UmGdgjarlMjDqfksanOqp3ZYdimQM55GrFKbnSrKLt0qAjao/kbwtGtCLjINoHyC2aBuNTC8Jqw=@",
"EO2017091303036656534@ad59884a9191@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPWGhxJuu6mH5MCaG3jx07WoASZBbbu+Y02aBuNTC8Jqw=@",
"EO2017092003036770313@fe6e09613c73@UmGdgjarlMiIaazfERBDfAPv12XU9g5BJrAOdZDihZZxPvBD7zjjxDbx3cbLbmdf2aBuNTC8Jqw=@",
"EO2017092003036767385@c6045325d466@UmGdgjarlMiIaazfERBDfAPv12XU9g5BjLkdB8lOeEJKqnoztl8w38x0azJz5xoH2aBuNTC8Jqw=@",
"EO2017092003036765590@b817634786cc@UmGdgjarlMiIaazfERBDfAPv12XU9g5BYmc4tXYR1ilmPSHFYKmGLw1LbvG1RKJW2aBuNTC8Jqw=@",
"EO2017092003036770314@c65a132aa3fe@UmGdgjarlMiIaazfERBDfAPv12XU9g5BnyXBw1Pcg43xSR5I4zD0Qc2R1TTDj8Am2aBuNTC8Jqw=@",
"EO2017092003036774025@bd5de30fcd86@UmGdgjarlMitj9yAoG8NGGf87xHZghpvIAptt7YLEZ/GPVX3nDKUWhwuI+3QnF8r2aBuNTC8Jqw=@",
"EO2017092003036766516@eceb5ff5c4bc@UmGdgjarlMiIaazfERBDfAPv12XU9g5BtWXPnbwgFqsCy6e4xbfNqD7ZFVc8AcKO2aBuNTC8Jqw=@",
"EO2017092003036770249@ff5690e6ee16@UmGdgjarlMiIaazfERBDfAPv12XU9g5BeC47XqQLAlnxSR5I4zD0QWFw84ALRVyF2aBuNTC8Jqw=@",
"EO2017092003036764630@f82605fbfba2@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bu8a+EBpqqdlvsZKMZZ+3tJjxo1KJCH112aBuNTC8Jqw=@",
"EO2017092003036766494@c8e03d7dc038@UmGdgjarlMiIaazfERBDfAPv12XU9g5BHv6U6/k4jcZRpJVhQ7c8HTAfWI5vmPN22aBuNTC8Jqw=@",
"EO2017092003036771373@fa4794702b37@UmGdgjarlMiIaazfERBDfAPv12XU9g5BzN6+DpJ3+WlmjJWAtZ771wunSj1yd57v2aBuNTC8Jqw=@",
"EO2017092003036769406@c6c9a93f0df6@UmGdgjarlMiIaazfERBDfAPv12XU9g5BrM+G2Aurna3+D3i4Q10XTPhtrFwdO5Ar2aBuNTC8Jqw=@",
"EO2017092003036775751@c80e6519dec9@UmGdgjarlMiIaazfERBDfAPv12XU9g5By2jillJqMrb1VtWVdxoGakhwvbhx4cN/2aBuNTC8Jqw=@",
"EO2017092003036767519@b48f9e6a017f@UmGdgjarlMiIaazfERBDfAPv12XU9g5BGabSrkOy2h1MCaG3jx07WskUK864js9Y2aBuNTC8Jqw=@",
"EO2017092003036766672@b45f850fb7e6@UmGdgjarlMiIaazfERBDfAPv12XU9g5BLpiaFprwb3NxPvBD7zjjxEE+Zg20YlEg2aBuNTC8Jqw=@",
"EO2017092003036771493@ff16bc5b11ed@UmGdgjarlMiIaazfERBDfAPv12XU9g5BjF/wE58Zxc9xPvBD7zjjxPY22vkhNmka2aBuNTC8Jqw=@",
"EO2017092003036769555@efbe95209c7f@UmGdgjarlMiIaazfERBDfAPv12XU9g5BBRnfnCJpSWESVqTHA941WDkFq98Ky6gz2aBuNTC8Jqw=@",
"EO2017091303036659539@db0260d64ad8@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPsA2FfwdNWwlRpJVhQ7c8HdMxjXaQxcq22aBuNTC8Jqw=@",
"EO2017092003036772543@d0dcdfc5fec8@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bw9zqTQsg6M9RpJVhQ7c8HdMxjXaQxcq22aBuNTC8Jqw=@",
"EO2017092003036766668@ecc99bb11ce9@UmGdgjarlMiIaazfERBDfAPv12XU9g5BAWS1HkCQD7/+D3i4Q10XTP/gwmrOvD+W2aBuNTC8Jqw=@",
"EO2017092003036769342@d5620911ea6d@UmGdgjarlMiIaazfERBDfAPv12XU9g5B/rI7ANxEqF1MCaG3jx07Wr3kvyXlKjwn2aBuNTC8Jqw=@",
"EO2017071203035422318@31b99b9382eb@UmGdgjarlMiF7fb2WHgbz+6U81HpOhR9xmg0SiAyFMdRpJVhQ7c8HYm0MWFostmC2aBuNTC8Jqw=@",
"EO2017100403036982638@d7b6b4f65376@UmGdgjarlMitj9yAoG8NGGf87xHZghpvczKImGLQznhSnw1jJR6aS2pseMBo+hn62aBuNTC8Jqw=@",
"EO2017100403036994910@ebe0dbc20252@UmGdgjarlMitj9yAoG8NGGf87xHZghpv5dDzbwbOEKMa7hNvFpPqJf5BNl39xr502aBuNTC8Jqw=@",
"EO2017100403036996859@c4f8e92fdb69@UmGdgjarlMitj9yAoG8NGGf87xHZghpv+sqxwG7XEy4y8msexwur11K6gQfxuooT2aBuNTC8Jqw=@",
"EO2017100403036984493@c550e9045e2b@UmGdgjarlMitj9yAoG8NGGf87xHZghpvZLWKrjO5ogJmjJWAtZ77119S/a/Z4FGF2aBuNTC8Jqw=@",
"EO2017100403036987453@d5b883f19d16@UmGdgjarlMitj9yAoG8NGGf87xHZghpv9MrohPBUmLoCy6e4xbfNqBZ0TVIsC3xi2aBuNTC8Jqw=@",
"EO2017100403036983585@be762fafba2b@UmGdgjarlMitj9yAoG8NGGf87xHZghpvEM/hbei1gCzxSR5I4zD0Qaj1vuRp8T1E2aBuNTC8Jqw=@",
"EO2017092003036765713@e13a60c68d78@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bqtnw2D02fBifM1k6bwP23/DLvrMD9NKo2aBuNTC8Jqw=@",
"EO2017100403036979655@cd335cd7aafe@UmGdgjarlMitj9yAoG8NGGf87xHZghpvsgmL3xinWx+fM1k6bwP23/DLvrMD9NKo2aBuNTC8Jqw=@",
"EO2017072603035979642@61042f7e0b28@UmGdgjarlMitj9yAoG8NGGf87xHZghpvMOH+HLG/vXVKqnoztl8w3w39jDueB/bw2aBuNTC8Jqw=@",
"EO2017091303036661657@fd4754d10fa8@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPqKYc8/ot3wxKqnoztl8w3w39jDueB/bw2aBuNTC8Jqw=@",
"EO2017071903035756307@57afebf3a8cc@UmGdgjarlMiF7fb2WHgbz94200AjVXHlxB0YMSmRTcBRpJVhQ7c8HYm0MWFostmC2aBuNTC8Jqw=@",
"EO2017070503035265777@2ac553b16b32@UmGdgjarlMiF7fb2WHgbz0zzJHNWSohz2uUhXGVxuNhRpJVhQ7c8HYm0MWFostmC2aBuNTC8Jqw=@",
"EO2017100403036980656@fa9e6b996461@UmGdgjarlMitj9yAoG8NGGf87xHZghpvgN8QNlBzleJMCaG3jx07WqPK/5aBzLCw2aBuNTC8Jqw=@",
"EO2017100403036989542@aac28bf9d11f@UmGdgjarlMitj9yAoG8NGGf87xHZghpvN9iTRcVo9VpRpJVhQ7c8HcOGyNDMQnns2aBuNTC8Jqw=@",
"EO2017100403036983539@f70af4844278@UmGdgjarlMitj9yAoG8NGGf87xHZghpvzDsOrrl8ZQtmjJWAtZ7713sdUbWyIV1f2aBuNTC8Jqw=@",
"EO2017100403036994943@ab0ea1f50504@UmGdgjarlMitj9yAoG8NGGf87xHZghpv5U+eD7XLSodRpJVhQ7c8Hb2nMH3boiTA2aBuNTC8Jqw=@",
"EO2017100403036992073@f272028373d3@UmGdgjarlMitj9yAoG8NGGf87xHZghpvVoyYvfBh1+ECy6e4xbfNqDnGTaN9Bzm62aBuNTC8Jqw=@",
"EO2017100403036992056@f6b1ffbba8a6@UmGdgjarlMitj9yAoG8NGGf87xHZghpvN9iTRcVo9VpRpJVhQ7c8HcOGyNDMQnns2aBuNTC8Jqw=@",
"EO2017092703036941132@f59877917430@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0oZvoxEuhmGRKqnoztl8w3xqbIrf9J8052aBuNTC8Jqw=@",
"EO2017090603036592016@0065c1faf8b6@UmGdgjarlMiIaazfERBDfB0nAj8bV2bOFiWMMwmG35FKqnoztl8w3xqbIrf9J8052aBuNTC8Jqw=@",
"EO2017083003036458133@fffb0eaf30a4@UmGdgjarlMjDqfksanOqp3ZYdimQM55GhOutqKdiw85Kqnoztl8w3xqbIrf9J8052aBuNTC8Jqw=@",
"EO2017092003036767307@d6bd6262bb4b@UmGdgjarlMiIaazfERBDfAPv12XU9g5BxtHkzT7+oVZSnw1jJR6aS5uXTBlLP0DG2aBuNTC8Jqw=@",
"EO2017091303036658717@c38e3abb401d@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPAYTNF3mlEX5Snw1jJR6aS5uXTBlLP0DG2aBuNTC8Jqw=@",
"EO2017090603036588201@f2aa4fd92eb9@UmGdgjarlMiIaazfERBDfB0nAj8bV2bOF2WfbFUeoFBSnw1jJR6aS5uXTBlLP0DG2aBuNTC8Jqw=@",
"EO2017083003036459941@f8a5e059ae2e@UmGdgjarlMjDqfksanOqp3ZYdimQM55GKl7wNcryHotSnw1jJR6aS5uXTBlLP0DG2aBuNTC8Jqw=@",
"EO2017091303036664511@afa5fb07b2f3@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPfegoaOerpcZKqnoztl8w3xqbIrf9J8052aBuNTC8Jqw=@",
"EO2017092003036768513@e0ad3737c24b@UmGdgjarlMiIaazfERBDfAPv12XU9g5ButEc1hpkUgnxSR5I4zD0Qd8SzZzyA3q32aBuNTC8Jqw=@",
"EO2017100403036989526@e12502a42623@UmGdgjarlMitj9yAoG8NGGf87xHZghpv59+7oGTiuBtRpJVhQ7c8HaAuXz/pdIDe2aBuNTC8Jqw=@",
"EO2017092703036923548@dbedf67a1d1b@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0HvyTSeEIACB+3aFHOlAjJzJNWmJbkXdZ2aBuNTC8Jqw=@",
"EO2017092703036942076@ab781ff8efab@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0KVFo66o0l0JxPvBD7zjjxEDMaaWaPrLd2aBuNTC8Jqw=@",
"EO2017091303036664309@cd00584a4bc5@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0ueQQTSJMLspRpJVhQ7c8HW4j2wWWQZFZ2aBuNTC8Jqw=@",
"EO2017092703036930424@b1d1bc213fe5@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0HFChU5I0p9MqAjao/kbwtLR4/5eaRMSO2aBuNTC8Jqw=@",
"EO2017092703036925566@b94caf40e964@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0fcUl8ilxNnhRpJVhQ7c8HXp9zP4t05nQ2aBuNTC8Jqw=@",
"EO2017092703036943017@cf6a9d674bd7@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0Tl+n82Ytq25MCaG3jx07WnwleBeCdnIw2aBuNTC8Jqw=@",
"EO2017092703036935002@d8348655346b@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0DRZu7V2tbfwqAjao/kbwtNFpwWo/Gm292aBuNTC8Jqw=@",
"EO2017092703036926594@cda208149749@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0XjLC5eIc8FlRpJVhQ7c8Hb2nMH3boiTA2aBuNTC8Jqw=@",
"EO2017092703036944056@f03fe97e7fb5@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0BDGOViHf5Pk7CZkqqfiVVgrMCv+UzeLu2aBuNTC8Jqw=@",
"EO2017092703036934187@c19a4a40e3db@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0yCH6JQ/SZFFmjJWAtZ7713sdUbWyIV1f2aBuNTC8Jqw=@",
"EO2017090603036587691@eefd50951740@UmGdgjarlMiIaazfERBDfB0nAj8bV2bOjhMfxXomNZxMCaG3jx07WmLopvxQgO0H2aBuNTC8Jqw=@",
"EO2017092703036923599@eecbc3920723@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0ERiCFDvVSBQCy6e4xbfNqDnGTaN9Bzm62aBuNTC8Jqw=@",
"EO2017092703036940113@f3ce85bb738d@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0qq84YJEMiruahYnAzTfiNslmqvZkt2+W2aBuNTC8Jqw=@",
"EO2017092003036773217@bae1b6c4b9d0@UmGdgjarlMiIaazfERBDfAPv12XU9g5B39B5cK/eThOahYnAzTfiNslmqvZkt2+W2aBuNTC8Jqw=@",
"EO2017091303036661562@eed90590c8c4@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPYdMJrPlD9JGahYnAzTfiNslmqvZkt2+W2aBuNTC8Jqw=@",
"EO2017092703036941095@e556bf5aa241@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0deiyOy11GrUCy6e4xbfNqJU81/fTw4tN2aBuNTC8Jqw=@",
"EO2017092003036765714@feecd9b7b2ab@UmGdgjarlMiIaazfERBDfAPv12XU9g5BX1swQW1F5PMCy6e4xbfNqJU81/fTw4tN2aBuNTC8Jqw=@",
"EO2017091303036658595@fa259a2967ae@UmGdgjarlMiIaazfERBDfP3ssEHW4oDP/h55wStioPMCy6e4xbfNqJU81/fTw4tN2aBuNTC8Jqw=@",
"EO2017092703036936021@f9b101e48c1a@UmGdgjarlMiIaazfERBDfCW5IMR+pYC07YEo8cqchjvGPVX3nDKUWrcNaxLQItzJ2aBuNTC8Jqw=@",
"EO2017092003036765498@e4762987c158@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bv25g3NiZ26TGPVX3nDKUWrcNaxLQItzJ2aBuNTC8Jqw=@",
"EO2017091303036665749@07124c474640@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPtxjDAlbRviTGPVX3nDKUWrcNaxLQItzJ2aBuNTC8Jqw=@",
"EO2017092703036925428@b80d1510f2dd@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0nYUq3mc6RfYIuCwgclqnIldWE5+1ircA2aBuNTC8Jqw=@",
"EO2017092003036774196@c0fb16ab49b7@UmGdgjarlMiIaazfERBDfAPv12XU9g5BfeErlaJQaqcIuCwgclqnIldWE5+1ircA2aBuNTC8Jqw=@",
"EO2017091303036662559@ad681efb3e04@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPg74xbPRLR8IIuCwgclqnIldWE5+1ircA2aBuNTC8Jqw=@",
"EO2017092703036941005@d9f6b75894b9@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0v38Vl04aL6RRpJVhQ7c8HUMeHg/Mj5lW2aBuNTC8Jqw=@",
"EO2017092003036769289@d71746692437@UmGdgjarlMiIaazfERBDfAPv12XU9g5BEawIJ4DkcVpRpJVhQ7c8HUMeHg/Mj5lW2aBuNTC8Jqw=@",
"EO2017092003036771293@bc7015d80d48@UmGdgjarlMiIaazfERBDfAPv12XU9g5BTRbsxOqMqm1mjJWAtZ771zghOGFgDYni2aBuNTC8Jqw=@",
"EO2017091303036657538@e3e1bbc0a116@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPfxgn86XSIOBmjJWAtZ771zghOGFgDYni2aBuNTC8Jqw=@",
"EO2017090603036592942@05748aa4c690@UmGdgjarlMiIaazfERBDfB0nAj8bV2bOAM2UXzZiW/xmjJWAtZ771zghOGFgDYni2aBuNTC8Jqw=@",
"EO2017092703036923475@b9265beee303@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0sUg7mODzcJPGPVX3nDKUWmHlLEMMIsKH2aBuNTC8Jqw=@",
"EO2017092003036774218@a9c888136ad7@UmGdgjarlMiIaazfERBDfAPv12XU9g5B1AIXVKlkVLfGPVX3nDKUWmHlLEMMIsKH2aBuNTC8Jqw=@",
"EO2017091303036661425@ccbf4340d1b1@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPYSM3ine0o5fGPVX3nDKUWmHlLEMMIsKH2aBuNTC8Jqw=@",
"EO2017090603036592090@04e65f08b9a2@UmGdgjarlMiIaazfERBDfB0nAj8bV2bOLuvdEIbJpLzGPVX3nDKUWmHlLEMMIsKH2aBuNTC8Jqw=@",
"EO2017092703036934042@d1384df3d6ef@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0uZE96qyokFrGPVX3nDKUWjoAVRF3QkDN2aBuNTC8Jqw=@",
"EO2017092003036767375@aea3923457dd@UmGdgjarlMiIaazfERBDfAPv12XU9g5BHn25ddV5cmXGPVX3nDKUWjoAVRF3QkDN2aBuNTC8Jqw=@",
"EO2017091303036663347@ab45c9e2bb17@UmGdgjarlMiIaazfERBDfP3ssEHW4oDPN63hP6/6jUjGPVX3nDKUWjoAVRF3QkDN2aBuNTC8Jqw=@",
"EO2017092703036936026@f8592b7274c0@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0wF1lgSexhbpmjJWAtZ771xcciakZJ0yt2aBuNTC8Jqw=@",
"EO2017092003036774247@c214db03fdb5@UmGdgjarlMiIaazfERBDfAPv12XU9g5BhjhQhZZcQfBmjJWAtZ771xcciakZJ0yt2aBuNTC8Jqw=@",
"EO2017091303036663264@f6f8c119a3b0@UmGdgjarlMiIaazfERBDfP3ssEHW4oDP2bLKASxojaNmjJWAtZ771xcciakZJ0yt2aBuNTC8Jqw=@",
"EO2017092703036929422@f29384a38c62@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0ayqZ3unEvXVRpJVhQ7c8HSvrjf/XHlc52aBuNTC8Jqw=@",
"EO2017092003036764706@e938a50ab837@UmGdgjarlMiIaazfERBDfAPv12XU9g5B9tGcLaDEaepRpJVhQ7c8HSvrjf/XHlc52aBuNTC8Jqw=@",
"EO2017091303036655719@cdbd2ab62d37@UmGdgjarlMiIaazfERBDfP3ssEHW4oDP/ioaR+U/JXtRpJVhQ7c8HSvrjf/XHlc52aBuNTC8Jqw=@",
"EO2017100403036990174@f59f5343ec41@UmGdgjarlMitj9yAoG8NGGf87xHZghpvtGm9BLO1xXvxSR5I4zD0QfiqHSqvUajR2aBuNTC8Jqw=@",
"EO2017100403036980565@e2a73bef9c83@UmGdgjarlMitj9yAoG8NGGf87xHZghpv6jMFROkJ4F4Cy6e4xbfNqDH/VRv/Xv8Z2aBuNTC8Jqw=@",
"EO2017092703036944923@e3be362c391a@UmGdgjarlMiIaazfERBDfCW5IMR+pYC00IbepQ3My1hmjJWAtZ7711P9fJ0/UqKK2aBuNTC8Jqw=@",
"EO2017100403036985480@e7f0287ee563@UmGdgjarlMitj9yAoG8NGGf87xHZghpv9/PsHiN1Q9BmjJWAtZ7711P9fJ0/UqKK2aBuNTC8Jqw=@",
"EO2017100403036978565@addbd4811610@UmGdgjarlMitj9yAoG8NGGf87xHZghpvnbzXFFFBco1MCaG3jx07WkjOXpICoXPB2aBuNTC8Jqw=@",
"EO2017100403036984594@b398e8210820@UmGdgjarlMitj9yAoG8NGGf87xHZghpvLbSfRGf448LxSR5I4zD0QV4Qdx0EnLXB2aBuNTC8Jqw=@",
"EO2017100403036978645@de080b55718a@UmGdgjarlMitj9yAoG8NGGf87xHZghpvUjimMsbBa9RKqnoztl8w32jCzwXw3Omq2aBuNTC8Jqw=@",
"EO2017100403036985457@d433f7a58e55@UmGdgjarlMitj9yAoG8NGGf87xHZghpvgXHbFBLeT91Kqnoztl8w3+WkTPFutftm2aBuNTC8Jqw=@",
"EO2017100403036996013@bba98925c13c@UmGdgjarlMitj9yAoG8NGGf87xHZghpvXkuVZxOdu7nxSR5I4zD0QTfuHgTUPtGs2aBuNTC8Jqw=@",
"EO2017100403036990181@e7cce6824ff1@UmGdgjarlMitj9yAoG8NGGf87xHZghpvWJN+WGKTzGHxSR5I4zD0QWehasyU17Zc2aBuNTC8Jqw=@",
"EO2017100403036982582@b305b1396501@UmGdgjarlMitj9yAoG8NGGf87xHZghpvG4T7C4/X1JtRpJVhQ7c8HbSYYLn9igNB2aBuNTC8Jqw=@",
"EO2017100403036997866@ea407fcefe31@UmGdgjarlMitj9yAoG8NGGf87xHZghpvWZsgj56Fr6FRpJVhQ7c8Hdp6PJXvwXzT2aBuNTC8Jqw=@",
"EO2017100403036989506@ee3bbc7cbc5b@UmGdgjarlMitj9yAoG8NGGf87xHZghpv369L8Fevq3VxPvBD7zjjxF0dSlvzbcE+2aBuNTC8Jqw=@",
"EO2017100403036992186@e53d50454338@UmGdgjarlMitj9yAoG8NGGf87xHZghpvNxM5HbpjYWZxPvBD7zjjxFANqyfAJoca2aBuNTC8Jqw=@",
"EO2017100403036987577@ea341380c09d@UmGdgjarlMitj9yAoG8NGGf87xHZghpvWedXUBaQA5ifM1k6bwP23/06gt7G2g9M2aBuNTC8Jqw=@",
"EO2017100403036982630@b4a74ae32830@UmGdgjarlMitj9yAoG8NGGf87xHZghpvNJanJ4exYU0SVqTHA941WM1xcdtV7gRH2aBuNTC8Jqw=@",
"EO2017100403036992184@b3de2207a2bb@UmGdgjarlMitj9yAoG8NGGf87xHZghpvcBEMkzS3IVdmjJWAtZ7713NnqaFoyyse2aBuNTC8Jqw=@",
"EO2017100403036982641@f195437ddeb9@UmGdgjarlMitj9yAoG8NGGf87xHZghpv588RwOf2uigqAjao/kbwtBbR3VIofubp2aBuNTC8Jqw=@",
"EO2017100403036986659@ebe2a003a9fb@UmGdgjarlMitj9yAoG8NGGf87xHZghpvbpou/FQUuQ1Dq95RSstVLT/7ZSWy9Sa42aBuNTC8Jqw=@",
"EO2017100403036997883@e8cb72b2930a@UmGdgjarlMitj9yAoG8NGGf87xHZghpv4JXm+zeudC5RpJVhQ7c8HW4j2wWWQZFZ2aBuNTC8Jqw=@",
"EO2017100403036997887@b7ceccdce7dc@UmGdgjarlMitj9yAoG8NGGf87xHZghpvDEI7wGpKM45RpJVhQ7c8HXp9zP4t05nQ2aBuNTC8Jqw=@",
"EO2017100403036994120@bc83e3833a2a@UmGdgjarlMitj9yAoG8NGGf87xHZghpvTwn4QoN6LkU7CZkqqfiVVqxqA3olcyuD2aBuNTC8Jqw=@",
"EO2017100403036996015@f347893ea947@UmGdgjarlMitj9yAoG8NGGf87xHZghpvdTE9SBcLAUGfM1k6bwP236nae52It9Kw2aBuNTC8Jqw=@",
"EO2017100403036981573@af918ca0dc49@UmGdgjarlMitj9yAoG8NGGf87xHZghpvlAEAZqx/2ORMCaG3jx07WnwleBeCdnIw2aBuNTC8Jqw=@",
"EO2017100403036991976@ec2d22950ff8@UmGdgjarlMitj9yAoG8NGGf87xHZghpvepxV3KK+MoISVqTHA941WL6VrvhIdqqX2aBuNTC8Jqw=@",
"EO2017100403036985573@ecf2aff49767@UmGdgjarlMitj9yAoG8NGGf87xHZghpv8NoJOdXm4WfZmwYQzEdtZSoyMP+Ltjjk2aBuNTC8Jqw=@",
"EO2017100403036984601@fa8bf4235f7a@UmGdgjarlMitj9yAoG8NGGf87xHZghpvzG5EgT0pMbsqAjao/kbwtMVDhYh0fdEM2aBuNTC8Jqw=@",
"EO2017100403036989614@eebc9f3cb6ab@UmGdgjarlMitj9yAoG8NGGf87xHZghpvJo79JXEmHVEqAjao/kbwtPeUq9q256KN2aBuNTC8Jqw=@",
"EO2017100403036981570@e072135406b9@UmGdgjarlMitj9yAoG8NGGf87xHZghpvJqHxS+7VYOTZmwYQzEdtZaXnnLVXex9N2aBuNTC8Jqw=@",
"EO2017100403036987520@e6e648462ee7@UmGdgjarlMitj9yAoG8NGGf87xHZghpvhQaNJhdsjYvxSR5I4zD0QRhcA1XDTVVv2aBuNTC8Jqw=@",
"EO2017100403036989611@c381a3c8b7df@UmGdgjarlMitj9yAoG8NGGf87xHZghpvk8X51UKtvrxKqnoztl8w37KTJN3pmIbu2aBuNTC8Jqw=@",
"EO2017100403036994962@fc62f55b03df@UmGdgjarlMitj9yAoG8NGGf87xHZghpvWIF6y9p4cDdRpJVhQ7c8HWdTVnzUn4WI2aBuNTC8Jqw=@",
"EO2017100403036989501@e27aec59ea69@UmGdgjarlMitj9yAoG8NGGf87xHZghpvqPwuTeqOU35Snw1jJR6aS43VbotCTbb52aBuNTC8Jqw=@",
"EO2017100403036996975@ce93e6c7104c@UmGdgjarlMitj9yAoG8NGGf87xHZghpvXb8hpYBHhzMqAjao/kbwtPWFD/p1AInH2aBuNTC8Jqw=@",
"EO2017100403036989610@c9a3a8933364@UmGdgjarlMitj9yAoG8NGGf87xHZghpvTRRZ1yhhjlpMCaG3jx07WpGSU7i/pHlL2aBuNTC8Jqw=@",
"EO2017100403036996020@dfb4c9f3e5bb@UmGdgjarlMitj9yAoG8NGGf87xHZghpvLNeJ9j79XHRSnw1jJR6aSyteS4yBNMig2aBuNTC8Jqw=@",
"EO2017100403036988603@dfb4c9f3e5bb@UmGdgjarlMitj9yAoG8NGGf87xHZghpvLNeJ9j79XHRSnw1jJR6aSyteS4yBNMig2aBuNTC8Jqw=@",
"EO2017100403036997881@ebf2aa41d04f@UmGdgjarlMitj9yAoG8NGGf87xHZghpvcL93q+5LAmFKqnoztl8w36YcKbN6DzOl2aBuNTC8Jqw=@",
"EO2017100403036994112@ded780b268c8@UmGdgjarlMitj9yAoG8NGGf87xHZghpvqkcdpvhjbQACy6e4xbfNqCyV1vyttIOY2aBuNTC8Jqw=@",
"EO2017100403036986572@d6ee4393080f@UmGdgjarlMitj9yAoG8NGGf87xHZghpvgfipCxY8oWJKqnoztl8w38b1z/sdr/Et2aBuNTC8Jqw=@",
"EO2017092703036934061@c21387f61eea@UmGdgjarlMiIaazfERBDfCW5IMR+pYC093yy6x4KUKX1VtWVdxoGav0LBkHI/Sxr2aBuNTC8Jqw=@",
"EO2017100403036994967@d1dbc7c3efca@UmGdgjarlMitj9yAoG8NGGf87xHZghpvZcg812RALC/xSR5I4zD0QUDjqlzMo3wU2aBuNTC8Jqw=@",
"EO2017100403036990170@ca741b474379@UmGdgjarlMitj9yAoG8NGGf87xHZghpv58XIJvSirIAIuCwgclqnIskqzt8ImkkZ2aBuNTC8Jqw=@",
"EO2017100403036987521@b85896025cd9@UmGdgjarlMitj9yAoG8NGGf87xHZghpvL4DsXgf1JAbxSR5I4zD0QfSvNBFMI7/s2aBuNTC8Jqw=@",
"EO2017100403036979702@ccffa419a297@UmGdgjarlMitj9yAoG8NGGf87xHZghpvz8ubrdNmFqRmjJWAtZ7713PS22emR8Ya2aBuNTC8Jqw=@",
"EO2017100403036987500@b37ea181e301@UmGdgjarlMitj9yAoG8NGGf87xHZghpv2cysRRIM4yJKqnoztl8w38x0azJz5xoH2aBuNTC8Jqw=@",
"EO2017100403036985437@e64298b8626f@UmGdgjarlMitj9yAoG8NGGf87xHZghpvnU5Ypiaa4n4qAjao/kbwtPKnd4jRirAA2aBuNTC8Jqw=@",
"EO2017100403036980570@b377f339b950@UmGdgjarlMitj9yAoG8NGGf87xHZghpvtESBF7NaXl87CZkqqfiVVi0qhWz46tgd2aBuNTC8Jqw=@",
"EO2017100403036988520@c84db3eccdcb@UmGdgjarlMitj9yAoG8NGGf87xHZghpvSVKUIUDLXhAcfI+5x3oW/Kbycy/MuvYA2aBuNTC8Jqw=@",
"EO2017100403036984535@e6008e437eaf@UmGdgjarlMitj9yAoG8NGGf87xHZghpvjlzfJwKwDFcqAjao/kbwtC0r1RGmPFQm2aBuNTC8Jqw=@",
"EO2017100403036981566@dcf441692ecb@UmGdgjarlMitj9yAoG8NGGf87xHZghpvU7WNY4sEsVZmPSHFYKmGL7tEtDky7riO2aBuNTC8Jqw=@",
"EO2017100403036987566@cf07345bb119@UmGdgjarlMitj9yAoG8NGGf87xHZghpv3SMrI5eXjR9+3aFHOlAjJzltDalQLFEq2aBuNTC8Jqw=@",
"EO2017100403036998795@b4ed0a9d4efe@UmGdgjarlMitj9yAoG8NGGf87xHZghpvTPUV9ZH7/AtRpJVhQ7c8HTA4hRi9J71H2aBuNTC8Jqw=@",
"EO2017100403036996032@fc0226650cd0@UmGdgjarlMitj9yAoG8NGGf87xHZghpv1M42slZYdyFRpJVhQ7c8HUSayrObvH1m2aBuNTC8Jqw=@",
"EO2017100403036983655@ed27d4a00ae9@UmGdgjarlMitj9yAoG8NGGf87xHZghpvrss84Am31yVzTJ48rAhXqOAnQjDa+ybf2aBuNTC8Jqw=@",
"EO2017100403036987591@b5bd06a59392@UmGdgjarlMitj9yAoG8NGGf87xHZghpvXcAJbv74m0GlBmspJuqgAv55Nn2vy6pV2aBuNTC8Jqw=@",
"EO2017100403036988597@f51128094b34@UmGdgjarlMitj9yAoG8NGGf87xHZghpvrgRBl3mdcF6lBmspJuqgAlS2zdjXbmBN2aBuNTC8Jqw=@",
"EO2017092703036930400@dbe2457bc05d@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0/51NFqyy59YqAjao/kbwtDryGZbYHfS12aBuNTC8Jqw=@",
"EO2017100403036980552@a88e0886aaa5@UmGdgjarlMitj9yAoG8NGGf87xHZghpvaIf8ZCs8VPAfK63mVA1scBB2Ai4b3o3G2aBuNTC8Jqw=@",
"EO2017100403036983532@a882eb4f1129@UmGdgjarlMitj9yAoG8NGGf87xHZghpvnld1SEumvJV+3aFHOlAjJ43PBXe95KPe2aBuNTC8Jqw=@",
"EO2017100403036980621@bbdaddbb3955@UmGdgjarlMitj9yAoG8NGGf87xHZghpv/cGSly1sgZZMCaG3jx07WlboK4pUWBYp2aBuNTC8Jqw=@",
"EO2017100403036991247@baf7d368d2e1@UmGdgjarlMitj9yAoG8NGGf87xHZghpv2cIvKNd933IqAjao/kbwtCDajxd3lXxB2aBuNTC8Jqw=@",
"EO2017100403036986622@ef1599c27bbc@UmGdgjarlMitj9yAoG8NGGf87xHZghpv/DtBY19KDnoqAjao/kbwtOiT1sXe2dMA2aBuNTC8Jqw=@",
"EO2017100403036987561@c57876427330@UmGdgjarlMitj9yAoG8NGGf87xHZghpvqtZi7war5z5Snw1jJR6aS42ZOfx6SQne2aBuNTC8Jqw=@",
"EO2017100403036995834@c16f9be98fff@UmGdgjarlMitj9yAoG8NGGf87xHZghpvQLAmNqpjixEfK63mVA1scCDdN+HVC/GC2aBuNTC8Jqw=@",
"EO2017100403036985463@f2363ed99eda@UmGdgjarlMitj9yAoG8NGGf87xHZghpvh37b1V7BmnlKqnoztl8w31LHzThtzEEQ2aBuNTC8Jqw=@",
"EO2017100403036986628@d16fb6846fb6@UmGdgjarlMitj9yAoG8NGGf87xHZghpv9DXBUVCEwzJMCaG3jx07WnBhcbE2ipxl2aBuNTC8Jqw=@",
"EO2017100403036990239@c1911c904385@UmGdgjarlMitj9yAoG8NGGf87xHZghpvgR4F7XqCUV1RpJVhQ7c8HYm0MWFostmC2aBuNTC8Jqw=@",
"EO2017100403036988479@e66ca71dd07b@UmGdgjarlMitj9yAoG8NGGf87xHZghpv6kFLYUXYpFtRpJVhQ7c8Hc48hW2BJ+Nl2aBuNTC8Jqw=@",
"EO2017100403036983517@ca57686c9532@UmGdgjarlMitj9yAoG8NGGf87xHZghpv7O2AMzDjQFlnGXUP+TBJCh44C4XUfDV52aBuNTC8Jqw=@",
"EO2017092003036772341@db9d3aab421b@UmGdgjarlMiIaazfERBDfAPv12XU9g5BWx3oz85cz/lRpJVhQ7c8Hc48hW2BJ+Nl2aBuNTC8Jqw=@",
"EO2017100403036985433@dbdee5c08f75@UmGdgjarlMitj9yAoG8NGGf87xHZghpvWYK8OLQfVNSC5JErSRCLZzLsrVtA8exz2aBuNTC8Jqw=@",
"EO2017100403036985500@e87299d6d273@UmGdgjarlMitj9yAoG8NGGf87xHZghpv7pKzxJey73ZzTJ48rAhXqKiyygp+6GVc2aBuNTC8Jqw=@",
"EO2017100403036983638@c2cac724714a@UmGdgjarlMitj9yAoG8NGGf87xHZghpvMOH+HLG/vXVKqnoztl8w3w39jDueB/bw2aBuNTC8Jqw=@",
"EO2017100403036989609@dda6b9919aaf@UmGdgjarlMitj9yAoG8NGGf87xHZghpvtbO1jRD9rDBxPvBD7zjjxIRm59Gvy1W92aBuNTC8Jqw=@",
"EO2017100403036990282@f14a5b430343@UmGdgjarlMitj9yAoG8NGGf87xHZghpvsaZcBtGH4psa7hNvFpPqJT6On5oyeZPO2aBuNTC8Jqw=@",
"EO2017092703036930511@c4f10ad0afd7@UmGdgjarlMiIaazfERBDfCW5IMR+pYC0GzWeix4+KYQCy6e4xbfNqBe4V80EFgqK2aBuNTC8Jqw=@",
"EO2017100403036997899@cf76c2286798@UmGdgjarlMitj9yAoG8NGGf87xHZghpvxN0R8S1jVTkCy6e4xbfNqEjEjgmZGYli2aBuNTC8Jqw=@",
"EO2017100403036994123@f1ad60e065c6@UmGdgjarlMitj9yAoG8NGGf87xHZghpv9WQiESUfDWVMCaG3jx07WgL0T+dgiT5V2aBuNTC8Jqw=@"];

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
