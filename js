function resetForm(theForm) {
  /* reset profession */
  theForm.profession.options[0] = new Option("Please select Profession", "");
  for (var i=0; i<profession.length; i++) {
    theForm.profession.options[i+1] = new Option(profession[i], profession[i]);
  }
  theForm.profession.options[0].selected = true;
  /* reset subProf */
  theForm.profession.options[0] = new Option("Please select a Sub Profession", "");
  theForm.profession.options[0].selected = true;
}
 
function updateProfession(theForm) {
  var job = theForm.profession.options[theForm.profession.options.selectedIndex].value;
  var newJob = subProf[job];
  theForm.subProf.options.length = 0;
  theForm.subProf.options[0] = new Option("Please select a Sub Profession", "");
  for (var i=0; i<newJob.length; i++) {
    theForm.subProf.options[i+1] = new Option(newJob[i], newJob[i]);
  }
  theForm.subProf.options[0].selected = true;
}

	//Create new array with list of professions

	var profession = new Array("IT/Computer Contractors", "Engineering Contractors", "Construction Contractors", "Interim Managers", "Management Consultants", "New Media & Creative Consultants", "Social Workers", "Finance Professionals", "Legal Professions", "Forensic Practitioners and Experts", "Photographers", "NRAC Members");

	//Create new array of sub professions based on what the use selects above

	var subProf = new Array();

	subProf["IT/Computer Contractors"] = new Array("Computer Programmers", "Analyst Programmers", "Design Engineers", "CAD/CAE Engineers", "Chief Executive Officer", "Human Resources Director", "Business Analyst", "Business Consultants", "Graphic Designers", "Media Consultancy", "Project Managers / Directors", "Business Analysts", "System Architects", "Network Communication Consultants", "Telecomms Consultants", "Website Designers", "Analysts", "Quality Management", "Security Consultants", "Change Management", "CRM Systems", "Hardware Consultants", "System Designers", "Trainers", "PC/Network Support Consultants", "Project Support Consultants", "Software Consultants", "Database Consultants", "Programme Managers", "System Testers", "IT Hardware and/or Software Procurement Consultant", "Analyst Programmers", "Design Engineers");
	subProf["Engineering Contractors"] = new Array("Design Enginneers","CAD/CAE Engineers", "Draughtsman", "Project Managers", "Test Engineers", "Engineering Consultants", "Aircraft Engineers", "Oil/Gas Engineer", "Mechanical Design Engineers", "Chemical Process Engineers", "Commissioning Engineers", "Control Engineers", "Field Engineers", "Health &amp; Safety Engineers", "Transport Engineers", "Energy Assessors (Accredited - Excluding Level 5)");
	subProf["Construction Contractors"] = new Array("Assistant Site Managers", "Building Site Management", "Construction Manager", "Contracts Manager", "Document Control", "Fire Safety Audits", "Health & Safety COnsultants", "Maintenance Managers", "Operations Managers", "Projects Managers", "Site Engineers", "Site Managers", "Structural Engineers", "Techincal Engineers", "Electrical Engineers", "Estimators", "Planning Engineers", "Highway Engineers");
	subProf["Interim Managers"] = new Array("Chief Executive Office", "Human Resources Director", "Financial Director", "Procurement Director", "Estates/Facilities Director", "Finance & Accounting" , "Sales/Marketing & PR", "Personnel Management & Selection", "Company Development & Planning" , "Procurement", "Operations", "Quality Systems", "Productions", "Quality Systems", "Production", "Distribution", "Change Management", "Public Services Admin", "Training", "Megers & Acquisitions", "Business Process Re-Engineering");
	subProf["Management Consultants"] = new Array("Buyer", "Business Continuity Management Consultant", "Compliance Co-Ordinator", "Compliance Inspector", "Data Analyst", "Finance & Accounting", "Sales/Marketing & PR", "Personnel Management & Selection", "Company Development & Planning", "Health & Safety", "Procurement", "Operations", "Quality Systems", "Production", "Distribution", "Change Management", "Public Services Admin", "Training", "Mergers & Acquisition", "Business Process Re-Engineering", "Management Consultancy", "Management Training", "Legal Training", "Business Analyst", "Project Management", "Higher Eduction Consultant", "Tenant Verification", "Chartered Building Consultancy", "Careers Adisory Service", "Counseling Serivce", "Wildlife Consultant", "Public Relations Consultant", "Marketing Consultant", "Company Search Agent", "Coporate Identity Consultants", "Export Consultant", "Food Industry Consultant", "Forestry Consultant", "Fuel Efficiency Consultant", "Quality Assurance Consultant", "Town Pla	nner", "Traffic & Transport Consultant", "Tourism Consultant", "Mediator", "Property", "Management", "Fundraising Consultant");
	subProf["New Media & Creative Consultants"] = new Array("Graphic Designers", "Media Consultancy", "New Media", "Copy Writers", "Editing", "Animation", "Interior Design", "Artists", "Music Teachers");
	subProf["Social Workers"] = new Array("Adult Care", "Children & Families", "Drugs & Alcohol", "Mental Health", "Care of Older People", "Probation", "Youth Offering", "Care Managers", "Occupational Therapy");
	subProf["Finance Professionals"] = new Array("Analysts", "Auditors", "CFO's", "Tax", "Credit Controllers", "Financial Controllers", "Payroll", "Risk", "Compliance");
	subProf["Legal Professions"] = new Array("Legal Executives", "Paralegal (only working for non-Law Company)", "Legal Secretaries", "Legal Skills", "Trainers", "McKenzie", "Friends", "Will Writers");
	subProf["Forensic Practitioners and Experts"] = new Array("Accountancy", "Anthropology", "Archeology", "Computers", "Drugs", "Expert Witness", "Fingerprint Development/Examination", "Fire Scene Investigation", "Firearms", "Human Contact Trace", "Imaging/Imagin Evaluation", "Incident Evaluation", "Marks", "Nursing", "Odontology", "Particulars & Other Traces", "Podiatry", "Question Documents", "Road Transport Investigation", "Scene Examination", "Telecoms", "Toxicology", "Veterinary Science");
	subProf["Photographers"] = new Array("Wedding Photographers", "Portrait Photography", "Fashion Photographers", "Corporate & Event Photographers", "Freelance Investigative Photographers");
	subProf["NRAC Members"] = new Array("Access Consultants");


 //Create pricing arrays for PI section, the value represents the level of cover chosen
 var professionalIndemnity = new Array();
 professionalIndemnity["100k"]=90;
 professionalIndemnity["200k"]=120;
 professionalIndemnity["500k"]=150;
 professionalIndemnity["1000k"]=180;
 professionalIndemnity["2000k"]=220; 
 
 //Set up an array for turnover premium 
 //The keys represent the estimated company turnover
 //The value represents the premium per turnover amount
 
 var turnoverValue = new Array();
 turnoverValue["0-50"]=25;
 turnoverValue["50-100"]=45;
 turnoverValue["100-150"]=60;
 turnoverValue["150-200"]=70;
 turnoverValue["200-250"]=80;
 turnoverValue["250-300"]=90;
 turnoverValue["300-350"]=100;
 turnoverValue["350-400"]=110;
 turnoverValue["400-450"]=120; 
 turnoverValue["450-500"]=130; 

 
