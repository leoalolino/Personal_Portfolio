export function second() {
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
                { svg: '<StackIcon name="php" />', name: 'Php' },
                { svg: 'svg/Laravel.png', name: 'Laravel' },
                { svg: 'svg/PostgresSQL.png', name: 'PostgresSQL' },
                { svg: 'svg/Node.js.png', name: 'Node' },
                { svg: 'svg/Express.png', name: 'Express' }
            ]
        },
        {
            name: 'Frontend', id: 'frnt', techstack: [
                { svg: 'svg/JavaScript.png', name: 'JavaScript' },
                { svg: 'svg/HTML5.png', name: 'HTML' },
                { svg: 'svg/CSS3.png', name: 'CSS' },
                { svg: 'svg/Tailwind CSS.png', name: 'Tailwind' },
                { svg: 'svg/Vite.js.png', name: 'Vite' },
                { svg: 'svg/jQuery.png', name: 'jQuery' }
            ]
        },
        {
            name: 'Developer Tools', id: 'dt', techstack: [
                { svg: 'svg/Visual Studio Code (VS Code).png', name: 'VSCode' },
                { svg: 'svg/Git.png', name: 'Git' },
                { svg: 'svg/GitHub.png', name: 'Github' },
                { svg: 'svg/Figma.png', name: 'Figma', },
                { svg: 'svg/Adobe Photoshop.png', name: 'Adobe Photoshop' }
            ]
        },
    ]
    const techs = document.getElementById('techIcon').innerHTML = techDataList.flatMap(e =>
        e.techstack.map(x => `
                <div class="border border-black rounded p-3 md:p-4 h-[60px] flex items-center gap-3 md:gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ease-in-out hover:cursor-pointer">
                    <div class=" p-2 w-10 h-10 flex items-center justify-center flex-shrink-0 rounded">
                        ${x.svg}
                    </div>
            <div class="text-sm md:text-base font-medium truncate">${x.name}</div>
                </div>
                    `
        )).join('');

    const miniNavSec = document.getElementById('tabnav').innerHTML = miniNavData.map(e => {
        return `<li class="text-white flex gap-4 what text-2xl"><svg version="1.1" id="32" height="26px" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#444444"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  .st0{fill:#303030;}  </style> <g> <path class="st0" d="M511.883,298.395c-2.781-27.281-54.391-46.141-129.406-51.844c-7.172-42.047-15.469-90.563-17.891-103.75 c-5.563-30.203-45.344-47.094-74.891-25.313c-15.5,11.422-29.359,12.234-36.703,12.234s-15.5,1.625-36.703-12.234 c-30.719-20.094-69.328-4.891-74.875,25.313c-2.969,16.109-14.688,84.844-22.391,130.203 C45.211,293.817-2.711,323.114,0.117,350.723c4.25,41.625,122.266,63.671,263.578,49.218 C405.039,385.488,516.148,340.036,511.883,298.395z M132.289,308.348l8.156-42.406c0,0,145.188,22.828,226.75-19.578l8.156,35.891 C375.352,282.254,287.258,337.708,132.289,308.348z"></path> </g> </g></svg> <p>${e}</p></li>`;
    });

    const wht = document.getElementById('what').innerHTML = iDo.map((x, i) => {
        return `
            <div class="border border-l-[4px] border-black p-3 md:p-4 h-auto flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 shadow"> 
                <div class="
                    bg-black w-[50px] h-[50px] text-white text-lg 
                    flex items-center justify-center font-bold flex-shrink-0">
                    ${i + 1}
                </div>
                <div class="flex flex-col justify-start tracking-wider"> 
                    <p class="font-semibold text-base lg:text-2xl sm:text-lg what">${x.name}</p>
                    <p class="text-sm text-base/7">${x.txt}</p>
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
}