$(()=>{
    

    
    $('#table1').append("<table id='insert' class='table table-primary bg-primary'></table>")
    //load Ajax-call daata
    const url = 'http://numbersapi.com/1/30/date?json'

    $.get(url,(results,status)=>{
        console.log(status)
        const insert =$('#insert')
        $.each(results, function (index,value){
            insert.append(`<tr><td id=${index}>${index}</td> <td>${value}</td></tr>`)
           
                })
        
    })

    // disable btn if form is Empty
    const upValue = $('#photoIn').value
    console.log(upValue)
    if (upValue == ''){
        $('button').attr("disabled","disabled")
    }

    const upload =()=>{
        const data = $('')
    }

})
        

