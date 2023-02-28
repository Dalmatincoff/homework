class Product{
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity =  quantity;
        this.description = description;
    }
}

function inArray(str, arr){
    let newArr = [];
    let temp = str.split('&');
    if(temp.length !== 4){
        return;
    }
    temp[0] = temp.at(0).split('-').at(2);
    temp[1] = parseInt(temp.at(1).replace(/[^\d]/g, ''));
    temp[2] = parseInt(temp.at(2).replace(/[^\d]/g, ''));
    temp[3] = temp.at(3).split('-').at(2);
    for(let elem of arr){
            if(temp[0] === elem.name &&
                temp[1] === elem.price &&
                temp[2]  === elem.quantity &&
                temp[3] === elem.description){
                 newArr.push(elem);
            }
    }
    return newArr;
}


