import headphones from '/src/assets/images/headphones.png'
import keyboard from '/src/assets/images/keyboard.png'
import lamp from '/src/assets/images/lamp.png'
import mouse from '/src/assets/images/mouse.png'

export const products = [
    {
        image: headphones,
        name: 'Наушники',
        price: 12990,
        id: crypto.randomUUID(),
    },
    {
        image: keyboard,
        name: 'Клавиатура',
        price: 19990,
        id: crypto.randomUUID(),
    },
    {
        image: mouse,
        name: 'Мышь',
        price: 7990,
        id: crypto.randomUUID(),
    },
    {
        image: lamp,
        name: 'Лампа',
        price: 4990,
        id: crypto.randomUUID(),
    },
]