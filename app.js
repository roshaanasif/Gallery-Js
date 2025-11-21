let imagesContainer=document.getElementById("images");
let nextBtn=document.getElementById("next");
let PrevBtn=document.getElementById("prev");
let galleryImg=document.getElementById("galleryImg")
let createBtn=document.getElementById("Create");
let addBtn=document.getElementById("add"); 
let inputCategory=document.getElementById("inputCategory"); 
let CategoryDropdown=document.getElementById("Category-dropdown");
let total=document.getElementById("total");
// let images4=document.getElementById("images")
let imagesDiv=document.getElementById("imagesmain")
let mainSection=document.getElementById("mainSection")

let categories=["cities","beaches","buildings"]
let cities=["karachi.webp","Jhelum.webp","Kamoke.webp","Lahore.webp","Abottabad.webp","Bahawalpur.webp","city-tile-WahhCannt.webp","DeraGhaziKhan.webp","islamabad.webp"];
let arrayImages=[];
let index=0;
let repeat=4;
let afterPrevious=false;
let isfirst=true;

// let categoriesTotal=0;


categories.forEach( item => {
    CategoryDropdown.innerHTML+=`<option  class="p-2 hover:bg-gray-100 cursor-pointer" value="${item}">${item} </option> ` 
    // categoriesTotal++;
});


let showCategoryPictures=()=>{
    console.log(CategoryDropdown.value);

    if (CategoryDropdown.value=="cities") {
      mainSection.innerHTML="";

      mainSection.innerHTML=` <div class="w-full border-t-4  pl-4 flex flex-col">
         
        <h1 class="text-6xl font-bold  my-8 text-center">${CategoryDropdown.value}</h1>
      <div id="imagesmain" class="w-full px-2 gap-5 flex justify-center items-center overflow-hidden rounded-lg">
           
           </div>
      </div>
          
     
    </div>
`
// let count=0
    for (let i = 0; i < cities.length; i++) {
            imagesDiv.innerHTML+=`
              <div id="images" class="w-full h-64 flex justify-center items-center gap-4 ">
              <img id="galleryImg"  src="images/${cities[i]}" class="w-1/3 h-80 object-fit duration-300 hover:-translate-y-2" />
              <img id="galleryImg"  src="images/${cities[i++]}" class="w-1/3 h-80 object-fit duration-300 hover:-translate-y-2" />
              <img id="galleryImg"  src="images/${cities[i+2]}" class="w-1/3 h-80 object-fit duration-300 hover:-translate-y-2" />
              <img id="galleryImg"  src="images/${cities[i+3]}" class="w-1/3 h-80 object-fit duration-300 hover:-translate-y-2" />
             </div>
            `
            i+=4;
        }
    }  
                    

                
    
                
      

    }
    
// }  



let create=()=>{
  createBtn.classList.toggle("hidden");
  addBtn.classList.toggle("hidden");
  inputCategory.classList.toggle("hidden");
}

let addCategory=()=>{
    console.log("yes");
    createBtn.classList.toggle("hidden");
    addBtn.classList.toggle("hidden");
    inputCategory.classList.toggle("hidden");
}
let nextPictures=()=>{ 
    
if(isfirst){
    
    if (afterPrevious) {
         arrayImages.splice(0,1);
        let result=cities.indexOf(arrayImages[arrayImages.length-1]);
        arrayImages.push(cities[result+1]);
        afterPrevious=false;
    
    } else {
        for (let i = index; i < repeat ; i++) {
            arrayImages.push(cities[i]);
            index++;
        }
        isfirst=false;
        console.log(arrayImages);
    
        repeat+=index;
        arrayImages.splice(0,1);
        arrayImages.push(cities[index+1]);
    
        updateSrc();
        
    }


}else{
    index++;
    // console.log(index);
    arrayImages.splice(0,1);
    if (cities[index+1]) {
        arrayImages.push(cities[index+1]);
        console.log(arrayImages);
    }else{
        index=0;
        arrayImages.push(cities[index]);
        console.log(arrayImages);
    }
    updateSrc();

    }
    }

    
    
let updateSrc=()=>{
    imagesContainer.innerHTML=""
    
    arrayImages.forEach(item => {
        //  console.log(item);
        imagesContainer.innerHTML+=`   
             <img id="galleryImg"  src="images/${item}" class="w-1/3 h-80  object-fit duration-300 hover:-translate-y-2" />
             `
     });
}
  

let isfirstPrev=true;
let prevPictures=()=>{ 
  console.log(arrayImages);
    
    
if(isfirstPrev){
    for (let i = index; i < repeat ; i++) {
        arrayImages.push(images[i]);
        index++;
    }
    
       arrayImages.splice(arrayImages.length-1,1);
       arrayImages.unshift(images[images.length-1]);
       updateSrc();
       console.log(arrayImages);
       isfirstPrev=false;
    }else{
        // console.log(index);
        // console.log(repeat);
        
        console.log(index);
        arrayImages.splice(arrayImages.length-1,1);
        let result=cities.indexOf(arrayImages[0]);
        console.log(arrayImages);
        // console.log(result);
        
        if (result==0) {
            result=cities.length-1
            arrayImages.unshift(cities[result]);

            
        }else{
            arrayImages.unshift(cities[result-1]);
        }
        updateSrc();

        console.log(arrayImages);
     
afterPrevious=true;
    }}

nextBtn.addEventListener("click",()=>{
    nextPictures();
    
})
PrevBtn.addEventListener("click",()=>{
    prevPictures();
    
})
createBtn.addEventListener("click",()=>{
    create();
    
})
addBtn.addEventListener("click",()=>{
    addCategory();
    
})
CategoryDropdown.addEventListener("change",()=>{
    showCategoryPictures();
    
})
