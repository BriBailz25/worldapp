const countryDetails = document.getElementById("country-details");

const countryDetailsClicked = async (e) => {
    const countryId = e.target.id;
    console.log(countryId);
}
    countryDetails.addEventListener("click", countryDetailsClicked);
