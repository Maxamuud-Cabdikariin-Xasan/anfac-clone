// var userBalance = 10;
var userNumber = 615962724;
var userBalance = 50;
showUSD$()
main()

function main(){
    //show user balance
    // alert(`Haraagagu waa $${userBalance}`);
    let codeNumber = prompt('Fadlan geli *127#');
    if (codeNumber == "*127#") {
        adeegaAnfac()
    }
    else if(codeNumber == null){
        
    }
    else if(codeNumber == ""){
        alert('Input required.Try again. ')
    }
    else{
        while (codeNumber != "*127#"){
            codeNumber =  prompt("Sorry, unknown command");
            if(codeNumber == ""){
                alert('Input required.Try again. ');
                break;
            }
            else if(codeNumber == null){
                 }
            else if(codeNumber == "*127#"){
                adeegaAnfac()
            }

        }
        
    }
}

function adeegaAnfac()
{
    let adeegOption = prompt("Fadlan dooro:\n1.Adeegga Anfac");
    if(adeegOption == ""){
        alert('Input required.Try again. ');
    }
    else if (adeegOption == "1")
    {
        anfacparts()
    }
     else if(adeegOption == null){
        
     }
    else{
        while (adeegOption != "1"){
            adeegOption =  prompt("Sorry, unknown command");
            if(adeegOption == ""){
                alert('Input required.Try again. ');
                break;
            }
            else if(codeNumber == null){
             }
            else if(adeegOption == "1"){
                anfacparts();
                break;
            }
        }
        
    }
}



