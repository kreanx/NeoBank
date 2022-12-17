async function loadNews() {
    const wrapper = document.querySelector('.news__items')
    const mockImgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNemDx32kHbtVSXNMkRyINamV255JkT2r347HXiCI7CIFk3afiF0dG8VmQOkLTuPzprM&usqp=CAU'

    function cutText(text, limit) {
        if (!text) {
            return ''
        }

        text = text.trim()

        if (text.length <= limit) return text;

        text = text.slice(0, limit)
        const lastSpace = text.lastIndexOf(" ");

        if (lastSpace > 0) {
            text = text.substring(0, lastSpace)
        }

        return text;
    }

    function render(article = false) {
        let img = mockImgSrc
        let url = 'javascript:void'
        let title = 'Не удалось загрузить новости!<br>Попробуйте перезагрузить страницу'
        let description = ''
        
        const status = Boolean(article)

        if (status) {
            img = article?.urlToImage ? article.urlToImage : mockImgSrc
            title = cutText(article?.title, 60)
            description = cutText(article?.description, 100)
            url = article.url
        }

        return `
        <div class="news__link">
            <div class="news__item">
                    <div class="news__item-img">
                        <img class="news__img" src="${img}" alt="newsImg"">
                    </div>
                    <h4 class="news__item-title">
                        ${title}
                    </h4>
                    <p class="news__item-text">
                        <a class="${status ? 'news__item-link' : 'news__item-message'}" href=${url} target="_blank">
                            ${description}
                        </a>
                    </p>
            </div>
        </div>
        `
    }

    await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b8e220bebe8e422fa69d8f4844730fec')
        .then(response => response.json())
        .then(response => {
            for (let i = 0; i <= response.articles.length - 1; i++) {
                wrapper.innerHTML += render(response.articles[i])
            }

            const imgs = document.querySelectorAll('.news__img')
            imgs.forEach(img => {
                img.onerror = function () {
                    img.src = mockImgSrc
                }
            })
        })
        .catch(error => {
            wrapper.innerHTML += render()
            throw new Error(error)
        })

    newsSlider()
}