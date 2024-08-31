const loadPhone = async(searchText='13',isShowAll)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data
  // console.log(phones);
  displayPhone(phones,isShowAll);


}

const displayPhone =(phones,isShowAll) =>{
  // console.log(phones)


// 2: create a div
  const phoneContainer = document.getElementById('phone-container');

  // clear phone container cards before adding new card

  phoneContainer.textContent = '';

  // display show all button if there are more thin 12 phone

 
  const showAllContainer = document.getElementById('show all container');
  if(phones.length > 12 && !isShowAll){

    showAllContainer.classList.remove('hidden')

  }
  else{
    showAllContainer.classList.add('hidden');
  }
// console.log('is show all',isShowAll)
  //display only first 12 phone
  if(!isShowAll){
    phones = phones.slice(0,12);
  }

  phones.forEach(phone => {
    // console.log(phone)


    // 2: create a div
    const phonesCard = document.createElement('div');
    phonesCard.classList = `card bg-gray-100 p-4 shadow-xl`;
    //  3 : set inner html
    phonesCard.innerHTML = ` <figure>
                    <img
                      src="${phone.image}"
                      alt="Shoes" />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-center">
                      <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
                    </div>
                  </div>
                </div>    `;

    
                // 4 :   Append Child 


                phoneContainer.appendChild(phonesCard);

    
  });


  //hide loading spinner
  toggleLoadingSpinner(false);

}


// handle Show Detale
const handleShowDetail = async (id) =>{
  // console.log('clicked show detaile',id)
  //lode single phone data
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const phone = data.data;
  showPhoneDetails(phone);
}


const showPhoneDetails = (phone) =>{
  console.log(phone);
  const phoneName =document.getElementById('show_Details_phone_name');
  phoneName.innerText =phone.name;
const showDetailsContainer = document.getElementById('show_Details_Container');

showDetailsContainer.innerHTML = `
<img src="${phone.image}" alt="" />
<p><span>Storage:</span>${phone?.mainFeatures?.sensors

}

</p>
<p><span>GPS:</span>${phone?.others?.GPS   }}</p>




`



  //show the modal
  show_Details_modal.showModal()
}


//handle search button

const handleSharch = (isShowAll)=>{
  toggleLoadingSpinner(true);
 const searchField = document.getElementById('search-field');
 const searchText = searchField.value;
 console.log(searchText);
 loadPhone(searchText,isShowAll);
}

//handle search recap

// const searchField2 = () =>{
//   toggleLoadingSpinner (true);
//   const searchField =document.getElementById('search-field2');
//   const searchText = searchField.value;
//   loadPhone(searchText);


// }

const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');

if(isLoading){
  loadingSpinner.classList.remove('hidden')
}

else{
  loadingSpinner.classList.add('hidden');
}
}

//handle show all 

const handleShowAll = () =>{
  handleSharch(true) 
}



// loadPhone();