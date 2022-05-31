function NewGame() {
    size = document.querySelector("input[name=radio-Size]:checked").dataset.size; //*Get the current chosen size of bord

    let NumOfShips = document.querySelectorAll(`.Number-ships`) //*all number of ships inputs

    for (let i = 0; i < NumOfShips.length; i++) { 

        ShipTyeNumber[i] = parseInt(NumOfShips[i].value); //*enter current ship values to the array
        ShipTypeRight[i].innerHTML = ShipTyeNumber[i] //*show us in the current ship value the number of ships we have 
    }

    totalShip = ShipTyeNumber.reduce((a, b) => a + b) //* add all the ships in the array*/
    if (totalShip == 0) { //* no ships
        alert(`No Ship in game`)
        window.location.reload()
        return
    }
    BulidTable()

}

function BulidTable() { 
    let ta = 0;
    let table = `<table>`

    for (let i = 0; i < size; i++) { 

        table += `<tr>`


        for (let j = 0; j < size; j++) { 

            if (j == 0)
                table += `<td data-gvol="true" data-ta=${ta++} class="colorGray"></td>`

            else
                table += `<td data-ta=${ta++} class="colorGray"></td>`


        }
        table += `</tr>`
    }

    table += `</table>`
    document.querySelector(`.Center`).innerHTML = table //* add the table */

    ClickTable() 

    BuildShip()
}

function ClickTable() {

    TdTable = document.querySelectorAll(`.Center td`) 

    for (let i = 0; i < TdTable.length; i++) {
        TdTable[i].addEventListener(`click`, MouseClick) //*for every click on each td

    }

}

function MouseClick(event) { 

    let element = event.target
    CheckShip(element) //*Check if a ship is in that spot

}

function BuildShip() { 

    for (let i = 0; i < ShipTyeNumber.length; i++) {

        for (let j = 0; j < ShipTyeNumber[i]; j++) { 

            while (!(CreateShip(i))) { 

            }
        }
    }
}

function RandomNum() { 

    let random = Math.floor(Math.random() * size * size) //* the max random number can be the bord size

    while (shipPosition.indexOf(random) != -1) { 
        random = Math.floor(Math.random() * size * size) 
    }

    shipPosition.push(random) 
    return random 
}

function CreateShip(ShipSize) {

    let RandomShip = RandomNum()

    for (let i = 0; i < ShipSize + 2; i++) {

        if (TdTable[RandomShip + i] == undefined) //*Checi if ship size wont go outside of the border
            return false

        else if (TdTable[RandomShip + i].getAttribute(`data-ship`)) //*Check if there is a ship there
            return false

        else if (i > 0 && TdTable[RandomShip + i].getAttribute("data-gvol")) //*Check if a ship starts at the border

            return false;
    }

    for (let i = 0; i < ShipSize + 2; i++) {

        TdTable[RandomShip + i].setAttribute(`data-ship`, ShipSize + 2)

        TdTable[RandomShip + i].setAttribute(`data-shipStart`, RandomShip)
    }

    return true
}

function CheckShip(element) {

    let ShipType = element.getAttribute(`data-ship`) //*Check if there is a ship (when clicking)

    if (ShipType) { 
        element.classList.remove("colorGray") 
        element.classList.add("ColorShip")

        if(oneShip(element, ShipType)){
            winner();
        }
    } 
    else if(!(ShipType) && !(element.classList.contains("ColorShip")))//

        {
        element.classList.remove("colorGray")
        element.classList.add("ColorSea")
    }


}

function oneShip(element, ShipType) {
    let shipStart = parseInt(element.getAttribute(`data-shipStart`)) 

    for (let i = 0; i < ShipType; i++) {

        if (!(TdTable[shipStart + i].classList.contains(`ColorShip`)))
            return false

    }

    for (let i = 0; i < ShipType; i++) {
        TdTable[shipStart+i].removeAttribute(`data-ship`)
    }
     
    let BOOMDIV = document.querySelector(`#BOOM`)
    BOOMDIV.innerHTML = `<img class="imgb" src="/battleship/boom.png">`
    let image = document.querySelector(`.imgb`)

    setTimeout(function () {
        image.parentNode.removeChild(image)
    }, 3000)
    totalShip--
    ShipTypeRight[ShipType - 2].innerHTML--;    

    return true;
}

function winner(){
    if (totalShip == 0){
     let BOOMDIV = document.querySelector(`#BOOM`)
    BOOMDIV.innerHTML = `<img class="imgb" src="/battleship/ass2.png">`
    image = document.querySelector(`.imgb`)
    
    setTimeout(function(){
        window.location.reload()
    }, 3000)
    }
}