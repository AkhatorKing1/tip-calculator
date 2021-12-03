(() => {
    const bill = document.getElementById('bill');
    const btn = document.querySelectorAll('.btn')
    const tipInput = document.querySelector('.tip-input')
    const errDisp = document.getElementById('err-disp')
    const billErrDisp = document.getElementById('bill-err-disp')
    const tipErrDisp = document.getElementById('tip-err-disp')
    const peopleInput = document.querySelector('.people-input')
    const tipAmount = document.getElementById('tip-amount')
    const total = document.getElementById('total')
    const reset = document.getElementById('reset')

    let tipPercent = ""

    function enableReset() {
        reset.style.backgroundColor = "#26C2AE";
        function resetMouseOver() {
        reset.style.backgroundColor =  "#9FE8DF";
        }
        function resetMouseOut() {
            reset.style.backgroundColor = "#26C2AE"
        }

        reset.onmouseover = function() {resetMouseOver()}
        reset.onmouseout = function() {resetMouseOut()}

        reset.addEventListener('click', () => {
            billErrDisp.innerHTML = ""
            bill.value = ""
            tipInput.innerHTML = ""
            errDisp.innerHTML = ""
            peopleInput.value = ""
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
            tipPercent = ""
            tipInput.value = ""
            buttonStyle();

            bill.style.border = "none";
            bill.onmouseover = function() {mouseOver(bill)}
            bill.onmouseout = function() {mouseOut(bill)}

            peopleInput.style.border = "none";
            peopleInput.onmouseover = function() {mouseOver(peopleInput)}
            peopleInput.onmouseout = function() {mouseOut(peopleInput)}

            reset.style.backgroundColor = "#0D686D"
            reset.onmouseover = () => () => reset.style.backgroundColor = "#0D686D";
            reset.onmouseout = () => () => reset.style.backgroundColor = "#0D686D";
        })
    }
    
    function mouseOver(element) {
        element.style.border = "3px solid #26C2AE"
    }

    function mouseOut(element) {
        element.style.border = "none"
    }

    function errMouseOver(element) {
        element.style.border = "3px solid #E17052"
    }

    function errMouseOut(element) {
        element.style.border = "3px solid #E17052"
    }

    function peopleInputStyle(x) {
        if(x === "" || x === 0) {
            peopleInput.style.border = "3px solid #E17052"
            peopleInput.onmouseover = function() {errMouseOver(peopleInput)}
            peopleInput.onmouseout = function() {errMouseOut(peopleInput)}
            console.log(true)
            return
        }
        else {
            peopleInput.style.border = "none"
            peopleInput.onmouseover = function() {mouseOver(peopleInput)}
            peopleInput.onmouseout = function() {mouseOut(peopleInput)}
            console.log(false)
            return
        }
    }

    function billInputStyle(x) {
        if(billErrDisp.innerHTML === "Input Bill" || billErrDisp.innerHTML === "Can't be zero") {
            bill.style.border = "3px solid #E17052"
            bill.onmouseover = function() {errMouseOver(bill)}
            bill.onmouseout = function() {errMouseOut(bill)}
            console.log(true)
            return
        }
        else {
            bill.style.border = "none"
            bill.onmouseover = function() {mouseOver(bill)}
            bill.onmouseout = function() {mouseOut(bill)}
            console.log(false)
            return
        }
    }

    function btnsMouseOver(e) {
        e.style.backgroundColor = "#9FE8DF";
    }

    function btnsMouseout(e) {
        e.style.backgroundColor = "#00474B";
    }

    function buttonStyle() {
        console.log(tipPercent)
        if(tipPercent == "0.05") {
            btn[0].onmouseover = () => () => btn[0].style.backgroundColor = "#26C2AE";
            btn[0].onmouseout = () => () => btn[0].style.backgroundColor = "#26C2AE";
            btn[0].style.backgroundColor = "#26C2AE";
            btn[1].style.backgroundColor = "#00474B";
            btn[2].style.backgroundColor = "#00474B";
            btn[3].style.backgroundColor = "#00474B";
            btn[4].style.backgroundColor = "#00474B";
            
            let btnArr = [btn[1], btn[2], btn[3], btn[4]];
            for(let i = 0; i < btnArr.length; i++) {
                btnArr[i].onmouseover = function() {btnsMouseOver(btnArr[i])};
                btnArr[i].onmouseout = function() {btnsMouseout(btnArr[i])};
            }
        }
        else if(tipPercent == "0.1") {
            btn[1].onmouseover = () => () => btn[0].style.backgroundColor = "#26C2AE";
            btn[1].onmouseout = () => () => btn[0].style.backgroundColor = "#26C2AE";
            btn[1].style.backgroundColor = "#26C2AE";
            btn[0].style.backgroundColor = "#00474B";
            btn[2].style.backgroundColor = "#00474B";
            btn[3].style.backgroundColor = "#00474B";
            btn[4].style.backgroundColor = "#00474B";

            let btnArr = [btn[0], btn[2], btn[3], btn[4]];
            for(let i = 0; i < btnArr.length; i++) {
                btnArr[i].onmouseover = function() {btnsMouseOver(btnArr[i])};
                btnArr[i].onmouseout = function() {btnsMouseout(btnArr[i])};
            }
        }
        else if(tipPercent == "0.15") {
            btn[2].onmouseover = () => () => btn[0].style.backgroundColor = "#26C2AE";
            btn[2].onmouseout = () => () => btn[0].style.backgroundColor = "#26C2AE";
            btn[2].style.backgroundColor = "#26C2AE";
            btn[0].style.backgroundColor = "#00474B";
            btn[1].style.backgroundColor = "#00474B";
            btn[3].style.backgroundColor = "#00474B";
            btn[4].style.backgroundColor = "#00474B";

            let btnArr = [btn[0], btn[1], btn[3], btn[4]];
            for(let i = 0; i < btnArr.length; i++) {
                btnArr[i].onmouseover = function() {btnsMouseOver(btnArr[i])};
                btnArr[i].onmouseout = function() {btnsMouseout(btnArr[i])};
            }
        }
        else if(tipPercent == "0.25") {
            btn[3].onmouseover = () => () => btn[0].style.backgroundColor = "#26C2AE";
            btn[3].onmouseout = () => () => btn[0].style.backgroundColor = "#26C2AE";
            btn[3].style.backgroundColor = "#26C2AE";
            btn[0].style.backgroundColor = "#00474B";
            btn[2].style.backgroundColor = "#00474B";
            btn[1].style.backgroundColor = "#00474B";
            btn[4].style.backgroundColor = "#00474B";

            let btnArr = [btn[0], btn[2], btn[1], btn[4]];
            for(let i = 0; i < btnArr.length; i++) {
                btnArr[i].onmouseover = function() {btnsMouseOver(btnArr[i])};
                btnArr[i].onmouseout = function() {btnsMouseout(btnArr[i])};
            }
        }
        else if(tipPercent == "0.5") {
            btn[4].onmouseover = () => () => btn[0].style.backgroundColor = "#26C2AE";
            btn[4].onmouseout = () => () => btn[0].style.backgroundColor = "#26C2AE";
            btn[4].style.backgroundColor = "#26C2AE";
            btn[0].style.backgroundColor = "#00474B";
            btn[2].style.backgroundColor = "#00474B";
            btn[3].style.backgroundColor = "#00474B";
            btn[1].style.backgroundColor = "#00474B";

            let btnArr = [btn[0], btn[2], btn[3], btn[1]];
            for(let i = 0; i < btnArr.length; i++) {
                btnArr[i].onmouseover = function() {btnsMouseOver(btnArr[i])};
                btnArr[i].onmouseout = function() {btnsMouseout(btnArr[i])};
            }
        }
        else {
            btn[4].style.backgroundColor = "#00474B";
            btn[0].style.backgroundColor = "#00474B";
            btn[2].style.backgroundColor = "#00474B";
            btn[3].style.backgroundColor = "#00474B";
            btn[1].style.backgroundColor = "#00474B";

            let btnArr = [btn[0], btn[1], btn[2], btn[3], btn[4]];
            for(let i = 0; i < btnArr.length; i++) {
                btnArr[i].onmouseover = function() {btnsMouseOver(btnArr[i])};
                btnArr[i].onmouseout = function() {btnsMouseout(btnArr[i])};
            }
        }
    }

    function execute(a, b, c) {
        if(!a[1]) {
            c.innerHTML = `${b}.00`
            console.log('freeee')
            return
        }
        else if(a[1].length > 1) {
            c.innerHTML = b
            return
        }
        else {c.innerHTML = b + '0'}
    }

    btn.forEach((aa) => {
        aa.addEventListener('click', (e) =>{
            tipPercent = e.target.value
            console.log(bill.value);
            tipInput.value = "";
            tipErrDisp.innerHTML = "";
            // e.target.style.backgroundColor = "red"
            buttonStyle();
            enableReset();
            peopleInputStyle(Number(peopleInput.value))
    
            if(peopleInput.value === "") {
                errDisp.innerHTML = "Input value"
                tipAmount.innerHTML = "$0.00"
                total.innerHTML = "$0.00"
            }
            else if(Number(peopleInput.value) === 0) {
                errDisp.innerHTML = "Can't be zero"
                tipAmount.innerHTML = "$0.00"
                total.innerHTML = "$0.00"
            }
            else if(peopleInput.value.match("-")) {
                errDisp.innerHTML = "Can't be -ve"
                tipAmount.innerHTML = "$0.00"
                total.innerHTML = "$0.00"
            }
            else if(bill.value === "") {
                billErrDisp.innerHTML = "Input Bill"
                errDisp.innerHTML = ""
                tipAmount.innerHTML = "$0.00"
                total.innerHTML = "$0.00"
            }
            else if(Number(bill.value) === 0) {
                billErrDisp.innerHTML = "Can't be zero"
                errDisp.innerHTML = ""
                tipAmount.innerHTML = "$0.00"
                total.innerHTML = "$0.00"
            }
            else if(bill.value.match("-")) {
                billErrDisp.innerHTML = "Can't be -ve"
                tipAmount.innerHTML = "$0.00"
                total.innerHTML = "$0.00"
            }
            else if(tipInput.value === "" && tipPercent < 0.05) {
                tipErrDisp.innerHTML = "Select tip %"
                tipAmount.innerHTML = "$0.00"
                total.innerHTML = "$0.00"
            }
            else if(tipPercent === "") {
                tipErrDisp.innerHTML = "Select tip %"
            }
            else {
                errDisp.innerHTML = ""
                let billNumber = Number(bill.value)
                const tipPerPerson = (bill.value * tipPercent) / peopleInput.value
                console.log(tipPerPerson)
                let newtipAmount = `$${+(Math.round(tipPerPerson + "e+2") + "e-2")}`
                let arr = newtipAmount.split('.')
                execute(arr, newtipAmount, tipAmount);
                console.log(arr)

                const totalPerPerson = (billNumber + (billNumber * tipPercent)) / peopleInput.value
                let newTotal = `$${+(Math.round(totalPerPerson + "e+2") + "e-2")}`
                let arr2 = newTotal.split('.')
                execute(arr2, newTotal, total)
                console.log(tipAmount.innerHTML.length)
                console.log(totalPerPerson)
            }

            billInputStyle(Number(bill.value))
            
        })
    })

    tipInput.addEventListener('change', (e) => {
        const customValue = Number(e.target.value)
        tipPercent = customValue/100
        tipErrDisp.innerHTML = "";
        buttonStyle();
        enableReset();
        peopleInputStyle(Number(peopleInput.value))

        if(peopleInput.value === "") {
            errDisp.innerHTML = "Input value"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(Number(peopleInput.value) === 0) {
            errDisp.innerHTML = "Can't be zero"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(peopleInput.value.match("-")) {
            errDisp.innerHTML = "Can't be -ve"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(bill.value === "") {
            billErrDisp.innerHTML = "Input Bill"
            errDisp.innerHTML = ""
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(Number(bill.value) === 0) {
            billErrDisp.innerHTML = "Can't be zero"
            errDisp.innerHTML = ""
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(bill.value.match("-")) {
            billErrDisp.innerHTML = "Can't be -ve"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(tipInput.value === "") {
            tipErrDisp.innerHTML = "Select tip %"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(tipInput.value.match("-")) {
            tipErrDisp.innerHTML = "Can't be -ve"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else {
            errDisp.innerHTML = ""
            let billNumber = Number(bill.value)
            const tipPerPerson = (bill.value * tipPercent) / peopleInput.value
            console.log(tipPerPerson)
            let newtipAmount = `$${+(Math.round(tipPerPerson + "e+2") + "e-2")}`
            let arr = newtipAmount.split('.')
            execute(arr, newtipAmount, tipAmount);
            console.log(arr)

            const totalPerPerson = (billNumber + (billNumber * tipPercent)) / peopleInput.value
            let newTotal = `$${+(Math.round(totalPerPerson + "e+2") + "e-2")}`
            let arr2 = newTotal.split('.')
            execute(arr2, newTotal, total)
            console.log(tipAmount.innerHTML.length)
            console.log(totalPerPerson)
        }
        
        billInputStyle(Number(bill.value))
    })
    
    peopleInput.addEventListener('change', (b) => {
        console.log(b.target.value)
        const people = b.target.value;
        const billNumber = Number(bill.value)
        errDisp.innerHTML =""
        enableReset();
        // peopleInputStyle(Number(people))
        peopleInputStyle(Number(peopleInput.value))

        if(people === "") {
            errDisp.innerHTML = "Input value"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(Number(people) === 0) {
            errDisp.innerHTML = "Can't be zero"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(people.match("-")) {
            errDisp.innerHTML = "Can't be -ve"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(bill.value === "") {
            billErrDisp.innerHTML = "Input Bill"
            errDisp.innerHTML = ""
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(billNumber === 0) {
            billErrDisp.innerHTML = "Can't be zero"
            errDisp.innerHTML = ""
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(bill.value.match("-")) {
            billErrDisp.innerHTML = "Can't be -ve"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(tipInput.value === "" && tipPercent < 0.05) {
            tipErrDisp.innerHTML = "Select tip %"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(tipInput.value.match("-")) {
            tipErrDisp.innerHTML = "Can't be -ve"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(tipPercent === "") {
            tipErrDisp.innerHTML = "Select tip %";
        }
        else {
            errDisp.innerHTML = ""
            const tipPerPerson = (bill.value * tipPercent) / people
            console.log(tipPerPerson)
            let newtipAmount = `$${+(Math.round(tipPerPerson + "e+2") + "e-2")}`
            let arr = newtipAmount.split('.')
            execute(arr, newtipAmount, tipAmount);
            console.log(arr)

            const totalPerPerson = (billNumber + (billNumber * tipPercent)) / people
            let newTotal = `$${+(Math.round(totalPerPerson + "e+2") + "e-2")}`
            let arr2 = newTotal.split('.')
            execute(arr2, newTotal, total)
            console.log(tipAmount.innerHTML.length)
            console.log(totalPerPerson)
        }
        
        billInputStyle(Number(bill.value))
    })

    bill.addEventListener('change', (e) => {
        const billNumber = Number(e.target.value)
        console.log(billNumber)
        billErrDisp.innerHTML = ""
        enableReset();
        peopleInputStyle(Number(peopleInput.value))

        if(peopleInput.value === "") {
            errDisp.innerHTML = "Input value"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(Number(peopleInput.value) === 0) {
            errDisp.innerHTML = "Can't be zero"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(peopleInput.value.match("-")) {
            errDisp.innerHTML = "Can't be -ve"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(bill.value === "") {
            billErrDisp.innerHTML = "Input Bill"
            errDisp.innerHTML = ""
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(billNumber === 0) {
            billErrDisp.innerHTML = "Can't be zero"
            errDisp.innerHTML = ""
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(bill.value.match("-")) {
            billErrDisp.innerHTML = "Can't be -ve"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(tipInput.value === "" && tipPercent < 0.05) {
            tipErrDisp.innerHTML = "Select tip %"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(tipInput.value.match("-")) {
            tipErrDisp.innerHTML = "Can't be -ve"
            tipAmount.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        }
        else if(tipPercent === "") {
            tipErrDisp.innerHTML = "Select tip %"
        }
        else {
            errDisp.innerHTML = ""
            let billNumber = Number(bill.value)
            const tipPerPerson = (bill.value * tipPercent) / peopleInput.value
            console.log(tipPerPerson)
            let newtipAmount = `$${+(Math.round(tipPerPerson + "e+2") + "e-2")}`
            let arr = newtipAmount.split('.')
            execute(arr, newtipAmount, tipAmount);
            console.log(arr)

            const totalPerPerson = (billNumber + (billNumber * tipPercent)) / peopleInput.value
            let newTotal = `$${+(Math.round(totalPerPerson + "e+2") + "e-2")}`
            let arr2 = newTotal.split('.')
            execute(arr2, newTotal, total)
            console.log(tipAmount.innerHTML.length)
            console.log(totalPerPerson)
        }
        
        billInputStyle(Number(bill.value))
})
})()