export default  [
    {
        name: 'Infractions',
        charges: [
            {
                name: 'Animal Cruelty',
                fine: 250,
                months: 2,
                restitution: null,
                description: 'Attacking or Injuring an Animal'
            },
            {
                name: 'Disobeying an officer',
                fine: 500,
                months: 5,
                restitution: null,
                description: 'Refusing to Obey a Lawful Order from a Police Officer'
            },
            {
                name: 'Disturbing the Peace',
                fine: 65,
                months: 5,
                restitution: null,
                description: 'Vocally Causing a Disturbance'
            },
            {
                name: 'Failure to Identify',
                fine: 250,
                months: 2,
                restitution: null,
                description: 'Refusing to give ID when being Detained or Arrested'
            },
            {
                name: 'Loitering',
                fine: 35,
                months: 2,
                restitution: null,
                description: 'Idly congregating with no defined purpose or business'
            },
            {
                name: 'Public Intoxication (PC)',
                fine: 125,
                months: 3,
                restitution: null,
                description: 'Consuming or being under the Influence of Drugs or Alcohol in Public'
            },
            {
                name: 'Failure to headlight',
                fine: 190,
                months: 2,
                restitution: null,
                description: 'Operating a Vehicle during Low Light Conditions without Headlights Activated',
                vehicle: true,
            },
            {
                name: 'Failure to obey traffic control devices',
                fine: 150,
                months: 3,
                restitution: null,
                description: 'Disobeying posted traffic control signs and devices',
                vehicle: true,
            },
            {
                name: 'Failure to yield to emergency vehicle',
                fine: 250,
                months: 3,
                restitution: null,
                description: 'Failing to Pull over to Make Room for an Emergency Vehicle',
                vehicle: true,
            },
            {
                name: 'Illegal Parking',
                fine: 65,
                months: 2,
                restitution: null,
                description: 'Idling or Parking a Vehicle in a non-Designated Parking Space',
                vehicle: true,
            },
            {
                name: 'Noise Disturbance',
                fine: 125,
                months: 2,
                restitution: null,
                description: 'Revving a Vehicle Engine, or constant use of the horn to Disturb the Peace',
                vehicle: true,
            },
            {
                name: 'Non Roadworthy Vehicle',
                fine: 65,
                months: 2,
                restitution: null,
                description: 'Operation of a Vehicle with Severe Body Damage',
                vehicle: true,
            },
            {
                name: 'Offroading (PC)',
                fine: 125,
                months: 2,
                restitution: null,
                description: 'Driving a Motorized Vehicle more than 5 meters from a Paved or Dirt Road',
                vehicle: true,
            },
            {
                name: 'Speeding 10-19',
                fine: 315,
                months: 2,
                restitution: null,
                description: '10 - 19 mph Over Speed Limit',
                vehicle: true,
            },
        ],
    },
    {
        name: 'Misdemeanor',
        charges: [
            {
                name: 'Assault and/or Battery',
                fine: 750,
                months: 8,
                restitution: null,
                description: 'Striking and Injuring Someone with your Fists. Threatening physical violence. - Does not stack with Assault with Deadly Weapon',
                cantStack: ['Assault with Deadly Weapon']
            },
            {
                name: 'Attempted Bribery',
                fine: 1250,
                months: 6,
                restitution: null,
                description: 'Attempting to sway a Law Enforement or Court Officer with monetary or other compensaton'
            },
            {
                name: 'Brandishing a Weapon',
                fine: 250,
                months: 4,
                restitution: null,
                description: 'Display of a weapon with intent to intimidate\n'
            },
            {
                name: 'Destruction of property',
                fine: 625,
                months: 5,
                restitution: null,
                description: 'Damaging or Defacing Property'
            },
            {
                name: 'Drug Distribution',
                fine: 1250,
                months: 6,
                restitution: null,
                description: 'Distribution and sale of Marijuana or other Controlled Substances\n'
            },
            {
                name: 'Evidence Tampering',
                fine: 2000,
                months: 10,
                restitution: null,
                description: 'Destruction of Incriminating Evidence Immediately Preceding or during a Police Investigation'
            },
            {
                name: 'Inciting a Riot',
                fine: 2500,
                months: 8,
                restitution: null,
                description: 'Intentionally encouraging locals to commit violent acts'
            },
            {
                name: 'Making a false report',
                fine: 625,
                months: 5,
                restitution: null,
                description: 'Providing false inforation to an Officer or making a false report via 911'
            },
            {
                name: 'Manslaughter',
                fine: 1875,
                months: 10,
                restitution: null,
                description: 'Involuntary Killing of Someone - Killing without Malicious Intent'
            },
            {
                name: 'Obstruction of justice',
                fine: null,
                months: 10,
                restitution: null,
                description: 'Willfully and intentionally impeding an investigation despite warnings from officers\n',
                i: 'Obstruction means straight ot jail'
            },
            {
                name: 'Possession of Drug Paraphernalia',
                fine: 500,
                months: 5,
                restitution: null,
                description: 'Being in the Possession of Cocaine, Crack Cocaine, Coca Paste, Ephedrine, or Meth'
            },
            {
                name: 'Possession of Controlled Substance',
                fine: 2000,
                months: 12,
                restitution: null,
                description: 'Cannabis Seeds, Coca Leaves, Dirty Money, Mobile Meth Lab Kit,\n'
            },
            {
                name: 'Possession of Illegal Equipment',
                fine: 500,
                months: 5,
                restitution: null,
                description: 'Lock Drilling Kit, Lockpicks, Speed Bomb, Item Disablement Kit, Weapon Disablement Kit\n'
            },
            {
                name: 'Possession of illegal firearm',
                fine: 1500,
                months: 8,
                restitution: null,
                description: 'Possession of a Desert Eagle, Micro SMG or Machine Pistol'
            },
            {
                name: 'Possession of Illegal weapon',
                fine: 875,
                months: 6,
                restitution: null,
                description: 'Possession of a Switchblade, Cavalry Dagger, Battleaxe, or Broken Bottle'
            },
            {
                name: 'Possession of Marijuana',
                fine: 1250,
                months: 6,
                restitution: null,
                description: 'Being in possession of any form of Marijuana'
            },
            {
                name: 'Possession/Solicitation',
                fine: 750,
                months: 8,
                restitution: null,
                description: 'Engaging in or soliciting a prostitute'
            },
            {
                name: 'Resisting Arrest (Mis. Evasion - foot)',
                fine: 1250,
                months: 6,
                restitution: null,
                description: 'Evasion on foot'
            },
            {
                name: 'Theft',
                fine: 1250,
                months: 6,
                restitution: null,
                description: 'Theft of Property or Money\n'
            },
            {
                name: 'Unlawful Discharge',
                fine: 500,
                months: 8,
                restitution: null,
                description: 'Discharging a Firearm Outside of a Shooting Range'
            },
            {
                name: 'Driving w/o license',
                fine: null,
                months: 10,
                restitution: null,
                description: 'Operating a motor vehicle without a valid license or with a license which has been suspended or revoked',
                vehicle: true,
            },
            {
                name: 'Reckless Driving',
                fine: 500,
                months: 6,
                restitution: null,
                description: 'Careless operation of a motor vehicle that could result in property damage or injury\n',
                vehicle: true,
            },
            {
                name: 'Speeding',
                fine: 1250,
                months: 8,
                restitution: null,
                description: '20-39 mph Over Speed Limit',
                vehicle: true,
            },
            {
                name: 'Street Racing',
                fine: 1500,
                months: 8,
                restitution: null,
                description: 'Engaging in a Race Outside of a Marked Track',
                vehicle: true,
            },
            {
                name: 'Vehicular Manslaughter',
                fine: 1625,
                months: 10,
                restitution: null,
                description: 'Negligent Operation of a Vehicle that Results in Loss of Life',
                vehicle: true,
            },
        ]
    },
    {
        name: 'Felonies',
        charges: [
            {
                name: 'Fel. Accessory',
                fine: 400,
                months: 18,
                restitution: 2000,
                description: 'Any Player who Assists in the Commission of a FELONY - Does not Stack with non Vehicle Felony Offenses',
                cantStack: ['vehicle']
            },
            {
                name: 'Aiding/Escape Custody',
                fine: null,
                months: 20,
                restitution: null,
                description: 'Escaping from or attempting to aid in the escape of a suspect in lawful custody of the court or LSPD'
            },
            {
                name: 'Armed Robbery',
                fine: 5000,
                months: 20,
                restitution: 2500,
                description: 'Any suspect in possession of a firearm during a robbery, regardless of whether it was used in the Commission of a Theft'
            },
            {
                name: 'Assault with Deadly Weapon',
                fine: 2500,
                months: 10,
                restitution: 1250,
                description: 'Places Someone in fear of Imminent Injury, or Causes Injury, through the use of a Weapon or Vehicle. - Does not stack with Attempted Murder',
                cantStack: ['Attempted Murder']
            },
            {
                name: 'Attempted Murder',
                fine: null,
                months: 20,
                restitution: 2500,
                description: 'When Someone is knocked out but able to be revived by EMS. - Does not stack with Murder',
                cantStack: ['Murder']
            },
            {
                name: 'Drug Trafficking',
                fine: 2000,
                months: 10,
                restitution: null,
                description: 'Possession of 100+ Units of any combination of Ephedrine, Meth, Coco Paste, Cocaine found on person, vehicle, and/or tent',
                cantStack: ['Possession of Drug Paraphernalia', 'Possession of Controlled Substance']
            },
            {
                name: 'False Imprisonment',
                fine: 3750,
                months: 15,
                restitution: 1875,
                description: 'Using a weapon or threat of force to prohibit freemovement of another person\n'
            },
            {
                name: 'Impersonating a Law Officer\n',
                fine: null,
                months: 10,
                restitution: null,
                description: 'A civilian who presents themselves as a Law Enforcement Officer attempting to force or influence the actions of others'
            },
            {
                name: 'Kidnapping',
                fine: null,
                months: 20,
                restitution: 2125,
                description: 'Using a weapon or threat of force to abduct another person\n'
            },
            {
                name: 'Money Laundering',
                fine: 2000,
                months: 10,
                restitution: null,
                description: 'Using a Business Store to faciliate Money Laundering activities'
            },
            {
                name: 'Murder',
                fine: null,
                months: 30,
                restitution: 2500,
                description: 'Any deliberate, malicious action that results in a death'
            },
            {
                name: 'Robbery',
                fine: 4000,
                months: 16,
                restitution: 2500,
                description: 'Theft of Property or Money by Threatening Force (Gas Station Robberies or Civilian Robbing another Civilian)'
            },
            {
                name: 'Unlawful use of explosives',
                fine: null,
                months: 8,
                restitution: 500,
                description: 'Use of an explosive device with the intent to cause harm'
            },
            {
                name: 'DUI',
                fine: null,
                months: 8,
                restitution: 500,
                description: 'Operating a Motorized Vehicle under the Influence of Drugs or Alcohol',
                vehicle: true,
            },
            {
                name: 'Fel. Evasion',
                fine: null,
                months: 10,
                restitution: 1250,
                description: 'Evading arrest by any means other than on foot',
                vehicle: true,
            },
            {
                name: 'Grand Theft Auto',
                fine: null,
                months: 5,
                restitution: 1250,
                description: 'Stealing a Motor Vehicle',
                vehicle: true,
            },
            {
                name: 'Hit & Run',
                fine: null,
                months: 10,
                restitution: 1250,
                description: 'Stealing a Motor Vehicle',
                vehicle: true,
            },
            {
                name: 'Fel. Speeding 40+',
                fine: 3000,
                months: 12,
                restitution: 1500,
                description: '40+ mph Over Speed Limit.  Must have radar confirmation',
                vehicle: true,
            },
            {
                name: 'Hit and Run',
                fine: null,
                months: 12,
                restitution: 1500,
                vehicle: true,
            },
            {
                name: 'Contempt of Court',
                fine: 1000,
                months: 10,
                description: 'Behavior Deemed disruptive or disrespectful to the court and/or proceedings. Charges at digression of judge',
                court: true,
            },
        ]
    },
    {
        name: 'Aggravated',
        charges: [
            {
                name: 'Aggravated Assault',
                fine: 3750,
                months: 15,
                restitution: 1875,
                description: 'Assault of of an LEO, EMT, or Court Official with or without a weapon\n'
            },
            {
                name: 'Aggravated Kidnapping',
                fine: null,
                months: 30,
                restitution: 3200,
                description: 'False Imprisonment or Kidnapping of an LEO, EMT, or Court Official\n'
            },
            {
                name: 'Aggravated Robbery',
                fine: 8750,
                months: 35,
                restitution: 3750,
                description: 'Robbery of of an LEO, EMT, or Court Official with or without a weapon\n'
            },
            {
                name: 'Aggravated Attempted Murder',
                fine: null,
                months: 35,
                restitution: 3750,
                description: 'Attempted Murder of of an LEO, EMT, or Court Official\n',
            },
            {
                name: 'Aggravated Murder',
                fine: null,
                months: 35,
                restitution: 3750,
                description: 'Murder of of an LEO, EMT, or Court Official\n'
            },
            {
                name: 'Aggravated Unlawful use of explosives',
                fine: null,
                months: 35,
                restitution: 3750,
                description: 'Use of an explosive device with the intent to cause harm an LEO, EMT, or Court Official\n'
            }
        ]
    }
]

