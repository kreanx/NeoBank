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
        const fullLength = allItems.length * (itemSize + gap)
        const left = +getComputedStyle(newsBlock).left.replace('px', '')
        const containerSize = getComputedStyle(container).width.replace('px', '')
        const fullItemSize = itemSize + gap
        const quantityOfItems = containerSize / itemSize


        if (left === 0) {
            prevArrow.disabled = true
        }

        function scroll(item, scrollWidth, direction) {
            const left = +getComputedStyle(item).left.replace('px', '')

            if (direction === 'next') {
                if (left === 0) {
                    prevArrow.disabled = false
                }

                if ((fullLength - -left) / itemSize <= quantityOfItems) {
                    item.style.left = -(fullLength - fullItemSize * quantityOfItems + fullItemSize) + 'px'
                    nextArrow.disabled = true
                    return
                }

                item.style.left = left - scrollWidth + 'px'
                return
            }

            if (direction === 'prev') {
                if (left <= blockSize - itemSize * 2) {
                    nextArrow.disabled = false
                }

                if (left >= -scrollWidth) {
                    item.style.left = 0
                    prevArrow.disabled = true
                    return
                }

                item.style.left = left + scrollWidth + 'px'
                return
            }
        }

        nextArrow.addEventListener('click', () => scroll(newsBlock, 200, 'next'))
        prevArrow.addEventListener('click', () => scroll(newsBlock, 200, 'prev'))
    } catch (error) {
        console.error(error);
    }
}

