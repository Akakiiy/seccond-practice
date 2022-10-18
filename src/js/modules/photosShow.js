const photosShow = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    // block.forEach(item => {
    //     item.src = item.src.slice(0, -4) + '-1.png';
    // });

    function showPhoto (block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -4) + '-1.png';

        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hidePhoto (block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -6) + '.png';

        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showPhoto(block);
        });

        block.addEventListener('mouseout', () => {
            hidePhoto(block);
        });
    });
};

export default photosShow;