function anfacparts()
{
    var anfacOptions = prompt(`1. Anfac Gudaha \n2. Anfac Gudaha iyo Dibadda \n3. Anfac dibadda 32 dal \n4. ANFAC SMS \n0. BAck`);
    checkAnfac()
    function checkAnfac()
{

    if (anfacOptions == "1"){
        anfacXirmoyin();
        
    }
    else if(anfacOptions == ""){
        alert('Input required.Try again. ');
    }
    else if(anfacOptions == null){
        
    }
        
    else if (anfacOptions == "2")
    {
        let xirmooyinkaAnfac = prompt(`Fadlan dooro xirmo\n1. Xirmo USD5\n2. Xirmo USD10\n3. Xirmo USD20\n4. Xirmo USD50\n0. Back`);
        xirmoanfac2Check();
        function xirmoanfac2Check()
        {
            if (xirmooyinkaAnfac == "1")
            {
                let permisionDialog = prompt(`Waxaad heleysaa:300 daqiiqo Wicitaan gudaha, 200SMS gudaha, 6daqiiqo Wicitaan dibadda,2SMS dibadda. Fadlan hubi isdiiwaangelintaada:\n1.Maya\n2.Haa`);
                if(permisionDialog == ""){
                    alert('Input required.Try again.');
                }
                else if (permisionDialog == 2 && userBalance >= 5){
                    userBalance -= 5;
                    alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
                }
                else if(permisionDialog == 2 && userBalance <5){
                   alert(`Haraaga xisaabtaada kuguma filna.`);
               }
                else if (permisionDialog == 2 && userBalance <=0){
                    alert(`Haraaga xisaabtaada kuguma filna.`);
                }
                else if(permisionDialog == "1"){
                    alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
                }
                else if(permisionDialog == null){
        
                    }
                else {
                    alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
                }
          }

          // xirmo 2
           else if (xirmooyinkaAnfac == "2")
            {
                let permisionDialog = prompt(`Waxaad heleysaa 600 Daqiiqo Gudaha,18 Daqiiqo Dibadda,200 sms gudaha, 5sms Dibadda. Fadlan hubi isdiiwaangelintaada:\n1.Maya\n2.Haa`);
                if(permisionDialog == ""){
                    alert('Input required.Try again.');
                }
                else if (permisionDialog == 2 && userBalance >= 10){
                    userBalance -= 10;
                    alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
                }
                else if(permisionDialog == 2 && userBalance <10){
                   alert(`Haraaga xisaabtaada kuguma filna.`);
               }
                else if (permisionDialog == 2 && userBalance <=0){
                    alert(`Haraaga xisaabtaada kuguma filna.`);
                }
                else if(permisionDialog == "1"){
                    alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
                }
                else if(permisionDialog == null){
        
                }
                 
                
                else {
                    alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
                }

          }
          // xirmo3
           else if (xirmooyinkaAnfac == "3")
            {
                let permisionDialog = prompt(`Waxaad heleysaa 1300 Daqiiqo wicitaan Gudaha,,200 SMS gudaha,36 Daqiiqo wicitaan Dibadda 10SMS Dibadda. Fadlan hubi isdiiwaangelintaada:\n1.Maya\n2.Haa`);
                if(permisionDialog == ""){
                    alert('Input required.Try again. ')
                }
                else if (permisionDialog == 2 && userBalance >= 20){
                    userBalance -= 20;
                    alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
                }
                else if(permisionDialog == 2 && userBalance <20){
                   alert(`Haraaga xisaabtaada kuguma filna.`);
               }
                else if (permisionDialog == 2 && userBalance <=0){
                    alert(`Haraaga xisaabtaada kuguma filna.`);
                }
                else if(permisionDialog == "1"){
                    alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
                }
                else if(permisionDialog == null){
        
                }
                else {
                    alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
                }
          }
          // xirmo4
           else if (xirmooyinkaAnfac == "4")
            {
                let permisionDialog = prompt(`Waxaad heleysaa 3500 Daqiiqo wicitaan Gudaha,,200 SMS gudaha,90 Daqiiqo wicitaan Dibadda 10SMS Dibadda. Fadlan hubi isdiiwaangelintaada:\n1.Maya\n2.Haa`);
                if(permisionDialog == ""){
                    alert('Input required.Try again. ')
                }
                else if (permisionDialog == 2 && userBalance >= 50){
                    userBalance -= 50;
                    alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
                }
                else if(permisionDialog == 2 && userBalance <50){
                   alert(`Haraaga xisaabtaada kuguma filna.`);
               }
                else if (permisionDialog == 2 && userBalance <=0){
                    alert(`Haraaga xisaabtaada kuguma filna.`);
                }
                else if(permisionDialog == "1"){
                    alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
                }
                else if(permisionDialog == null){

                }
                else {
                    alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
                }
          }
          // back to anfac
            else if (xirmooyinkaAnfac == "0"){
            anfacparts();
            }
            else if(xirmooyinkaAnfac == ""){
                alert('Input Required.Try again. ');
                }
            else if(xirmooyinkaAnfac == null){
        
            }
            else{
                while(xirmooyinkaAnfac !='0' || xirmooyinkaAnfac !='1' || xirmooyinkaAnfac !='2' || xirmooyinkaAnfac !='3' || xirmooyinkaAnfac !='4' || xirmooyinkaAnfac !='0'){
                    xirmooyinkaAnfac = prompt("Sorry, unknown command"); 
                    if(xirmooyinkaAnfac == ""){
                        alert('Input Required.Try again. ');
                        break;
                        }
                   else if(xirmooyinkaAnfac== null){
    
                         }
                    else{
                        xirmoanfac2Check();
                        break;
                    }
                }
                
            }

        }
        


    }
    else if(anfacOptions == "3"){
        xirmo3Menu()
        function xirmo3Menu() {
            var xirmooyinkaAnfac = prompt(`Fadlan dooro xirmo\n1. Xirmo USD5\n2. Wadamada dibadda\n3. Xirmo USD10\n4. Xirmo USD20\n5. Xirmo USD50\n0. Back`);
            function xirmodibadaCheck() 
            {
                if (xirmooyinkaAnfac == "1")
                {
                    let permisionDialog = prompt(`Waxaad heleysaa 300 daqiiqo Dibadda. Fadlan iska hubi liiska wadamada iyo isdiiwaangelintaada:\n1.Maya\n2.Haa`);
                    if(permisionDialog == ""){
                        alert('Input required.Try again. ')
                    }
                    else if(permisionDialog== null){
        
                     }
                    else if (permisionDialog == 2 && userBalance >= 5){
                        userBalance -= 5;
                        alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
                    }
                    else if(permisionDialog == 2 && userBalance <5){
                       alert(`Haraaga xisaabtaada kuguma filna.`);
                   }
                    else if (permisionDialog == 2 && userBalance <=0){
                        alert(`Haraaga xisaabtaada kuguma filna.`);
                    }
                    else if(permisionDialog == "1"){
                        alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
                    }
                    else {
                        alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
                    }
              }
               else if(xirmooyinkaAnfac == ""){
                alert('Input required.Try again. ')
                }
              // xirmo 2
               else if (xirmooyinkaAnfac == "2")
                {
                    wadamo();
                    function wadamo()
                    {
                        let permisionDialog = prompt(`1. Wadamada qeybta 1aad\n2. Wadamada qeybta 2aad\n3. Wadamada qeybta 3aad\n4. Wadamada qeybta 4aad\n5. Wadamada qeybta 5aad\n0. Back Next:99`);
                        checkCountry()
                        function checkCountry(){
                            if(permisionDialog == "1"){
                                let country = prompt(`Canada\n USA\n india\n China\n Greece\n Ethiopia\n UAE\n 0.Back`);
                                if(country == ""){
                                    alert('Input required.Try again. ');  
                                }
                                else if(country == null){
        
                                }
                                else if(country == "0"){
                                    wadamo()
                                }
                                else if(country != undefined){
                                    while(country != "0"){
                                    country = prompt("sorry, unknown command");
                                    if(country == ""){
                                        alert('Input required.Try again. ');
                                        break;
                                    }
                                    else if(country == "0"){
                                        wadamo()
                                    }
                                }
                                }


                            
            
                            }
                            else if(permisionDialog == '99'){
                                permisionDialog = prompt('6. Wadamada qeybta 6aad\n0.Back Pre:88');
                                if(permisionDialog == '6'){
                                    checkCountry();
                                }

                                else if(permisionDialog == '0'){
                                    xirmo3Menu();
                                }
                                else if(permisionDialog == '88'){
                                    wadamo()
                                }
                                else if(permisionDialog == '6'){
                                    checkCountry();

                                }
                                else{
                                    checkCountry();
                                }
                                
                            }
                            else if(permisionDialog == ""){
                                alert('Input required.Try again. ')
                                }
                            else if(permisionDialog == null){
        
                            }

                            else if(permisionDialog == "2"){
                                let country = prompt(`Malaysia\n Holand\n Sweden\n Norway\n Kenya\n Pakistan\n 0.Back`);
                                if(country == ""){
                                    alert('Input required.Try again. ')
                                }
                                else if(country == "0"){
                                    wadamo()
                                }
                                else if(country == null){
        
                                }
                                else if(country != undefined){
                                    while(country != "0"){
                                        country = prompt("sorry, unknown command");
                                        if(country == ""){
                                            alert('Input required.Try again. ');
                                            break;
                                        }
                                        else if(country == "0"){
                                            wadamo();
                                            break;
                                        }
                                    }
                                }
                            }
        
                            else if(permisionDialog == "3"){
                                let country = prompt(`Turkey\n Saudi Arabia\n Switzerland\n Ireland\n Mexico\n 0.Back`);
                                if(country == ""){
                                    alert('Input required.Try again. ')
                                }
                                else if(country == "0"){
                                    wadamo()
                                }
                                else if(country == null){
        
                                }
                                else if(country != undefined) {
                                    while(country != "0"){
                                        country = prompt("sorry, unknown command");
                                        if(country == ""){
                                            alert('Input required.Try again. ');
                                            break;
                                        }
                                        else if(country == null){
        
                                        }
                                        else if(country == "0"){
                                            wadamo();
                                            break;
                                        }
                                    }
                                }
                            }
        
                            else if(permisionDialog == "4"){
                                let country = prompt(`Hungry\n Belgium\n France\n Spain\n Austria\n Moroco\n 0.Back`);
                                if(country == ""){
                                    alert('Input required.Try again. ')
                                }
                                else if(country == "0"){
                                    wadamo();
                                }
                                else if(country == null){
        
                                }
                                else if(country != undefined) {
                                    while(country != "0"){
                                        country = prompt("sorry, unknown command");
                                        if(country == ""){
                                            alert('Input required.Try again. ');
                                            break;
                                        }
                                        else if(country == null){
        
                                        }
                                        else if(country == "0"){
                                            wadamo();
                                            break;
                                        }
                                    }
                                }
                                
                            }
        
                            else if(permisionDialog == "5"){
                                let country = prompt(`Romania\n Kuwait\n Bangladesh\n Bulgaria\n Denmark\n UK\n 0.Back`);
                                if(country == ""){
                                    alert('Input required.Try again. ')
                                }
                                else if(country == "0"){
                                    wadamo()
                                }
                                else if(country == null){
        
                                }
                                else if(country != undefined){
                                    while(country != "0"){
                                        country = prompt("sorry, unknown command");
                                        if(country == ""){
                                            alert('Input required.Try again. ');
                                            break;
                                        }
                                        else if(country == null){
        
                                        }
                                        else if(country == "0"){
                                            wadamo();
                                            break;
                                        }
                                    }
                                }
                            }
        
                            else if(permisionDialog == "6")
                            {
                                let country = prompt(`Uganda\n Djabouti\n 0.Back`);
                                if(country == ""){
                                    alert('Input required.Try again. ')
                                }
                                else if(country == "0"){
                                    wadamo()
                                }
                                else if(country == null){
        
                                }
                                else if(country !=  undefined){
                                    while(country != "0"){
                                        country = prompt("sorry, unknown command");
                                        if(country == ""){
                                            alert('Input required.Try again. ');
                                            break;
                                        }
                                        else if(country == null){
        
                                        }
                                        else if(country == "0"){
                                            wadamo();
                                            break;
                                        }
                                    }
                                }
                            }
                            // else if(permisionDialog)
                            else if(permisionDialog == "0"){
                                xirmo3Menu()
    
                            }
                            else{
                                while(permisionDialog != '1' || permisionDialog != '2' || permisionDialog != '3' || permisionDialog != '4' || permisionDialog != '5' || permisionDialog != '6' || permisionDialog !='0')
                                {
                                    permisionDialog = prompt("sorry, unknown command");
                                    if(permisionDialog == ""){
                                        alert('Input required.Try again. ');
                                        break;
                                    }
                                    else if(permisionDialog == null){
        
                                    }
                                    else{
                                        checkCountry();
                                        break;
                                    }
                                    
                                }
                            }
                        }
                    }
              }
              // xirmo3
               else if (xirmooyinkaAnfac == "3")
                {
                    let permisionDialog = prompt(`Waxaad heleysaa 1300 Daqiiqo wicitaan Gudaha,,200 SMS gudaha,36 Daqiiqo wicitaan Dibadda 10SMS Dibadda. Fadlan hubi isdiiwaangelintaada:\n1.Maya\n2.Haa`);
                    if (permisionDialog == 2 && userBalance >= 10){
                        userBalance -= 10;
                        alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
                    }
                    else if(permisionDialog == ""){
                        alert('Input required.Try again. ')
                    }
                    else if(permisionDialog == 2 && userBalance <10){
                       alert(`Haraaga xisaabtaada kuguma filna.`);
                   }
                    else if (permisionDialog == 2 && userBalance <=0){
                        alert(`Haraaga xisaabtaada kuguma filna.`);
                    }
                    else if(permisionDialog == "1"){
                        alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
                    }
                    else if(permisionDialog == null){
        
                    }
                    else {
                        alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
                    }
              }
              // xirmo4
               else if (xirmooyinkaAnfac == "4")
                {
                    let permisionDialog = prompt(`Waxaad heleysaa 3500 Daqiiqo wicitaan Gudaha,,200 SMS gudaha,90 Daqiiqo wicitaan Dibadda 10SMS Dibadda. Fadlan hubi isdiiwaangelintaada:\n1.Maya\n2.Haa`);
                    if(permisionDialog == ""){
                        alert('Input required.Try again. ')
                    }
                    else if (permisionDialog == 2 && userBalance >= 20){
                        userBalance -= 20;
                        alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
                    }
                    else if(permisionDialog == null){
        
                    }
                    else if(permisionDialog == 2 && userBalance <20){
                       alert(`Haraaga xisaabtaada kuguma filna.`);
                   }
                    else if (permisionDialog == 2 && userBalance <=0){
                        alert(`Haraaga xisaabtaada kuguma filna.`);
                    }
                    else if(permisionDialog == "1"){
                        alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
                    }
                    else {
                        alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
                    }
              }
              
               else if (xirmooyinkaAnfac == "5")
                {
                    let permisionDialog = prompt(`Waxaad heleysaa 300 Daqiiqo Dibadda. Fadlan hubi isdiiwaangelintaada:\n1.Maya\n2.Haa`);
                    if(permisionDialog == ""){
                        alert('Input required.Try again. ')
                    }
                    else if(permisionDialog == null){
        
                    }
                    else if (permisionDialog == 2 && userBalance >= 50){
                        userBalance -= 50;
                        alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
                    }
                    else if(permisionDialog == 2 && userBalance <50){
                       alert(`Haraaga xisaabtaada kuguma filna.`);
                   }
                    else if (permisionDialog == 2 && userBalance <=0){
                        alert(`Haraaga xisaabtaada kuguma filna.`);
                    }
                    else if(permisionDialog == "1"){
                        alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
                    }
                    else {
                        alert("Waan kaxunahay, si khalad ah ayaad u gelisey.");
                    }
              }
              
              // back to anfac
              else if (xirmooyinkaAnfac == "0"){
                anfacparts()
               }
    
                else{
                    xirmooyinkaAnfac = Number(prompt("Sorry, unknown command"));
                    if(isNaN(xirmooyinkaAnfac == false)){
                        xirmoanfac2Check();                
                    }
                    else if(xirmooyinkaAnfac == null){
        
                    }
                    else{
                        while(isNaN(xirmooyinkaAnfac)){
                            xirmooyinkaAnfac = prompt("Sorry, unknown command");
                            if(xirmooyinkaAnfac == ""){
                                alert('Input required.Try again. ');
                                break;
                            }
                            else if(adeegOption == null){
                                
        
                            }
                            else{
                                xirmodibadaCheck();
                                break;
                            }
                        }
                    }
       
               }
    
            }
            xirmodibadaCheck()
        }



    }
    else if (anfacOptions == "0"){
        adeegaAnfac();
    }
    
    else if(anfacOptions == "4"){
        anfacsmsMenu();
        function anfacsmsMenu(){
            let xirmooyinkaAnfac = prompt(`Fadlan dooro xirmo:\n1. Xirmo 50 Cent Gudaha\n2. Xirmo USD1 Gudaha\n3. Xirmo USD1 Dibadda\n0.Back`);
            checkAnfacsms()
            function checkAnfacsms(){
                if(xirmooyinkaAnfac == '1') {
                    let permisionDialog = prompt(`Waxaad heleysaa 80 SMS Gudaha. fadlan hubi isdiiwaangelintaada: \n1. Maya\n2. Haa`);
                    if(permisionDialog == ""){
                        alert('Input required.Try again. ')
                    }
                    else if (permisionDialog == 2 && userBalance >= 0.50){
                        userBalance -= 0.50;
                        alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
                    }

                    else if(permisionDialog == 2 && userBalance <0.50){
                       alert(`Haraaga xisaabtaada kuguma filna.`);
                   }
                    else if (permisionDialog == 2 && userBalance <=0){
                        alert(`Haraaga xisaabtaada kuguma filna.`);
                    }
                    else if(permisionDialog == "1"){
                        alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
                    }
                    else if(permisionDialog == null){
        
                    }
                    
    
    
                }
    
                else if(xirmooyinkaAnfac == '2') {
                    let permisionDialog = prompt(`Waxaad heleysaa 200 SMS Gudaha. fadlan hubi isdiiwaangelintaada: \n1. Maya\n2. Haa`);
                    if(permisionDialog == ""){
                        alert('Input required.Try again. ')
                    }
                    else if (permisionDialog == 2 && userBalance >= 1){
                        userBalance -= 1;
                        alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
                    }
                    else if(permisionDialog == 2 && userBalance <1){
                       alert(`Haraaga xisaabtaada kuguma filna.`);
                   }
                    else if (permisionDialog == 2 && userBalance <=0){
                        alert(`Haraaga xisaabtaada kuguma filna.`);
                    }
                    else if(permisionDialog == "1"){
                        alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
                    }
                    else if(permisionDialog == null){
        
                    }
                    else {
                        alert("Waan kaxunahay, si khalad ah ayaad u gelisey.");
                    }
    
    
                }
                else if(xirmooyinkaAnfac == null){
        
                }
                else if(xirmooyinkaAnfac == '3') {
                    let permisionDialog = prompt(`Waxaad heleysaa 20 SMS Dibadda. fadlan hubi isdiiwaangelintaada: \n1. Maya\n2. Haa`);
                    if(permisionDialog == ""){
                        alert('Input required.Try again. ')
                    }
                    else if (permisionDialog == 2 && userBalance >= 1){
                        userBalance -= 1;
                        alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
                    }
                    else if(permisionDialog == 2 && userBalance <1){
                       alert(`Haraaga xisaabtaada kuguma filna.`);
                   }
                    else if (permisionDialog == 2 && userBalance <=0){
                        alert(`Haraaga xisaabtaada kuguma filna.`);
                    }
                    else if(permisionDialog == "1"){
                        alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
                    }
                    else if(permisionDialog == null){
        
                    }
                    else {
                        alert("Waan kaxunahay, si khalad ah ayaad u gelisey.");
                    }
    
    
                }
                else if(xirmooyinkaAnfac == ""){
                    alert('Input required.Try again. ');
                }
                else if(xirmooyinkaAnfac == "0") {
                    anfacparts()
                    
                }
    
                else{
                    while(xirmooyinkaAnfac != '1' || xirmooyinkaAnfac != '2' || xirmooyinkaAnfac != '3' || xirmooyinkaAnfac != '0'){
                        xirmooyinkaAnfac = prompt("Sorry, unknown command");
                        if(xirmooyinkaAnfac == ""){
                            alert('Input required.Try again.');
                            break;
                            }
                            else if(xirmooyinkaAnfac == null){
        
                            }
                            else{
                                checkAnfacsms();
                                break;

                            }
                         }
                    }
                    
                }

            }
        }
    

    else
    {
        while(anfacOptions !="0" ||anfacOptions !="1" ||anfacOptions !="2" ||anfacOptions !="3" ||anfacOptions !="4"){
            anfacOptions = prompt("Sorry, unknown Command.");
            if(anfacOptions == ""){
                alert('Input required.Try again. ');
                break;
            }
            else if(anfacOptions == null){
        
            }
            else{
                checkAnfac();
                break;
            }
            
            
        }
        
        
        


    }
}

}
// 

