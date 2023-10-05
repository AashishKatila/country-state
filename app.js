var countrySateCityinfo = {
    Australia: {
        "Western Australia": {
            Broome: ["6725", "6318", "6701"],
            Coolgardie: ["6429", "6432"]
        },
        Tasmania: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"]
        }
    },
    Germany: {
        Bavaria: {
            Munich: ["80331", "80333", "80335"],
            Numemberg: ["90402", "90403", "90404"]
        },
        Hessen: {
            Frankfurt: ["60306", "60309", "60310"],
            Surat: ["55246", "55247", "55248", "55249"]
        }
    },

    Canada: {
        Alberta: {
            Calgary: ["8033", "8333", "8035"],
            Edmonton: ["9040", "9403", "9040"]
        },
        Manitoba: {
            Brandon: ["6030", "6030"],
            Winnipeg: ["5524", "5547", "5248"]
        }
    }
    
}

window.onload = function(){
    const selectCountry = document.getElementById('country'),
    selectState = document.getElementById('state')
    selects = document.querySelectorAll('select')


    selectState.disabled = true;

    // selectState.forEach(select => {
    //     if(select.disabled == true){
    //         select.style.cursor = 'auto'
    //     }
    //     else{
    //         select.style.cursor - 'pointer'
    //     }
    // })

    //displays option 
    for(let country in countrySateCityinfo){
        selectCountry.options[selectCountry.options.length] = new Option(country,country)
    }

    selectCountry.onchange = (e) =>{
        selectState.disabled = false
    

    selectState.length = 1

    for(let state in countrySateCityinfo[e.target.value]){
        // console.log(state)
        selectState.options[selectState.options.length] = new Option(state,state)
    }
    }
    
}