const resultEl = document.querySelector('#result')
    const lengthEl = document.querySelector('#length')
    const uppercaseEl = document.querySelector('#uppercase')
    const lowercaseEl = document.querySelector('#lowercase')
    const numbersEl = document.querySelector('#numbers')
    const symbolsEl = document.querySelector('#symbols')
    const generateEl = document.querySelector('#generate')
    const clipboardEl = document.querySelector('#clipboard')

    // นำค่าที่สุ่มได้มาเก็บไว้ที่ตัวแปร
    const randomFunc = {
        lower:getRandomLower,
        upper:getRandomUpper,
        number:getRandomNumber,
        symbol:getRandomSymbol
    }
    // copy รหัสที่ทำการ generate มาได้ และ แจ้งเตือนว่า ทำการ copy แล้ว
    clipboardEl.addEventListener('click',()=>{
        const textarea = document.createElement('textarea')
        const Password = resultEl.innerText

        if(!Password){return}

        textarea.value = Password
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        textarea.remove()
        alert('Password copied to clipboard!')
    })
    // รับค่าการกด Check 
    generateEl.addEventListener('click',()=>{
        const length = +lengthEl.value
        const hasLower = lowercaseEl.checked
        const hasUpper = uppercaseEl.checked
        const hasNumber = numbersEl.checked
        const hasSymbol = symbolsEl.checked

        resultEl.innerText = generatePassword(hasUpper,hasLower,hasNumber,hasSymbol,length);
    })

    // นำค่าที่ได้มาต่อกันและตัดค่าที่ไม่ได้Checkเลือกไว้ออกไป
    function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = "";
    const newArray = [];
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
   
    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
      });
    }

    const finalPassword = generatedPassword.slice(0,length)
    return finalPassword
    
}
// สุ่มค่า ตัวอักษรเล็ก&ใหญ่,ตัวเลข,สัญลักษณ์
    function getRandomLower(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }

    function getRandomUpper(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }
    
    function getRandomNumber(){
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    }

    function getRandomSymbol(){
        const symbols = '!@#$%^&*(){}[]=<>/,.'
        return symbols[Math.floor(Math.random()*symbols.length)]
    }