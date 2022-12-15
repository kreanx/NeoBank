async function loadNews() {
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

    await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b8e220bebe8e422fa69d8f4844730fec')
        .then(response => response.json())
        .then(response => {
            for (let i = 0; i <= response.articles.length - 1; i++) {
                const wrapper = document.querySelector('.news__items')

                try {
                    const article = response.articles[i]

                    wrapper.innerHTML += `
                    <div class="news__link">
                        <div class="news__item">
                                <div class="news__item-img">
                                    <img class="news__img" src="${article?.urlToImage ? article.urlToImage : mockImgSrc}" alt="newsImg"">
                                </div>
                                <h4 class="news__item-title">
                                    ${cutText(article?.title, 60)}
                                </h4>
                                <p class="news__item-text">
                                    <a class="news_item-link" href=${article.url}>
                                        ${cutText(article?.description, 100)}
                                    </a>
                                </p>
                        </div>
                    </div>
                    `
                } catch (error) {
                    wrapper.innerHTML += `
                        <div class="news__item">
                            <div class="news__item-img">
                            <img class="news__img" src=${mockImgSrc} alt="newsImg">
                            </div>
                            <h4 class="news__item-title">
                                Не удалось загрузить новости!
                            </h4>
                            <p class="news__item-text">
                                Попробуйте перезагрузить страницу
                            </p>
                        </div>
                    `
                    throw new Error(error)
                }
            }

            const imgs = document.querySelectorAll('.news__img')
            imgs.forEach(img => {
                img.onerror = function () {
                    img.src = mockImgSrc
                }
            })
        })

    newsSlider()
}