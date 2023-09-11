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

    let file1

    // Displaying succes after upload
    $('#file').on('change', function () {
        var file = this.files[0];
        file1 = file
        const reader = new FileReader();

        reader.onload = function (e) {
            const preview = $('#image-preview')
            preview.attr('style','display:block')
            preview.html(`<img id='preview' src="${e.target.result }" alt="Uploaded Image"
                style="width:50px; height:50px;">`)

        };

      reader.readAsDataURL(file);
        
    });

    function displaySuccessMessage() {
        $('#result').text('Image uploaded successfully.');
        $('#result').text('Image saved succesfully');
        setTimeout(function () {
            $('#result').attr('style','display:none')
            $('#preview').attr('style','display:none')
            $('#file').value=[]; 
            // Clear the form
        }, 5000);
    }
    $('#submitBtn').click((e)=>{
        e.preventDefault();
        const form_data = new FormData($('#imagepicker')[0])
        form_data.append('photo',file1)
        console.log(file1)
        $.ajax({
            url: '/upload',
            type: 'post',
            data: form_data,
            processData: false, 
            contentType: false,
            success: (data)=>{
                if (data.success){
                    displaySuccessMessage()
                }
                console.log('data.text', data)
                
                
            },
            error: function (error) {
                console.error('Error fetching data: ' + error);
            }
        })
    })
    })
   

        

