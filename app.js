let nextBtn=document.getElementById("next");
let PrevBtn=document.getElementById("prev");
let CategoryDropdown=document.getElementById("Category-dropdown");
let total=document.getElementById("total");
let GalleryMainDiv =document.getElementById("mainSection");


let categories=["cities","beaches","buildings"]
let cities=["karachi.webp","Jhelum.webp","Kamoke.webp","Lahore.webp","Abottabad.webp","Bahawalpur.webp","city-tile-WahhCannt.webp","DeraGhaziKhan.webp","islamabad.webp","sahiwal.webp"];
let buildings=["building1.jpg","building2.jpg","building3.webp","building4.jpg","building5.webp","building6.jpg","building7.jpg","building8.jpg","building9.jpg","building10.jpg"];
let beaches=["hawks-bay-beach-pakistan-tours.webp","images.jpg","images (2).jpg","images (3).jpg","images (4).jpg","images (5).jpg","images (6).jpg","images (7).jpg"];
let arrayImages=[];


let index=0;
let repeat=4;
let afterPrevious=false;
let isfirst=true;
let isfirstPrev=true;




categories.forEach( item => {
    CategoryDropdown.innerHTML+=`<option  class="p-2 hover:bg-gray-100 cursor-pointer" value="${item}">${item} </option> ` 
});


