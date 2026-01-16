const portal1 = WORLD.getObject("new_portal.glb(996)");
const seoulP = WORLD.getObject("new_portal.glb(e9d)");
const busanP = WORLD.getObject("new_portal.glb(ffc)");
const jejuP = WORLD.getObject("new_portal.glb(dfa)");
const jeonjuP = WORLD.getObject("new_portal.glb(943)");

const end = GUI.getObject("카드1(2).png(2df)");
const intro = GUI.getObject("scr");
const intro2 = GUI.getObject("how");

const seoul_card = WORLD.getObject("2.png(4c6)");
const busan_card = WORLD.getObject("3.png(5a0)");
const jeju_card = WORLD.getObject("jejuC.png(544)");
const jeonju_card = WORLD.getObject("1.png(b98)");

const seoulA = WORLD.getObject("seoulA.glb(6b3)");
const busanA = WORLD.getObject("BusanA.glb(927)");
const jeonjuA = WORLD.getObject("jeonjuA.glb(3f6)");
const jejuA = WORLD.getObject("jejuA.glb(fe2)");

const des = GUI.getObject("des.png(862)");
const seoulAA = GUI.getObject("Seoul_Card.png(e20)");
const busanAA = GUI.getObject("bC.png(32b)");
const jejuAA = GUI.getObject("jejuC.png(bb7)");
const jeonjuAA = GUI.getObject("jjC.png(9ac)");
const mapX = GUI.getObject("map selection");

const gangwonBasMap = GUI.getObject("Gangwon2");
const gangwonL = GUI.getObject("강원라지");
const gangX = GUI.getObject("gangwonX");
const busanM1 = GUI.getObject("busanBas");
const busanM2 = GUI.getObject("부산라지");
const jejuM1 = GUI.getObject("jeju.png(1ab)");
const jejuM2 = GUI.getObject("제주라지");
const seoulM1 = GUI.getObject("seoul.png(62f)");
const seoulM2 = GUI.getObject("서울라지");
const jeonjuM1 = GUI.getObject("jeonbuk.png(165)");
const jeonjuM2 = GUI.getObject("전주라지");

const aliGreen = WORLD.getObject("Alibaba Green.glb(4c2)");
const aliBlue = WORLD.getObject("Alibaba Blue.glb(ea8)");
const aliYellow = WORLD.getObject("Alibaba Yellow.glb(dea)");
const aliBlack = WORLD.getObject("Alibaba Black.glb(abd)");
const aliRed = WORLD.getObject("Alibaba Red.glb(268)");

const greenR = WORLD.getObject("Green.glb(525)");
const redR = WORLD.getObject("Red.glb(cc4)");
const blueR = WORLD.getObject("Blue.glb(fda)");
const blackR = WORLD.getObject("Black.glb(aee)");
const yellowR = WORLD.getObject("Yellow.glb(0f9)");

const score = GUI.getObject("button_text_large_blue_null(30e)");
const resetB = GUI.getObject("button_ao_x(f42)");
const resetP = GUI.getObject("reset");
const resetNo = GUI.getObject("casual_a_tab_b(a18)");
const resetYes = GUI.getObject("casual_a_tab_b(dc6)");

const hint = GUI.getObject("hint.png(613)");
const hintX = GUI.getObject("x.png(6bb)");
const seoulHint = GUI.getObject("14.png(550)");
const busanHint = GUI.getObject("12.png(661)");
const jejuHint = GUI.getObject("13.png(b74)");
const jeonjuHint = GUI.getObject("11.png(431)");

const doorIn1 = WORLD.getObject("in");
const doorOut1 = WORLD.getObject("out");

const welcomJeju = GUI.getObject("jejuu.png(765)");
const welcomJonju = GUI.getObject("Jonju.png(60c)");
const welcomSeoul = GUI.getObject("seooul.png(c7e)");
const welcomBusan = GUI.getObject("busan.png(daf)");

