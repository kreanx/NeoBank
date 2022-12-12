window.addEventListener('DOMContentLoaded', () => {
    function loadCurrency() {
        const currencyTags = document.querySelectorAll('.exchange__currency-text')

        function getCurrency(tags) {
            tags.forEach(async (tag) => {
                const currencyName = tag.textContent.split(':')[0]
                let currencyExchange = 0

                currencyExchange = await getOneCurrency(currencyName)

                tag.nextElementSibling.innerText = currencyExchange.toFixed(2)
            })
        }

        async function getOneCurrency(currencyName) {
            let currencyExchange = 0

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '141fc98f46msh353d93f5a1e571bp195a88jsn81da51edfbf5',
                    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
                }
            };

            await fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${currencyName}&to=RUB&q=1.0`, options)
                .then(response => response.json())
                .then(response => {
                    currencyExchange = response
                })
                .catch(err => console.error(err));

            return currencyExchange
        }

        //вызов для первого рендера без таймера
        getCurrency(currencyTags)

        const intervalTime = 900000

        setInterval(() => {
            getCurrency(currencyTags)
        }, intervalTime)
    }

    function newsSlider() {
        try {
            const nextArrow = document.querySelector('.news__arrows-next')
            const prevArrow = document.querySelector('.news__arrows-prev')
            const newsBlock = document.querySelector('.news__items')
            const newsItem = document.querySelector('.news__item')
            const allItems = document.querySelectorAll('.news__item')
            const container = document.querySelector('.container')

            const blockSize = +getComputedStyle(newsBlock).inlineSize.replace('px', '')
            const itemSize = +getComputedStyle(newsItem).inlineSize.replace('px', '')
            const gap = +getComputedStyle(newsBlock).gap.replace('px', '')
            const fullLenght = allItems.length * (itemSize + gap)
            const left = +getComputedStyle(newsBlock).left.replace('px', '')

            const containerSize = getComputedStyle(container).width.replace('px', '')

            if (left === 0) {
                prevArrow.disabled = true
            }

            function scrollNext(item, scrollWidth) {
                const left = +getComputedStyle(item).left.replace('px', '')

                if (left === 0) {
                    prevArrow.disabled = false
                }

                if ((fullLenght - -left) / itemSize <= containerSize / itemSize) {
                    item.style.left = -(fullLenght - ((itemSize + gap) * (containerSize / itemSize)) + (itemSize + gap)) + 'px'
                    nextArrow.disabled = true
                    return
                }

                item.style.left = left - scrollWidth + 'px'
            }

            function scrollPrev(item, scrollWidth) {
                const left = +getComputedStyle(item).left.replace('px', '')

                if (left <= blockSize - itemSize * 2) {
                    nextArrow.disabled = false
                }

                if (left >= -scrollWidth) {
                    item.style.left = 0
                    prevArrow.disabled = true
                    return
                }

                item.style.left = left + scrollWidth + 'px'
            }

            nextArrow.addEventListener('click', () => scrollNext(newsBlock, 200))
            prevArrow.addEventListener('click', () => scrollPrev(newsBlock, 200))
        } catch (error) {
            console.error(error);
        }
    }

    async function loadNews() {
        function cutText(text, limit) {
            if (!text) {
                return ''
            }

            text = text.trim()

            if (text.length <= limit) return text;

            text = text.slice(0, limit)
            lastSpace = text.lastIndexOf(" ");

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
                        <a class="news__link" href='${article?.url}'>
                            <div class="news__item">
                                    <div class="news__item-img">
                                        <img class="news__img" src="${article?.urlToImage ? article.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNemDx32kHbtVSXNMkRyINamV255JkT2r347HXiCI7CIFk3afiF0dG8VmQOkLTuPzprM&usqp=CAU"}" alt="newsImg"">
                                    </div>
                                    <h4 class="news__item-title">
                                        ${cutText(article?.title, 60)}
                                    </h4>
                                    <p class="news__item-text">
                                        ${cutText(article?.description, 100)}
                                    </p>
                            </div>
                        </a>
                        `
                    } catch (error) {
                        wrapper.innerHTML += `
                            <div class="news__item">
                                <div class="news__item-img">
                                <img class="news__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNemDx32kHbtVSXNMkRyINamV255JkT2r347HXiCI7CIFk3afiF0dG8VmQOkLTuPzprM&usqp=CAU" alt="newsImg">
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
                        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNemDx32kHbtVSXNMkRyINamV255JkT2r347HXiCI7CIFk3afiF0dG8VmQOkLTuPzprM&usqp=CAU"
                    }
                })
            })

        newsSlider()
    }

    function subscribe() {
        const form = document.querySelector('.support__input')
        const input = document.querySelector('.support__input-input')

        const isSubscribed = window.localStorage.getItem('isSubscribed')

        function hideInput() {
            const button = document.querySelector('.support__button')
            const text = document.querySelector('.support__subscribed')

            input.style.display = 'none'
            button.style.display = 'none'
            text.style.display = 'inline'
        }

        if (isSubscribed) {
            hideInput()

            return
        }

        async function sendEmail(email) {
            await fetch('/email', {
                method: 'POST',
                body: JSON.stringify(email),
            })
                .then(response => {
                    if (!response.ok) {
                        return Promise.reject('Failed to send request!', response)
                    }
                    response.json()
                })
                .then(data => {
                    console.log('You are subscribed:', data)
                    window.localStorage.setItem('isSubscribed', true)
                    hideInput()
                })
                .catch(error => {
                    console.error('Error:', error)
                    alert('Failed to send request!')
                })
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const email = input.value
            sendEmail(email)
        })
    }


    // вызов для первого рендера без таймера

    loadNews()

    // const newsIntervalTime = 900000

    // setInterval(() => {
    //     loadNews()
    // }, newsIntervalTime)

    const images = document.querySelectorAll('.news__img')

    images.forEach(img => {
        img.onerror = function () {
            img.src = "https://img.freepik.com/premium-vector/modern-minimal-not-found-error-icon-oops-page-not-found-404-error-the-page-not-found-with-concept_599740-716.jpg"
        }
    })

    loadCurrency()
    subscribe()

})

