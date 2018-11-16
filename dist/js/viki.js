/*! markdown-it-container 2.0.0 https://github.com//markdown-it/markdown-it-container @license MIT */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.markdownitContainer=e()}}(function(){return function e(r,n,t){function o(f,a){if(!n[f]){if(!r[f]){var u="function"==typeof require&&require;if(!a&&u)return u(f,!0);if(i)return i(f,!0);var c=new Error("Cannot find module '"+f+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[f]={exports:{}};r[f][0].call(s.exports,function(e){var n=r[f][1][e];return o(n?n:e)},s,s.exports,e,r,n,t)}return n[f].exports}for(var i="function"==typeof require&&require,f=0;f<t.length;f++)o(t[f]);return o}({1:[function(e,r,n){"use strict";r.exports=function(e,r,n){function t(e){return e.trim().split(" ",2)[0]===r}function o(e,n,t,o,i){return 1===e[n].nesting&&e[n].attrPush(["class",r]),i.renderToken(e,n,t,o,i)}function i(e,n,t,o){var i,l,d,p,k,h,b,m,v=!1,y=e.bMarks[n]+e.tShift[n],_=e.eMarks[n];if(u!==e.src.charCodeAt(y))return!1;for(i=y+1;_>=i&&a[(i-y)%c]===e.src[i];i++);if(d=Math.floor((i-y)/c),f>d)return!1;if(i-=(i-y)%c,p=e.src.slice(y,i),k=e.src.slice(i,_),!s(k))return!1;if(o)return!0;for(l=n;(l++,!(l>=t))&&(y=e.bMarks[l]+e.tShift[l],_=e.eMarks[l],!(_>y&&e.sCount[l]<e.blkIndent));)if(u===e.src.charCodeAt(y)&&!(e.sCount[l]-e.blkIndent>=4)){for(i=y+1;_>=i&&a[(i-y)%c]===e.src[i];i++);if(!(Math.floor((i-y)/c)<d||(i-=(i-y)%c,i=e.skipSpaces(i),_>i))){v=!0;break}}return b=e.parentType,m=e.lineMax,e.parentType="container",e.lineMax=l,h=e.push("container_"+r+"_open","div",1),h.markup=p,h.block=!0,h.info=k,h.map=[n,l],e.md.block.tokenize(e,n+1,l),h=e.push("container_"+r+"_close","div",-1),h.markup=e.src.slice(y,i),h.block=!0,e.parentType=b,e.lineMax=m,e.line=l+(v?1:0),!0}n=n||{};var f=3,a=n.marker||":",u=a.charCodeAt(0),c=a.length,s=n.validate||t,l=n.render||o;e.block.ruler.before("fence","container_"+r,i,{alt:["paragraph","reference","blockquote","list"]}),e.renderer.rules["container_"+r+"_open"]=l,e.renderer.rules["container_"+r+"_close"]=l}},{}]},{},[1])(1)});
;
/*! markdown-it-emoji 1.4.0 https://github.com//markdown-it/markdown-it-emoji @license MIT */
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.markdownitEmoji=a()}}(function(){return function a(e,n,o){function i(_,t){if(!n[_]){if(!e[_]){var s="function"==typeof require&&require;if(!t&&s)return s(_,!0);if(r)return r(_,!0);var l=new Error("Cannot find module '"+_+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[_]={exports:{}};e[_][0].call(c.exports,function(a){var n=e[_][1][a];return i(n?n:a)},c,c.exports,a,e,n,o)}return n[_].exports}for(var r="function"==typeof require&&require,_=0;_<o.length;_++)i(o[_]);return i}({1:[function(a,e,n){e.exports={100:"\ud83d\udcaf",1234:"\ud83d\udd22",grinning:"\ud83d\ude00",smiley:"\ud83d\ude03",smile:"\ud83d\ude04",grin:"\ud83d\ude01",laughing:"\ud83d\ude06",satisfied:"\ud83d\ude06",sweat_smile:"\ud83d\ude05",joy:"\ud83d\ude02",rofl:"\ud83e\udd23",relaxed:"\u263a\ufe0f",blush:"\ud83d\ude0a",innocent:"\ud83d\ude07",slightly_smiling_face:"\ud83d\ude42",upside_down_face:"\ud83d\ude43",wink:"\ud83d\ude09",relieved:"\ud83d\ude0c",heart_eyes:"\ud83d\ude0d",kissing_heart:"\ud83d\ude18",kissing:"\ud83d\ude17",kissing_smiling_eyes:"\ud83d\ude19",kissing_closed_eyes:"\ud83d\ude1a",yum:"\ud83d\ude0b",stuck_out_tongue_winking_eye:"\ud83d\ude1c",stuck_out_tongue_closed_eyes:"\ud83d\ude1d",stuck_out_tongue:"\ud83d\ude1b",money_mouth_face:"\ud83e\udd11",hugs:"\ud83e\udd17",nerd_face:"\ud83e\udd13",sunglasses:"\ud83d\ude0e",clown_face:"\ud83e\udd21",cowboy_hat_face:"\ud83e\udd20",smirk:"\ud83d\ude0f",unamused:"\ud83d\ude12",disappointed:"\ud83d\ude1e",pensive:"\ud83d\ude14",worried:"\ud83d\ude1f",confused:"\ud83d\ude15",slightly_frowning_face:"\ud83d\ude41",frowning_face:"\u2639\ufe0f",persevere:"\ud83d\ude23",confounded:"\ud83d\ude16",tired_face:"\ud83d\ude2b",weary:"\ud83d\ude29",triumph:"\ud83d\ude24",angry:"\ud83d\ude20",rage:"\ud83d\ude21",pout:"\ud83d\ude21",no_mouth:"\ud83d\ude36",neutral_face:"\ud83d\ude10",expressionless:"\ud83d\ude11",hushed:"\ud83d\ude2f",frowning:"\ud83d\ude26",anguished:"\ud83d\ude27",open_mouth:"\ud83d\ude2e",astonished:"\ud83d\ude32",dizzy_face:"\ud83d\ude35",flushed:"\ud83d\ude33",scream:"\ud83d\ude31",fearful:"\ud83d\ude28",cold_sweat:"\ud83d\ude30",cry:"\ud83d\ude22",disappointed_relieved:"\ud83d\ude25",drooling_face:"\ud83e\udd24",sob:"\ud83d\ude2d",sweat:"\ud83d\ude13",sleepy:"\ud83d\ude2a",sleeping:"\ud83d\ude34",roll_eyes:"\ud83d\ude44",thinking:"\ud83e\udd14",lying_face:"\ud83e\udd25",grimacing:"\ud83d\ude2c",zipper_mouth_face:"\ud83e\udd10",nauseated_face:"\ud83e\udd22",sneezing_face:"\ud83e\udd27",mask:"\ud83d\ude37",face_with_thermometer:"\ud83e\udd12",face_with_head_bandage:"\ud83e\udd15",smiling_imp:"\ud83d\ude08",imp:"\ud83d\udc7f",japanese_ogre:"\ud83d\udc79",japanese_goblin:"\ud83d\udc7a",hankey:"\ud83d\udca9",poop:"\ud83d\udca9",shit:"\ud83d\udca9",ghost:"\ud83d\udc7b",skull:"\ud83d\udc80",skull_and_crossbones:"\u2620\ufe0f",alien:"\ud83d\udc7d",space_invader:"\ud83d\udc7e",robot:"\ud83e\udd16",jack_o_lantern:"\ud83c\udf83",smiley_cat:"\ud83d\ude3a",smile_cat:"\ud83d\ude38",joy_cat:"\ud83d\ude39",heart_eyes_cat:"\ud83d\ude3b",smirk_cat:"\ud83d\ude3c",kissing_cat:"\ud83d\ude3d",scream_cat:"\ud83d\ude40",crying_cat_face:"\ud83d\ude3f",pouting_cat:"\ud83d\ude3e",open_hands:"\ud83d\udc50",raised_hands:"\ud83d\ude4c",clap:"\ud83d\udc4f",pray:"\ud83d\ude4f",handshake:"\ud83e\udd1d","+1":"\ud83d\udc4d",thumbsup:"\ud83d\udc4d","-1":"\ud83d\udc4e",thumbsdown:"\ud83d\udc4e",fist_oncoming:"\ud83d\udc4a",facepunch:"\ud83d\udc4a",punch:"\ud83d\udc4a",fist_raised:"\u270a",fist:"\u270a",fist_left:"\ud83e\udd1b",fist_right:"\ud83e\udd1c",crossed_fingers:"\ud83e\udd1e",v:"\u270c\ufe0f",metal:"\ud83e\udd18",ok_hand:"\ud83d\udc4c",point_left:"\ud83d\udc48",point_right:"\ud83d\udc49",point_up_2:"\ud83d\udc46",point_down:"\ud83d\udc47",point_up:"\u261d\ufe0f",hand:"\u270b",raised_hand:"\u270b",raised_back_of_hand:"\ud83e\udd1a",raised_hand_with_fingers_splayed:"\ud83d\udd90",vulcan_salute:"\ud83d\udd96",wave:"\ud83d\udc4b",call_me_hand:"\ud83e\udd19",muscle:"\ud83d\udcaa",middle_finger:"\ud83d\udd95",fu:"\ud83d\udd95",writing_hand:"\u270d\ufe0f",selfie:"\ud83e\udd33",nail_care:"\ud83d\udc85",ring:"\ud83d\udc8d",lipstick:"\ud83d\udc84",kiss:"\ud83d\udc8b",lips:"\ud83d\udc44",tongue:"\ud83d\udc45",ear:"\ud83d\udc42",nose:"\ud83d\udc43",footprints:"\ud83d\udc63",eye:"\ud83d\udc41",eyes:"\ud83d\udc40",speaking_head:"\ud83d\udde3",bust_in_silhouette:"\ud83d\udc64",busts_in_silhouette:"\ud83d\udc65",baby:"\ud83d\udc76",boy:"\ud83d\udc66",girl:"\ud83d\udc67",man:"\ud83d\udc68",woman:"\ud83d\udc69",blonde_woman:"\ud83d\udc71\u200d\u2640",blonde_man:"\ud83d\udc71",person_with_blond_hair:"\ud83d\udc71",older_man:"\ud83d\udc74",older_woman:"\ud83d\udc75",man_with_gua_pi_mao:"\ud83d\udc72",woman_with_turban:"\ud83d\udc73\u200d\u2640",man_with_turban:"\ud83d\udc73",policewoman:"\ud83d\udc6e\u200d\u2640",policeman:"\ud83d\udc6e",cop:"\ud83d\udc6e",construction_worker_woman:"\ud83d\udc77\u200d\u2640",construction_worker_man:"\ud83d\udc77",construction_worker:"\ud83d\udc77",guardswoman:"\ud83d\udc82\u200d\u2640",guardsman:"\ud83d\udc82",female_detective:"\ud83d\udd75\ufe0f\u200d\u2640\ufe0f",male_detective:"\ud83d\udd75",detective:"\ud83d\udd75",woman_health_worker:"\ud83d\udc69\u200d\u2695",man_health_worker:"\ud83d\udc68\u200d\u2695",woman_farmer:"\ud83d\udc69\u200d\ud83c\udf3e",man_farmer:"\ud83d\udc68\u200d\ud83c\udf3e",woman_cook:"\ud83d\udc69\u200d\ud83c\udf73",man_cook:"\ud83d\udc68\u200d\ud83c\udf73",woman_student:"\ud83d\udc69\u200d\ud83c\udf93",man_student:"\ud83d\udc68\u200d\ud83c\udf93",woman_singer:"\ud83d\udc69\u200d\ud83c\udfa4",man_singer:"\ud83d\udc68\u200d\ud83c\udfa4",woman_teacher:"\ud83d\udc69\u200d\ud83c\udfeb",man_teacher:"\ud83d\udc68\u200d\ud83c\udfeb",woman_factory_worker:"\ud83d\udc69\u200d\ud83c\udfed",man_factory_worker:"\ud83d\udc68\u200d\ud83c\udfed",woman_technologist:"\ud83d\udc69\u200d\ud83d\udcbb",man_technologist:"\ud83d\udc68\u200d\ud83d\udcbb",woman_office_worker:"\ud83d\udc69\u200d\ud83d\udcbc",man_office_worker:"\ud83d\udc68\u200d\ud83d\udcbc",woman_mechanic:"\ud83d\udc69\u200d\ud83d\udd27",man_mechanic:"\ud83d\udc68\u200d\ud83d\udd27",woman_scientist:"\ud83d\udc69\u200d\ud83d\udd2c",man_scientist:"\ud83d\udc68\u200d\ud83d\udd2c",woman_artist:"\ud83d\udc69\u200d\ud83c\udfa8",man_artist:"\ud83d\udc68\u200d\ud83c\udfa8",woman_firefighter:"\ud83d\udc69\u200d\ud83d\ude92",man_firefighter:"\ud83d\udc68\u200d\ud83d\ude92",woman_pilot:"\ud83d\udc69\u200d\u2708",man_pilot:"\ud83d\udc68\u200d\u2708",woman_astronaut:"\ud83d\udc69\u200d\ud83d\ude80",man_astronaut:"\ud83d\udc68\u200d\ud83d\ude80",woman_judge:"\ud83d\udc69\u200d\u2696",man_judge:"\ud83d\udc68\u200d\u2696",mrs_claus:"\ud83e\udd36",santa:"\ud83c\udf85",princess:"\ud83d\udc78",prince:"\ud83e\udd34",bride_with_veil:"\ud83d\udc70",man_in_tuxedo:"\ud83e\udd35",angel:"\ud83d\udc7c",pregnant_woman:"\ud83e\udd30",bowing_woman:"\ud83d\ude47\u200d\u2640",bowing_man:"\ud83d\ude47",bow:"\ud83d\ude47",tipping_hand_woman:"\ud83d\udc81",information_desk_person:"\ud83d\udc81",sassy_woman:"\ud83d\udc81",tipping_hand_man:"\ud83d\udc81\u200d\u2642",sassy_man:"\ud83d\udc81\u200d\u2642",no_good_woman:"\ud83d\ude45",no_good:"\ud83d\ude45",ng_woman:"\ud83d\ude45",no_good_man:"\ud83d\ude45\u200d\u2642",ng_man:"\ud83d\ude45\u200d\u2642",ok_woman:"\ud83d\ude46",ok_man:"\ud83d\ude46\u200d\u2642",raising_hand_woman:"\ud83d\ude4b",raising_hand:"\ud83d\ude4b",raising_hand_man:"\ud83d\ude4b\u200d\u2642",woman_facepalming:"\ud83e\udd26\u200d\u2640",man_facepalming:"\ud83e\udd26\u200d\u2642",woman_shrugging:"\ud83e\udd37\u200d\u2640",man_shrugging:"\ud83e\udd37\u200d\u2642",pouting_woman:"\ud83d\ude4e",person_with_pouting_face:"\ud83d\ude4e",pouting_man:"\ud83d\ude4e\u200d\u2642",frowning_woman:"\ud83d\ude4d",person_frowning:"\ud83d\ude4d",frowning_man:"\ud83d\ude4d\u200d\u2642",haircut_woman:"\ud83d\udc87",haircut:"\ud83d\udc87",haircut_man:"\ud83d\udc87\u200d\u2642",massage_woman:"\ud83d\udc86",massage:"\ud83d\udc86",massage_man:"\ud83d\udc86\u200d\u2642",business_suit_levitating:"\ud83d\udd74",dancer:"\ud83d\udc83",man_dancing:"\ud83d\udd7a",dancing_women:"\ud83d\udc6f",dancers:"\ud83d\udc6f",dancing_men:"\ud83d\udc6f\u200d\u2642",walking_woman:"\ud83d\udeb6\u200d\u2640",walking_man:"\ud83d\udeb6",walking:"\ud83d\udeb6",running_woman:"\ud83c\udfc3\u200d\u2640",running_man:"\ud83c\udfc3",runner:"\ud83c\udfc3",running:"\ud83c\udfc3",couple:"\ud83d\udc6b",two_women_holding_hands:"\ud83d\udc6d",two_men_holding_hands:"\ud83d\udc6c",couple_with_heart_woman_man:"\ud83d\udc91",couple_with_heart:"\ud83d\udc91",couple_with_heart_woman_woman:"\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc69",couple_with_heart_man_man:"\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68",couplekiss_man_woman:"\ud83d\udc8f",couplekiss_woman_woman:"\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69",couplekiss_man_man:"\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68",family_man_woman_boy:"\ud83d\udc6a",family:"\ud83d\udc6a",family_man_woman_girl:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67",family_man_woman_girl_boy:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",family_man_woman_boy_boy:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",family_man_woman_girl_girl:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",family_woman_woman_boy:"\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66",family_woman_woman_girl:"\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67",family_woman_woman_girl_boy:"\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",family_woman_woman_boy_boy:"\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",family_woman_woman_girl_girl:"\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",family_man_man_boy:"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66",family_man_man_girl:"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67",family_man_man_girl_boy:"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66",family_man_man_boy_boy:"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66",family_man_man_girl_girl:"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67",family_woman_boy:"\ud83d\udc69\u200d\ud83d\udc66",family_woman_girl:"\ud83d\udc69\u200d\ud83d\udc67",family_woman_girl_boy:"\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",family_woman_boy_boy:"\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",family_woman_girl_girl:"\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",family_man_boy:"\ud83d\udc68\u200d\ud83d\udc66",family_man_girl:"\ud83d\udc68\u200d\ud83d\udc67",family_man_girl_boy:"\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66",family_man_boy_boy:"\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66",family_man_girl_girl:"\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67",womans_clothes:"\ud83d\udc5a",shirt:"\ud83d\udc55",tshirt:"\ud83d\udc55",jeans:"\ud83d\udc56",necktie:"\ud83d\udc54",dress:"\ud83d\udc57",bikini:"\ud83d\udc59",kimono:"\ud83d\udc58",high_heel:"\ud83d\udc60",sandal:"\ud83d\udc61",boot:"\ud83d\udc62",mans_shoe:"\ud83d\udc5e",shoe:"\ud83d\udc5e",athletic_shoe:"\ud83d\udc5f",womans_hat:"\ud83d\udc52",tophat:"\ud83c\udfa9",mortar_board:"\ud83c\udf93",crown:"\ud83d\udc51",rescue_worker_helmet:"\u26d1",school_satchel:"\ud83c\udf92",pouch:"\ud83d\udc5d",purse:"\ud83d\udc5b",handbag:"\ud83d\udc5c",briefcase:"\ud83d\udcbc",eyeglasses:"\ud83d\udc53",dark_sunglasses:"\ud83d\udd76",closed_umbrella:"\ud83c\udf02",open_umbrella:"\u2602\ufe0f",dog:"\ud83d\udc36",cat:"\ud83d\udc31",mouse:"\ud83d\udc2d",hamster:"\ud83d\udc39",rabbit:"\ud83d\udc30",fox_face:"\ud83e\udd8a",bear:"\ud83d\udc3b",panda_face:"\ud83d\udc3c",koala:"\ud83d\udc28",tiger:"\ud83d\udc2f",lion:"\ud83e\udd81",cow:"\ud83d\udc2e",pig:"\ud83d\udc37",pig_nose:"\ud83d\udc3d",frog:"\ud83d\udc38",monkey_face:"\ud83d\udc35",see_no_evil:"\ud83d\ude48",hear_no_evil:"\ud83d\ude49",speak_no_evil:"\ud83d\ude4a",monkey:"\ud83d\udc12",chicken:"\ud83d\udc14",penguin:"\ud83d\udc27",bird:"\ud83d\udc26",baby_chick:"\ud83d\udc24",hatching_chick:"\ud83d\udc23",hatched_chick:"\ud83d\udc25",duck:"\ud83e\udd86",eagle:"\ud83e\udd85",owl:"\ud83e\udd89",bat:"\ud83e\udd87",wolf:"\ud83d\udc3a",boar:"\ud83d\udc17",horse:"\ud83d\udc34",unicorn:"\ud83e\udd84",bee:"\ud83d\udc1d",honeybee:"\ud83d\udc1d",bug:"\ud83d\udc1b",butterfly:"\ud83e\udd8b",snail:"\ud83d\udc0c",shell:"\ud83d\udc1a",beetle:"\ud83d\udc1e",ant:"\ud83d\udc1c",spider:"\ud83d\udd77",spider_web:"\ud83d\udd78",turtle:"\ud83d\udc22",snake:"\ud83d\udc0d",lizard:"\ud83e\udd8e",scorpion:"\ud83e\udd82",crab:"\ud83e\udd80",squid:"\ud83e\udd91",octopus:"\ud83d\udc19",shrimp:"\ud83e\udd90",tropical_fish:"\ud83d\udc20",fish:"\ud83d\udc1f",blowfish:"\ud83d\udc21",dolphin:"\ud83d\udc2c",flipper:"\ud83d\udc2c",shark:"\ud83e\udd88",whale:"\ud83d\udc33",whale2:"\ud83d\udc0b",crocodile:"\ud83d\udc0a",leopard:"\ud83d\udc06",tiger2:"\ud83d\udc05",water_buffalo:"\ud83d\udc03",ox:"\ud83d\udc02",cow2:"\ud83d\udc04",deer:"\ud83e\udd8c",dromedary_camel:"\ud83d\udc2a",camel:"\ud83d\udc2b",elephant:"\ud83d\udc18",rhinoceros:"\ud83e\udd8f",gorilla:"\ud83e\udd8d",racehorse:"\ud83d\udc0e",pig2:"\ud83d\udc16",goat:"\ud83d\udc10",ram:"\ud83d\udc0f",sheep:"\ud83d\udc11",dog2:"\ud83d\udc15",poodle:"\ud83d\udc29",cat2:"\ud83d\udc08",rooster:"\ud83d\udc13",turkey:"\ud83e\udd83",dove:"\ud83d\udd4a",rabbit2:"\ud83d\udc07",mouse2:"\ud83d\udc01",rat:"\ud83d\udc00",chipmunk:"\ud83d\udc3f",feet:"\ud83d\udc3e",paw_prints:"\ud83d\udc3e",dragon:"\ud83d\udc09",dragon_face:"\ud83d\udc32",cactus:"\ud83c\udf35",christmas_tree:"\ud83c\udf84",evergreen_tree:"\ud83c\udf32",deciduous_tree:"\ud83c\udf33",palm_tree:"\ud83c\udf34",seedling:"\ud83c\udf31",herb:"\ud83c\udf3f",shamrock:"\u2618\ufe0f",four_leaf_clover:"\ud83c\udf40",bamboo:"\ud83c\udf8d",tanabata_tree:"\ud83c\udf8b",leaves:"\ud83c\udf43",fallen_leaf:"\ud83c\udf42",maple_leaf:"\ud83c\udf41",mushroom:"\ud83c\udf44",ear_of_rice:"\ud83c\udf3e",bouquet:"\ud83d\udc90",tulip:"\ud83c\udf37",rose:"\ud83c\udf39",wilted_flower:"\ud83e\udd40",sunflower:"\ud83c\udf3b",blossom:"\ud83c\udf3c",cherry_blossom:"\ud83c\udf38",hibiscus:"\ud83c\udf3a",earth_americas:"\ud83c\udf0e",earth_africa:"\ud83c\udf0d",earth_asia:"\ud83c\udf0f",full_moon:"\ud83c\udf15",waning_gibbous_moon:"\ud83c\udf16",last_quarter_moon:"\ud83c\udf17",waning_crescent_moon:"\ud83c\udf18",new_moon:"\ud83c\udf11",waxing_crescent_moon:"\ud83c\udf12",first_quarter_moon:"\ud83c\udf13",moon:"\ud83c\udf14",waxing_gibbous_moon:"\ud83c\udf14",new_moon_with_face:"\ud83c\udf1a",full_moon_with_face:"\ud83c\udf1d",sun_with_face:"\ud83c\udf1e",first_quarter_moon_with_face:"\ud83c\udf1b",last_quarter_moon_with_face:"\ud83c\udf1c",crescent_moon:"\ud83c\udf19",dizzy:"\ud83d\udcab",star:"\u2b50\ufe0f",star2:"\ud83c\udf1f",sparkles:"\u2728",zap:"\u26a1\ufe0f",fire:"\ud83d\udd25",boom:"\ud83d\udca5",collision:"\ud83d\udca5",comet:"\u2604",sunny:"\u2600\ufe0f",sun_behind_small_cloud:"\ud83c\udf24",partly_sunny:"\u26c5\ufe0f",sun_behind_large_cloud:"\ud83c\udf25",sun_behind_rain_cloud:"\ud83c\udf26",rainbow:"\ud83c\udf08",cloud:"\u2601\ufe0f",cloud_with_rain:"\ud83c\udf27",cloud_with_lightning_and_rain:"\u26c8",cloud_with_lightning:"\ud83c\udf29",cloud_with_snow:"\ud83c\udf28",snowman_with_snow:"\u2603\ufe0f",snowman:"\u26c4\ufe0f",snowflake:"\u2744\ufe0f",wind_face:"\ud83c\udf2c",dash:"\ud83d\udca8",tornado:"\ud83c\udf2a",fog:"\ud83c\udf2b",ocean:"\ud83c\udf0a",droplet:"\ud83d\udca7",sweat_drops:"\ud83d\udca6",umbrella:"\u2614\ufe0f",green_apple:"\ud83c\udf4f",apple:"\ud83c\udf4e",pear:"\ud83c\udf50",tangerine:"\ud83c\udf4a",orange:"\ud83c\udf4a",mandarin:"\ud83c\udf4a",lemon:"\ud83c\udf4b",banana:"\ud83c\udf4c",watermelon:"\ud83c\udf49",grapes:"\ud83c\udf47",strawberry:"\ud83c\udf53",melon:"\ud83c\udf48",cherries:"\ud83c\udf52",peach:"\ud83c\udf51",pineapple:"\ud83c\udf4d",kiwi_fruit:"\ud83e\udd5d",avocado:"\ud83e\udd51",tomato:"\ud83c\udf45",eggplant:"\ud83c\udf46",cucumber:"\ud83e\udd52",carrot:"\ud83e\udd55",corn:"\ud83c\udf3d",hot_pepper:"\ud83c\udf36",potato:"\ud83e\udd54",sweet_potato:"\ud83c\udf60",chestnut:"\ud83c\udf30",peanuts:"\ud83e\udd5c",honey_pot:"\ud83c\udf6f",croissant:"\ud83e\udd50",bread:"\ud83c\udf5e",baguette_bread:"\ud83e\udd56",cheese:"\ud83e\uddc0",egg:"\ud83e\udd5a",fried_egg:"\ud83c\udf73",bacon:"\ud83e\udd53",pancakes:"\ud83e\udd5e",fried_shrimp:"\ud83c\udf64",poultry_leg:"\ud83c\udf57",meat_on_bone:"\ud83c\udf56",pizza:"\ud83c\udf55",hotdog:"\ud83c\udf2d",hamburger:"\ud83c\udf54",fries:"\ud83c\udf5f",stuffed_flatbread:"\ud83e\udd59",taco:"\ud83c\udf2e",burrito:"\ud83c\udf2f",green_salad:"\ud83e\udd57",shallow_pan_of_food:"\ud83e\udd58",spaghetti:"\ud83c\udf5d",ramen:"\ud83c\udf5c",stew:"\ud83c\udf72",fish_cake:"\ud83c\udf65",sushi:"\ud83c\udf63",bento:"\ud83c\udf71",curry:"\ud83c\udf5b",rice:"\ud83c\udf5a",rice_ball:"\ud83c\udf59",rice_cracker:"\ud83c\udf58",oden:"\ud83c\udf62",dango:"\ud83c\udf61",shaved_ice:"\ud83c\udf67",ice_cream:"\ud83c\udf68",icecream:"\ud83c\udf66",cake:"\ud83c\udf70",birthday:"\ud83c\udf82",custard:"\ud83c\udf6e",lollipop:"\ud83c\udf6d",candy:"\ud83c\udf6c",chocolate_bar:"\ud83c\udf6b",popcorn:"\ud83c\udf7f",doughnut:"\ud83c\udf69",cookie:"\ud83c\udf6a",milk_glass:"\ud83e\udd5b",baby_bottle:"\ud83c\udf7c",coffee:"\u2615\ufe0f",tea:"\ud83c\udf75",sake:"\ud83c\udf76",beer:"\ud83c\udf7a",beers:"\ud83c\udf7b",clinking_glasses:"\ud83e\udd42",wine_glass:"\ud83c\udf77",tumbler_glass:"\ud83e\udd43",cocktail:"\ud83c\udf78",tropical_drink:"\ud83c\udf79",champagne:"\ud83c\udf7e",spoon:"\ud83e\udd44",fork_and_knife:"\ud83c\udf74",plate_with_cutlery:"\ud83c\udf7d",soccer:"\u26bd\ufe0f",basketball:"\ud83c\udfc0",football:"\ud83c\udfc8",baseball:"\u26be\ufe0f",tennis:"\ud83c\udfbe",volleyball:"\ud83c\udfd0",rugby_football:"\ud83c\udfc9","8ball":"\ud83c\udfb1",ping_pong:"\ud83c\udfd3",badminton:"\ud83c\udff8",goal_net:"\ud83e\udd45",ice_hockey:"\ud83c\udfd2",field_hockey:"\ud83c\udfd1",cricket:"\ud83c\udfcf",golf:"\u26f3\ufe0f",bow_and_arrow:"\ud83c\udff9",fishing_pole_and_fish:"\ud83c\udfa3",boxing_glove:"\ud83e\udd4a",martial_arts_uniform:"\ud83e\udd4b",ice_skate:"\u26f8",ski:"\ud83c\udfbf",skier:"\u26f7",snowboarder:"\ud83c\udfc2",weight_lifting_woman:"\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f",weight_lifting_man:"\ud83c\udfcb",person_fencing:"\ud83e\udd3a",women_wrestling:"\ud83e\udd3c\u200d\u2640",men_wrestling:"\ud83e\udd3c\u200d\u2642",woman_cartwheeling:"\ud83e\udd38\u200d\u2640",man_cartwheeling:"\ud83e\udd38\u200d\u2642",basketball_woman:"\u26f9\ufe0f\u200d\u2640\ufe0f",basketball_man:"\u26f9",woman_playing_handball:"\ud83e\udd3e\u200d\u2640",man_playing_handball:"\ud83e\udd3e\u200d\u2642",golfing_woman:"\ud83c\udfcc\ufe0f\u200d\u2640\ufe0f",golfing_man:"\ud83c\udfcc",surfing_woman:"\ud83c\udfc4\u200d\u2640",surfing_man:"\ud83c\udfc4",surfer:"\ud83c\udfc4",swimming_woman:"\ud83c\udfca\u200d\u2640",swimming_man:"\ud83c\udfca",swimmer:"\ud83c\udfca",woman_playing_water_polo:"\ud83e\udd3d\u200d\u2640",man_playing_water_polo:"\ud83e\udd3d\u200d\u2642",rowing_woman:"\ud83d\udea3\u200d\u2640",rowing_man:"\ud83d\udea3",rowboat:"\ud83d\udea3",horse_racing:"\ud83c\udfc7",biking_woman:"\ud83d\udeb4\u200d\u2640",biking_man:"\ud83d\udeb4",bicyclist:"\ud83d\udeb4",mountain_biking_woman:"\ud83d\udeb5\u200d\u2640",mountain_biking_man:"\ud83d\udeb5",mountain_bicyclist:"\ud83d\udeb5",running_shirt_with_sash:"\ud83c\udfbd",medal_sports:"\ud83c\udfc5",medal_military:"\ud83c\udf96","1st_place_medal":"\ud83e\udd47","2nd_place_medal":"\ud83e\udd48","3rd_place_medal":"\ud83e\udd49",trophy:"\ud83c\udfc6",rosette:"\ud83c\udff5",reminder_ribbon:"\ud83c\udf97",ticket:"\ud83c\udfab",tickets:"\ud83c\udf9f",circus_tent:"\ud83c\udfaa",woman_juggling:"\ud83e\udd39\u200d\u2640",man_juggling:"\ud83e\udd39\u200d\u2642",performing_arts:"\ud83c\udfad",art:"\ud83c\udfa8",clapper:"\ud83c\udfac",microphone:"\ud83c\udfa4",headphones:"\ud83c\udfa7",musical_score:"\ud83c\udfbc",musical_keyboard:"\ud83c\udfb9",drum:"\ud83e\udd41",saxophone:"\ud83c\udfb7",trumpet:"\ud83c\udfba",guitar:"\ud83c\udfb8",violin:"\ud83c\udfbb",game_die:"\ud83c\udfb2",dart:"\ud83c\udfaf",bowling:"\ud83c\udfb3",video_game:"\ud83c\udfae",slot_machine:"\ud83c\udfb0",car:"\ud83d\ude97",red_car:"\ud83d\ude97",taxi:"\ud83d\ude95",blue_car:"\ud83d\ude99",bus:"\ud83d\ude8c",trolleybus:"\ud83d\ude8e",racing_car:"\ud83c\udfce",police_car:"\ud83d\ude93",ambulance:"\ud83d\ude91",fire_engine:"\ud83d\ude92",minibus:"\ud83d\ude90",truck:"\ud83d\ude9a",articulated_lorry:"\ud83d\ude9b",tractor:"\ud83d\ude9c",kick_scooter:"\ud83d\udef4",bike:"\ud83d\udeb2",motor_scooter:"\ud83d\udef5",motorcycle:"\ud83c\udfcd",rotating_light:"\ud83d\udea8",oncoming_police_car:"\ud83d\ude94",oncoming_bus:"\ud83d\ude8d",oncoming_automobile:"\ud83d\ude98",oncoming_taxi:"\ud83d\ude96",aerial_tramway:"\ud83d\udea1",mountain_cableway:"\ud83d\udea0",suspension_railway:"\ud83d\ude9f",railway_car:"\ud83d\ude83",train:"\ud83d\ude8b",mountain_railway:"\ud83d\ude9e",monorail:"\ud83d\ude9d",bullettrain_side:"\ud83d\ude84",bullettrain_front:"\ud83d\ude85",light_rail:"\ud83d\ude88",steam_locomotive:"\ud83d\ude82",train2:"\ud83d\ude86",metro:"\ud83d\ude87",tram:"\ud83d\ude8a",station:"\ud83d\ude89",helicopter:"\ud83d\ude81",small_airplane:"\ud83d\udee9",airplane:"\u2708\ufe0f",flight_departure:"\ud83d\udeeb",flight_arrival:"\ud83d\udeec",rocket:"\ud83d\ude80",artificial_satellite:"\ud83d\udef0",seat:"\ud83d\udcba",canoe:"\ud83d\udef6",boat:"\u26f5\ufe0f",sailboat:"\u26f5\ufe0f",motor_boat:"\ud83d\udee5",speedboat:"\ud83d\udea4",passenger_ship:"\ud83d\udef3",ferry:"\u26f4",ship:"\ud83d\udea2",anchor:"\u2693\ufe0f",construction:"\ud83d\udea7",fuelpump:"\u26fd\ufe0f",busstop:"\ud83d\ude8f",vertical_traffic_light:"\ud83d\udea6",traffic_light:"\ud83d\udea5",world_map:"\ud83d\uddfa",moyai:"\ud83d\uddff",statue_of_liberty:"\ud83d\uddfd",fountain:"\u26f2\ufe0f",tokyo_tower:"\ud83d\uddfc",european_castle:"\ud83c\udff0",japanese_castle:"\ud83c\udfef",stadium:"\ud83c\udfdf",ferris_wheel:"\ud83c\udfa1",roller_coaster:"\ud83c\udfa2",carousel_horse:"\ud83c\udfa0",parasol_on_ground:"\u26f1",beach_umbrella:"\ud83c\udfd6",desert_island:"\ud83c\udfdd",mountain:"\u26f0",mountain_snow:"\ud83c\udfd4",mount_fuji:"\ud83d\uddfb",volcano:"\ud83c\udf0b",desert:"\ud83c\udfdc",camping:"\ud83c\udfd5",tent:"\u26fa\ufe0f",railway_track:"\ud83d\udee4",motorway:"\ud83d\udee3",building_construction:"\ud83c\udfd7",factory:"\ud83c\udfed",house:"\ud83c\udfe0",house_with_garden:"\ud83c\udfe1",houses:"\ud83c\udfd8",derelict_house:"\ud83c\udfda",office:"\ud83c\udfe2",department_store:"\ud83c\udfec",post_office:"\ud83c\udfe3",european_post_office:"\ud83c\udfe4",hospital:"\ud83c\udfe5",bank:"\ud83c\udfe6",hotel:"\ud83c\udfe8",convenience_store:"\ud83c\udfea",school:"\ud83c\udfeb",love_hotel:"\ud83c\udfe9",wedding:"\ud83d\udc92",classical_building:"\ud83c\udfdb",church:"\u26ea\ufe0f",mosque:"\ud83d\udd4c",synagogue:"\ud83d\udd4d",kaaba:"\ud83d\udd4b",shinto_shrine:"\u26e9",japan:"\ud83d\uddfe",rice_scene:"\ud83c\udf91",national_park:"\ud83c\udfde",sunrise:"\ud83c\udf05",sunrise_over_mountains:"\ud83c\udf04",stars:"\ud83c\udf20",sparkler:"\ud83c\udf87",fireworks:"\ud83c\udf86",city_sunrise:"\ud83c\udf07",city_sunset:"\ud83c\udf06",cityscape:"\ud83c\udfd9",night_with_stars:"\ud83c\udf03",milky_way:"\ud83c\udf0c",bridge_at_night:"\ud83c\udf09",foggy:"\ud83c\udf01",watch:"\u231a\ufe0f",iphone:"\ud83d\udcf1",calling:"\ud83d\udcf2",computer:"\ud83d\udcbb",keyboard:"\u2328\ufe0f",desktop_computer:"\ud83d\udda5",printer:"\ud83d\udda8",computer_mouse:"\ud83d\uddb1",trackball:"\ud83d\uddb2",joystick:"\ud83d\udd79",clamp:"\ud83d\udddc",minidisc:"\ud83d\udcbd",floppy_disk:"\ud83d\udcbe",cd:"\ud83d\udcbf",dvd:"\ud83d\udcc0",vhs:"\ud83d\udcfc",camera:"\ud83d\udcf7",camera_flash:"\ud83d\udcf8",video_camera:"\ud83d\udcf9",movie_camera:"\ud83c\udfa5",film_projector:"\ud83d\udcfd",film_strip:"\ud83c\udf9e",telephone_receiver:"\ud83d\udcde",phone:"\u260e\ufe0f",telephone:"\u260e\ufe0f",pager:"\ud83d\udcdf",fax:"\ud83d\udce0",tv:"\ud83d\udcfa",radio:"\ud83d\udcfb",studio_microphone:"\ud83c\udf99",level_slider:"\ud83c\udf9a",control_knobs:"\ud83c\udf9b",stopwatch:"\u23f1",timer_clock:"\u23f2",alarm_clock:"\u23f0",mantelpiece_clock:"\ud83d\udd70",hourglass:"\u231b\ufe0f",hourglass_flowing_sand:"\u23f3",satellite:"\ud83d\udce1",battery:"\ud83d\udd0b",electric_plug:"\ud83d\udd0c",bulb:"\ud83d\udca1",flashlight:"\ud83d\udd26",candle:"\ud83d\udd6f",wastebasket:"\ud83d\uddd1",oil_drum:"\ud83d\udee2",money_with_wings:"\ud83d\udcb8",dollar:"\ud83d\udcb5",yen:"\ud83d\udcb4",euro:"\ud83d\udcb6",pound:"\ud83d\udcb7",moneybag:"\ud83d\udcb0",credit_card:"\ud83d\udcb3",gem:"\ud83d\udc8e",balance_scale:"\u2696\ufe0f",wrench:"\ud83d\udd27",hammer:"\ud83d\udd28",hammer_and_pick:"\u2692",hammer_and_wrench:"\ud83d\udee0",pick:"\u26cf",nut_and_bolt:"\ud83d\udd29",gear:"\u2699\ufe0f",chains:"\u26d3",gun:"\ud83d\udd2b",bomb:"\ud83d\udca3",hocho:"\ud83d\udd2a",knife:"\ud83d\udd2a",dagger:"\ud83d\udde1",crossed_swords:"\u2694\ufe0f",shield:"\ud83d\udee1",smoking:"\ud83d\udeac",coffin:"\u26b0\ufe0f",funeral_urn:"\u26b1\ufe0f",amphora:"\ud83c\udffa",crystal_ball:"\ud83d\udd2e",prayer_beads:"\ud83d\udcff",barber:"\ud83d\udc88",alembic:"\u2697\ufe0f",telescope:"\ud83d\udd2d",microscope:"\ud83d\udd2c",hole:"\ud83d\udd73",pill:"\ud83d\udc8a",syringe:"\ud83d\udc89",thermometer:"\ud83c\udf21",toilet:"\ud83d\udebd",potable_water:"\ud83d\udeb0",shower:"\ud83d\udebf",bathtub:"\ud83d\udec1",bath:"\ud83d\udec0",bellhop_bell:"\ud83d\udece",key:"\ud83d\udd11",old_key:"\ud83d\udddd",door:"\ud83d\udeaa",couch_and_lamp:"\ud83d\udecb",bed:"\ud83d\udecf",sleeping_bed:"\ud83d\udecc",framed_picture:"\ud83d\uddbc",shopping:"\ud83d\udecd",shopping_cart:"\ud83d\uded2",gift:"\ud83c\udf81",balloon:"\ud83c\udf88",flags:"\ud83c\udf8f",ribbon:"\ud83c\udf80",confetti_ball:"\ud83c\udf8a",tada:"\ud83c\udf89",dolls:"\ud83c\udf8e",izakaya_lantern:"\ud83c\udfee",lantern:"\ud83c\udfee",wind_chime:"\ud83c\udf90",email:"\u2709\ufe0f",envelope:"\u2709\ufe0f",envelope_with_arrow:"\ud83d\udce9",incoming_envelope:"\ud83d\udce8","e-mail":"\ud83d\udce7",love_letter:"\ud83d\udc8c",inbox_tray:"\ud83d\udce5",outbox_tray:"\ud83d\udce4",package:"\ud83d\udce6",label:"\ud83c\udff7",mailbox_closed:"\ud83d\udcea",mailbox:"\ud83d\udceb",mailbox_with_mail:"\ud83d\udcec",mailbox_with_no_mail:"\ud83d\udced",postbox:"\ud83d\udcee",postal_horn:"\ud83d\udcef",scroll:"\ud83d\udcdc",page_with_curl:"\ud83d\udcc3",page_facing_up:"\ud83d\udcc4",bookmark_tabs:"\ud83d\udcd1",bar_chart:"\ud83d\udcca",chart_with_upwards_trend:"\ud83d\udcc8",chart_with_downwards_trend:"\ud83d\udcc9",spiral_notepad:"\ud83d\uddd2",spiral_calendar:"\ud83d\uddd3",calendar:"\ud83d\udcc6",date:"\ud83d\udcc5",card_index:"\ud83d\udcc7",card_file_box:"\ud83d\uddc3",ballot_box:"\ud83d\uddf3",file_cabinet:"\ud83d\uddc4",clipboard:"\ud83d\udccb",file_folder:"\ud83d\udcc1",open_file_folder:"\ud83d\udcc2",card_index_dividers:"\ud83d\uddc2",newspaper_roll:"\ud83d\uddde",newspaper:"\ud83d\udcf0",notebook:"\ud83d\udcd3",notebook_with_decorative_cover:"\ud83d\udcd4",ledger:"\ud83d\udcd2",closed_book:"\ud83d\udcd5",green_book:"\ud83d\udcd7",blue_book:"\ud83d\udcd8",orange_book:"\ud83d\udcd9",books:"\ud83d\udcda",book:"\ud83d\udcd6",open_book:"\ud83d\udcd6",bookmark:"\ud83d\udd16",link:"\ud83d\udd17",paperclip:"\ud83d\udcce",paperclips:"\ud83d\udd87",triangular_ruler:"\ud83d\udcd0",straight_ruler:"\ud83d\udccf",pushpin:"\ud83d\udccc",round_pushpin:"\ud83d\udccd",scissors:"\u2702\ufe0f",pen:"\ud83d\udd8a",fountain_pen:"\ud83d\udd8b",black_nib:"\u2712\ufe0f",paintbrush:"\ud83d\udd8c",crayon:"\ud83d\udd8d",memo:"\ud83d\udcdd",pencil:"\ud83d\udcdd",pencil2:"\u270f\ufe0f",mag:"\ud83d\udd0d",mag_right:"\ud83d\udd0e",lock_with_ink_pen:"\ud83d\udd0f",closed_lock_with_key:"\ud83d\udd10",lock:"\ud83d\udd12",unlock:"\ud83d\udd13",heart:"\u2764\ufe0f",yellow_heart:"\ud83d\udc9b",green_heart:"\ud83d\udc9a",blue_heart:"\ud83d\udc99",purple_heart:"\ud83d\udc9c",black_heart:"\ud83d\udda4",broken_heart:"\ud83d\udc94",heavy_heart_exclamation:"\u2763\ufe0f",two_hearts:"\ud83d\udc95",revolving_hearts:"\ud83d\udc9e",heartbeat:"\ud83d\udc93",heartpulse:"\ud83d\udc97",sparkling_heart:"\ud83d\udc96",cupid:"\ud83d\udc98",gift_heart:"\ud83d\udc9d",heart_decoration:"\ud83d\udc9f",peace_symbol:"\u262e\ufe0f",latin_cross:"\u271d\ufe0f",star_and_crescent:"\u262a\ufe0f",om:"\ud83d\udd49",wheel_of_dharma:"\u2638\ufe0f",star_of_david:"\u2721\ufe0f",six_pointed_star:"\ud83d\udd2f",menorah:"\ud83d\udd4e",yin_yang:"\u262f\ufe0f",orthodox_cross:"\u2626\ufe0f",place_of_worship:"\ud83d\uded0",ophiuchus:"\u26ce",aries:"\u2648\ufe0f",taurus:"\u2649\ufe0f",gemini:"\u264a\ufe0f",cancer:"\u264b\ufe0f",leo:"\u264c\ufe0f",virgo:"\u264d\ufe0f",libra:"\u264e\ufe0f",scorpius:"\u264f\ufe0f",sagittarius:"\u2650\ufe0f",capricorn:"\u2651\ufe0f",aquarius:"\u2652\ufe0f",pisces:"\u2653\ufe0f",id:"\ud83c\udd94",atom_symbol:"\u269b\ufe0f",accept:"\ud83c\ude51",radioactive:"\u2622\ufe0f",biohazard:"\u2623\ufe0f",mobile_phone_off:"\ud83d\udcf4",vibration_mode:"\ud83d\udcf3",eight_pointed_black_star:"\u2734\ufe0f",vs:"\ud83c\udd9a",white_flower:"\ud83d\udcae",ideograph_advantage:"\ud83c\ude50",secret:"\u3299\ufe0f",congratulations:"\u3297\ufe0f",u6e80:"\ud83c\ude35",a:"\ud83c\udd70\ufe0f",b:"\ud83c\udd71\ufe0f",ab:"\ud83c\udd8e",cl:"\ud83c\udd91",o2:"\ud83c\udd7e\ufe0f",sos:"\ud83c\udd98",x:"\u274c",o:"\u2b55\ufe0f",stop_sign:"\ud83d\uded1",no_entry:"\u26d4\ufe0f",name_badge:"\ud83d\udcdb",no_entry_sign:"\ud83d\udeab",anger:"\ud83d\udca2",hotsprings:"\u2668\ufe0f",no_pedestrians:"\ud83d\udeb7",do_not_litter:"\ud83d\udeaf",no_bicycles:"\ud83d\udeb3","non-potable_water":"\ud83d\udeb1",underage:"\ud83d\udd1e",no_mobile_phones:"\ud83d\udcf5",no_smoking:"\ud83d\udead",exclamation:"\u2757\ufe0f",heavy_exclamation_mark:"\u2757\ufe0f",grey_exclamation:"\u2755",question:"\u2753",grey_question:"\u2754",bangbang:"\u203c\ufe0f",interrobang:"\u2049\ufe0f",low_brightness:"\ud83d\udd05",high_brightness:"\ud83d\udd06",part_alternation_mark:"\u303d\ufe0f",warning:"\u26a0\ufe0f",children_crossing:"\ud83d\udeb8",trident:"\ud83d\udd31",fleur_de_lis:"\u269c\ufe0f",beginner:"\ud83d\udd30",recycle:"\u267b\ufe0f",white_check_mark:"\u2705",chart:"\ud83d\udcb9",sparkle:"\u2747\ufe0f",eight_spoked_asterisk:"\u2733\ufe0f",negative_squared_cross_mark:"\u274e",globe_with_meridians:"\ud83c\udf10",diamond_shape_with_a_dot_inside:"\ud83d\udca0",m:"\u24c2\ufe0f",cyclone:"\ud83c\udf00",zzz:"\ud83d\udca4",atm:"\ud83c\udfe7",wc:"\ud83d\udebe",wheelchair:"\u267f\ufe0f",parking:"\ud83c\udd7f\ufe0f",sa:"\ud83c\ude02\ufe0f",passport_control:"\ud83d\udec2",customs:"\ud83d\udec3",baggage_claim:"\ud83d\udec4",left_luggage:"\ud83d\udec5",mens:"\ud83d\udeb9",womens:"\ud83d\udeba",baby_symbol:"\ud83d\udebc",restroom:"\ud83d\udebb",put_litter_in_its_place:"\ud83d\udeae",cinema:"\ud83c\udfa6",signal_strength:"\ud83d\udcf6",koko:"\ud83c\ude01",symbols:"\ud83d\udd23",information_source:"\u2139\ufe0f",abc:"\ud83d\udd24",abcd:"\ud83d\udd21",capital_abcd:"\ud83d\udd20",ng:"\ud83c\udd96",ok:"\ud83c\udd97",up:"\ud83c\udd99",cool:"\ud83c\udd92",new:"\ud83c\udd95",free:"\ud83c\udd93",zero:"0\ufe0f\u20e3",one:"1\ufe0f\u20e3",two:"2\ufe0f\u20e3",three:"3\ufe0f\u20e3",four:"4\ufe0f\u20e3",five:"5\ufe0f\u20e3",six:"6\ufe0f\u20e3",seven:"7\ufe0f\u20e3",eight:"8\ufe0f\u20e3",nine:"9\ufe0f\u20e3",keycap_ten:"\ud83d\udd1f",hash:"#\ufe0f\u20e3",asterisk:"*\ufe0f\u20e3",arrow_forward:"\u25b6\ufe0f",pause_button:"\u23f8",play_or_pause_button:"\u23ef",stop_button:"\u23f9",record_button:"\u23fa",next_track_button:"\u23ed",previous_track_button:"\u23ee",fast_forward:"\u23e9",rewind:"\u23ea",arrow_double_up:"\u23eb",arrow_double_down:"\u23ec",arrow_backward:"\u25c0\ufe0f",
arrow_up_small:"\ud83d\udd3c",arrow_down_small:"\ud83d\udd3d",arrow_right:"\u27a1\ufe0f",arrow_left:"\u2b05\ufe0f",arrow_up:"\u2b06\ufe0f",arrow_down:"\u2b07\ufe0f",arrow_upper_right:"\u2197\ufe0f",arrow_lower_right:"\u2198\ufe0f",arrow_lower_left:"\u2199\ufe0f",arrow_upper_left:"\u2196\ufe0f",arrow_up_down:"\u2195\ufe0f",left_right_arrow:"\u2194\ufe0f",arrow_right_hook:"\u21aa\ufe0f",leftwards_arrow_with_hook:"\u21a9\ufe0f",arrow_heading_up:"\u2934\ufe0f",arrow_heading_down:"\u2935\ufe0f",twisted_rightwards_arrows:"\ud83d\udd00",repeat:"\ud83d\udd01",repeat_one:"\ud83d\udd02",arrows_counterclockwise:"\ud83d\udd04",arrows_clockwise:"\ud83d\udd03",musical_note:"\ud83c\udfb5",notes:"\ud83c\udfb6",heavy_plus_sign:"\u2795",heavy_minus_sign:"\u2796",heavy_division_sign:"\u2797",heavy_multiplication_x:"\u2716\ufe0f",heavy_dollar_sign:"\ud83d\udcb2",currency_exchange:"\ud83d\udcb1",tm:"\u2122\ufe0f",copyright:"\xa9\ufe0f",registered:"\xae\ufe0f",wavy_dash:"\u3030\ufe0f",curly_loop:"\u27b0",loop:"\u27bf",end:"\ud83d\udd1a",back:"\ud83d\udd19",on:"\ud83d\udd1b",top:"\ud83d\udd1d",soon:"\ud83d\udd1c",heavy_check_mark:"\u2714\ufe0f",ballot_box_with_check:"\u2611\ufe0f",radio_button:"\ud83d\udd18",white_circle:"\u26aa\ufe0f",black_circle:"\u26ab\ufe0f",red_circle:"\ud83d\udd34",large_blue_circle:"\ud83d\udd35",small_red_triangle:"\ud83d\udd3a",small_red_triangle_down:"\ud83d\udd3b",small_orange_diamond:"\ud83d\udd38",small_blue_diamond:"\ud83d\udd39",large_orange_diamond:"\ud83d\udd36",large_blue_diamond:"\ud83d\udd37",white_square_button:"\ud83d\udd33",black_square_button:"\ud83d\udd32",black_small_square:"\u25aa\ufe0f",white_small_square:"\u25ab\ufe0f",black_medium_small_square:"\u25fe\ufe0f",white_medium_small_square:"\u25fd\ufe0f",black_medium_square:"\u25fc\ufe0f",white_medium_square:"\u25fb\ufe0f",black_large_square:"\u2b1b\ufe0f",white_large_square:"\u2b1c\ufe0f",speaker:"\ud83d\udd08",mute:"\ud83d\udd07",sound:"\ud83d\udd09",loud_sound:"\ud83d\udd0a",bell:"\ud83d\udd14",no_bell:"\ud83d\udd15",mega:"\ud83d\udce3",loudspeaker:"\ud83d\udce2",eye_speech_bubble:"\ud83d\udc41\u200d\ud83d\udde8",speech_balloon:"\ud83d\udcac",thought_balloon:"\ud83d\udcad",right_anger_bubble:"\ud83d\uddef",spades:"\u2660\ufe0f",clubs:"\u2663\ufe0f",hearts:"\u2665\ufe0f",diamonds:"\u2666\ufe0f",black_joker:"\ud83c\udccf",flower_playing_cards:"\ud83c\udfb4",mahjong:"\ud83c\udc04\ufe0f",clock1:"\ud83d\udd50",clock2:"\ud83d\udd51",clock3:"\ud83d\udd52",clock4:"\ud83d\udd53",clock5:"\ud83d\udd54",clock6:"\ud83d\udd55",clock7:"\ud83d\udd56",clock8:"\ud83d\udd57",clock9:"\ud83d\udd58",clock10:"\ud83d\udd59",clock11:"\ud83d\udd5a",clock12:"\ud83d\udd5b",clock130:"\ud83d\udd5c",clock230:"\ud83d\udd5d",clock330:"\ud83d\udd5e",clock430:"\ud83d\udd5f",clock530:"\ud83d\udd60",clock630:"\ud83d\udd61",clock730:"\ud83d\udd62",clock830:"\ud83d\udd63",clock930:"\ud83d\udd64",clock1030:"\ud83d\udd65",clock1130:"\ud83d\udd66",clock1230:"\ud83d\udd67",white_flag:"\ud83c\udff3\ufe0f",black_flag:"\ud83c\udff4",checkered_flag:"\ud83c\udfc1",triangular_flag_on_post:"\ud83d\udea9",rainbow_flag:"\ud83c\udff3\ufe0f\u200d\ud83c\udf08",afghanistan:"\ud83c\udde6\ud83c\uddeb",aland_islands:"\ud83c\udde6\ud83c\uddfd",albania:"\ud83c\udde6\ud83c\uddf1",algeria:"\ud83c\udde9\ud83c\uddff",american_samoa:"\ud83c\udde6\ud83c\uddf8",andorra:"\ud83c\udde6\ud83c\udde9",angola:"\ud83c\udde6\ud83c\uddf4",anguilla:"\ud83c\udde6\ud83c\uddee",antarctica:"\ud83c\udde6\ud83c\uddf6",antigua_barbuda:"\ud83c\udde6\ud83c\uddec",argentina:"\ud83c\udde6\ud83c\uddf7",armenia:"\ud83c\udde6\ud83c\uddf2",aruba:"\ud83c\udde6\ud83c\uddfc",australia:"\ud83c\udde6\ud83c\uddfa",austria:"\ud83c\udde6\ud83c\uddf9",azerbaijan:"\ud83c\udde6\ud83c\uddff",bahamas:"\ud83c\udde7\ud83c\uddf8",bahrain:"\ud83c\udde7\ud83c\udded",bangladesh:"\ud83c\udde7\ud83c\udde9",barbados:"\ud83c\udde7\ud83c\udde7",belarus:"\ud83c\udde7\ud83c\uddfe",belgium:"\ud83c\udde7\ud83c\uddea",belize:"\ud83c\udde7\ud83c\uddff",benin:"\ud83c\udde7\ud83c\uddef",bermuda:"\ud83c\udde7\ud83c\uddf2",bhutan:"\ud83c\udde7\ud83c\uddf9",bolivia:"\ud83c\udde7\ud83c\uddf4",caribbean_netherlands:"\ud83c\udde7\ud83c\uddf6",bosnia_herzegovina:"\ud83c\udde7\ud83c\udde6",botswana:"\ud83c\udde7\ud83c\uddfc",brazil:"\ud83c\udde7\ud83c\uddf7",british_indian_ocean_territory:"\ud83c\uddee\ud83c\uddf4",british_virgin_islands:"\ud83c\uddfb\ud83c\uddec",brunei:"\ud83c\udde7\ud83c\uddf3",bulgaria:"\ud83c\udde7\ud83c\uddec",burkina_faso:"\ud83c\udde7\ud83c\uddeb",burundi:"\ud83c\udde7\ud83c\uddee",cape_verde:"\ud83c\udde8\ud83c\uddfb",cambodia:"\ud83c\uddf0\ud83c\udded",cameroon:"\ud83c\udde8\ud83c\uddf2",canada:"\ud83c\udde8\ud83c\udde6",canary_islands:"\ud83c\uddee\ud83c\udde8",cayman_islands:"\ud83c\uddf0\ud83c\uddfe",central_african_republic:"\ud83c\udde8\ud83c\uddeb",chad:"\ud83c\uddf9\ud83c\udde9",chile:"\ud83c\udde8\ud83c\uddf1",cn:"\ud83c\udde8\ud83c\uddf3",christmas_island:"\ud83c\udde8\ud83c\uddfd",cocos_islands:"\ud83c\udde8\ud83c\udde8",colombia:"\ud83c\udde8\ud83c\uddf4",comoros:"\ud83c\uddf0\ud83c\uddf2",congo_brazzaville:"\ud83c\udde8\ud83c\uddec",congo_kinshasa:"\ud83c\udde8\ud83c\udde9",cook_islands:"\ud83c\udde8\ud83c\uddf0",costa_rica:"\ud83c\udde8\ud83c\uddf7",cote_divoire:"\ud83c\udde8\ud83c\uddee",croatia:"\ud83c\udded\ud83c\uddf7",cuba:"\ud83c\udde8\ud83c\uddfa",curacao:"\ud83c\udde8\ud83c\uddfc",cyprus:"\ud83c\udde8\ud83c\uddfe",czech_republic:"\ud83c\udde8\ud83c\uddff",denmark:"\ud83c\udde9\ud83c\uddf0",djibouti:"\ud83c\udde9\ud83c\uddef",dominica:"\ud83c\udde9\ud83c\uddf2",dominican_republic:"\ud83c\udde9\ud83c\uddf4",ecuador:"\ud83c\uddea\ud83c\udde8",egypt:"\ud83c\uddea\ud83c\uddec",el_salvador:"\ud83c\uddf8\ud83c\uddfb",equatorial_guinea:"\ud83c\uddec\ud83c\uddf6",eritrea:"\ud83c\uddea\ud83c\uddf7",estonia:"\ud83c\uddea\ud83c\uddea",ethiopia:"\ud83c\uddea\ud83c\uddf9",eu:"\ud83c\uddea\ud83c\uddfa",european_union:"\ud83c\uddea\ud83c\uddfa",falkland_islands:"\ud83c\uddeb\ud83c\uddf0",faroe_islands:"\ud83c\uddeb\ud83c\uddf4",fiji:"\ud83c\uddeb\ud83c\uddef",finland:"\ud83c\uddeb\ud83c\uddee",fr:"\ud83c\uddeb\ud83c\uddf7",french_guiana:"\ud83c\uddec\ud83c\uddeb",french_polynesia:"\ud83c\uddf5\ud83c\uddeb",french_southern_territories:"\ud83c\uddf9\ud83c\uddeb",gabon:"\ud83c\uddec\ud83c\udde6",gambia:"\ud83c\uddec\ud83c\uddf2",georgia:"\ud83c\uddec\ud83c\uddea",de:"\ud83c\udde9\ud83c\uddea",ghana:"\ud83c\uddec\ud83c\udded",gibraltar:"\ud83c\uddec\ud83c\uddee",greece:"\ud83c\uddec\ud83c\uddf7",greenland:"\ud83c\uddec\ud83c\uddf1",grenada:"\ud83c\uddec\ud83c\udde9",guadeloupe:"\ud83c\uddec\ud83c\uddf5",guam:"\ud83c\uddec\ud83c\uddfa",guatemala:"\ud83c\uddec\ud83c\uddf9",guernsey:"\ud83c\uddec\ud83c\uddec",guinea:"\ud83c\uddec\ud83c\uddf3",guinea_bissau:"\ud83c\uddec\ud83c\uddfc",guyana:"\ud83c\uddec\ud83c\uddfe",haiti:"\ud83c\udded\ud83c\uddf9",honduras:"\ud83c\udded\ud83c\uddf3",hong_kong:"\ud83c\udded\ud83c\uddf0",hungary:"\ud83c\udded\ud83c\uddfa",iceland:"\ud83c\uddee\ud83c\uddf8",india:"\ud83c\uddee\ud83c\uddf3",indonesia:"\ud83c\uddee\ud83c\udde9",iran:"\ud83c\uddee\ud83c\uddf7",iraq:"\ud83c\uddee\ud83c\uddf6",ireland:"\ud83c\uddee\ud83c\uddea",isle_of_man:"\ud83c\uddee\ud83c\uddf2",israel:"\ud83c\uddee\ud83c\uddf1",it:"\ud83c\uddee\ud83c\uddf9",jamaica:"\ud83c\uddef\ud83c\uddf2",jp:"\ud83c\uddef\ud83c\uddf5",crossed_flags:"\ud83c\udf8c",jersey:"\ud83c\uddef\ud83c\uddea",jordan:"\ud83c\uddef\ud83c\uddf4",kazakhstan:"\ud83c\uddf0\ud83c\uddff",kenya:"\ud83c\uddf0\ud83c\uddea",kiribati:"\ud83c\uddf0\ud83c\uddee",kosovo:"\ud83c\uddfd\ud83c\uddf0",kuwait:"\ud83c\uddf0\ud83c\uddfc",kyrgyzstan:"\ud83c\uddf0\ud83c\uddec",laos:"\ud83c\uddf1\ud83c\udde6",latvia:"\ud83c\uddf1\ud83c\uddfb",lebanon:"\ud83c\uddf1\ud83c\udde7",lesotho:"\ud83c\uddf1\ud83c\uddf8",liberia:"\ud83c\uddf1\ud83c\uddf7",libya:"\ud83c\uddf1\ud83c\uddfe",liechtenstein:"\ud83c\uddf1\ud83c\uddee",lithuania:"\ud83c\uddf1\ud83c\uddf9",luxembourg:"\ud83c\uddf1\ud83c\uddfa",macau:"\ud83c\uddf2\ud83c\uddf4",macedonia:"\ud83c\uddf2\ud83c\uddf0",madagascar:"\ud83c\uddf2\ud83c\uddec",malawi:"\ud83c\uddf2\ud83c\uddfc",malaysia:"\ud83c\uddf2\ud83c\uddfe",maldives:"\ud83c\uddf2\ud83c\uddfb",mali:"\ud83c\uddf2\ud83c\uddf1",malta:"\ud83c\uddf2\ud83c\uddf9",marshall_islands:"\ud83c\uddf2\ud83c\udded",martinique:"\ud83c\uddf2\ud83c\uddf6",mauritania:"\ud83c\uddf2\ud83c\uddf7",mauritius:"\ud83c\uddf2\ud83c\uddfa",mayotte:"\ud83c\uddfe\ud83c\uddf9",mexico:"\ud83c\uddf2\ud83c\uddfd",micronesia:"\ud83c\uddeb\ud83c\uddf2",moldova:"\ud83c\uddf2\ud83c\udde9",monaco:"\ud83c\uddf2\ud83c\udde8",mongolia:"\ud83c\uddf2\ud83c\uddf3",montenegro:"\ud83c\uddf2\ud83c\uddea",montserrat:"\ud83c\uddf2\ud83c\uddf8",morocco:"\ud83c\uddf2\ud83c\udde6",mozambique:"\ud83c\uddf2\ud83c\uddff",myanmar:"\ud83c\uddf2\ud83c\uddf2",namibia:"\ud83c\uddf3\ud83c\udde6",nauru:"\ud83c\uddf3\ud83c\uddf7",nepal:"\ud83c\uddf3\ud83c\uddf5",netherlands:"\ud83c\uddf3\ud83c\uddf1",new_caledonia:"\ud83c\uddf3\ud83c\udde8",new_zealand:"\ud83c\uddf3\ud83c\uddff",nicaragua:"\ud83c\uddf3\ud83c\uddee",niger:"\ud83c\uddf3\ud83c\uddea",nigeria:"\ud83c\uddf3\ud83c\uddec",niue:"\ud83c\uddf3\ud83c\uddfa",norfolk_island:"\ud83c\uddf3\ud83c\uddeb",northern_mariana_islands:"\ud83c\uddf2\ud83c\uddf5",north_korea:"\ud83c\uddf0\ud83c\uddf5",norway:"\ud83c\uddf3\ud83c\uddf4",oman:"\ud83c\uddf4\ud83c\uddf2",pakistan:"\ud83c\uddf5\ud83c\uddf0",palau:"\ud83c\uddf5\ud83c\uddfc",palestinian_territories:"\ud83c\uddf5\ud83c\uddf8",panama:"\ud83c\uddf5\ud83c\udde6",papua_new_guinea:"\ud83c\uddf5\ud83c\uddec",paraguay:"\ud83c\uddf5\ud83c\uddfe",peru:"\ud83c\uddf5\ud83c\uddea",philippines:"\ud83c\uddf5\ud83c\udded",pitcairn_islands:"\ud83c\uddf5\ud83c\uddf3",poland:"\ud83c\uddf5\ud83c\uddf1",portugal:"\ud83c\uddf5\ud83c\uddf9",puerto_rico:"\ud83c\uddf5\ud83c\uddf7",qatar:"\ud83c\uddf6\ud83c\udde6",reunion:"\ud83c\uddf7\ud83c\uddea",romania:"\ud83c\uddf7\ud83c\uddf4",ru:"\ud83c\uddf7\ud83c\uddfa",rwanda:"\ud83c\uddf7\ud83c\uddfc",st_barthelemy:"\ud83c\udde7\ud83c\uddf1",st_helena:"\ud83c\uddf8\ud83c\udded",st_kitts_nevis:"\ud83c\uddf0\ud83c\uddf3",st_lucia:"\ud83c\uddf1\ud83c\udde8",st_pierre_miquelon:"\ud83c\uddf5\ud83c\uddf2",st_vincent_grenadines:"\ud83c\uddfb\ud83c\udde8",samoa:"\ud83c\uddfc\ud83c\uddf8",san_marino:"\ud83c\uddf8\ud83c\uddf2",sao_tome_principe:"\ud83c\uddf8\ud83c\uddf9",saudi_arabia:"\ud83c\uddf8\ud83c\udde6",senegal:"\ud83c\uddf8\ud83c\uddf3",serbia:"\ud83c\uddf7\ud83c\uddf8",seychelles:"\ud83c\uddf8\ud83c\udde8",sierra_leone:"\ud83c\uddf8\ud83c\uddf1",singapore:"\ud83c\uddf8\ud83c\uddec",sint_maarten:"\ud83c\uddf8\ud83c\uddfd",slovakia:"\ud83c\uddf8\ud83c\uddf0",slovenia:"\ud83c\uddf8\ud83c\uddee",solomon_islands:"\ud83c\uddf8\ud83c\udde7",somalia:"\ud83c\uddf8\ud83c\uddf4",south_africa:"\ud83c\uddff\ud83c\udde6",south_georgia_south_sandwich_islands:"\ud83c\uddec\ud83c\uddf8",kr:"\ud83c\uddf0\ud83c\uddf7",south_sudan:"\ud83c\uddf8\ud83c\uddf8",es:"\ud83c\uddea\ud83c\uddf8",sri_lanka:"\ud83c\uddf1\ud83c\uddf0",sudan:"\ud83c\uddf8\ud83c\udde9",suriname:"\ud83c\uddf8\ud83c\uddf7",swaziland:"\ud83c\uddf8\ud83c\uddff",sweden:"\ud83c\uddf8\ud83c\uddea",switzerland:"\ud83c\udde8\ud83c\udded",syria:"\ud83c\uddf8\ud83c\uddfe",taiwan:"\ud83c\uddf9\ud83c\uddfc",tajikistan:"\ud83c\uddf9\ud83c\uddef",tanzania:"\ud83c\uddf9\ud83c\uddff",thailand:"\ud83c\uddf9\ud83c\udded",timor_leste:"\ud83c\uddf9\ud83c\uddf1",togo:"\ud83c\uddf9\ud83c\uddec",tokelau:"\ud83c\uddf9\ud83c\uddf0",tonga:"\ud83c\uddf9\ud83c\uddf4",trinidad_tobago:"\ud83c\uddf9\ud83c\uddf9",tunisia:"\ud83c\uddf9\ud83c\uddf3",tr:"\ud83c\uddf9\ud83c\uddf7",turkmenistan:"\ud83c\uddf9\ud83c\uddf2",turks_caicos_islands:"\ud83c\uddf9\ud83c\udde8",tuvalu:"\ud83c\uddf9\ud83c\uddfb",uganda:"\ud83c\uddfa\ud83c\uddec",ukraine:"\ud83c\uddfa\ud83c\udde6",united_arab_emirates:"\ud83c\udde6\ud83c\uddea",gb:"\ud83c\uddec\ud83c\udde7",uk:"\ud83c\uddec\ud83c\udde7",us:"\ud83c\uddfa\ud83c\uddf8",us_virgin_islands:"\ud83c\uddfb\ud83c\uddee",uruguay:"\ud83c\uddfa\ud83c\uddfe",uzbekistan:"\ud83c\uddfa\ud83c\uddff",vanuatu:"\ud83c\uddfb\ud83c\uddfa",vatican_city:"\ud83c\uddfb\ud83c\udde6",venezuela:"\ud83c\uddfb\ud83c\uddea",vietnam:"\ud83c\uddfb\ud83c\uddf3",wallis_futuna:"\ud83c\uddfc\ud83c\uddeb",western_sahara:"\ud83c\uddea\ud83c\udded",yemen:"\ud83c\uddfe\ud83c\uddea",zambia:"\ud83c\uddff\ud83c\uddf2",zimbabwe:"\ud83c\uddff\ud83c\uddfc"}},{}],2:[function(a,e,n){"use strict";e.exports={angry:[">:(",">:-("],blush:[':")',':-")'],broken_heart:["</3","<\\3"],confused:[":/",":-/"],cry:[":'(",":'-(",":,(",":,-("],frowning:[":(",":-("],heart:["<3"],imp:["]:(","]:-("],innocent:["o:)","O:)","o:-)","O:-)","0:)","0:-)"],joy:[":')",":'-)",":,)",":,-)",":'D",":'-D",":,D",":,-D"],kissing:[":*",":-*"],laughing:["x-)","X-)"],neutral_face:[":|",":-|"],open_mouth:[":o",":-o",":O",":-O"],rage:[":@",":-@"],smile:[":D",":-D"],smiley:[":)",":-)"],smiling_imp:["]:)","]:-)"],sob:[":,'(",":,'-(",";(",";-("],stuck_out_tongue:[":P",":-P"],sunglasses:["8-)","B-)"],sweat:[",:(",",:-("],sweat_smile:[",:)",",:-)"],unamused:[":s",":-S",":z",":-Z",":$",":-$"],wink:[";)",";-)"]}},{}],3:[function(a,e,n){"use strict";function o(a){return a.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}e.exports=function(a){var e,n=a.defs;a.enabled.length&&(n=Object.keys(n).reduce(function(e,o){return a.enabled.indexOf(o)>=0&&(e[o]=n[o]),e},{})),e=Object.keys(a.shortcuts).reduce(function(e,o){return n[o]?Array.isArray(a.shortcuts[o])?(a.shortcuts[o].forEach(function(a){e[a]=o}),e):(e[a.shortcuts[o]]=o,e):e},{});var i=Object.keys(n).map(function(a){return":"+a+":"}).concat(Object.keys(e)).sort().reverse().map(function(a){return o(a)}).join("|"),r=RegExp(i),_=RegExp(i,"g");return{defs:n,shortcuts:e,scanRE:r,replaceRE:_}}},{}],4:[function(a,e,n){"use strict";e.exports=function(a,e){return a[e].content}},{}],5:[function(a,e,n){"use strict";e.exports=function(a,e,n,o,i){function r(a,o,r){var _,t=0,l=[];return a.replace(i,function(o,i,c){var m;if(n.hasOwnProperty(o)){if(m=n[o],i>0&&!s.test(c[i-1]))return;if(i+o.length<c.length&&!s.test(c[i+o.length]))return}else m=o.slice(1,-1);i>t&&(_=new r("text","",0),_.content=a.slice(t,i),l.push(_)),_=new r("emoji","",0),_.markup=m,_.content=e[m],l.push(_),t=i+o.length}),t<a.length&&(_=new r("text","",0),_.content=a.slice(t),l.push(_)),l}var _=a.utils.arrayReplaceAt,t=a.utils.lib.ucmicro,s=new RegExp([t.Z.source,t.P.source,t.Cc.source].join("|"));return function(a){var e,n,i,t,s,l=a.tokens,c=0;for(n=0,i=l.length;n<i;n++)if("inline"===l[n].type)for(t=l[n].children,e=t.length-1;e>=0;e--)s=t[e],"link_open"!==s.type&&"link_close"!==s.type||"auto"===s.info&&(c-=s.nesting),"text"===s.type&&0===c&&o.test(s.content)&&(l[n].children=t=_(t,e,r(s.content,s.level,a.Token)))}}},{}],6:[function(a,e,n){"use strict";var o=a("./lib/data/full.json"),i=a("./lib/data/shortcuts"),r=a("./lib/render"),_=a("./lib/replace"),t=a("./lib/normalize_opts");e.exports=function(a,e){var n={defs:o,shortcuts:i,enabled:[]},s=t(a.utils.assign({},n,e||{}));a.renderer.rules.emoji=r,a.core.ruler.push("emoji",_(a,s.defs,s.shortcuts,s.scanRE,s.replaceRE))}},{"./lib/data/full.json":1,"./lib/data/shortcuts":2,"./lib/normalize_opts":3,"./lib/render":4,"./lib/replace":5}]},{},[6])(6)});
;
/*! markdown-it-footnote 3.0.1 https://github.com//markdown-it/markdown-it-footnote @license MIT */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;o="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,o.markdownitFootnote=e()}}(function(){return function e(o,t,n){function r(f,l){if(!t[f]){if(!o[f]){var u="function"==typeof require&&require;if(!l&&u)return u(f,!0);if(s)return s(f,!0);var i=new Error("Cannot find module '"+f+"'");throw i.code="MODULE_NOT_FOUND",i}var a=t[f]={exports:{}};o[f][0].call(a.exports,function(e){var t=o[f][1][e];return r(t?t:e)},a,a.exports,e,o,t,n)}return t[f].exports}for(var s="function"==typeof require&&require,f=0;f<n.length;f++)r(n[f]);return r}({1:[function(e,o,t){"use strict";function n(e,o,t,n){var r=Number(e[o].meta.id+1).toString(),s="";return"string"==typeof n.docId&&(s="-"+n.docId+"-"),s+r}function r(e,o){var t=Number(e[o].meta.id+1).toString();return e[o].meta.subId>0&&(t+=":"+e[o].meta.subId),"["+t+"]"}function s(e,o,t,n,r){var s=r.rules.footnote_anchor_name(e,o,t,n,r),f=r.rules.footnote_caption(e,o,t,n,r),l=s;return e[o].meta.subId>0&&(l+=":"+e[o].meta.subId),'<sup class="footnote-ref"><a href="#fn'+s+'" id="fnref'+l+'">'+f+"</a></sup>"}function f(e,o,t){return(t.xhtmlOut?'<hr class="footnotes-sep" />\n':'<hr class="footnotes-sep">\n')+'<section class="footnotes">\n<ol class="footnotes-list">\n'}function l(){return"</ol>\n</section>\n"}function u(e,o,t,n,r){var s=r.rules.footnote_anchor_name(e,o,t,n,r);return e[o].meta.subId>0&&(s+=":"+e[o].meta.subId),'<li id="fn'+s+'" class="footnote-item">'}function i(){return"</li>\n"}function a(e,o,t,n,r){var s=r.rules.footnote_anchor_name(e,o,t,n,r);return e[o].meta.subId>0&&(s+=":"+e[o].meta.subId),' <a href="#fnref'+s+'" class="footnote-backref">\u21a9\ufe0e</a>'}o.exports=function(e){function o(e,o,t,n){var r,s,f,l,u,i,a,c,p,d,k,b=e.bMarks[o]+e.tShift[o],v=e.eMarks[o];if(b+4>v)return!1;if(91!==e.src.charCodeAt(b))return!1;if(94!==e.src.charCodeAt(b+1))return!1;for(u=b+2;u<v;u++){if(32===e.src.charCodeAt(u))return!1;if(93===e.src.charCodeAt(u))break}if(u===b+2)return!1;if(u+1>=v||58!==e.src.charCodeAt(++u))return!1;if(n)return!0;for(u++,e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.refs||(e.env.footnotes.refs={}),i=e.src.slice(b+2,u-2),e.env.footnotes.refs[":"+i]=-1,a=new e.Token("footnote_reference_open","",1),a.meta={label:i},a.level=e.level++,e.tokens.push(a),r=e.bMarks[o],s=e.tShift[o],f=e.sCount[o],l=e.parentType,k=u,c=p=e.sCount[o]+u-(e.bMarks[o]+e.tShift[o]);u<v&&(d=e.src.charCodeAt(u),h(d));)9===d?p+=4-p%4:p++,u++;return e.tShift[o]=u-k,e.sCount[o]=p-c,e.bMarks[o]=k,e.blkIndent+=4,e.parentType="footnote",e.sCount[o]<e.blkIndent&&(e.sCount[o]+=e.blkIndent),e.md.block.tokenize(e,o,t,!0),e.parentType=l,e.blkIndent-=4,e.tShift[o]=s,e.sCount[o]=f,e.bMarks[o]=r,a=new e.Token("footnote_reference_close","",(-1)),a.level=--e.level,e.tokens.push(a),!0}function t(e,o){var t,n,r,s,f,l=e.posMax,u=e.pos;return!(u+2>=l)&&(94===e.src.charCodeAt(u)&&(91===e.src.charCodeAt(u+1)&&(t=u+2,n=d(e,u+1),!(n<0)&&(o||(e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.list||(e.env.footnotes.list=[]),r=e.env.footnotes.list.length,e.md.inline.parse(e.src.slice(t,n),e.md,e.env,f=[]),s=e.push("footnote_ref","",0),s.meta={id:r},e.env.footnotes.list[r]={tokens:f}),e.pos=n+1,e.posMax=l,!0))))}function c(e,o){var t,n,r,s,f,l=e.posMax,u=e.pos;if(u+3>l)return!1;if(!e.env.footnotes||!e.env.footnotes.refs)return!1;if(91!==e.src.charCodeAt(u))return!1;if(94!==e.src.charCodeAt(u+1))return!1;for(n=u+2;n<l;n++){if(32===e.src.charCodeAt(n))return!1;if(10===e.src.charCodeAt(n))return!1;if(93===e.src.charCodeAt(n))break}return n!==u+2&&(!(n>=l)&&(n++,t=e.src.slice(u+2,n-1),"undefined"!=typeof e.env.footnotes.refs[":"+t]&&(o||(e.env.footnotes.list||(e.env.footnotes.list=[]),e.env.footnotes.refs[":"+t]<0?(r=e.env.footnotes.list.length,e.env.footnotes.list[r]={label:t,count:0},e.env.footnotes.refs[":"+t]=r):r=e.env.footnotes.refs[":"+t],s=e.env.footnotes.list[r].count,e.env.footnotes.list[r].count++,f=e.push("footnote_ref","",0),f.meta={id:r,subId:s,label:t}),e.pos=n,e.posMax=l,!0)))}function p(e){var o,t,n,r,s,f,l,u,i,a,c=!1,p={};if(e.env.footnotes&&(e.tokens=e.tokens.filter(function(e){return"footnote_reference_open"===e.type?(c=!0,i=[],a=e.meta.label,!1):"footnote_reference_close"===e.type?(c=!1,p[":"+a]=i,!1):(c&&i.push(e),!c)}),e.env.footnotes.list)){for(f=e.env.footnotes.list,l=new e.Token("footnote_block_open","",1),e.tokens.push(l),o=0,t=f.length;o<t;o++){for(l=new e.Token("footnote_open","",1),l.meta={id:o,label:f[o].label},e.tokens.push(l),f[o].tokens?(u=[],l=new e.Token("paragraph_open","p",1),l.block=!0,u.push(l),l=new e.Token("inline","",0),l.children=f[o].tokens,l.content="",u.push(l),l=new e.Token("paragraph_close","p",(-1)),l.block=!0,u.push(l)):f[o].label&&(u=p[":"+f[o].label]),e.tokens=e.tokens.concat(u),s="paragraph_close"===e.tokens[e.tokens.length-1].type?e.tokens.pop():null,r=f[o].count>0?f[o].count:1,n=0;n<r;n++)l=new e.Token("footnote_anchor","",0),l.meta={id:o,subId:n,label:f[o].label},e.tokens.push(l);s&&e.tokens.push(s),l=new e.Token("footnote_close","",(-1)),e.tokens.push(l)}l=new e.Token("footnote_block_close","",(-1)),e.tokens.push(l)}}var d=e.helpers.parseLinkLabel,h=e.utils.isSpace;e.renderer.rules.footnote_ref=s,e.renderer.rules.footnote_block_open=f,e.renderer.rules.footnote_block_close=l,e.renderer.rules.footnote_open=u,e.renderer.rules.footnote_close=i,e.renderer.rules.footnote_anchor=a,e.renderer.rules.footnote_caption=r,e.renderer.rules.footnote_anchor_name=n,e.block.ruler.before("reference","footnote_def",o,{alt:["paragraph","reference"]}),e.inline.ruler.after("image","footnote_inline",t),e.inline.ruler.after("footnote_inline","footnote_ref",c),e.core.ruler.after("inline","footnote_tail",p)}},{}]},{},[1])(1)});
;
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.markdownitFrontMatter = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// Process front matter and pass to cb
//
'use strict';

module.exports = function front_matter_plugin(md, cb) {
  var min_markers = 3,
      marker_str  = '-',
      marker_char = marker_str.charCodeAt(0),
      marker_len  = marker_str.length

  function frontMatter(state, startLine, endLine, silent) {
    var pos, nextLine, marker_count, markup, token,
        old_parent, old_line_max, start_content,
        auto_closed = false,
        start = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // Check out the first character of the first line quickly,
    // this should filter out non-front matter
    //
    if (startLine !== 0 || marker_char !== state.src.charCodeAt(0)) { return false; }

    // Check out the rest of the marker string
    //
    for (pos = start + 1; pos <= max; pos++) { // while pos <= 3
      if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
        start_content = pos + 1
        break;
      }
    }

    marker_count = Math.floor((pos - start) / marker_len);

    if (marker_count < min_markers) { return false; }
    pos -= (pos - start) % marker_len;

    // Since start is found, we can report success here in validation mode
    //
    if (silent) { return true; }

    // Search for the end of the block
    //
    nextLine = startLine;

    for (;;) {
      nextLine++;
      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break;
      }

      start = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (start < max && state.sCount[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break;
      }

      if (marker_char !== state.src.charCodeAt(start)) { continue; }

      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        // closing fence should be indented less than 4 spaces
        continue;
      }

      for (pos = start + 1; pos <= max; pos++) {
        if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
          break;
        }
      }

      // closing code fence must be at least as long as the opening one
      if (Math.floor((pos - start) / marker_len) < marker_count) { continue; }

      // make sure tail has spaces only
      pos -= (pos - start) % marker_len;
      pos = state.skipSpaces(pos);

      if (pos < max) { continue; }

      // found!
      auto_closed = true;
      break;
    }

    old_parent = state.parentType;
    old_line_max = state.lineMax;
    state.parentType = 'container';

    // this will prevent lazy continuations from ever going past our end marker
    state.lineMax = nextLine;

    token        = state.push('front_matter', null, 0);
    token.hidden = true;
    token.markup = state.src.slice(startLine, pos)
    token.block  = true;
    token.map    = [ startLine, pos ];

    state.parentType = old_parent;
    state.lineMax = old_line_max;
    state.line = nextLine + (auto_closed ? 1 : 0);

    cb(state.src.slice(start_content, start - 1))

    return true;
  }

  md.block.ruler.before('table', 'front_matter', frontMatter, {
    alt: [ 'paragraph', 'reference', 'blockquote', 'list' ]
  });
};

},{}]},{},[1])(1)
});
;
/*! markdown-it-headinganchor 1.2.1 https://github.com//adam-p/markdown-it-headinganchor @license MIT */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.markdownitHeadingAnchor = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * Copyright Adam Pritchard 2015
 * MIT License : http://adampritchard.mit-license.org/
 */

'use strict';
/*jshint node:true*/

function slugify(md, s) {
  // Unicode-friendly
  var spaceRegex = new RegExp(md.utils.lib.ucmicro.Z.source, 'g');
  return encodeURIComponent(s.replace(spaceRegex, ''));
}

function makeRule(md, options) {
  return function addHeadingAnchors(state) {
    // Go to length-2 because we're going to be peeking ahead.
    for (var i = 0; i < state.tokens.length - 1; ++i) {
      if (state.tokens[i].type !== 'heading_open' ||
          state.tokens[i+1].type !== 'inline') {
        continue;
      }

      var headingOpenToken = state.tokens[i];
      var headingInlineToken = state.tokens[i+1];

      if (!headingInlineToken.content) {
        continue;
      }

      var anchorName = options.slugify(md, headingInlineToken.content);

      options.headingHook(headingOpenToken, headingInlineToken, anchorName);

      if (options.addHeadingID) {
        headingOpenToken.attrPush(['id', anchorName]);
      }

      if (options.addHeadingAnchor) {
        var anchorToken = new state.Token('html_inline', '', 0);
        anchorToken.content =
          '<a name="' +
          anchorName +
          '" class="' +
          options.anchorClass +
          '" href="#"></a>';

        headingInlineToken.children.unshift(anchorToken);
      }

      // Advance past the inline and heading_close tokens.
      i += 2;
    }
  };
}

module.exports = function headinganchor_plugin(md, opts) {
  var defaults = {
    anchorClass: 'markdown-it-headinganchor',
    addHeadingID: true,
    addHeadingAnchor: true,
    // Added by Le Tan (github.com/tamlok)
    slugify: slugify,
    headingHook: function(openToken, inlineToken, anchor) {}
  };
  var options = md.utils.assign(defaults, opts);
  md.core.ruler.push('heading_anchors', makeRule(md, options));
};

},{}]},{},[1])(1)
});
;
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==="object"&&typeof module==="object")module.exports=factory();else if(typeof define==="function"&&define.amd)define(factory);else if(typeof exports==="object")exports["markdown-it-imsize.js"]=factory();else root["markdown-it-imsize.js"]=factory()})(this,function(){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";var sizeOf=__webpack_require__(2);var parseImageSize=__webpack_require__(1);function image_with_size(md,options){return function(state,silent){var attrs,code,label,labelEnd,labelStart,pos,ref,res,title,width="",height="",token,tokens,start,href="",oldPos=state.pos,max=state.posMax;if(state.src.charCodeAt(state.pos)!==33){return false}if(state.src.charCodeAt(state.pos+1)!==91){return false}labelStart=state.pos+2;labelEnd=md.helpers.parseLinkLabel(state,state.pos+1,false);if(labelEnd<0){return false}pos=labelEnd+1;if(pos<max&&state.src.charCodeAt(pos)===40){pos++;for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(code!==32&&code!==10){break}}if(pos>=max){return false}start=pos;res=md.helpers.parseLinkDestination(state.src,pos,state.posMax);if(res.ok){href=state.md.normalizeLink(res.str);if(state.md.validateLink(href)){pos=res.pos}else{href=""}}start=pos;for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(code!==32&&code!==10){break}}res=md.helpers.parseLinkTitle(state.src,pos,state.posMax);if(pos<max&&start!==pos&&res.ok){title=res.str;pos=res.pos;for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(code!==32&&code!==10){break}}}else{title=""}if(pos-1>=0){code=state.src.charCodeAt(pos-1);if(code===32){res=parseImageSize(state.src,pos,state.posMax);if(res.ok){width=res.width;height=res.height;pos=res.pos;for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(code!==32&&code!==10){break}}}}}if(pos>=max||state.src.charCodeAt(pos)!==41){state.pos=oldPos;return false}pos++}else{if(typeof state.env.references==="undefined"){return false}for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(code!==32&&code!==10){break}}if(pos<max&&state.src.charCodeAt(pos)===91){start=pos+1;pos=md.helpers.parseLinkLabel(state,pos);if(pos>=0){label=state.src.slice(start,pos++)}else{pos=labelEnd+1}}else{pos=labelEnd+1}if(!label){label=state.src.slice(labelStart,labelEnd)}ref=state.env.references[md.utils.normalizeReference(label)];if(!ref){state.pos=oldPos;return false}href=ref.href;title=ref.title}if(!silent){state.pos=labelStart;state.posMax=labelEnd;var newState=new state.md.inline.State(state.src.slice(labelStart,labelEnd),state.md,state.env,tokens=[]);newState.md.inline.tokenize(newState);if(options){if(options.autofill&&width===""&&height===""){try{var dimensions=sizeOf(href);width=dimensions.width;height=dimensions.height}catch(e){}}}token=state.push("image","img",0);token.attrs=attrs=[["src",href],["alt",""]];token.children=tokens;if(title){attrs.push(["title",title])}if(width!==""){attrs.push(["width",width])}if(height!==""){attrs.push(["height",height])}}state.pos=pos;state.posMax=max;return true}}module.exports=function imsize_plugin(md,options){md.inline.ruler.before("emphasis","image",image_with_size(md,options))}},function(module,exports,__webpack_require__){"use strict";function parseNextNumber(str,pos,max){var code,start=pos,result={ok:false,pos:pos,value:""};code=str.charCodeAt(pos);while(pos<max&&(code>=48&&code<=57)||code===37){code=str.charCodeAt(++pos)}result.ok=true;result.pos=pos;result.value=str.slice(start,pos);return result}module.exports=function parseImageSize(str,pos,max){var code,result={ok:false,pos:0,width:"",height:""};if(pos>=max){return result}code=str.charCodeAt(pos);if(code!==61){return result}pos++;code=str.charCodeAt(pos);if(code!==120&&(code<48||code>57)){return result}var resultW=parseNextNumber(str,pos,max);pos=resultW.pos;code=str.charCodeAt(pos);if(code!==120){return result}pos++;var resultH=parseNextNumber(str,pos,max);pos=resultH.pos;result.width=resultW.value;result.height=resultH.value;result.pos=pos;result.ok=true;return result}},function(module,exports,__webpack_require__){(function(Buffer){"use strict";var fs=__webpack_require__(16);var path=__webpack_require__(6);var detector=__webpack_require__(3);var handlers={};var types=__webpack_require__(5);types.forEach(function(type){handlers[type]=__webpack_require__(4)("./"+type)});var MaxBufferSize=128*1024;function lookup(buffer,filepath){var type=detector(buffer,filepath);if(type in handlers){var size=handlers[type].calculate(buffer,filepath);if(size!==false){size.type=type;return size}}throw new TypeError("Unsupported file type")}function asyncFileToBuffer(filepath,callback){fs.open(filepath,"r",function(err0,descriptor){if(err0){return callback(err0)}var size=fs.fstatSync(descriptor).size;var bufferSize=Math.min(size,MaxBufferSize);var buffer=new Buffer(bufferSize);fs.read(descriptor,buffer,0,bufferSize,0,function(err1){if(err1){return callback(err1)}fs.close(descriptor,function(err2){callback(err2,buffer)})})})}function syncFileToBuffer(filepath){var descriptor=fs.openSync(filepath,"r");var size=fs.fstatSync(descriptor).size;var bufferSize=Math.min(size,MaxBufferSize);var buffer=new Buffer(bufferSize);fs.readSync(descriptor,buffer,0,bufferSize,0);fs.closeSync(descriptor);return buffer}module.exports=function(input,callback){if(typeof input!=="string"){throw new TypeError("Input must be file name")}var filepath=path.resolve(input);if(typeof callback==="function"){asyncFileToBuffer(filepath,function(err,buffer){if(err){return callback(err)}var dimensions;try{dimensions=lookup(buffer,filepath)}catch(e){err=e}callback(err,dimensions)})}else{var buffer=syncFileToBuffer(filepath);return lookup(buffer,filepath)}}}).call(exports,__webpack_require__(7).Buffer)},function(module,exports,__webpack_require__){"use strict";var typeMap={};var types=__webpack_require__(5);types.forEach(function(type){typeMap[type]=__webpack_require__(4)("./"+type).detect});module.exports=function(buffer,filepath){var type,result;for(type in typeMap){if(type in typeMap){result=typeMap[type](buffer,filepath);if(result){return type}}}throw new TypeError("Unsupported type")}},function(module,exports,__webpack_require__){var map={"./bmp":8,"./bmp.js":8,"./gif":9,"./gif.js":9,"./jpg":10,"./jpg.js":10,"./png":11,"./png.js":11,"./psd":12,"./psd.js":12,"./svg":13,"./svg.js":13,"./tiff":14,"./tiff.js":14,"./webp":15,"./webp.js":15};function webpackContext(req){return __webpack_require__(webpackContextResolve(req))}function webpackContextResolve(req){return map[req]||function(){throw new Error("Cannot find module '"+req+"'.")}()}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)};webpackContext.resolve=webpackContextResolve;module.exports=webpackContext;webpackContext.id=4},function(module,exports,__webpack_require__){"use strict";module.exports=["bmp","gif","jpg","png","tiff"]},function(module,exports,__webpack_require__){(function(process){function normalizeArray(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up--;up){parts.unshift("..")}}return parts}var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;var splitPath=function(filename){return splitPathRe.exec(filename).slice(1)};exports.resolve=function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:process.cwd();if(typeof path!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){continue}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=path.charAt(0)==="/"}resolvedPath=normalizeArray(filter(resolvedPath.split("/"),function(p){return!!p}),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."};exports.normalize=function(path){var isAbsolute=exports.isAbsolute(path),trailingSlash=substr(path,-1)==="/";path=normalizeArray(filter(path.split("/"),function(p){return!!p}),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path};exports.isAbsolute=function(path){return path.charAt(0)==="/"};exports.join=function(){var paths=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(paths,function(p,index){if(typeof p!=="string"){throw new TypeError("Arguments to path.join must be strings")}return p}).join("/"))};exports.relative=function(from,to){from=exports.resolve(from).substr(1);to=exports.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")};exports.sep="/";exports.delimiter=":";exports.dirname=function(path){var result=splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.substr(0,dir.length-1)}return root+dir};exports.basename=function(path,ext){var f=splitPath(path)[2];if(ext&&f.substr(-1*ext.length)===ext){f=f.substr(0,f.length-ext.length)}return f};exports.extname=function(path){return splitPath(path)[3]};function filter(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i])}return res}var substr="ab".substr(-1)==="b"?function(str,start,len){return str.substr(start,len)}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len)}}).call(exports,__webpack_require__(18))},function(module,exports,__webpack_require__){(function(Buffer){var base64=__webpack_require__(21);var ieee754=__webpack_require__(19);var isArray=__webpack_require__(20);exports.Buffer=Buffer;exports.SlowBuffer=SlowBuffer;exports.INSPECT_MAX_BYTES=50;Buffer.poolSize=8192;var kMaxLength=1073741823;var rootParent={};Buffer.TYPED_ARRAY_SUPPORT=function(){try{var buf=new ArrayBuffer(0);var arr=new Uint8Array(buf);arr.foo=function(){return 42};return arr.foo()===42&&typeof arr.subarray==="function"&&new Uint8Array(1).subarray(1,1).byteLength===0}catch(e){return false}}();function Buffer(subject,encoding){var self=this;if(!(self instanceof Buffer))return new Buffer(subject,encoding);var type=typeof subject;var length;if(type==="number"){length=+subject}else if(type==="string"){length=Buffer.byteLength(subject,encoding)}else if(type==="object"&&subject!==null){if(subject.type==="Buffer"&&isArray(subject.data))subject=subject.data;length=+subject.length}else{throw new TypeError("must start with number, buffer, array or string")}if(length>kMaxLength){throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+kMaxLength.toString(16)+" bytes")}if(length<0)length=0;else length>>>=0;if(Buffer.TYPED_ARRAY_SUPPORT){self=Buffer._augment(new Uint8Array(length))}else{self.length=length;self._isBuffer=true}var i;if(Buffer.TYPED_ARRAY_SUPPORT&&typeof subject.byteLength==="number"){self._set(subject)}else if(isArrayish(subject)){if(Buffer.isBuffer(subject)){for(i=0;i<length;i++){self[i]=subject.readUInt8(i)}}else{for(i=0;i<length;i++){self[i]=(subject[i]%256+256)%256}}}else if(type==="string"){self.write(subject,0,encoding)}else if(type==="number"&&!Buffer.TYPED_ARRAY_SUPPORT){for(i=0;i<length;i++){self[i]=0}}if(length>0&&length<=Buffer.poolSize)self.parent=rootParent;return self}function SlowBuffer(subject,encoding){if(!(this instanceof SlowBuffer))return new SlowBuffer(subject,encoding);var buf=new Buffer(subject,encoding);delete buf.parent;return buf}Buffer.isBuffer=function isBuffer(b){return!!(b!=null&&b._isBuffer)};Buffer.compare=function compare(a,b){if(!Buffer.isBuffer(a)||!Buffer.isBuffer(b)){throw new TypeError("Arguments must be Buffers")}if(a===b)return 0;var x=a.length;var y=b.length;for(var i=0,len=Math.min(x,y);i<len&&a[i]===b[i];i++){}if(i!==len){x=a[i];y=b[i]}if(x<y)return-1;if(y<x)return 1;return 0};Buffer.isEncoding=function isEncoding(encoding){switch(String(encoding).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return true;default:return false}};Buffer.concat=function concat(list,totalLength){if(!isArray(list))throw new TypeError("list argument must be an Array of Buffers.");if(list.length===0){return new Buffer(0)}else if(list.length===1){return list[0]}var i;if(totalLength===undefined){totalLength=0;for(i=0;i<list.length;i++){totalLength+=list[i].length}}var buf=new Buffer(totalLength);var pos=0;for(i=0;i<list.length;i++){var item=list[i];item.copy(buf,pos);pos+=item.length}return buf};Buffer.byteLength=function byteLength(str,encoding){var ret;str=str+"";switch(encoding||"utf8"){case"ascii":case"binary":case"raw":ret=str.length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":ret=str.length*2;break;case"hex":ret=str.length>>>1;break;case"utf8":case"utf-8":ret=utf8ToBytes(str).length;break;case"base64":ret=base64ToBytes(str).length;break;default:ret=str.length}return ret};Buffer.prototype.length=undefined;Buffer.prototype.parent=undefined;Buffer.prototype.toString=function toString(encoding,start,end){var loweredCase=false;start=start>>>0;end=end===undefined||end===Infinity?this.length:end>>>0;if(!encoding)encoding="utf8";if(start<0)start=0;if(end>this.length)end=this.length;if(end<=start)return"";while(true){switch(encoding){case"hex":return hexSlice(this,start,end);case"utf8":case"utf-8":return utf8Slice(this,start,end);case"ascii":return asciiSlice(this,start,end);case"binary":return binarySlice(this,start,end);case"base64":return base64Slice(this,start,end);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return utf16leSlice(this,start,end);default:if(loweredCase)throw new TypeError("Unknown encoding: "+encoding);encoding=(encoding+"").toLowerCase();loweredCase=true}}};Buffer.prototype.equals=function equals(b){if(!Buffer.isBuffer(b))throw new TypeError("Argument must be a Buffer");if(this===b)return true;return Buffer.compare(this,b)===0};Buffer.prototype.inspect=function inspect(){var str="";var max=exports.INSPECT_MAX_BYTES;if(this.length>0){str=this.toString("hex",0,max).match(/.{2}/g).join(" ");if(this.length>max)str+=" ... "}return"<Buffer "+str+">"};Buffer.prototype.compare=function compare(b){if(!Buffer.isBuffer(b))throw new TypeError("Argument must be a Buffer");if(this===b)return 0;return Buffer.compare(this,b)};Buffer.prototype.indexOf=function indexOf(val,byteOffset){if(byteOffset>2147483647)byteOffset=2147483647;else if(byteOffset<-2147483648)byteOffset=-2147483648;byteOffset>>=0;if(this.length===0)return-1;if(byteOffset>=this.length)return-1;if(byteOffset<0)byteOffset=Math.max(this.length+byteOffset,0);if(typeof val==="string"){if(val.length===0)return-1;return String.prototype.indexOf.call(this,val,byteOffset)}if(Buffer.isBuffer(val)){return arrayIndexOf(this,val,byteOffset)}if(typeof val==="number"){if(Buffer.TYPED_ARRAY_SUPPORT&&Uint8Array.prototype.indexOf==="function"){return Uint8Array.prototype.indexOf.call(this,val,byteOffset)}return arrayIndexOf(this,[val],byteOffset)}function arrayIndexOf(arr,val,byteOffset){var foundIndex=-1;for(var i=0;byteOffset+i<arr.length;i++){if(arr[byteOffset+i]===val[foundIndex===-1?0:i-foundIndex]){if(foundIndex===-1)foundIndex=i;if(i-foundIndex+1===val.length)return byteOffset+foundIndex}else{foundIndex=-1}}return-1}throw new TypeError("val must be string, number or Buffer")};Buffer.prototype.get=function get(offset){console.log(".get() is deprecated. Access using array indexes instead.");return this.readUInt8(offset)};Buffer.prototype.set=function set(v,offset){console.log(".set() is deprecated. Access using array indexes instead.");return this.writeUInt8(v,offset)};function hexWrite(buf,string,offset,length){offset=Number(offset)||0;var remaining=buf.length-offset;if(!length){length=remaining}else{length=Number(length);if(length>remaining){length=remaining}}var strLen=string.length;if(strLen%2!==0)throw new Error("Invalid hex string");if(length>strLen/2){length=strLen/2}for(var i=0;i<length;i++){var parsed=parseInt(string.substr(i*2,2),16);if(isNaN(parsed))throw new Error("Invalid hex string");buf[offset+i]=parsed}return i}function utf8Write(buf,string,offset,length){var charsWritten=blitBuffer(utf8ToBytes(string,buf.length-offset),buf,offset,length);return charsWritten}function asciiWrite(buf,string,offset,length){var charsWritten=blitBuffer(asciiToBytes(string),buf,offset,length);return charsWritten}function binaryWrite(buf,string,offset,length){return asciiWrite(buf,string,offset,length)}function base64Write(buf,string,offset,length){var charsWritten=blitBuffer(base64ToBytes(string),buf,offset,length);return charsWritten}function utf16leWrite(buf,string,offset,length){var charsWritten=blitBuffer(utf16leToBytes(string,buf.length-offset),buf,offset,length);return charsWritten}Buffer.prototype.write=function write(string,offset,length,encoding){if(isFinite(offset)){if(!isFinite(length)){encoding=length;length=undefined}}else{var swap=encoding;encoding=offset;offset=length;length=swap}offset=Number(offset)||0;if(length<0||offset<0||offset>this.length){throw new RangeError("attempt to write outside buffer bounds")}var remaining=this.length-offset;if(!length){length=remaining}else{length=Number(length);if(length>remaining){length=remaining}}encoding=String(encoding||"utf8").toLowerCase();var ret;switch(encoding){case"hex":ret=hexWrite(this,string,offset,length);break;case"utf8":case"utf-8":ret=utf8Write(this,string,offset,length);break;case"ascii":ret=asciiWrite(this,string,offset,length);break;case"binary":ret=binaryWrite(this,string,offset,length);break;case"base64":ret=base64Write(this,string,offset,length);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":ret=utf16leWrite(this,string,offset,length);break;default:throw new TypeError("Unknown encoding: "+encoding)}return ret};Buffer.prototype.toJSON=function toJSON(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function base64Slice(buf,start,end){if(start===0&&end===buf.length){return base64.fromByteArray(buf)}else{return base64.fromByteArray(buf.slice(start,end))}}function utf8Slice(buf,start,end){var res="";var tmp="";end=Math.min(buf.length,end);for(var i=start;i<end;i++){if(buf[i]<=127){res+=decodeUtf8Char(tmp)+String.fromCharCode(buf[i]);tmp=""}else{tmp+="%"+buf[i].toString(16)}}return res+decodeUtf8Char(tmp)}function asciiSlice(buf,start,end){var ret="";end=Math.min(buf.length,end);for(var i=start;i<end;i++){ret+=String.fromCharCode(buf[i]&127)}return ret}function binarySlice(buf,start,end){var ret="";end=Math.min(buf.length,end);for(var i=start;i<end;i++){ret+=String.fromCharCode(buf[i])}return ret}function hexSlice(buf,start,end){var len=buf.length;if(!start||start<0)start=0;if(!end||end<0||end>len)end=len;var out="";for(var i=start;i<end;i++){out+=toHex(buf[i])}return out}function utf16leSlice(buf,start,end){var bytes=buf.slice(start,end);var res="";for(var i=0;i<bytes.length;i+=2){res+=String.fromCharCode(bytes[i]+bytes[i+1]*256)}return res}Buffer.prototype.slice=function slice(start,end){var len=this.length;start=~~start;end=end===undefined?len:~~end;if(start<0){start+=len;if(start<0)start=0}else if(start>len){start=len}if(end<0){end+=len;if(end<0)end=0}else if(end>len){end=len}if(end<start)end=start;var newBuf;if(Buffer.TYPED_ARRAY_SUPPORT){newBuf=Buffer._augment(this.subarray(start,end))}else{var sliceLen=end-start;newBuf=new Buffer(sliceLen,undefined);for(var i=0;i<sliceLen;i++){newBuf[i]=this[i+start]}}if(newBuf.length)newBuf.parent=this.parent||this;return newBuf};function checkOffset(offset,ext,length){if(offset%1!==0||offset<0)throw new RangeError("offset is not uint");if(offset+ext>length)throw new RangeError("Trying to access beyond buffer length")}Buffer.prototype.readUIntLE=function readUIntLE(offset,byteLength,noAssert){offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i<byteLength&&(mul*=256)){val+=this[offset+i]*mul}return val};Buffer.prototype.readUIntBE=function readUIntBE(offset,byteLength,noAssert){offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert){checkOffset(offset,byteLength,this.length)}var val=this[offset+--byteLength];var mul=1;while(byteLength>0&&(mul*=256)){val+=this[offset+--byteLength]*mul}return val};Buffer.prototype.readUInt8=function readUInt8(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);return this[offset]};Buffer.prototype.readUInt16LE=function readUInt16LE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset]|this[offset+1]<<8};Buffer.prototype.readUInt16BE=function readUInt16BE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset]<<8|this[offset+1]};Buffer.prototype.readUInt32LE=function readUInt32LE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return(this[offset]|this[offset+1]<<8|this[offset+2]<<16)+this[offset+3]*16777216};Buffer.prototype.readUInt32BE=function readUInt32BE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]*16777216+(this[offset+1]<<16|this[offset+2]<<8|this[offset+3])};Buffer.prototype.readIntLE=function readIntLE(offset,byteLength,noAssert){offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i<byteLength&&(mul*=256)){val+=this[offset+i]*mul}mul*=128;if(val>=mul)val-=Math.pow(2,8*byteLength);return val};Buffer.prototype.readIntBE=function readIntBE(offset,byteLength,noAssert){offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert)checkOffset(offset,byteLength,this.length);var i=byteLength;var mul=1;var val=this[offset+--i];while(i>0&&(mul*=256)){val+=this[offset+--i]*mul}mul*=128;if(val>=mul)val-=Math.pow(2,8*byteLength);return val};Buffer.prototype.readInt8=function readInt8(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);if(!(this[offset]&128))return this[offset];return(255-this[offset]+1)*-1};Buffer.prototype.readInt16LE=function readInt16LE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset]|this[offset+1]<<8;return val&32768?val|4294901760:val};Buffer.prototype.readInt16BE=function readInt16BE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset+1]|this[offset]<<8;return val&32768?val|4294901760:val};Buffer.prototype.readInt32LE=function readInt32LE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]|this[offset+1]<<8|this[offset+2]<<16|this[offset+3]<<24};Buffer.prototype.readInt32BE=function readInt32BE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]<<24|this[offset+1]<<16|this[offset+2]<<8|this[offset+3]};Buffer.prototype.readFloatLE=function readFloatLE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,true,23,4)};Buffer.prototype.readFloatBE=function readFloatBE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,false,23,4)};Buffer.prototype.readDoubleLE=function readDoubleLE(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,true,52,8)};Buffer.prototype.readDoubleBE=function readDoubleBE(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,false,52,8)};function checkInt(buf,value,offset,ext,max,min){if(!Buffer.isBuffer(buf))throw new TypeError("buffer must be a Buffer instance");if(value>max||value<min)throw new RangeError("value is out of bounds");if(offset+ext>buf.length)throw new RangeError("index out of range")}Buffer.prototype.writeUIntLE=function writeUIntLE(value,offset,byteLength,noAssert){value=+value;offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert)checkInt(this,value,offset,byteLength,Math.pow(2,8*byteLength),0);var mul=1;var i=0;this[offset]=value&255;while(++i<byteLength&&(mul*=256)){this[offset+i]=value/mul>>>0&255}return offset+byteLength};Buffer.prototype.writeUIntBE=function writeUIntBE(value,offset,byteLength,noAssert){value=+value;offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert)checkInt(this,value,offset,byteLength,Math.pow(2,8*byteLength),0);var i=byteLength-1;var mul=1;this[offset+i]=value&255;while(--i>=0&&(mul*=256)){this[offset+i]=value/mul>>>0&255}return offset+byteLength};Buffer.prototype.writeUInt8=function writeUInt8(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,1,255,0);if(!Buffer.TYPED_ARRAY_SUPPORT)value=Math.floor(value);this[offset]=value;return offset+1};function objectWriteUInt16(buf,value,offset,littleEndian){if(value<0)value=65535+value+1;for(var i=0,j=Math.min(buf.length-offset,2);i<j;i++){buf[offset+i]=(value&255<<8*(littleEndian?i:1-i))>>>(littleEndian?i:1-i)*8}}Buffer.prototype.writeUInt16LE=function writeUInt16LE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,2,65535,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value;this[offset+1]=value>>>8}else{objectWriteUInt16(this,value,offset,true)}return offset+2};Buffer.prototype.writeUInt16BE=function writeUInt16BE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,2,65535,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>8;this[offset+1]=value}else{objectWriteUInt16(this,value,offset,false)}return offset+2};function objectWriteUInt32(buf,value,offset,littleEndian){if(value<0)value=4294967295+value+1;for(var i=0,j=Math.min(buf.length-offset,4);i<j;i++){buf[offset+i]=value>>>(littleEndian?i:3-i)*8&255}}Buffer.prototype.writeUInt32LE=function writeUInt32LE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,4,4294967295,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset+3]=value>>>24;this[offset+2]=value>>>16;this[offset+1]=value>>>8;this[offset]=value}else{objectWriteUInt32(this,value,offset,true)}return offset+4};Buffer.prototype.writeUInt32BE=function writeUInt32BE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,4,4294967295,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=value}else{objectWriteUInt32(this,value,offset,false)}return offset+4};Buffer.prototype.writeIntLE=function writeIntLE(value,offset,byteLength,noAssert){value=+value;offset=offset>>>0;if(!noAssert){checkInt(this,value,offset,byteLength,Math.pow(2,8*byteLength-1)-1,-Math.pow(2,8*byteLength-1))}var i=0;var mul=1;var sub=value<0?1:0;this[offset]=value&255;while(++i<byteLength&&(mul*=256)){this[offset+i]=(value/mul>>0)-sub&255}return offset+byteLength};Buffer.prototype.writeIntBE=function writeIntBE(value,offset,byteLength,noAssert){value=+value;offset=offset>>>0;if(!noAssert){checkInt(this,value,offset,byteLength,Math.pow(2,8*byteLength-1)-1,-Math.pow(2,8*byteLength-1))}var i=byteLength-1;var mul=1;var sub=value<0?1:0;this[offset+i]=value&255;while(--i>=0&&(mul*=256)){this[offset+i]=(value/mul>>0)-sub&255}return offset+byteLength};Buffer.prototype.writeInt8=function writeInt8(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,1,127,-128);if(!Buffer.TYPED_ARRAY_SUPPORT)value=Math.floor(value);if(value<0)value=255+value+1;this[offset]=value;return offset+1};Buffer.prototype.writeInt16LE=function writeInt16LE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,2,32767,-32768);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value;this[offset+1]=value>>>8}else{objectWriteUInt16(this,value,offset,true)}return offset+2};Buffer.prototype.writeInt16BE=function writeInt16BE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,2,32767,-32768);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>8;this[offset+1]=value}else{objectWriteUInt16(this,value,offset,false)}return offset+2};Buffer.prototype.writeInt32LE=function writeInt32LE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,4,2147483647,-2147483648);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value;this[offset+1]=value>>>8;this[offset+2]=value>>>16;this[offset+3]=value>>>24}else{objectWriteUInt32(this,value,offset,true)}return offset+4};Buffer.prototype.writeInt32BE=function writeInt32BE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,4,2147483647,-2147483648);if(value<0)value=4294967295+value+1;if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=value}else{objectWriteUInt32(this,value,offset,false)}return offset+4};function checkIEEE754(buf,value,offset,ext,max,min){if(value>max||value<min)throw new RangeError("value is out of bounds");if(offset+ext>buf.length)throw new RangeError("index out of range");if(offset<0)throw new RangeError("index out of range")}function writeFloat(buf,value,offset,littleEndian,noAssert){if(!noAssert){checkIEEE754(buf,value,offset,4,3.4028234663852886e38,-3.4028234663852886e38)}ieee754.write(buf,value,offset,littleEndian,23,4);return offset+4}Buffer.prototype.writeFloatLE=function writeFloatLE(value,offset,noAssert){return writeFloat(this,value,offset,true,noAssert)};Buffer.prototype.writeFloatBE=function writeFloatBE(value,offset,noAssert){return writeFloat(this,value,offset,false,noAssert)};function writeDouble(buf,value,offset,littleEndian,noAssert){if(!noAssert){checkIEEE754(buf,value,offset,8,1.7976931348623157e308,-1.7976931348623157e308)}ieee754.write(buf,value,offset,littleEndian,52,8);return offset+8}Buffer.prototype.writeDoubleLE=function writeDoubleLE(value,offset,noAssert){return writeDouble(this,value,offset,true,noAssert)};Buffer.prototype.writeDoubleBE=function writeDoubleBE(value,offset,noAssert){return writeDouble(this,value,offset,false,noAssert)};Buffer.prototype.copy=function copy(target,target_start,start,end){if(!start)start=0;if(!end&&end!==0)end=this.length;if(target_start>=target.length)target_start=target.length;if(!target_start)target_start=0;if(end>0&&end<start)end=start;if(end===start)return 0;if(target.length===0||this.length===0)return 0;if(target_start<0){throw new RangeError("targetStart out of bounds")}if(start<0||start>=this.length)throw new RangeError("sourceStart out of bounds");if(end<0)throw new RangeError("sourceEnd out of bounds");if(end>this.length)end=this.length;if(target.length-target_start<end-start){end=target.length-target_start+start}var len=end-start;if(len<1e3||!Buffer.TYPED_ARRAY_SUPPORT){for(var i=0;i<len;i++){target[i+target_start]=this[i+start]}}else{target._set(this.subarray(start,start+len),target_start)}return len};Buffer.prototype.fill=function fill(value,start,end){if(!value)value=0;if(!start)start=0;if(!end)end=this.length;if(end<start)throw new RangeError("end < start");if(end===start)return;if(this.length===0)return;if(start<0||start>=this.length)throw new RangeError("start out of bounds");
if(end<0||end>this.length)throw new RangeError("end out of bounds");var i;if(typeof value==="number"){for(i=start;i<end;i++){this[i]=value}}else{var bytes=utf8ToBytes(value.toString());var len=bytes.length;for(i=start;i<end;i++){this[i]=bytes[i%len]}}return this};Buffer.prototype.toArrayBuffer=function toArrayBuffer(){if(typeof Uint8Array!=="undefined"){if(Buffer.TYPED_ARRAY_SUPPORT){return new Buffer(this).buffer}else{var buf=new Uint8Array(this.length);for(var i=0,len=buf.length;i<len;i+=1){buf[i]=this[i]}return buf.buffer}}else{throw new TypeError("Buffer.toArrayBuffer not supported in this browser")}};var BP=Buffer.prototype;Buffer._augment=function _augment(arr){arr.constructor=Buffer;arr._isBuffer=true;arr._set=arr.set;arr.get=BP.get;arr.set=BP.set;arr.write=BP.write;arr.toString=BP.toString;arr.toLocaleString=BP.toString;arr.toJSON=BP.toJSON;arr.equals=BP.equals;arr.compare=BP.compare;arr.indexOf=BP.indexOf;arr.copy=BP.copy;arr.slice=BP.slice;arr.readUIntLE=BP.readUIntLE;arr.readUIntBE=BP.readUIntBE;arr.readUInt8=BP.readUInt8;arr.readUInt16LE=BP.readUInt16LE;arr.readUInt16BE=BP.readUInt16BE;arr.readUInt32LE=BP.readUInt32LE;arr.readUInt32BE=BP.readUInt32BE;arr.readIntLE=BP.readIntLE;arr.readIntBE=BP.readIntBE;arr.readInt8=BP.readInt8;arr.readInt16LE=BP.readInt16LE;arr.readInt16BE=BP.readInt16BE;arr.readInt32LE=BP.readInt32LE;arr.readInt32BE=BP.readInt32BE;arr.readFloatLE=BP.readFloatLE;arr.readFloatBE=BP.readFloatBE;arr.readDoubleLE=BP.readDoubleLE;arr.readDoubleBE=BP.readDoubleBE;arr.writeUInt8=BP.writeUInt8;arr.writeUIntLE=BP.writeUIntLE;arr.writeUIntBE=BP.writeUIntBE;arr.writeUInt16LE=BP.writeUInt16LE;arr.writeUInt16BE=BP.writeUInt16BE;arr.writeUInt32LE=BP.writeUInt32LE;arr.writeUInt32BE=BP.writeUInt32BE;arr.writeIntLE=BP.writeIntLE;arr.writeIntBE=BP.writeIntBE;arr.writeInt8=BP.writeInt8;arr.writeInt16LE=BP.writeInt16LE;arr.writeInt16BE=BP.writeInt16BE;arr.writeInt32LE=BP.writeInt32LE;arr.writeInt32BE=BP.writeInt32BE;arr.writeFloatLE=BP.writeFloatLE;arr.writeFloatBE=BP.writeFloatBE;arr.writeDoubleLE=BP.writeDoubleLE;arr.writeDoubleBE=BP.writeDoubleBE;arr.fill=BP.fill;arr.inspect=BP.inspect;arr.toArrayBuffer=BP.toArrayBuffer;return arr};var INVALID_BASE64_RE=/[^+\/0-9A-z\-]/g;function base64clean(str){str=stringtrim(str).replace(INVALID_BASE64_RE,"");if(str.length<2)return"";while(str.length%4!==0){str=str+"="}return str}function stringtrim(str){if(str.trim)return str.trim();return str.replace(/^\s+|\s+$/g,"")}function isArrayish(subject){return isArray(subject)||Buffer.isBuffer(subject)||subject&&typeof subject==="object"&&typeof subject.length==="number"}function toHex(n){if(n<16)return"0"+n.toString(16);return n.toString(16)}function utf8ToBytes(string,units){units=units||Infinity;var codePoint;var length=string.length;var leadSurrogate=null;var bytes=[];var i=0;for(;i<length;i++){codePoint=string.charCodeAt(i);if(codePoint>55295&&codePoint<57344){if(leadSurrogate){if(codePoint<56320){if((units-=3)>-1)bytes.push(239,191,189);leadSurrogate=codePoint;continue}else{codePoint=leadSurrogate-55296<<10|codePoint-56320|65536;leadSurrogate=null}}else{if(codePoint>56319){if((units-=3)>-1)bytes.push(239,191,189);continue}else if(i+1===length){if((units-=3)>-1)bytes.push(239,191,189);continue}else{leadSurrogate=codePoint;continue}}}else if(leadSurrogate){if((units-=3)>-1)bytes.push(239,191,189);leadSurrogate=null}if(codePoint<128){if((units-=1)<0)break;bytes.push(codePoint)}else if(codePoint<2048){if((units-=2)<0)break;bytes.push(codePoint>>6|192,codePoint&63|128)}else if(codePoint<65536){if((units-=3)<0)break;bytes.push(codePoint>>12|224,codePoint>>6&63|128,codePoint&63|128)}else if(codePoint<2097152){if((units-=4)<0)break;bytes.push(codePoint>>18|240,codePoint>>12&63|128,codePoint>>6&63|128,codePoint&63|128)}else{throw new Error("Invalid code point")}}return bytes}function asciiToBytes(str){var byteArray=[];for(var i=0;i<str.length;i++){byteArray.push(str.charCodeAt(i)&255)}return byteArray}function utf16leToBytes(str,units){var c,hi,lo;var byteArray=[];for(var i=0;i<str.length;i++){if((units-=2)<0)break;c=str.charCodeAt(i);hi=c>>8;lo=c%256;byteArray.push(lo);byteArray.push(hi)}return byteArray}function base64ToBytes(str){return base64.toByteArray(base64clean(str))}function blitBuffer(src,dst,offset,length){for(var i=0;i<length;i++){if(i+offset>=dst.length||i>=src.length)break;dst[i+offset]=src[i]}return i}function decodeUtf8Char(str){try{return decodeURIComponent(str)}catch(err){return String.fromCharCode(65533)}}}).call(exports,__webpack_require__(7).Buffer)},function(module,exports,__webpack_require__){"use strict";function isBMP(buffer){return"BM"===buffer.toString("ascii",0,2)}function calculate(buffer){return{width:buffer.readUInt32LE(18),height:buffer.readUInt32LE(22)}}module.exports={detect:isBMP,calculate:calculate}},function(module,exports,__webpack_require__){"use strict";var gifRegexp=/^GIF8[7,9]a/;function isGIF(buffer){var signature=buffer.toString("ascii",0,6);return gifRegexp.test(signature)}function calculate(buffer){return{width:buffer.readUInt16LE(6),height:buffer.readUInt16LE(8)}}module.exports={detect:isGIF,calculate:calculate}},function(module,exports,__webpack_require__){"use strict";var validJFIFMarkers={ffdb:"0001010101",ffe0:"4a46494600",ffe1:"4578696600",ffe2:"4943435f50",ffe3:"",ffe8:"5350494646",ffec:"4475636b79",ffed:"50686f746f",ffee:"41646f6265"};var red=["[31m","[39m"];function isJPG(buffer){var SOIMarker=buffer.toString("hex",0,2);var JFIFMarker=buffer.toString("hex",2,4);if("ffd8"!==SOIMarker){return false}var got=buffer.toString("hex",6,11);var expected=JFIFMarker&&validJFIFMarkers[JFIFMarker];if(expected===""){console.warn(red[0]+"this looks like a unrecognised jpeg\n"+"please report the issue here\n"+red[1],"	https://github.com/netroy/image-size/issues/new\n");return false}return got===expected||JFIFMarker==="ffdb"}function extractSize(buffer,i){return{height:buffer.readUInt16BE(i),width:buffer.readUInt16BE(i+2)}}function validateBuffer(buffer,i){if(i>buffer.length){throw new TypeError("Corrupt JPG, exceeded buffer limits")}if(buffer[i]!==255){throw new TypeError("Invalid JPG, marker table corrupted")}}function calculate(buffer){buffer=buffer.slice(4);var i,next;while(buffer.length){i=buffer.readUInt16BE(0);validateBuffer(buffer,i);next=buffer[i+1];if(next===192||next===194){return extractSize(buffer,i+5)}buffer=buffer.slice(i+2)}throw new TypeError("Invalid JPG, no size found")}module.exports={detect:isJPG,calculate:calculate}},function(module,exports,__webpack_require__){"use strict";var pngSignature="PNG\r\n\n";function isPNG(buffer){if(pngSignature===buffer.toString("ascii",1,8)){if("IHDR"!==buffer.toString("ascii",12,16)){throw new TypeError("invalid png")}return true}}function calculate(buffer){return{width:buffer.readUInt32BE(16),height:buffer.readUInt32BE(20)}}module.exports={detect:isPNG,calculate:calculate}},function(module,exports,__webpack_require__){"use strict";function isPSD(buffer){return"8BPS"===buffer.toString("ascii",0,4)}function calculate(buffer){return{width:buffer.readUInt32BE(18),height:buffer.readUInt32BE(14)}}module.exports={detect:isPSD,calculate:calculate}},function(module,exports,__webpack_require__){"use strict";var svgReg=/<svg[^>]+[^>]*>/;function isSVG(buffer){return svgReg.test(buffer)}var extractorRegExps={root:/<svg [^>]+>/,width:/(^|\s)width\s*=\s*"(.+?)"/i,height:/(^|\s)height\s*=\s*"(.+?)"/i,viewbox:/(^|\s)viewbox\s*=\s*"(.+?)"/i};function getRatio(viewbox){var ratio=1;if(viewbox&&viewbox[2]){var dim=viewbox[2].split(/\s/g);if(dim.length===4){dim=dim.map(function(i){return parseInt(i,10)});ratio=(dim[2]-dim[0])/(dim[3]-dim[1])}}return ratio}function parse(buffer){var body=buffer.toString().replace(/[\r\n\s]+/g," ");var section=body.match(extractorRegExps.root);var root=section&&section[0];if(root){var width=root.match(extractorRegExps.width);var height=root.match(extractorRegExps.height);var viewbox=root.match(extractorRegExps.viewbox);var ratio=getRatio(viewbox);return{width:parseInt(width&&width[2],10)||0,height:parseInt(height&&height[2],10)||0,ratio:ratio}}}function calculate(buffer){var parsed=parse(buffer);var width=parsed.width;var height=parsed.height;var ratio=parsed.ratio;if(width&&height){return{width:width,height:height}}else{if(width){return{width:width,height:Math.floor(width/ratio)}}else if(height){return{width:Math.floor(height*ratio),height:height}}else{throw new TypeError("invalid svg")}}}module.exports={detect:isSVG,calculate:calculate}},function(module,exports,__webpack_require__){(function(Buffer){"use strict";var fs=__webpack_require__(16);var readUInt=__webpack_require__(17);function isTIFF(buffer){var hex4=buffer.toString("hex",0,4);return"49492a00"===hex4||"4d4d002a"===hex4}function readIFD(buffer,filepath,isBigEndian){var ifdOffset=readUInt(buffer,32,4,isBigEndian);var bufferSize=1024;var fileSize=fs.statSync(filepath).size;if(ifdOffset+bufferSize>fileSize){bufferSize=fileSize-ifdOffset-10}var endBuffer=new Buffer(bufferSize);var descriptor=fs.openSync(filepath,"r");fs.readSync(descriptor,endBuffer,0,bufferSize,ifdOffset);var ifdBuffer=endBuffer.slice(2);return ifdBuffer}function readValue(buffer,isBigEndian){var low=readUInt(buffer,16,8,isBigEndian);var high=readUInt(buffer,16,10,isBigEndian);return(high<<16)+low}function nextTag(buffer){if(buffer.length>24){return buffer.slice(12)}}function extractTags(buffer,isBigEndian){var tags={};var code,type,length;while(buffer&&buffer.length){code=readUInt(buffer,16,0,isBigEndian);type=readUInt(buffer,16,2,isBigEndian);length=readUInt(buffer,32,4,isBigEndian);if(code===0){break}else{if(length===1&&type===3){tags[code]=readValue(buffer,isBigEndian)}buffer=nextTag(buffer)}}return tags}function determineEndianness(buffer){var signature=buffer.toString("ascii",0,2);if("II"===signature){return"LE"}else if("MM"===signature){return"BE"}}function calculate(buffer,filepath){if(!filepath){throw new TypeError("Tiff doesn't support buffer")}var isBigEndian=determineEndianness(buffer)==="BE";var ifdBuffer=readIFD(buffer,filepath,isBigEndian);var tags=extractTags(ifdBuffer,isBigEndian);var width=tags[256];var height=tags[257];if(!width||!height){throw new TypeError("Invalid Tiff, missing tags")}return{width:width,height:height}}module.exports={detect:isTIFF,calculate:calculate}}).call(exports,__webpack_require__(7).Buffer)},function(module,exports,__webpack_require__){"use strict";function isWebP(buffer){var riffHeader="RIFF"===buffer.toString("ascii",0,4);var webpHeader="WEBP"===buffer.toString("ascii",8,12);var vp8Header="VP8"===buffer.toString("ascii",12,15);return riffHeader&&webpHeader&&vp8Header}function calculate(buffer){var chunkHeader=buffer.toString("ascii",12,16);buffer=buffer.slice(20,30);if(chunkHeader==="VP8 "&&buffer[0]!==47){return calculateLossy(buffer)}var signature=buffer.toString("hex",3,6);if(chunkHeader==="VP8L"&&signature!=="9d012a"){return calculateLossless(buffer)}return false}function calculateLossless(buffer){return{width:1+((buffer[2]&63)<<8|buffer[1]),height:1+((buffer[4]&15)<<10|buffer[3]<<2|(buffer[2]&192)>>6)}}function calculateLossy(buffer){return{width:buffer.readInt16LE(6)&16383,height:buffer.readInt16LE(8)&16383}}module.exports={detect:isWebP,calculate:calculate}},function(module,exports,__webpack_require__){},function(module,exports,__webpack_require__){"use strict";module.exports=function(buffer,bits,offset,isBigEndian){offset=offset||0;var endian=!!isBigEndian?"BE":"LE";var method=buffer["readUInt"+bits+endian];return method.call(buffer,offset)}},function(module,exports,__webpack_require__){var process=module.exports={};var queue=[];var draining=false;function drainQueue(){if(draining){return}draining=true;var currentQueue;var len=queue.length;while(len){currentQueue=queue;queue=[];var i=-1;while(++i<len){currentQueue[i]()}len=queue.length}draining=false}process.nextTick=function(fun){queue.push(fun);if(!draining){setTimeout(drainQueue,0)}};process.title="browser";process.browser=true;process.env={};process.argv=[];process.version="";process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")};process.umask=function(){return 0}},function(module,exports,__webpack_require__){exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m,eLen=nBytes*8-mLen-1,eMax=(1<<eLen)-1,eBias=eMax>>1,nBits=-7,i=isLE?nBytes-1:0,d=isLE?-1:1,s=buffer[offset+i];i+=d;e=s&(1<<-nBits)-1;s>>=-nBits;nBits+=eLen;for(;nBits>0;e=e*256+buffer[offset+i],i+=d,nBits-=8);m=e&(1<<-nBits)-1;e>>=-nBits;nBits+=mLen;for(;nBits>0;m=m*256+buffer[offset+i],i+=d,nBits-=8);if(e===0){e=1-eBias}else if(e===eMax){return m?NaN:(s?-1:1)*Infinity}else{m=m+Math.pow(2,mLen);e=e-eBias}return(s?-1:1)*m*Math.pow(2,e-mLen)};exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c,eLen=nBytes*8-mLen-1,eMax=(1<<eLen)-1,eBias=eMax>>1,rt=mLen===23?Math.pow(2,-24)-Math.pow(2,-77):0,i=isLE?0:nBytes-1,d=isLE?1:-1,s=value<0||value===0&&1/value<0?1:0;value=Math.abs(value);if(isNaN(value)||value===Infinity){m=isNaN(value)?1:0;e=eMax}else{e=Math.floor(Math.log(value)/Math.LN2);if(value*(c=Math.pow(2,-e))<1){e--;c*=2}if(e+eBias>=1){value+=rt/c}else{value+=rt*Math.pow(2,1-eBias)}if(value*c>=2){e++;c/=2}if(e+eBias>=eMax){m=0;e=eMax}else if(e+eBias>=1){m=(value*c-1)*Math.pow(2,mLen);e=e+eBias}else{m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen);e=0}}for(;mLen>=8;buffer[offset+i]=m&255,i+=d,m/=256,mLen-=8);e=e<<mLen|m;eLen+=mLen;for(;eLen>0;buffer[offset+i]=e&255,i+=d,e/=256,eLen-=8);buffer[offset+i-d]|=s*128}},function(module,exports,__webpack_require__){var isArray=Array.isArray;var str=Object.prototype.toString;module.exports=isArray||function(val){return!!val&&"[object Array]"==str.call(val)}},function(module,exports,__webpack_require__){var lookup="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";(function(exports){"use strict";var Arr=typeof Uint8Array!=="undefined"?Uint8Array:Array;var PLUS="+".charCodeAt(0);var SLASH="/".charCodeAt(0);var NUMBER="0".charCodeAt(0);var LOWER="a".charCodeAt(0);var UPPER="A".charCodeAt(0);var PLUS_URL_SAFE="-".charCodeAt(0);var SLASH_URL_SAFE="_".charCodeAt(0);function decode(elt){var code=elt.charCodeAt(0);if(code===PLUS||code===PLUS_URL_SAFE)return 62;if(code===SLASH||code===SLASH_URL_SAFE)return 63;if(code<NUMBER)return-1;if(code<NUMBER+10)return code-NUMBER+26+26;if(code<UPPER+26)return code-UPPER;if(code<LOWER+26)return code-LOWER+26}function b64ToByteArray(b64){var i,j,l,tmp,placeHolders,arr;if(b64.length%4>0){throw new Error("Invalid string. Length must be a multiple of 4")}var len=b64.length;placeHolders="="===b64.charAt(len-2)?2:"="===b64.charAt(len-1)?1:0;arr=new Arr(b64.length*3/4-placeHolders);l=placeHolders>0?b64.length-4:b64.length;var L=0;function push(v){arr[L++]=v}for(i=0,j=0;i<l;i+=4,j+=3){tmp=decode(b64.charAt(i))<<18|decode(b64.charAt(i+1))<<12|decode(b64.charAt(i+2))<<6|decode(b64.charAt(i+3));push((tmp&16711680)>>16);push((tmp&65280)>>8);push(tmp&255)}if(placeHolders===2){tmp=decode(b64.charAt(i))<<2|decode(b64.charAt(i+1))>>4;push(tmp&255)}else if(placeHolders===1){tmp=decode(b64.charAt(i))<<10|decode(b64.charAt(i+1))<<4|decode(b64.charAt(i+2))>>2;push(tmp>>8&255);push(tmp&255)}return arr}function uint8ToBase64(uint8){var i,extraBytes=uint8.length%3,output="",temp,length;function encode(num){return lookup.charAt(num)}function tripletToBase64(num){return encode(num>>18&63)+encode(num>>12&63)+encode(num>>6&63)+encode(num&63)}for(i=0,length=uint8.length-extraBytes;i<length;i+=3){temp=(uint8[i]<<16)+(uint8[i+1]<<8)+uint8[i+2];output+=tripletToBase64(temp)}switch(extraBytes){case 1:temp=uint8[uint8.length-1];output+=encode(temp>>2);output+=encode(temp<<4&63);output+="==";break;case 2:temp=(uint8[uint8.length-2]<<8)+uint8[uint8.length-1];output+=encode(temp>>10);output+=encode(temp>>4&63);output+=encode(temp<<2&63);output+="=";break}return output}exports.toByteArray=b64ToByteArray;exports.fromByteArray=uint8ToBase64})(false?this.base64js={}:exports)}])});;
/*! markdown-it-sub 1.0.0 https://github.com//markdown-it/markdown-it-sub @license MIT */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.markdownitSub=e()}}(function(){return function e(r,o,n){function t(i,u){if(!o[i]){if(!r[i]){var f="function"==typeof require&&require;if(!u&&f)return f(i,!0);if(s)return s(i,!0);var p=new Error("Cannot find module '"+i+"'");throw p.code="MODULE_NOT_FOUND",p}var a=o[i]={exports:{}};r[i][0].call(a.exports,function(e){var o=r[i][1][e];return t(o?o:e)},a,a.exports,e,r,o,n)}return o[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)t(n[i]);return t}({1:[function(e,r){"use strict";function o(e,r){var o,t,s,i=e.posMax,u=e.pos;if(126!==e.src.charCodeAt(u))return!1;if(r)return!1;if(u+2>=i)return!1;for(e.pos=u+1;e.pos<i;){if(126===e.src.charCodeAt(e.pos)){o=!0;break}e.md.inline.skipToken(e)}return o&&u+1!==e.pos?(t=e.src.slice(u+1,e.pos),t.match(/(^|[^\\])(\\\\)*\s/)?(e.pos=u,!1):(e.posMax=e.pos,e.pos=u+1,s=e.push("sub_open","sub",1),s.markup="~",s=e.push("text","",0),s.content=t.replace(n,"$1"),s=e.push("sub_close","sub",-1),s.markup="~",e.pos=e.posMax+1,e.posMax=i,!0)):(e.pos=u,!1)}var n=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;r.exports=function(e){e.inline.ruler.after("emphasis","sub",o)}},{}]},{},[1])(1)});;
/*! markdown-it-sup 1.0.0 https://github.com//markdown-it/markdown-it-sup @license MIT */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.markdownitSup=e()}}(function(){return function e(r,o,n){function t(i,p){if(!o[i]){if(!r[i]){var u="function"==typeof require&&require;if(!p&&u)return u(i,!0);if(s)return s(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var a=o[i]={exports:{}};r[i][0].call(a.exports,function(e){var o=r[i][1][e];return t(o?o:e)},a,a.exports,e,r,o,n)}return o[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)t(n[i]);return t}({1:[function(e,r){"use strict";function o(e,r){var o,t,s,i=e.posMax,p=e.pos;if(94!==e.src.charCodeAt(p))return!1;if(r)return!1;if(p+2>=i)return!1;for(e.pos=p+1;e.pos<i;){if(94===e.src.charCodeAt(e.pos)){o=!0;break}e.md.inline.skipToken(e)}return o&&p+1!==e.pos?(t=e.src.slice(p+1,e.pos),t.match(/(^|[^\\])(\\\\)*\s/)?(e.pos=p,!1):(e.posMax=e.pos,e.pos=p+1,s=e.push("sup_open","sup",1),s.markup="^",s=e.push("text","",0),s.content=t.replace(n,"$1"),s=e.push("sup_close","sup",-1),s.markup="^",e.pos=e.posMax+1,e.posMax=i,!0)):(e.pos=p,!1)}var n=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;r.exports=function(e){e.inline.ruler.after("emphasis","sup",o)}},{}]},{},[1])(1)});;
/*! markdown-it-task-lists 1.4.0 https://github.com/revin/markdown-it-task-lists#readme by  @license {ISC} */
!function(n){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.markdownitTaskLists=n()}}(function(){return function n(e,t,i){function r(c,f){if(!t[c]){if(!e[c]){var u="function"==typeof require&&require;if(!f&&u)return u(c,!0);if(o)return o(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var s=t[c]={exports:{}};e[c][0].call(s.exports,function(n){var t=e[c][1][n];return r(t?t:n)},s,s.exports,n,e,t,i)}return t[c].exports}for(var o="function"==typeof require&&require,c=0;c<i.length;c++)r(i[c]);return r}({1:[function(n,e,t){function i(n,e,t){var i=n.attrIndex(e),r=[e,t];0>i?n.attrPush(r):n.attrs[i]=r}function r(n,e){for(var t=n[e].level-1,i=e-1;i>=0;i--)if(n[i].level===t)return i;return-1}function o(n,e){return s(n[e])&&a(n[e-1])&&d(n[e-2])&&p(n[e])}function c(n,e){n.children.unshift(f(n,e)),n.children[1].content=n.children[1].content.slice(3),n.content=n.content.slice(3),x&&(n.children.unshift(u(e)),n.children.push(l(e)))}function f(n,e){var t=new e("html_inline","",0),i=h?' disabled="" ':"";return 0===n.content.indexOf("[ ]")?t.content='<input class="task-list-item-checkbox"'+i+'type="checkbox">':(0===n.content.indexOf("[x]")||0===n.content.indexOf("[X]"))&&(t.content='<input class="task-list-item-checkbox" checked=""'+i+'type="checkbox">'),t}function u(n){var e=new n("html_inline","",0);return e.content="<label>",e}function l(n){var e=new n("html_inline","",0);return e.content="</label>",e}function s(n){return"inline"===n.type}function a(n){return"paragraph_open"===n.type}function d(n){return"list_item_open"===n.type}function p(n){return 0===n.content.indexOf("[ ]")||0===n.content.indexOf("[x]")||0===n.content.indexOf("[X]")}var h=!0,x=!1;e.exports=function(n,e){e&&(h=!e.enabled,x=!!e.label),n.core.ruler.after("inline","github-task-lists",function(n){for(var e=n.tokens,t=2;t<e.length;t++)o(e,t)&&(c(e[t],n.Token),i(e[t-2],"class","task-list-item"),i(e[r(e,t-2)],"class","task-list"))})}},{}]},{},[1])(1)});
;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Stefan Goessner - 2017-18. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *  Modified by Le Tan for MathJax support in VNote.
 *  We mark all the formulas and enclose them with $ in class 'tex-to-render' for
 *  further processing by MathJax.
 *--------------------------------------------------------------------------------------------*/
'use strict';

function texmath(md, options) {
    let delimiters = ['dollars'];
    if (options && options.delimiters) {
        delimiters = options.delimiters;
    }

    for (let i = 0; i < delimiters.length; ++i) {
        let deli = delimiters[i];
        if (deli in texmath.rules) {
            for (let rule of texmath.rules[deli].inline) {
                md.inline.ruler.before('escape', rule.name, texmath.inline(rule));  // ! important
                md.renderer.rules[rule.name] = (tokens, idx) => rule.tmpl.replace(/\$1/,texmath.render(tokens[idx].content,false));
            }

            for (let rule of texmath.rules[deli].block) {
                md.block.ruler.before('fence', rule.name, texmath.block(rule));
                md.renderer.rules[rule.name] = (tokens, idx) => rule.tmpl.replace(/\$2/,tokens[idx].info)  // equation number
                                                                         .replace(/\$1/,texmath.render(tokens[idx].content,true));
            }
        }
    }
}

texmath.applyRule = function(rule, str, beg) {
    let pre, match, post;
    rule.rex.lastIndex = beg;
    pre = str.startsWith(rule.tag,beg) && (!rule.pre || rule.pre(str,beg));
    match = pre && rule.rex.exec(str);
    if (match) {
        match.lastIndex = rule.rex.lastIndex;
        post = !rule.post || rule.post(str, match.lastIndex-1);
    }
    rule.rex.lastIndex = 0;
    return post && match;
}

texmath.inline = (rule) =>
    function(state, silent) {
        let res = texmath.applyRule(rule, state.src, state.pos);
        if (res) {
            if (!silent) {
                let token = state.push(rule.name, 'math', 0);
                token.content = res[1];  // group 1 from regex ..
                token.markup = rule.tag;
            }
            state.pos = res.lastIndex;
        }
        return !!res;
    }

texmath.block = (rule) =>
    function(state, begLine, endLine, silent) {
        let res = texmath.applyRule(rule, state.src, state.bMarks[begLine] + state.tShift[begLine]);
        if (res) {
            if (!silent) {
                let token = state.push(rule.name, 'math', 0);
                token.block = true;
                token.content = res[1];
                token.info = res[2];
                token.markup = rule.tag;
            }
            for (let line=begLine, endpos=res.lastIndex-1; line < endLine; line++)
                if (endpos >= state.bMarks[line] && endpos <= state.eMarks[line]) { // line for end of block math found ...
                    state.line = line+1;
                    break;
                }
            state.pos = res.lastIndex;
        }
        return !!res;
    }

texmath.render = function(tex, isblock) {
    let res;
    if (isblock) {
        res = '$$$$' + tex + '$$$$';
    } else {
        res = '$$' + tex + '$$';
    }

    return res;
}

texmath.$_pre = (str,beg) => {
    let prv = beg > 0 ? str[beg-1].charCodeAt(0) : false;
    return !prv || prv !== 0x5c                // no backslash,
                && (prv < 0x30 || prv > 0x39); // no decimal digit .. before opening '$'
}
texmath.$_post = (str,end) => {
    let nxt = str[end+1] && str[end+1].charCodeAt(0);
    return !nxt || nxt < 0x30 || nxt > 0x39;   // no decimal digit .. after closing '$'
}

texmath.rules = {
    brackets: {
        inline: [
            {   name: 'math_inline',
                rex: /\\\((.+?)\\\)/gy,
                tmpl: '<x-eq class="tex-to-render">$1</x-eq>',
                tag: '\\('
            }
        ],
        block: [
            {   name: 'math_block_eqno',
                rex: /\\\[(.+?)\\\]\s*?\(([^)$\r\n]+?)\)\s*$/gmy,
                tmpl: '<x-eqs><x-eqn class="tex-to-render">$1</x-eqn><span>($2)</span></x-eqs>',
                tag: '\\['
            },
            {   name: 'math_block',
                rex: /\\\[(.+?)\\\]\s*$/gmy,
                tmpl: '<x-eqn class="tex-to-render">$1</x-eqn>',
                tag: '\\['
            }
        ]
    },
    gitlab: {
        inline: [
            {   name: 'math_inline',
                rex: /\$`(.+?)`\$/gy,
                tmpl: '<x-eq class="tex-to-render">$1</x-eq>',
                tag: '$`'
            }
        ],
        block: [
            {   name: 'math_block_eqno',
                rex: /`{3}math\s+?([^`]+?)\s+?`{3}\s*?\(([^)$\r\n]+?)\)\s*$/gmy,
                tmpl: '<x-eqs><x-eqn class="tex-to-render">$1</x-eqn><span>($2)</span></x-eqs>',
                tag: '```math'
            },
            {   name: 'math_block',
                rex: /`{3}math\s+?([^`]+?)\s+?`{3}\s*$/gmy,
                tmpl: '<x-eqn class="tex-to-render">$1</x-eqn>',
                tag: '```math'
            }
        ]
    },
    dollars: {
        inline: [
            {   name: 'math_inline',
                rex: /\$(\S[^$\r\n]*?[^\s\\]{1}?)\$/gy,
                tmpl: '<x-eq class="tex-to-render">$1</x-eq>',
                tag: '$',
                pre: texmath.$_pre,
                post: texmath.$_post
            },
            {   name: 'math_single',
                rex: /\$([^$\s\\]{1}?)\$/gy,
                tmpl: '<x-eq class="tex-to-render">$1</x-eq>',
                tag: '$',
                pre: texmath.$_pre,
                post: texmath.$_post
            }
        ],
        block: [
            {   name: 'math_block_eqno',
                rex: /\${2}((?:[^$]|\$(?!\$))*?)\${2}\s*?\(([^)$\r\n]+?)\)\s*$/gmy,
                tmpl: '<x-eqs><x-eqn class="tex-to-render">$1</x-eqn><span>($2)</span></x-eqs>',
                tag: '$$'
            },
            {   name: 'math_block',
                rex: /\${2}((?:[^$]|\$(?!\$))*?)\${2}\s*$/gmy,
                tmpl: '<x-eqn class="tex-to-render">$1</x-eqn>',
                tag: '$$'
            }
        ]
    },
    raw: {
        inline: [],
        block: [
            {
                name: 'math_block',
                rex: /(\\begin\s*\{([^{}\s\r\n]+)\}(?:[^\\]|\\(?!end\s*\{\2\}))*\\end\s*\{\2\})\s*$/gmy,
                tmpl: '<x-eqn class="tex-to-render">$1</x-eqn>',
                tag: '\\begin'
            }
        ]
    }
};

if (typeof module === "object" && module.exports)
   module.exports = texmath;
;
/*! markdown-it 8.3.1 https://github.com//markdown-it/markdown-it @license MIT */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.markdownit=e()}}(function(){var e;return function e(r,t,n){function s(i,a){if(!t[i]){if(!r[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var u=t[i]={exports:{}};r[i][0].call(u.exports,function(e){var t=r[i][1][e];return s(t?t:e)},u,u.exports,e,r,t,n)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)s(n[i]);return s}({1:[function(e,r,t){"use strict";r.exports=e("entities/maps/entities.json")},{"entities/maps/entities.json":52}],2:[function(e,r,t){"use strict";r.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},{}],3:[function(e,r,t){"use strict";var n="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",s="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",o=new RegExp("^(?:"+n+"|"+s+"|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),i=new RegExp("^(?:"+n+"|"+s+")");r.exports.HTML_TAG_RE=o,r.exports.HTML_OPEN_CLOSE_TAG_RE=i},{}],4:[function(e,r,t){"use strict";function n(e){return Object.prototype.toString.call(e)}function s(e){return"[object String]"===n(e)}function o(e,r){return y.call(e,r)}function i(e){return Array.prototype.slice.call(arguments,1).forEach(function(r){if(r){if("object"!=typeof r)throw new TypeError(r+"must be object");Object.keys(r).forEach(function(t){e[t]=r[t]})}}),e}function a(e,r,t){return[].concat(e.slice(0,r),t,e.slice(r+1))}function c(e){return!(e>=55296&&e<=57343)&&(!(e>=64976&&e<=65007)&&(65535!=(65535&e)&&65534!=(65535&e)&&(!(e>=0&&e<=8)&&(11!==e&&(!(e>=14&&e<=31)&&(!(e>=127&&e<=159)&&!(e>1114111)))))))}function l(e){if(e>65535){e-=65536;var r=55296+(e>>10),t=56320+(1023&e);return String.fromCharCode(r,t)}return String.fromCharCode(e)}function u(e,r){var t=0;return o(w,r)?w[r]:35===r.charCodeAt(0)&&A.test(r)&&(t="x"===r[1].toLowerCase()?parseInt(r.slice(2),16):parseInt(r.slice(1),10),c(t))?l(t):e}function p(e){return e.indexOf("\\")<0?e:e.replace(x,"$1")}function h(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(C,function(e,r,t){return r?r:u(e,t)})}function f(e){return q[e]}function d(e){return D.test(e)?e.replace(/[&<>"]/g,f):e}function m(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function _(e){switch(e){case 9:case 32:return!0}return!1}function g(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function b(e){return E.test(e)}function k(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function v(e){return e.trim().replace(/\s+/g," ").toUpperCase()}var y=Object.prototype.hasOwnProperty,x=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,C=new RegExp(x.source+"|"+/&([a-z#][a-z0-9]{1,31});/gi.source,"gi"),A=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,w=e("./entities"),D=/[&<>"]/,q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},E=e("uc.micro/categories/P/regex");t.lib={},t.lib.mdurl=e("mdurl"),t.lib.ucmicro=e("uc.micro"),t.assign=i,t.isString=s,t.has=o,t.unescapeMd=p,t.unescapeAll=h,t.isValidEntityCode=c,t.fromCodePoint=l,t.escapeHtml=d,t.arrayReplaceAt=a,t.isSpace=_,t.isWhiteSpace=g,t.isMdAsciiPunct=k,t.isPunctChar=b,t.escapeRE=m,t.normalizeReference=v},{"./entities":1,mdurl:58,"uc.micro":65,"uc.micro/categories/P/regex":63}],5:[function(e,r,t){"use strict";t.parseLinkLabel=e("./parse_link_label"),t.parseLinkDestination=e("./parse_link_destination"),t.parseLinkTitle=e("./parse_link_title")},{"./parse_link_destination":6,"./parse_link_label":7,"./parse_link_title":8}],6:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace,s=e("../common/utils").unescapeAll;r.exports=function(e,r,t){var o,i,a=r,c={ok:!1,pos:0,lines:0,str:""};if(60===e.charCodeAt(r)){for(r++;r<t;){if(10===(o=e.charCodeAt(r))||n(o))return c;if(62===o)return c.pos=r+1,c.str=s(e.slice(a+1,r)),c.ok=!0,c;92===o&&r+1<t?r+=2:r++}return c}for(i=0;r<t&&32!==(o=e.charCodeAt(r))&&!(o<32||127===o);)if(92===o&&r+1<t)r+=2;else{if(40===o&&++i>1)break;if(41===o&&--i<0)break;r++}return a===r?c:(c.str=s(e.slice(a,r)),c.lines=0,c.pos=r,c.ok=!0,c)}},{"../common/utils":4}],7:[function(e,r,t){"use strict";r.exports=function(e,r,t){var n,s,o,i,a=-1,c=e.posMax,l=e.pos;for(e.pos=r+1,n=1;e.pos<c;){if(93===(o=e.src.charCodeAt(e.pos))&&0===--n){s=!0;break}if(i=e.pos,e.md.inline.skipToken(e),91===o)if(i===e.pos-1)n++;else if(t)return e.pos=l,-1}return s&&(a=e.pos),e.pos=l,a}},{}],8:[function(e,r,t){"use strict";var n=e("../common/utils").unescapeAll;r.exports=function(e,r,t){var s,o,i=0,a=r,c={ok:!1,pos:0,lines:0,str:""};if(r>=t)return c;if(34!==(o=e.charCodeAt(r))&&39!==o&&40!==o)return c;for(r++,40===o&&(o=41);r<t;){if((s=e.charCodeAt(r))===o)return c.pos=r+1,c.lines=i,c.str=n(e.slice(a+1,r)),c.ok=!0,c;10===s?i++:92===s&&r+1<t&&(r++,10===e.charCodeAt(r)&&i++),r++}return c}},{"../common/utils":4}],9:[function(e,r,t){"use strict";function n(e){var r=e.trim().toLowerCase();return!g.test(r)||!!b.test(r)}function s(e){var r=d.parse(e,!0);if(r.hostname&&(!r.protocol||k.indexOf(r.protocol)>=0))try{r.hostname=m.toASCII(r.hostname)}catch(e){}return d.encode(d.format(r))}function o(e){var r=d.parse(e,!0);if(r.hostname&&(!r.protocol||k.indexOf(r.protocol)>=0))try{r.hostname=m.toUnicode(r.hostname)}catch(e){}return d.decode(d.format(r))}function i(e,r){if(!(this instanceof i))return new i(e,r);r||a.isString(e)||(r=e||{},e="default"),this.inline=new h,this.block=new p,this.core=new u,this.renderer=new l,this.linkify=new f,this.validateLink=n,this.normalizeLink=s,this.normalizeLinkText=o,this.utils=a,this.helpers=a.assign({},c),this.options={},this.configure(e),r&&this.set(r)}var a=e("./common/utils"),c=e("./helpers"),l=e("./renderer"),u=e("./parser_core"),p=e("./parser_block"),h=e("./parser_inline"),f=e("linkify-it"),d=e("mdurl"),m=e("punycode"),_={default:e("./presets/default"),zero:e("./presets/zero"),commonmark:e("./presets/commonmark")},g=/^(vbscript|javascript|file|data):/,b=/^data:image\/(gif|png|jpeg|webp);/,k=["http:","https:","mailto:"];i.prototype.set=function(e){return a.assign(this.options,e),this},i.prototype.configure=function(e){var r,t=this;if(a.isString(e)&&(r=e,!(e=_[r])))throw new Error('Wrong `markdown-it` preset "'+r+'", check name');if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(r){e.components[r].rules&&t[r].ruler.enableOnly(e.components[r].rules),e.components[r].rules2&&t[r].ruler2.enableOnly(e.components[r].rules2)}),this},i.prototype.enable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));var n=e.filter(function(e){return t.indexOf(e)<0});if(n.length&&!r)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this},i.prototype.disable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));var n=e.filter(function(e){return t.indexOf(e)<0});if(n.length&&!r)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this},i.prototype.use=function(e){var r=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,r),this},i.prototype.parse=function(e,r){if("string"!=typeof e)throw new Error("Input data should be a String");var t=new this.core.State(e,this,r);return this.core.process(t),t.tokens},i.prototype.render=function(e,r){return r=r||{},this.renderer.render(this.parse(e,r),this.options,r)},i.prototype.parseInline=function(e,r){var t=new this.core.State(e,this,r);return t.inlineMode=!0,this.core.process(t),t.tokens},i.prototype.renderInline=function(e,r){return r=r||{},this.renderer.render(this.parseInline(e,r),this.options,r)},r.exports=i},{"./common/utils":4,"./helpers":5,"./parser_block":10,"./parser_core":11,"./parser_inline":12,"./presets/commonmark":13,"./presets/default":14,"./presets/zero":15,"./renderer":16,"linkify-it":53,mdurl:58,punycode:60}],10:[function(e,r,t){"use strict";function n(){this.ruler=new s;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1],{alt:(o[e][2]||[]).slice()})}var s=e("./ruler"),o=[["table",e("./rules_block/table"),["paragraph","reference"]],["code",e("./rules_block/code")],["fence",e("./rules_block/fence"),["paragraph","reference","blockquote","list"]],["blockquote",e("./rules_block/blockquote"),["paragraph","reference","list"]],["hr",e("./rules_block/hr"),["paragraph","reference","blockquote","list"]],["list",e("./rules_block/list"),["paragraph","reference","blockquote"]],["reference",e("./rules_block/reference")],["heading",e("./rules_block/heading"),["paragraph","reference","blockquote"]],["lheading",e("./rules_block/lheading")],["html_block",e("./rules_block/html_block"),["paragraph","reference","blockquote"]],["paragraph",e("./rules_block/paragraph")]];n.prototype.tokenize=function(e,r,t){for(var n,s=this.ruler.getRules(""),o=s.length,i=r,a=!1,c=e.md.options.maxNesting;i<t&&(e.line=i=e.skipEmptyLines(i),!(i>=t))&&!(e.sCount[i]<e.blkIndent);){if(e.level>=c){e.line=t;break}for(n=0;n<o&&!s[n](e,i,t,!1);n++);e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),(i=e.line)<t&&e.isEmpty(i)&&(a=!0,i++,e.line=i)}},n.prototype.parse=function(e,r,t,n){var s;e&&(s=new this.State(e,r,t,n),this.tokenize(s,s.line,s.lineMax))},n.prototype.State=e("./rules_block/state_block"),r.exports=n},{"./ruler":17,"./rules_block/blockquote":18,"./rules_block/code":19,"./rules_block/fence":20,"./rules_block/heading":21,"./rules_block/hr":22,"./rules_block/html_block":23,"./rules_block/lheading":24,"./rules_block/list":25,"./rules_block/paragraph":26,"./rules_block/reference":27,"./rules_block/state_block":28,"./rules_block/table":29}],11:[function(e,r,t){"use strict";function n(){this.ruler=new s;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1])}var s=e("./ruler"),o=[["normalize",e("./rules_core/normalize")],["block",e("./rules_core/block")],["inline",e("./rules_core/inline")],["linkify",e("./rules_core/linkify")],["replacements",e("./rules_core/replacements")],["smartquotes",e("./rules_core/smartquotes")]];n.prototype.process=function(e){var r,t,n;for(n=this.ruler.getRules(""),r=0,t=n.length;r<t;r++)n[r](e)},n.prototype.State=e("./rules_core/state_core"),r.exports=n},{"./ruler":17,"./rules_core/block":30,"./rules_core/inline":31,"./rules_core/linkify":32,"./rules_core/normalize":33,"./rules_core/replacements":34,"./rules_core/smartquotes":35,"./rules_core/state_core":36}],12:[function(e,r,t){"use strict";function n(){var e;for(this.ruler=new s,e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1]);for(this.ruler2=new s,e=0;e<i.length;e++)this.ruler2.push(i[e][0],i[e][1])}var s=e("./ruler"),o=[["text",e("./rules_inline/text")],["newline",e("./rules_inline/newline")],["escape",e("./rules_inline/escape")],["backticks",e("./rules_inline/backticks")],["strikethrough",e("./rules_inline/strikethrough").tokenize],["emphasis",e("./rules_inline/emphasis").tokenize],["link",e("./rules_inline/link")],["image",e("./rules_inline/image")],["autolink",e("./rules_inline/autolink")],["html_inline",e("./rules_inline/html_inline")],["entity",e("./rules_inline/entity")]],i=[["balance_pairs",e("./rules_inline/balance_pairs")],["strikethrough",e("./rules_inline/strikethrough").postProcess],["emphasis",e("./rules_inline/emphasis").postProcess],["text_collapse",e("./rules_inline/text_collapse")]];n.prototype.skipToken=function(e){var r,t,n=e.pos,s=this.ruler.getRules(""),o=s.length,i=e.md.options.maxNesting,a=e.cache;if(void 0!==a[n])return void(e.pos=a[n]);if(e.level<i)for(t=0;t<o&&(e.level++,r=s[t](e,!0),e.level--,!r);t++);else e.pos=e.posMax;r||e.pos++,a[n]=e.pos},n.prototype.tokenize=function(e){for(var r,t,n=this.ruler.getRules(""),s=n.length,o=e.posMax,i=e.md.options.maxNesting;e.pos<o;){if(e.level<i)for(t=0;t<s&&!(r=n[t](e,!1));t++);if(r){if(e.pos>=o)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},n.prototype.parse=function(e,r,t,n){var s,o,i,a=new this.State(e,r,t,n);for(this.tokenize(a),o=this.ruler2.getRules(""),i=o.length,s=0;s<i;s++)o[s](a)},n.prototype.State=e("./rules_inline/state_inline"),r.exports=n},{"./ruler":17,"./rules_inline/autolink":37,"./rules_inline/backticks":38,"./rules_inline/balance_pairs":39,"./rules_inline/emphasis":40,"./rules_inline/entity":41,"./rules_inline/escape":42,"./rules_inline/html_inline":43,"./rules_inline/image":44,"./rules_inline/link":45,"./rules_inline/newline":46,"./rules_inline/state_inline":47,"./rules_inline/strikethrough":48,"./rules_inline/text":49,"./rules_inline/text_collapse":50}],13:[function(e,r,t){"use strict";r.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}},{}],14:[function(e,r,t){"use strict";r.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}},{}],15:[function(e,r,t){"use strict";r.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}}},{}],16:[function(e,r,t){"use strict";function n(){this.rules=s({},a)}var s=e("./common/utils").assign,o=e("./common/utils").unescapeAll,i=e("./common/utils").escapeHtml,a={};a.code_inline=function(e,r,t,n,s){var o=e[r];return"<code"+s.renderAttrs(o)+">"+i(e[r].content)+"</code>"},a.code_block=function(e,r,t,n,s){var o=e[r];return"<pre"+s.renderAttrs(o)+"><code>"+i(e[r].content)+"</code></pre>\n"},a.fence=function(e,r,t,n,s){var a,c,l,u,p=e[r],h=p.info?o(p.info).trim():"",f="";return h&&(f=h.split(/\s+/g)[0]),a=t.highlight?t.highlight(p.content,f)||i(p.content):i(p.content),0===a.indexOf("<pre")?a+"\n":h?(c=p.attrIndex("class"),l=p.attrs?p.attrs.slice():[],c<0?l.push(["class",t.langPrefix+f]):l[c][1]+=" "+t.langPrefix+f,u={attrs:l},"<pre><code"+s.renderAttrs(u)+">"+a+"</code></pre>\n"):"<pre><code"+s.renderAttrs(p)+">"+a+"</code></pre>\n"},a.image=function(e,r,t,n,s){var o=e[r];return o.attrs[o.attrIndex("alt")][1]=s.renderInlineAsText(o.children,t,n),s.renderToken(e,r,t)},a.hardbreak=function(e,r,t){return t.xhtmlOut?"<br />\n":"<br>\n"},a.softbreak=function(e,r,t){return t.breaks?t.xhtmlOut?"<br />\n":"<br>\n":"\n"},a.text=function(e,r){return i(e[r].content)},a.html_block=function(e,r){return e[r].content},a.html_inline=function(e,r){return e[r].content},n.prototype.renderAttrs=function(e){var r,t,n;if(!e.attrs)return"";for(n="",r=0,t=e.attrs.length;r<t;r++)n+=" "+i(e.attrs[r][0])+'="'+i(e.attrs[r][1])+'"';return n},n.prototype.renderToken=function(e,r,t){var n,s="",o=!1,i=e[r];return i.hidden?"":(i.block&&i.nesting!==-1&&r&&e[r-1].hidden&&(s+="\n"),s+=(i.nesting===-1?"</":"<")+i.tag,s+=this.renderAttrs(i),0===i.nesting&&t.xhtmlOut&&(s+=" /"),i.block&&(o=!0,1===i.nesting&&r+1<e.length&&(n=e[r+1],"inline"===n.type||n.hidden?o=!1:n.nesting===-1&&n.tag===i.tag&&(o=!1))),s+=o?">\n":">")},n.prototype.renderInline=function(e,r,t){for(var n,s="",o=this.rules,i=0,a=e.length;i<a;i++)n=e[i].type,s+=void 0!==o[n]?o[n](e,i,r,t,this):this.renderToken(e,i,r);return s},n.prototype.renderInlineAsText=function(e,r,t){for(var n="",s=0,o=e.length;s<o;s++)"text"===e[s].type?n+=e[s].content:"image"===e[s].type&&(n+=this.renderInlineAsText(e[s].children,r,t));return n},n.prototype.render=function(e,r,t){var n,s,o,i="",a=this.rules;for(n=0,s=e.length;n<s;n++)o=e[n].type,i+="inline"===o?this.renderInline(e[n].children,r,t):void 0!==a[o]?a[e[n].type](e,n,r,t,this):this.renderToken(e,n,r,t);return i},r.exports=n},{"./common/utils":4}],17:[function(e,r,t){"use strict";function n(){this.__rules__=[],this.__cache__=null}n.prototype.__find__=function(e){for(var r=0;r<this.__rules__.length;r++)if(this.__rules__[r].name===e)return r;return-1},n.prototype.__compile__=function(){var e=this,r=[""];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){r.indexOf(e)<0&&r.push(e)})}),e.__cache__={},r.forEach(function(r){e.__cache__[r]=[],e.__rules__.forEach(function(t){t.enabled&&(r&&t.alt.indexOf(r)<0||e.__cache__[r].push(t.fn))})})},n.prototype.at=function(e,r,t){var n=this.__find__(e),s=t||{};if(n===-1)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=r,this.__rules__[n].alt=s.alt||[],this.__cache__=null},n.prototype.before=function(e,r,t,n){var s=this.__find__(e),o=n||{};if(s===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s,0,{name:r,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null},n.prototype.after=function(e,r,t,n){var s=this.__find__(e),o=n||{};if(s===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s+1,0,{name:r,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null},n.prototype.push=function(e,r,t){var n=t||{};this.__rules__.push({name:e,enabled:!0,fn:r,alt:n.alt||[]}),this.__cache__=null},n.prototype.enable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(e){var n=this.__find__(e);if(n<0){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!0,t.push(e)},this),this.__cache__=null,t},n.prototype.enableOnly=function(e,r){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,r)},n.prototype.disable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(e){var n=this.__find__(e);if(n<0){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!1,t.push(e)},this),this.__cache__=null,t},n.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},r.exports=n},{}],18:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l,u,p,h,f,d,m,_,g,b,k,v,y,x,C,A,w=e.lineMax,D=e.bMarks[r]+e.tShift[r],q=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(62!==e.src.charCodeAt(D++))return!1;if(s)return!0;for(c=d=e.sCount[r]+D-(e.bMarks[r]+e.tShift[r]),32===e.src.charCodeAt(D)?(D++,c++,d++,o=!1,y=!0):9===e.src.charCodeAt(D)?(y=!0,(e.bsCount[r]+d)%4==3?(D++,c++,d++,o=!1):o=!0):y=!1,m=[e.bMarks[r]],e.bMarks[r]=D;D<q&&(i=e.src.charCodeAt(D),n(i));)9===i?d+=4-(d+e.bsCount[r]+(o?1:0))%4:d++,D++;for(_=[e.bsCount[r]],e.bsCount[r]=e.sCount[r]+1+(y?1:0),p=D>=q,k=[e.sCount[r]],e.sCount[r]=d-c,v=[e.tShift[r]],e.tShift[r]=D-e.bMarks[r],C=e.md.block.ruler.getRules("blockquote"),b=e.parentType,e.parentType="blockquote",f=r+1;f<t&&(l=e.sCount[f]<e.blkIndent,D=e.bMarks[f]+e.tShift[f],q=e.eMarks[f],!(D>=q));f++)if(62!==e.src.charCodeAt(D++)||l){if(p)break;for(x=!1,a=0,u=C.length;a<u;a++)if(C[a](e,f,t,!0)){x=!0;break}if(x){e.lineMax=f,0!==e.blkIndent&&(m.push(e.bMarks[f]),_.push(e.bsCount[f]),v.push(e.tShift[f]),k.push(e.sCount[f]),e.sCount[f]-=e.blkIndent);break}if(l)break;m.push(e.bMarks[f]),_.push(e.bsCount[f]),v.push(e.tShift[f]),k.push(e.sCount[f]),e.sCount[f]=-1}else{for(c=d=e.sCount[f]+D-(e.bMarks[f]+e.tShift[f]),32===e.src.charCodeAt(D)?(D++,c++,d++,o=!1,y=!0):9===e.src.charCodeAt(D)?(y=!0,(e.bsCount[f]+d)%4==3?(D++,c++,d++,o=!1):o=!0):y=!1,m.push(e.bMarks[f]),e.bMarks[f]=D;D<q&&(i=e.src.charCodeAt(D),n(i));)9===i?d+=4-(d+e.bsCount[f]+(o?1:0))%4:d++,D++;p=D>=q,_.push(e.bsCount[f]),e.bsCount[f]=e.sCount[f]+1+(y?1:0),k.push(e.sCount[f]),e.sCount[f]=d-c,v.push(e.tShift[f]),e.tShift[f]=D-e.bMarks[f]}for(g=e.blkIndent,e.blkIndent=0,A=e.push("blockquote_open","blockquote",1),A.markup=">",A.map=h=[r,0],e.md.block.tokenize(e,r,f),A=e.push("blockquote_close","blockquote",-1),A.markup=">",e.lineMax=w,e.parentType=b,h[1]=e.line,a=0;a<v.length;a++)e.bMarks[a+r]=m[a],e.tShift[a+r]=v[a],e.sCount[a+r]=k[a],e.bsCount[a+r]=_[a];return e.blkIndent=g,!0}},{"../common/utils":4}],19:[function(e,r,t){"use strict";r.exports=function(e,r,t){var n,s,o;if(e.sCount[r]-e.blkIndent<4)return!1;for(s=n=r+1;n<t;)if(e.isEmpty(n))n++;else{if(!(e.sCount[n]-e.blkIndent>=4))break;n++,s=n}return e.line=s,o=e.push("code_block","code",0),o.content=e.getLines(r,s,4+e.blkIndent,!0),o.map=[r,e.line],!0}},{}],20:[function(e,r,t){"use strict";r.exports=function(e,r,t,n){var s,o,i,a,c,l,u,p=!1,h=e.bMarks[r]+e.tShift[r],f=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(h+3>f)return!1;if(126!==(s=e.src.charCodeAt(h))&&96!==s)return!1;if(c=h,h=e.skipChars(h,s),(o=h-c)<3)return!1;if(u=e.src.slice(c,h),i=e.src.slice(h,f),i.indexOf(String.fromCharCode(s))>=0)return!1;if(n)return!0;for(a=r;!(++a>=t)&&(h=c=e.bMarks[a]+e.tShift[a],f=e.eMarks[a],!(h<f&&e.sCount[a]<e.blkIndent));)if(e.src.charCodeAt(h)===s&&!(e.sCount[a]-e.blkIndent>=4||(h=e.skipChars(h,s))-c<o||(h=e.skipSpaces(h))<f)){p=!0;break}return o=e.sCount[r],e.line=a+(p?1:0),l=e.push("fence","code",0),l.info=i,l.content=e.getLines(r+1,a,o,!0),l.markup=u,l.map=[r,e.line],!0}},{}],21:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(35!==(o=e.src.charCodeAt(l))||l>=u)return!1;for(i=1,o=e.src.charCodeAt(++l);35===o&&l<u&&i<=6;)i++,o=e.src.charCodeAt(++l);return!(i>6||l<u&&!n(o))&&(!!s||(u=e.skipSpacesBack(u,l),a=e.skipCharsBack(u,35,l),a>l&&n(e.src.charCodeAt(a-1))&&(u=a),e.line=r+1,c=e.push("heading_open","h"+String(i),1),c.markup="########".slice(0,i),c.map=[r,e.line],c=e.push("inline","",0),c.content=e.src.slice(l,u).trim(),c.map=[r,e.line],c.children=[],c=e.push("heading_close","h"+String(i),-1),c.markup="########".slice(0,i),!0))}},{"../common/utils":4}],22:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(42!==(o=e.src.charCodeAt(l++))&&45!==o&&95!==o)return!1;for(i=1;l<u;){if((a=e.src.charCodeAt(l++))!==o&&!n(a))return!1;a===o&&i++}return!(i<3)&&(!!s||(e.line=r+1,c=e.push("hr","hr",0),c.map=[r,e.line],c.markup=Array(i+1).join(String.fromCharCode(o)),!0))}},{"../common/utils":4}],23:[function(e,r,t){"use strict";var n=e("../common/html_blocks"),s=e("../common/html_re").HTML_OPEN_CLOSE_TAG_RE,o=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+n.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(s.source+"\\s*$"),/^$/,!1]];r.exports=function(e,r,t,n){var s,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(!e.md.options.html)return!1;if(60!==e.src.charCodeAt(l))return!1;for(c=e.src.slice(l,u),s=0;s<o.length&&!o[s][0].test(c);s++);if(s===o.length)return!1;if(n)return o[s][2];if(i=r+1,!o[s][1].test(c))for(;i<t&&!(e.sCount[i]<e.blkIndent);i++)if(l=e.bMarks[i]+e.tShift[i],u=e.eMarks[i],c=e.src.slice(l,u),o[s][1].test(c)){0!==c.length&&i++;break}return e.line=i,a=e.push("html_block","",0),a.map=[r,i],a.content=e.getLines(r,i,e.blkIndent,!0),!0}},{"../common/html_blocks":2,"../common/html_re":3}],24:[function(e,r,t){"use strict";r.exports=function(e,r,t){var n,s,o,i,a,c,l,u,p,h,f=r+1,d=e.md.block.ruler.getRules("paragraph");if(e.sCount[r]-e.blkIndent>=4)return!1;for(h=e.parentType,e.parentType="paragraph";f<t&&!e.isEmpty(f);f++)if(!(e.sCount[f]-e.blkIndent>3)){if(e.sCount[f]>=e.blkIndent&&(c=e.bMarks[f]+e.tShift[f],l=e.eMarks[f],c<l&&(45===(p=e.src.charCodeAt(c))||61===p)&&(c=e.skipChars(c,p),(c=e.skipSpaces(c))>=l))){u=61===p?1:2;break}if(!(e.sCount[f]<0)){for(s=!1,o=0,i=d.length;o<i;o++)if(d[o](e,f,t,!0)){s=!0;break}if(s)break}}return!!u&&(n=e.getLines(r,f,e.blkIndent,!1).trim(),e.line=f+1,a=e.push("heading_open","h"+String(u),1),a.markup=String.fromCharCode(p),a.map=[r,e.line],a=e.push("inline","",0),a.content=n,a.map=[r,e.line-1],a.children=[],a=e.push("heading_close","h"+String(u),-1),a.markup=String.fromCharCode(p),e.parentType=h,!0)}},{}],25:[function(e,r,t){"use strict";function n(e,r){var t,n,s,o;return n=e.bMarks[r]+e.tShift[r],s=e.eMarks[r],t=e.src.charCodeAt(n++),42!==t&&45!==t&&43!==t?-1:n<s&&(o=e.src.charCodeAt(n),!i(o))?-1:n}function s(e,r){var t,n=e.bMarks[r]+e.tShift[r],s=n,o=e.eMarks[r];if(s+1>=o)return-1;if((t=e.src.charCodeAt(s++))<48||t>57)return-1;for(;;){if(s>=o)return-1;t=e.src.charCodeAt(s++);{if(!(t>=48&&t<=57)){if(41===t||46===t)break;return-1}if(s-n>=10)return-1}}return s<o&&(t=e.src.charCodeAt(s),!i(t))?-1:s}function o(e,r){var t,n,s=e.level+2;for(t=r+2,n=e.tokens.length-2;t<n;t++)e.tokens[t].level===s&&"paragraph_open"===e.tokens[t].type&&(e.tokens[t+2].hidden=!0,e.tokens[t].hidden=!0,t+=2)}var i=e("../common/utils").isSpace;r.exports=function(e,r,t,a){var c,l,u,p,h,f,d,m,_,g,b,k,v,y,x,C,A,w,D,q,E,S,F,L,z,T,I,R,M=!1,B=!0;if(e.sCount[r]-e.blkIndent>=4)return!1;if(a&&"paragraph"===e.parentType&&e.tShift[r]>=e.blkIndent&&(M=!0),(F=s(e,r))>=0){if(d=!0,z=e.bMarks[r]+e.tShift[r],v=Number(e.src.substr(z,F-z-1)),M&&1!==v)return!1}else{if(!((F=n(e,r))>=0))return!1;d=!1}if(M&&e.skipSpaces(F)>=e.eMarks[r])return!1;if(k=e.src.charCodeAt(F-1),a)return!0;for(b=e.tokens.length,d?(R=e.push("ordered_list_open","ol",1),1!==v&&(R.attrs=[["start",v]])):R=e.push("bullet_list_open","ul",1),R.map=g=[r,0],R.markup=String.fromCharCode(k),x=r,L=!1,I=e.md.block.ruler.getRules("list"),D=e.parentType,e.parentType="list";x<t;){for(S=F,y=e.eMarks[x],f=C=e.sCount[x]+F-(e.bMarks[r]+e.tShift[r]);S<y&&(c=e.src.charCodeAt(S),i(c));)9===c?C+=4-(C+e.bsCount[x])%4:C++,S++;if(l=S,h=l>=y?1:C-f,h>4&&(h=1),p=f+h,R=e.push("list_item_open","li",1),R.markup=String.fromCharCode(k),R.map=m=[r,0],A=e.blkIndent,E=e.tight,q=e.tShift[r],w=e.sCount[r],e.blkIndent=p,e.tight=!0,e.tShift[r]=l-e.bMarks[r],e.sCount[r]=C,l>=y&&e.isEmpty(r+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,r,t,!0),e.tight&&!L||(B=!1),L=e.line-r>1&&e.isEmpty(e.line-1),e.blkIndent=A,e.tShift[r]=q,e.sCount[r]=w,e.tight=E,R=e.push("list_item_close","li",-1),R.markup=String.fromCharCode(k),x=r=e.line,m[1]=x,l=e.bMarks[r],x>=t)break;if(e.sCount[x]<e.blkIndent)break;for(T=!1,u=0,_=I.length;u<_;u++)if(I[u](e,x,t,!0)){T=!0;break}if(T)break;if(d){if((F=s(e,x))<0)break}else if((F=n(e,x))<0)break;if(k!==e.src.charCodeAt(F-1))break}return R=d?e.push("ordered_list_close","ol",-1):e.push("bullet_list_close","ul",-1),R.markup=String.fromCharCode(k),g[1]=x,e.line=x,e.parentType=D,B&&o(e,b),!0}},{"../common/utils":4}],26:[function(e,r,t){"use strict";r.exports=function(e,r){var t,n,s,o,i,a,c=r+1,l=e.md.block.ruler.getRules("paragraph"),u=e.lineMax;for(a=e.parentType,e.parentType="paragraph";c<u&&!e.isEmpty(c);c++)if(!(e.sCount[c]-e.blkIndent>3||e.sCount[c]<0)){for(n=!1,s=0,o=l.length;s<o;s++)if(l[s](e,c,u,!0)){n=!0;break}if(n)break}return t=e.getLines(r,c,e.blkIndent,!1).trim(),e.line=c,i=e.push("paragraph_open","p",1),i.map=[r,e.line],i=e.push("inline","",0),i.content=t,i.map=[r,e.line],i.children=[],i=e.push("paragraph_close","p",-1),e.parentType=a,!0}},{}],27:[function(e,r,t){"use strict";var n=e("../common/utils").normalizeReference,s=e("../common/utils").isSpace;r.exports=function(e,r,t,o){var i,a,c,l,u,p,h,f,d,m,_,g,b,k,v,y,x=0,C=e.bMarks[r]+e.tShift[r],A=e.eMarks[r],w=r+1;if(e.sCount[r]-e.blkIndent>=4)return!1;if(91!==e.src.charCodeAt(C))return!1;for(;++C<A;)if(93===e.src.charCodeAt(C)&&92!==e.src.charCodeAt(C-1)){if(C+1===A)return!1;if(58!==e.src.charCodeAt(C+1))return!1;break}for(l=e.lineMax,v=e.md.block.ruler.getRules("reference"),m=e.parentType,e.parentType="reference";w<l&&!e.isEmpty(w);w++)if(!(e.sCount[w]-e.blkIndent>3||e.sCount[w]<0)){for(k=!1,p=0,h=v.length;p<h;p++)if(v[p](e,w,l,!0)){k=!0;break}if(k)break}for(b=e.getLines(r,w,e.blkIndent,!1).trim(),A=b.length,C=1;C<A;C++){if(91===(i=b.charCodeAt(C)))return!1;if(93===i){d=C;break}10===i?x++:92===i&&++C<A&&10===b.charCodeAt(C)&&x++}if(d<0||58!==b.charCodeAt(d+1))return!1;for(C=d+2;C<A;C++)if(10===(i=b.charCodeAt(C)))x++;else if(!s(i))break;if(_=e.md.helpers.parseLinkDestination(b,C,A),!_.ok)return!1;if(u=e.md.normalizeLink(_.str),!e.md.validateLink(u))return!1;for(C=_.pos,x+=_.lines,a=C,c=x,g=C;C<A;C++)if(10===(i=b.charCodeAt(C)))x++;else if(!s(i))break;for(_=e.md.helpers.parseLinkTitle(b,C,A),C<A&&g!==C&&_.ok?(y=_.str,C=_.pos,x+=_.lines):(y="",C=a,x=c);C<A&&(i=b.charCodeAt(C),s(i));)C++;if(C<A&&10!==b.charCodeAt(C)&&y)for(y="",C=a,x=c;C<A&&(i=b.charCodeAt(C),s(i));)C++;return!(C<A&&10!==b.charCodeAt(C))&&(!!(f=n(b.slice(1,d)))&&(!!o||(void 0===e.env.references&&(e.env.references={}),void 0===e.env.references[f]&&(e.env.references[f]={title:y,href:u}),e.parentType=m,e.line=r+x+1,!0)))}},{"../common/utils":4}],28:[function(e,r,t){"use strict";function n(e,r,t,n){var s,i,a,c,l,u,p,h;for(this.src=e,this.md=r,this.env=t,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.parentType="root",this.level=0,this.result="",i=this.src,h=!1,a=c=u=p=0,l=i.length;c<l;c++){if(s=i.charCodeAt(c),!h){if(o(s)){u++,9===s?p+=4-p%4:p++;continue}h=!0}10!==s&&c!==l-1||(10!==s&&c++,this.bMarks.push(a),this.eMarks.push(c),this.tShift.push(u),this.sCount.push(p),this.bsCount.push(0),h=!1,u=0,p=0,a=c+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}var s=e("../token"),o=e("../common/utils").isSpace;n.prototype.push=function(e,r,t){var n=new s(e,r,t);return n.block=!0,t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.tokens.push(n),n},n.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},n.prototype.skipEmptyLines=function(e){for(var r=this.lineMax;e<r&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},n.prototype.skipSpaces=function(e){for(var r,t=this.src.length;e<t&&(r=this.src.charCodeAt(e),o(r));e++);return e},n.prototype.skipSpacesBack=function(e,r){if(e<=r)return e;for(;e>r;)if(!o(this.src.charCodeAt(--e)))return e+1;return e},n.prototype.skipChars=function(e,r){for(var t=this.src.length;e<t&&this.src.charCodeAt(e)===r;e++);return e},n.prototype.skipCharsBack=function(e,r,t){if(e<=t)return e;for(;e>t;)if(r!==this.src.charCodeAt(--e))return e+1;return e},n.prototype.getLines=function(e,r,t,n){var s,i,a,c,l,u,p,h=e;if(e>=r)return"";for(u=new Array(r-e),s=0;h<r;h++,s++){for(i=0,p=c=this.bMarks[h],
l=h+1<r||n?this.eMarks[h]+1:this.eMarks[h];c<l&&i<t;){if(a=this.src.charCodeAt(c),o(a))9===a?i+=4-(i+this.bsCount[h])%4:i++;else{if(!(c-p<this.tShift[h]))break;i++}c++}u[s]=i>t?new Array(i-t+1).join(" ")+this.src.slice(c,l):this.src.slice(c,l)}return u.join("")},n.prototype.Token=s,r.exports=n},{"../common/utils":4,"../token":51}],29:[function(e,r,t){"use strict";function n(e,r){var t=e.bMarks[r]+e.blkIndent,n=e.eMarks[r];return e.src.substr(t,n-t)}function s(e){var r,t=[],n=0,s=e.length,o=0,i=0,a=!1,c=0;for(r=e.charCodeAt(n);n<s;)96===r?a?(a=!1,c=n):o%2==0&&(a=!0,c=n):124!==r||o%2!=0||a||(t.push(e.substring(i,n)),i=n+1),92===r?o++:o=0,n++,n===s&&a&&(a=!1,n=c+1),r=e.charCodeAt(n);return t.push(e.substring(i)),t}var o=e("../common/utils").isSpace;r.exports=function(e,r,t,i){var a,c,l,u,p,h,f,d,m,_,g,b;if(r+2>t)return!1;if(p=r+1,e.sCount[p]<e.blkIndent)return!1;if(e.sCount[p]-e.blkIndent>=4)return!1;if((l=e.bMarks[p]+e.tShift[p])>=e.eMarks[p])return!1;if(124!==(a=e.src.charCodeAt(l++))&&45!==a&&58!==a)return!1;for(;l<e.eMarks[p];){if(124!==(a=e.src.charCodeAt(l))&&45!==a&&58!==a&&!o(a))return!1;l++}for(c=n(e,r+1),h=c.split("|"),m=[],u=0;u<h.length;u++){if(!(_=h[u].trim())){if(0===u||u===h.length-1)continue;return!1}if(!/^:?-+:?$/.test(_))return!1;58===_.charCodeAt(_.length-1)?m.push(58===_.charCodeAt(0)?"center":"right"):58===_.charCodeAt(0)?m.push("left"):m.push("")}if(c=n(e,r).trim(),c.indexOf("|")===-1)return!1;if(e.sCount[r]-e.blkIndent>=4)return!1;if(h=s(c.replace(/^\||\|$/g,"")),(f=h.length)>m.length)return!1;if(i)return!0;for(d=e.push("table_open","table",1),d.map=g=[r,0],d=e.push("thead_open","thead",1),d.map=[r,r+1],d=e.push("tr_open","tr",1),d.map=[r,r+1],u=0;u<h.length;u++)d=e.push("th_open","th",1),d.map=[r,r+1],m[u]&&(d.attrs=[["style","text-align:"+m[u]]]),d=e.push("inline","",0),d.content=h[u].trim(),d.map=[r,r+1],d.children=[],d=e.push("th_close","th",-1);for(d=e.push("tr_close","tr",-1),d=e.push("thead_close","thead",-1),d=e.push("tbody_open","tbody",1),d.map=b=[r+2,0],p=r+2;p<t&&!(e.sCount[p]<e.blkIndent)&&(c=n(e,p).trim(),c.indexOf("|")!==-1)&&!(e.sCount[p]-e.blkIndent>=4);p++){for(h=s(c.replace(/^\||\|$/g,"")),d=e.push("tr_open","tr",1),u=0;u<f;u++)d=e.push("td_open","td",1),m[u]&&(d.attrs=[["style","text-align:"+m[u]]]),d=e.push("inline","",0),d.content=h[u]?h[u].trim():"",d.children=[],d=e.push("td_close","td",-1);d=e.push("tr_close","tr",-1)}return d=e.push("tbody_close","tbody",-1),d=e.push("table_close","table",-1),g[1]=b[1]=p,e.line=p,!0}},{"../common/utils":4}],30:[function(e,r,t){"use strict";r.exports=function(e){var r;e.inlineMode?(r=new e.Token("inline","",0),r.content=e.src,r.map=[0,1],r.children=[],e.tokens.push(r)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}},{}],31:[function(e,r,t){"use strict";r.exports=function(e){var r,t,n,s=e.tokens;for(t=0,n=s.length;t<n;t++)r=s[t],"inline"===r.type&&e.md.inline.parse(r.content,e.md,e.env,r.children)}},{}],32:[function(e,r,t){"use strict";function n(e){return/^<a[>\s]/i.test(e)}function s(e){return/^<\/a\s*>/i.test(e)}var o=e("../common/utils").arrayReplaceAt;r.exports=function(e){var r,t,i,a,c,l,u,p,h,f,d,m,_,g,b,k,v,y=e.tokens;if(e.md.options.linkify)for(t=0,i=y.length;t<i;t++)if("inline"===y[t].type&&e.md.linkify.pretest(y[t].content))for(a=y[t].children,_=0,r=a.length-1;r>=0;r--)if(l=a[r],"link_close"!==l.type){if("html_inline"===l.type&&(n(l.content)&&_>0&&_--,s(l.content)&&_++),!(_>0)&&"text"===l.type&&e.md.linkify.test(l.content)){for(h=l.content,v=e.md.linkify.match(h),u=[],m=l.level,d=0,p=0;p<v.length;p++)g=v[p].url,b=e.md.normalizeLink(g),e.md.validateLink(b)&&(k=v[p].text,k=v[p].schema?"mailto:"!==v[p].schema||/^mailto:/i.test(k)?e.md.normalizeLinkText(k):e.md.normalizeLinkText("mailto:"+k).replace(/^mailto:/,""):e.md.normalizeLinkText("http://"+k).replace(/^http:\/\//,""),f=v[p].index,f>d&&(c=new e.Token("text","",0),c.content=h.slice(d,f),c.level=m,u.push(c)),c=new e.Token("link_open","a",1),c.attrs=[["href",b]],c.level=m++,c.markup="linkify",c.info="auto",u.push(c),c=new e.Token("text","",0),c.content=k,c.level=m,u.push(c),c=new e.Token("link_close","a",-1),c.level=--m,c.markup="linkify",c.info="auto",u.push(c),d=v[p].lastIndex);d<h.length&&(c=new e.Token("text","",0),c.content=h.slice(d),c.level=m,u.push(c)),y[t].children=a=o(a,r,u)}}else for(r--;a[r].level!==l.level&&"link_open"!==a[r].type;)r--}},{"../common/utils":4}],33:[function(e,r,t){"use strict";r.exports=function(e){var r;r=e.src.replace(/\r[\n\u0085]?|[\u2424\u2028\u0085]/g,"\n"),r=r.replace(/\u0000/g,"\ufffd"),e.src=r}},{}],34:[function(e,r,t){"use strict";function n(e,r){return c[r.toLowerCase()]}function s(e){var r,t,s=0;for(r=e.length-1;r>=0;r--)t=e[r],"text"!==t.type||s||(t.content=t.content.replace(/\((c|tm|r|p)\)/gi,n)),"link_open"===t.type&&"auto"===t.info&&s--,"link_close"===t.type&&"auto"===t.info&&s++}function o(e){var r,t,n=0;for(r=e.length-1;r>=0;r--)t=e[r],"text"!==t.type||n||i.test(t.content)&&(t.content=t.content.replace(/\+-/g,"\xb1").replace(/\.{2,}/g,"\u2026").replace(/([?!])\u2026/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1\u2014$2").replace(/(^|\s)--(\s|$)/gm,"$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1\u2013$2")),"link_open"===t.type&&"auto"===t.info&&n--,"link_close"===t.type&&"auto"===t.info&&n++}var i=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,a=/\((c|tm|r|p)\)/i,c={c:"\xa9",r:"\xae",p:"\xa7",tm:"\u2122"};r.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&(a.test(e.tokens[r].content)&&s(e.tokens[r].children),i.test(e.tokens[r].content)&&o(e.tokens[r].children))}},{}],35:[function(e,r,t){"use strict";function n(e,r,t){return e.substr(0,r)+t+e.substr(r+1)}function s(e,r){var t,s,c,u,p,h,f,d,m,_,g,b,k,v,y,x,C,A,w,D,q;for(w=[],t=0;t<e.length;t++){for(s=e[t],f=e[t].level,C=w.length-1;C>=0&&!(w[C].level<=f);C--);if(w.length=C+1,"text"===s.type){c=s.content,p=0,h=c.length;e:for(;p<h&&(l.lastIndex=p,u=l.exec(c));){if(y=x=!0,p=u.index+1,A="'"===u[0],m=32,u.index-1>=0)m=c.charCodeAt(u.index-1);else for(C=t-1;C>=0;C--)if("text"===e[C].type){m=e[C].content.charCodeAt(e[C].content.length-1);break}if(_=32,p<h)_=c.charCodeAt(p);else for(C=t+1;C<e.length;C++)if("text"===e[C].type){_=e[C].content.charCodeAt(0);break}if(g=a(m)||i(String.fromCharCode(m)),b=a(_)||i(String.fromCharCode(_)),k=o(m),v=o(_),v?y=!1:b&&(k||g||(y=!1)),k?x=!1:g&&(v||b||(x=!1)),34===_&&'"'===u[0]&&m>=48&&m<=57&&(x=y=!1),y&&x&&(y=!1,x=b),y||x){if(x)for(C=w.length-1;C>=0&&(d=w[C],!(w[C].level<f));C--)if(d.single===A&&w[C].level===f){d=w[C],A?(D=r.md.options.quotes[2],q=r.md.options.quotes[3]):(D=r.md.options.quotes[0],q=r.md.options.quotes[1]),s.content=n(s.content,u.index,q),e[d.token].content=n(e[d.token].content,d.pos,D),p+=q.length-1,d.token===t&&(p+=D.length-1),c=s.content,h=c.length,w.length=C;continue e}y?w.push({token:t,pos:u.index,single:A,level:f}):x&&A&&(s.content=n(s.content,u.index,"\u2019"))}else A&&(s.content=n(s.content,u.index,"\u2019"))}}}}var o=e("../common/utils").isWhiteSpace,i=e("../common/utils").isPunctChar,a=e("../common/utils").isMdAsciiPunct,c=/['"]/,l=/['"]/g;r.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&c.test(e.tokens[r].content)&&s(e.tokens[r].children,e)}},{"../common/utils":4}],36:[function(e,r,t){"use strict";function n(e,r,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=r}var s=e("../token");n.prototype.Token=s,r.exports=n},{"../token":51}],37:[function(e,r,t){"use strict";var n=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,s=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;r.exports=function(e,r){var t,o,i,a,c,l,u=e.pos;return 60===e.src.charCodeAt(u)&&(t=e.src.slice(u),!(t.indexOf(">")<0)&&(s.test(t)?(o=t.match(s),a=o[0].slice(1,-1),c=e.md.normalizeLink(a),!!e.md.validateLink(c)&&(r||(l=e.push("link_open","a",1),l.attrs=[["href",c]],l.markup="autolink",l.info="auto",l=e.push("text","",0),l.content=e.md.normalizeLinkText(a),l=e.push("link_close","a",-1),l.markup="autolink",l.info="auto"),e.pos+=o[0].length,!0)):!!n.test(t)&&(i=t.match(n),a=i[0].slice(1,-1),c=e.md.normalizeLink("mailto:"+a),!!e.md.validateLink(c)&&(r||(l=e.push("link_open","a",1),l.attrs=[["href",c]],l.markup="autolink",l.info="auto",l=e.push("text","",0),l.content=e.md.normalizeLinkText(a),l=e.push("link_close","a",-1),l.markup="autolink",l.info="auto"),e.pos+=i[0].length,!0))))}},{}],38:[function(e,r,t){"use strict";r.exports=function(e,r){var t,n,s,o,i,a,c=e.pos;if(96!==e.src.charCodeAt(c))return!1;for(t=c,c++,n=e.posMax;c<n&&96===e.src.charCodeAt(c);)c++;for(s=e.src.slice(t,c),o=i=c;(o=e.src.indexOf("`",i))!==-1;){for(i=o+1;i<n&&96===e.src.charCodeAt(i);)i++;if(i-o===s.length)return r||(a=e.push("code_inline","code",0),a.markup=s,a.content=e.src.slice(c,o).replace(/[ \n]+/g," ").trim()),e.pos=i,!0}return r||(e.pending+=s),e.pos+=s.length,!0}},{}],39:[function(e,r,t){"use strict";r.exports=function(e){var r,t,n,s,o=e.delimiters,i=e.delimiters.length;for(r=0;r<i;r++)if(n=o[r],n.close)for(t=r-n.jump-1;t>=0;){if(s=o[t],s.open&&s.marker===n.marker&&s.end<0&&s.level===n.level){var a=(s.close||n.open)&&void 0!==s.length&&void 0!==n.length&&(s.length+n.length)%3==0;if(!a){n.jump=r-t,n.open=!1,s.end=r,s.jump=0;break}}t-=s.jump+1}}},{}],40:[function(e,r,t){"use strict";r.exports.tokenize=function(e,r){var t,n,s,o=e.pos,i=e.src.charCodeAt(o);if(r)return!1;if(95!==i&&42!==i)return!1;for(n=e.scanDelims(e.pos,42===i),t=0;t<n.length;t++)s=e.push("text","",0),s.content=String.fromCharCode(i),e.delimiters.push({marker:i,length:n.length,jump:t,token:e.tokens.length-1,level:e.level,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},r.exports.postProcess=function(e){var r,t,n,s,o,i,a=e.delimiters,c=e.delimiters.length;for(r=0;r<c;r++)t=a[r],95!==t.marker&&42!==t.marker||t.end!==-1&&(n=a[t.end],i=r+1<c&&a[r+1].end===t.end-1&&a[r+1].token===t.token+1&&a[t.end-1].token===n.token-1&&a[r+1].marker===t.marker,o=String.fromCharCode(t.marker),s=e.tokens[t.token],s.type=i?"strong_open":"em_open",s.tag=i?"strong":"em",s.nesting=1,s.markup=i?o+o:o,s.content="",s=e.tokens[n.token],s.type=i?"strong_close":"em_close",s.tag=i?"strong":"em",s.nesting=-1,s.markup=i?o+o:o,s.content="",i&&(e.tokens[a[r+1].token].content="",e.tokens[a[t.end-1].token].content="",r++))}},{}],41:[function(e,r,t){"use strict";var n=e("../common/entities"),s=e("../common/utils").has,o=e("../common/utils").isValidEntityCode,i=e("../common/utils").fromCodePoint;r.exports=function(e,r){var t,a,c=e.pos,l=e.posMax;if(38!==e.src.charCodeAt(c))return!1;if(c+1<l)if(35===e.src.charCodeAt(c+1)){if(a=e.src.slice(c).match(/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i))return r||(t="x"===a[1][0].toLowerCase()?parseInt(a[1].slice(1),16):parseInt(a[1],10),e.pending+=i(o(t)?t:65533)),e.pos+=a[0].length,!0}else if((a=e.src.slice(c).match(/^&([a-z][a-z0-9]{1,31});/i))&&s(n,a[1]))return r||(e.pending+=n[a[1]]),e.pos+=a[0].length,!0;return r||(e.pending+="&"),e.pos++,!0}},{"../common/entities":1,"../common/utils":4}],42:[function(e,r,t){"use strict";for(var n=e("../common/utils").isSpace,s=[],o=0;o<256;o++)s.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){s[e.charCodeAt(0)]=1}),r.exports=function(e,r){var t,o=e.pos,i=e.posMax;if(92!==e.src.charCodeAt(o))return!1;if(++o<i){if((t=e.src.charCodeAt(o))<256&&0!==s[t])return r||(e.pending+=e.src[o]),e.pos+=2,!0;if(10===t){for(r||e.push("hardbreak","br",0),o++;o<i&&(t=e.src.charCodeAt(o),n(t));)o++;return e.pos=o,!0}}return r||(e.pending+="\\"),e.pos++,!0}},{"../common/utils":4}],43:[function(e,r,t){"use strict";function n(e){var r=32|e;return r>=97&&r<=122}var s=e("../common/html_re").HTML_TAG_RE;r.exports=function(e,r){var t,o,i,a,c=e.pos;return!!e.md.options.html&&(i=e.posMax,!(60!==e.src.charCodeAt(c)||c+2>=i)&&(!(33!==(t=e.src.charCodeAt(c+1))&&63!==t&&47!==t&&!n(t))&&(!!(o=e.src.slice(c).match(s))&&(r||(a=e.push("html_inline","",0),a.content=e.src.slice(c,c+o[0].length)),e.pos+=o[0].length,!0))))}},{"../common/html_re":3}],44:[function(e,r,t){"use strict";var n=e("../common/utils").normalizeReference,s=e("../common/utils").isSpace;r.exports=function(e,r){var t,o,i,a,c,l,u,p,h,f,d,m,_,g="",b=e.pos,k=e.posMax;if(33!==e.src.charCodeAt(e.pos))return!1;if(91!==e.src.charCodeAt(e.pos+1))return!1;if(l=e.pos+2,(c=e.md.helpers.parseLinkLabel(e,e.pos+1,!1))<0)return!1;if((u=c+1)<k&&40===e.src.charCodeAt(u)){for(u++;u<k&&(o=e.src.charCodeAt(u),s(o)||10===o);u++);if(u>=k)return!1;for(_=u,h=e.md.helpers.parseLinkDestination(e.src,u,e.posMax),h.ok&&(g=e.md.normalizeLink(h.str),e.md.validateLink(g)?u=h.pos:g=""),_=u;u<k&&(o=e.src.charCodeAt(u),s(o)||10===o);u++);if(h=e.md.helpers.parseLinkTitle(e.src,u,e.posMax),u<k&&_!==u&&h.ok)for(f=h.str,u=h.pos;u<k&&(o=e.src.charCodeAt(u),s(o)||10===o);u++);else f="";if(u>=k||41!==e.src.charCodeAt(u))return e.pos=b,!1;u++}else{if(void 0===e.env.references)return!1;if(u<k&&91===e.src.charCodeAt(u)?(_=u+1,u=e.md.helpers.parseLinkLabel(e,u),u>=0?a=e.src.slice(_,u++):u=c+1):u=c+1,a||(a=e.src.slice(l,c)),!(p=e.env.references[n(a)]))return e.pos=b,!1;g=p.href,f=p.title}return r||(i=e.src.slice(l,c),e.md.inline.parse(i,e.md,e.env,m=[]),d=e.push("image","img",0),d.attrs=t=[["src",g],["alt",""]],d.children=m,d.content=i,f&&t.push(["title",f])),e.pos=u,e.posMax=k,!0}},{"../common/utils":4}],45:[function(e,r,t){"use strict";var n=e("../common/utils").normalizeReference,s=e("../common/utils").isSpace;r.exports=function(e,r){var t,o,i,a,c,l,u,p,h,f,d="",m=e.pos,_=e.posMax,g=e.pos,b=!0;if(91!==e.src.charCodeAt(e.pos))return!1;if(c=e.pos+1,(a=e.md.helpers.parseLinkLabel(e,e.pos,!0))<0)return!1;if((l=a+1)<_&&40===e.src.charCodeAt(l)){for(b=!1,l++;l<_&&(o=e.src.charCodeAt(l),s(o)||10===o);l++);if(l>=_)return!1;for(g=l,u=e.md.helpers.parseLinkDestination(e.src,l,e.posMax),u.ok&&(d=e.md.normalizeLink(u.str),e.md.validateLink(d)?l=u.pos:d=""),g=l;l<_&&(o=e.src.charCodeAt(l),s(o)||10===o);l++);if(u=e.md.helpers.parseLinkTitle(e.src,l,e.posMax),l<_&&g!==l&&u.ok)for(h=u.str,l=u.pos;l<_&&(o=e.src.charCodeAt(l),s(o)||10===o);l++);else h="";(l>=_||41!==e.src.charCodeAt(l))&&(b=!0),l++}if(b){if(void 0===e.env.references)return!1;if(l<_&&91===e.src.charCodeAt(l)?(g=l+1,l=e.md.helpers.parseLinkLabel(e,l),l>=0?i=e.src.slice(g,l++):l=a+1):l=a+1,i||(i=e.src.slice(c,a)),!(p=e.env.references[n(i)]))return e.pos=m,!1;d=p.href,h=p.title}return r||(e.pos=c,e.posMax=a,f=e.push("link_open","a",1),f.attrs=t=[["href",d]],h&&t.push(["title",h]),e.md.inline.tokenize(e),f=e.push("link_close","a",-1)),e.pos=l,e.posMax=_,!0}},{"../common/utils":4}],46:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r){var t,s,o=e.pos;if(10!==e.src.charCodeAt(o))return!1;for(t=e.pending.length-1,s=e.posMax,r||(t>=0&&32===e.pending.charCodeAt(t)?t>=1&&32===e.pending.charCodeAt(t-1)?(e.pending=e.pending.replace(/ +$/,""),e.push("hardbreak","br",0)):(e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0)):e.push("softbreak","br",0)),o++;o<s&&n(e.src.charCodeAt(o));)o++;return e.pos=o,!0}},{"../common/utils":4}],47:[function(e,r,t){"use strict";function n(e,r,t,n){this.src=e,this.env=t,this.md=r,this.tokens=n,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[]}var s=e("../token"),o=e("../common/utils").isWhiteSpace,i=e("../common/utils").isPunctChar,a=e("../common/utils").isMdAsciiPunct;n.prototype.pushPending=function(){var e=new s("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},n.prototype.push=function(e,r,t){this.pending&&this.pushPending();var n=new s(e,r,t);return t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.pendingLevel=this.level,this.tokens.push(n),n},n.prototype.scanDelims=function(e,r){var t,n,s,c,l,u,p,h,f,d=e,m=!0,_=!0,g=this.posMax,b=this.src.charCodeAt(e);for(t=e>0?this.src.charCodeAt(e-1):32;d<g&&this.src.charCodeAt(d)===b;)d++;return s=d-e,n=d<g?this.src.charCodeAt(d):32,p=a(t)||i(String.fromCharCode(t)),f=a(n)||i(String.fromCharCode(n)),u=o(t),h=o(n),h?m=!1:f&&(u||p||(m=!1)),u?_=!1:p&&(h||f||(_=!1)),r?(c=m,l=_):(c=m&&(!_||p),l=_&&(!m||f)),{can_open:c,can_close:l,length:s}},n.prototype.Token=s,r.exports=n},{"../common/utils":4,"../token":51}],48:[function(e,r,t){"use strict";r.exports.tokenize=function(e,r){var t,n,s,o,i,a=e.pos,c=e.src.charCodeAt(a);if(r)return!1;if(126!==c)return!1;if(n=e.scanDelims(e.pos,!0),o=n.length,i=String.fromCharCode(c),o<2)return!1;for(o%2&&(s=e.push("text","",0),s.content=i,o--),t=0;t<o;t+=2)s=e.push("text","",0),s.content=i+i,e.delimiters.push({marker:c,jump:t,token:e.tokens.length-1,level:e.level,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},r.exports.postProcess=function(e){var r,t,n,s,o,i=[],a=e.delimiters,c=e.delimiters.length;for(r=0;r<c;r++)n=a[r],126===n.marker&&n.end!==-1&&(s=a[n.end],o=e.tokens[n.token],o.type="s_open",o.tag="s",o.nesting=1,o.markup="~~",o.content="",o=e.tokens[s.token],o.type="s_close",o.tag="s",o.nesting=-1,o.markup="~~",o.content="","text"===e.tokens[s.token-1].type&&"~"===e.tokens[s.token-1].content&&i.push(s.token-1));for(;i.length;){for(r=i.pop(),t=r+1;t<e.tokens.length&&"s_close"===e.tokens[t].type;)t++;t--,r!==t&&(o=e.tokens[t],e.tokens[t]=e.tokens[r],e.tokens[r]=o)}}},{}],49:[function(e,r,t){"use strict";function n(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}r.exports=function(e,r){for(var t=e.pos;t<e.posMax&&!n(e.src.charCodeAt(t));)t++;return t!==e.pos&&(r||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}},{}],50:[function(e,r,t){"use strict";r.exports=function(e){var r,t,n=0,s=e.tokens,o=e.tokens.length;for(r=t=0;r<o;r++)n+=s[r].nesting,s[r].level=n,"text"===s[r].type&&r+1<o&&"text"===s[r+1].type?s[r+1].content=s[r].content+s[r+1].content:(r!==t&&(s[t]=s[r]),t++);r!==t&&(s.length=t)}},{}],51:[function(e,r,t){"use strict";function n(e,r,t){this.type=e,this.tag=r,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}n.prototype.attrIndex=function(e){var r,t,n;if(!this.attrs)return-1;for(r=this.attrs,t=0,n=r.length;t<n;t++)if(r[t][0]===e)return t;return-1},n.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},n.prototype.attrSet=function(e,r){var t=this.attrIndex(e),n=[e,r];t<0?this.attrPush(n):this.attrs[t]=n},n.prototype.attrGet=function(e){var r=this.attrIndex(e),t=null;return r>=0&&(t=this.attrs[r][1]),t},n.prototype.attrJoin=function(e,r){var t=this.attrIndex(e);t<0?this.attrPush([e,r]):this.attrs[t][1]=this.attrs[t][1]+" "+r},r.exports=n},{}],52:[function(e,r,t){r.exports={Aacute:"\xc1",aacute:"\xe1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223e",acd:"\u223f",acE:"\u223e\u0333",Acirc:"\xc2",acirc:"\xe2",acute:"\xb4",Acy:"\u0410",acy:"\u0430",AElig:"\xc6",aelig:"\xe6",af:"\u2061",Afr:"\ud835\udd04",afr:"\ud835\udd1e",Agrave:"\xc0",agrave:"\xe0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03b1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2a3f",amp:"&",AMP:"&",andand:"\u2a55",And:"\u2a53",and:"\u2227",andd:"\u2a5c",andslope:"\u2a58",andv:"\u2a5a",ang:"\u2220",ange:"\u29a4",angle:"\u2220",angmsdaa:"\u29a8",angmsdab:"\u29a9",angmsdac:"\u29aa",angmsdad:"\u29ab",angmsdae:"\u29ac",angmsdaf:"\u29ad",angmsdag:"\u29ae",angmsdah:"\u29af",angmsd:"\u2221",angrt:"\u221f",angrtvb:"\u22be",angrtvbd:"\u299d",angsph:"\u2222",angst:"\xc5",angzarr:"\u237c",Aogon:"\u0104",aogon:"\u0105",Aopf:"\ud835\udd38",aopf:"\ud835\udd52",apacir:"\u2a6f",ap:"\u2248",apE:"\u2a70",ape:"\u224a",apid:"\u224b",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224a",Aring:"\xc5",aring:"\xe5",Ascr:"\ud835\udc9c",ascr:"\ud835\udcb6",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224d",Atilde:"\xc3",atilde:"\xe3",Auml:"\xc4",auml:"\xe4",awconint:"\u2233",awint:"\u2a11",backcong:"\u224c",backepsilon:"\u03f6",backprime:"\u2035",backsim:"\u223d",backsimeq:"\u22cd",Backslash:"\u2216",Barv:"\u2ae7",barvee:"\u22bd",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23b5",bbrktbrk:"\u23b6",bcong:"\u224c",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201e",becaus:"\u2235",because:"\u2235",Because:"\u2235",bemptyv:"\u29b0",bepsi:"\u03f6",bernou:"\u212c",Bernoullis:"\u212c",Beta:"\u0392",beta:"\u03b2",beth:"\u2136",between:"\u226c",Bfr:"\ud835\udd05",bfr:"\ud835\udd1f",bigcap:"\u22c2",bigcirc:"\u25ef",bigcup:"\u22c3",bigodot:"\u2a00",bigoplus:"\u2a01",bigotimes:"\u2a02",bigsqcup:"\u2a06",bigstar:"\u2605",bigtriangledown:"\u25bd",bigtriangleup:"\u25b3",biguplus:"\u2a04",bigvee:"\u22c1",bigwedge:"\u22c0",bkarow:"\u290d",blacklozenge:"\u29eb",blacksquare:"\u25aa",blacktriangle:"\u25b4",blacktriangledown:"\u25be",blacktriangleleft:"\u25c2",blacktriangleright:"\u25b8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20e5",bnequiv:"\u2261\u20e5",bNot:"\u2aed",bnot:"\u2310",Bopf:"\ud835\udd39",bopf:"\ud835\udd53",bot:"\u22a5",bottom:"\u22a5",bowtie:"\u22c8",boxbox:"\u29c9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250c",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252c",boxHd:"\u2564",boxhD:"\u2565",boxHD:"\u2566",boxhu:"\u2534",boxHu:"\u2567",boxhU:"\u2568",boxHU:"\u2569",boxminus:"\u229f",boxplus:"\u229e",boxtimes:"\u22a0",boxul:"\u2518",boxuL:"\u255b",boxUl:"\u255c",boxUL:"\u255d",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255a",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253c",boxvH:"\u256a",boxVh:"\u256b",boxVH:"\u256c",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251c",boxvR:"\u255e",boxVr:"\u255f",boxVR:"\u2560",bprime:"\u2035",breve:"\u02d8",Breve:"\u02d8",brvbar:"\xa6",bscr:"\ud835\udcb7",Bscr:"\u212c",bsemi:"\u204f",bsim:"\u223d",bsime:"\u22cd",bsolb:"\u29c5",bsol:"\\",bsolhsub:"\u27c8",bull:"\u2022",bullet:"\u2022",bump:"\u224e",bumpE:"\u2aae",bumpe:"\u224f",Bumpeq:"\u224e",bumpeq:"\u224f",Cacute:"\u0106",cacute:"\u0107",capand:"\u2a44",capbrcup:"\u2a49",capcap:"\u2a4b",cap:"\u2229",Cap:"\u22d2",capcup:"\u2a47",capdot:"\u2a40",CapitalDifferentialD:"\u2145",caps:"\u2229\ufe00",caret:"\u2041",caron:"\u02c7",Cayleys:"\u212d",ccaps:"\u2a4d",Ccaron:"\u010c",ccaron:"\u010d",Ccedil:"\xc7",ccedil:"\xe7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2a4c",ccupssm:"\u2a50",Cdot:"\u010a",cdot:"\u010b",cedil:"\xb8",Cedilla:"\xb8",cemptyv:"\u29b2",cent:"\xa2",centerdot:"\xb7",CenterDot:"\xb7",cfr:"\ud835\udd20",Cfr:"\u212d",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03a7",chi:"\u03c7",circ:"\u02c6",circeq:"\u2257",circlearrowleft:"\u21ba",circlearrowright:"\u21bb",circledast:"\u229b",circledcirc:"\u229a",circleddash:"\u229d",CircleDot:"\u2299",circledR:"\xae",circledS:"\u24c8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cir:"\u25cb",cirE:"\u29c3",cire:"\u2257",cirfnint:"\u2a10",cirmid:"\u2aef",cirscir:"\u29c2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201d",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",Colone:"\u2a74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2a6d",Congruent:"\u2261",conint:"\u222e",Conint:"\u222f",ContourIntegral:"\u222e",copf:"\ud835\udd54",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\xa9",COPY:"\xa9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21b5",cross:"\u2717",Cross:"\u2a2f",Cscr:"\ud835\udc9e",cscr:"\ud835\udcb8",csub:"\u2acf",csube:"\u2ad1",csup:"\u2ad0",csupe:"\u2ad2",ctdot:"\u22ef",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22de",cuesc:"\u22df",cularr:"\u21b6",cularrp:"\u293d",cupbrcap:"\u2a48",cupcap:"\u2a46",CupCap:"\u224d",cup:"\u222a",Cup:"\u22d3",cupcup:"\u2a4a",cupdot:"\u228d",cupor:"\u2a45",cups:"\u222a\ufe00",curarr:"\u21b7",curarrm:"\u293c",curlyeqprec:"\u22de",curlyeqsucc:"\u22df",curlyvee:"\u22ce",curlywedge:"\u22cf",curren:"\xa4",curvearrowleft:"\u21b6",curvearrowright:"\u21b7",cuvee:"\u22ce",cuwed:"\u22cf",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232d",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",Darr:"\u21a1",dArr:"\u21d3",dash:"\u2010",Dashv:"\u2ae4",dashv:"\u22a3",dbkarow:"\u290f",dblac:"\u02dd",Dcaron:"\u010e",dcaron:"\u010f",Dcy:"\u0414",dcy:"\u0434",ddagger:"\u2021",ddarr:"\u21ca",DD:"\u2145",dd:"\u2146",DDotrahd:"\u2911",ddotseq:"\u2a77",deg:"\xb0",Del:"\u2207",Delta:"\u0394",delta:"\u03b4",demptyv:"\u29b1",dfisht:"\u297f",Dfr:"\ud835\udd07",dfr:"\ud835\udd21",dHar:"\u2965",dharl:"\u21c3",dharr:"\u21c2",DiacriticalAcute:"\xb4",DiacriticalDot:"\u02d9",DiacriticalDoubleAcute:"\u02dd",DiacriticalGrave:"`",DiacriticalTilde:"\u02dc",diam:"\u22c4",diamond:"\u22c4",Diamond:"\u22c4",diamondsuit:"\u2666",diams:"\u2666",die:"\xa8",DifferentialD:"\u2146",digamma:"\u03dd",disin:"\u22f2",div:"\xf7",divide:"\xf7",divideontimes:"\u22c7",divonx:"\u22c7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231e",dlcrop:"\u230d",dollar:"$",Dopf:"\ud835\udd3b",dopf:"\ud835\udd55",Dot:"\xa8",dot:"\u02d9",DotDot:"\u20dc",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22a1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222f",DoubleDot:"\xa8",DoubleDownArrow:"\u21d3",DoubleLeftArrow:"\u21d0",DoubleLeftRightArrow:"\u21d4",DoubleLeftTee:"\u2ae4",DoubleLongLeftArrow:"\u27f8",DoubleLongLeftRightArrow:"\u27fa",DoubleLongRightArrow:"\u27f9",DoubleRightArrow:"\u21d2",DoubleRightTee:"\u22a8",DoubleUpArrow:"\u21d1",DoubleUpDownArrow:"\u21d5",DoubleVerticalBar:"\u2225",DownArrowBar:"\u2913",downarrow:"\u2193",DownArrow:"\u2193",Downarrow:"\u21d3",DownArrowUpArrow:"\u21f5",DownBreve:"\u0311",downdownarrows:"\u21ca",downharpoonleft:"\u21c3",downharpoonright:"\u21c2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295e",DownLeftVectorBar:"\u2956",DownLeftVector:"\u21bd",DownRightTeeVector:"\u295f",DownRightVectorBar:"\u2957",DownRightVector:"\u21c1",DownTeeArrow:"\u21a7",DownTee:"\u22a4",drbkarow:"\u2910",drcorn:"\u231f",drcrop:"\u230c",Dscr:"\ud835\udc9f",dscr:"\ud835\udcb9",DScy:"\u0405",dscy:"\u0455",dsol:"\u29f6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22f1",dtri:"\u25bf",dtrif:"\u25be",duarr:"\u21f5",duhar:"\u296f",dwangle:"\u29a6",DZcy:"\u040f",dzcy:"\u045f",dzigrarr:"\u27ff",Eacute:"\xc9",eacute:"\xe9",easter:"\u2a6e",Ecaron:"\u011a",ecaron:"\u011b",Ecirc:"\xca",ecirc:"\xea",ecir:"\u2256",ecolon:"\u2255",Ecy:"\u042d",ecy:"\u044d",eDDot:"\u2a77",Edot:"\u0116",edot:"\u0117",eDot:"\u2251",ee:"\u2147",efDot:"\u2252",Efr:"\ud835\udd08",efr:"\ud835\udd22",eg:"\u2a9a",Egrave:"\xc8",egrave:"\xe8",egs:"\u2a96",egsdot:"\u2a98",el:"\u2a99",Element:"\u2208",elinters:"\u23e7",ell:"\u2113",els:"\u2a95",elsdot:"\u2a97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25fb",emptyv:"\u2205",EmptyVerySmallSquare:"\u25ab",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",ENG:"\u014a",eng:"\u014b",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\ud835\udd3c",eopf:"\ud835\udd56",epar:"\u22d5",eparsl:"\u29e3",eplus:"\u2a71",epsi:"\u03b5",Epsilon:"\u0395",epsilon:"\u03b5",epsiv:"\u03f5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2a96",eqslantless:"\u2a95",Equal:"\u2a75",equals:"=",EqualTilde:"\u2242",equest:"\u225f",Equilibrium:"\u21cc",equiv:"\u2261",equivDD:"\u2a78",eqvparsl:"\u29e5",erarr:"\u2971",erDot:"\u2253",escr:"\u212f",Escr:"\u2130",esdot:"\u2250",Esim:"\u2a73",esim:"\u2242",Eta:"\u0397",eta:"\u03b7",ETH:"\xd0",eth:"\xf0",Euml:"\xcb",euml:"\xeb",euro:"\u20ac",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\ufb03",fflig:"\ufb00",ffllig:"\ufb04",Ffr:"\ud835\udd09",ffr:"\ud835\udd23",filig:"\ufb01",FilledSmallSquare:"\u25fc",FilledVerySmallSquare:"\u25aa",fjlig:"fj",flat:"\u266d",fllig:"\ufb02",fltns:"\u25b1",fnof:"\u0192",Fopf:"\ud835\udd3d",fopf:"\ud835\udd57",forall:"\u2200",ForAll:"\u2200",fork:"\u22d4",forkv:"\u2ad9",Fouriertrf:"\u2131",fpartint:"\u2a0d",frac12:"\xbd",frac13:"\u2153",frac14:"\xbc",frac15:"\u2155",frac16:"\u2159",frac18:"\u215b",frac23:"\u2154",frac25:"\u2156",frac34:"\xbe",frac35:"\u2157",frac38:"\u215c",frac45:"\u2158",frac56:"\u215a",frac58:"\u215d",frac78:"\u215e",frasl:"\u2044",frown:"\u2322",fscr:"\ud835\udcbb",Fscr:"\u2131",gacute:"\u01f5",Gamma:"\u0393",gamma:"\u03b3",Gammad:"\u03dc",gammad:"\u03dd",gap:"\u2a86",Gbreve:"\u011e",gbreve:"\u011f",Gcedil:"\u0122",Gcirc:"\u011c",gcirc:"\u011d",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",ge:"\u2265",gE:"\u2267",gEl:"\u2a8c",gel:"\u22db",geq:"\u2265",geqq:"\u2267",geqslant:"\u2a7e",gescc:"\u2aa9",ges:"\u2a7e",gesdot:"\u2a80",gesdoto:"\u2a82",gesdotol:"\u2a84",gesl:"\u22db\ufe00",gesles:"\u2a94",Gfr:"\ud835\udd0a",gfr:"\ud835\udd24",gg:"\u226b",Gg:"\u22d9",ggg:"\u22d9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gla:"\u2aa5",gl:"\u2277",glE:"\u2a92",glj:"\u2aa4",gnap:"\u2a8a",gnapprox:"\u2a8a",gne:"\u2a88",gnE:"\u2269",gneq:"\u2a88",gneqq:"\u2269",gnsim:"\u22e7",Gopf:"\ud835\udd3e",gopf:"\ud835\udd58",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22db",GreaterFullEqual:"\u2267",GreaterGreater:"\u2aa2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2a7e",GreaterTilde:"\u2273",Gscr:"\ud835\udca2",gscr:"\u210a",gsim:"\u2273",gsime:"\u2a8e",gsiml:"\u2a90",gtcc:"\u2aa7",gtcir:"\u2a7a",gt:">",GT:">",Gt:"\u226b",gtdot:"\u22d7",gtlPar:"\u2995",gtquest:"\u2a7c",gtrapprox:"\u2a86",gtrarr:"\u2978",gtrdot:"\u22d7",gtreqless:"\u22db",gtreqqless:"\u2a8c",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\ufe00",gvnE:"\u2269\ufe00",Hacek:"\u02c7",hairsp:"\u200a",half:"\xbd",hamilt:"\u210b",HARDcy:"\u042a",hardcy:"\u044a",harrcir:"\u2948",harr:"\u2194",hArr:"\u21d4",harrw:"\u21ad",Hat:"^",hbar:"\u210f",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22b9",hfr:"\ud835\udd25",Hfr:"\u210c",HilbertSpace:"\u210b",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21ff",homtht:"\u223b",hookleftarrow:"\u21a9",hookrightarrow:"\u21aa",hopf:"\ud835\udd59",Hopf:"\u210d",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\ud835\udcbd",Hscr:"\u210b",hslash:"\u210f",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224e",HumpEqual:"\u224f",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xcd",iacute:"\xed",ic:"\u2063",Icirc:"\xce",icirc:"\xee",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xa1",iff:"\u21d4",ifr:"\ud835\udd26",Ifr:"\u2111",Igrave:"\xcc",igrave:"\xec",ii:"\u2148",iiiint:"\u2a0c",iiint:"\u222d",iinfin:"\u29dc",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Imacr:"\u012a",imacr:"\u012b",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",Im:"\u2111",imof:"\u22b7",imped:"\u01b5",Implies:"\u21d2",incare:"\u2105",in:"\u2208",infin:"\u221e",infintie:"\u29dd",inodot:"\u0131",intcal:"\u22ba",int:"\u222b",Int:"\u222c",integers:"\u2124",Integral:"\u222b",intercal:"\u22ba",Intersection:"\u22c2",intlarhk:"\u2a17",intprod:"\u2a3c",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012e",iogon:"\u012f",Iopf:"\ud835\udd40",iopf:"\ud835\udd5a",Iota:"\u0399",iota:"\u03b9",iprod:"\u2a3c",iquest:"\xbf",iscr:"\ud835\udcbe",Iscr:"\u2110",isin:"\u2208",isindot:"\u22f5",isinE:"\u22f9",isins:"\u22f4",isinsv:"\u22f3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xcf",iuml:"\xef",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\ud835\udd0d",jfr:"\ud835\udd27",jmath:"\u0237",Jopf:"\ud835\udd41",
jopf:"\ud835\udd5b",Jscr:"\ud835\udca5",jscr:"\ud835\udcbf",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039a",kappa:"\u03ba",kappav:"\u03f0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041a",kcy:"\u043a",Kfr:"\ud835\udd0e",kfr:"\ud835\udd28",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040c",kjcy:"\u045c",Kopf:"\ud835\udd42",kopf:"\ud835\udd5c",Kscr:"\ud835\udca6",kscr:"\ud835\udcc0",lAarr:"\u21da",Lacute:"\u0139",lacute:"\u013a",laemptyv:"\u29b4",lagran:"\u2112",Lambda:"\u039b",lambda:"\u03bb",lang:"\u27e8",Lang:"\u27ea",langd:"\u2991",langle:"\u27e8",lap:"\u2a85",Laplacetrf:"\u2112",laquo:"\xab",larrb:"\u21e4",larrbfs:"\u291f",larr:"\u2190",Larr:"\u219e",lArr:"\u21d0",larrfs:"\u291d",larrhk:"\u21a9",larrlp:"\u21ab",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21a2",latail:"\u2919",lAtail:"\u291b",lat:"\u2aab",late:"\u2aad",lates:"\u2aad\ufe00",lbarr:"\u290c",lBarr:"\u290e",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298b",lbrksld:"\u298f",lbrkslu:"\u298d",Lcaron:"\u013d",lcaron:"\u013e",Lcedil:"\u013b",lcedil:"\u013c",lceil:"\u2308",lcub:"{",Lcy:"\u041b",lcy:"\u043b",ldca:"\u2936",ldquo:"\u201c",ldquor:"\u201e",ldrdhar:"\u2967",ldrushar:"\u294b",ldsh:"\u21b2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27e8",LeftArrowBar:"\u21e4",leftarrow:"\u2190",LeftArrow:"\u2190",Leftarrow:"\u21d0",LeftArrowRightArrow:"\u21c6",leftarrowtail:"\u21a2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27e6",LeftDownTeeVector:"\u2961",LeftDownVectorBar:"\u2959",LeftDownVector:"\u21c3",LeftFloor:"\u230a",leftharpoondown:"\u21bd",leftharpoonup:"\u21bc",leftleftarrows:"\u21c7",leftrightarrow:"\u2194",LeftRightArrow:"\u2194",Leftrightarrow:"\u21d4",leftrightarrows:"\u21c6",leftrightharpoons:"\u21cb",leftrightsquigarrow:"\u21ad",LeftRightVector:"\u294e",LeftTeeArrow:"\u21a4",LeftTee:"\u22a3",LeftTeeVector:"\u295a",leftthreetimes:"\u22cb",LeftTriangleBar:"\u29cf",LeftTriangle:"\u22b2",LeftTriangleEqual:"\u22b4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVectorBar:"\u2958",LeftUpVector:"\u21bf",LeftVectorBar:"\u2952",LeftVector:"\u21bc",lEg:"\u2a8b",leg:"\u22da",leq:"\u2264",leqq:"\u2266",leqslant:"\u2a7d",lescc:"\u2aa8",les:"\u2a7d",lesdot:"\u2a7f",lesdoto:"\u2a81",lesdotor:"\u2a83",lesg:"\u22da\ufe00",lesges:"\u2a93",lessapprox:"\u2a85",lessdot:"\u22d6",lesseqgtr:"\u22da",lesseqqgtr:"\u2a8b",LessEqualGreater:"\u22da",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2aa1",lesssim:"\u2272",LessSlantEqual:"\u2a7d",LessTilde:"\u2272",lfisht:"\u297c",lfloor:"\u230a",Lfr:"\ud835\udd0f",lfr:"\ud835\udd29",lg:"\u2276",lgE:"\u2a91",lHar:"\u2962",lhard:"\u21bd",lharu:"\u21bc",lharul:"\u296a",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",llarr:"\u21c7",ll:"\u226a",Ll:"\u22d8",llcorner:"\u231e",Lleftarrow:"\u21da",llhard:"\u296b",lltri:"\u25fa",Lmidot:"\u013f",lmidot:"\u0140",lmoustache:"\u23b0",lmoust:"\u23b0",lnap:"\u2a89",lnapprox:"\u2a89",lne:"\u2a87",lnE:"\u2268",lneq:"\u2a87",lneqq:"\u2268",lnsim:"\u22e6",loang:"\u27ec",loarr:"\u21fd",lobrk:"\u27e6",longleftarrow:"\u27f5",LongLeftArrow:"\u27f5",Longleftarrow:"\u27f8",longleftrightarrow:"\u27f7",LongLeftRightArrow:"\u27f7",Longleftrightarrow:"\u27fa",longmapsto:"\u27fc",longrightarrow:"\u27f6",LongRightArrow:"\u27f6",Longrightarrow:"\u27f9",looparrowleft:"\u21ab",looparrowright:"\u21ac",lopar:"\u2985",Lopf:"\ud835\udd43",lopf:"\ud835\udd5d",loplus:"\u2a2d",lotimes:"\u2a34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25ca",lozenge:"\u25ca",lozf:"\u29eb",lpar:"(",lparlt:"\u2993",lrarr:"\u21c6",lrcorner:"\u231f",lrhar:"\u21cb",lrhard:"\u296d",lrm:"\u200e",lrtri:"\u22bf",lsaquo:"\u2039",lscr:"\ud835\udcc1",Lscr:"\u2112",lsh:"\u21b0",Lsh:"\u21b0",lsim:"\u2272",lsime:"\u2a8d",lsimg:"\u2a8f",lsqb:"[",lsquo:"\u2018",lsquor:"\u201a",Lstrok:"\u0141",lstrok:"\u0142",ltcc:"\u2aa6",ltcir:"\u2a79",lt:"<",LT:"<",Lt:"\u226a",ltdot:"\u22d6",lthree:"\u22cb",ltimes:"\u22c9",ltlarr:"\u2976",ltquest:"\u2a7b",ltri:"\u25c3",ltrie:"\u22b4",ltrif:"\u25c2",ltrPar:"\u2996",lurdshar:"\u294a",luruhar:"\u2966",lvertneqq:"\u2268\ufe00",lvnE:"\u2268\ufe00",macr:"\xaf",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21a6",mapsto:"\u21a6",mapstodown:"\u21a7",mapstoleft:"\u21a4",mapstoup:"\u21a5",marker:"\u25ae",mcomma:"\u2a29",Mcy:"\u041c",mcy:"\u043c",mdash:"\u2014",mDDot:"\u223a",measuredangle:"\u2221",MediumSpace:"\u205f",Mellintrf:"\u2133",Mfr:"\ud835\udd10",mfr:"\ud835\udd2a",mho:"\u2127",micro:"\xb5",midast:"*",midcir:"\u2af0",mid:"\u2223",middot:"\xb7",minusb:"\u229f",minus:"\u2212",minusd:"\u2238",minusdu:"\u2a2a",MinusPlus:"\u2213",mlcp:"\u2adb",mldr:"\u2026",mnplus:"\u2213",models:"\u22a7",Mopf:"\ud835\udd44",mopf:"\ud835\udd5e",mp:"\u2213",mscr:"\ud835\udcc2",Mscr:"\u2133",mstpos:"\u223e",Mu:"\u039c",mu:"\u03bc",multimap:"\u22b8",mumap:"\u22b8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20d2",nap:"\u2249",napE:"\u2a70\u0338",napid:"\u224b\u0338",napos:"\u0149",napprox:"\u2249",natural:"\u266e",naturals:"\u2115",natur:"\u266e",nbsp:"\xa0",nbump:"\u224e\u0338",nbumpe:"\u224f\u0338",ncap:"\u2a43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2a6d\u0338",ncup:"\u2a42",Ncy:"\u041d",ncy:"\u043d",ndash:"\u2013",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21d7",nearrow:"\u2197",ne:"\u2260",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200b",NegativeThickSpace:"\u200b",NegativeThinSpace:"\u200b",NegativeVeryThinSpace:"\u200b",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226b",NestedLessLess:"\u226a",NewLine:"\n",nexist:"\u2204",nexists:"\u2204",Nfr:"\ud835\udd11",nfr:"\ud835\udd2b",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2a7e\u0338",nges:"\u2a7e\u0338",nGg:"\u22d9\u0338",ngsim:"\u2275",nGt:"\u226b\u20d2",ngt:"\u226f",ngtr:"\u226f",nGtv:"\u226b\u0338",nharr:"\u21ae",nhArr:"\u21ce",nhpar:"\u2af2",ni:"\u220b",nis:"\u22fc",nisd:"\u22fa",niv:"\u220b",NJcy:"\u040a",njcy:"\u045a",nlarr:"\u219a",nlArr:"\u21cd",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nleftarrow:"\u219a",nLeftarrow:"\u21cd",nleftrightarrow:"\u21ae",nLeftrightarrow:"\u21ce",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2a7d\u0338",nles:"\u2a7d\u0338",nless:"\u226e",nLl:"\u22d8\u0338",nlsim:"\u2274",nLt:"\u226a\u20d2",nlt:"\u226e",nltri:"\u22ea",nltrie:"\u22ec",nLtv:"\u226a\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xa0",nopf:"\ud835\udd5f",Nopf:"\u2115",Not:"\u2aec",not:"\xac",NotCongruent:"\u2262",NotCupCap:"\u226d",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226f",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226b\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2a7e\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224e\u0338",NotHumpEqual:"\u224f\u0338",notin:"\u2209",notindot:"\u22f5\u0338",notinE:"\u22f9\u0338",notinva:"\u2209",notinvb:"\u22f7",notinvc:"\u22f6",NotLeftTriangleBar:"\u29cf\u0338",NotLeftTriangle:"\u22ea",NotLeftTriangleEqual:"\u22ec",NotLess:"\u226e",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226a\u0338",NotLessSlantEqual:"\u2a7d\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2aa2\u0338",NotNestedLessLess:"\u2aa1\u0338",notni:"\u220c",notniva:"\u220c",notnivb:"\u22fe",notnivc:"\u22fd",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2aaf\u0338",NotPrecedesSlantEqual:"\u22e0",NotReverseElement:"\u220c",NotRightTriangleBar:"\u29d0\u0338",NotRightTriangle:"\u22eb",NotRightTriangleEqual:"\u22ed",NotSquareSubset:"\u228f\u0338",NotSquareSubsetEqual:"\u22e2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22e3",NotSubset:"\u2282\u20d2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2ab0\u0338",NotSucceedsSlantEqual:"\u22e1",NotSucceedsTilde:"\u227f\u0338",NotSuperset:"\u2283\u20d2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",nparallel:"\u2226",npar:"\u2226",nparsl:"\u2afd\u20e5",npart:"\u2202\u0338",npolint:"\u2a14",npr:"\u2280",nprcue:"\u22e0",nprec:"\u2280",npreceq:"\u2aaf\u0338",npre:"\u2aaf\u0338",nrarrc:"\u2933\u0338",nrarr:"\u219b",nrArr:"\u21cf",nrarrw:"\u219d\u0338",nrightarrow:"\u219b",nRightarrow:"\u21cf",nrtri:"\u22eb",nrtrie:"\u22ed",nsc:"\u2281",nsccue:"\u22e1",nsce:"\u2ab0\u0338",Nscr:"\ud835\udca9",nscr:"\ud835\udcc3",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22e2",nsqsupe:"\u22e3",nsub:"\u2284",nsubE:"\u2ac5\u0338",nsube:"\u2288",nsubset:"\u2282\u20d2",nsubseteq:"\u2288",nsubseteqq:"\u2ac5\u0338",nsucc:"\u2281",nsucceq:"\u2ab0\u0338",nsup:"\u2285",nsupE:"\u2ac6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20d2",nsupseteq:"\u2289",nsupseteqq:"\u2ac6\u0338",ntgl:"\u2279",Ntilde:"\xd1",ntilde:"\xf1",ntlg:"\u2278",ntriangleleft:"\u22ea",ntrianglelefteq:"\u22ec",ntriangleright:"\u22eb",ntrianglerighteq:"\u22ed",Nu:"\u039d",nu:"\u03bd",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224d\u20d2",nvdash:"\u22ac",nvDash:"\u22ad",nVdash:"\u22ae",nVDash:"\u22af",nvge:"\u2265\u20d2",nvgt:">\u20d2",nvHarr:"\u2904",nvinfin:"\u29de",nvlArr:"\u2902",nvle:"\u2264\u20d2",nvlt:"<\u20d2",nvltrie:"\u22b4\u20d2",nvrArr:"\u2903",nvrtrie:"\u22b5\u20d2",nvsim:"\u223c\u20d2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21d6",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xd3",oacute:"\xf3",oast:"\u229b",Ocirc:"\xd4",ocirc:"\xf4",ocir:"\u229a",Ocy:"\u041e",ocy:"\u043e",odash:"\u229d",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2a38",odot:"\u2299",odsold:"\u29bc",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29bf",Ofr:"\ud835\udd12",ofr:"\ud835\udd2c",ogon:"\u02db",Ograve:"\xd2",ograve:"\xf2",ogt:"\u29c1",ohbar:"\u29b5",ohm:"\u03a9",oint:"\u222e",olarr:"\u21ba",olcir:"\u29be",olcross:"\u29bb",oline:"\u203e",olt:"\u29c0",Omacr:"\u014c",omacr:"\u014d",Omega:"\u03a9",omega:"\u03c9",Omicron:"\u039f",omicron:"\u03bf",omid:"\u29b6",ominus:"\u2296",Oopf:"\ud835\udd46",oopf:"\ud835\udd60",opar:"\u29b7",OpenCurlyDoubleQuote:"\u201c",OpenCurlyQuote:"\u2018",operp:"\u29b9",oplus:"\u2295",orarr:"\u21bb",Or:"\u2a54",or:"\u2228",ord:"\u2a5d",order:"\u2134",orderof:"\u2134",ordf:"\xaa",ordm:"\xba",origof:"\u22b6",oror:"\u2a56",orslope:"\u2a57",orv:"\u2a5b",oS:"\u24c8",Oscr:"\ud835\udcaa",oscr:"\u2134",Oslash:"\xd8",oslash:"\xf8",osol:"\u2298",Otilde:"\xd5",otilde:"\xf5",otimesas:"\u2a36",Otimes:"\u2a37",otimes:"\u2297",Ouml:"\xd6",ouml:"\xf6",ovbar:"\u233d",OverBar:"\u203e",OverBrace:"\u23de",OverBracket:"\u23b4",OverParenthesis:"\u23dc",para:"\xb6",parallel:"\u2225",par:"\u2225",parsim:"\u2af3",parsl:"\u2afd",part:"\u2202",PartialD:"\u2202",Pcy:"\u041f",pcy:"\u043f",percnt:"%",period:".",permil:"\u2030",perp:"\u22a5",pertenk:"\u2031",Pfr:"\ud835\udd13",pfr:"\ud835\udd2d",Phi:"\u03a6",phi:"\u03c6",phiv:"\u03d5",phmmat:"\u2133",phone:"\u260e",Pi:"\u03a0",pi:"\u03c0",pitchfork:"\u22d4",piv:"\u03d6",planck:"\u210f",planckh:"\u210e",plankv:"\u210f",plusacir:"\u2a23",plusb:"\u229e",pluscir:"\u2a22",plus:"+",plusdo:"\u2214",plusdu:"\u2a25",pluse:"\u2a72",PlusMinus:"\xb1",plusmn:"\xb1",plussim:"\u2a26",plustwo:"\u2a27",pm:"\xb1",Poincareplane:"\u210c",pointint:"\u2a15",popf:"\ud835\udd61",Popf:"\u2119",pound:"\xa3",prap:"\u2ab7",Pr:"\u2abb",pr:"\u227a",prcue:"\u227c",precapprox:"\u2ab7",prec:"\u227a",preccurlyeq:"\u227c",Precedes:"\u227a",PrecedesEqual:"\u2aaf",PrecedesSlantEqual:"\u227c",PrecedesTilde:"\u227e",preceq:"\u2aaf",precnapprox:"\u2ab9",precneqq:"\u2ab5",precnsim:"\u22e8",pre:"\u2aaf",prE:"\u2ab3",precsim:"\u227e",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2ab9",prnE:"\u2ab5",prnsim:"\u22e8",prod:"\u220f",Product:"\u220f",profalar:"\u232e",profline:"\u2312",profsurf:"\u2313",prop:"\u221d",Proportional:"\u221d",Proportion:"\u2237",propto:"\u221d",prsim:"\u227e",prurel:"\u22b0",Pscr:"\ud835\udcab",pscr:"\ud835\udcc5",Psi:"\u03a8",psi:"\u03c8",puncsp:"\u2008",Qfr:"\ud835\udd14",qfr:"\ud835\udd2e",qint:"\u2a0c",qopf:"\ud835\udd62",Qopf:"\u211a",qprime:"\u2057",Qscr:"\ud835\udcac",qscr:"\ud835\udcc6",quaternions:"\u210d",quatint:"\u2a16",quest:"?",questeq:"\u225f",quot:'"',QUOT:'"',rAarr:"\u21db",race:"\u223d\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221a",raemptyv:"\u29b3",rang:"\u27e9",Rang:"\u27eb",rangd:"\u2992",range:"\u29a5",rangle:"\u27e9",raquo:"\xbb",rarrap:"\u2975",rarrb:"\u21e5",rarrbfs:"\u2920",rarrc:"\u2933",rarr:"\u2192",Rarr:"\u21a0",rArr:"\u21d2",rarrfs:"\u291e",rarrhk:"\u21aa",rarrlp:"\u21ac",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21a3",rarrw:"\u219d",ratail:"\u291a",rAtail:"\u291c",ratio:"\u2236",rationals:"\u211a",rbarr:"\u290d",rBarr:"\u290f",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298c",rbrksld:"\u298e",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201d",rdquor:"\u201d",rdsh:"\u21b3",real:"\u211c",realine:"\u211b",realpart:"\u211c",reals:"\u211d",Re:"\u211c",rect:"\u25ad",reg:"\xae",REG:"\xae",ReverseElement:"\u220b",ReverseEquilibrium:"\u21cb",ReverseUpEquilibrium:"\u296f",rfisht:"\u297d",rfloor:"\u230b",rfr:"\ud835\udd2f",Rfr:"\u211c",rHar:"\u2964",rhard:"\u21c1",rharu:"\u21c0",rharul:"\u296c",Rho:"\u03a1",rho:"\u03c1",rhov:"\u03f1",RightAngleBracket:"\u27e9",RightArrowBar:"\u21e5",rightarrow:"\u2192",RightArrow:"\u2192",Rightarrow:"\u21d2",RightArrowLeftArrow:"\u21c4",rightarrowtail:"\u21a3",RightCeiling:"\u2309",RightDoubleBracket:"\u27e7",RightDownTeeVector:"\u295d",RightDownVectorBar:"\u2955",RightDownVector:"\u21c2",RightFloor:"\u230b",rightharpoondown:"\u21c1",rightharpoonup:"\u21c0",rightleftarrows:"\u21c4",rightleftharpoons:"\u21cc",rightrightarrows:"\u21c9",rightsquigarrow:"\u219d",RightTeeArrow:"\u21a6",RightTee:"\u22a2",RightTeeVector:"\u295b",rightthreetimes:"\u22cc",RightTriangleBar:"\u29d0",RightTriangle:"\u22b3",RightTriangleEqual:"\u22b5",RightUpDownVector:"\u294f",RightUpTeeVector:"\u295c",RightUpVectorBar:"\u2954",RightUpVector:"\u21be",RightVectorBar:"\u2953",RightVector:"\u21c0",ring:"\u02da",risingdotseq:"\u2253",rlarr:"\u21c4",rlhar:"\u21cc",rlm:"\u200f",rmoustache:"\u23b1",rmoust:"\u23b1",rnmid:"\u2aee",roang:"\u27ed",roarr:"\u21fe",robrk:"\u27e7",ropar:"\u2986",ropf:"\ud835\udd63",Ropf:"\u211d",roplus:"\u2a2e",rotimes:"\u2a35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2a12",rrarr:"\u21c9",Rrightarrow:"\u21db",rsaquo:"\u203a",rscr:"\ud835\udcc7",Rscr:"\u211b",rsh:"\u21b1",Rsh:"\u21b1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22cc",rtimes:"\u22ca",rtri:"\u25b9",rtrie:"\u22b5",rtrif:"\u25b8",rtriltri:"\u29ce",RuleDelayed:"\u29f4",ruluhar:"\u2968",rx:"\u211e",Sacute:"\u015a",sacute:"\u015b",sbquo:"\u201a",scap:"\u2ab8",Scaron:"\u0160",scaron:"\u0161",Sc:"\u2abc",sc:"\u227b",sccue:"\u227d",sce:"\u2ab0",scE:"\u2ab4",Scedil:"\u015e",scedil:"\u015f",Scirc:"\u015c",scirc:"\u015d",scnap:"\u2aba",scnE:"\u2ab6",scnsim:"\u22e9",scpolint:"\u2a13",scsim:"\u227f",Scy:"\u0421",scy:"\u0441",sdotb:"\u22a1",sdot:"\u22c5",sdote:"\u2a66",searhk:"\u2925",searr:"\u2198",seArr:"\u21d8",searrow:"\u2198",sect:"\xa7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\ud835\udd16",sfr:"\ud835\udd30",sfrown:"\u2322",sharp:"\u266f",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xad",Sigma:"\u03a3",sigma:"\u03c3",sigmaf:"\u03c2",sigmav:"\u03c2",sim:"\u223c",simdot:"\u2a6a",sime:"\u2243",simeq:"\u2243",simg:"\u2a9e",simgE:"\u2aa0",siml:"\u2a9d",simlE:"\u2a9f",simne:"\u2246",simplus:"\u2a24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2a33",smeparsl:"\u29e4",smid:"\u2223",smile:"\u2323",smt:"\u2aaa",smte:"\u2aac",smtes:"\u2aac\ufe00",SOFTcy:"\u042c",softcy:"\u044c",solbar:"\u233f",solb:"\u29c4",sol:"/",Sopf:"\ud835\udd4a",sopf:"\ud835\udd64",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\ufe00",sqcup:"\u2294",sqcups:"\u2294\ufe00",Sqrt:"\u221a",sqsub:"\u228f",sqsube:"\u2291",sqsubset:"\u228f",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",square:"\u25a1",Square:"\u25a1",SquareIntersection:"\u2293",SquareSubset:"\u228f",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25aa",squ:"\u25a1",squf:"\u25aa",srarr:"\u2192",Sscr:"\ud835\udcae",sscr:"\ud835\udcc8",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22c6",Star:"\u22c6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03f5",straightphi:"\u03d5",strns:"\xaf",sub:"\u2282",Sub:"\u22d0",subdot:"\u2abd",subE:"\u2ac5",sube:"\u2286",subedot:"\u2ac3",submult:"\u2ac1",subnE:"\u2acb",subne:"\u228a",subplus:"\u2abf",subrarr:"\u2979",subset:"\u2282",Subset:"\u22d0",subseteq:"\u2286",subseteqq:"\u2ac5",SubsetEqual:"\u2286",subsetneq:"\u228a",subsetneqq:"\u2acb",subsim:"\u2ac7",subsub:"\u2ad5",subsup:"\u2ad3",succapprox:"\u2ab8",succ:"\u227b",succcurlyeq:"\u227d",Succeeds:"\u227b",SucceedsEqual:"\u2ab0",SucceedsSlantEqual:"\u227d",SucceedsTilde:"\u227f",succeq:"\u2ab0",succnapprox:"\u2aba",succneqq:"\u2ab6",succnsim:"\u22e9",succsim:"\u227f",SuchThat:"\u220b",sum:"\u2211",Sum:"\u2211",sung:"\u266a",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",sup:"\u2283",Sup:"\u22d1",supdot:"\u2abe",supdsub:"\u2ad8",supE:"\u2ac6",supe:"\u2287",supedot:"\u2ac4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27c9",suphsub:"\u2ad7",suplarr:"\u297b",supmult:"\u2ac2",supnE:"\u2acc",supne:"\u228b",supplus:"\u2ac0",supset:"\u2283",Supset:"\u22d1",supseteq:"\u2287",supseteqq:"\u2ac6",supsetneq:"\u228b",supsetneqq:"\u2acc",supsim:"\u2ac8",supsub:"\u2ad4",supsup:"\u2ad6",swarhk:"\u2926",swarr:"\u2199",swArr:"\u21d9",swarrow:"\u2199",swnwar:"\u292a",szlig:"\xdf",Tab:"\t",target:"\u2316",Tau:"\u03a4",tau:"\u03c4",tbrk:"\u23b4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20db",telrec:"\u2315",Tfr:"\ud835\udd17",tfr:"\ud835\udd31",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",Theta:"\u0398",theta:"\u03b8",thetasym:"\u03d1",thetav:"\u03d1",thickapprox:"\u2248",thicksim:"\u223c",ThickSpace:"\u205f\u200a",ThinSpace:"\u2009",thinsp:"\u2009",thkap:"\u2248",thksim:"\u223c",THORN:"\xde",thorn:"\xfe",tilde:"\u02dc",Tilde:"\u223c",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",timesbar:"\u2a31",timesb:"\u22a0",times:"\xd7",timesd:"\u2a30",tint:"\u222d",toea:"\u2928",topbot:"\u2336",topcir:"\u2af1",top:"\u22a4",Topf:"\ud835\udd4b",topf:"\ud835\udd65",topfork:"\u2ada",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25b5",triangledown:"\u25bf",triangleleft:"\u25c3",trianglelefteq:"\u22b4",triangleq:"\u225c",triangleright:"\u25b9",trianglerighteq:"\u22b5",tridot:"\u25ec",trie:"\u225c",triminus:"\u2a3a",TripleDot:"\u20db",triplus:"\u2a39",trisb:"\u29cd",tritime:"\u2a3b",trpezium:"\u23e2",Tscr:"\ud835\udcaf",tscr:"\ud835\udcc9",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040b",tshcy:"\u045b",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226c",twoheadleftarrow:"\u219e",twoheadrightarrow:"\u21a0",Uacute:"\xda",uacute:"\xfa",uarr:"\u2191",Uarr:"\u219f",uArr:"\u21d1",Uarrocir:"\u2949",Ubrcy:"\u040e",ubrcy:"\u045e",Ubreve:"\u016c",ubreve:"\u016d",Ucirc:"\xdb",ucirc:"\xfb",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21c5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296e",ufisht:"\u297e",Ufr:"\ud835\udd18",ufr:"\ud835\udd32",Ugrave:"\xd9",ugrave:"\xf9",uHar:"\u2963",uharl:"\u21bf",uharr:"\u21be",uhblk:"\u2580",ulcorn:"\u231c",ulcorner:"\u231c",ulcrop:"\u230f",ultri:"\u25f8",Umacr:"\u016a",umacr:"\u016b",uml:"\xa8",UnderBar:"_",UnderBrace:"\u23df",UnderBracket:"\u23b5",UnderParenthesis:"\u23dd",Union:"\u22c3",UnionPlus:"\u228e",Uogon:"\u0172",uogon:"\u0173",Uopf:"\ud835\udd4c",uopf:"\ud835\udd66",UpArrowBar:"\u2912",uparrow:"\u2191",UpArrow:"\u2191",Uparrow:"\u21d1",UpArrowDownArrow:"\u21c5",updownarrow:"\u2195",UpDownArrow:"\u2195",Updownarrow:"\u21d5",UpEquilibrium:"\u296e",upharpoonleft:"\u21bf",upharpoonright:"\u21be",uplus:"\u228e",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03c5",Upsi:"\u03d2",upsih:"\u03d2",Upsilon:"\u03a5",upsilon:"\u03c5",UpTeeArrow:"\u21a5",UpTee:"\u22a5",upuparrows:"\u21c8",urcorn:"\u231d",urcorner:"\u231d",urcrop:"\u230e",Uring:"\u016e",uring:"\u016f",urtri:"\u25f9",Uscr:"\ud835\udcb0",uscr:"\ud835\udcca",utdot:"\u22f0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25b5",utrif:"\u25b4",uuarr:"\u21c8",Uuml:"\xdc",uuml:"\xfc",uwangle:"\u29a7",vangrt:"\u299c",varepsilon:"\u03f5",varkappa:"\u03f0",varnothing:"\u2205",varphi:"\u03d5",varpi:"\u03d6",varpropto:"\u221d",varr:"\u2195",vArr:"\u21d5",varrho:"\u03f1",varsigma:"\u03c2",varsubsetneq:"\u228a\ufe00",varsubsetneqq:"\u2acb\ufe00",varsupsetneq:"\u228b\ufe00",varsupsetneqq:"\u2acc\ufe00",vartheta:"\u03d1",vartriangleleft:"\u22b2",vartriangleright:"\u22b3",vBar:"\u2ae8",Vbar:"\u2aeb",vBarv:"\u2ae9",Vcy:"\u0412",vcy:"\u0432",vdash:"\u22a2",vDash:"\u22a8",Vdash:"\u22a9",VDash:"\u22ab",Vdashl:"\u2ae6",veebar:"\u22bb",vee:"\u2228",Vee:"\u22c1",veeeq:"\u225a",vellip:"\u22ee",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200a",Vfr:"\ud835\udd19",vfr:"\ud835\udd33",vltri:"\u22b2",vnsub:"\u2282\u20d2",vnsup:"\u2283\u20d2",Vopf:"\ud835\udd4d",vopf:"\ud835\udd67",vprop:"\u221d",vrtri:"\u22b3",Vscr:"\ud835\udcb1",vscr:"\ud835\udccb",vsubnE:"\u2acb\ufe00",vsubne:"\u228a\ufe00",vsupnE:"\u2acc\ufe00",vsupne:"\u228b\ufe00",Vvdash:"\u22aa",vzigzag:"\u299a",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2a5f",wedge:"\u2227",Wedge:"\u22c0",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\ud835\udd1a",wfr:"\ud835\udd34",Wopf:"\ud835\udd4e",wopf:"\ud835\udd68",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\ud835\udcb2",wscr:"\ud835\udccc",xcap:"\u22c2",xcirc:"\u25ef",xcup:"\u22c3",xdtri:"\u25bd",Xfr:"\ud835\udd1b",xfr:"\ud835\udd35",xharr:"\u27f7",xhArr:"\u27fa",Xi:"\u039e",xi:"\u03be",xlarr:"\u27f5",xlArr:"\u27f8",xmap:"\u27fc",xnis:"\u22fb",xodot:"\u2a00",Xopf:"\ud835\udd4f",xopf:"\ud835\udd69",xoplus:"\u2a01",xotime:"\u2a02",xrarr:"\u27f6",xrArr:"\u27f9",Xscr:"\ud835\udcb3",xscr:"\ud835\udccd",xsqcup:"\u2a06",xuplus:"\u2a04",xutri:"\u25b3",xvee:"\u22c1",xwedge:"\u22c0",Yacute:"\xdd",yacute:"\xfd",YAcy:"\u042f",yacy:"\u044f",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042b",ycy:"\u044b",yen:"\xa5",Yfr:"\ud835\udd1c",yfr:"\ud835\udd36",YIcy:"\u0407",yicy:"\u0457",Yopf:"\ud835\udd50",yopf:"\ud835\udd6a",Yscr:"\ud835\udcb4",yscr:"\ud835\udcce",YUcy:"\u042e",yucy:"\u044e",yuml:"\xff",Yuml:"\u0178",Zacute:"\u0179",zacute:"\u017a",Zcaron:"\u017d",zcaron:"\u017e",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017b",zdot:"\u017c",zeetrf:"\u2128",ZeroWidthSpace:"\u200b",Zeta:"\u0396",zeta:"\u03b6",zfr:"\ud835\udd37",Zfr:"\u2128",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21dd",zopf:"\ud835\udd6b",Zopf:"\u2124",Zscr:"\ud835\udcb5",zscr:"\ud835\udccf",zwj:"\u200d",zwnj:"\u200c"}},{}],53:[function(e,r,t){"use strict";function n(e){return Array.prototype.slice.call(arguments,1).forEach(function(r){r&&Object.keys(r).forEach(function(t){e[t]=r[t]})}),e}function s(e){return Object.prototype.toString.call(e)}function o(e){return"[object String]"===s(e)}function i(e){return"[object Object]"===s(e)}function a(e){return"[object RegExp]"===s(e)}function c(e){return"[object Function]"===s(e)}function l(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function u(e){return Object.keys(e||{}).reduce(function(e,r){return e||b.hasOwnProperty(r)},!1)}function p(e){e.__index__=-1,e.__text_cache__=""}function h(e){return function(r,t){var n=r.slice(t);return e.test(n)?n.match(e)[0].length:0}}function f(){return function(e,r){r.normalize(e)}}function d(r){function t(e){return e.replace("%TLDS%",s.src_tlds)}function n(e,r){throw new Error('(LinkifyIt) Invalid schema "'+e+'": '+r)}var s=r.re=e("./lib/re")(r.__opts__),u=r.__tlds__.slice();r.onCompile(),r.__tlds_replaced__||u.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"),u.push(s.src_xn),s.src_tlds=u.join("|"),s.email_fuzzy=RegExp(t(s.tpl_email_fuzzy),"i"),s.link_fuzzy=RegExp(t(s.tpl_link_fuzzy),"i"),s.link_no_ip_fuzzy=RegExp(t(s.tpl_link_no_ip_fuzzy),"i"),s.host_fuzzy_test=RegExp(t(s.tpl_host_fuzzy_test),"i");var d=[];r.__compiled__={},Object.keys(r.__schemas__).forEach(function(e){var t=r.__schemas__[e];if(null!==t){var s={validate:null,link:null};return r.__compiled__[e]=s,i(t)?(a(t.validate)?s.validate=h(t.validate):c(t.validate)?s.validate=t.validate:n(e,t),void(c(t.normalize)?s.normalize=t.normalize:t.normalize?n(e,t):s.normalize=f())):o(t)?void d.push(e):void n(e,t)}}),d.forEach(function(e){r.__compiled__[r.__schemas__[e]]&&(r.__compiled__[e].validate=r.__compiled__[r.__schemas__[e]].validate,r.__compiled__[e].normalize=r.__compiled__[r.__schemas__[e]].normalize)}),r.__compiled__[""]={validate:null,normalize:f()};var m=Object.keys(r.__compiled__).filter(function(e){return e.length>0&&r.__compiled__[e]}).map(l).join("|");r.re.schema_test=RegExp("(^|(?!_)(?:[><\uff5c]|"+s.src_ZPCc+"))("+m+")","i"),r.re.schema_search=RegExp("(^|(?!_)(?:[><\uff5c]|"+s.src_ZPCc+"))("+m+")","ig"),r.re.pretest=RegExp("("+r.re.schema_test.source+")|("+r.re.host_fuzzy_test.source+")|@","i"),p(r)}function m(e,r){var t=e.__index__,n=e.__last_index__,s=e.__text_cache__.slice(t,n);this.schema=e.__schema__.toLowerCase(),this.index=t+r,this.lastIndex=n+r,this.raw=s,this.text=s,this.url=s}function _(e,r){var t=new m(e,r);return e.__compiled__[t.schema].normalize(t,e),t}function g(e,r){if(!(this instanceof g))return new g(e,r);r||u(e)&&(r=e,e={}),this.__opts__=n({},b,r),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=n({},k,e),this.__compiled__={},this.__tlds__=v,this.__tlds_replaced__=!1,this.re={},d(this)}var b={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1},k={"http:":{validate:function(e,r,t){var n=e.slice(r);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(n)?n.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,r,t){var n=e.slice(r);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(n)?r>=3&&":"===e[r-3]?0:r>=3&&"/"===e[r-3]?0:n.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,r,t){var n=e.slice(r);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(n)?n.match(t.re.mailto)[0].length:0}}},v="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");g.prototype.add=function(e,r){return this.__schemas__[e]=r,d(this),this},g.prototype.set=function(e){return this.__opts__=n(this.__opts__,e),this},g.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var r,t,n,s,o,i,a,c;if(this.re.schema_test.test(e))for(a=this.re.schema_search,a.lastIndex=0;null!==(r=a.exec(e));)if(s=this.testSchemaAt(e,r[2],a.lastIndex)){this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+s;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||c<this.__index__)&&null!==(t=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(o=t.index+t[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=t.index+t[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&e.indexOf("@")>=0&&null!==(n=e.match(this.re.email_fuzzy))&&(o=n.index+n[1].length,i=n.index+n[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=i)),this.__index__>=0},g.prototype.pretest=function(e){return this.re.pretest.test(e)},g.prototype.testSchemaAt=function(e,r,t){return this.__compiled__[r.toLowerCase()]?this.__compiled__[r.toLowerCase()].validate(e,t,this):0},g.prototype.match=function(e){var r=0,t=[];this.__index__>=0&&this.__text_cache__===e&&(t.push(_(this,r)),r=this.__last_index__);for(var n=r?e.slice(r):e;this.test(n);)t.push(_(this,r)),n=n.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null},g.prototype.tlds=function(e,r){return e=Array.isArray(e)?e:[e],r?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,r,t){return e!==t[r-1]}).reverse(),d(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,d(this),this)},g.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),"mailto:"!==e.schema||/^mailto:/i.test(e.url)||(e.url="mailto:"+e.url)},g.prototype.onCompile=function(){},r.exports=g},{"./lib/re":54}],54:[function(e,r,t){"use strict";r.exports=function(r){var t={};t.src_Any=e("uc.micro/properties/Any/regex").source,t.src_Cc=e("uc.micro/categories/Cc/regex").source,t.src_Z=e("uc.micro/categories/Z/regex").source,t.src_P=e("uc.micro/categories/P/regex").source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");return t.src_pseudo_letter="(?:(?![><\uff5c]|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|[><\uff5c]|"+t.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|[><\uff5c]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!"+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!"+t.src_ZCc+"|[.]).|"+(r&&r["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+t.src_ZCc+").|\\!(?!"+t.src_ZCc+"|[!]).|\\?(?!"+t.src_ZCc+"|[?]).)+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-(?!-)|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|[><\uff5c]|\\(|"+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|"+t.src_ZPCc+"))((?![$+<=>^`|\uff5c])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|"+t.src_ZPCc+"))((?![$+<=>^`|\uff5c])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}},{
"uc.micro/categories/Cc/regex":61,"uc.micro/categories/P/regex":63,"uc.micro/categories/Z/regex":64,"uc.micro/properties/Any/regex":66}],55:[function(e,r,t){"use strict";function n(e){var r,t,n=o[e];if(n)return n;for(n=o[e]=[],r=0;r<128;r++)t=String.fromCharCode(r),n.push(t);for(r=0;r<e.length;r++)t=e.charCodeAt(r),n[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return n}function s(e,r){var t;return"string"!=typeof r&&(r=s.defaultChars),t=n(r),e.replace(/(%[a-f0-9]{2})+/gi,function(e){var r,n,s,o,i,a,c,l="";for(r=0,n=e.length;r<n;r+=3)s=parseInt(e.slice(r+1,r+3),16),s<128?l+=t[s]:192==(224&s)&&r+3<n&&128==(192&(o=parseInt(e.slice(r+4,r+6),16)))?(c=s<<6&1984|63&o,l+=c<128?"\ufffd\ufffd":String.fromCharCode(c),r+=3):224==(240&s)&&r+6<n&&(o=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),128==(192&o)&&128==(192&i))?(c=s<<12&61440|o<<6&4032|63&i,l+=c<2048||c>=55296&&c<=57343?"\ufffd\ufffd\ufffd":String.fromCharCode(c),r+=6):240==(248&s)&&r+9<n&&(o=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),a=parseInt(e.slice(r+10,r+12),16),128==(192&o)&&128==(192&i)&&128==(192&a))?(c=s<<18&1835008|o<<12&258048|i<<6&4032|63&a,c<65536||c>1114111?l+="\ufffd\ufffd\ufffd\ufffd":(c-=65536,l+=String.fromCharCode(55296+(c>>10),56320+(1023&c))),r+=9):l+="\ufffd";return l})}var o={};s.defaultChars=";/?:@&=+$,#",s.componentChars="",r.exports=s},{}],56:[function(e,r,t){"use strict";function n(e){var r,t,n=o[e];if(n)return n;for(n=o[e]=[],r=0;r<128;r++)t=String.fromCharCode(r),/^[0-9a-z]$/i.test(t)?n.push(t):n.push("%"+("0"+r.toString(16).toUpperCase()).slice(-2));for(r=0;r<e.length;r++)n[e.charCodeAt(r)]=e[r];return n}function s(e,r,t){var o,i,a,c,l,u="";for("string"!=typeof r&&(t=r,r=s.defaultChars),void 0===t&&(t=!0),l=n(r),o=0,i=e.length;o<i;o++)if(a=e.charCodeAt(o),t&&37===a&&o+2<i&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3)))u+=e.slice(o,o+3),o+=2;else if(a<128)u+=l[a];else if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&o+1<i&&(c=e.charCodeAt(o+1))>=56320&&c<=57343){u+=encodeURIComponent(e[o]+e[o+1]),o++;continue}u+="%EF%BF%BD"}else u+=encodeURIComponent(e[o]);return u}var o={};s.defaultChars=";/?:@&=+$,-_.!~*'()#",s.componentChars="-_.!~*'()",r.exports=s},{}],57:[function(e,r,t){"use strict";r.exports=function(e){var r="";return r+=e.protocol||"",r+=e.slashes?"//":"",r+=e.auth?e.auth+"@":"",r+=e.hostname&&e.hostname.indexOf(":")!==-1?"["+e.hostname+"]":e.hostname||"",r+=e.port?":"+e.port:"",r+=e.pathname||"",r+=e.search||"",r+=e.hash||""}},{}],58:[function(e,r,t){"use strict";r.exports.encode=e("./encode"),r.exports.decode=e("./decode"),r.exports.format=e("./format"),r.exports.parse=e("./parse")},{"./decode":55,"./encode":56,"./format":57,"./parse":59}],59:[function(e,r,t){"use strict";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}function s(e,r){if(e&&e instanceof n)return e;var t=new n;return t.parse(e,r),t}var o=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,a=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["<",">",'"',"`"," ","\r","\n","\t"],l=["{","}","|","\\","^","`"].concat(c),u=["'"].concat(l),p=["%","/","?",";","#"].concat(u),h=["/","?","#"],f={javascript:!0,"javascript:":!0},d={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};n.prototype.parse=function(e,r){var t,n,s,i,c,l=e;if(l=l.trim(),!r&&1===e.split("#").length){var u=a.exec(l);if(u)return this.pathname=u[1],u[2]&&(this.search=u[2]),this}var m=o.exec(l);if(m&&(m=m[0],s=m.toLowerCase(),this.protocol=m,l=l.substr(m.length)),(r||m||l.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!(c="//"===l.substr(0,2))||m&&f[m]||(l=l.substr(2),this.slashes=!0)),!f[m]&&(c||m&&!d[m])){var _=-1;for(t=0;t<h.length;t++)(i=l.indexOf(h[t]))!==-1&&(_===-1||i<_)&&(_=i);var g,b;for(b=_===-1?l.lastIndexOf("@"):l.lastIndexOf("@",_),b!==-1&&(g=l.slice(0,b),l=l.slice(b+1),this.auth=g),_=-1,t=0;t<p.length;t++)(i=l.indexOf(p[t]))!==-1&&(_===-1||i<_)&&(_=i);_===-1&&(_=l.length),":"===l[_-1]&&_--;var k=l.slice(0,_);l=l.slice(_),this.parseHost(k),this.hostname=this.hostname||"";var v="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!v){var y=this.hostname.split(/\./);for(t=0,n=y.length;t<n;t++){var x=y[t];if(x&&!x.match(/^[+a-z0-9A-Z_-]{0,63}$/)){for(var C="",A=0,w=x.length;A<w;A++)C+=x.charCodeAt(A)>127?"x":x[A];if(!C.match(/^[+a-z0-9A-Z_-]{0,63}$/)){var D=y.slice(0,t),q=y.slice(t+1),E=x.match(/^([+a-z0-9A-Z_-]{0,63})(.*)$/);E&&(D.push(E[1]),q.unshift(E[2])),q.length&&(l=q.join(".")+l),this.hostname=D.join(".");break}}}}this.hostname.length>255&&(this.hostname=""),v&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var S=l.indexOf("#");S!==-1&&(this.hash=l.substr(S),l=l.slice(0,S));var F=l.indexOf("?");return F!==-1&&(this.search=l.substr(F),l=l.slice(0,F)),l&&(this.pathname=l),d[s]&&this.hostname&&!this.pathname&&(this.pathname=""),this},n.prototype.parseHost=function(e){var r=i.exec(e);r&&(r=r[0],":"!==r&&(this.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(this.hostname=e)},r.exports=s},{}],60:[function(r,t,n){(function(r){!function(s){function o(e){throw new RangeError(w[e])}function i(e,r){for(var t=e.length,n=[];t--;)n[t]=r(e[t]);return n}function a(e,r){var t=e.split("@"),n="";return t.length>1&&(n=t[0]+"@",e=t[1]),e=e.replace(/[\x2E\u3002\uFF0E\uFF61]/g,"."),n+i(e.split("."),r).join(".")}function c(e){for(var r,t,n=[],s=0,o=e.length;s<o;)r=e.charCodeAt(s++),r>=55296&&r<=56319&&s<o?(t=e.charCodeAt(s++),56320==(64512&t)?n.push(((1023&r)<<10)+(1023&t)+65536):(n.push(r),s--)):n.push(r);return n}function l(e){return i(e,function(e){var r="";return e>65535&&(e-=65536,r+=q(e>>>10&1023|55296),e=56320|1023&e),r+=q(e)}).join("")}function u(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:36}function p(e,r){return e+22+75*(e<26)-((0!=r)<<5)}function h(e,r,t){var n=0;for(e=t?D(e/700):e>>1,e+=D(e/r);e>455;n+=36)e=D(e/35);return D(n+36*e/(e+38))}function f(e){var r,t,n,s,i,a,c,p,f,d,m=[],_=e.length,g=0,b=128,k=72;for(t=e.lastIndexOf("-"),t<0&&(t=0),n=0;n<t;++n)e.charCodeAt(n)>=128&&o("not-basic"),m.push(e.charCodeAt(n));for(s=t>0?t+1:0;s<_;){for(i=g,a=1,c=36;s>=_&&o("invalid-input"),p=u(e.charCodeAt(s++)),(p>=36||p>D((x-g)/a))&&o("overflow"),g+=p*a,f=c<=k?1:c>=k+26?26:c-k,!(p<f);c+=36)d=36-f,a>D(x/d)&&o("overflow"),a*=d;r=m.length+1,k=h(g-i,r,0==i),D(g/r)>x-b&&o("overflow"),b+=D(g/r),g%=r,m.splice(g++,0,b)}return l(m)}function d(e){var r,t,n,s,i,a,l,u,f,d,m,_,g,b,k,v=[];for(e=c(e),_=e.length,r=128,t=0,i=72,a=0;a<_;++a)(m=e[a])<128&&v.push(q(m));for(n=s=v.length,s&&v.push("-");n<_;){for(l=x,a=0;a<_;++a)(m=e[a])>=r&&m<l&&(l=m);for(g=n+1,l-r>D((x-t)/g)&&o("overflow"),t+=(l-r)*g,r=l,a=0;a<_;++a)if(m=e[a],m<r&&++t>x&&o("overflow"),m==r){for(u=t,f=36;d=f<=i?1:f>=i+26?26:f-i,!(u<d);f+=36)k=u-d,b=36-d,v.push(q(p(d+k%b,0))),u=D(k/b);v.push(q(p(u,0))),i=h(t,g,n==s),t=0,++n}++t,++r}return v.join("")}function m(e){return a(e,function(e){return C.test(e)?f(e.slice(4).toLowerCase()):e})}function _(e){return a(e,function(e){return A.test(e)?"xn--"+d(e):e})}var g="object"==typeof n&&n&&!n.nodeType&&n,b="object"==typeof t&&t&&!t.nodeType&&t,k="object"==typeof r&&r;k.global!==k&&k.window!==k&&k.self!==k||(s=k);var v,y,x=2147483647,C=/^xn--/,A=/[^\x20-\x7E]/,w={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},D=Math.floor,q=String.fromCharCode;if(v={version:"1.4.1",ucs2:{decode:c,encode:l},decode:f,encode:d,toASCII:_,toUnicode:m},"function"==typeof e&&"object"==typeof e.amd&&e.amd)e("punycode",function(){return v});else if(g&&b)if(t.exports==g)b.exports=v;else for(y in v)v.hasOwnProperty(y)&&(g[y]=v[y]);else s.punycode=v}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],61:[function(e,r,t){r.exports=/[\0-\x1F\x7F-\x9F]/},{}],62:[function(e,r,t){r.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/},{}],63:[function(e,r,t){r.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/},{}],64:[function(e,r,t){r.exports=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/},{}],65:[function(e,r,t){"use strict";t.Any=e("./properties/Any/regex"),t.Cc=e("./categories/Cc/regex"),t.Cf=e("./categories/Cf/regex"),t.P=e("./categories/P/regex"),t.Z=e("./categories/Z/regex")},{"./categories/Cc/regex":61,"./categories/Cf/regex":62,"./categories/P/regex":63,"./categories/Z/regex":64,"./properties/Any/regex":66}],66:[function(e,r,t){r.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/},{}],67:[function(e,r,t){"use strict";r.exports=e("./lib/")},{"./lib/":9}]},{},[67])(67)});
;
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigWorker = exports.Config = void 0;

var _logger = _interopRequireDefault(require("./logger.js"));

var _worker = _interopRequireDefault(require("./worker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Config =
/*#__PURE__*/
function () {
  function Config() {
    _classCallCheck(this, Config);

    this.brand = "Viki";
    this.brandIcon = "css/viki_white.svg";
    this.title = "Viki - A simple Wiki page in Markdown from notebook of VNote";
    this.favicon = "https://github.com/tamlok/viki/raw/master/resources/viki.ico";
    this.footer = ""; // Whether show suffix in navigation panel.

    this.showSuffix = false;
    this.loadBeforeSearch = true;
    this.fuzzySearch = false;
    this.markdown = {
      html: true,
      breaks: false,
      linkify: true,
      typographer: false,
      langPrefix: 'lang-',
      imageCaption: true,
      plantUMLServer: 'http://www.plantuml.com/plantuml',
      plantUMLFormat: 'svg',
      codeBlockLineNumber: false
    };
  }

  _createClass(Config, [{
    key: "readFromJson",
    value: function readFromJson(p_jobj) {
      if (typeof p_jobj.brand != "undefined") {
        this.brand = p_jobj.brand;
      }

      if (typeof p_jobj.brandIcon != "undefined") {
        this.brandIcon = p_jobj.brandIcon;
      }

      if (typeof p_jobj.title != "undefined") {
        this.title = p_jobj.title;
      }

      if (typeof p_jobj.favicon != "undefined") {
        this.favicon = p_jobj.favicon;
      }

      if (p_jobj.footer != null) {
        this.footer = p_jobj.footer;
      }

      if (p_jobj.show_suffix != null) {
        this.showSuffix = p_jobj.show_suffix;
      }

      if (p_jobj.load_before_search != null) {
        this.loadBeforeSearch = p_jobj.load_before_search;
      }

      if (p_jobj.fuzzy_search != null) {
        this.fuzzySearch = p_jobj.fuzzy_search;
      }

      if (p_jobj.markdown) {
        var md = p_jobj.markdown;

        if (typeof md.html != "undefined") {
          this.markdown.html = md.html;
        }

        if (typeof md.breaks != "undefined") {
          this.markdown.breaks = md.breaks;
        }

        if (typeof md.linkify != "undefined") {
          this.markdown.linkify = md.linkify;
        }

        if (typeof md.typographer != "undefined") {
          this.markdown.typographer = md.typographer;
        }

        if (typeof md.lang_prefix != "undefined") {
          this.markdown.langPrefix = md.lang_prefix;
        }

        if (typeof md.image_caption != "undefined") {
          this.markdown.imageCaption = md.image_caption;
        }

        if (typeof md.plantuml_server != "undefined") {
          this.markdown.plantUMLServer = md.plantuml_server;
        }

        if (typeof md.plantuml_format != "undefined") {
          this.markdown.plantUMLFormat = md.plantuml_format;
        }

        if (typeof md.code_block_line_number != "undefined") {
          this.markdown.codeBlockLineNumber = md.code_block_line_number;
        }
      }
    }
  }]);

  return Config;
}();

exports.Config = Config;

var ConfigWorker =
/*#__PURE__*/
function (_Worker) {
  _inherits(ConfigWorker, _Worker);

  function ConfigWorker() {
    _classCallCheck(this, ConfigWorker);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConfigWorker).call(this));
  }

  _createClass(ConfigWorker, [{
    key: "register",
    value: function register(p_viki) {
      _get(_getPrototypeOf(ConfigWorker.prototype), "register", this).call(this, p_viki);

      _logger.default.log("register ConfigWorker");
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      $.get("viki.json", function (p_data) {
        var config = new Config();
        config.readFromJson(p_data);

        _logger.default.log("config:", config);

        _this.viki.config = config;

        _this.viki.scheduleNext();
      });
    }
  }]);

  return ConfigWorker;
}(_worker.default);

exports.ConfigWorker = ConfigWorker;

},{"./logger.js":8,"./worker.js":20}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("./logger.js"));

var _worker = _interopRequireDefault(require("./worker.js"));

var _markdownrenderer = _interopRequireDefault(require("./markdownrenderer.js"));

var _tocrenderer = _interopRequireDefault(require("./tocrenderer.js"));

var _linkrewriter = _interopRequireDefault(require("./linkrewriter.js"));

var _navigationrenderer = _interopRequireDefault(require("./navigationrenderer.js"));

var _utils = _interopRequireDefault(require("./utils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Render data from this.viki.info.data.
// - Navigation Panel for notebook's note;
// - Content;
// - Outline;
var ContentWorker =
/*#__PURE__*/
function (_Worker) {
  _inherits(ContentWorker, _Worker);

  function ContentWorker() {
    _classCallCheck(this, ContentWorker);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContentWorker).call(this));
  }

  _createClass(ContentWorker, [{
    key: "register",
    value: function register(p_viki) {
      _get(_getPrototypeOf(ContentWorker.prototype), "register", this).call(this, p_viki);

      _logger.default.log("register ContentWorker");
    }
  }, {
    key: "run",
    value: function run() {
      this.renderSkelecton();
      this.renderContentAndToc();
      var info = this.viki.info; // Render the navigation tree.

      if (info.naviContainerId) {
        var container = $('#' + info.naviContainerId);
        var navier = new _navigationrenderer.default(container, this, {
          showSuffix: this.viki.config.showSuffix,
          loadBeforeSearch: this.viki.config.loadBeforeSearch,
          fuzzySearch: this.viki.config.fuzzySearch
        });

        if (info.naviIndex && info.naviFile === info.target) {
          navier.render(info.naviFile, info.naviIndex, true);
        } else {
          // Otherwise, no need to let navier load target.
          navier.render(info.naviFile, info.target, false);
        }
      }

      this.viki.scheduleNext();
    } // Render the container to hold contents.

  }, {
    key: "renderSkelecton",
    value: function renderSkelecton() {
      var info = this.viki.info;
      info.contentContainerId = 'viki-content';

      if (info.toc) {
        info.tocContainerId = 'viki-toc';
      }

      if (info.naviFile) {
        info.naviContainerId = 'viki-navi';
      }

      var mainDiv = $("<div id=\"viki-main-container\" class=\"container-fluid\"></div>");
      var containerDivClass = 'row flex-xl-nowrap';

      if (!info.naviFile) {
        containerDivClass += ' justify-content-md-center';
      }

      var containerDiv = $("<div id=\"viki-content-container\" class=\"".concat(containerDivClass, "\"></div>"));
      mainDiv.append(containerDiv);
      var naviDivClass = null;
      var contentDivClass = null;
      var tocDivClass = null;

      if (info.toc) {
        if (info.naviFile) {
          // Three panels.
          naviDivClass = "col-12 col-md-3 col-lg-2 viki-sidebar";
          contentDivClass = "col-12 col-md-9 col-lg-8 py-md-3 pl-md-5 viki-content";
          tocDivClass = "d-none d-lg-block col-lg-2 viki-toc";
        } else {
          // Two panels.
          contentDivClass = "col-12 col-md-9 col-lg-8 col-xl-8 py-md-3 pl-md-5 viki-content";
          tocDivClass = "d-none d-md-block col-md-3 col-lg-3 col-xl-2 viki-toc";
        }
      } else {
        if (info.naviFile) {
          // Two panels.
          naviDivClass = "col-12 col-md-3 viki-sidebar";
          contentDivClass = "col-12 col-md-9 py-md-3 pl-md-5 viki-content";
        } else {
          // Single panels.
          contentDivClass = "col-12 col-md-9 py-md-3 pl-md-5 viki-content";
        }
      }

      var naviDiv = null;
      var contentDiv = null;
      var tocDiv = null;

      if (naviDivClass) {
        naviDiv = $("<div id=\"".concat(info.naviContainerId, "\" class=\"").concat(naviDivClass, "\"></div>"));
      }

      if (contentDivClass) {
        contentDiv = $("<main id=\"".concat(info.contentContainerId, "\" class=\"").concat(contentDivClass, "\" role=\"main\"></main>"));
      }

      if (tocDivClass) {
        tocDiv = $("<div id=\"".concat(info.tocContainerId, "\" class=\"").concat(tocDivClass, "\"></div>"));
      }

      if (naviDiv) {
        containerDiv.append(naviDiv);
      }

      if (contentDiv) {
        containerDiv.append(contentDiv);
      }

      if (tocDiv) {
        containerDiv.append(tocDiv);
      }

      $('body').append(mainDiv);
    }
  }, {
    key: "isMarkdown",
    value: function isMarkdown(p_name) {
      return p_name.endsWith('.md');
    }
  }, {
    key: "renderFileInternal",
    value: function renderFileInternal(p_file) {
      var _this = this;

      // Fetch p_file.
      $.get(p_file, function (p_data) {
        // Update the info.
        var info = _this.viki.info;
        info.setTarget(p_file);
        info.data = p_data;
        var utils = new _utils.default();
        utils.updateHashSilently('#!' + p_file);

        _this.renderContentAndToc();
      });
    }
  }, {
    key: "renderContentAndToc",
    value: function renderContentAndToc() {
      var info = this.viki.info;
      var linkRewriter = new _linkrewriter.default();

      if (info.contentContainerId) {
        if (this.isMarkdown(info.target)) {
          var container = $('#' + info.contentContainerId);
          var mder = new _markdownrenderer.default(container);
          mder.render(this.viki.config.markdown, info.data);
          linkRewriter.rewriteLinks(container, info.target, info.baseUrl);
        }
      }

      if (info.tocContainerId) {
        var _container = $('#' + info.tocContainerId);

        var tocer = new _tocrenderer.default(_container);
        tocer.render($('#' + info.contentContainerId));
        linkRewriter.rewriteLinks(_container, info.target, info.baseUrl);
      }

      $(window).scrollTop(0); // Scroll to anchor.

      if (info.anchor) {
        var header = $('#' + info.contentContainerId + ' #' + info.anchor);

        if (header.length > 0) {
          header[0].scrollIntoView();
        }
      }
    }
  }]);

  return ContentWorker;
}(_worker.default);

var _default = ContentWorker;
exports.default = _default;

},{"./linkrewriter.js":7,"./logger.js":8,"./markdownrenderer.js":11,"./navigationrenderer.js":12,"./tocrenderer.js":16,"./utils.js":17,"./worker.js":20}],3:[function(require,module,exports){
"use strict";

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("./logger.js"));

var _worker = _interopRequireDefault(require("./worker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FetchTargetWorker =
/*#__PURE__*/
function (_Worker) {
  _inherits(FetchTargetWorker, _Worker);

  function FetchTargetWorker() {
    _classCallCheck(this, FetchTargetWorker);

    return _possibleConstructorReturn(this, _getPrototypeOf(FetchTargetWorker).call(this));
  }

  _createClass(FetchTargetWorker, [{
    key: "register",
    value: function register(p_viki) {
      _get(_getPrototypeOf(FetchTargetWorker.prototype), "register", this).call(this, p_viki);

      _logger.default.log("register FetchTargetWorker");
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      var info = this.viki.info;

      if (!info.target) {
        _logger.default.log("FetchTargetWorker: no target to fetch");

        return;
      }

      $.get(info.target, function (p_data) {
        _logger.default.log("FetchTargetWorker: data fetched");

        _this.viki.info.data = p_data;

        _this.viki.scheduleNext();
      });
    }
  }]);

  return FetchTargetWorker;
}(_worker.default);

var _default = FetchTargetWorker;
exports.default = _default;

},{"./logger.js":8,"./worker.js":20}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("./logger.js"));

var _worker = _interopRequireDefault(require("./worker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FooterWorker =
/*#__PURE__*/
function (_Worker) {
  _inherits(FooterWorker, _Worker);

  function FooterWorker() {
    _classCallCheck(this, FooterWorker);

    return _possibleConstructorReturn(this, _getPrototypeOf(FooterWorker).call(this));
  }

  _createClass(FooterWorker, [{
    key: "register",
    value: function register(p_viki) {
      _get(_getPrototypeOf(FooterWorker.prototype), "register", this).call(this, p_viki);

      _logger.default.log("register FooterWorker");
    }
  }, {
    key: "run",
    value: function run() {
      if (this.viki.info.naviFile || this.viki.info.toc) {
        return;
      }

      var footer = $("<footer class=\"viki-footer text-muted\"></footer>");
      var container = $("<div class=\"container-fluid p-3 p-md-5\"></div>");

      if (this.viki.config.footer) {
        var rowP = $("<p class=\"viki-footer-row\">".concat(this.viki.config.footer, "</p>"));
        container.append(rowP);
      }
      /* ATTENTION: As an additional aggrement to the license, removing or hiding
         the following footer is not allowed.
       */


      var vikiFooter = "Generated by <em><a href=\"https://tamlok.github.io/viki/\">Viki</a></em>.";
      var vikiP = $("<p class=\"viki-footer-row viki-footer-viki\">".concat(vikiFooter, "</p>"));
      container.append(vikiP);
      footer.append(container);
      $("body").append(footer);
      this.viki.scheduleNext();
    }
  }]);

  return FooterWorker;
}(_worker.default);

var _default = FooterWorker;
exports.default = _default;

},{"./logger.js":8,"./worker.js":20}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageViewHelper =
/*#__PURE__*/
function () {
  function ImageViewHelper() {
    _classCallCheck(this, ImageViewHelper);

    this.imageViewDiv = null;
    this.viewBoxImageMouseDown = false;
    this.viewBoxImageOffsetToMouse = [0, 0];
  } // Construct a div to view image. Hook all the images.


  _createClass(ImageViewHelper, [{
    key: "setupImageView",
    value: function setupImageView(p_node) {
      p_node.find('#image-view-div').remove();
      var imgs = p_node.find('img');

      for (var i = 0; i < imgs.length; ++i) {
        this.setupIMGToView(imgs[i]);
      }

      this.imageViewDiv = $("<div id=\"image-view-div\" class=\"viki-modal-box\">\n            <span id=\"image-view-close\" class=\"viki-modal-close\">&times;</span>\n            <img id=\"image-view\" class=\"viki-modal-content\">\n        </div>");
      p_node.append(this.imageViewDiv);
      this.initImageViewBox();
      this.closeImageViewBox();
    }
  }, {
    key: "initImageViewBox",
    value: function initImageViewBox() {
      var _this = this;

      // Left and top in pixel.
      var moveImage = function moveImage(img, left, top) {
        if (img.style.position != 'absolute') {
          img.style.position = 'absolute';
          img.style.zIndex = parseInt(_this.imageViewDiv.find('#image-view-close')[0].style.zIndex) - 1;
        }

        img.style.left = left + 'px';
        img.style.top = top + 'px';
      }; // View box.


      this.imageViewDiv.click(function (e) {
        e = e || window.event;

        var boxImage = _this.imageViewDiv.find('#image-view')[0];

        if (e.target.id != boxImage.id) {
          // Click outside the image to close the box.
          _this.closeImageViewBox();
        }

        e.preventDefault();
      });

      this.imageViewDiv[0].onwheel = function (e) {
        e = e || window.event;
        var ctrl = !!e.ctrlKey;

        if (ctrl) {
          return;
        }

        var target = e.target;

        if (!target || target.id != 'image-view') {
          return;
        }

        var rect = target.getBoundingClientRect();
        var centerX = e.clientX - rect.left;
        var centerY = e.clientY - rect.top;
        var oriWidth = target.getAttribute('oriWidth');
        var oriHeight = target.getAttribute('oriWidth');

        if (!oriWidth) {
          oriWidth = rect.width;
          oriHeight = rect.height;
          target.setAttribute('oriWidth', oriWidth);
          target.setAttribute('oriHeight', oriHeight);
        }

        var step = Math.floor(oriWidth / 4);
        var value = e.wheelDelta || -e.detail; // delta >= 0 is up, which will trigger zoom in.

        var delta = Math.max(-1, Math.min(1, value));
        var newWidth = rect.width + (delta < 0 ? -step : step);

        if (newWidth < 200) {
          e.preventDefault();
          return;
        }

        var factor = newWidth / rect.width;
        target.style.width = newWidth + 'px'; // Adjust the image around the center point.

        moveImage(target, e.clientX - centerX * factor, e.clientY - centerY * factor);
        e.preventDefault();
      }; // Content image.


      var boxImage = this.imageViewDiv.find('#image-view')[0];

      boxImage.onmousedown = function (e) {
        e = e || window.event;
        var target = e.target;
        _this.viewBoxImageMouseDown = true;
        _this.viewBoxImageOffsetToMouse = [target.offsetLeft - e.clientX, target.offsetTop - e.clientY];
        e.preventDefault();
      };

      boxImage.onmouseup = function (e) {
        e = e || window.event;
        _this.viewBoxImageMouseDown = false;
        e.preventDefault();
      };

      boxImage.onmousemove = function (e) {
        e = e || window.event;
        var target = e.target;

        if (_this.viewBoxImageMouseDown) {
          moveImage(target, e.clientX + _this.viewBoxImageOffsetToMouse[0], e.clientY + _this.viewBoxImageOffsetToMouse[1]);
        }

        e.preventDefault();
      }; // Close button.


      this.imageViewDiv.find('#image-view-close')[0].onclick = function () {
        _this.closeImageViewBox();
      };
    }
  }, {
    key: "setupIMGToView",
    value: function setupIMGToView(p_domNode) {
      var _this2 = this;

      if (!p_domNode || p_domNode.nodeName.toLowerCase() != 'img') {
        return;
      }

      p_domNode.classList.add('viki-view-image');

      p_domNode.ondblclick = function (p_e) {
        _this2.viewImage(p_e.target.src);
      };
    }
  }, {
    key: "closeImageViewBox",
    value: function closeImageViewBox() {
      if (this.imageViewDiv) {
        this.imageViewDiv.hide();
      }
    }
  }, {
    key: "viewImage",
    value: function viewImage(p_imgSrc) {
      var p_background = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'transparent';
      this.viewBoxImageMouseDown = false;
      this.imageViewDiv.show();
      var boxImage = this.imageViewDiv.find('#image-view')[0];
      boxImage.src = p_imgSrc;
      boxImage.style.backgroundColor = p_background; // Restore image-view.

      boxImage.style.width = '';
      boxImage.style.position = '';
      boxImage.style.zIndex = '';
    }
  }, {
    key: "isViewingImage",
    value: function isViewingImage() {
      return this.imageViewDiv && this.imageViewDiv[0].style.display == 'block';
    }
  }, {
    key: "viewSVG",
    value: function viewSVG(svgNode) {
      var background = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'transparent';
      var svg = svgNode.outerHTML.replace(/#/g, '%23').replace(/[\r\n]/g, '');
      var src = 'data:image/svg+xml;utf8,' + svg;
      this.viewImage(src, background);
    }
  }, {
    key: "setupSVGToView",
    value: function setupSVGToView(node) {
      var forceBackground = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!node || node.nodeName.toLowerCase() != 'svg') {
        return;
      }

      var onSVGDoubleClick = function onSVGDoubleClick(forceBackground, e) {
        e = e || window.event;
        var name = e.target.nodeName.toLowerCase();

        if (name != 'text' && name != 'tspan') {
          var svgNode = e.target;

          while (svgNode && svgNode.nodeName.toLowerCase() != 'svg') {
            svgNode = svgNode.parentNode;
          }

          if (svgNode) {
            if (forceBackground) {
              // Use <svg>'s parent's background color.
              var style = window.getComputedStyle(svgNode.parentNode, null);
              this.viewSVG(svgNode, style.backgroundColor);
            } else {
              this.viewSVG(svgNode);
            }
          }

          e.preventDefault();
        }
      };

      node.classList.add('viki-view-svg');
      node.ondblclick = onSVGDoubleClick.bind(this, forceBackground);
    }
  }]);

  return ImageViewHelper;
}();

var _default = ImageViewHelper;
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("./logger.js"));

var _utils = _interopRequireDefault(require("./utils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LinkRewriter =
/*#__PURE__*/
function () {
  function LinkRewriter() {
    _classCallCheck(this, LinkRewriter);
  } // Rewrite the link url of links and images.
  // @p_target: current viewing page.
  // @p_baseUrl: base url of @p_target.


  _createClass(LinkRewriter, [{
    key: "rewriteLinks",
    value: function rewriteLinks(p_node, p_target, p_baseUrl) {
      var utils = new _utils.default();

      var rewriteA = function rewriteA(p_a, p_target, p_base) {
        var href = p_a.getAttribute('href');

        if (!href || href.lastIndexOf('#!') >= 0) {
          return;
        }

        if (href.startsWith('#') && !href.startsWith('#!')) {
          // In page anchor, such as `#toc_1`.
          if (href === '#') {
            return;
          }

          p_a.href = '#!' + p_target + href;
          return;
        }

        if (!utils.isRelativeUrl(href)) {
          // Absolute url.
          return;
        }

        var newHref = href;

        if (utils.isRelativePath(href)) {
          newHref = p_base + href;
        }

        p_a.href = '#!' + utils.cleanPath(newHref);
      };

      var rewriteIMG = function rewriteIMG(p_img, p_base) {
        var src = p_img.getAttribute('src');

        if (!src) {
          return;
        }

        if (!utils.isRelativeUrl(src)) {
          // Absolute url.
          return;
        }

        if (!utils.isRelativePath(src)) {
          // Absolute path.
          return;
        }

        p_img.src = p_base + src;
      }; // Link.


      var links = p_node.find('a');

      for (var i = 0; i < links.length; ++i) {
        rewriteA(links[i], p_target, p_baseUrl);
      } // Image.


      var imgs = p_node.find('img');

      for (var _i = 0; _i < imgs.length; ++_i) {
        rewriteIMG(imgs[_i], p_baseUrl);
      }
    }
  }]);

  return LinkRewriter;
}();

var _default = LinkRewriter;
exports.default = _default;

},{"./logger.js":8,"./utils.js":17}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    _classCallCheck(this, Logger);

    this.enableDebug = true;
  }

  _createClass(Logger, [{
    key: "log",
    value: function log() {
      if (!this.enableDebug) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log.apply(this, args);
    }
  }]);

  return Logger;
}();

var logger = new Logger();
var _default = logger;
exports.default = _default;

},{}],9:[function(require,module,exports){
"use strict";

var _viki = _interopRequireDefault(require("./viki.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viki = new _viki.default();
viki.init();

},{"./viki.js":18}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("./logger.js"));

var _utils = _interopRequireDefault(require("./utils.js"));

var _imageviewhelper = _interopRequireDefault(require("./imageviewhelper.js"));

var _plantumlhelper = _interopRequireDefault(require("./plantumlhelper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Will be called after MathJax rendering finished.
// Make <pre><code>math</code></pre> to <p>math</p>
var postProcessMathJax = function postProcessMathJax() {
  var all = MathJax.Hub.getAllJax();

  for (var i = 0; i < all.length; ++i) {
    var node = all[i].SourceElement().parentNode;

    if (node.tagName.toLowerCase() == 'code') {
      var pre = node.parentNode;
      var p = document.createElement('p');
      p.innerHTML = node.innerHTML;
      pre.parentNode.replaceChild(p, pre);
    }
  }
};

var MathJaxReady = function MathJaxReady() {
  var texToRender = $('.tex-to-render');
  var nrTex = texToRender.length;

  if (nrTex == 0) {
    return;
  }

  var eles = [];

  for (var i = 0; i < nrTex; ++i) {
    eles.push(texToRender[i]);
  }

  try {
    MathJax.Hub.Queue(function () {
      if (MathJax.InputJax.TeX.resetEquationNumbers) {
        MathJax.InputJax.TeX.resetEquationNumbers();
      }
    }, ["Typeset", MathJax.Hub, eles, postProcessMathJax]);
  } catch (err) {
    console.log("err", err);
  }
};

var MarkdownIt =
/*#__PURE__*/
function () {
  function MarkdownIt(p_config) {
    var _this = this;

    _classCallCheck(this, MarkdownIt);

    this.config = p_config;
    this.tocCounter = 0;
    this.toc = [];
    this.frontMatterText = null;
    this.frontMatterClass = 'viki-markdown-metadata';
    this.mermaidParseError = false;
    this.mermaidIndex = 0;
    this.mermaidClass = 'viki-mermaid-diagram';
    this.flowchartIndex = 0;
    this.flowchartClass = 'viki-flowchart-diagram';
    this.imageHelper = new _imageviewhelper.default();
    this.plantUMLIndex = 0;
    this.plantUMLClass = 'viki-plantuml-diagram';
    this.plantUMLCodeClass = 'viki-plantuml-code';
    this.inpageTocClass = 'viki-inpage-toc';
    this.mdit = window.markdownit({
      html: this.config.html,
      breaks: this.config.breaks,
      linkify: this.config.linkify,
      typographer: this.config.typographer,
      langPrefix: this.config.langPrefix,
      highlight: function highlight(p_str, p_lang) {
        var isSpecialCodeBlock = function isSpecialCodeBlock(p_lang) {
          return p_lang === 'mathjax' || p_lang === 'mermaid' || p_lang === 'flowchart' || p_lang === 'flow' || p_lang === 'puml';
        };

        if (p_lang && !isSpecialCodeBlock(p_lang)) {
          if (hljs.getLanguage(p_lang)) {
            return hljs.highlight(p_lang, p_str, true).value;
          } else {
            return hljs.highlightAuto(p_str).value;
          }
        }

        return '';
      }
    });
    this.mdit.use(window.markdownitHeadingAnchor, {
      anchorClass: 'viki-anchor',
      addHeadingID: true,
      addHeadingAnchor: true,
      slugify: function slugify(p_md, p_s) {
        return 'toc_' + _this.tocCounter++;
      },
      headingHook: function headingHook(p_openToken, p_inlineToken, p_anchor) {
        _this.toc.push({
          level: parseInt(p_openToken.tag.substr(1)),
          anchor: p_anchor,
          title: _this.mdit.utils.escapeHtml(p_inlineToken.content)
        });
      }
    }); // Enable file: scheme.

    this.validateLinkOri = this.mdit.validateLink;

    this.mdit.validateLink = function (p_url) {
      var str = p_url.trim().toLowerCase();
      return /^file:/.test(str) ? true : _this.validateLinkOri(p_url);
    };

    this.mdit.use(window.markdownitTaskLists);
    this.mdit.use(window.markdownitSub);
    this.mdit.use(window.markdownitSup);
    this.mdit.use(window.markdownitFrontMatter, function (p_text) {
      _this.frontMatterText = p_text;
    });
    this.mdit.use(window.markdownitEmoji);

    this.mdit.renderer.rules.emoji = function (p_token, p_idx) {
      return "<span class=\"emoji emoji_".concat(p_token[p_idx].markup, "\">").concat(p_token[p_idx].content, "</span>");
    };

    this.mdit.use(window.markdownitFootnote);
    this.mdit.use(window["markdown-it-imsize.js"]);
    this.mdit.use(texmath, {
      delimiters: ['dollars', 'raw']
    });
    this.mdit.use(window.markdownitContainer, 'alert', {
      validate: function validate(p_params) {
        return p_params.trim().match(/^alert-\S+$/);
      },
      render: function render(p_tokens, p_idx) {
        var type = p_tokens[p_idx].info.trim().match(/^(alert-\S+)$/);

        if (p_tokens[p_idx].nesting === 1) {
          // opening tag
          var alertClass = type[1];
          return '<div class="alert ' + alertClass + '" role="alert">';
        } else {
          // closing tag
          return '</div>\n';
        }
      }
    });
    mermaid.mermaidAPI.initialize({
      startOnLoad: false
    });

    mermaid.mermaidAPI.parseError = function (p_err, p_hash) {
      console.log('mermaid parse err', p_err);
      _this.mermaidParseError = true; // Clean the container element, or mermaidAPI won't render the graph with
      // the same id.

      $('#' + _this.mermaidClass + '-' + _this.mermaidIndex).parent().remove();
    };
  } // Render @p_md to HTML and write it to @p_containerNode.


  _createClass(MarkdownIt, [{
    key: "render",
    value: function render(p_containerNode, p_md) {
      this.tocCounter = 0;
      this.toc = [];
      this.frontMatterText = null;

      if (!p_md) {
        p_containerNode.empty();
        return;
      }

      var html = this.mdit.render(p_md);
      var needToc = -1 != p_md.search(/(\n|^)\[toc\]/i);

      if (needToc) {
        html = html.replace(/<p>\[TOC\]<\/p>/ig, '<div class="' + this.inpageTocClass + '"></div>');
      }

      p_containerNode.html(html);
      this.handleToc(p_containerNode, needToc);

      if (this.config.imageCaption) {
        this.insertImageCaption(p_containerNode);
      }

      this.imageHelper.setupImageView(p_containerNode);
      this.handleFrontMatter(p_containerNode);
      this.renderMermaid(p_containerNode, this.config.langPrefix + 'mermaid');
      this.renderFlowchart(p_containerNode, [this.config.langPrefix + 'flowchart', this.config.langPrefix + 'flow']);
      this.renderPlantUML(p_containerNode, this.config.langPrefix + 'puml');
      this.makeImageFluid(p_containerNode);
      this.addClassToCodeBlock(p_containerNode);

      if (this.config.codeBlockLineNumber) {
        this.renderCodeBlockLineNumber(p_containerNode);
      }

      this.renderMathJax(p_containerNode);
    }
  }, {
    key: "handleToc",
    value: function handleToc(p_node, p_needToc) {
      if (!p_needToc) {
        return;
      }

      var utils = new _utils.default();
      var tocTree = utils.tocToTree(this.toc);
      var removeToc = this.toc.length == 0; // Add it to html.

      var eles = p_node.find('.' + this.inpageTocClass);

      if (removeToc) {
        eles.remove();
      } else {
        eles.html(tocTree);
        utils.rewriteAnchorInToc(eles);
      }
    } // Center the image block and insert the alt text as caption.

  }, {
    key: "insertImageCaption",
    value: function insertImageCaption(p_node) {
      var isImageBlock = function isImageBlock(p_img) {
        var pn = p_img.parentNode;
        return pn.children.length == 1 && pn.textContent == '';
      };

      var isImageWithBr = function isImageWithBr(p_img) {
        var sibling = p_img.nextSibling;

        while (sibling) {
          if (sibling.nodeType == 8) {
            // Comment node.
            // Just continue.
            sibling = sibling.nextSibling;
            continue;
          } else if (sibling.nodeType == 1) {
            if (sibling.tagName == 'BR') {
              break;
            }
          }

          return false;
        }

        sibling = p_img.previousSibling;

        while (sibling) {
          if (sibling.nodeType == 8) {
            // Comment node.
            sibling = sibling.previousSibling;
            continue;
          } else if (sibling.nodeType == 1) {
            // Element node.
            if (sibling.tagName == 'BR') {
              break;
            }
          } else if (sibling.nodeType == 3) {
            // Text node.
            if (sibling.nodeValue == '\n') {
              var tmp = sibling.previousSibling;

              if (tmp && tmp.tagName == 'BR') {
                break;
              }
            }
          }

          return false;
        }

        return true;
      };

      var getImageType = function getImageType(p_img) {
        var type = -1;

        if (isImageBlock(p_img)) {
          type = 0;
        } else if (isImageWithBr(p_img)) {
          type = 1;
        }

        return type;
      };

      var imgs = p_node.find('img');

      for (var i = 0; i < imgs.length; ++i) {
        var img = imgs[i];
        var type = getImageType(img);

        if (type == -1) {
          continue;
        } else if (type == 1) {
          // Insert a div as the parent of the img.
          var imgPack = document.createElement('div');
          img.insertAdjacentElement('afterend', imgPack);
          imgPack.appendChild(img);
        } // Make the parent img-package.


        img.parentNode.classList.add('viki-img-package'); // Make it center.

        img.classList.add('viki-img-center');

        if (img.alt == '') {
          continue;
        } // Add caption.


        var captionSpan = document.createElement('span');
        captionSpan.classList.add('viki-img-caption');
        captionSpan.textContent = img.alt;
        img.insertAdjacentElement('afterend', captionSpan);
      }
    } // Add a PRE containing frontMatterText if it is not empty.

  }, {
    key: "handleFrontMatter",
    value: function handleFrontMatter(p_node) {
      if (!this.frontMatterText || this.frontMatterText.length == 0) {
        return;
      }

      var pre = $("<pre></pre>");
      var code = $("<code class=".concat(this.frontMatterClass, "></code>"));
      code.html(hljs.highlight('yaml', this.frontMatterText, true).value);
      pre.append(code);
      p_node.prepend(pre);
    } // @p_class: the class name of the mermaid code block.

  }, {
    key: "renderMermaid",
    value: function renderMermaid(p_node, p_class) {
      var _this2 = this;

      // Render @code as Mermaid graph.
      // Returns true if succeeded.
      var renderMermaidOne = function renderMermaidOne(code) {
        // Mermaid code block.
        _this2.mermaidParseError = false;
        _this2.mermaidIndex++;
        var graph = null;

        try {
          // Do not increment mermaidIdx here.
          graph = mermaid.mermaidAPI.render(_this2.mermaidClass + '-' + _this2.mermaidIndex, code.textContent, function () {});
        } catch (err) {
          console.log("err:", err);
          return false;
        }

        if (_this2.mermaidParseError || !graph) {
          return false;
        }

        var graphDiv = document.createElement('div');
        graphDiv.classList.add(_this2.mermaidClass);
        graphDiv.innerHTML = graph;
        var preNode = code.parentNode;
        preNode.parentNode.replaceChild(graphDiv, preNode);
        return true;
      };

      var codes = p_node.find('pre code');
      this.mermaidIndex = 0;

      for (var i = 0; i < codes.length; ++i) {
        var code = codes[i];

        if (code.classList.contains(p_class)) {
          renderMermaidOne(code);
        }
      }
    }
  }, {
    key: "renderFlowchart",
    value: function renderFlowchart(p_node, p_classes) {
      var _this3 = this;

      // Render @code as Flowchart.js graph.
      // Returns true if succeeded.
      var renderFlowchartOne = function renderFlowchartOne(code) {
        // Flowchart code block.
        _this3.flowchartIndex++;
        var graph = null;

        try {
          graph = flowchart.parse(code.textContent);
        } catch (err) {
          console.log("err", err);
          return false;
        }

        if (!graph) {
          return false;
        }

        var graphDiv = document.createElement('div');
        graphDiv.id = _this3.flowchartClass + '-' + _this3.flowchartIndex;
        graphDiv.classList.add(_this3.flowchartClass);
        var preNode = code.parentNode;
        var preParentNode = preNode.parentNode;
        preParentNode.replaceChild(graphDiv, preNode); // Draw on it after adding it to page.

        try {
          graph.drawSVG(graphDiv.id);

          _this3.imageHelper.setupSVGToView(graphDiv.children[0], true);
        } catch (err) {
          console.log("err", err);
          preParentNode.replaceChild(preNode, graphDiv);
          return false;
        }

        return true;
      };

      var codes = p_node.find('pre code');
      this.flowchartIndex = 0;

      for (var i = 0; i < codes.length; ++i) {
        var code = codes[i];
        var matched = false;

        for (var j = 0; j < p_classes.length; ++j) {
          if (code.classList.contains(p_classes[j])) {
            matched = true;
            break;
          }
        }

        if (matched) {
          renderFlowchartOne(code);
        }
      }
    }
  }, {
    key: "renderPlantUML",
    value: function renderPlantUML(p_node, p_class) {
      var _this4 = this;

      var handlePlantUMLResultExt = function handlePlantUMLResultExt(id, timeStamp, format, result, isSetupView) {
        var code = document.getElementsByClassName(_this4.plantUMLCodeClass + '-' + id)[0];

        if (code && result.length > 0) {
          var obj = null;

          if (format == 'svg') {
            obj = document.createElement('div');
            obj.classList.add(_this4.plantUMLClass);
            obj.innerHTML = result;

            if (isSetupView) {
              _this4.imageHelper.setupSVGToView(obj.children[0], true);
            }
          } else {
            obj = document.createElement('img');
            obj.src = "data:image/" + format + ";base64, " + result;

            if (isSetupView) {
              _this4.imageHelper.setupIMGToView(obj);
            }
          }

          var preNode = code.parentNode;
          preNode.parentNode.replaceChild(obj, preNode);
        }
      }; // Render @code as PlantUML graph asynchronously.


      var renderPlantUMLOneOnline = function renderPlantUMLOneOnline(helper, code, cb) {
        code.classList.add(_this4.plantUMLCodeClass + '-' + _this4.plantUMLIndex);
        var data = {
          index: _this4.plantUMLIndex,
          setupView: true
        };
        helper.renderPlantUMLOnline(_this4.config.plantUMLServer, _this4.config.plantUMLFormat, code.textContent, function (data, format, result) {
          cb(data.index, 0, format, result, data.setupView);
        }, data);
        _this4.plantUMLIndex++;
      };

      var helper = new _plantumlhelper.default();
      var codes = p_node.find('pre code');
      this.plantUMLIndex = 0;

      for (var i = 0; i < codes.length; ++i) {
        var code = codes[i];

        if (code.classList.contains(p_class)) {
          renderPlantUMLOneOnline(helper, code, handlePlantUMLResultExt);
        }
      }
    }
  }, {
    key: "addClassToCodeBlock",
    value: function addClassToCodeBlock(p_node) {
      var hljsClass = 'hljs';
      var codes = p_node.find('pre code');

      for (var i = 0; i < codes.length; ++i) {
        var code = codes[i];
        code.classList.add(hljsClass);

        if (code.classList.contains("lang-mathjax") || code.classList.contains("language-mathjax")) {
          // Add the class to pre.
          var pare = code.parentElement;
          pare.classList.add("lang-mathjax");
          pare.classList.add("language-mathjax");
          pare.classList.add("tex-to-render");
        }
      }
    }
  }, {
    key: "renderCodeBlockLineNumber",
    value: function renderCodeBlockLineNumber(p_node) {
      var codes = p_node.find('pre code');

      for (var i = 0; i < codes.length; ++i) {
        var code = codes[i];
        var pare = code.parentElement;

        if (pare.classList.contains("lang-mathjax")) {
          continue;
        }

        hljs.lineNumbersBlock(code);
      } // Delete the last extra row.


      var tables = p_node.find('code table');

      for (var _i = 0; _i < tables.length; ++_i) {
        var table = tables[_i];

        if (table.classList.contains("hljs-ln")) {
          var rowCount = table.rows.length;
          table.deleteRow(rowCount - 1);
        }
      }
    }
  }, {
    key: "renderMathJax",
    value: function renderMathJax(p_node) {
      var texToRender = p_node.find('.tex-to-render');
      var nrTex = texToRender.length;

      if (nrTex == 0) {
        return;
      }

      var eles = [];

      for (var i = 0; i < nrTex; ++i) {
        eles.push(texToRender[i]);
      }

      try {
        MathJax.Hub.Queue(function () {
          if (MathJax.InputJax.TeX.resetEquationNumbers) {
            MathJax.InputJax.TeX.resetEquationNumbers();
          }
        }, ["Typeset", MathJax.Hub, eles, postProcessMathJax]);
      } catch (err) {
        console.log("err", err);
      }
    }
  }, {
    key: "makeImageFluid",
    value: function makeImageFluid(p_node) {
      var imgs = p_node.find('img');

      for (var i = 0; i < imgs.length; ++i) {
        var img = imgs[i];

        if (img.id === 'image-view') {
          continue;
        }

        img.classList.add('img-fluid');
      }
    }
  }]);

  return MarkdownIt;
}();

var _default = MarkdownIt;
exports.default = _default;

},{"./imageviewhelper.js":6,"./logger.js":8,"./plantumlhelper.js":15,"./utils.js":17}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("./logger.js"));

var _markdownit = _interopRequireDefault(require("./markdownit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MarkdownRenderer =
/*#__PURE__*/
function () {
  function MarkdownRenderer(p_node) {
    _classCallCheck(this, MarkdownRenderer);

    this.containerNode = p_node;
  }

  _createClass(MarkdownRenderer, [{
    key: "render",
    value: function render(p_config, p_md) {
      var mdit = new _markdownit.default(p_config);
      mdit.render(this.containerNode, p_md);
    }
  }]);

  return MarkdownRenderer;
}();

var _default = MarkdownRenderer;
exports.default = _default;

},{"./logger.js":8,"./markdownit.js":10}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("./utils.js"));

var _logger = _interopRequireDefault(require("./logger.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NavigationRenderer =
/*#__PURE__*/
function () {
  function NavigationRenderer(p_node, p_contentWorker, p_config) {
    _classCallCheck(this, NavigationRenderer);

    this.containerNode = p_node;
    this.fileTree = null; // Target to load after tree is ready.

    this.target = ''; // Base of the navigation file.

    this.naviBase = ''; // File name of the navigation file.

    this.naviFile = '';
    this.contentWorker = p_contentWorker; // showSuffix: whether show suffix.
    // loadBeforeSearch: whether load all nodes before a search.
    // fuzzySearch: whether do a fuzzy search.

    this.config = p_config;
  } // @p_openTarget: whether open target after tree is ready. If false, will
  // only expand to the corresponding node.


  _createClass(NavigationRenderer, [{
    key: "render",
    value: function render(p_naviFile, p_target, p_openTarget) {
      var _this = this;

      this.containerNode.empty(); // The search form.

      this.renderSearchForm();
      var nav = $("<nav class=\"viki-links collapse show\" id=\"viki-docs-nav\"></nav>");
      var tree = $("<div id=\"viki-file-tree\"></div>");
      nav.append(tree);
      this.containerNode.append(nav);

      if (!p_naviFile) {
        return;
      }

      this.target = p_target;
      var utils = new _utils.default();
      this.naviBase = utils.baseOfPath(p_naviFile);
      this.naviFile = utils.fileNameOfPath(p_naviFile);
      this.fileTree = tree;
      var showSuffix = this.config.showSuffix;
      var fuzzySearch = this.config.fuzzySearch;
      tree.on('activate_node.jstree', function (p_e, p_data) {
        var node = p_data.node;

        if (node.original.v_type === 'file' && p_data.event) {
          _this.contentWorker.renderFileInternal(node.original.v_path);
        }
      }).on('ready.jstree', function (p_e, p_data) {
        if (_this.target) {
          if (p_openTarget) {
            _this.contentWorker.renderFileInternal(_this.target);
          } // Expand to the target node.


          _this.expandToNodeByPath(_this.target);
        }
      }).jstree({
        "core": {
          "themes": {
            "dots": false
          },
          "multiple": false,
          "data": {
            "dataType": "json",
            "url": function url(p_node) {
              if (p_node.id === '#') {
                return _this.naviBase + _this.naviFile;
              }

              return p_node.original.v_path + '/' + _this.naviFile;
            },
            "data": function data(p_node) {
              var nodePath = '';

              if (p_node.id === '#') {
                nodePath = _this.naviBase;

                if (nodePath.endsWith('/')) {
                  nodePath = nodePath.substring(0, nodePath.length - 1);
                }
              } else {
                nodePath = p_node.original.v_path;
              }

              return {
                'id': p_node.id,
                'path': nodePath
              };
            },
            "dataFilter": function dataFilter(p_data, p_type) {
              var nodeFromNaviFile = function nodeFromNaviFile(p_opts, p_jobj) {
                var basePath = p_opts.path + '/';
                var utils = new _utils.default();
                var children = []; // Subfolders.

                for (var i = 0; i < p_jobj.sub_directories.length; ++i) {
                  var folder = p_jobj.sub_directories[i];
                  var folderItem = {
                    text: folder.name,
                    icon: 'viki-jstree-folder-icon',
                    a_attr: {
                      href: '#!' + basePath + folder.name,
                      title: folder.name
                    },
                    // Make jstree to load its children dynamically when user open it.
                    children: true,
                    // Viki specific attrs.
                    v_type: 'folder',
                    v_name: folder.name,
                    // Path of this item without ending /.
                    v_path: basePath + folder.name
                  };
                  children.push(folderItem);
                } // Files.


                for (var _i = 0; _i < p_jobj.files.length; ++_i) {
                  var file = p_jobj.files[_i];
                  var showText = showSuffix ? file.name : utils.baseName(file.name);
                  var fileItem = {
                    text: showText,
                    icon: 'viki-jstree-file-icon',
                    a_attr: {
                      href: '#!' + basePath + file.name,
                      title: showText
                    },
                    // Viki specific attrs.
                    v_type: 'file',
                    v_name: file.name,
                    v_path: basePath + file.name
                  };
                  children.push(fileItem);
                }

                return children;
              }; // Extract the data passed to GET.


              var paras = this.url.substring(this.url.indexOf('?') + 1).split('&');
              var opts = {};

              for (var i = 0; i < paras.length; ++i) {
                var key_val = paras[i].split('=');
                opts[decodeURIComponent(key_val[0])] = decodeURIComponent(key_val[1]);
              }

              var data = nodeFromNaviFile(opts, JSON.parse(p_data));
              return JSON.stringify(data);
            }
          }
        },
        "plugins": ["search"],
        "search": {
          "fuzzy": fuzzySearch
        }
      });
    }
  }, {
    key: "renderSearchForm",
    value: function renderSearchForm(p_node) {
      var form = $("<form class=\"viki-search d-flex align-items-center\" onsubmit=\"return false;\">\n            <span class=\"algolia-autocomplete\" style=\"position: relative; display: inline-block; direction: ltr;\">\n            <input type=\"search\" class=\"form-control ds-input\" id=\"search-input\" placeholder=\"Search...\" autocomplete=\"off\" spellcheck=\"false\" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" aria-owns=\"algolia-autocomplete-listbox-0\" dir=\"auto\" style=\"position: relative; vertical-align: top;\">\n            <pre aria-hidden=\"true\" style=\"position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;\">\n            </pre>\n            <span class=\"ds-dropdown-menu\" role=\"listbox\" id=\"algolia-autocomplete-listbox-0\" style=\"position: absolute; top: 100%; z-index: 100; left: 0px; right: auto; display: none;\">\n            <div class=\"ds-dataset-1\">\n            </div>\n            </span>\n            </span>\n            <button class=\"btn btn-link viki-search-docs-toggle d-md-none p-0 ml-3\" type=\"button\" data-toggle=\"collapse\" data-target=\"#viki-docs-nav\" aria-controls=\"viki-docs-nav\" aria-expanded=\"true\" aria-label=\"Toggle docs navigation\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" width=\"30\" height=\"30\" focusable=\"false\"><title>Menu</title><path stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M4 7h22M4 15h22M4 23h22\"></path></svg>\n            </button>\n        </form>");
      var loadBeforeSearch = this.config.loadBeforeSearch;
      var to = false;
      var lastSearchText = '';
      form.find('#search-input').keyup(function (p_e) {
        if (to) {
          clearTimeout(to);
        }

        if (p_e.keyCode === 27 || p_e.keyCode === 219 && p_e.ctrlKey) {
          // Esc to clear the search.
          $('#search-input').val('');
          lastSearchText = '';
          $('#viki-file-tree').jstree(true).clear_search();
          return;
        }

        to = setTimeout(function () {
          var text = $('#search-input').val();

          if (text === lastSearchText) {
            return;
          }

          lastSearchText = text;

          if (text.length > 0) {
            if (loadBeforeSearch) {
              $('#viki-file-tree').jstree(true).load_all(null, function () {
                _logger.default.log('search', text);

                $('#viki-file-tree').jstree(true).search(text);
              });
            } else {
              _logger.default.log('search', text);

              $('#viki-file-tree').jstree(true).search(text);
            }
          } else {
            $('#viki-file-tree').jstree(true).clear_search();
          }
        }, 500);
      });
      this.containerNode.append(form);
    }
  }, {
    key: "expandToNode",
    value: function expandToNode(p_startNode, p_pathNodes, p_idx) {
      var _this2 = this;

      var tree = this.fileTree.jstree(true);
      var hitNode = null;

      for (var i = 0; i < p_startNode.children.length; ++i) {
        var child = p_startNode.children[i];
        var childNode = tree.get_node(child);

        if (childNode.original.v_name === p_pathNodes[p_idx]) {
          hitNode = childNode;
          break;
        }
      }

      if (hitNode) {
        if (p_idx === p_pathNodes.length - 1) {
          // That's it.
          tree.select_node(hitNode);
        } else {
          tree.open_node(hitNode, function (p_node) {
            _this2.expandToNode(p_node, p_pathNodes, p_idx + 1);
          }, false);
        }
      }
    } // Expand to the node by @p_path.

  }, {
    key: "expandToNodeByPath",
    value: function expandToNodeByPath(p_path) {
      var tree = this.fileTree.jstree(true);
      tree.deselect_all();
      var utils = new _utils.default();
      var basePath = utils.cleanPath(this.naviBase);
      var path = utils.cleanPath(p_path);

      if (!path.startsWith(basePath)) {
        return;
      }

      path = path.substring(basePath.length + 1);

      if (!path) {
        return;
      }

      var pathNodes = path.split('/');
      this.expandToNode(tree.get_node('#'), pathNodes, 0);
    }
  }]);

  return NavigationRenderer;
}();

var _default = NavigationRenderer;
exports.default = _default;

},{"./logger.js":8,"./utils.js":17}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NaviWorker = exports.NaviItem = void 0;

var _logger = _interopRequireDefault(require("./logger.js"));

var _worker = _interopRequireDefault(require("./worker.js"));

var _linkrewriter = _interopRequireDefault(require("./linkrewriter.js"));

var _utils = _interopRequireDefault(require("./utils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NaviItem =
/*#__PURE__*/
function () {
  function NaviItem() {
    _classCallCheck(this, NaviItem);

    // Text to display.
    this.text = ""; // Target of this item.

    this.target = ""; // Whether display toc for this item.

    this.toc = true; // Whether display navigation tree for this item.

    this.navi = false; // If @navi is true, this hold the start page of that navigation item.

    this.naviIndex = ""; // Only 2 levels.
    // If not empty, only the text filed of this item is valid.

    this.children = [];
  }

  _createClass(NaviItem, [{
    key: "readFromJson",
    value: function readFromJson(p_jobj) {
      this.text = p_jobj.text;
      this.target = p_jobj.target;

      if (p_jobj.toc != null) {
        this.toc = p_jobj.toc;
      }

      if (p_jobj.navi != null) {
        this.navi = p_jobj.navi;
      }

      if (this.navi && p_jobj.navi_index != null) {
        this.naviIndex = p_jobj.navi_index;
      }

      if (!this.target) {
        if (!p_jobj.children || p_jobj.children.length == 0) {
          return false;
        }

        for (var i = 0; i < p_jobj.children.length; ++i) {
          var child = new NaviItem();
          child.text = p_jobj.children[i].text;
          child.target = p_jobj.children[i].target;

          if (!child.target) {
            return false;
          }

          if (p_jobj.children[i].toc != null) {
            child.toc = p_jobj.children[i].toc;
          }

          if (p_jobj.children[i].navi != null) {
            child.navi = p_jobj.children[i].navi;
          }

          this.children.push(child);
        }
      }

      return true;
    }
  }, {
    key: "toLi",
    value: function toLi(p_activeItem) {
      var li;

      if (this.children.length > 0) {
        // A drop down item.
        li = $("<li class=\"nav-item dropdown\"></li>"); // Toggle.

        var a = $("<a class=\"nav-link dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">".concat(this.text, "</a>"));
        li.append(a); // Div.

        var div = $("<div class=\"dropdown-menu\"></div>"); // Sub items.

        for (var i = 0; i < this.children.length; ++i) {
          var child = this.children[i];
          var sub = $("<a class=\"dropdown-item\" href=\"".concat(child.target, "\">").concat(child.text, "</a>"));

          if (p_activeItem === child) {
            sub.addClass('active');
            li.addClass('active');
          }

          div.append(sub);
        }

        li.append(div);
      } else {
        li = $("<li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"".concat(this.target, "\">").concat(this.text, "</a>\n            </li>"));

        if (p_activeItem === this) {
          li.addClass('active');
        }
      }

      return li;
    }
  }]);

  return NaviItem;
}();

exports.NaviItem = NaviItem;

var ActionItem =
/*#__PURE__*/
function () {
  function ActionItem() {
    var p_text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var p_icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var p_target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    _classCallCheck(this, ActionItem);

    this.text = p_text;
    this.icon = p_icon;
    this.target = p_target;
  }

  _createClass(ActionItem, [{
    key: "readFromJson",
    value: function readFromJson(p_jobj) {
      if (p_jobj.text != null) {
        this.text = p_jobj.text;
      }

      if (p_jobj.icon != null) {
        this.icon = p_jobj.icon;
      }

      if (p_jobj.target != null) {
        this.target = p_jobj.target;
      }

      return true;
    }
  }, {
    key: "toLi",
    value: function toLi() {
      var li = $("<li class=\"nav-item\"></li>");
      var a = $("<a class=\"nav-link p-2\" href=\"".concat(this.target, "\" target=\"_blank\" rel=\"noopener\" aria-label=\"").concat(this.text, "\"></a>"));

      if (this.icon) {
        var img = $("<img class=\"navbar-nav-icon\" src=\"".concat(this.icon, "\" title=\"").concat(this.text, "\"/>"));
        a.append(img);
      } else {
        a.text(this.text);
      }

      li.append(a);
      return li;
    }
  }]);

  return ActionItem;
}();

var NaviWorker =
/*#__PURE__*/
function (_Worker) {
  _inherits(NaviWorker, _Worker);

  function NaviWorker() {
    _classCallCheck(this, NaviWorker);

    return _possibleConstructorReturn(this, _getPrototypeOf(NaviWorker).call(this));
  }

  _createClass(NaviWorker, [{
    key: "register",
    value: function register(p_viki) {
      _get(_getPrototypeOf(NaviWorker.prototype), "register", this).call(this, p_viki);

      _logger.default.log("register NaviWorker");
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      $.get("navigation.json", function (p_data) {
        // Navigations.
        var items = [];

        if (p_data.navigation) {
          for (var i = 0; i < p_data.navigation.length; ++i) {
            var it = new NaviItem();

            if (!it.readFromJson(p_data.navigation[i])) {
              continue;
            }

            items.push(it);
          }
        }

        _this.viki.naviItems = items;

        var activeItem = _this.routeTarget();

        _this.renderNaviBar(activeItem); // Actions.


        var actions = [];

        if (p_data.actions) {
          for (var _i = 0; _i < p_data.actions.length; ++_i) {
            var ac = new ActionItem();

            if (!ac.readFromJson(p_data.actions[_i])) {
              continue;
            }

            actions.push(ac);
          }
        }

        _this.renderActionBar(actions);

        _this.viki.scheduleNext();
      });
    }
  }, {
    key: "renderNaviBar",
    value: function renderNaviBar(p_activeItem) {
      var navbar = $("<nav id=\"viki-navbar\", class=\"navbar navbar-expand-md navbar-dark flex-row viki-navbar\"></nav>"); // Brand.

      var brandHtml = this.viki.config.brand;

      if (this.viki.config.brandIcon) {
        brandHtml = "<img class=\"d-block navbar-brand-icon\" width=\"36\" height=\"36\" src=\"".concat(this.viki.config.brandIcon, "\"/>");
      }

      var brand = $("<a class=\"navbar-brand\" href=\"#\">".concat(brandHtml, "</a>"));
      navbar.append(brand); // Toggle button.

      var button = $("<button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#viki-navbarCollapse\" aria-controls=\"viki-navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>");
      navbar.append(button); // Navigaton items.

      if (this.viki.naviItems.length > 0) {
        var navDiv = $("<div class=\"navbar-collapse collapse\" id=\"viki-navbarCollapse\"></div>");
        var navUl = $("<ul class=\"navbar-nav mr-auto\"></ul>");
        var items = this.viki.naviItems;

        for (var i = 0; i < items.length; ++i) {
          var navLi = items[i].toLi(p_activeItem);
          navUl.append(navLi);
        }

        navDiv.append(navUl);
        navbar.append(navDiv);
      }

      var linkRewriter = new _linkrewriter.default();
      linkRewriter.rewriteLinks(navbar, this.viki.info.target, '');
      $('body').append(navbar);
    } // Route current access target through navigation items.

  }, {
    key: "routeTarget",
    value: function routeTarget() {
      var items = this.viki.naviItems;
      var target = this.viki.info.target.toLowerCase();
      var utils = new _utils.default();

      var matchTarget = function matchTarget(p_item, p_target) {
        if (utils.pathEqual(p_item.target, p_target)) {
          return true;
        }

        return false;
      };

      var activeItem = null; // First match non-navi items.

      var naviItems = [];

      for (var i = 0; i < items.length && !activeItem; ++i) {
        var item = items[i];

        if (item.navi) {
          naviItems.push(item);
          continue;
        }

        if (item.children.length > 0) {
          // Match the child item.
          for (var j = 0; j < item.children.length; ++j) {
            var child = item.children[j];

            if (child.navi) {
              naviItems.push(child);
              continue;
            }

            if (matchTarget(child, target)) {
              activeItem = child;
              break;
            }
          }
        } else if (matchTarget(item, target)) {
          activeItem = item;
          break;
        }
      } // Check navi items.


      for (var _i2 = 0; _i2 < naviItems.length && !activeItem; ++_i2) {
        var base = utils.baseOfPath(naviItems[_i2].target);

        if (utils.isSubPath(base, target)) {
          activeItem = naviItems[_i2];
          break;
        }
      } // Update info according to hit target.


      if (activeItem) {
        var info = this.viki.info;
        info.toc = activeItem.toc;

        if (activeItem.navi) {
          info.naviFile = activeItem.target;
          info.naviIndex = info.baseUrl + activeItem.naviIndex;
        }
      }

      return activeItem;
    }
  }, {
    key: "renderActionBar",
    value: function renderActionBar(p_actionItems) {
      if (p_actionItems.length == 0) {
        return;
      }

      var ul = $("<ul class=\"navbar-nav flex-row ml-md-auto d-none d-md-flex\"></ul>");

      for (var i = 0; i < p_actionItems.length; ++i) {
        var li = p_actionItems[i].toLi();
        ul.append(li);
      }

      $("#viki-navbar").append(ul);
    }
  }]);

  return NaviWorker;
}(_worker.default);

exports.NaviWorker = NaviWorker;

},{"./linkrewriter.js":7,"./logger.js":8,"./utils.js":17,"./worker.js":20}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("./logger.js"));

var _worker = _interopRequireDefault(require("./worker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageWorker =
/*#__PURE__*/
function (_Worker) {
  _inherits(PageWorker, _Worker);

  function PageWorker() {
    _classCallCheck(this, PageWorker);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageWorker).call(this));
  }

  _createClass(PageWorker, [{
    key: "register",
    value: function register(p_viki) {
      _get(_getPrototypeOf(PageWorker.prototype), "register", this).call(this, p_viki);

      _logger.default.log("register PageWorker");
    }
  }, {
    key: "run",
    value: function run() {
      // Title.
      document.title = this.viki.config.title; // Favicon.

      if (this.viki.config.favicon) {
        $("#favicon").attr("href", this.viki.config.favicon);
      } else {
        $("#favicon").remove();
      }

      this.viki.scheduleNext();
    }
  }]);

  return PageWorker;
}(_worker.default);

var _default = PageWorker;
exports.default = _default;

},{"./logger.js":8,"./worker.js":20}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PlantUMLHelper =
/*#__PURE__*/
function () {
  function PlantUMLHelper() {
    _classCallCheck(this, PlantUMLHelper);
  }

  _createClass(PlantUMLHelper, [{
    key: "renderPlantUMLOnline",
    value: function renderPlantUMLOnline(server, format, text, callback, data) {
      var httpGet = function httpGet(url, type, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url);
        xmlHttp.responseType = type;

        xmlHttp.onload = function () {
          callback(xmlHttp.response);
        };

        xmlHttp.send(null);
      };

      var getPlantUMLOnlineURL = function getPlantUMLOnlineURL(server, format, text) {
        var s = unescape(encodeURIComponent(text));
        var arr = [];

        for (var i = 0; i < s.length; i++) {
          arr.push(s.charCodeAt(i));
        }

        var compressor = new Zopfli.RawDeflate(arr);
        var compressed = compressor.compress();
        var url = server + "/" + format + "/" + encode64_(compressed);
        return url;
      };

      var url = getPlantUMLOnlineURL(server, format, text);

      if (format == 'png') {
        httpGet(url, 'blob', function (resp) {
          var blob = resp;
          var reader = new FileReader();

          reader.onload = function () {
            var dataUrl = reader.result;
            var png = dataUrl.substring(dataUrl.indexOf(',') + 1);
            callback(data, format, png);
          };

          reader.readAsDataURL(blob);
        });
      } else if (format == 'svg') {
        httpGet(url, 'text', function (resp) {
          callback(data, format, resp);
        });
      }
    }
  }]);

  return PlantUMLHelper;
}();

var _default = PlantUMLHelper;
exports.default = _default;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("./logger.js"));

var _utils = _interopRequireDefault(require("./utils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TocRenderer =
/*#__PURE__*/
function () {
  function TocRenderer(p_node) {
    _classCallCheck(this, TocRenderer);

    this.containerNode = p_node;
    this.toc = [];
  } // Render the toc of @p_contentNode into this.containerNode.


  _createClass(TocRenderer, [{
    key: "render",
    value: function render(p_contentNode) {
      this.containerNode.empty();
      this.toc = [];
      var utils = new _utils.default(); // Fetch the outline.

      var headers = p_contentNode.find('h1, h2, h3, h4, h5, h6');

      for (var i = 0; i < headers.length; ++i) {
        var header = headers[i];
        this.toc.push({
          level: parseInt(header.tagName.substr(1)),
          anchor: header.id,
          title: utils.escapeHtml(header.textContent)
        });
      }

      if (this.toc.length === 0) {
        return;
      }

      var tocTree = utils.tocToTree(this.toc);
      this.containerNode.html(tocTree);
      utils.rewriteAnchorInToc(this.containerNode);
    }
  }]);

  return TocRenderer;
}();

var _default = TocRenderer;
exports.default = _default;

},{"./logger.js":8,"./utils.js":17}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: "tocToTree",
    value: function tocToTree(p_toc) {
      // Return the topest level of @toc, starting from 1.
      var baseLevelOfToc = function baseLevelOfToc(p_toc) {
        var level = -1;

        for (var i in p_toc) {
          if (level == -1) {
            level = p_toc[i].level;
          } else if (level > p_toc[i].level) {
            level = p_toc[i].level;
          }
        }

        if (level == -1) {
          level = 1;
        }

        return level;
      }; // Handle wrong title levels, such as '#' followed by '###'.


      var toPerfectToc = function toPerfectToc(p_toc, p_baseLevel) {
        var curLevel = p_baseLevel - 1;
        var perfToc = [];

        for (var i in p_toc) {
          var _item = p_toc[i]; // Insert empty header.

          while (_item.level > curLevel + 1) {
            curLevel += 1;
            var tmp = {
              level: curLevel,
              anchor: '',
              title: '[EMPTY]'
            };
            perfToc.push(tmp);
          }

          perfToc.push(_item);
          curLevel = _item.level;
        }

        return perfToc;
      };

      var itemToHtml = function itemToHtml(p_item) {
        return '<a href="#' + p_item.anchor + '">' + p_item.title + '</a>';
      };

      var baseLevel = baseLevelOfToc(p_toc);
      var perfectToc = toPerfectToc(p_toc, baseLevel);
      var front = '<li>';
      var ending = ['</li>'];
      var curLevel = baseLevel;

      for (var i in perfectToc) {
        var item = perfectToc[i];

        if (item.level == curLevel) {
          front += '</li>';
          front += '<li>';
          front += itemToHtml(item);
        } else if (item.level > curLevel) {
          // assert(item.level - curLevel == 1)
          front += '<ul>';
          ending.push('</ul>');
          front += '<li>';
          front += itemToHtml(item);
          ending.push('</li>');
          curLevel = item.level;
        } else {
          while (item.level < curLevel) {
            var ele = ending.pop();
            front += ele;

            if (ele == '</ul>') {
              curLevel--;
            }
          }

          front += '</li>';
          front += '<li>';
          front += itemToHtml(item);
        }
      }

      while (ending.length > 0) {
        front += ending.pop();
      }

      front = front.replace("<li></li>", "");
      front = '<ul>' + front + '</ul>';
      return front;
    }
  }, {
    key: "rewriteAnchorInToc",
    value: function rewriteAnchorInToc(p_tocNode) {
      var _this = this;

      p_tocNode.find('a').click(function (p_e) {
        p_e.preventDefault();
        var href = p_e.target.getAttribute('href');
        var idx = href.lastIndexOf('#');

        if (idx != -1) {
          var anchor = href.substring(idx);

          if (anchor) {
            var header = $(anchor);

            if (header.length > 0) {
              header[0].scrollIntoView(); // Change the hash.

              _this.updateHashSilently(href);
            }
          }
        }
      });
    }
  }, {
    key: "isRelativeUrl",
    value: function isRelativeUrl(p_url) {
      return p_url.indexOf('://') === -1;
    }
  }, {
    key: "isRelativePath",
    value: function isRelativePath(p_path) {
      if (typeof p_path == "undefined" || p_path.startsWith('/')) {
        return false;
      }

      return true;
    }
  }, {
    key: "cleanPath",
    value: function cleanPath(p_path) {
      if (p_path.indexOf('/') === -1) {
        return p_path;
      }

      var absolute = p_path.startsWith('/'); // Split it.

      var newParts = [];
      var parts = p_path.split('/');

      for (var i = 0; i < parts.length; ++i) {
        if (!parts[i] || parts[i] === '.') {
          continue;
        }

        if (parts[i] === '..') {
          if (newParts.length > 0) {
            newParts.pop();
            continue;
          }
        }

        newParts.push(parts[i]);
      }

      return (absolute ? '/' : '') + newParts.join('/');
    }
  }, {
    key: "baseOfPath",
    value: function baseOfPath(p_path) {
      var idx = p_path.lastIndexOf('/');
      return p_path.substring(0, idx + 1);
    }
  }, {
    key: "fileNameOfPath",
    value: function fileNameOfPath(p_path) {
      var idx = p_path.lastIndexOf('/');
      return p_path.substring(idx + 1);
    } // Escape @p_text to Html.

  }, {
    key: "escapeHtml",
    value: function escapeHtml(p_text) {
      var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return p_text.replace(/[&<>"']/g, function (m) {
        return map[m];
      });
    } // Update the hash of the url without re-loading.

  }, {
    key: "updateHashSilently",
    value: function updateHashSilently(p_hash) {
      window.viki_silent_hash = true;
      window.location.hash = p_hash;
    } // Whether @p_a and @p_b is equal.

  }, {
    key: "pathEqual",
    value: function pathEqual(p_a, p_b) {
      var a = this.cleanPath(p_a.toLowerCase());
      var b = this.cleanPath(p_b.toLowerCase());
      return a === b;
    } // Whether @p_b is sub path of @p_a.

  }, {
    key: "isSubPath",
    value: function isSubPath(p_a, p_b) {
      if (!p_a) {
        return false;
      }

      var a = this.cleanPath(p_a.toLowerCase());
      var b = this.cleanPath(p_b.toLowerCase());
      return b.startsWith(a);
    } // The base name without suffix.

  }, {
    key: "baseName",
    value: function baseName(p_file) {
      var idx = p_file.lastIndexOf('.');

      if (idx == -1) {
        return p_file;
      }

      return p_file.substring(0, idx);
    }
  }]);

  return Utils;
}();

var _default = Utils;
exports.default = _default;

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("./logger.js"));

var _vikiinfo = _interopRequireDefault(require("./vikiinfo.js"));

var _configworker = require("./configworker.js");

var _pageworker = _interopRequireDefault(require("./pageworker.js"));

var _naviworker = require("./naviworker.js");

var _fetchtargetworker = _interopRequireDefault(require("./fetchtargetworker.js"));

var _contentworker = _interopRequireDefault(require("./contentworker.js"));

var _footerworker = _interopRequireDefault(require("./footerworker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Viki =
/*#__PURE__*/
function () {
  function Viki() {
    _classCallCheck(this, Viki);

    this.workers = [];
    this.curWorkerIdx = -1;
    this.config = new _configworker.Config();
    this.naviItems = [];
    this.info = new _vikiinfo.default();
  }

  _createClass(Viki, [{
    key: "init",
    value: function init() {
      var _this = this;

      window.viki_silent_hash = false;

      var registerWorker = function registerWorker(p_worker) {
        p_worker.register(_this);

        _this.workers.push(p_worker);
      };

      var configWorker = new _configworker.ConfigWorker();
      registerWorker(configWorker);
      var pageWorker = new _pageworker.default();
      registerWorker(pageWorker);
      var naviWorker = new _naviworker.NaviWorker();
      registerWorker(naviWorker);
      var fetchTargetWorker = new _fetchtargetworker.default();
      registerWorker(fetchTargetWorker);
      var contentWorker = new _contentworker.default();
      registerWorker(contentWorker);
      var footerWorker = new _footerworker.default();
      registerWorker(footerWorker);
      $(document).ready(function () {
        if (!_this.initTargetFromHash()) {
          return;
        }

        $(window).bind('hashchange', function () {
          if (window.viki_silent_hash) {
            window.viki_silent_hash = false;
            return;
          }

          window.location.reload(false);
        });

        _logger.default.log("target", _this.info.target, "anchor", _this.info.anchor);

        _this.curWorkerIdx = -1;

        _this.scheduleNext();
      });
    }
  }, {
    key: "scheduleNext",
    value: function scheduleNext() {
      if (this.curWorkerIdx >= this.workers.length - 1) {
        _logger.default.log("all workers finished");

        this.curWorkerIdx = -1;
      } else {
        ++this.curWorkerIdx;

        _logger.default.log("schedule worker", this.curWorkerIdx);

        this.workers[this.curWorkerIdx].run();
      }
    }
  }, {
    key: "initTargetFromHash",
    value: function initTargetFromHash() {
      var isValidHash = function isValidHash(hash) {
        var a = document.createElement('a');
        a.href = hash;
        return window.location.hostname === a.hostname;
      };

      var target = "index.md";
      var hash = window.location.hash || ""; // Default hash completion.

      var newHash = '';

      if (hash === '' || hash === "#" || hash === "#!") {
        newHash = "#!" + target;
      } else if (hash.startsWith("#!") && hash.endsWith('/')) {
        newHash = hash + target;
      }

      if (newHash) {
        window.location.hash = newHash;
        window.location.reload(false);
        return false;
      }

      if (hash.startsWith("#!")) {
        target = hash.substring(2);
      } else if (hash.startsWith("#")) {
        target = hash.substring(1);
      } // Validate if it could be located.


      if (!isValidHash(target)) {
        target = "index.md";
      }

      target = decodeURIComponent(target); // Anchor.

      var idx = target.indexOf('#');

      if (idx != -1) {
        this.info.setTarget(target.substring(0, idx), target.substring(idx + 1));
      } else {
        this.info.setTarget(target);
      }

      return true;
    }
  }]);

  return Viki;
}();

var _default = Viki;
exports.default = _default;

},{"./configworker.js":1,"./contentworker.js":2,"./fetchtargetworker.js":4,"./footerworker.js":5,"./logger.js":8,"./naviworker.js":13,"./pageworker.js":14,"./vikiinfo.js":19}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("./utils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VikiInfo =
/*#__PURE__*/
function () {
  function VikiInfo() {
    _classCallCheck(this, VikiInfo);

    // Target page specified by user.
    this.target = ''; // Anchor within target page.

    this.anchor = ''; // Base url.

    this.baseUrl = ''; // Whether enable toc.

    this.toc = true; // Navigation file for this target.

    this.naviFile = ''; // Index page of navigation file.
    // Base URL prepended.

    this.naviIndex = ''; // Data of the target file.

    this.data = null;
    this.naviContainerId = '';
    this.contentContainerId = '';
    this.tocContainerId = '';
  }

  _createClass(VikiInfo, [{
    key: "setTarget",
    value: function setTarget(p_target) {
      var p_anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.target = p_target;
      this.anchor = p_anchor;
      var utils = new _utils.default();
      this.baseUrl = utils.baseOfPath(p_target);
    }
  }]);

  return VikiInfo;
}();

var _default = VikiInfo;
exports.default = _default;

},{"./utils.js":17}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Worker =
/*#__PURE__*/
function () {
  function Worker() {
    _classCallCheck(this, Worker);

    this.viki = null;
  }

  _createClass(Worker, [{
    key: "register",
    value: function register(p_viki) {
      this.viki = p_viki;
    }
  }, {
    key: "run",
    value: function run() {}
  }]);

  return Worker;
}();

var _default = Worker;
exports.default = _default;

},{}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
