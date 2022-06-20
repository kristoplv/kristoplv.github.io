let valikud = {
    "00 Üldõppekavade õppevaldkond": {
        "001 Põhiõppekavade õppesuund": ["0011 Põhiõppekavarühm"],
        "002 Kirja- ja arvutioskuse õppesuund": ["0021 Kirja- ja arvutusoskuse õppekavarühm"],
        "003 Isikuarengu õppesuund": ["0031 Isikuarengu õppekavarühm"]
    },
    "01 Hariduse õppevaldkond": {
        "011 Hariduse õppesuund": ["0111 Kasvatusteaduse õppekavarühm", "0112 Koolieelikute õpetajate koolituse õppekavarühm", "0113 Klassiõpetaja koolituse õppekavarühm", "0114 Aineõpetaja koolituse õppekavarühm"],
        "018 Hariduse interdistsiplinaarne õppesuund": ["0188 Hariduse interdistsiplinaarne õppekavarühm"]
    },
    "02 Humanitaaria ja kunsti õppevaldkond": {
        "021 Kunsti õppesuund": ["0211 Audiovisuaalsete tehnikate ja meedia tootmise õppekavarühm", "0212 Moe, sise- ja tööstusdisaini õppekavarühm", "0213 Kujutava kunsti ja kunstiteaduse õppekavarühm", "0214 Käsitöö õppekavarühm", "0215 Muusika ja esituskunstide õppekavarühm"],
        "022 Humanitaaria õppesuund (v.a keeled)": ["0221 Usundiõpetuse ja usuteaduse õppekavarühm", "0222 Ajaloo ja arheoloogia õppekavarühm", "0223 Filosoofia ja eetika õppekavarühm"],
        "023 Keele õppesuund": ["0231 Keeleõppe õppekavarühm", "0232 Kirjanduse ja lingvistika õppekavarühm"],
        "028 Humanitaaria ja kunsti interdistsiplinaarne õppesuund": ["0288 Humanitaaria ja kunsti interdistsiplinaarne õppekavarühm"]
    },
    "03 Sotsiaalteaduste, ajakirjanduse ja teabe õppevaldkond": {
        "031 Sotsiaal- ja käitumisteaduste õppesuund": ["0311 Majandusteaduse õppekavarühm", "0312 Poliitikateaduse ja kodanikuõpetuse õppekavarühm", "0313 Psühholoogia õppekavarühm", "0314 Sotsioloogia ja kulturoloogia õppekavarühm"],
        "032 Ajakirjanduse ja teabe õppesuund": ["0321 Ajakirjanduse õppekavarühm", "0322 Raamatukogunduse, teabe ja arhiivinduse õppekavarühm"],
        "038 Sotsiaalteaduste, ajakirjanduse ja teave interdistsiplinaarne õppesuund": ["0388 Sotsiaalteaduste, ajakirjanduse ja teabe interdistsiplinaarne õppekavarühm"]
    },
    "04 Ärinduse, halduse ja õiguse õppevaldkond": {
        "041 Ärinduse ja halduse õppesuund": ["0411 Majandusarvestuse ja maksunduse õppekavarühm", "0412 Rahanduse, panganduse ja kindlustuse õppekavarühm", "0413 Juhtimise ja halduse õppekavarühm", "0414 Turunduse ja reklaami õppekavarühm", "0415 Sekretäti ja kontoritöö õppekavarühm", "0416 Hulgi- ja jaekaubanduse õppekavarühm", "0417 Tööoskuste õppekavarühm"],
        "042 Õiguse õppesuund": ["0421 Õiguse õppekavarühm"],
        "048 Ärinduse, halduse ja õiguse interdistsiplinaarne õppesuund": ["0488 Ärinduse, halduse ja õiguse interdistsiplinaarne õppekavarühm"]
    },
    "05 Loodusteaduste, matemaatika ja statistika õppevaldkond": {
        "051 Bioloogia ja sellega seotud teaduste õppesuund": ["0511 Bioloogia õppekavarühm", "0512 Biokeemia õppekavarühm"],
        "052 Keskkonna õppesuund": ["0521 Keskkonnateaduste õppekavarühm", "0522 Looduskeskkonna ja eluslooduse õppekavarühm"],
        "053 Füüsikaliste loodusteaduste õppesuund": ["0531 Keemia õppekavarühm", "0532 Maateaduse õppekavarühm", "0533 Füüsika õppekavarühm"],
        "054 Matemaatika ja statistika õppesuund": ["0541 Matemaatika õppekavarühm", "0542 Statistika õppekavarühm"],
        "058 Loodusteaduste, matemaatika ja statistika interdistsiplinaarne õppesuund": ["0588 Loodusteaduste, matemaatika ja statistika interdistsiplinaarne õppekavarühm"]
    },
    "06 Informatsiooni- ja kommunikatsioonitehnoloogia õppevaldkond": {
        "061 Informatsiooni- ja kommunikatsioonitehnoloogia õppesuund": ["0611 Arvutikasutuse õppekavarühm", "0612 Andmebaaside ja võrgu disaini ning halduse õppekavarühm", "0613 Tarkvara ja rakenduste arenduse ning analüüsi õppekavarühm", "0619 Informatsiooni- ja kommunikatsioonitehnoloogia õppekavarühm, mujal liigitamata"],
        "068 Informatsiooni- ja kommunikatsioonitehnoloogia interdistsiplinaarne õppesuund": ["0688 Informatsiooni- ja kommunikatsioonitehnoloogia interdistsiplinaarne õppekavarühm"]
    },
    "07 Tehnika, tootmise ja ehituse õppevaldkond": {
        "071 Tehnikaalade õppesuund": ["0711 Keemiatehnoloogia ja -protsesside õppekavarühm", "0712 Keskkonnakaitsetehnoloogia õppekavarühm", "0713 Elektrienergia ja energeetika õppekavarühm", "0714 Elektroonika ja automaatika õppekavarühm", "0715 Mehaanika ja metallitöö õppekavarühm", "0716 Mootorliikurite, laevanduse ja lennundustehnika õppekavarühm", "0719 Tehnikaalade õppekavarühm, mujal liigitamata"],
        "072 Tootmise ja töötlemise õppesuund": ["0721 Toiduainete töötlemise õppekavarühm", "0722 Materjalide töötlemise (klaas, paber, plast ja puit) õppekavarühm", "0723 Tekstiili, rõivaste, jalatsite valmistamise ning naha töötlemise õppekavarühm", "0724 Kaevandamise ja rikastamise õppekavarühm"],
        "073 Arhitektuuri ja ehituse õppesuund": ["0731 Arhitektuuri ja linnaplaneerimise õppekavarühm", "0732 Ehituse ja tsiviilrajatiste õppekavarühm"],
        "078 Tehnika, tootmise ja ehituse interdistsiplinaarne õppesuund": ["0788 Tehnika, tootmise ja ehituse interdistsiplinaarne õppekavarühm"]
    },
    "08 Põllumajanduse, metsanduse, kalanduse ja veterinaaria õppevaldkond": {
        "081 Põllumajanduse õppesuund": ["0811 Põllunduse ja loomakasvatuse õppekavarühm", "0812 Aianduse õppekavarühm"],
        "082 Metsanduse õppesuund": ["0821 Metsanduse õppekavarühm"],
        "083 Kalanduse õppesuund": ["0831 Kalanduse õppekavarühm"],
        "084 Veterinaaria õppesuund": ["0841 Veterinaaria õppekavarühm"],
        "088 Põllumajanduse, metsanduse, kalanduse ja veterinaaria interdistsiplinaarne õppesuund": ["0888 Põllumajanduse, metsanduse, kalanduse ja veterinaaria interdistsiplinaarne õppekavarühm"]
    },
    "09 Tervise ja heaolu õppevaldkond": {
        "091 Tervise õppesuund": ["0911 Hambaravi õppekavarühm", "0912 Meditsiini õppekavarühm", "0913 Õenduse ja ämmaemanduse õppekavarühm", "0914 Meditsiinidiagnostika- ja ravitehnoloogia õppekavarühm", "0915 Teraapia ja taastusravi õppekavarühm", "0916 Farmaatsia õppekavarühm", "0917 Traditsioonilise ja täiendava meditsiini ning teraapia õppekavarühm"],
        "092 Heaolu õppesuund": ["0921 Eakate ja puudega täiskasvanute hooldamise õppekavarühm", "0922 Lastehoiu ja noorte teenuste õppekavarühm", "0923 Sotsiaaltöö ja nõustamise õppekavarühm"],
        "098 Tervise ja heaolu interdistsiplinaarne õppesuund": ["0988 Tervise ja heaolu interdistsiplinaarne õppekavarühm"]
    },
    "10 Teeninduse õppevaldkond": {
        "101 Isikuteeninduse õppesuund": ["1011 Koduteeninduse õppekavarühm", "1012 Juuksuritöö ja iluteeninduse õppekavarühm", "1013 Majutamise ja toitlustamise õppekavarühm", "1014 Spordi õppekavarühm", "1015 Reisimise, turismi ja vaba aja veetmise õppekavarühm"],
        "102 Hügieeni ja töötervishoiu õppesuund": ["1021 Prügi ja heitvete käitlemise õppekavarühm", "1022 Töötervishoiu ja -kaitse õppekavarühm"],
        "103 Turvateenuste õppesuund": ["1031 Sõjanduse ja riigikaitse õppekavarühm", "1032 Vara- ja isikukaitse õppekavarühm"],
        "104 Transporditeenuste õppesuund": ["1041 Transporditeenuste õppekavarühm"],
        "108 Teeninduse interdistsiplinaarne õppesuund": ["1088 Teeninduse interdistsiplinaarne õppekavarühm"]
    }
}