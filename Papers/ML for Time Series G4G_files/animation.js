var txtTm       = 0.5;
var lglTm       = 0.2;
var beamTm      = 1.35;
var bgTm        = 0.3;
var mgTm        = 0.75;
var noTm        = null;

// UPDATED MT PROVIDED BY JIVOX
function masterTimeline(){
    var masterTl    = gsap.timeline({});

    gsap.registerPlugin(ScrollToPlugin);
    gsap.set(['.magnetCon', '.magnet'],     {xPercent:-50, yPercent:-50});
    gsap.set(['.magnetCon'],                {scale:0.3});
    gsap.set(['.tail_magnet'],              {transformOrigin:'right center'});
    gsap.set(['.nose_magnet'],              {transformOrigin:'left center'});
    gsap.set(['#F1-1_magnetCon'],                   {x:'+=326', y:'+=19', scale:0.35});
    gsap.set(['#F1-2_magnetCon'],                   {x:'-=409', y:'+=19'});

    // Get Dynamic Global Background Source
    //const bannerBackground = "url(" + dynamicData['TMo_HINT_Cons_EL_Ph2'][0]['banner_bg-src'] + ")";

    var hasDynamicAssetData = true;

    if (typeof dynamicAssetData != "undefined") {
        if (!dynamicAssetData['Frame-One'] && !dynamicAssetData['Frame-Two'] && !dynamicAssetData['Frame-Three'] && !dynamicAssetData['End-Frame']) {
            hasDynamicAssetData = false;
        }
        if (!hasDynamicAssetData) {
            var F1 = dynamicAssetData['Frame-One'] ? dynamicAssetData['Frame-One'] : "F1-LOGO";
            var F2 = dynamicAssetData['Frame-Two'] ? dynamicAssetData['Frame-Two'] : "F2-DR-C";
            var F3 = dynamicAssetData['Frame-Three'] ? dynamicAssetData['Frame-Three'] : "F3-DR-C";
            var F4 = dynamicAssetData['End-Frame'] ? dynamicAssetData['End-Frame'] : "EF-DR-C";
            console.log(dynamicAssetData);
            console.log(F1, F2, F3, F4);
        } else {
            var F1 = dynamicAssetData['Frame-One'] ? dynamicAssetData['Frame-One'] : "";
            var F2 = dynamicAssetData['Frame-Two'] ? dynamicAssetData['Frame-Two'] : "";
            var F3 = dynamicAssetData['Frame-Three'] ? dynamicAssetData['Frame-Three'] : "";
            var F4 = dynamicAssetData['End-Frame'] ? dynamicAssetData['End-Frame'] : "";
            console.log(dynamicAssetData);
            console.log(F1, F2, F3, F4);
        }
    } else {
        var F1 = "F1-LOGO";
        var F2 = "F2-DR-C";
        var F3 = "F3-DR-C";
        var F4 = "EF-DR-C";
        console.log("Default")
    }
masterTl
    // Dynamic Global Background Image and Color
    //.set(['#viewport'], {backgroundImage: bannerBackground }) // Set banner background image
    // .set(['#viewport'], {backgroundColor: `${dynamicData['TMo_HINT_Cons_EL_Ph2'][0]['banner_color-input']}` }) // Set banner background color

    .add(frameSwitch(F1))
    .add(frameSwitch(F2))
    .add(frameSwitch(F3))
    .add(frameSwitch(F4))
}

function frameSwitch(frame){
    gsap.set([crtv.viewport, crtv.banner, crtv.border], {autoAlpha:1});

    var tl = gsap.timeline();
    switch(frame){
        case 'F1-LOGO': tl.add(frameOneVariantA()); break;
        case 'F1-C': tl.add(frameOneVariantB()); break;
        case 'F1-IMG': tl.add(frameOneVariantC()); break;
        case 'F1-STATIC': tl.add(frameOneVariantD()); break;
        // case 'F1-HOLIDAY22': tl.add(frameOneVariantH()); break; // HOLIDAZZLE 2022
        case 'F2-DL-C': tl.add(frameTwoVariantA()); break;
        case 'F2-DL-IMG': tl.add(frameTwoVariantB()); break;
        case 'F2-DL-IMG-C': tl.add(frameTwoVariantC()); break;
        case 'F2-DR-C': tl.add(frameTwoVariantD()); break;
        case 'F2-DR-IMG': tl.add(frameTwoVariantE()); break;
        case 'F2-DR-IMG-C': tl.add(frameTwoVariantF()); break;
        case 'F2-IMG': tl.add(frameTwoVariantG()); break;
        case 'F2-C': tl.add(frameTwoVariantH()); break;
        case 'F2-LS-C': tl.add(frameTwoVariantJ()); break;
        case 'F2-LS-IMG': tl.add(frameTwoVariantK()); break;
        case 'F2-LS-IMG-C': tl.add(frameTwoVariantL()); break;
        case 'F2-LS-TOP-C': tl.add(frameTwoVariantM()); break;
        case 'F2-LS-C-ALT': tl.add(frameTwoVariantN()); break;
        case 'F2-STATIC': tl.add(frameTwoVariantP()); break;
        case 'F3-DL-C': tl.add(frameThreeVariantA()); break;
        case 'F3-DL-IMG': tl.add(frameThreeVariantB()); break;
        case 'F3-DL-IMG-C': tl.add(frameThreeVariantC()); break;
        case 'F3-DR-C': tl.add(frameThreeVariantD()); break;
        case 'F3-DR-IMG': tl.add(frameThreeVariantE()); break;
        case 'F3-DR-IMG-C': tl.add(frameThreeVariantF()); break;
        case 'F3-IMG': tl.add(frameThreeVariantG()); break;
        case 'F3-C': tl.add(frameThreeVariantH()); break;
        case 'F3-LS-C': tl.add(frameThreeVariantJ()); break;
        case 'F3-LS-IMG': tl.add(frameThreeVariantK()); break;
        case 'F3-LS-IMG-C': tl.add(frameThreeVariantL()); break;
        case 'F3-LS-TOP-C': tl.add(frameThreeVariantM()); break;
        case 'F3-LS-C-ALT': tl.add(frameThreeVariantN()); break;
        case 'F3-STATIC': tl.add(frameThreeVariantP()); break;
        case 'EF-DL-C': tl.add(endFrameVariantA()); break;
        case 'EF-DL-IMG': tl.add(endFrameVariantB()); break;
        case 'EF-DL-IMG-C': tl.add(endFrameVariantC()); break;
        case 'EF-DR-C': tl.add(endFrameVariantD()); break;
        case 'EF-DR-IMG': tl.add(endFrameVariantE()); break;
        case 'EF-DR-IMG-C': tl.add(endFrameVariantF()); break;
        case 'EF-IMG': tl.add(endFrameVariantG()); break;
        case 'EF-C': tl.add(endFrameVariantH()); break;
        case 'EF-LS-C': tl.add(endFrameVariantJ()); break;
        case 'EF-LS-IMG': tl.add(endFrameVariantK()); break;
        case 'EF-LS-IMG-C': tl.add(endFrameVariantL()); break;
        case 'EF-STATIC': tl.add(endFrameVariantM()); break;
        default: null;
    }
    return tl;
}

//Frame One

