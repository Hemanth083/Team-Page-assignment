
const topInstitutions = [
    {
        name: "Massachusetts Institute of Technology (MIT)",
        country: "United States"
    },
    {
        name: "Harvard University",
        country: "United States"
    },
    {
        name: "Stanford University",
        country: "United States"
    },
    {
        name: "California Institute of Technology (Caltech)",
        country: "United States"
    },
    {
        name: "Oxford University",
        country: "United Kingdom"
    },
    {
        name: "Cambridge University",
        country: "United Kingdom"
    },
    {
        name: "ETH Zurich",
        country: "Switzerland"
    },
    {
        name: "University of Chicago",
        country: "United States"
    },
    {
        name: "Princeton University",
        country: "United States"
    },
    {
        name: "Yale University",
        country: "United States"
    },
    {
        name: "Imperial College London",
        country: "United Kingdom"
    },
    {
        name: "University of California, Berkeley (UC Berkeley)",
        country: "United States"
    },
    {
        name: "University of California, Los Angeles (UCLA)",
        country: "United States"
    },
    {
        name: "National University of Singapore (NUS)",
        country: "Singapore"
    },
    {
        name: "Tsinghua University",
        country: "China"
    },
    {
        name: "Peking University",
        country: "China"
    },
    {
        name: "Tokyo University",
        country: "Japan"
    },
    {
        name: "Sorbonne University",
        country: "France"
    },
    {
        name: "Swiss Federal Institute of Technology Lausanne (EPFL)",
        country: "Switzerland"
    },
    {
        name: "University of Toronto",
        country: "Canada"
    }
];

let Institutions = document.getElementById("institutions");
let Body = document.body;
let Width = window.innerWidth;
let Hight = window.innerHeight;
Body.style.width = Width + "px";
Body.style.Hight = Hight + "px";


for (let i in topInstitutions) {
    let institutionDiv = document.createElement('div');
    institutionDiv.classList.add('institution');
    let paragraph = document.createElement('p');
    paragraph.classList.add('institution-text');
    paragraph.textContent = `${topInstitutions[i].name}`;
    console.log(`${topInstitutions[i].name}`);
    institutionDiv.appendChild(paragraph);
    Institutions.appendChild(institutionDiv);
}

const detailOfMendors = [
    {
        "name": "Dr. Emily Anderson",
        "affiliation": "Harvard University"
    },
    {
        "name": "Professor Michael Patel",
        "affiliation": "Stanford University"
    },
    {
        "name": "Dr. Sophia Chen",
        "affiliation": "Massachusetts Institute of Technology (MIT)"
    },
    {
        "name": "Professor David Kim",
        "affiliation": "Caltech (California Institute of Technology)"
    },
    {
        "name": "Dr. Olivia Johnson",
        "affiliation": "Oxford University"
    },
    {
        "name": "Professor Alexander Lee",
        "affiliation": "Cambridge University"
    },
    {
        "name": "Dr. Isabella Garcia",
        "affiliation": "ETH Zurich (Swiss Federal Institute of Technology)"
    },
    {
        "name": "Professor Benjamin Wang",
        "affiliation": "University of Tokyo"
    },
    {
        "name": "Dr. Amelia Smith",
        "affiliation": "Imperial College London"
    },
    {
        "name": "Professor Lucas Martinez",
        "affiliation": "University of California, Berkeley"
    },
    {
        "name": "Dr. Rebecca Murphy",
        "affiliation": "Princeton University"
    },
    {
        "name": "Professor Samuel Li",
        "affiliation": "University of Chicago"
    }
]
const ListOfMentor = document.getElementById('ListOfMentor');

for (let i in detailOfMendors) {
    let user = document.createElement('img');
    user.classList.add("user-img")
    user.src = "https://cdn-icons-png.flaticon.com/128/1144/1144760.png";

    let Mendor = document.createElement('div');
    Mendor.classList.add('Mendor');
    let paragraph1 = document.createElement('p');
    paragraph1.classList.add('Mendor-name');
    let paragraph2 = document.createElement('p');
    paragraph2.classList.add('institution-name');

    paragraph1.textContent = `${detailOfMendors[i].name}`;
    console.log(`${topInstitutions[i].name}`);
    paragraph2.textContent = `${detailOfMendors[i].affiliation}`;
    console.log(`${topInstitutions[i].affiliation}`);

    Mendor.appendChild(user);
    Mendor.appendChild(paragraph1);
    Mendor.appendChild(paragraph2);

    ListOfMentor.appendChild(Mendor);
}

