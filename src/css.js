const string = `
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.skin *::before, .skin *::after {
    box-sizing: border-box;
}

.skin {
    position: relative;
    background-color: #ffe600;
    min-height: 50vh;
}

.nose {
    border: 10px solid red;
    border-color: black transparent transparent;
    height: 0px;
    width: 0px;
    border-bottom: none;
    left: 50%;
    top: 145px;
    position: relative;
    margin-left: -10px;
    z-index: 10;
}


@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(30deg);
    }
    66% {
        transform: rotate(-30deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: center bottom;
    animation: wave 200ms infinite linear;
}

.circle {
    position: absolute;
    background-color: black;
    width: 20px;
    height: 8px;
    top: -18px;
    left: -10px;
    border-radius: 10px 10px 0 0;

}

.eye {
    position: absolute;
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%
}

.eye::before {
    content: "";
    display: block;
    border: 3px solid black;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 2px;

}

.eye.left {
    transform: translateX(-120px);
}

.eye.right {
    transform: translateX(120px);
}


.mouth {
    /*border: 1px solid red ;*/
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 170px;
}

.mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
}


.mouth .up .lip {
    position: relative;
    border: 4px solid black;
    width: 100px;
    height: 30px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background-color: #ffe600;
}


.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-52px);
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(52px);
}


.mouth .up .lip::before {
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background-color: #ffe600;

}


.mouth .up .lip.left::before {
    /* border:1px solid green; */
    right: -6px;
}

.mouth .up .lip.right::before {
    left: -6px;

}

.mouth .down {
    /* border:1px solid red; */
    height: 180px;
    width: 100%;
    position: absolute;
    top: 5px;
    overflow: hidden;
}

.mouth .down .circle1 {
    border: 4px solid black;
    height: 1000px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    border-radius: 0 0 50% 50%;
    background-color: #9b000a;
    overflow: hidden;

}

.mouth .down .circle1 .circle2 {
    border: 1px solid #ff485f;
    height: 150px;
    width: 160px;
    position: absolute;
    bottom: -3px;
    left: 50%;
    margin-left: -80px;
    border-radius: 70% 70% 0 0;
    background-color: #ff485f;
    background-color: #ff485f;

}


.face {
    position: absolute;
    left: 50%;
    border: 2px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;

}

.face.left {
    transform: translateX(-180px);
    border-radius: 50%;
    background-color: #ff0000;
}

.face > img {
    /* border:1px solid red; */
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;

}

.face:hover > img {
    display: block;

}

.face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
}

.face.right {
    transform: translateX(180px);
    border-radius: 50%;
    background-color: #ff0000;
}

`
export default string  //把一堆东西放在一个新建的文件里面 然后export导出  再在需要用的文件里import导入  这样比较方便   也叫“模块化”