function anfacXirmoyin() 
{
    let xirmooyinkaAnfac = prompt(`Fadlan dooro xirmo\n1. Xirmo USD1\n2. Xirmo USD5\n3. Xirmo USD10\n4. Xirmo USD20\n5. Xirmo USD50\n6. Xirmo 90 Sinti\n7. Xirmo 50 Sinti\n0. Back Next:99`);
    // xirmo1
    checkxirmo()
    function checkxirmo() 
    {
        if (xirmooyinkaAnfac == "1")
        {
            let permisionDialog = prompt(`Waxaad heleysaa 100 daqiiqo wicitaan gudaha. Fadlan hubi isdiiwaangelintaada:\n1. Maya \n2. Haa`);
            if(permisionDialog == ""){
                alert('Input required.Try again. ')
            }
            else if (permisionDialog == 2 && userBalance >= 1){
                userBalance -= 1;
                alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
            }
            else if(permisionDialog == 2 && userBalance <1){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if (permisionDialog == 2 && userBalance <=0){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if(permisionDialog == "1"){
                alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
            }
            else if(permisionDialog == null){
        
            }
            else {
                alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
            }
        }
        else if(xirmooyinkaAnfac == ""){
            alert('Input required.Try again. ')
        }
        else if(xirmooyinkaAnfac == null){
        
        }
        // xirmo2
        else if (xirmooyinkaAnfac == "2")
        {
            let permisionDialog = prompt(`Waxaad heleysaa 750 daqiiqo wicitaan gudaha. Fadlan hubi isdiiwaangelintaada:\n1. Maya \n2. Haa`);
            if(permisionDialog == ""){
                alert('Input required.Try again. ')
            }

            else if (permisionDialog == 2 && userBalance >= 5){
                userBalance -= 5
                alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
            }
            else if(permisionDialog == 2 && userBalance <5){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if (permisionDialog == 2 && userBalance <=0){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if(permisionDialog == "1"){
                alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
            }
            else if(permisionDialog == null){
        
            }
            else {
                alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
            }
        }
    
        // xirmo3
        else if (xirmooyinkaAnfac == "3")
        {
            let permisionDialog = prompt(`Waxaad heleysaa 1550 daqiiqo wicitaan gudaha. Fadlan hubi isdiiwaangelintaada:\n1. Maya \n2. Haa`);
            if(permisionDialog == ""){
                alert('Input required.Try again. ')
            }
            else if (permisionDialog == 2 && userBalance >= 10){
                userBalance -= 10
                alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
            }
            else if(permisionDialog == 2 && userBalance <10){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if (permisionDialog == 2 && userBalance <=0){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if(permisionDialog == "1"){
                alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
            }
            else if(permisionDialog == null){
        
            }
            else {
                alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
            }
        }
    
        // xirmo4
    
        else if(xirmooyinkaAnfac == "4")
        {
            let permisionDialog = prompt(`Waxaad heleysaa 3200 daqiiqo wicitaan gudaha. Fadlan hubi isdiiwaangelintaada:\n1. Maya \n2. Haa`);
            if(permisionDialog == ""){
                alert('Input required.Try again. ')
            }
            else if (permisionDialog == 2 && userBalance >= 20){
                userBalance -= 20
                alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
            }
            else if(permisionDialog == 2 && userBalance <20){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if (permisionDialog == 2 && userBalance <=0){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if(permisionDialog == "1"){
                alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
            }
            else if(permisionDialog == null){
        
            }
            else {
                alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
            }
        }
        // xirmo5
        else if(xirmooyinkaAnfac == "5")
        {
            let permisionDialog = prompt(`Waxaad heleysaa 8250 daqiiqo wicitaan gudaha. Fadlan hubi isdiiwaangelintaada:\n1. Maya \n2. Haa`);
            if(permisionDialog == ""){
                alert('Input required.Try again. ')
            }
            else if (permisionDialog == 2 && userBalance >= 50){
                userBalance -= 50;
                alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
            }
            else if(permisionDialog == 2 && userBalance <50){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if (permisionDialog == 2 && userBalance <=0){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if(permisionDialog == "1"){
                alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
            }
            else if(permisionDialog == null){
        
            }
            else {
                alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
            }
        }
    
        // xirmo6
        else if(xirmooyinkaAnfac == "6")
        {
            let permisionDialog = prompt(`Waxaad heleysaa 90 daqiiqo wicitaan gudaha. Fadlan hubi isdiiwaangelintaada:\n1. Maya \n2. Haa`);
            if(permisionDialog == ""){
                alert('Input required.Try again. ')
            }
            else if (permisionDialog == 2 && userBalance >= 0.9){
                userBalance -= 0.9;
                alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
            }
            else if(permisionDialog == 2 && userBalance <0.9){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if (permisionDialog == 2 && userBalance <=0){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if(permisionDialog == "1"){
                alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
            }
            else if(permisionDialog == null){
        
            }
            else {
                alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
            }
        }
    
        // xirmo7
        else if(xirmooyinkaAnfac == "7")
        {
            let permisionDialog = prompt(`Waxaad heleysaa 50 daqiiqo wicitaan gudaha. Fadlan hubi isdiiwaangelintaada:\n1. Maya \n2. Haa`);
            if(permisionDialog == ""){
                alert('Input required.Try again. ')
            }
            else if (permisionDialog == 2 && userBalance >= 0.5){
                userBalance -= 0.5;
                alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
            }
            else if(permisionDialog == 2 && userBalance <0.5){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if (permisionDialog == 2 && userBalance <=0){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if(permisionDialog == "1"){
                alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
            }
            else if(permisionDialog == null){
        
            }
            else {
                alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
            }
        }

        else if(xirmooyinkaAnfac == '99')
        {
            xirmooyinkaAnfac = prompt(`8.Xirmo 10 sinti\n0.Back Pre:88`);
            if(xirmooyinkaAnfac == '8')
            {
                let permisionDialog = prompt(`Waxaad heleysaa 8 daqiiqo wicitaan gudaha. Fadlan hubi isdiiwaangelintaada:\n1. Maya \n2. Haa`);
                if(permisionDialog == ""){
                    alert('Input required.Try again. ')
                }
                else if (permisionDialog == 2 && userBalance >= 0.1){
                    userBalance -= 0.1;
                    alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
                }
                else if(permisionDialog == 2 && userBalance <0.1){
                    alert(`Haraaga xisaabtaada kuguma filna.`);
                }
                else if (permisionDialog == 2 && userBalance <=0){
                    alert(`Haraaga xisaabtaada kuguma filna.`);
                }
                else if(permisionDialog == "1"){
                    alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
                }
                else if(permisionDialog == null){
            
                }
                else {
                    alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
                }
            }
            else if(xirmooyinkaAnfac == '0'){
                anfacparts();
            }
            else if(xirmooyinkaAnfac == '88'){
                anfacXirmoyin();
            }
            else if(xirmooyinkaAnfac == null){
                
            }
            else if(xirmooyinkaAnfac == ''){
                alert('Input required.Try again. ');
            }
            else{
                checkxirmo();
                
            }


        }
    
    
        // back to anfac options
        else if(xirmooyinkaAnfac == "0")
        {
            anfacparts();
        }
        else if(xirmooyinkaAnfac == '8'){
            let permisionDialog = prompt(`Waxaad heleysaa 8 daqiiqo wicitaan gudaha. Fadlan hubi isdiiwaangelintaada:\n1. Maya \n2. Haa`);
            if(permisionDialog == ""){
                alert('Input required.Try again. ')
            }
            else if (permisionDialog == 2 && userBalance >= 0.1){
                userBalance -= 0.1;
                alert(`Waad ku guuleysatey isdiiwaangelintaada haraagaagu   waa $ ${userBalance}`);
            }
            else if(permisionDialog == 2 && userBalance <0.1){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if (permisionDialog == 2 && userBalance <=0){
                alert(`Haraaga xisaabtaada kuguma filna.`);
            }
            else if(permisionDialog == "1"){
                alert("Waad ku guuleysatey in aad iska joojiso howshaan.");
            }
            else if(permisionDialog == null){
        
            }
            else {
                alert("Waan kaxunahay, si khalad ah ayaad u gelisey");
            }
        }
        else{
            while(xirmooyinkaAnfac !='0' || xirmooyinkaAnfac !='1' || xirmooyinkaAnfac !='2' || xirmooyinkaAnfac !='3' || xirmooyinkaAnfac !='4' || xirmooyinkaAnfac !='5' || xirmooyinkaAnfac !='6' || xirmooyinkaAnfac !='7' || xirmooyinkaAnfac !='8'){
                xirmooyinkaAnfac = prompt("Sorry, unknown command");
                if(xirmooyinkaAnfac == ""){
                    alert('Input required.Try again. ');
                    break;
                }
                else if(xirmooyinkaAnfac == null){
        
                }
                else {
                    checkxirmo();
                    break
                }
            }

        }
    }
    
}

// function showBalance() {
//     balance = document.getElementById("balance").innerHTML=`$${userBalance}`;
// }

function showUSD$(){
    let balance = document.getElementById("balance").textContent = `$${userBalance}`;
    balance = document.getElementById("balance").style.color = 'green'
    let value = document.getElementById("eye").style.display="none"
    let hide = document.getElementById("eye-slash").style.display="inline"
   
}

function hide() {
    let hide = document.getElementById("eye-slash").style.display="none"
    let show = document.getElementById("eye").style.display="inline";
    let balance = document.getElementById("balance").textContent = "Balance"


}