// Includes magnet animation
// function frameOneVariantA(){
//     document.querySelector('#F1-1_image1-src_300x250').style.display = 'none';
//     document.querySelector('#F1-1_image2-src_300x250').style.display = 'none';
//     document.querySelector('#F1-bg').style.display = 'none';
//
//     var tl = gsap.timeline();
//     tl.set(['#F1-1_copy-input_300x250', '#F2-1_copy-input_300x250', '#F1-3_copy-input_300x250', '#F1-4_copy-input_300x250', '#F1-1_frameLegal-input_300x250','#F1-1_largerLegal-input_300x250'], {opacity: 0})
//         .set(['#F1', '#F1-1_magnetCon', '#F1-2_magnetCon'], {autoAlpha:1})
//         .from(['#F1-1_magnetCon'], {duration:1, x: -856, ease: setInterval.easeInOut}, 'mag')
//         .fromTo(['#F1-1_logo'], {opacity:0, x:-30}, {duration:0.5, opacity:1, x:0, ease:Sine.easeOut}, 'mag+=0.5')
//         .from(['#F1-2_magnetCon'], {duration:1, x: -856, ease: setInterval.easeOut}, 'mag+=0.1')
//         .to(['#F1-1_magnetCon'], {duration:mgTm, delay:2, x:1200, ease:Sine.easeIn}, 'magOut')
//         .to(['#F1-2_magnetCon'], {duration:mgTm, delay:2, x:455, ease:Sine.easeIn}, 'magOut')
//         .to(['#F1-1_logo'], {duration:0.2, opacity:0}, '-=0.45')
//     return tl;
// }

function frameOneVariantA(){
    document.querySelector('#F1-1_image1-src_300x250').style.display = 'none';
    document.querySelector('#F1-1_image2-src_300x250').style.display = 'none';
    document.querySelector('#F1-bg').style.display = 'none';

    var tl = gsap.timeline();
    tl.set(['#F1-1_copy-input_300x250', '#F2-1_copy-input_300x250', '#F1-3_copy-input_300x250', '#F1-4_copy-input_300x250', '#F1-1_frameLegal-input_300x250','#F1-1_largerLegal-input_300x250'], {opacity: 0})
        .set(['#F1'], {autoAlpha:1})
        .fromTo(['#F1-1_logo'], {opacity:0, x:-30}, {duration:0.5, opacity:1, x:0, ease:Sine.easeOut}, 'mag')
        .to(['#F1-1_logo'], {duration:0.2, opacity:0}, 'mag+=2.2')
        tl.set(['#F1', '#F1-1_logo'], {autoAlpha:0, delay:0.2});
    return tl;
}

