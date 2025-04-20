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
                    <li><a href="" >${child.name}</a></li>
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

            return `<li onclick='showProducts("${elem.id}")' class="my-[15px] cursor-pointer flex w-full sm:w-[53%] md:w-[48%] text-center items-center gap-2">
                            <img src="${elem.categoryImageURL}" alt="photo" class="md:w-[148px] md:h-[145px] w-[110px] h-[110px] rounded-[50%] object-cover"/>
                            <span class="w-[140px] text-[13x] md:text-[19px]">${elem.name}</span>
                        </li>`
        }).join('')}
        `
    })

}

// function productItem(arg1, arg) {
//     let filtred = data.filter(item => item.displayOrder == arg1);
//     let matchedData = filtred[0].children.filter(item => item.name == arg);
//     menuDescRigh.innerHTML = '';
    
//     console.log(matchedData);
//     menuDescRigh.innerHTML+=` <p class="text-[#00000094] font-medium mb-5">Menu/ <span class="font-semibold text-lg">${matchedData.name}</span></p>
//                     <p class="font-bold text-3xl mb-9"></p>`
//     let output = `<ul class="md:flex flex-wrap gap-4">`;
//     matchedData[0].children.forEach(elem => {
//         elem.products.forEach(prod => {
//             output+= `

//                 <ul class="md:flex flex-wrap gap-4">
//                     <li class="my-[15px] cursor-pointer flex w-full sm:w-[53%] md:w-[48%] text-center items-center gap-2">
//                         <img src="${prod.imageURL}" alt="photo" class="md:w-[148px] md:h-[145px] w-[110px] h-[110px] rounded-[50%] object-cover"/>
//                         <span class="w-[140px] text-[15px] md:text-[19px]">${prod.name}</span>
//                     </li>
//                 <ul/>
//                 `;
//         });
//     });
//     // menuDescRigh.innerHTML+=`
//     //      <p class="text-[#00000094] font-medium mb-5">Menu/ <span class="font-semibold text-lg">${matchedData.name}</span></p>
//     //      <p class="font-bold text-3xl mb-9"></p>
//     //      ${matchedData[0].children.forEach(elem => {
//     //         elem.products.forEach(prod=>{
//     //             // console.log(prod.name)
                
//     //             return `<ul class="md:flex flex-wrap gap-4">
//     //                 <li class="my-[15px] cursor-pointer flex w-full sm:w-[53%] md:w-[48%] text-center items-center gap-2">
//     //                  <img src="${prod.imageURL}" alt="photo" class="md:w-[148px] md:h-[145px] w-[110px] h-[110px] rounded-[50%] object-cover"/>
//     //                  <span class="w-[140px] text-[13px] md:text-[19px]">${prod.name}</span>
//     //                  </li>
//     //             <ul/>`
//     //         })
//     //      })}
//     // `
//     output += `</ul>`;
//     menuDescRigh.innerHTML = output;
// }

show()

function showProducts(cod) {
    let productsArr = []
    data.map(item => {
        item.children.map(elm => {
            if (elm.id == cod) {
                elm.children.map(arg => productsArr.push(arg))
            }
        })
    })

    menuDescRigh.innerHTML = ''
   
    productsArr.map(item => {
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
}
