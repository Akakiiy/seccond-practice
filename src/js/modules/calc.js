const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == "" || materialBlock.value == "") {
            resultBlock.textContent = 'Пожалуйста выберете размер И материалы картины';
        } else if (promocodeBlock.value === "IWANTPOPART") {
            resultBlock.textContent = `Стоимость картины со скидкой будет: ${Math.round(sum * 0.7)}`;
        } else {
            resultBlock.textContent = `Стоимость картины будет: ${sum}`;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;