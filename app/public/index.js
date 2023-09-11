$(()=>{


    // End of the API get


    $('#table1').append("<table id='insert' class='table table-black bg-primary'></table>")
    //load Ajax-call daata
    const apiUrl = 'http://numbersapi.com/1/30/date?json'


    // Fetch data from the API using AJAX
    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var table = $('#insert');

            // Iterate through the data using $.each
            
            $.each(data, function (index, item) {
                var row = $(`<tr id='${index}'>`).hide();
                setTimeout(function () {
                    
                    $('<td>').text(index).appendTo(row);
                    $('<td>').text(item).appendTo(row);

                    row.fadeIn(800);
                    row.appendTo(table);
                },row * 10000000); 

            }

            );
              
           
        },
        error: function (error) {
            console.log('Error:', error);
        }
        })
        
  
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
            $('result').fadeOut(4000)
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

    $('.nav-link.register-link').click(function (e) {
        e.preventDefault(); // Prevent the default link behavior

        // Show the modal by selecting it by its ID and calling the 'modal' method with 'show' as an argument
        $('#registerModal').modal('show');

    })
   

        
})
