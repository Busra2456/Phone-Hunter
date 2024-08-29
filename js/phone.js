const loadPhone = async(searchText)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data
  // console.log(phones);
  displayPhone(phones);


}

const displayPhone = phones =>{
  // console.log(phones)


// 2: create a div
  const phoneContainer = document.getElementById('phone-container');

  // clear phone container cards before adding new card

  phoneContainer.textContent = '';

  // display show all button if there are more thin 12 phone

 
  const showAllContainer = document.getElementById('show all container');
  if(phones.length > 12){

    showAllContainer.classList.remove('hidden')

  }
  else{
    showAllContainer.classList.add('hidden');
  }

  //display only first 12 phone
  phones = phones.slice(0,12);

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
                    <div class="card-actions justify-end">
                      <button class="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>    `;

    
                // 4 :   Append Child 


                phoneContainer.appendChild(phonesCard);

    
  });


  //hide loading spinner
  toggleLoadingSpinner(false);

}


//handle search button

const handleSharch = ()=>{
  toggleLoadingSpinner(true);
 const searchField = document.getElementById('search-field');
 const searchText = searchField.value;
 console.log(searchText);
 loadPhone(searchText);
}

//handle search recap

const searchField2 = () =>{
  toggleLoadingSpinner (true);
  const searchField =document.getElementById('search-field2');
  const searchText = searchField.value;
  loadPhone(searchText);


}

const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');

if(isLoading){
  loadingSpinner.classList.remove('hidden')
}

else{
  loadingSpinner.classList.add('hidden');
}
}





// loadPhone();