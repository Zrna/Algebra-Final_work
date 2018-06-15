// employees info
var employees = [    
    {
        name: 'Ivo Ivić',
        work: 'CEO',
        imgURL: 'img/employees/man1.jpg'
    },
    {
        name: 'Ana Anić',
        work: 'CTO',
        imgURL: 'img/employees/woman1.jpg'
    },
    {
        name: 'Marko Marić',
        work: 'Frontend Team Leader',
        imgURL: 'img/employees/man2.jpg'
    },
    {
        name: 'Ivan Horvat',
        work: 'Backend Team Leader',
        imgURL: 'img/employees/man3.jpg'
    },
    {
        name: 'Iva Ivić',
        work: 'Designer Team Leader',
        imgURL: 'img/employees/woman2.jpg'
    },
    {
        name: 'Josip Josipović',
        work: 'QA Team Leader',
        imgURL: 'img/employees/man4.jpg'
    },
    {
        name: 'Maja Majić',
        work: 'Frontend Developer',
        imgURL: 'img/employees/woman3.jpg'
    },
    {
        name: 'Lucija Lujic',
        work: 'Designer',
        imgURL: 'img/employees/woman4.jpg'
    },
    {
        name: 'Branimir Barić',
        work: 'Backend Developer',
        imgURL: 'img/employees/man5.jpg'
    },
    {
        name: 'Marin Čupkić',
        work: 'HR',
        imgURL: 'img/employees/man6.jpg'
    },
    {
        name: 'Ivana Ivanković',
        work: 'Backend Developer',
        imgURL: 'img/employees/woman5.jpg'
    },
    {
        name: 'Željko Željić',
        work: 'Frontend Developer',
        imgURL: 'img/employees/man7.jpg'
    },
    {
        name: 'Nikola Nikolić',
        work: 'HR',
        imgURL: 'img/employees/man8.jpg'
    },
    {
        name: 'Karlo Karlić',
        work: 'QA Tester',
        imgURL: 'img/employees/man9.jpg'
    },
    {
        name: 'Tomislava Tomić',
        work: 'QA Tester',
        imgURL: 'img/employees/woman6.jpg'
    },
    {
        name: 'Martina Martinčić',
        work: 'Designer',
        imgURL: 'img/employees/woman7.jpg'
    },
];

var employee = '<li class="person-box">\
                    <img class="employee-img" src="%imgURL%"/>\
                    <p class="about-us-name">%name%</p>\
                    <p class="about-us-work">%work%</p>\
                </li>';

var myHTML='';
for (var i = 0; i < employees.length; i++){
    myHTML = myHTML + employee.replace("%imgURL%", employees[i].imgURL).replace("%name%", employees[i].name).replace("%work%", employees[i].work);    
}
$("#employees-section").html(myHTML);

$(".show-team, #projects-show-video").click(function () {
    $("#employees-section, #projects-video").slideToggle("slow");
});


// validacija za mail u obliku: example@domain.com
jQuery.validator.addMethod("laxEmail", function (value, element) {
    return this.optional(element) || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)
}, 'Please enter a valid email address.');

$.validator.setDefaults({
    submitHandler: function () {
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var fullName = firstName + ' ' + lastName;
        var company = $('#company').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var budget = $('#budget').find(':selected').val();
        var message = $('#message').val();
        var newLine = ' ' + '\n\n';

        /*  tvrtka i telefon nisu "required":
            ako se nista ne upise u alertu ce se ispisati "-",
            ako se nesto upise onda ce se ispisati upisana vrijednost 
        */
        if (company == ''){
            company = '-';
        }
        if (phone == '') {
            phone = '-';
        }

        swal("Uspješno poslano!", 
            'Ime i prezime: ' + fullName + newLine +
            'Tvrtka: ' + company + newLine +
            'Email: ' + email + newLine +
            'Telefon: ' + phone + newLine +
            'Budžet: ' + budget + ' kn' + newLine +
            'Poruka: ' + message, 
            "success");        

        $('button.swal-button').click(function (e) {
            e.preventDefault();
            window.location = 'contact.html';            
        });        
    }
});


// funkcija za dodavanje/micanje klase na slikama (on hover) kod projekata
$(function () {
    $('.projects-div').mouseover(function () {
        $(this).find('img').addClass('projects-link');
        $(this).find('div.projects-img-text').show();
    }).mouseleave(function () {
        $(this).find('img').removeClass('projects-link');
        $(this).find('div.projects-img-text').hide();
    });
});