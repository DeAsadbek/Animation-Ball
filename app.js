window.addEventListener('load', function () {
    const ball = document.querySelector('.ball');
    const add = document.getElementById('add');
    const remove = document.getElementById('remove');
    // console.log(ball);

    add.onclick = () => {
        ball.classList.add('active');
    };

    remove.onclick = () => {
        ball.classList.remove('active');
    };
});
