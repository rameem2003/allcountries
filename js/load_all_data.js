const allcountry = [
    {
        countryName : "Afganistan",
        flagImg : "afghanistan.jpg",
        fullName : " Islamic Republic of Afghanistan",
        area : "652,000 sq km",
        capital : "Kabul",
        currency : "Afghani (AFN)",
        languages : "Dari (Afghan Persian)",
        religion : "Islam",
        independence : "19 August 1919",
        leader: "Ashraf Ghani",
        antheme: "afganistan.wav",
    },

    {
        countryName : "Australia",
        flagImg : "australia.png",
        fullName : "Commonwealth of Australia",
        area : "7.7 million sq km",
        capital : "Canberra",
        currency : "Australian Dollar (AUD)",
        languages : "English",
        religion : "Roman Catholic",
        independence : "1 January 1901",
        leader: "Hon Anthony Albanese",
        antheme: "australia.mp3",
    },

    {
        countryName : "Bangladesh",
        flagImg : "bangladesh.jpg",
        fullName : "People Republic of Bangladesh",
        area : "1,47,570 sq km",
        capital : "Dhaka",
        currency : "Taka (BDT)",
        languages : "Bangla",
        religion : "Islam",
        independence : "16 December 1971",
        leader: "Sheikh Hasina",
        antheme: "bangladesh.mp3",
    },

    {
        countryName : "England",
        flagImg : "england.png",
        fullName : "United Kingdom of Great Britain and Northern Ireland",
        area : "243,000 sq km",
        capital : "London",
        currency : "British Pound (GBP)",
        languages : "English",
        religion : "Christian",
        independence : "",
        leader: "Rishi Sunak",
        antheme: "england.mp3",
    },

    {
        countryName : "India",
        flagImg : "india.png",
        fullName : "Republic of India",
        area : "3.3 million sq km",
        capital : "Delhi",
        currency : "Indian Rupee (INR)",
        languages : "Hindi",
        religion : "Hindu",
        independence : "15 August 1947",
        leader: "Narendra Modi",
        antheme: "india.mp3",
    },


    {
        countryName : "New Zealand",
        flagImg : "newzealand.jpg",
        fullName : "New Zealand - Aotearoa",
        area : "270,467 sq km",
        capital : "Wellington",
        currency : "New Zealand Dollar (NZD)",
        languages : "English, Maori",
        religion : "Christian",
        independence : "1907",
        leader: "Jacinda Ardern",
        antheme: "newzealand.mp3",
    },

    {
        countryName : "Pakistan",
        flagImg : "pakistan.png",
        fullName : "Islamic Republic of Pakistan",
        area : "796,000 sq km",
        capital : "Islamabad",
        currency : "Pakistani Rupee (PKR)",
        languages : "Urdu (national)",
        religion : "Islam",
        independence : "14 August 1947",
        leader: "Shehbaz Sharif",
        antheme: "pakistan.mp3",
    },


    {
        countryName : "South Africa",
        flagImg : "south_africa.png",
        fullName : "Republic of South Africa",
        area : "1.2 million sq km",
        capital : "Cape Town",
        currency : "South African Rand (ZAR)",
        languages : "IsiZulu (Most popular)",
        religion : "Christian",
        independence : "31 May 1910",
        leader: "Cyril Ramaphosa",
        antheme: "south_africa.mp3",
    },

    {
        countryName : "Srilanka",
        flagImg : "srilanka.png",
        fullName : "Socialist Republic of Sri Lanka",
        area : "65,610 sq km",
        capital : "Colombo",
        currency : "Sri Lanka Rupee (LKR)",
        languages : "Sinhala and Tamil (main)",
        religion : "Buddhism",
        independence : "4 February 1948",
        leader: "Gotabaya Rajapaksa",
        antheme: "srilanka.mp3",
    },


    {
        countryName : "West indies",
        flagImg : "westindies.png",
        fullName : "",
        area : "275,400 sq km",
        capital : "",
        currency : "Doller",
        languages : "English",
        religion : "Christian",
        independence : "",
        leader: "",
        antheme: "westindies.mp3",
    },

    {
        countryName : "Zimbabwe",
        flagImg : "zimbabwe.png",
        fullName : "Republic of Zimbabwe",
        area : "390,757 sq km",
        capital : "Harare",
        currency : "Zimbabwean Dollar (ZWD)",
        languages : "English",
        religion : "Christian",
        independence : "18 April 1980",
        leader: "Emmerson Mnangagwa",
        antheme: "zimbabwe.mp3",
    },

]


const country_list_container = document.getElementById("country_list");


const loadCountry = () => {
    allcountry.map(country => {
        const cardElement = document.createElement("section");
        cardElement.classList.add("country");
        cardElement.innerHTML = `
            <div class="country_img">
                <img src="./country_img/${country.flagImg}" alt="">
            </div>

            <h1 class="country_name">${country.countryName}</h1>

            <section id="country_des">
                <p class="full_name">Full name: ${country.fullName}</p>
                <table>
                    <tr>
                        <td><p>Area: ${country.area}</p></td>
                        <td><p>Capital: ${country.capital}</p></td>
                    </tr>

                    <tr>
                        <td><p>Currency: ${country.currency}</p></td>
                        <td><p>Languages: ${country.languages}</p></td>
                    </tr>

                    <tr>
                        <td><p>Religion: ${country.religion}</p></td>
                        <td><p>Independence: ${country.independence}</p></td>
                    </tr>

                    <tr>
                        <td><p>Leader: ${country.leader}</p></td>
                    </tr>
                </table>
            </section>

            <section>
                <audio id="afg" src="./country_national_antheme/${country.antheme}" controls></audio>
            </section>
        `;

        country_list_container.appendChild(cardElement);
    })
}


loadCountry();


