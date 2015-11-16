//CONTROLS THE EQUIPMENT MODAL CONTENT
(function($) {
    $(function() {

        $("#equipment .hover-effect").on("click", function() {
            //establish default values for modal fields
            var modal = {
                    title       : "",
                    description : "",
                    mainImg     : ""
                },

                //store the category of item that has been clicked
                fullCat     = $(this).parents("article").attr("data-modal"),
                split       = fullCat.split("-"),
                shortCat    = split[0]
            ;

            switch (shortCat) {
                case "drums" :

                    //set title
                    modal.title = "Drums &amp; Percussion";

                    //set description
                    modal.description = "<h4>Drum Kits</h4>" +
                                        "<ul>" +
                                           "<li>DW Collectors Series   22BD,16FT,14FT,12TT,10TT</li>" +
                                           "<li>DW Collectors Series  24BD,16FT,14FT,12TT,10TT</li>" +
                                           "<li>Vintage Slingerland Maple  22BD,16FT,13TT,12TT</li>" +
                                           "<li>Yamaha Absolute Maple Custom  24BD,16FT,13TT,12TT,10TT</li>" +
                                           "<li>Ludwig Classic Vintage  22BD,16FT,13TT</li>" +
                                           "<li>Tama Starclassic Birch  22BD,16FT,13TT,12TT,10TT</li>" +
                                           "<li>Gretsch New Classic  22BD,16FT,14FT,12TT,10TT</li>" +
                                           "<li>Premier Genista  20BD,16FT,14FT,12TT</li>" +
                                           "<li>Tama Superstar Birch  22BD,16FT,14FT,13TT,12TT</li>" +
                                           "<li>Tama Starclassic Birch/Bubinga   22BD,16FT,14SD,12TT,10TT</li>" +
                                           "<li>Ayotte Maple Shells in Jazz Sizes  20BD,14TT,12TT,10TT</li>" +
                                           "<li>1948 Singerland Radio King Bop Sizes   20BD,14FT,14SD,12TT,10TT</li>" +
                                        "</ul>" +
                                        "<h4>Snare Drums</h4>" +
                                        "<p style='font-style: italic;'>(Various models&mdash;call for details)</p>" +
                                        "<ul>" +
                                            "<li>14x5” Wood</li>" +
                                            "<li>14x5” Brass</li>" +
                                            "<li>14x5.5” Wood</li>" +
                                            "<li>14x5.5” Wood</li>" +
                                            "<li>14x6.5” Wood</li>" +
                                            "<li>14x6.5” Metal</li>" +
                                            "<li>14x7” Wood</li>" +
                                            "<li>13x3” Piccolo (wood)</li>" +
                                            "<li>13x3” piccolo (metal)</li>" +
                                            "<li>Ludwig models include, Black Beauty,Jazz Festival,Pioneer,Super Sensitive, Supraphonic, Acrolite,Super Classic and Classic</li>" +
                                            "<li>Lots of modern snares as well as many vintage snares including Slingerland Radio King and Ace Models</li>" +
                                        "</ul>" +
                                        "<h4>Drum Accessories</h4>" +
                                        "<ul>" +
                                            "<li>Roland SPD-20 Drum Pad</li>" +
                                            "<li>Zildjian Cymbals</li>" +
                                            "<li>Sabian Cymbals</li>" +
                                            "<li>Paiste Cymbals</li>" +
                                            "<li>ClearSonic Plexi Drum baffle</li>" +
                                            "<li>DW Hardware</li>" +
                                            "<li>Gibraltar Hardware and Drum Racks</li>" +
                                            "<li>Pork Pie and Roc-N-Soc Drum Thrones</li>" +
                                        "</ul>" +
                                        "<h4>Percussion</h4>" +
                                        "<ul>" +
                                            "<li>LP Classic Conga Set</li>" +
                                            "<li>LP Galaxy Giovanni Conga Set</li>" +
                                            "<li>LP Generation III Bongos</li>" +
                                            "<li>LP Performer Bongos</li>" +
                                            "<li>LP Percussion Table</li>" +
                                            "<li>LP “Tito Puente” Timbales</li>" +
                                            "<li>Pearl Cajon</li>" +
                                            "<li>Remo 14” Djembe</li>" +
                                            "<li>Meinl Dumbek</li>" +
                                            "<li>Assorted Shakers</li>" +
                                            "<li>Assorted Tambourines</li>" +
                                            "<li>Assorted Cowbells</li>" +
                                        "</ul>"; 

                break;//end case "drums"

                case "amps" :
                    //set title
                    modal.title = "Amplifiers";

                    //set description
                    modal.description = "<h4>Guitar Amplifiers</h4>" +
                                        "<ul>" +
                                            "<li>Fender Bassman ’59 Reissue</li>" +
                                            "<li>Fender Bassman ’59 LTD Reissue</li>" +
                                            "<li>Fender Twin Reverb ’65 Reissue</li>" +
                                            "<li>Fender Twin Reverb ’65 Reissue</li>" +
                                            "<li>Fender Deluxe Reverb ’65 Reissue</li>" +
                                            "<li>Fender Super Reverb ’67 Original</li>" +
                                            "<li>Fender Deville 2x12”</li>" +
                                            "<li>Fender Deville 4x10”</li>" +
                                            "<li>Fender Blues Deville 4x10”</li>" +
                                            "<li>Fender Hot Rod Deluxe 1x12”</li>" +
                                            "<li>Fender  Deluxe Reverb</li>" +
                                            "<li>Fender Acoustasonic 30</li>" +
                                            "<li>Marshall JCM 800</li>" +
                                            "<li>Marshall JCM 900</li>" +
                                            "<li>Marshall JCM 2000 DSL  (2 for rent)</li>" +
                                            "<li>Marshall 1960a 4x12 Slant Cab (2 available)</li>" +
                                            "<li>Marshall 1960bx  4x12 Straight Cab  (5 available)</li>" +
                                            "<li>Mesa Boogie Dual Rectifier</li>" +
                                            "<li>Mesa Boogie 4x12</li>" +
                                            "<li>Mesa Boogie Lonestar 2x12”</li>" +
                                            "<li>Roland JC-120</li>" +
                                            "<li>SWR California Blonde</li>" +
                                            "<li>Vox AC-30</li>" +
                                        "</ul>" +
                                        "<h4>Bass Heads</h4>" +
                                        "<ul>" +
                                            "<li>Ampeg SVT Classic  (2 for rent)</li>" +
                                            "<li>Ampeg SVT Pro 2</li>" +
                                            "<li>Ampeg SVT Pro 4</li>" +
                                            "<li>Ampeg BA-115 Combo</li>" +
                                            "<li>Eden WT800</li>" +
                                            "<li>GK 800RB</li>" +
                                            "<li>GK 1001RB</li>" +
                                            "<li>SWR SM900</li>" +
                                        "</ul>" +
                                        "<h4>Bass Cabinets</h4>" +
                                        "<ul>" +
                                            "<li>Ampeg 810E</li>" +
                                            "<li>Ampeg 410hlf</li>" +
                                            "<li>Ampeg Classic 1x15”</li>" +
                                            "<li>Ampeg Classic 8x10</li>" +
                                            "<li>SWR Goliath III</li>" +
                                        "</ul>";

                break;//end case "amps"

                case "keys" :
                    //set title
                    modal.title = "Keyboards &amp; Organs";

                    //set description
                    modal.description = "<h4>Keyboards/Synths</h4>" +
                                        "<ul>" +
                                            "<li>Hammond B3 </li>" +
                                            "<li>Hammond Portable B-3 In Road Case</li>" +
                                            "<li>Korg M1</li>" +
                                            "<li>Korg Triton Pro X 88 Key</li>" +
                                            "<li>Kurzweil PC-88mx</li>" +
                                            "<li>Kurzweil PC2x</li>" +
                                            "<li>Clavia Nord Electro 2 73</li>" +
                                            "<li>Clavia Nord Stage 88</li>" +
                                            "<li>Leslie 122</li>" +
                                            "<li>Leslie 147</li>" +
                                            "<li>Yamaha Motif ES8</li>" +
                                            "<li>Yamaha CP4 Stage Piano 88 key</li>" +
                                        "</ul>";

                break;//end case "keys"

                case "instruments" :
                    //set title
                    modal.title = "Other Instruments &amp; Accessories";

                    //set description
                    modal.description = "<h4>Instruments</h4>" +
                                        "<ul>" +
                                            "<li>Fender Stratocaster (3 of them for rent)</li>" +
                                            "<li>Epiphone Les Paul</li>" +
                                            "<li>Fender Telecaster</li>" +
                                            "<li>Fender Jazz Bass</li>" +
                                            "<li>Fender Precision Bass</li>" +
                                            "<li>Gibson Les Paul Standard</li>" +
                                            "<li>Taylor 310ce Acoustic Guitar</li>" +
                                            "<li>Rickenbacker 360 12 string</li>" +
                                        "</ul>" +
                                        "<h4>Accessories</h4>" +
                                        "<ul>" +
                                            "<li>Ultracase 4 and 6 Space Guitar Boats</li>" +
                                            "<li>Fender Guitar Boat</li>" +
                                            "<li>Ultimate Keyboard Stands</li>" +
                                            "<li>Ultimate Apex Stands</li>" +
                                            "<li>Ultimate Guitar Stands</li>" +
                                            "<li>Quik Lok Stands</li>" +
                                            "<li>Pro Line Stands</li>" +
                                            "<li>Music Stands</li>" +
                                            "<li>Pork Pie and Roc-N-Soc Drum Thrones</li>" +
                                        "</ul>";

                break;//end case "instruments"
            }// end switch

            //write the content into the modal fields
            $(".equipment-title").html(modal.title);
            $(".equipment-description").html(modal.description);
        });
    });
})(jQuery);