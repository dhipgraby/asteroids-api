const allAsteroids = [
    {
        "Name": "1 Ceres",
        "Diameter": 939,
        "Discovered": "1801-01-01",
        "Comment": "First asteroid discovered"
    },
    {
        "Name": "5 Astraea",
        "Diameter": 117,
        "Discovered": "1845-12-08",
        "Comment": "First asteroid discovered after original four (38 years later)"
    },
    {
        "Name": "20 Massalia",
        "Diameter": 136,
        "Discovered": "1852-09-19",
        "Comment": "First asteroid named after city"
    },
    {
        "Name": "45 Eugenia",
        "Diameter": 202,
        "Discovered": "1857-06-27",
        "Comment": "First asteroid named after living person"
    },
    {
        "Name": "87 Sylvia",
        "Diameter": 261,
        "Discovered": "1866-05-16",
        "Comment": "First asteroid known to have more than one moon (determined in 2005)"
    },
    {
        "Name": "90 Antiope",
        "Diameter": "80x80",
        "Discovered": "1866-10-01",
        "Comment": "Double asteroid with two nearly equal components; its double nature was discovered using adaptive optics in 2000"
    },
    {
        "Name": "92 Undina",
        "Diameter": 126,
        "Discovered": "1867-07-07",
        "Comment": "Created in one of the largest asteroid-on-asteroid collisions of the past 100 million years"
    },
    {
        "Name": "216 Kleopatra",
        "Diameter": "217x94",
        "Discovered": "1880-04-10",
        "Comment": "Metallic asteroid with \"ham-bone\" shape and 2 satellites"
    },
    {
        "Name": "243 Ida",
        "Diameter": "56x24x21",
        "Discovered": "1884-09-29",
        "Comment": "First asteroid known to have a moon (determined in 1994)"
    },
    {
        "Name": "243 Ida I Dactyl",
        "Diameter": 1.4,
        "Discovered": "1994-02-17",
        "Comment": "Moon of 243 Ida, first confirmed satellite of an asteroid"
    },
    {
        "Name": "279 Thule",
        "Diameter": 127,
        "Discovered": "1888-10-25",
        "Comment": "Orbits in the asteroid belt's outermost edge in a 3:4 orbital resonance with Jupiter"
    },
    {
        "Name": "288 Glauke",
        "Diameter": 32,
        "Discovered": "1890-02-20",
        "Comment": "Exceptionally slow rotation period of about 1200 hours (2 months)"
    },
    {
        "Name": "323 Brucia",
        "Diameter": 36,
        "Discovered": "1891-12-22",
        "Comment": "First asteroid discovered by means of astrophotography rather than visual observation"
    },
    {
        "Name": "433 Eros",
        "Diameter": "13x13x33",
        "Discovered": "1898-08-13",
        "Comment": "First near-Earth asteroid discovered and the second largest; first asteroid to be detected by radar; first asteroid orbited and landed upon"
    },
    {
        "Name": "482 Petrina",
        "Diameter": 23.3,
        "Discovered": "1902-03-03",
        "Comment": "First asteroid named after dog"
    },
    {
        "Name": "490 Veritas",
        "Diameter": 115,
        "Discovered": "1902-09-03",
        "Comment": "Created in one of the largest asteroid-on-asteroid collisions of the past 100 million years"
    },
    {
        "Name": "588 Achilles",
        "Diameter": 135.5,
        "Discovered": "1906-02-22",
        "Comment": "First Jupiter trojan discovered"
    },
    {
        "Name": "624 Hektor",
        "Diameter": "370x195",
        "Discovered": "1907-02-10",
        "Comment": "Largest Jupiter trojan discovered"
    },
    {
        "Name": "719 Albert",
        "Diameter": 2.4,
        "Discovered": "1911-10-03",
        "Comment": "Last numbered asteroid to be lost then recovered"
    },
    {
        "Name": "935 Clivia",
        "Diameter": 6.4,
        "Discovered": "1920-09-07",
        "Comment": "First asteroid named after flower"
    },
    {
        "Name": "1090 Sumida",
        "Diameter": 13,
        "Discovered": "1928-02-20",
        "Comment": "Lowest numbered asteroid with no English Wikipedia entry"
    },
    {
        "Name": "1125 China",
        "Diameter": 27,
        "Discovered": "1957-10-30",
        "Comment": "First asteroid discovery to be credited to an institution rather than a person"
    },
    {
        "Name": "1566 Icarus",
        "Diameter": 1.4,
        "Discovered": "1949-06-27",
        "Comment": "First Mercury crosser discovered"
    },
    {
        "Name": "1902 Shaposhnikov",
        "Diameter": 97,
        "Discovered": "1972-04-18",
        "Comment": "Last ~100+ km in diameter asteroid discovered"
    },
    {
        "Name": "2309 Mr. Spock",
        "Diameter": 21.3,
        "Discovered": "1971-08-16",
        "Comment": "First asteroid named after cat"
    },
    {
        "Name": "3200 Phaethon",
        "Diameter": 5,
        "Discovered": "1983-10-11",
        "Comment": "First asteroid discovered from space; source of Geminids meteor shower."
    },
    {
        "Name": "3753 Cruithne",
        "Diameter": 5,
        "Discovered": "1986-10-10",
        "Comment": "Unusual Earth-associated orbit"
    },
    {
        "Name": "4179 Toutatis",
        "Diameter": "4.5x2.4x1.9",
        "Discovered": "1989-01-04",
        "Comment": "Closely approached Earth on September 29, 2004"
    },
    {
        "Name": "4769 Castalia",
        "Diameter": "1.8x0.8",
        "Discovered": "1989-08-09",
        "Comment": "First asteroid to be radar-imaged in sufficient detail for 3D modeling[24]"
    },
    {
        "Name": "5261 Eureka",
        "Diameter": "~2-4",
        "Discovered": "1990-06-20",
        "Comment": "First Mars trojan (Lagrangian point L5) discovered"
    },
    {
        "Name": "11885 Summanus",
        "Diameter": 1.3,
        "Discovered": "1990-09-25",
        "Comment": "First automated discovery of a near-Earth object (NEO)"
    },
    {
        "Name": "(29075) 1950 DA",
        "Diameter": 1.1,
        "Discovered": "1950-02-23",
        "Comment": "Will approach Earth very closely in 2880, collision unlikely (1 in 8,300 or 0.012%)[25]"
    },
    {
        "Name": "69230 Hermes",
        "Diameter": 0.3,
        "Discovered": "1937-10-28",
        "Comment": "Named but not numbered until its recovery in 2003 (65 years later)"
    },
    {
        "Name": "99942 Apophis",
        "Diameter": 0.3,
        "Discovered": "2004-06-19",
        "Comment": "First asteroid to rank greater than one on the Torino Scale (it was ranked at 2, then 4; now down to 0). Previously better known by its provisional designation 2004 MN4."
    },
    {
        "Name": "(433953) 1997 XR2",
        "Diameter": 0.23,
        "Discovered": "1997-12-04",
        "Comment": "First asteroid to rank greater than zero on the impact-risk Torino Scale (it was ranked 1; now at 0)"
    },
    {
        "Name": "1998 KY26",
        "Diameter": 0.030,
        "Discovered": "1998-06-02",
        "Comment": "Approached within 800,000 km of Earth"
    },
    {
        "Name": "2002 AA29",
        "Diameter": 0.1,
        "Discovered": "2002-01-09",
        "Comment": "Unusual Earth-associated orbit"
    },
    {
        "Name": "2004 FH",
        "Diameter": 0.030,
        "Discovered": "2004-03-15",
        "Comment": "Discovered before it approached within 43,000 km of Earth on March 18, 2004."
    },
    {
        "Name": "2008 TC3",
        "Diameter": "~0.003",
        "Discovered": "2008-10-06",
        "Comment": "First Earth-impactor to be spotted before impact (on October 7, 2008)"
    },
    {
        "Name": "2010 TK7",
        "Diameter": "~0.3",
        "Discovered": "2010-10",
        "Comment": "First Earth trojan to be discovered"
    },
    {
        "Name": "2014 RC",
        "Diameter": "~0.017",
        "Discovered": "2014-09-01",
        "Comment": "Asteroid with fastest rotation: 16.2 seconds"
    }
]
