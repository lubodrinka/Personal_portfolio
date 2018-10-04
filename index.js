const textSk = "Začal som programovať, pretože nám zamŕzal monitoring, ktorý by nikdy nemal prestať pracovať.Urobil som to v Autoite. "+
  " <br> V roku 2012 som chcel, aby sa dokumentácia údržby  bola  elektronická, žiadna však nemala požadovaný ISO výstup na tlačiareň,"+
  "takže cez vb.net som to naprogramoval a publikoval. Dva roky skúseností s vb.Net. Bola škoda, že séria Tomáša Hercoga sa neobjavila skôr. "+   
 "<br> Objavili sa google.sites. Publikujem na download.com a registrujem program na appvisor. "+
 "Opravoval som jednu bakalárku a chýbalo v nej veľa čiarok, uvedomil som si ako sa to dá naprogramovať. "+
 "Je to veľmi rozsiahly projekt, obsahuje tri jazyky, dva syntetické: slovenský a český jazyk s veľkými slovníkmi a analytickým anglickým jazykom. Trvalo to 3 roky. "+
 "V týchto projektoch som získal skúsenosti so šifrovaním MS crypto a GS. "+
 "V projekte sqlDB som zistil, ako používať bluetooth ako port-com a pripojiť sa k aplikácii Android pre skenovanie EAN. "+
  "Implementoval som to v ryder, takže ak skenujete kódy aplikáciou android a nachádzate sa v dosahu v počítači, spáruje sa skenovaný kód so zariadením zo zoznamu a zobrazuje všetky údaje. "+
  " <br> som navštívil codecon 2015, nachádzam leták MS azure. Mám svoju vlastnú webovú stránku Application-page v ASP.net, preklopiť desktopovú aplikáciu do online trvalo iba niekoľko hodín "+                            
"Google nechápe, prečo inzerujem stránku bez obsahu napriek tomu, že tak vyzerá ako Google translator Minulý rok som ! Mám veľa práce v práci,končím. IT."+
"V práci som po 12 rokoch povedal, že sa chystám skončiť. Hľadám prácu v oblasti IT."+
 " skončil 6 zo 6 certifikátov freecodecamp"+
  "Expierencing VB.net od roku 2012 a intesive JS od 02 / 2018";


  const textEn = "I started programming because of the freezing monitoring that should never had to fail. I did it in the Autoit. "+            
    "<br> In 2012 I wanted the paper maintenance to become electronic, none had the required ISO output"+
 " on the printer, so through vb.net I programmed one and publishing.Two years of Expierencing with .Net. "+
                                 "It was a pity that Tomáš Hercog's series did not appear  earlier. "+            
                               "<br> I discovered google.sites.I publishing to download.com and registering programs on appvisor. "+
  "I corrected one baccalaureate and there missing many commas, I realized how it should be "+
  "programmed.It is very large project, it is includes three languages, two syntetic: slovak and czech "+
  "languages with large dictionaries and analytic an english language. It takes 3 years. "+ 
  "It these project I Expierencing with ciphers adn MS and GS crypto.In project sqlDB I found how to use bluetooth as com port and connecting with android application for EAN Scanning. "+
                                "I implemented that in ryder, so if you scan the codes by android app and you are in a range on the PC is pairing scanned code with device from list and it show all data. "+
                                "<br> I visited codecon 2015, I find a azure leaflet about trial clouds.I have my own website App - page. "+
  "The Google have not understand why is advertising a page with no content even it's like Google !. I have a lot of work at work, I terminate IT. At work, after 12 years, I was said I was going to end. "+
"I'm looking for a job in IT. I'am finished the 6 of 6 freecodecamp certifications.< br > Expierencing VB.net from 2012 and intesive JS from 02 / 2018";

$(function () {
  var language = window.navigator.userLanguage || window.navigator.language;
  console.log(language);
  language.includes('sk')?  $("#blockquote-text").html(textSk): $("#blockquote-text").html(textEn);
 
  $("#contactform").submit(function (e) {

    console.log('click');

    var url = "https://shine-lunch.glitch.me/api/mail";

    $.ajax({
      type: "post",
      url: url,
      data: $(this).serialize(),
      // success: function(data) { alert(data) }
    }); e.preventDefault();
  });
 


  $("#flagSk").click(function (e) {

    $("#blockquote-text").html(textSk);

  });


  $("#flagEn").click(function (e) {

    $("#blockquote-text").html(textEn);

  });

  

  





});
