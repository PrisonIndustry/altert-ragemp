

mp.events.add({
    //Prison
    "start1": () => {
        mp.game.invoke("0x0355EF116C4C97B2", 'PRISON_ALARMS', 0)
    },
    //Armybase
    "start2": () => {
        mp.game.invoke("0x0355EF116C4C97B2", 'PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS', 1) ;
    },
    //FIB Tower 
    "start3": () => {
        mp.game.invoke("0x0355EF116C4C97B2", 'AGENCY_HEIST_FIB_TOWER_ALARMS', 0);
        mp.game.invoke("0x0355EF116C4C97B2",'AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER', 1);
        mp.game.invoke("0x0355EF116C4C97B2",'AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER_B', 0);
    },
    //Humanlabs
    "start4": () => {
        mp.game.invoke("0x0355EF116C4C97B2", 'FIB_05_BIOTECH_LAB_ALARMS', 0);
    },
    //Morgue
    "start5": () => {
        mp.game.invoke("0x0355EF116C4C97B2", 'FBI_01_MORGUE_ALARMS', 1)
    },
    // Big Store Alarm
    "start6": () => {
       mp.game.invoke("0x0355EF116C4C97B2", 'BIG_SCORE_HEIST_VAULT_ALARMS', a_0);
    },
    // Jewel Store
    "start7": () => {
        mp.game.invoke("0x0355EF116C4C97B2", 'JEWEL_STORE_HEIST_ALARMS', 0);
    },
    // Bank Baleto Bay
    "start8": () => {
        mp.game.invoke("0x0355EF116C4C97B2", 'PALETO_BAY_SCORE_ALARM', 1);
    },
    //Chicken Factory Baleto Bay
    "start9": () => {
        mp.game.invoke("0x0355EF116C4C97B2",'PALETO_BAY_SCORE_CHICKEN_FACTORY_ALARM', 0 );
    },
    // Alarm Army Chip
    "start10": () => {
        mp.game.invoke("0x0355EF116C4C97B2", 'PORT_OF_LS_HEIST_SHIP_ALARMS', 0);
    },
    // Prologue Heist Alarm
    "start11": () => {
        mp.game.invoke("0x0355EF116C4C97B2", 'PROLOGUE_VAULT_ALARMS', 0);
    },
        //Prison
        "stop1": () => {
            mp.game.invoke("0xA1CADDCD98415A41", 'PRISON_ALARMS', 0)
        },
        //Armybase
        "stop2": () => {
            mp.game.invoke("0xA1CADDCD98415A41", 'PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS', 1) ;
        },
        //FIB Tower 
        "stop3": () => {
            mp.game.invoke("0xA1CADDCD98415A41", 'AGENCY_HEIST_FIB_TOWER_ALARMS', 0);
            mp.game.invoke("0xA1CADDCD98415A41",'AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER', 1);
            mp.game.invoke("0xA1CADDCD98415A41",'AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER_B', 0);
        },
        //Humanlabs
        "stop4": () => {
            mp.game.invoke("0xA1CADDCD98415A41", 'FIB_05_BIOTECH_LAB_ALARMS', 0);
        },
        //Morgue
        "stop5": () => {
            mp.game.invoke("0xA1CADDCD98415A41", 'FBI_01_MORGUE_ALARMS', 1)
        },
        /* Big Store Alarm
        "stop6": () => {
           mp.game.invoke("0xA1CADDCD98415A41", 'BIG_SCORE_HEIST_VAULT_ALARMS', a_0);
        }, */
        // Jewel Store
        "stop7": () => {
            mp.game.invoke("0xA1CADDCD98415A41", 'JEWEL_STORE_HEIST_ALARMS', 0);
        },
        // Bank Baleto Bay
        "stop8": () => {
            mp.game.invoke("0xA1CADDCD98415A41", 'PALETO_BAY_SCORE_ALARM', 1);
        },
        //Chicken Factory Baleto Bay
        "stop9": () => {
            mp.game.invoke("0xA1CADDCD98415A41",'PALETO_BAY_SCORE_CHICKEN_FACTORY_ALARM', 0 );
        },
        // Alarm Army Chip
        "stop10": () => {
            mp.game.invoke("0xA1CADDCD98415A41", 'PORT_OF_LS_HEIST_SHIP_ALARMS', 0);
        },
        // Prologue Heist Alarm
        "stop11": () => {
            mp.game.invoke("0xA1CADDCD98415A41", 'PROLOGUE_VAULT_ALARMS', 0);
        }


});

