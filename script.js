let laptops = [
    {
        brand: 'samsung',
        proc: 'i5',
        asccesM: 8,
        color: 'gray',
        screen: 'fhd',
        memory: 1000
    },
    {
        brand: 'acer',
        proc: 'i9',
        asccesM: 16,
        color: 'black',
        screen: 'HD',
        memory: 500
    },
    {
        brand: 'apple',
        proc: 'm1',
        asccesM: 16,
        color: 'gray',
        screen: 'retina',
        memory: 1000
    },

    {
        brand: 'asus',
        proc: 'i7',
        asccesM: 16,
        color: 'pink',
        screen: 'fhd',
        memory: 1000
    },
    {
        brand: 'lenovo',
        proc: 'i7',
        asccesM: 32,
        color: 'black',
        screen: 'fhd',
        memory: 1000
    },
    {
        brand: 'samsung',
        proc: 'i5',
        asccesM: 16,
        color: 'gray',
        screen: 'fhd',
        memory: 1000
    },
    {
        brand: 'acer',
        proc: 'i9',
        asccesM: 32,
        color: 'black',
        screen: 'HD',
        memory: 500
    },
    {
        brand: 'apple',
        proc: 'm1',
        asccesM: 16,
        color: 'gray',
        screen: 'retina',
        memory: 1000
    },

    {
        brand: 'asus',
        proc: 'i7',
        asccesM: 16,
        color: 'pink',
        screen: 'fhd',
        memory: 1000
    },
    {
        brand: 'lenovo',
        proc: 'i7',
        asccesM: 32,
        color: 'black',
        screen: 'fhd',
        memory: 1000
    },
]

let ask = {
    brand: prompt('brand').trim(), // apple
    proc: prompt('proc').trim(),
    asccesM: prompt('asccesM').trim(), // 12
    color: prompt('color').trim(),
    screen: prompt('screen').trim(),
    memory: prompt('memory').trim()
}

for (let item of laptops) {
    if (ask.brand == item.brand && ask.proc >= item.proc && ask.asccesM >= item.asccesM && ask.color == item.color && ask.screen == item.screen && ask.memory >= item.memory) {
        console.log(item);
    }
}