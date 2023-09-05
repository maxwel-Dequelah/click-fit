$(()=>{
    

    
    $('body').append("<table id='insert' class='table table-dark'></table>")
    //load Ajax-call daata
    const url = 'http://numbersapi.com/1/30/date?json'

    $.get(url,(results,status)=>{
        console.log(status)
        const insert =$('#insert')
        $.each(results, function (index,value){
            insert.append(`<tr><td id=${index}>${index}</td> <td>${value}</td></tr>`)
           
                })
        
        })
    })
        