let showCategoryPictures=()=>{
    console.log(CategoryDropdown.value);
    arrayImages=[];
    index=0;
    repeat=4;
    afterPrevious=false;
    isfirst=true;
    isfirstPrev=true;
    GalleryMainDiv.innerHTML="";

    if (CategoryDropdown.value=="cities") {
        GalleryMainDiv.innerHTML=`
    <div id="citydiv" class=" w-full pl-4 my-12 flex  flex-col">        
      <h1 class="md:text-6xl text-4xl text-center font-bold  my-8 ">Cities</h1>
    <div  class="w-full px-2 gap-5 lg:flex hidden justify-center items-center overflow-hidden rounded-lg">

      <div class="w-1/4 hidden lg:flex">
              <button id="prev" class="prevBtn bg-black p-4 h-10 flex justify-center items-center rounded-full shadow">
                <i class="fa-solid fa-chevron-left text-teal-50"></i>
              </button>
    </div>
  
      <div id="imagescities" class="images w-full h-64 hidden lg:flex justify-center items-center gap-4 ">
          <img src="images/karachi.webp" class="w-1/3 h-80  object-cover  transition rounded-md hover:-translate-y-2"/>
          <img src="images/Jhelum.webp" class="w-1/3 h-80 object-cover  transition rounded-md hover:-translate-y-2" />
          <img src="images/Kamoke.webp" class="w-1/3 h-80 object-cover  transition rounded-md hover:-translate-y-2" />
          <img src="images/Lahore.webp" class="w-1/3 h-80 object-cover  transition  rounded-md hover:-translate-y-2" />
      </div>

      <div class="w-1/4 hidden lg:flex justify-end items-center">
          <button id="next" class="nextBtn bg-black p-4 h-10 flex justify-center items-center rounded-full shadow">
              <i class="fa-solid fa-chevron-right text-teal-50"></i>
          </button>

      </div>
 </div>
    </div>





<div  class="w-full h-full px-2 gap-2 lg:hidden flex justify-center flex-col md:flex-row items-center overflow-hidden rounded-lg">    
    <div  class="w-full h-full sm:h-60 sm:flex lg:hidden  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col sm:flex lg:hidden gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/karachi.webp" class="object-cover mb-4  w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/islamabad.webp" class="object-cover mb-4  w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full sm:flex lg:hidden xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Lahore.webp" class="object-cover mb-4  w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Multan.webp" class="object-cover mb-4  w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
    </div> 
   </div> 

   <div  class="w-full h-full sm:h-60 sm:flex lg:hidden  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col sm:flex lg:hidden gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Bahawalpur.webp" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/Abottabad.webp" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full sm:flex lg:hidden xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Faisalabad.webp" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Sialkot.webp" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
    </div> 
   </div> 

   <div  class="w-full h-full sm:h-60 sm:flex lg:hidden  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col sm:flex lg:hidden gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Sukkur.webp" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/Sargodha.webp" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full sm:flex lg:hidden xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Sadiqabad.webp" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Rawalpindi.webp" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
    </div> 
  </div> 

  </div>

   
        
    `
    }
    if (CategoryDropdown.value=="buildings") {
        GalleryMainDiv.innerHTML=`
         <div  class=" w-full  pl-4 my-12 flex  flex-col">        
      <h1 class="md:text-6xl text-4xl text-center font-bold  my-8 ">buildings</h1>
    <div  class="w-full px-2 gap-5 lg:flex hidden justify-center items-center overflow-hidden rounded-lg">

      <div class="w-1/4  hidden lg:flex">
              <button id="prev" class="prevBtnbuildings bg-black p-4 h-10 flex justify-center items-center rounded-full shadow">
                <i class="fa-solid fa-chevron-left text-teal-50"></i>
              </button>
    </div>
  
      <div id="imagesbuildings" class="images w-full h-64 hidden lg:flex justify-center items-center gap-4 ">
          <img src="images/building1.jpg" class="w-1/3 h-80  object-cover duration-300 hover:-translate-y-2"/>
          <img src="images/building2.jpg" class="w-1/3 h-80 object-cover duration-300 hover:-translate-y-2" />
          <img src="images/building3.webp" class="w-1/3 h-80 object-cover duration-300 hover:-translate-y-2" />
          <img src="images/building4.jpg" class="w-1/3 h-80 object-cover duration-300 hover:-translate-y-2" />
      </div>

      <div class="w-1/4  hidden lg:flex items-center justify-end">
          <button id="next" class="nextBtnbuildings bg-black p-4 h-10 flex justify-center items-center rounded-full shadow">
              <i class="fa-solid fa-chevron-right text-teal-50"></i>
          </button>

      </div>
    </div>
    </div>


    
<div  class="w-full h-full px-2 gap-2 lg:hidden flex justify-center flex-col md:flex-row items-center overflow-hidden rounded-lg">    
    <div  class="w-full h-full sm:h-60 sm:flex lg:hidden  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col sm:flex lg:hidden gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/building1.jpg" class="object-cover mb-4  w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/building2.jpg" class="object-cover mb-4  w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full sm:flex lg:hidden xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/building3.webp" class="object-cover mb-4  w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/building4.jpg" class="object-cover mb-4  w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
    </div> 
   </div> 

   <div  class="w-full h-full sm:h-60 sm:flex lg:hidden  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col sm:flex lg:hidden gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/building5.webp" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/building6.jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full sm:flex lg:hidden xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/building7.jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/building8.jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
    </div> 
   </div> 

   <div  class="w-full h-full sm:h-60 sm:flex lg:hidden  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col sm:flex lg:hidden gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/building9.jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/building10.jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full sm:flex lg:hidden xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/building11.jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/building12.jpeg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
    </div> 
  </div> 

  </div>
        
    `
    }
    if (CategoryDropdown.value=="beaches") {
        GalleryMainDiv.innerHTML=`
         <div  class=" w-full  pl-4 my-12 flex  flex-col">        
      <h1 class="text-4xl md:text-6xl text-center font-bold  my-8 ">beaches</h1>
    <div  class="w-full px-2 gap-5 lg:flex hidden justify-center items-center overflow-hidden rounded-lg">
      <div class="w-1/4  hidden lg:flex">
              <button id="prev" class="prevBtnbeaches bg-black p-4 h-10 flex justify-center items-center rounded-full shadow">
                <i class="fa-solid fa-chevron-left text-teal-50"></i>
              </button>
    </div>
  
      <div id="imagesbuildings" class="images w-full h-64 lg:flex hidden justify-center items-center gap-4 ">
          <img src="images/hawks-bay-beach-pakistan-tours.webp" class="w-1/3 h-80  object-cover duration-300 hover:-translate-y-2"/>
          <img src="images/images.jpg" class="w-1/3 h-80 object-cover duration-300 hover:-translate-y-2" />
          <img src="images/images (2).jpg" class="w-1/3 h-80 object-cover duration-300 hover:-translate-y-2" />
          <img src="images/images (3).jpg" class="w-1/3 h-80 object-cover duration-300 hover:-translate-y-2" />
      </div>

      <div class="w-1/4  hidden lg:flex items-center justify-end">
          <button id="next" class="nextBtnbeaches bg-black p-4 h-10 flex justify-center items-center rounded-full shadow">
              <i class="fa-solid fa-chevron-right text-teal-50"></i>
          </button>

      </div>

    </div>
    </div>





       
<div  class="w-full h-full px-2 gap-2 lg:hidden flex justify-center flex-col md:flex-row items-center overflow-hidden rounded-lg">    
    <div  class="w-full h-full sm:h-60 sm:flex lg:hidden  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col sm:flex lg:hidden gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/hawks-bay-beach-pakistan-tours.webp" class="object-cover mb-4  w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/images.jpg" class="object-cover mb-4  w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full sm:flex lg:hidden xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/images (2).jpg" class="object-cover mb-4  w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/images (3).jpg" class="object-cover mb-4  w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
    </div> 
   </div> 

   <div  class="w-full h-full sm:h-60 sm:flex lg:hidden  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col sm:flex lg:hidden gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/images (4).jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/images (5).jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full sm:flex lg:hidden xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/images (6).jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/images (7).jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
    </div> 
   </div> 

   <div  class="w-full h-full sm:h-60 sm:flex lg:hidden  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col sm:flex lg:hidden gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/images (8).jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/images (9).jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full sm:flex lg:hidden xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/images (10).jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/images (11).jpg" class="object-cover mb-4 w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
    </div> 
  </div> 

  </div>
        
    `
    }
    if (CategoryDropdown.value=="all") {
       GalleryMainDiv.innerHTML=`
          <h2 class="text-6xl text-center font-bold mb-16">Gallery</h2>

   <div  class="w-full border-t-4 h-full pl-4 pr-4 flex gap-4 flex-col">

   <div  class="w-full h-full sm:h-52 flex  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 sm:h-full md:h-full xl:flex-row sm:flex-col flex-col flex gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/karachi.webp" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/images (1).jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full flex xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/hawks-bay-beach-pakistan-tours.webp" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/images.jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 
   </div> 

   </div>

   <div  class="w-full xl:mt-4 sm:mt-56 mt-6 h-full pl-4 pr-4 flex gap-4 flex-col">
   <div  class="w-full h-full sm:h-52 flex justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col flex gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Bahawalpur.webp" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/building1.jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full flex xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Faisalabad.webp" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Sialkot.webp" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
    </div> 
   </div> 
   </div>


   <div  class="w-full xl:mt-4 sm:mt-60 mt-6   h-full pl-4 pr-4 flex gap-4 flex-col">
    <div  class="w-full h-full sm:h-60 flex  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
        <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col flex gap-2 ">
            <div class="w-full sm:w-full md:w-full h-full">
            <img src="images/building2.jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
            </div>

            <div class="w-full sm:w-full  md:w-full h-full">
            <img src="images/Sargodha.webp" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
            </div>
        </div> 

        <div class="w-full sm:w-1/2 h-full flex xl:flex-row sm:flex-col flex-col gap-2 ">
            <div class="w-full sm:w-full md:w-full h-full">
            <img src="images/images (8).jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
            </div>

            <div class="w-full sm:w-full md:w-full h-full">
            <img src="images/Rawalpindi.webp" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
            </div>
      </div> 
    </div> 
   </div>

   <div  class="w-full xl:mt-4 sm:mt-64 mt-6  h-full pl-4 pr-4 flex gap-4 flex-col">

   <div  class="w-full h-full sm:h-60 flex  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col flex gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Faisalabad.webp" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/images (3).jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full flex xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/sapat-beach-edited.jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/images (7).jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 
   </div> 

   <div  class="w-full h-full sm:h-60 flex xl:mt-4 sm:mt-60  justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col flex gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/building4.jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/building9.jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full flex xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Sukkur.webp" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/building5.webp" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
    </div> 
   </div> 

   <div  class="w-full h-full sm:h-60 flex xl:mt-4 sm:mt-64   justify-center items-center flex-col sm:flex-row xl:flex-row gap-2 ">
      <div class="w-full sm:w-1/2 h-full xl:flex-row sm:flex-col flex-col flex gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/Sialkot.webp" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full  md:w-full h-full">
          <img src="images/building6.jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
      </div> 

      <div class="w-full sm:w-1/2 h-full flex xl:flex-row sm:flex-col flex-col gap-2 ">
          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/images (5).jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>

          <div class="w-full sm:w-full md:w-full h-full">
          <img src="images/images (6).jpg" class="object-cover w-full h-full rounded-md hover:-translate-y-2 transition">
          </div>
    </div> 
   </div> 
   </div>
       `
    
     }
     
    
}
let imagesContainer;

