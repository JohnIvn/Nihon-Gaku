document.querySelectorAll('.carda').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.body.style.backgroundColor = '#feedb3';
    });
    card.addEventListener('mouseleave', () => {
        document.body.style.backgroundColor = '';
    });
});

document.querySelectorAll('.cardb').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.body.style.backgroundColor = '#fdd0fd';
    });
    card.addEventListener('mouseleave', () => {
        document.body.style.backgroundColor = '';
    });
});

document.querySelectorAll('.cardc').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.body.style.backgroundColor = '#dcebfd';
    });
    card.addEventListener('mouseleave', () => {
        document.body.style.backgroundColor = '';
    });
});

document.querySelectorAll('.cardd').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.body.style.backgroundColor = '#dff8c2';
    });
    card.addEventListener('mouseleave', () => {
        document.body.style.backgroundColor = '';
    });
});