//Set up array for employees premium 
 //This array currently not in use, but may be used for future rating. 
 
 var employees = new Array();
 employees["0-5"]=25;
 employees["5-25"]=45;
 employees["25-100"]=60;
 employees["100-500"]=70;
 employees["over500"]=80;
	

//This function finds the Professional Indemnity premium based on the 
//drop down selection
function getPiCost()
{
    var piCost=0;
    //Get a reference to the form id="myForm"
    var theForm = document.forms["myForm"];
    //Get a reference to the selected id="piPrice"
     var selectedPiPrice = theForm.elements["piPrice"];
     
    //set Pi Price equal to value user chose
   piCost = professionalIndemnity[selectedPiPrice.value];

    //finally we return piCost
    return piCost;
}

//This function finds the Turnover premium based on the 
//drop down selection
function getTurnoverCost()
{
    var turnoverCost=0;
    //Get a reference to the form id="myForm"
    var theForm = document.forms["myForm"];
    //Get a reference to the selected id="turnover"
     var selectedTurnover = theForm.elements["turnover"];
     
    //set Turnover Price equal to value user chose
   turnoverCost = turnoverValue[selectedTurnover.value];

    //finally we return turnoverCost
    return turnoverCost;
}
 
	 

        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var premium = getPiCost() + getTurnoverCost();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Premium $"+premium;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}



function totalPiCost()
    {
	var totalPiCost = getTurnoverCost() + getPiCost();	
	return totalPiCost;
    }
 



function getTotal()
{
    //Get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var calcPrice = parseInt(document.getElementById('patravelcost').value) + parseInt(document.getElementById('businesscost').value) + parseInt(document.getElementById('cost').value);
 
    //display the result
    document.getElementById('totalPrice').innerHTML = "Total Premium €"+calcPrice.toFixed(2);

 
}


function loadprice()
{
//load the minumim prices for each section to produce a basic quote

getTurnoverCost()
getPiCost()
calculateTotal()
}