// cities btn

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
    console.log(arrayImages);
    
        updateSrc();
        
    }


}else{
    index++;
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
    isfirstPrev=false;
    }
   
let updateSrc=()=>{

imagesContainer = document.getElementById("imagescities");

    if (!imagesContainer) {
        console.log("images container not found");
        return;
    }

    imagesContainer.innerHTML=""

   arrayImages.forEach(item => {
    imagesContainer.innerHTML+=`   
            <img id="galleryImg"  src="images/${item}" class="w-1/3 h-80  object-fit duration-300 hover:-translate-y-2" />
            `
 
  })


};
    
let prevPictures=()=>{ 
if(isfirstPrev){
    for (let i = index; i < repeat ; i++) {
        arrayImages.push(cities[i]);        
        index++;
    }

    console.log(arrayImages);
    
       arrayImages.splice(arrayImages.length-1,1);
       arrayImages.unshift(cities[cities.length-1]);
       updateSrc();
       isfirstPrev=false;
    }else{
        arrayImages.splice(arrayImages.length-1,1);
        let result=cities.indexOf(arrayImages[0]);
  
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



// buildings buttons
let buildingsimages;
let nextBuildingPictures=()=>{ 
    
if(isfirst){
    
    if (afterPrevious) {
         arrayImages.splice(0,1);
        let result=buildings.indexOf(arrayImages[arrayImages.length-1]);
        arrayImages.push(buildings[result+1]);
        afterPrevious=false;
    
    } else {
        for (let i = index; i < repeat ; i++) {
            arrayImages.push(buildings[i]);
            index++;
        }
        isfirst=false;
        console.log(arrayImages);
    
        repeat+=index;

        arrayImages.splice(0,1);
        arrayImages.push(buildings[index+1]);
    console.log(arrayImages);
    
        updatebuildingSrc();
        
    }


}else{
    index++;
    arrayImages.splice(0,1);
    if (buildings[index+1]) {
        arrayImages.push(buildings[index+1]);
        console.log(arrayImages);
    }else{
        index=0;
        arrayImages.push(buildings[index]);
        console.log(arrayImages);
    }
    updatebuildingSrc();

    }
    isfirstPrev=false;
    }
   
let updatebuildingSrc=()=>{

  buildingsimages = document.getElementById("imagesbuildings");

    if (!buildingsimages) {
        console.log("images container not found");
        return;
    }

    buildingsimages.innerHTML=""

   arrayImages.forEach(item => {
    buildingsimages.innerHTML+=`   
            <img id="galleryImg"  src="images/${item}" class="w-1/3 h-80  object-fit duration-300 hover:-translate-y-2" />
            `
 
  })


};
    
let prevBuildingPictures=()=>{ 
if(isfirstPrev){
    for (let i = index; i < repeat ; i++) {
        arrayImages.push(buildings[i]);        
        index++;
    }

    console.log(arrayImages);
    
       arrayImages.splice(arrayImages.length-1,1);
       arrayImages.unshift(buildings[buildings.length-1]);
       updatebuildingSrc();
       isfirstPrev=false;
    }else{
        arrayImages.splice(arrayImages.length-1,1);
        let result=buildings.indexOf(arrayImages[0]);
  
        if (result==0) {
            result=buildings.length-1
            arrayImages.unshift(buildings[result]);

            
        }else{
            arrayImages.unshift(buildings[result-1]);
        }
        updatebuildingSrc();

        console.log(arrayImages);
     
afterPrevious=true;

    }}


// beaches buttons

let beachesimages;
let nextbeachesPictures=()=>{ 
    
if(isfirst){
    
    if (afterPrevious) {
         arrayImages.splice(0,1);
        let result=beaches.indexOf(arrayImages[arrayImages.length-1]);
        arrayImages.push(beaches[result+1]);
        afterPrevious=false;
    
    } else {
        for (let i = index; i < repeat ; i++) {
            arrayImages.push(beaches[i]);
            index++;
        }
        isfirst=false;
        console.log(arrayImages);
    
        repeat+=index;

        arrayImages.splice(0,1);
        arrayImages.push(beaches[index+1]);
    console.log(arrayImages);
    
        updatebeachesSrc();
        
    }


}else{
    index++;
    arrayImages.splice(0,1);
    if (beaches[index+1]) {
        arrayImages.push(beaches[index+1]);
        console.log(arrayImages);
    }else{
        index=0;
        arrayImages.push(beaches[index]);
        console.log(arrayImages);
    }
    updatebeachesSrc();

    }
    isfirstPrev=false;
    }
   
let updatebeachesSrc=()=>{

  beachesimages = document.getElementById("imagesbuildings");

    if (!beachesimages) {
        console.log("images container not found");
        return;
    }

    beachesimages.innerHTML=""

   arrayImages.forEach(item => {
    beachesimages.innerHTML+=`   
            <img id="galleryImg"  src="images/${item}" class="w-1/3 h-80  object-fit duration-300 hover:-translate-y-2" />
            `
 
  })


};
    
let prevbeachesPictures=()=>{ 
if(isfirstPrev){
    for (let i = index; i < repeat ; i++) {
        arrayImages.push(beaches[i]);        
        index++;
    }

    console.log(arrayImages);
    
       arrayImages.splice(arrayImages.length-1,1);
       arrayImages.unshift(beaches[beaches.length-1]);
       updatebeachesSrc();
       isfirstPrev=false;
    }else{
        arrayImages.splice(arrayImages.length-1,1);
        let result=beaches.indexOf(arrayImages[0]);
  
        if (result==0) {
            result=beaches.length-1
            arrayImages.unshift(beaches[result]);

            
        }else{
            arrayImages.unshift(beaches[result-1]);
        }
        updatebeachesSrc();

        console.log(arrayImages);
     
afterPrevious=true;

    }}




CategoryDropdown.addEventListener("change",()=>{
    showCategoryPictures();
    
})


GalleryMainDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("nextBtn")) { 
      nextPictures();

    }
    if (event.target.classList.contains("prevBtn")) {
      prevPictures();
    }
    if (event.target.classList.contains("prevBtnbuildings")) {
        prevBuildingPictures();
    }
    if (event.target.classList.contains("nextBtnbuildings")) {
       nextBuildingPictures();

    }
    if (event.target.classList.contains("prevBtnbeaches")) {
        nextbeachesPictures();
    }
    if (event.target.classList.contains("nextBtnbeaches")) {
       prevbeachesPictures();

    }
});