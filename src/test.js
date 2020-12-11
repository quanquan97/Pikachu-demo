import string from './css.js'  //string 这个名字是可以随便取的


const player = {
    id: undefined,
    time: 10,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    n: 1,
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n),
        player.ui.demo2.innerHTML = string.substr(0, player.n),
        player.bindEvents(),
        player.play()  //现在这些函数变成属性了 要加player.
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]  //通过字符串去取对应的方法
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        // console.log(n+':'+string.sub(0,n))
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time)  //setInterval后第一个参数,run后面不要加括号！！
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 50
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 10
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
}

player.init()





