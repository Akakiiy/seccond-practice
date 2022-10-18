const filter = (btns, mark, blockNoCards) => {
    const buttons = document.querySelectorAll(btns),
          wrapper = document.querySelectorAll(mark),
          no = document.querySelector(blockNoCards);

    buttons.forEach(mark => {
        mark.addEventListener('click', function() {

            let numOfActiveMarks = 0;

            buttons.forEach(item => {
                item.classList.remove('active');
            });

            wrapper.forEach(photo => {
                photo.classList.add('animated', 'fadeIn');
                no.classList.add('animated', 'fadeIn');
                photo.style.display = 'none';

                if (photo.classList.contains(this.className)) {
                    numOfActiveMarks++;
                    photo.style.display = 'block';
                }
            });
            
            if (numOfActiveMarks === 0) {
                no.style.display = 'block';
            } else {
                no.style.display = 'none';
            }

            this.classList.add('active');
        });
    });
};

export default filter;