const help = GUI.getObject("help.png(581)");

const olympic_theme = WORLD.getObject("y2mate.com - 2024 강원 동계청소년올림픽대회 홍보영상.mp3(0ec)");

const top = WORLD.getObject("ovall2.glb(411)");

var hhelp = 0;

var x = 0;
var ali = 0;
var time = 0;

var green = 1;
var yellow = 1;
var red = 1;
var black = 1;
var blue = 1;

function Start() {
	(async () => {
		const avatar = await REDBRICK.AvatarManager.createDefaultAvatar();
		const camera = WORLD.getObject("MainCamera");
		const followingCamera = avatar.setFollowingCamera(camera);
		avatar.setDefaultController();
		
		// 여기서부터 코드 작성
	    
	    end.hide();
	    score.hide();
	    
	    function introo() {
	        intro.hide();
	        score.show();
	    }
	    
	    setTimeout(introo, 4000);
	    
	    intro2.onClick(() => {
	        intro2.hide();
	    });
	    
	    
	    
	    function showEnd() {
	        end.show();
	    }
 		
		function hideBasicGUI() {
		    score.hide();
		    help.hide();
		    gangwonBasMap.hide();
		    resetB.hide();
		    des.hide();
		}
		function showBasicGUI() {
		    score.show();
		    help.show();
		    gangwonBasMap.show();
		    resetB.show();
		    des.show();
		}
        

        function endHelp() {
            hideAllHelpElements();
        }
        
        help.onClick(() => {
            window.open("https://sites.google.com/gpa.ac.kr/completethe/home");
        });
        
		
		seoul_card.kill();
		busan_card.kill();
		jeju_card.kill();
		jeonju_card.kill();
		
		seoulAA.hide();
		busanAA.hide();
		jejuAA.hide();
		jeonjuAA.hide();
		mapX.hide();
		
		gangwonL.hide();
		gangX.hide();
		
		busanM1.hide();
		busanM2.hide();
		
		jejuM1.hide();
		jejuM2.hide();
		
		seoulM1.hide();
		seoulM2.hide();
		
		jeonjuM1.hide();
		jeonjuM2.hide();
		
		gangwonBasMap.onClick(() => {
		    gangwonL.show();
		    gangX.show();
		    score.hide();
		});
		
		busanM1.onClick(() => {
		    busanM2.show();
		    gangX.show();
		    score.hide();
		});
		
		jejuM1.onClick(() => {
		    jejuM2.show();
		    gangX.show();
		    score.hide();
		});
		
		seoulM1.onClick(() => {
		    seoulM2.show();
		    gangX.show();
		    score.hide();
		});
		
		jeonjuM1.onClick(() => {
		    jeonjuM2.show();
		    gangX.show();
		    score.hide();
		});
		
		welcomJeju.hide();
		welcomJonju.hide();
		welcomSeoul.hide();
		welcomBusan.hide();
		
		gangX.onClick(() => {
		    if (x === 0) {
		        gangwonL.hide();
		        
		    }
		    
		    else if (x === 1) {
		        seoulM2.hide();
		    }
		    
		    else if (x === 2) {
		        busanM2.hide();
		    }
		    
		    else if (x === 3) {
		        jejuM2.hide();
		    }
		    
		    else if (x ===4) {
		        jeonjuM2.hide();
		    }
		    
		    gangX.hide();
		    score.show();
		});
		
		seoulHint.hide();
		busanHint.hide();
		jeonjuHint.hide();
		jejuHint.hide();
		hintX.hide();
		
		hint.onClick(() => {
		    
		    
		    if (x === 1) {
		        seoulHint.show();
		        score.hide();
		        hintX.show();
		    }
		    
		    else if (x === 2) {
		        busanHint.show();
		        score.hide();
		        hintX.show();
		    }
		    
		    else if (x === 3) {
		        jejuHint.show();
		        score.hide();
		        hintX.show();
		    }
		    
		    else if (x === 4) {
		        jeonjuHint.show();
		        score.hide();
		        hintX.show();
		    }
		    
		    
		});
		
		hintX.onClick(() => {
		    if (x === 1) {
		        seoulHint.hide();
		        hintX.hide();
		        score.show();
		    }
		    
		    else if (x === 2) {
		        busanHint.hide();
		        hintX.hide();
		        score.show();
		    }
		    
		    else if (x === 3) {
		        jejuHint.hide();
		        hintX.hide();
		        score.show();
		    }
		    
		    else if (x === 4) {
		        jeonjuHint.hide();
		        hintX.hide();
		        score.show();
		    }
		    
		})
		
		resetP.hide();
		resetYes.hide();
		resetNo.hide();
		
		des.onClick(() => {
            seoulAA.show();
            busanAA.show();
    		jejuAA.show();
    		jeonjuAA.show();
    		mapX.show();
    		hideBasicGUI();
        });
        
        seoulAA.onClick(() => {
            seoulAA.hide();
            busanAA.hide();
    		jejuAA.hide();
    		jeonjuAA.hide();
    		mapX.hide();
    		showBasicGUI();
    		seoul_card.revive();
    		busan_card.kill();
    		jeju_card.kill();
    		jeonju_card.kill();
    		x = 1;
        });
        
        busanAA.onClick(() => {
            seoulAA.hide();
            busanAA.hide();
    		jejuAA.hide();
    		jeonjuAA.hide();
    		mapX.hide();
    		showBasicGUI();
    		busan_card.revive();
    		seoul_card.kill();
    		jeju_card.kill();
    		jeonju_card.kill();
    		x = 2;
        });
        
        jejuAA.onClick(() => {
            seoulAA.hide();
            busanAA.hide();
    		jejuAA.hide();
    		jeonjuAA.hide();
    		mapX.hide();
    		showBasicGUI();
    		jeju_card.revive();
    		seoul_card.kill();
    		busan_card.kill();
    		jeonju_card.kill();
    		x = 3;
    		
        });
        
        jeonjuAA.onClick(() => {
            seoulAA.hide();
            busanAA.hide();
    		jejuAA.hide();
    		jeonjuAA.hide();
    		mapX.hide();
    		showBasicGUI();
    		jeonju_card.revive();
    		seoul_card.kill();
    		busan_card.kill();
    		jeju_card.kill();
    		x = 4;
        });
        
        mapX.onClick(() => {
            mapX.hide();
            seoulAA.hide();
            busanAA.hide();
    		jejuAA.hide();
    		jeonjuAA.hide();
    		showBasicGUI();
        });
        
        resetB.onClick(() => {
            hideBasicGUI();
            resetP.show();
            resetYes.show();
            resetNo.show();
        });
        
        resetYes.onClick(() => {
            showBasicGUI();
            avatar.spawn();
            resetP.hide();
            resetYes.hide();
            resetNo.hide();
            
            jeonjuM1.hide();
            seoulM1.hide();
            jejuM1.hide();
            busanM1.hide();
            x = 0;
            
            gangwonBasMap.show();
        });
        
        resetNo.onClick(() => {
            showBasicGUI();
            resetP.hide();
            resetYes.hide();
            resetNo.hide();
        });
        
        blackR.kill();
        blueR.kill();
        redR.kill();
        greenR.kill();
        yellowR.kill();
        
        function checkAliAndKillTop() {
            if (ali === 5) {
                avatar.spawn();
                olympic_theme.getAudio().play();
                setTimeout(showEnd, 5000);
            }
        }
        
        aliGreen.onClick(() => {
            ali = ali + 1;
            green = green - 1;
            aliGreen.kill();
            //plGreen.kill();
            greenR.revive();
            score.setText('모은 링의 개수 - Rings: ' + ali + '/5');

            checkAliAndKillTop();
        });
        
        aliBlue.onClick(() => {
            ali = ali + 1;
            blue = blue -1;
            aliBlue.kill();
            blueR.revive();
            score.setText('모은 링의 개수 - Rings: ' + ali + '/5');
            checkAliAndKillTop();
        });
        
        aliYellow.onClick(() => {
            ali = ali + 1;
            yellow = yellow-1;
            aliYellow.kill();
            yellowR.revive();
            score.setText('모은 링의 개수 - Rings: ' + ali + '/5');
            checkAliAndKillTop();
        });
        
        aliBlack.onClick(() => {
            ali = ali + 1;
            black = black - 1;
            aliBlack.kill();
            blackR.revive();
            score.setText('모은 링의 개수 - Rings: ' + ali + '/5');
            checkAliAndKillTop();
        });
        
        aliRed.onClick(() => {
            ali = ali + 1;
            red = red - 1;
            aliRed.kill();
            redR.revive();
            score.setText('모은 링의 개수 - Rings: ' + ali + '/5');
            checkAliAndKillTop();
        });
		
		function welJeju() {
            welcomJeju.hide();
        }
        
        function welJonju() {
            welcomJonju.hide();
        }
        
        function welSeoul() {
            welcomSeoul.hide();
        }
        
        function welBusan() {
            welcomBusan.hide();
        }
        
        // function hintOrNot() {
        //     time = 1;
        // }
        
		avatar.onCollide(portal1, ()=>{
		    if (x === 1) { // Seoul
		       avatar.go(1211.14, -263.43, 602.51); 
		       des.hide();
		       gangwonBasMap.hide();
		       seoulM1.show();
		       welcomSeoul.show();
		       setTimeout(welSeoul, 2500);
		      // olympic_theme.getAudio().stop();
		      // setTimeout(hintOrNot, 180000);
		      // if (time === 1) {
		      //     hint.show();
		      // }
		    }
		    
		    else if (x === 2) { // Busan
		        avatar.go(1299, 14.47, -1094.56);
		        des.hide();
		        gangwonBasMap.hide();
		        busanM1.show();
		        welcomBusan.show();
		        setTimeout(welBusan, 2500);
		    }
		    
		    else if (x === 3) { // Jeju
		        //
                avatar.go(-1328.15, 258.41, 150.63);
                des.hide();
                gangwonBasMap.hide();
                jejuM1.show();
                welcomJeju.show();
                setTimeout(welJeju, 2500);
        //         if (time === 1) {
		      //     hint.show();
		      //  }
		    }
		    
		    else if (x === 4) { // Jeonju
		        avatar.go(-1814.8, 932, 1861.44);
		        des.hide();
		        gangwonBasMap.hide();
		        jeonjuM1.show();
		        welcomJonju.show();
		        setTimeout(welJonju, 2500);
		      //  if (time === 1) {
		      //     hint.show();
		      //  }
		    }
		    
		    else {
		        
		    }
            
        });
        
        avatar.onCollide(seoulP, () => {
            avatar.spawn();
            gangwonBasMap.show();
            seoulM1.hide();
            x = 0;
            time = 0;
            des.show();
        });
        
        avatar.onCollide(busanP, () => {
            avatar.spawn();
            des.show();
            gangwonBasMap.show();
            busanM1.hide();
            x = 0;
            time = 0;
        });
        
        avatar.onCollide(jejuP, () => {
            avatar.spawn();
            des.show();
            gangwonBasMap.show();
            jejuM1.hide();
            x = 0;
            time = 0;
        });
        
        avatar.onCollide(doorIn1, () => {
            avatar.go(0,0,11);
        })
        
        avatar.onCollide(doorOut1, () => {
            avatar.go(0,0,-11);
        })
        
        avatar.onCollide(jeonjuP, () => {
            avatar.spawn();
            des.show();
            x = 0;
            gangwonBasMap.show();
            jeonjuM1.hide();
            time = 0;
        })
        
        score.setText('모은 링의 개수 - Rings: ' + ali + '/5');

	})();
	
}
	
	