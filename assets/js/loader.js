
let bottom = '<section id="footer" class="wrapper">' +
    '<div class="inner">' +
    ' <div class="split">' +
    '<div class="content">' +
    '<header>' +
    '<h2>About</h2>' +
    '</header>' +
    '<p style="margin-bottom: 1.5rem">Certified Software and Game Developer</p>' +
    '<p>' +
    '<a href="https://www.credly.com/badges/55f50cff-bf5b-4adc-b924-aac893fe38d5/public_url" target="_blank"><img src="https://www.verloka.com/cert/aws1.png" width="84" alt="AWS Certified Cloud Practitioner"></a>' +
    '<a href="https://www.credly.com/badges/1609bdbf-1ffc-47f5-ba16-4c3bb7bb0561/public_url" target="_blank"><img src="https://www.verloka.com/cert/aws2.png" width="84" alt="AWS Certified Solutions Architect – Associate"></a>' +
    '<a href="https://www.credly.com/badges/e9963035-90c4-48b3-a3cd-cc6f8ac23714/public_url" target="_blank"><img src="https://www.verloka.com/cert/aws3.png" width="84" alt="AWS Certified Solutions Architect – Professional"></a>' +
    '</p>' +
    '<ul class="actions">' +
    '<li><a href="https://verloka.com/blog" class="button next">Blog</a></li>' +
    '</ul>' +
    '</div>' +
    '<ul class="contact-icons">' +
    '<li><a href="https://twitter.com/ogyreal" class="icon alt fa-twitter"><span class="label">twitter.com/ogyreal</span></a></li>' +
    '<li><a href="https://linkedin.com/in/verloka" class="icon alt fa-linkedin"><span class="label">linkedin.com/in/verloka</span></a></li>' +
	'<li><a href="https://github.com/verloka" class="icon alt fa-github"><span class="label">github.com/verloka</span></a></li>' +
    '<li><a href="scheme://somepage" class="icon alt fa-envelope"><span class="label">&lt;click to show email&gt;</span></a></li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '</section>' +
    '<section class="wrapper style2 copyright">' +
    '<div class="inner">&copy; Vadym Verloka. All rights reserved.</div>' +
    '</section>';

let header = '<span class="logo"><a href="https://verloka.com">Vadym <span>Verloka</span></a></span><a href="#menu"><span>Menu</span></a>';

let menu = '<div class="inner">' +
    '<h2>Menu</h2>' +
    '<ul class="links">' +
    '<li><a href="https://verloka.com">Home</a></li>' +
    '<li><a href="https://verloka.com/portfolio">Portfolio</a></li>' +
    '<li><a href="https://verloka.com/blog">Blog</a></li>' +
    '</ul>' +
    '<a class="close"><span>Close</span></a>' +
    '</div>';

$('#header').html(header);
$('#menu').html(menu);
$('#BotomContent').html(bottom);

$('span:contains("click to show email")').on('click', () => {
    $('span:contains("click to show email")').text('hello@verloka.com');
    $('span:contains("click to show email")').unbind();

    let l1 = 'mailto';
    let l2 = ':';
    let l3 = 'hello';
    let l4 = '@';
    let l5 = 'verloka';
    let l6 = '.';
    let l7 = 'com';

    setTimeout(() => { $('.fa-envelope').attr('href', l1 + l2 + l3 + l4 + l5 + l6 + l7) }, 100);
});
