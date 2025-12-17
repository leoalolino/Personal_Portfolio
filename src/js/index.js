export function index() {
    const miniNavData = [
        'UI/UX DESIGNER',
        'DEVELOPER',
        'STUDENT',
        'LIFELONG LEARNER',
        'FRONTEND',
        'BACKEND',
    ]
    const iDo = [
        { name: 'Develop', txt: "I'm driven by an obsession with clean code and continuous improvement. I consistently build personal projects to master new frameworks and sharpen my full-stack development skills." },
        { name: 'Design', txt: 'I enjoy UI/UX design as a crucial step in the development process, focusing on intuitive interfaces that are both functional and visually compelling.' },
        { name: 'Explore New Technologies', txt: 'Dedicated to lifelong learning, I continuously scan the tech landscape to adopt cutting-edge tools and methodologies that enhance efficiency and output' },
        { name: 'Touch Some Grass', txt: "I usually go outside whenever I'm offline. This dedicated downtime promotes clarity, creativity, and prevents burnout." }

    ]
    const navList = [
        { name: 'About', id: 'About' },
        { name: 'Projects', id: 'Projects' },
        { name: 'Contact', id: 'Contact' },
        { name: 'Switch', id: 'Switch' }
    ]
    const techDataList = [
        {
            name: 'Backend', id: 'bck', techstack: [
                { img: '/public/img/PHP.png', name: 'Php' },
                { img: '/public/img/Laravel.png', name: 'Laravel' },
                { img: '/public/img/PostgresSQL.png', name: 'PostgresSQL' },
                { img: '/public/img/Node.js.png', name: 'Node' },
                { img: '/public/img/Express.png', name: 'Express' }
            ]
        },
        {
            name: 'Frontend', id: 'frnt', techstack: [
                { img: '/public/img/JavaScript.png', name: 'JavaScript' },
                { img: '/public/img/HTML5.png', name: 'HTML' },
                { img: '/public/img/CSS3.png', name: 'CSS' },
                { img: '/public/img/Tailwind CSS.png', name: 'Tailwind' },
                { img: '/public/img/Vite.js.png', name: 'Vite' },
                { img: '/public/img/jQuery.png', name: 'jQuery' }
            ]
        },
        {
            name: 'Developer Tools', id: 'dt', techstack: [
                { img: '/public/img/Visual Studio Code (VS Code).png', name: 'VSCode' },
                { img: '/public/img/Git.png', name: 'Git' },
                { img: '/public/img/GitHub.png', name: 'Github' },
                { img: '/public/img/Figma.png', name: 'Figma', },
                { img: '/public/img/Adobe Photoshop.png', name: 'Adobe Photoshop' },
                { img: '/public/img/Postman.png', name: 'Postman' },
                { img: '/public/img/NPM.png', name: 'Npm' },
            ]
        },
    ]
    const techs = document.getElementById('techIcon').innerHTML = techDataList.flatMap(e =>
        e.techstack.map(x => `
                <div class="border border-gray-950 rounded p-3 md:p-4 h-[60px] flex items-center gap-3 md:gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ease-in-out hover:cursor-pointer">
                    <div class=" p-2 w-10 h-10 flex items-center justify-center flex-shrink-0 rounded">
                        <img src="${x.img}">
                    </div>
            <div class="text-sm md:text-base font-medium truncate">${x.name}</div>
                </div>
                    `
        )).join('');

    const miniNavSec = document.getElementById('tabnav').innerHTML = miniNavData.map(e => {
        return `<li class="text-white flex gap-4 what text-2xl"><svg version="1.1" id="32" height="26px" width="20px" xmlns="http://www.w3.org/2000/img" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#444444"><g id="imgRepo_bgCarrier" stroke-width="0"></g><g id="imgRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="imgRepo_iconCarrier"> <style type="text/css">  .st0{fill:#303030;}  </style> <g> <path class="st0" d="M511.883,298.395c-2.781-27.281-54.391-46.141-129.406-51.844c-7.172-42.047-15.469-90.563-17.891-103.75 c-5.563-30.203-45.344-47.094-74.891-25.313c-15.5,11.422-29.359,12.234-36.703,12.234s-15.5,1.625-36.703-12.234 c-30.719-20.094-69.328-4.891-74.875,25.313c-2.969,16.109-14.688,84.844-22.391,130.203 C45.211,293.817-2.711,323.114,0.117,350.723c4.25,41.625,122.266,63.671,263.578,49.218 C405.039,385.488,516.148,340.036,511.883,298.395z M132.289,308.348l8.156-42.406c0,0,145.188,22.828,226.75-19.578l8.156,35.891 C375.352,282.254,287.258,337.708,132.289,308.348z"></path> </g> </g></svg> <p>${e}</p></li>`;
    });

    const wht = document.getElementById('what').innerHTML = iDo.map((x, i) => {
        return `
        <div class="border border-l-[4px] border-gray-950 p-3 md:p-4 h-auto shadow mt-4 md:mt-0">
            <div class="flex items-center gap-3 md:gap-4">
                <div class="bg-black w-[50px] h-[50px] min-w-[50px] text-white text-lg flex items-center justify-center font-bold flex-shrink-0">
                    ${i + 1}
                </div>
                <div class="flex flex-col gap-2">
                    <p class="font-semibold text-base sm:text-lg lg:text-xl">${x.name}</p>
                    <p class="text-sm sm:text-base leading-relaxed">${x.txt}</p>
                </div>
            </div>
        </div>`;
    }).join('');

    const mNav = document.getElementById('main-nav').innerHTML = navList.map(x => {
        return `<li id="${x.id}">${x.name}</li>`;
    }).join('');

    $('[name="visible"]').hide();

    $(document).ready(function () {
        $("#Switch").on('click', () => {
            $('html').fadeOut('slow', () => {
                $('[name="visible"]').fadeIn('slow');
            });
        });
    });

    const traits = [
        'Kind',
        'Flexible',
        'Adaptability',
        'Hard working',
        'Skilled',
        'Dedicated',
        'Creative',
        'Approachable',
        'Perseverance',
        'Initiative',
        'Empathy',
        'Humility',
        'Receptivity',
        'Growth Mindset',
        'Results Driven',
        'Inquisitiveness',
        'Reliable',
        'Self Motivated',
        'Passionate',

    ]

    document.getElementById('pillSec').innerHTML = traits.map((e) => {
        return `<div class="bg-black rounded-full text-white px-4 py-1.5 text-sm font-semibold hover:cursor-pointer">
                ${e}
            </div>`;
    }).join('');

    $(document).ready(() => {
        $("picture").on('mouseenter', () => {
            $('#me1').css('opacity', '0');
            $('#me2').css('opacity', '1');
        });

        $("picture").on('mouseleave', () => {
            $('#me1').css('opacity', '1');
            $('#me2').css('opacity', '0');
        });
    });
}