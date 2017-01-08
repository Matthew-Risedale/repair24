
var calcJson = {
    "company": [
        {
            "name": "Apple",
            "id": "apple",
            "models": [
                {
                    "name": "Iphone 6",
                    "id": "iphone_6",
                    "repair_type": [
                        {
                            "name": "Ремонт Стекла",
                            "id": "glass_repair",
                            "price": "1500 руб"
                        },
                        {
                            "name": "Восстановление после попадания влаги",
                            "id": "water_repair",
                            "price": "2000 руб"
                        }
                    ]
                },
                {
                    "name": "Iphone 7",
                    "id": "iphone_7",
                    "repair_type": [
                        {
                            "name": "Вернуть JACK",
                            "id": "return_jack",
                            "price": "5000 руб"
                        },
                        {
                            "name": "Починка камеры",
                            "id": "camera_repair",
                            "price": "3000 руб"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Xiaomi",
            "id": "xiaomi",
            "models": [
                {
                    "name": "Xiaomi redmi note 4",
                    "id": "redmi_note_4",
                    "repair_type": [
                        {
                            "name": "Замена экрана",
                            "id": "screen_repair",
                            "price": "999 руб"
                        },
                        {
                            "name": "Замена кнопки",
                            "id": "button_repair",
                            "price": "700 руб"
                        }
                    ]
                },
                {
                    "name": "Xiaomi Mi Mix",
                    "id": "redmi_mi_mix",
                    "repair_type": [
                        {
                            "name": "Ремонт сканера отпечатков",
                            "id": "finger_print_repair",
                            "price": "1300 руб"
                        },
                        {
                            "name": "Замена экрана",
                            "id": "screen_repair",
                            "price": "1799 руб"
                        }
                    ]
                },
            ]
        }
    ]
}

var companyNumber;
var modelsNumber;

$.each(calcJson.company, function (index, value) {
    $("#company").append('<option value="'+value.id+'">'+value.name+'</option>');
});


$('#company').on('change', function(){
    console.log($(this).val());
    for(var i = 0; i < calcJson.company.length; i++)
    {
      if(calcJson.company[i].id == $(this).val())
      {
         companyNumber = i;
         $('#models').html('<option value="000">Модель телефона</option>');
         $('#repair_type').html('<option value="000">Тип ремонта</option>');
         $.each(calcJson.company[i].models, function (index, value) {
            $("#models").append('<option value="'+value.id+'">'+value.name+'</option>');
            console.log(value.name);
        });
      }
    }
});


$('#models').on('change', function(){
    console.log($(this).val());
    for(var i = 0; i < models.length-1; i++)
    {
      if(calcJson.company[companyNumber].models[i].id == $(this).val())
      {
        modelsNumber = i;
         $('#repair_type').html('<option value="000">Тип ремонта</option>');
         $.each(calcJson.company[companyNumber].models[i].repair_type, function (index, value) {
            $("#repair_type").append('<option value="'+value.id+'">'+value.name+'</option>');
            console.log(value.name);
        });
      }
    }
});


$('#repair_type').on('change', function(){
    console.log($(this).val());
    for(var i = 0; i < repair_type.length-1; i++)
    {
      if(calcJson.company[companyNumber].models[modelsNumber].repair_type[i].id == $(this).val())
      {
        $('.price-calc__price').text(calcJson.company[companyNumber].models[modelsNumber].repair_type[i].price);
      }
    }
});
