const accordion = (triggersSelector) => {
    const triggers = document.querySelectorAll(triggersSelector);

    function removeAllActiveStyles () {
        triggers.forEach(item => {
            item.classList.remove('active-style');
            item.nextElementSibling.classList.remove('active-content');
            item.nextElementSibling.style.maxHeight = '0px';
        });
    }

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', function() {

            if (this.classList.contains('active-style')) {
                removeAllActiveStyles();
            } else {
                removeAllActiveStyles();
                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            }
        });
    });
};

export default accordion; 