const API_URL = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces'
const tbody = document.querySelector('#tbody')
const tr = document.querySelector('#tr')

//Get initial movies
getAPI(API_URL)
async function getAPI(url){
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data);
    showCases(data);
}
function showCases(cases){
    // console.log(cases);
    tr.innerHTML = ''

    cases.forEach(CovidCase => {
        const{province,new_case,total_case,new_death,total_death,txn_date}=CovidCase
        // console.log(province,new_case,total_case,new_death,total_death,txn_date);
        
        const trEl = document.createElement('tr')
        trEl.innerHTML = `
        <th scope="row"><div class=""id="province">${province}</div></th>
        <td><div class="${getClassByRate(new_case)}"id="new_case">${new_case}</div></td>
        <td><div class="${getClassByRate(total_case)}"id="total_case">${total_case}</div></td>
        <td><div class="${getClassByRate(new_death)}"id="new_death">${new_death}</div></td>
        <td><div class="${getClassByRate(total_death)}"id="total_death">${total_death}</div></td>
        <td><div class=""id="txn_date">${txn_date}</div></td>
        `
        tbody.appendChild(trEl)
    });
}
function getClassByRate(Rate){
    if(Rate > 999){
        return 'red'
    }else if(Rate <= 999 && Rate >= 1){
        return 'orange'
    }else if(Rate === 0){
        return 'green'
    }
}