function frameOneVariantB(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F1-1_image1-src_300x250').style.display = 'none';
    document.querySelector('#F1-1_image2-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F1-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F1-bound");
    theBound.style.padding = "51px 14px 63px 14px";
    let priceBox = document.getElementById("F1-priceBox");
    priceBox.style.order = "2";
    priceBox.style.marginTop = "4px";
    let largerLegalCopy = document.getElementById("F1-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";

    tl
        .set(['#F1-1_logo'], {opacity:0})
        .set(['.F1'], {autoAlpha:1})
        .set(['.magnetCon'], {opacity:0})
        .set(['.priceBox'], { y:40, opacity:0})
        .set(['#F1-1_copy-input_300x250', '#F1-2_copy-input_300x250', '#F1-3_copy-input_300x250', '#F1-4_copy-input_300x250'], {y:20, opacity: 0})
        .to(['#F1-1_copy-input_300x250', '#F1-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#F1-3_copy-input_300x250', '#F1-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['.priceBox'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F1-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F1-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F1'], {autoAlpha:0, delay:d})
    return tl;
}

function frameOneVariantC(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F1-1_image2-src_300x250').style.display = 'none';

    let largerLegalCopy = document.getElementById("F1-largerLegal");
    largerLegalCopy.style.bottom = "59px";
    largerLegalCopy.style.left = "0px";
    largerLegalCopy.style.width = "300px";
    largerLegalCopy.style.textAlign = "center";

    tl
        .set(['#F1-1_logo'], {opacity:0})
        .set(['.F1'], {autoAlpha:1})
        .set(['.magnetCon'], {opacity:0})
        .set(['.priceBox'], {opacity:0})
        .set(['#F1-1_copy-input_300x250', '#F2-1_copy-input_300x250', '#F1-3_copy-input_300x250', '#F1-4_copy-input_300x250'], {opacity: 0})
        .set(['#F1-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: 65,  opacity: 0})
        .to(['#F1-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F1-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F1-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F1'], {autoAlpha:0, delay:d})
    return tl;
}
function frameOneVariantD(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F1-1_image2-src_300x250').style.display = 'none';

    let largerLegalCopy = document.getElementById("F1-largerLegal");
    largerLegalCopy.style.bottom = "59px";
    largerLegalCopy.style.left = "0px";
    largerLegalCopy.style.width = "300px";
    largerLegalCopy.style.textAlign = "center";

    tl
        .set(['#F1-1_logo'], {opacity:0})
        .set(['.F1'], {autoAlpha:1})
        .set(['.magnetCon'], {opacity:0})
        .set(['.priceBox'], {opacity:0})
        .set(['#F1-1_copy-input_300x250', '#F1-2_copy-input_300x250', '#F1-3_copy-input_300x250', '#F1-4_copy-input_300x250'], {opacity: 0})
        .set(['#F1-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: 65,  opacity: 0})
        .to(['#F1-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F1-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F1-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F1'], {autoAlpha:0, delay:d})
    return tl;
}
// HOLIDAZZLE 22
// function frameOneVariantH(){
//     var d = 2.5;
//     var tl = gsap.timeline();
//
//     document.querySelector('#F1-box').style.display = 'none';
//
//     gsap.set(['.F1', '#holiday-snow'], {autoAlpha: 1, force3D: false, rotation: 0.01});
//     gsap.set(['#F1-1_logo'], {opacity:0});
//     gsap.set(['.magnetCon'], {opacity:0});
//     gsap.set(["#F1-1_copy-input_300x250","#F1-2_copy-input_300x250","#F1-3_copy-input_300x250", "#F1-4_copy-input_300x250"], { autoAlpha: 0 });
//     gsap.set(['#F1-1-holiday_image1, #F1-1-holiday_image2, #F1-holiday-1_image3, #F1-1-holiday_image4, #F1-1-holiday_image5, #F1-1-holiday_image6, #F1-1-holiday_image7, #F1-1-holiday_image8, #F1-1-holiday_image9, #F1-1-holiday_image10'], {autoAlpha: 1})
//     gsap.set(['#holiday-message1', '#holiday-message2'], {x:-300, autoAlpha: 1, opacity: 0})
//
//     tl
//         .set(['#F1-1-holiday_image1, #F1-1-holiday_image2, #F1-holiday-1_image3, #F1-1-holiday_image4, #F1-1-holiday_image5, #F1-1-holiday_image6, #F1-1-holiday_image7, #F1-1-holiday_image8, #F1-1-holiday_image9, #F1-1-holiday_image10'], {width: 300, height: 250, y: 0, x: 0, opacity: 0})
//         .to(['#holiday-message1'], {duration:0.4, x: 0, opacity:1, ease: 'Power2.easeOut'}, 'lockup')
//         .to(['#holiday-message2'], {duration:0.4, x:0, opacity:1, ease: 'Power2.easeOut'}, '=0.2')
//         .to(['#F1-1-holiday_image1'], {duration: 0.2, opacity:1, ease: 'Power3.easeOut', delay: 1.5}, '=0.1')
//         .to(['#F1-1-holiday_image1'], {duration: 0, opacity:0, }, '=0.1')
//         .to(['#F1-1-holiday_image2'], {duration: 0.2, opacity:1, ease: 'Power3.easeOut'}, '-=0.1')
//         .to(['#F1-1-holiday_image2'], {duration: 0, opacity:0, }, '=0.1')
//         .to(['#F1-1-holiday_image3'], {duration: 0.2, opacity:1, ease: 'Power3.easeOut'}, '-=0.1')
//         .to(['#F1-1-holiday_image3'], {duration: 0, opacity:0, }, '=0.1')
//         .to(['#F1-1-holiday_image4'], {duration: 0.2, opacity:1, ease: 'Power3.easeOut'}, '-=0.1')
//         .to(['#F1-1-holiday_image4'], {duration: 0, opacity:0, }, '=0.1')
//         .to(['#F1-1-holiday_image5'], {duration: 0.2, opacity:1, ease: 'Power3.easeOut'}, '-=0.1')
//         .to(['#F1-1-holiday_image5'], {duration: 0, opacity:0, }, '=0.1')
//         .to(['#F1-1-holiday_image6'], {duration: 0.2, opacity:1, ease: 'Power3.easeOut'}, '-=0.1')
//         .to(['#F1-1-holiday_image6'], {duration: 0, opacity:0, }, '=0.1')
//         .to(['#F1-1-holiday_image7'], {duration: 0.2, opacity:1, ease: 'Power3.easeOut'}, '-=0.1')
//         .to(['#F1-1-holiday_image7'], {duration: 0, opacity:0, }, '=0.1')
//         .to(['#F1-1-holiday_image8'], {duration: 0.2, opacity:1, ease: 'Power3.easeOut'}, '-=0.1')
//         .to(['#F1-1-holiday_image8'], {duration: 0, opacity:0, }, '=0.1')
//         .to(['#F1-1-holiday_image9'], {duration: 0.2, opacity:1, ease: 'Power3.easeOut'}, '-=0.1')
//         .to(['#F1-1-holiday_image9'], {duration: 0, opacity:0, }, '=0.1')
//         .to(['#F1-1-holiday_image10'], {duration: 0.2, opacity:1, ease: 'Power3.easeOut'}, '-=0.1')
//         .to(['#F1-1-holiday_image10'], {duration: 0, opacity:0, }, '=0.1')
//         .to(['#holiday-message1', '#holiday-message2'], {duration:0.4, opacity:0, ease: 'Power3.easeOut'}, '-=0.7')
//         .to(['#holiday-logo'], {duration:0.8, autoAlpha: 1, ease: 'Power3.easeOut'}, '-=0.4')
//         .set(['.F1', '#holiday-logo', '#holiday-snow'], {autoAlpha: 0, ease: 'Power3.easeOut', delay:0.5})
//     return tl;
// }
//Frame Two
function frameTwoVariantA(){
    var d = 2.5;
    var tl = gsap.timeline();
    document.querySelector('#F2-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.height = "137px";
    theBox.style.width = "148px";
    theBox.style.position = "absolute";
    theBox.style.top = "51px";
    theBox.style.left = "139px";
    theBox.style.padding = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.width = "148px";
    theBound.style.height = "137px";
    let priceBox = document.getElementById("F2-priceBox");
    priceBox.style.order = "2";
    priceBox.style.marginTop = "4px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";

    tl
        .set(['.F2', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0, x: 0, y: 20})
        .set(['#F2-1_largerLegal-input_300x250'], {x: 0 })
        .set(['#F2-1_copy-input_300x250'], {y:20, opacity: 0 })
        .set(['#F2-2_copy-input_300x250'], {y:20, opacity: 0 })
        .set(['#F2-3_copy-input_300x250'], {y:20, opacity: 0 })
        .set(['#F2-4_copy-input_300x250'], {y:20, opacity: 0 })
        .set(['#F2-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:-32, opacity: 0})
        .to(['#F2-1_image2-src_300x250'], {duration: txtTm, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['.priceBox'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantB(){
    var d = 2.5;
    var tl = gsap.timeline();

    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.padding = "18px 0 0";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.left = "146px";
    largerLegalCopy.style.top = "159px";

    tl
        .set(['.F2', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#F2-copy'], {opacity: 0})
        .set(['#F2-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:-32, opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {x: 74, opacity: 0})
        .to(['#F2-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantC(){
    var d = 2.5;
    var tl = gsap.timeline();
    
    document.querySelector('#F2-priceBox').style.display = 'none';

    let theBound = document.getElementById("F2-bound");
    theBound.style.minHeight = "19px";
    theBound.style.maxHeight = "78px";
    theBound.style.padding = "0px 12px 0px 139px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.padding = "20px 0 0";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.bottom = "unset";

    tl
        .set(['.F2', '.metro_logo'], {autoAlpha:1})
        .set(['#F2-1_copy-input_300x250','#F2-2_copy-input_300x250'], {x: 0, y: 58, opacity: 0})
        .set(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {x: 0, y: 68, opacity: 0})
        .set(['#F2-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:-32, opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:57, opacity: 0})
        .to(['#F2-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250'], {duration: txtTm, y:18, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {duration: txtTm, y:18, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantD(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "center";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "51px 138px 63px 14px";
    let priceBox = document.getElementById("F2-priceBox");
    priceBox.style.order = "2";
    priceBox.style.marginTop = "4px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";

    tl
        .set(['.F2', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0, y:49})
        .set(['#F2-1_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F2-2_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F2-3_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F2-4_copy-input_300x250'], {y:20,opacity: 0})
        .set(['#F2-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:189, opacity: 0})
        .to(['#F2-1_image2-src_300x250'], {duration: txtTm, x:159, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['.priceBox'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
       .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantE(){
    var d = 2.5;
    var tl = gsap.timeline();

    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.padding = "unset";
    largerLegalCopy.style.textAlign = "center";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.left = "14px";
    largerLegalCopy.style.top = "176px";
    largerLegalCopy.style.width = "146px";

    tl
        .set(['.F2', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#F2-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:189, opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:-20, opacity: 0})
        .to(['#F2-1_image2-src_300x250'], {duration: 0.8, x:159, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantF(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBound = document.getElementById("F2-bound");
    theBound.style.minHeight = "19px";
    theBound.style.maxHeight = "74px";
    theBound.style.padding = "5px 137px 0px 12px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.padding = "18px 0 0 0";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.bottom = "unset";

    tl
        .set(['.F2', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#F2-1_copy-input_300x250','#F2-2_copy-input_300x250'], {x: 0, y: 58, opacity: 0})
        .set(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {x: 0, y: 68, opacity: 0})
        .set(['#F2-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:189, opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:-33, opacity: 0})
        .to(['#F2-1_image2-src_300x250'], {duration: 0.8, x:159, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250'], {duration: txtTm, y:18, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {duration: txtTm, y:18, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantG(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-1_image2-src_300x250').style.display = 'none';
    document.querySelector('#F2-bound').style.padding = '0';

    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.bottom = "59px";
    largerLegalCopy.style.left = "0px";
    largerLegalCopy.style.width = "300px";
    largerLegalCopy.style.textAlign = "center";

    tl
        .set(['.F2', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250', '#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: 65,  opacity: 0})
        .to(['#F2-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantH(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "51px 14px 63px 14px";
    let theCopy = document.getElementById("F2-copy");
    let priceBox = document.getElementById("F2-priceBox");
    priceBox.style.order = "2";
    priceBox.style.marginTop = "4px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";

    if (centerAlignment('F2') === true) {
        theBox.style.padding = "unset";
        theBox.style.justifyContent = "unset";
        theBox.style.width = "unset";
        theBound.style.width = "100%";
        largerLegalCopy.style.position = "relative";
        largerLegalCopy.style.width = "100%";
        theCopy.style.width = "100%";
        priceBox.style.justifyContent = "center";
    }

    tl
        .set(['.F2' ,'.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], { y:40, opacity:0})
        .set(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {y:20, opacity: 0})
        .to(['#F2-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#F2-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to(['#F2-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to(['.priceBox'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
// Lifestyle Frames J-M
function frameTwoVariantJ(){
    var d = 2.5;
    var tl = gsap.timeline();
    document.querySelector('#F2-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.width = "150px";
    theBound.style.padding = "50px 0px 64px 12px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.order = "3";
    let priceBox = document.getElementById("F2-priceBox");
    priceBox.style.position = "relative";
    priceBox.style.order = "2";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.width = "150px";
    legal.style.padding = "0px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';

    tl
        .set(['.F2' ,'.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {y:20, opacity:0})
        .set(['#F2-1_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F2-2_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F2-3_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F2-4_copy-input_300x250'], {y:20,opacity: 0})
        .to(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['.priceBox'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantK(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-copy').style.display = 'none';
    document.querySelector('#F2-priceBox').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.width = "150px";
    theBound.style.padding = "166px 0px 64px 14px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.order = "3";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.width = "150px";
    legal.style.padding = "0px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';

    tl
        .set(['.F2', '.metro_logo'], {autoAlpha:1})
        .set(['#F2-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-10, opacity: 0})
        .to(['#F2-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantL(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-priceBox').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.width = "150px";
    theBound.style.padding = "116px 0px 64px 12px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.order = "3";
    let priceBox = document.getElementById("F2-priceBox");
    priceBox.style.position = "relative";
    priceBox.style.order = "2";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.width = "150px";
    legal.style.padding = "0px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';

    tl
        .set(['.F2', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {y:20, opacity:0})
        .set(['#F2-1_copy-input_300x250','#F2-2_copy-input_300x250'], {y:20, x: 0, opacity: 0})
        .set(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {y:20, x: 0, opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-21, opacity: 0})
        .to(['#F2-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantM(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "135px 8px 0px 12px";
    let priceBox = document.getElementById("F2-priceBox");
    priceBox.style.position = "absolute";
    priceBox.style.top = "138px";
    priceBox.style.left = "12px";
    priceBox.style.order = "3";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.position = "absolute";
    largerLegalCopy.style.left = "180px";
    largerLegalCopy.style.top = "175px";
    largerLegalCopy.style.order = "2";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.padding = "0px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';

    // document.getElementById('F2-priceBox').style.display = 'none';
    if (priceBoxVisible('F2') === true) {
        largerLegalCopy.style.top = "unset";
        largerLegalCopy.style.left = "unset";
        largerLegalCopy.style.bottom = "unset";
    }

    tl
        .set(['.F2'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0, x: 163})
        .set(['#F2-1_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#F2-2_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#F2-3_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#F2-4_copy-input_300x250'], {y: 20, opacity:0})
        .to(['#F2-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#F2-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '<')
        .to(['#F2-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '<')
        .to(['.priceBox'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
// Alt Frame M 300x250 Only
function frameTwoVariantN(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "7px 8px 4px 12px";
    let priceBox = document.getElementById("F2-priceBox");
    priceBox.style.position = "absolute";
    priceBox.style.top = "7px";
    priceBox.style.left = "12px";
    priceBox.style.order = "3";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.position = "absolute";
    largerLegalCopy.style.left = "180px";
    largerLegalCopy.style.top = "44px";
    largerLegalCopy.style.order = "2";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.backgroundColor = "#46196e";
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';

    // document.getElementById('F2-priceBox').style.display = 'none';
    if (priceBoxVisible('F2') === true) {
        largerLegalCopy.style.top = "unset";
        largerLegalCopy.style.left = "unset";
        largerLegalCopy.style.bottom = "unset";
    }

    // document.getElementById('F2-1_frameLegal-input_300x250').style.display = 'none';
    if (legalVisible('F2') === true) {
        legal.style.backgroundColor = "unset";
    }

    tl
        .set(['.F2'], {autoAlpha:1})
        .set([legal], {opacity:0})
        .set(['.priceBox'], {opacity:0, y:94, x: 163})
        .set(['#F2-1_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#F2-2_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#F2-3_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#F2-4_copy-input_300x250'], {y: 20, opacity:0})
        .to(['#F2-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#F2-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '<')
        .to(['#F2-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F2-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '<')
        .to(['.priceBox'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantP(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-1_image2-src_300x250').style.display = 'none';
    document.querySelector('#F2-bound').style.padding = '0';

    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.bottom = "59px";
    largerLegalCopy.style.left = "0px";
    largerLegalCopy.style.width = "300px";
    largerLegalCopy.style.textAlign = "center";

    tl
        .set(['.F2'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#F2-1_copy-input_300x250', '#F2-2_copy-input_300x250', '#F2-3_copy-input_300x250', '#F2-4_copy-input_300x250'], {opacity: 0})
        .set(['#F2-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: 65,  opacity: 0})
        .to(['#F2-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F2'], {autoAlpha:0, delay:d})
    return tl;
}
//Frame Three
function frameThreeVariantA(){
    var d = 2.5;
    var tl = gsap.timeline();
    document.querySelector('#F3-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.height = "137px";
    theBox.style.width = "148px";
    theBox.style.position = "absolute";
    theBox.style.top = "51px";
    theBox.style.left = "139px";
    theBox.style.padding = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.width = "148px";
    theBound.style.height = "137px";
    let priceBox = document.getElementById("F3-priceBox");
    priceBox.style.order = "2";
    priceBox.style.marginTop = "4px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";

    tl
        .set(['.F3', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0, x: 0, y: 20})
        .set(['#F3-1_largerLegal-input_300x250'], {x: 0 })
        .set(['#F3-1_copy-input_300x250'], {y:20, opacity: 0 })
        .set(['#F3-2_copy-input_300x250'], {y:20, opacity: 0 })
        .set(['#F3-3_copy-input_300x250'], {y:20, opacity: 0 })
        .set(['#F3-4_copy-input_300x250'], {y:20, opacity: 0 })
        .set(['#F3-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:-32, opacity: 0})
        .to(['#F3-1_image2-src_300x250'], {duration: txtTm, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['.priceBox'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantB(){
    var d = 2.5;
    var tl = gsap.timeline();

    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.padding = "18px 0 0";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.left = "146px";
    largerLegalCopy.style.top = "159px";

    tl
        .set(['.F3', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#F3-copy'], {opacity: 0})
        .set(['#F3-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:-32, opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {x: 74, opacity: 0})
        .to(['#F3-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantC(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-priceBox').style.display = 'none';

    let theBound = document.getElementById("F3-bound");
    theBound.style.minHeight = "19px";
    theBound.style.maxHeight = "78px";
    theBound.style.padding = "0px 12px 0px 139px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.padding = "20px 0 0";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.bottom = "unset";

    tl
        .set(['.F3', '.metro_logo'], {autoAlpha:1})
        .set(['#F3-1_copy-input_300x250','#F3-2_copy-input_300x250'], {x: 0, y: 58, opacity: 0})
        .set(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {x: 0, y: 68, opacity: 0})
        .set(['#F3-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:-32, opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:57, opacity: 0})
        .to(['#F3-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250'], {duration: txtTm, y:18, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {duration: txtTm, y:18, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantD(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "center";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "51px 138px 63px 14px";
    let priceBox = document.getElementById("F3-priceBox");
    priceBox.style.order = "2";
    priceBox.style.marginTop = "4px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";

    tl
        .set(['.F3', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0, y:49})
        .set(['#F3-1_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F3-2_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F3-3_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F3-4_copy-input_300x250'], {y:20,opacity: 0})
        .set(['#F3-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:189, opacity: 0})
        .to(['#F3-1_image2-src_300x250'], {duration: txtTm, x:159, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['.priceBox'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantE(){
    var d = 2.5;
    var tl = gsap.timeline();

    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.padding = "unset";
    largerLegalCopy.style.textAlign = "center";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.left = "14px";
    largerLegalCopy.style.top = "176px";
    largerLegalCopy.style.width = "146px";

    tl
        .set(['.F3', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#F3-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:189, opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:-20, opacity: 0})
        .to(['#F3-1_image2-src_300x250'], {duration: 0.8, x:159, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantF(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBound = document.getElementById("F3-bound");
    theBound.style.minHeight = "19px";
    theBound.style.maxHeight = "74px";
    theBound.style.padding = "5px 137px 0px 12px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.padding = "18px 0 0 0";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.bottom = "unset";

    tl
        .set(['.F3', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#F3-1_copy-input_300x250','#F3-2_copy-input_300x250'], {x: 0, y: 58, opacity: 0})
        .set(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {x: 0, y: 68, opacity: 0})
        .set(['#F3-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:189, opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:-33, opacity: 0})
        .to(['#F3-1_image2-src_300x250'], {duration: 0.8, x:159, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250'], {duration: txtTm, y:18, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {duration: txtTm, y:18, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantG(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-1_image2-src_300x250').style.display = 'none';
    document.querySelector('#F3-bound').style.padding = '0';

    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.bottom = "59px";
    largerLegalCopy.style.left = "0px";
    largerLegalCopy.style.width = "300px";
    largerLegalCopy.style.textAlign = "center";

    tl
        .set(['.F3', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250', '#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: 65,  opacity: 0})
        .to(['#F3-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantH(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "51px 14px 63px 14px";
    let theCopy = document.getElementById("F2-copy");
    let priceBox = document.getElementById("F3-priceBox");
    priceBox.style.order = "2";
    priceBox.style.marginTop = "4px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";

    if (centerAlignment('F3') === true) {
        theBox.style.padding = "unset";
        theBox.style.justifyContent = "unset";
        theBox.style.width = "unset";
        theBound.style.width = "100%";
        largerLegalCopy.style.position = "relative";
        largerLegalCopy.style.width = "100%";
        theCopy.style.width = "100%";
        priceBox.style.justifyContent = "center";
    }

    tl
        .set(['.F3' ,'.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], { y:40, opacity:0})
        .set(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {y:20, opacity: 0})
        .to(['#F3-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#F3-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to(['#F3-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to(['.priceBox'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
// Lifestyle Frames J-M
function frameThreeVariantJ(){
    var d = 2.5;
    var tl = gsap.timeline();
    document.querySelector('#F3-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.width = "150px";
    theBound.style.padding = "50px 0px 64px 12px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.order = "3";
    let priceBox = document.getElementById("F3-priceBox");
    priceBox.style.position = "relative";
    priceBox.style.order = "2";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.width = "150px";
    legal.style.padding = "0px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';

    tl
        .set(['.F3' ,'.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {y:20, opacity:0})
        .set(['#F3-1_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F3-2_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F3-3_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#F3-4_copy-input_300x250'], {y:20,opacity: 0})
        .to(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['.priceBox'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantK(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-copy').style.display = 'none';
    document.querySelector('#F3-priceBox').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.width = "150px";
    theBound.style.padding = "166px 0px 64px 14px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.order = "3";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.width = "150px";
    legal.style.padding = "0px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';

    tl
        .set(['.F3', '.metro_logo'], {autoAlpha:1})
        .set(['#F3-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-10, opacity: 0})
        .to(['#F3-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantL(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-priceBox').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.width = "150px";
    theBound.style.padding = "116px 0px 64px 12px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.order = "3";
    let priceBox = document.getElementById("F3-priceBox");
    priceBox.style.position = "relative";
    priceBox.style.order = "2";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.width = "150px";
    legal.style.padding = "0px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';

    tl
        .set(['.F3', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {y:20, opacity:0})
        .set(['#F3-1_copy-input_300x250','#F3-2_copy-input_300x250'], {y:20, x: 0, opacity: 0})
        .set(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {y:20, x: 0, opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {width: 300, height: 250, y: 0, x:-21, opacity: 0})
        .to(['#F3-1_image1-src_300x250'], {duration: txtTm, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantM(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "135px 8px 0px 12px";
    let priceBox = document.getElementById("F3-priceBox");
    priceBox.style.position = "absolute";
    priceBox.style.top = "138px";
    priceBox.style.left = "12px";
    priceBox.style.order = "3";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.position = "absolute";
    largerLegalCopy.style.left = "180px";
    largerLegalCopy.style.top = "175px";
    largerLegalCopy.style.order = "2";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.padding = "0px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';

    // document.getElementById('F3-priceBox').style.display = 'none';
    if (priceBoxVisible('F3') === true) {
        largerLegalCopy.style.top = "unset";
        largerLegalCopy.style.left = "unset";
        largerLegalCopy.style.bottom = "unset";
    }

    tl
        .set(['.F3'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0, x: 163})
        .set(['#F3-1_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#F3-2_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#F3-3_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#F3-4_copy-input_300x250'], {y: 20, opacity:0})
        .to(['#F3-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#F3-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '<')
        .to(['#F3-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '<')
        .to(['.priceBox'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
// Alt Frame M 300x250 Only
function frameThreeVariantN(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "7px 8px 4px 12px";
    let priceBox = document.getElementById("F3-priceBox");
    priceBox.style.position = "absolute";
    priceBox.style.top = "7px";
    priceBox.style.left = "12px";
    priceBox.style.order = "3";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.position = "absolute";
    largerLegalCopy.style.left = "180px";
    largerLegalCopy.style.top = "44px";
    largerLegalCopy.style.order = "2";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.backgroundColor = "#46196e";
    legal.style.padding = "6px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';

    // document.getElementById('F3-priceBox').style.display = 'none';
    if (priceBoxVisible('F3') === true) {
        largerLegalCopy.style.top = "unset";
        largerLegalCopy.style.left = "unset";
        largerLegalCopy.style.bottom = "unset";
    }

    // document.getElementById('F2-1_frameLegal-input_300x250').style.display = 'none';
    if (legalVisible('F3') === true) {
        legal.style.backgroundColor = "unset";
    }

    tl
        .set(['.F3'], {autoAlpha:1})
        .set([legal], {opacity:0})
        .set(['.priceBox'], {opacity:0, y:94, x: 163})
        .set(['#F3-1_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#F3-2_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#F3-3_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#F3-4_copy-input_300x250'], {y: 20, opacity:0})
        .to(['#F3-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#F3-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '<')
        .to(['#F3-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#F3-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '<')
        .to(['.priceBox'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3', '.metro_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantP(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-1_image2-src_300x250').style.display = 'none';
    document.querySelector('#F3-bound').style.padding = '0';

    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.bottom = "59px";
    largerLegalCopy.style.left = "0px";
    largerLegalCopy.style.width = "300px";
    largerLegalCopy.style.textAlign = "center";

    tl
        .set(['.F3'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#F3-1_copy-input_300x250', '#F3-2_copy-input_300x250', '#F3-3_copy-input_300x250', '#F3-4_copy-input_300x250'], {opacity: 0})
        .set(['#F3-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: 65,  opacity: 0})
        .to(['#F3-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .set(['.F3'], {autoAlpha:0, delay:d})
    return tl;
}
//End Frame
function endFrameVariantA(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});
    document.querySelector('#EF-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.minHeight = "69px";
    theBox.style.maxHeight = "165px";
    theBox.style.alignItems = "flex-start";
    theBox.style.justifyContent = "flex-start";
    theBox.style.width = "148px";
    theBox.style.position = "relative";
    theBox.style.padding = "45px 0 0 141px";
    let theBound = document.getElementById("EF-bound");
    theBound.style.alignItems = "flex-start";
    theBound.style.justifyContent = "flex-start";
    theBound.style.minHeight = "69px";
    theBound.style.maxHeight = "165px";
    theBound.style.width = "148px";
    theBound.style.padding = "0 0 0 0";
    let largerLegalCopy = document.getElementById("EF-largerLegal");
    largerLegalCopy.style.padding = "18px 0 0";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.order = "3";
    let ctaHeight = "19px";
    let ctaBound = document.getElementById("CTA_copyCon");
    ctaBound.style.height = ctaHeight;
    ctaBound.style.zIndex = '1';
    ctaBound.style.position = "relative";
    ctaBound.style.marginBottom = "8px";
    ctaBound.style.marginTop = "5px";
    let ctaInner = document.getElementById('CTA-bound');
    ctaInner.style.height = ctaHeight;
    ctaInner.style.padding = "0px 8px 0 10px";
    let ctaMagnet = document.getElementById('CTA_nose_magnet');
    ctaMagnet.style.height = ctaHeight;
    let priceBox = document.getElementById("EF-priceBox");
    priceBox.style.order = "2";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity: 0, y: 30 })
        .set(['#EF-1_copy-input_300x250','#EF-2_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#EF-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:-32, opacity: 0})
        .set(['#CTA_copyCon'], {y: 0, x:0})
        .to(['#EF-1_image2-src_300x250'], {duration: txtTm, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to(['#EF-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to(['.priceBox'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantB(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    let largerLegalCopy = document.getElementById("EF-largerLegal");
    largerLegalCopy.style.padding = "0";
    largerLegalCopy.style.position = "absolute";
    largerLegalCopy.style.width = "143px";
    largerLegalCopy.style.top = "156px";
    largerLegalCopy.style.right = "12px";
    largerLegalCopy.style.textAlign = "center";
    let ctaHeight = "19px";
    let ctaBound = document.getElementById("CTA_copyCon");
    ctaBound.style.height = ctaHeight;
    ctaBound.style.zIndex = '1';
    ctaBound.style.position = "relative";
    ctaBound.style.bottom = "22px";
    let ctaInner = document.getElementById('CTA-bound');
    ctaInner.style.height = ctaHeight;
    ctaInner.style.padding = "0px 8px 0 10px";
    let ctaMagnet = document.getElementById('CTA_nose_magnet');
    ctaMagnet.style.height = ctaHeight;

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#EF-1_copy-input_300x250', '#EF-2_copy-input_300x250', '#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {opacity: 0})
        .set(['#EF-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:-32, opacity: 0})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:10, opacity: 0})
        .set(['#CTA_copyCon'], {x:141})
        .to(['#EF-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantC(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.getElementById('EF-priceBox').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.minHeight = "19px";
    theBox.style.maxHeight = "94px";
    theBox.style.width = "160px";
    theBox.style.padding = "98px 12px 0px 128px";
    theBox.style.alignItems = "flex-start";
    theBox.style.justifyContent = "flex-start";
    let theBound = document.getElementById("EF-bound");
    theBound.style.alignItems = "flex-start";
    theBound.style.justifyContent = "flex-start";
    theBound.style.minHeight = "19px";
    theBound.style.maxHeight = "94px";
    theBound.style.padding = "0 0 0 11px";
    let largerLegalCopy = document.getElementById("EF-largerLegal");
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.bottom = "3px";
    let ctaHeight = "19px";
    let ctaBound = document.getElementById("CTA_copyCon");
    ctaBound.style.height = ctaHeight;
    ctaBound.style.zIndex = '1';
    ctaBound.style.position = "relative";
    ctaBound.style.top = "3px";
    let ctaInner = document.getElementById('CTA-bound');
    ctaInner.style.height = ctaHeight;
    ctaInner.style.padding = "0px 8px 0 10px";
    let ctaMagnet = document.getElementById('CTA_nose_magnet');
    ctaMagnet.style.height = ctaHeight;

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#EF-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:-32, opacity: 0})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:12, opacity: 0})
        .set(['#EF-1_copy-input_300x250', '#EF-2_copy-input_300x250', '#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {y: 27, opacity: 0})
        .set(['#CTA_copyCon'], {x:12})
        .to(['#EF-1_image2-src_300x250'], {duration: 0.8, x:-12, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-2_copy-input_300x250'], {duration: txtTm, y:-2, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to(['#EF-3_copy-input_300x250'], {duration: txtTm, y:-4, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-4_copy-input_300x250'], {duration: txtTm, y:-7, opacity:1, ease: 'Power2.easeOut'}, '<')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}
function endFrameVariantD(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});
    document.querySelector('#EF-1_image1-src_300x250').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.minHeight = "95px";
    theBox.style.maxHeight = "165px";
    theBox.style.alignItems = "flex-start";
    theBox.style.justifyContent = "center";
    theBox.style.width = "148px";
    theBox.style.position = "relative";
    theBox.style.padding = "47px 0 0 12px";
    let theBound = document.getElementById("EF-bound");
    theBound.style.alignItems = "flex-start";
    theBound.style.justifyContent = "flex-start";
    theBound.style.minHeight = "95px";
    theBound.style.maxHeight = "165px";
    theBound.style.width = "148px";
    theBound.style.padding = "0 0 0 0";
    let largerLegalCopy = document.getElementById("EF-largerLegal");
    largerLegalCopy.style.padding = "18px 0 0";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.bottom = "4px";
    largerLegalCopy.style.order = "3";
    let ctaHeight = "19px";
    let ctaBound = document.getElementById("CTA_copyCon");
    ctaBound.style.height = ctaHeight;
    ctaBound.style.zIndex = '1';
    ctaBound.style.position = "relative";
    ctaBound.style.top = "3px";
    let ctaInner = document.getElementById('CTA-bound');
    ctaInner.style.height = ctaHeight;
    ctaInner.style.padding = "0px 8px 0 10px";
    let ctaMagnet = document.getElementById('CTA_nose_magnet');
    ctaMagnet.style.height = ctaHeight;
    let priceBox = document.getElementById("EF-priceBox");
    priceBox.style.order = "2";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0, y:40})
        .set(['#EF-1_copy-input_300x250','#EF-2_copy-input_300x250'], {y: 20, opacity: 0})
        .set(['#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {y: 20, opacity: 0})
        .set(['#EF-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:189, opacity: 0})
        .set(['#EF-1_largerLegal-input_300x250'], {y:0})
        .set(['#CTA_copyCon'], {y: 0, x: 0})
        .to(['#EF-1_image2-src_300x250'], {duration: txtTm, x:159, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to(['#EF-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to(['.priceBox'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantE(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    let largerLegalCopy = document.getElementById("EF-largerLegal");
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.left = "14px";
    largerLegalCopy.style.bottom = "5px";
    let ctaHeight = "19px";
    let ctaBound = document.getElementById("CTA_copyCon");
    ctaBound.style.height = ctaHeight;
    ctaBound.style.zIndex = '1';
    ctaBound.style.position = "relative";
    ctaBound.style.top = "0px";
    let ctaInner = document.getElementById('CTA-bound');
    ctaInner.style.height = ctaHeight;
    ctaInner.style.padding = "0px 8px 0 10px";
    let ctaMagnet = document.getElementById('CTA_nose_magnet');
    ctaMagnet.style.height = ctaHeight;

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#EF-1_copy-input_300x250', '#EF-2_copy-input_300x250', '#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {opacity: 0})
        .set(['#EF-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:189, opacity: 0})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:-12, opacity: 0})
        .set(['#CTA_copyCon'], {y:-32, x:15})
        .to(['#EF-1_image2-src_300x250'], {duration: 0.8, x:159, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantF(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.getElementById('EF-priceBox').style.display = 'none';
    document.getElementById('EF-frameLegal').style.padding = '0 8px 3px';

    let theBox = document.getElementById("EF-box");
    theBox.style.minHeight = "30px";
    theBox.style.maxHeight = "94px";
    theBox.style.width = "146px";
    theBox.style.alignItems = "flex-start";
    theBox.style.justifyContent = "flex-start";
    theBox.style.padding = "106px 13px 0px 13px";
    let theBound = document.getElementById("EF-bound");
    theBound.style.minHeight = "30px";
    theBound.style.maxHeight = "94px";
    theBound.style.padding = "0";
    theBound.style.alignItems = "flex-start";
    theBound.style.justifyContent = "flex-start";
    let largerLegalCopy = document.getElementById("EF-largerLegal");
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.top = "0px";
    largerLegalCopy.style.left = "1px";
    let ctaHeight = "19px";
    let ctaBound = document.getElementById("CTA_copyCon");
    ctaBound.style.height = ctaHeight;
    ctaBound.style.zIndex = '1';
    ctaBound.style.position = "relative";
    ctaBound.style.top = "13px";
    ctaBound.style.left = "1px";
    let ctaInner = document.getElementById('CTA-bound');
    ctaInner.style.height = ctaHeight;
    ctaInner.style.padding = "0px 8px 0 10px";
    let ctaMagnet = document.getElementById('CTA_nose_magnet');
    ctaMagnet.style.height = ctaHeight;

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0})
        .set(['#EF-1_image2-src_300x250'], {width: 153, height: 164, y: 43, x:189, opacity: 0})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:-12, opacity: 0})
        .set(['#EF-1_copy-input_300x250', '#EF-2_copy-input_300x250', '#EF-3_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .set(['#CTA_copyCon'], {x:0})
        .to(['#EF-1_image2-src_300x250'], {duration: 0.8, x:159, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to(['#EF-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantG(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.getElementById('EF-frameLegal').style.padding = '0 8px 3px';
    document.querySelector('#EF-1_image2-src_300x250').style.display = 'none';

    let largerLegalCopy = document.getElementById("EF-largerLegal");
    largerLegalCopy.style.position = "absolute";
    largerLegalCopy.style.bottom = "70px";
    largerLegalCopy.style.left = "0px";
    largerLegalCopy.style.width = "300px";
    largerLegalCopy.style.textAlign = "center";
    let ctaBound = document.getElementById("CTA_copyCon");
    ctaBound.style.position = "absolute";
    ctaBound.style.width = "300px";
    ctaBound.style.top = "188px";
    ctaBound.style.left = "0px";
    ctaBound.style.justifyContent = "center";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF' ,'.metro_logo'], {autoAlpha:1})
        .set(['.priceBox', '#EF-1_copy-input_300x250', '#EF-2_copy-input_300x250', '#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {opacity:0})
        .set(['#CTA_copyCon'], {opacity:0})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: 65,  opacity: 0})
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}

function endFrameVariantH(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-1_image1-src_300x250').style.display = 'none';
    document.querySelector('#EF-1_image2-src_300x250').style.display = 'none';
    document.getElementById('EF-frameLegal').style.padding = '0 14px 3px';

    let theBox = document.getElementById("EF-box");
    theBox.style.minHeight = "30px";
    theBox.style.maxHeight = "94px";
    theBox.style.width = "146px";
    theBox.style.alignItems = "flex-start";
    theBox.style.justifyContent = "flex-start";
    theBox.style.padding = "67px 13px 0px 13px";
    let theBound = document.getElementById("EF-bound");
    theBound.style.minHeight = "30px";
    theBound.style.maxHeight = "94px";
    theBound.style.padding = "0";
    theBound.style.alignItems = "flex-start";
    theBound.style.justifyContent = "flex-start";
    let theCopy = document.getElementById("EF-copy");
    let largerLegalCopy = document.getElementById("EF-largerLegal");
    largerLegalCopy.style.position = "absolute";
    largerLegalCopy.style.bottom = "98px";
    largerLegalCopy.style.right = "16px";
    let ctaHeight = "19px";
    let ctaBound = document.getElementById("CTA_copyCon");
    ctaBound.style.height = ctaHeight;
    ctaBound.style.zIndex = '1';
    ctaBound.style.position = "absolute";
    ctaBound.style.bottom = "66px";
    ctaBound.style.left = "14px";
    let ctaInner = document.getElementById('CTA-bound');
    ctaInner.style.height = ctaHeight;
    ctaInner.style.padding = "0px 8px 0 10px";
    let ctaMagnet = document.getElementById('CTA_nose_magnet');
    ctaMagnet.style.height = ctaHeight;
    let priceBox = document.getElementById("EF-priceBox");
    priceBox.style.position = "absolute";
    priceBox.style.top = "35px";
    priceBox.style.left = "12px";
    priceBox.style.order = "3";

    document.getElementById('EF-priceBox').style.display = 'none';
    if (priceBoxVisible('EF') === true) {
        ctaBound.style.bottom = "54px";
        largerLegalCopy.style.left = "1px";

        if (centerAlignment('EF') === true) {
            theBox.style.padding = "unset";
            theBox.style.justifyContent = "unset";
            theBox.style.width = "unset";
            theBound.style.width = "100%";
            theBound.style.padding = "68px 16px 73px 14px";
            largerLegalCopy.style.position = "relative";
            largerLegalCopy.style.width = "100%";
            theCopy.style.width = "100%";
            ctaBound.style.width = "300px";
            ctaBound.style.top = "185px";
            ctaBound.style.left = "0px";
            ctaBound.style.justifyContent = "center";
        }
    }

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF' ,'.metro_logo'], {autoAlpha:1})
        .set(['.priceBox'], {opacity:0, x: 163, y:94})
        .set(['#EF-1_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#EF-2_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#EF-3_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#EF-4_copy-input_300x250'], {y: 20, opacity:0})
        .set(['#CTA_copyCon'], {y: 0, x: 0})
        .to(['#EF-1_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#EF-2_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '<')
        .to(['#EF-3_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-4_copy-input_300x250'], {duration: txtTm, y: 0, opacity: 1, ease: 'Power2.easeOut'}, '<')
        .to(['.priceBox'], {duration: txtTm, y:52, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}
// Lifestyle Frames J-L
function endFrameVariantJ(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-1_image1-src_300x250').style.display = 'none';
    document.querySelector('.priceCurrency').style.fontSize = "37px";

    let legal = document.getElementById("EF-frameLegal");
    legal.style.width = "150px";
    legal.style.padding = "0px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';
    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.width = "150px";
    theBound.style.padding = "46px 0px 0px 12px";
    let largerLegalCopy = document.getElementById("EF-largerLegal");
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.order = "3";
    let priceBox = document.getElementById("EF-priceBox");
    priceBox.style.position = "relative";
    priceBox.style.order = "2";
    let ctaHeight = "19px";
    let ctaBound = document.getElementById("CTA_copyCon");
    ctaBound.style.height = ctaHeight;
    ctaBound.style.zIndex = '1';
    ctaBound.style.top = '177px';
    ctaBound.style.left = '14px';
    ctaBound.style.position = 'absolute';
    let ctaInner = document.getElementById('CTA-bound');
    ctaInner.style.height = ctaHeight;
    let ctaMagnet = document.getElementById('CTA_nose_magnet');
    ctaMagnet.style.height = ctaHeight;

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.metro_logo'], {autoAlpha:1})
        .set([priceBox], {y:20, opacity:0})
        .set(['#EF-1_copy-input_300x250','#EF-2_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {y:20, opacity: 0})
        .set(['#EF-1_largerLegal-input_300x250'], {y:0})
        .to(['#EF-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#EF-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to(['#EF-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to([priceBox], {duration: txtTm, y: 0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to([ctaBound], {duration: txtTm, x: 0, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}
function endFrameVariantK(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-priceBox').style.display = 'none';
    document.querySelector('#EF-copy').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.width = "150px";
    theBound.style.padding = "140px 0px 64px 14px";
    let largerLegalCopy = document.getElementById("EF-largerLegal");
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.order = "3";
    let legal = document.getElementById("EF-frameLegal");
    legal.style.width = "150px";
    legal.style.padding = "0px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';
    let ctaHeight = "19px";
    let ctaBound = document.getElementById("CTA_copyCon");
    ctaBound.style.height = ctaHeight;
    ctaBound.style.zIndex = '1';
    ctaBound.style.top = '169px';
    ctaBound.style.left = '14px';
    ctaBound.style.position = 'absolute';
    let ctaInner = document.getElementById('CTA-bound');
    ctaInner.style.height = ctaHeight;
    ctaInner.style.padding = "0px 8px 0 10px";
    let ctaMagnet = document.getElementById('CTA_nose_magnet');
    ctaMagnet.style.height = ctaHeight;

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.metro_logo'], {autoAlpha:1})
        .set(['#EF-1_copy-input_300x250', '#EF-2_copy-input_300x250', '#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {opacity: 0})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:-12, opacity: 0})
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}
function endFrameVariantL(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-priceBox').style.display = 'none';

    let legal = document.getElementById("EF-frameLegal");
    legal.style.width = "150px";
    legal.style.padding = "0px 5px 3px 5px";
    legal.style.maxHeight = "52px";
    legal.style.left = '0px';
    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.width = "150px";
    theBound.style.padding = "105px 0px 0px 12px";
    theBound.style.minHeight = '155px';
    theBound.style.maxHeight = '194px';
    let largerLegalCopy = document.getElementById("EF-largerLegal");
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.order = "3";
    let priceBox = document.getElementById("EF-priceBox");
    priceBox.style.position = "relative";
    priceBox.style.order = "2";
    let ctaHeight = "19px";
    let ctaBound = document.getElementById("CTA_copyCon");
    ctaBound.style.height = ctaHeight;
    ctaBound.style.zIndex = '1';
    ctaBound.style.padding = "8px 0px 8px 12px";
    ctaBound.style.position = 'relative';
    let ctaInner = document.getElementById('CTA-bound');
    ctaInner.style.height = ctaHeight;
    let ctaMagnet = document.getElementById('CTA_nose_magnet');
    ctaMagnet.style.height = ctaHeight;

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.metro_logo'], {autoAlpha:1})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x:-12, opacity: 0})
        .set(['#EF-1_copy-input_300x250', '#EF-2_copy-input_300x250', '#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {x: 0, y: 20, opacity: 0})
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-2_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .to(['#EF-3_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '-=0.2')
        .to(['#EF-4_copy-input_300x250'], {duration: txtTm, y:0, opacity:1, ease: 'Power2.easeOut'}, '<')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}
function endFrameVariantM(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.getElementById('EF-frameLegal').style.padding = '0 8px 3px';
    document.querySelector('#EF-1_image2-src_300x250').style.display = 'none';

    let largerLegalCopy = document.getElementById("EF-largerLegal");
    largerLegalCopy.style.position = "absolute";
    largerLegalCopy.style.bottom = "70px";
    largerLegalCopy.style.left = "0px";
    largerLegalCopy.style.width = "300px";
    largerLegalCopy.style.textAlign = "center";
    let ctaBound = document.getElementById("CTA_copyCon");
    ctaBound.style.position = "absolute";
    ctaBound.style.width = "300px";
    ctaBound.style.top = "188px";
    ctaBound.style.left = "0px";
    ctaBound.style.justifyContent = "center";

    // document.getElementById('CTA-1_copy-input_300x250').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF'], {autoAlpha:1})
        .set(['.priceBox', '#EF-1_copy-input_300x250', '#EF-2_copy-input_300x250', '#EF-3_copy-input_300x250', '#EF-4_copy-input_300x250'], {opacity:0})
        .set(['#CTA_copyCon'], {opacity:0})
        .set(['#EF-1_image1-src_300x250'], {height: 250, width: 300, y: 0, x: 65,  opacity: 0})
        .to(['#EF-1_image1-src_300x250'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_300x250'], {duration: lglTm, opacity:0}, '-=0.2')
    return tl;
}
function ctaAnimation () {
    var tl = gsap.timeline({});
    tl.set(['.CTA'], {autoAlpha:1});
    tl.from(['#CTA_copyCon'], {duration:0.3, x:-10, ease:Back.easeOut.config(0.07)});
}
function priceBoxVisible(variant) {
    // cta transform needs/should be done in the system, not in the timeline for this to work
    let pbHeight = document.getElementById( variant + '-priceBox').clientHeight;
    if (window.getComputedStyle(document.getElementById( variant + '-priceBox')).display === 'none' || pbHeight === 0) {
        let targetLegal = document.getElementById(variant + '-largerLegal');
        targetLegal.style.position = "relative";
        targetLegal.style.bottom = "unset";
        targetLegal.style.right = "unset";
        return true;
    }
}
function legalVisible(variant) {
    let pbHeight = document.getElementById( variant + '-1_frameLegal-input_300x250').clientHeight;

    if (window.getComputedStyle(document.getElementById(variant + '-1_frameLegal-input_300x250')).display === 'none' || pbHeight === 0) {
        return true;
    }
}
function centerAlignment(variant) {
    for (let i = 1; i < 5; i++) {
        // console.log("Loop " + i);
        if (document.getElementById(variant + "-" + i + "_copy-input_300x250").childNodes.length !== 0) {
            if (document.getElementById(variant + "-" + i + "_copy-input_300x250").childNodes[0].style !== undefined) {
                if (document.getElementById(variant + "-" + i + "_copy-input_300x250").childNodes[0].style.textAlign === 'center') {
                    // console.log("Center Aligned Node is " + i);
                    // console.log("True");
                    return true;
                }
            }
        }
    }
}
function ctaVisible(variant) {
    let ctaLength = document.getElementById('CTA-1_copy-input_300x250').childNodes.length;
    // console.log(ctaLength);

    if (ctaLength === 0) {
        // console.log("empty cta");
        return true;
    }
}