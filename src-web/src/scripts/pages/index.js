define(['mui'], (mui) => {

    function init() {
        mui.init();

        render();
        addEVent()
    }

    function render() {
        mui.ajax('/api/getlist', {
            type: 'post',
            success: (res) => {
                console.log(res)
                renderTop(res.data)
            }
        })
    }

    function renders() {
        mui.ajax('/api/getlistImg', {
            type: 'post',
            success: (res) => {
                console.log(res)
                renderDou(res.data)
            }
        })
    }
    //渲染头条
    function renderTop(data) {
        const toutiao = document.querySelector('.toutiao');
        toutiao.innerHTML = data.map(file => {
            return `<div class="cont">
                        <div class="cont-header">
                            <dl>
                                <dt><img src="${file.imgs}" alt=""></dt>
                                <dd>
                                    <div>${file.name}</div>
                                    <p>${file.time}</p>
                                    <p class="top"><span>TOP</span><span>饭圈头条</span></p>
                                </dd>
                            </dl>
                        </div>
                        <p class="content">${file.content}</p>
                        <p class="content-footer">由xxxx等几人3秒前的帮助Ta上热门</p>
                    </div>`
        }).join('')
    }
    //绑定事件
    function addEVent() {
        const toutiao = document.querySelector('.toutiao');
        const cont = document.querySelector('.aidou')
        mui('#btn').on('tap', 'li', function(e) {
            let tar = e.target
            console.log(tar)
            if (tar.innerHTML == '饭圈头条') {
                render();
                cont.classList.add('hide');
                toutiao.classList.remove('hide');
            } else if (tar.innerHTML == '我的爱豆') {
                renders();
                toutiao.classList.add('hide');
                cont.classList.remove('hide')
            }
        })

    }
    //渲染爱豆
    function renderDou(data) {
        const cont = document.querySelector('.aidou')
        cont.innerHTML = data.map(file => {
            return `<dl>
                        <dt><img src="${file.imgs}" alt=""></dt>
                        <dd>
                            <div><span><img src="${file.imgs}" alt=""></span><span>${file.name}</span></div>
                        </dd>
                    </dl>`
        }).join('')
    }

    init();
});