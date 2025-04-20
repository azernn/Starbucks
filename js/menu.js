const menuDesc = document.getElementById('menuDesc')
const menuDescRigh = document.getElementById('menuDescRigh')

let data = []

function fetchData() {
    fetch('http://localhost:3000/menus')
        .then(res => res.json())
        .then(info => {
            data.push(...info),
                show()

        }
        )
}
fetchData()

function show() {
    data.map(item => {
        menuDesc.innerHTML += `<p class="text-xl text-black">${item.name}</p>
         ${item.children.map(child => {
            return `<ul class=" text-[#00000094] font-medium">
                    <li onclick='showİtems("${child.id}")'><a href="" >${child.name}</a></li>
                </ul>`
        }
        ).join('')}
        `
        menuDescRigh.innerHTML += `
        <p class="font-bold text-3xl mb-6">Menu</p>
        <p class="font-bold text-2xl mb-6">${item.name}</p>
        <hr class="mb-8 border-t-[2px] border-[#0000001a] "/>
        <ul class="md:flex flex-wrap gap-4">
        ${item.children.map(elem => {

            return `<li onclick='showİtems("${elem.id}")' class="my-[15px] cursor-pointer flex w-full sm:w-[53%] md:w-[48%] text-center items-center gap-2">
                            <img src="${elem.categoryImageURL}" alt="photo" class="md:w-[148px] md:h-[145px] w-[110px] h-[110px] rounded-[50%] object-cover"/>
                            <span class="w-[140px] text-[13x] md:text-[19px]">${elem.name}</span>
                        </li>`
        }).join('')}
        `
    })

}


show()

function showİtems(cod) {
    let filterArr = []
    data.map(item => {
        item.children.map(elm => {
            if (elm.id == cod) {
                elm.children.map(arg => filterArr.push(arg))
            }
        })
    })

    menuDescRigh.innerHTML = ''
   
    filterArr.map(item => {
        menuDescRigh.innerHTML += `
                <h2 class="font-bold text-[19px] md:text-[24px] mt-10 pb-4">${item.name}</h2>
                <hr class="mb-8 border-t-[2px] border-[#0000001a]" />
       <div>
                <ul class="flex justify-center sm:justify-start flex-wrap gap-4 ">
                    ${item.products.map(elm => {
            return `
                                <li>
                                    <a href="#" class="my-[15px] cursor-pointer flex flex-col w-full  md:w-[195px] text-center items-center gap-4">
                                        <img src="${elm.imageURL}" alt="photo" class="md:w-[148px] md:h-[145px] w-[110px] h-[110px] rounded-[50%] object-cover"/>
                                        <span class="w-[175px] md:text-[19px]">${elm.name}</span>
                                    </a>
                                </li>
                            `}).join('')}
                </ul>
                </div>
            `
    })
    scrollTo({
        top: 0,
        behavior:'smooth'
    })
}