export function second() {
    const techDataList = [
        {
            name: 'Backend', id: 'bck', techstack: [
                { img: 'img/PHP.png', name: 'Php' },
                { img: 'img/Laravel.png', name: 'Laravel' },
                { img: 'img/PostgresSQL.png', name: 'PostgresSQL' }
            ]
        },
        {
            name: 'Frontend', id: 'frnt', techstack: [
                { img: 'img/JavaScript.png', name: 'JavaScript' },
                { img: 'img/HTML5.png', name: 'HTML' },
                { img: 'img/CSS3.png', name: 'CSS' },
                { img: 'img/Tailwind CSS.png', name: 'Tailwind' },
                { img: 'img/Vite.js.png', name: 'Vite' }
            ]
        },
        {
            name: 'Developer Tools', id: 'dt', techstack: [
                { img: 'img/Visual Studio Code (VS Code).png', name: 'VSCode' },
                { img: 'img/Git.png', name: 'Git' },
                { img: 'img/GitHub.png', name: 'Github' },
                { img: 'img/Figma.png', name: 'Figma', },
                { img: 'img/Adobe Illustrator.png', name: 'Adobe Illustrator' },
                { img: 'img/Adobe Photoshop.png', name: 'Adobe Photoshop' }
            ]
        },
    ]
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
        { name: 'About' },
        { name: 'Projects' },
        { name: 'Contact' },
        { name: 'Switch' }
    ]
    const projectList = [
        { name: 'test1', url: '/test' },
        { name: 'test2', url: '/test' },
        { name: 'test3', url: '/test' },
        // { name: 'test4', url: '/test' },
    ]
    const uiuxList = [
        { name: 'test', img: '' },
        { name: 'test2', img: '' },
        { name: 'test3', img: '' },
        { name: 'test4', img: '' }
    ]
    const techIconsSec = document.getElementById('tech-icons');
    const miniNavSec = document.getElementById('tabnav');
    const wht = document.getElementById('what');
    const mNav = document.getElementById('main-nav')
    const uiuxSec = document.getElementById('ui-ux');
    const projectSec = document.getElementById('projects')

    let MiniNav = '';
    let Mnav = '';
    let Ido = '';
    let techs = '';
    let uiux = '';
    let proj = '';

    navList.forEach(x => {
        Mnav += `<li>${x.name}</li>`;
    });

    miniNavData.forEach(lists => {
        MiniNav += `<li class="text-white flex gap-4 what text-2xl"><svg version="1.1" id="32" height="26px" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#444444"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  .st0{fill:#303030;}  </style> <g> <path class="st0" d="M511.883,298.395c-2.781-27.281-54.391-46.141-129.406-51.844c-7.172-42.047-15.469-90.563-17.891-103.75 c-5.563-30.203-45.344-47.094-74.891-25.313c-15.5,11.422-29.359,12.234-36.703,12.234s-15.5,1.625-36.703-12.234 c-30.719-20.094-69.328-4.891-74.875,25.313c-2.969,16.109-14.688,84.844-22.391,130.203 C45.211,293.817-2.711,323.114,0.117,350.723c4.25,41.625,122.266,63.671,263.578,49.218 C405.039,385.488,516.148,340.036,511.883,298.395z M132.289,308.348l8.156-42.406c0,0,145.188,22.828,226.75-19.578l8.156,35.891 C375.352,282.254,287.258,337.708,132.289,308.348z"></path> </g> </g></svg> <p>${lists}</p></li>`;
    });

    iDo.forEach((x, i) => {
        Ido += `
        <div class="border border-l-[4px] border-black p-2 h-[110px] flex items-center gap-4 shadow"> 
            
            <div class="
                bg-black w-[50px] h-[50px] text-white text-lg 
                flex items-center justify-center font-bold flex-shrink-0">
                ${i + 1}
            </div>
            
            <div class="flex flex-col justify-start tracking-wider"> 
                <p class="font-semibold text-md what text-xl">${x.name}</p>
                <p>${x.txt}</p>
            </div>
        </div>`;
    });

    techDataList.forEach(x => {
        techs += `
        <div class="category-group mb-6">
            <h3 class="category-title text-xl font-bold mb-2">${x.name}</h3>

            <div class="flex flex-wrap gap-2"> `;
        x.techstack.forEach(y => {
            techs +=
                `<span class="flex items-center border-[#414141] border rounded-lg gap-2 p-1 hover:-translate-y-0.5">
                <img src="${y.img}" class="size-[20px] ml-2">
                <p class="text-sm">${y.name}</p>
          </span>`;
        });
    });
    if (projectList.length % 2 == 1) {
        proj += `
        <div class="border w-full">
            <div class="border flex justify-center gap-4 text-center">
                <div class="bg-red-500">
                    <img src="img/open-folder.png" class="size-[220px]" alt="${projectList[0].name}">
                </div>
                <div  class="bg-red-500">
                    <img src="img/open-folder.png" class="size-[220px]" alt="${projectList[1].name}">
                </div>
            </div>
            <div class="border w-full flex justify-center">
                <div class="bg-sky-500 text-center ">
                    <img src="img/open-folder.png" class="size-[220px]" alt="${projectList[1].name}">
                </div>
            </div>
        </div>
    `;
    }
    else {
        proj += `<div class="grid grid-cols-2 w-full border border-blue-500">`
        projectList.forEach((e, i) => {
            proj += `
                    <div class="border border-red-500 text-center mx-auto">
                        <span>${e.name}</span>
                        <a href="${e.url}">
                            <img src="img/open-folder.png" class="size-[210px]" src="${e.name}">
                        </a>
                    </div>
                `;
        });
        proj += `</div>`
    }

    uiuxList.forEach(x => {
        uiux += `
            <div class="border w-full h-60 border-red-500 p-2 
                flex flex-col items-center justify-center flex-shrink-0"> 
                
                <img src="${x.img}" alt="${x.name}" class="w-2/3 mb-2 max-h-3/5 object-contain"> 
                <p class="text-sm font-semibold opensanz text-center">${x.name}</p>
            </div>
        `;
    });

    mNav.innerHTML = Mnav;
    miniNavSec.innerHTML = MiniNav;
    wht.innerHTML = Ido;
    techIconsSec.innerHTML = techs;
    uiuxSec.innerHTML = uiux;
    projectSec.innerHTML = proj;

}