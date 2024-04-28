
# Introduction

## Network Communication Protocols

![Network Diagram](https://miro.medium.com/v2/resize:fit:697/1*ra9pvWJNv4CkRfbLmLZkOQ.png)

## TCP vs UDP

![TCP vs UDP](https://www.freecodecamp.org/news/content/images/2021/07/tcp-vs-udp-diagram.png)

A good way to think about these differences is that TCP is like a conversation between two people. Person A asks person B to talk. Person B says sure, that's fine. Person A agrees and they both start speaking.

UDP is more like a protester outside with a megaphone. Everyone who is paying attention to the protester should hear most of what they're saying. But there's no guarantee that everyone in the area will hear what the protester is saying, or that they're even listening.

### TCP (Transmission Control Protocol)

TCP is the most common networking protocol online. TCP is extremely reliable, and is used for everything from surfing the web (HTTP), sending emails (SMTP), and transferring files (FTP).

TCP is used in situations where it's necessary that all data being sent by one device is received by another completely intact.

For example, when you visit a website, TCP is used to guarantee that everything from the text, images, and code needed to render the page arrives. Without TCP, images or text could be missing, or arrive in the incorrect order, breaking the page.

TCP is a connection-oriented protocol, meaning that it establishes a connection between two devices before transferring data, and maintains that connection throughout the transfer process.

### UDP (User Datagram Protocol)

UDP is another one of the major protocols that make up the internet protocol suite. UDP is less reliable than TCP, but is much simpler.

UDP is used for situations where some data loss is acceptable, like live video/audio, or where speed is a critical factor like online gaming.

### HTTP (HyperText Transfer Protocol)

![HTTP Protocol](https://i.imgur.com/ReFw6nN.png)

At the heart of HTTP is a simple request-response system. The "requesting" computer, also known as the "client", asks another computer for some information. That computer, the "server" sends back a response with the information that was requested.

Each time you visit a website, your browser is making an HTTP request to that website's server. The server responds with all the text, images, and styling information that your browser needs to render its pretty website.

A URL, or Uniform Resource Locator, is essentially the address of another computer, or "server" on the internet. Part of the URL specifies how to reach the server, and part of it tells the server what information we want

# Brief
You will work individually.

To learn more about networking communication, let's try the HTTPS protocol and how it's used differently.

- [x] Install Postman: https://www.postman.com/
- [x] Explore MARVEL API https://developer.marvel.com/documentation/getting_started
- [x] Create an HTTPS call to at least 3 available API on MARVEL, and paste the results here:

# HTTP Call

Note: In order for the API key to work, you will need to Hash your TS + Private Key + Public Key

For security purposes, I have replaced my own API key and Hash with XXXXXXXX.

### Getting 2 characters with name starting with S 
**URL:** https://gateway.marvel.com/v1/public/characters?apikey=XXXXXXXX&ts=1&hash=XXXXXXXX&nameStartsWith=S&limit=2

**Results:**
```
{
    "code": 200,
    "status": "Ok",
    "copyright": "© 2024 MARVEL",
    "attributionText": "Data provided by Marvel. © 2024 MARVEL",
    "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2024 MARVEL</a>",
    "etag": "329c2041bff86332280651a7224f7f06a5740f0e",
    "data": {
        "offset": 0,
        "limit": 2,
        "total": 202,
        "count": 2,
        "results": [
            {
                "id": 1009552,
                "name": "S.H.I.E.L.D.",
                "description": "",
                "modified": "2017-05-04T14:41:42-0400",
                "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/51097abb8e306",
                    "extension": "jpg"
                },
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009552",
                "comics": {
                    "available": 176,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009552/comics",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22856",
                            "name": "Adam: Legend of the Blue Marvel (2008) #2"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/56034",
                            "name": "Agents of S.H.I.E.L.D. (2016) #6"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/56035",
                            "name": "Agents of S.H.I.E.L.D. (2016) #7"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/56036",
                            "name": "Agents of S.H.I.E.L.D. (2016) #8"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/56037",
                            "name": "Agents of S.H.I.E.L.D. (2016) #9"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/56038",
                            "name": "Agents of S.H.I.E.L.D. (2016) #10"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6970",
                            "name": "Avengers (1963) #115"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/32477",
                            "name": "Avengers & the Infinity Gauntlet (2010) #1"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21247",
                            "name": "Avengers/Invaders (2008) #1"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21394",
                            "name": "Avengers/Invaders (2008) #2"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22524",
                            "name": "Avengers/Invaders (2008) #6"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/64791",
                            "name": "Avengers: Standoff (Trade Paperback)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/65326",
                            "name": "Avengers: Tales to Astonish (Trade Paperback)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/47986",
                            "name": "Black Widow (2014) #1"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/47987",
                            "name": "Black Widow (2014) #2"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/47988",
                            "name": "Black Widow (2014) #3"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/47989",
                            "name": "Black Widow (2014) #4"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/47990",
                            "name": "Black Widow (2014) #5"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/47991",
                            "name": "Black Widow (2014) #6"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/47992",
                            "name": "Black Widow (2014) #7"
                        }
                    ],
                    "returned": 20
                },
                "series": {
                    "available": 77,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009552/series",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
                            "name": "Adam: Legend of the Blue Marvel (2008)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/20607",
                            "name": "Agents of S.H.I.E.L.D. (2016)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                            "name": "Avengers (1963 - 1996)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/9859",
                            "name": "Avengers & the Infinity Gauntlet (2010)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/4864",
                            "name": "Avengers/Invaders (2008 - 2009)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/23601",
                            "name": "Avengers: Standoff (2017)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/23777",
                            "name": "Avengers: Tales to Astonish (2017)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/18138",
                            "name": "Black Widow (2014 - 2015)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/26394",
                            "name": "Blade: Vampire Hunter (1999 - 2000)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/24019",
                            "name": "Cable & X-Force: Onslaught Rising (2018)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/832",
                            "name": "Captain America (2004 - 2011)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/21100",
                            "name": "CAPTAIN AMERICA: STEVE ROGERS VOL. 2 - THE TRIAL OF MARIA HILL TPB (2017)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/1613",
                            "name": "Captain America: Winter Soldier Vol. 2 (2006)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/21417",
                            "name": "Civil War II (2016)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/10105",
                            "name": "Civil War: X-Men (2011)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/2002",
                            "name": "Daredevil (1964 - 1998)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/27502",
                            "name": "DEADPOOL BY POSEHN & DUGGAN: THE COMPLETE COLLECTION VOL. 2 TPB (2018)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/22481",
                            "name": "DEADPOOL THE DUCK TPB (2017)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/13631",
                            "name": "Essential Iron Man Vol. 2 (2010 - 2011)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/2123",
                            "name": "Fantastic Four (1996 - 1997)"
                        }
                    ],
                    "returned": 20
                },
                "stories": {
                    "available": 205,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009552/stories",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/4243",
                            "name": "2 of 6 - Winter Soldier",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/4244",
                            "name": "2 of 6 - Winter Soldier",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/4271",
                            "name": "1 of ? - Civil War",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/10240",
                            "name": "Cover #10240",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/10241",
                            "name": "Who Strikes at---Shield?",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/10249",
                            "name": "Cover #10249",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/10261",
                            "name": "Cover #10261",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/11993",
                            "name": "The Warrior and the Whip!",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14478",
                            "name": "Below Us the Battle!",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/15611",
                            "name": "Before I'd Be Slave...",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/15754",
                            "name": "... And a HYDRA New Year!",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/16352",
                            "name": "Flying Blind Part 3: Under the Gun",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/16354",
                            "name": "Flying Blind Part 4: Face to Face with the Truth!",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/18823",
                            "name": "Incredible Hulk (1962) #337",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/18824",
                            "name": "Crossroads",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25760",
                            "name": "Out Of The Blue (Into The Fire) [Part 1 of 3]",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25763",
                            "name": "Broken! [Part 2 of 3]",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25834",
                            "name": "Doomsday!",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/27422",
                            "name": "The Dogs of War, Part 7",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/28542",
                            "name": "Out Of The Blue (Into The Fire) [Part 1 of 3]",
                            "type": "interiorStory"
                        }
                    ],
                    "returned": 20
                },
                "events": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009552/events",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
                            "name": "Civil War"
                        }
                    ],
                    "returned": 1
                },
                "urls": [
                    {
                        "type": "detail",
                        "url": "http://marvel.com/characters/1969/shield.?utm_campaign=apiRef&utm_source=49ad38851c732c5c9318e995fdb3e9f7"
                    },
                    {
                        "type": "wiki",
                        "url": "http://marvel.com/universe/S.H.I.E.L.D.?utm_campaign=apiRef&utm_source=49ad38851c732c5c9318e995fdb3e9f7"
                    },
                    {
                        "type": "comiclink",
                        "url": "http://marvel.com/comics/characters/1009552/shield.?utm_campaign=apiRef&utm_source=49ad38851c732c5c9318e995fdb3e9f7"
                    }
                ]
            },
            {
                "id": 1009553,
                "name": "Sabra",
                "description": "Ruth Bat-Seraph is an Israeli national who, along with her family, was taken to a special community by the Israeli government when her genetic mutation manifested.",
                "modified": "1969-12-31T19:00:00-0500",
                "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    "extension": "jpg"
                },
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009553",
                "comics": {
                    "available": 21,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009553/comics",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40116",
                            "name": "Amazing Spider-Man (1999) #685"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/42760",
                            "name": "Amazing Spider-Man: Ends of the Earth (2012) #1"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8586",
                            "name": "Excalibur (1988) #120"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8587",
                            "name": "Excalibur (1988) #121"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/9197",
                            "name": "Incredible Hulk (1962) #386"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/9198",
                            "name": "Incredible Hulk (1962) #387"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/15522",
                            "name": "Marvel Super Heroes (1990) #6"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/5451",
                            "name": "New X-Men (Hardcover)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/14951",
                            "name": "New X-Men (2001) #132"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/994",
                            "name": "New X-Men Vol. III: New Worlds (Hardcover)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/13907",
                            "name": "Uncanny X-Men (1963) #366"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/13909",
                            "name": "Uncanny X-Men (1963) #368"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40860",
                            "name": "X-Men (2010) #36"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40855",
                            "name": "X-Men (2010) #37"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/14358",
                            "name": "X-Men (1991) #67"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/14359",
                            "name": "X-Men (1991) #68"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/14360",
                            "name": "X-Men (1991) #69"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/14365",
                            "name": "X-Men (1991) #73"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/14295",
                            "name": "X-Men (1991) #111"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1951",
                            "name": "X-Men: Eve of Destruction (Trade Paperback)"
                        }
                    ],
                    "returned": 20
                },
                "series": {
                    "available": 13,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009553/series",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
                            "name": "Amazing Spider-Man (1999 - 2013)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/16312",
                            "name": "Amazing Spider-Man: Ends of the Earth (2012)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/2011",
                            "name": "Excalibur (1988 - 1998)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
                            "name": "Incredible Hulk (1962 - 1999)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/2301",
                            "name": "Marvel Super Heroes (1990 - 1993)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/2281",
                            "name": "New X-Men (2001 - 2004)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/1807",
                            "name": "New X-Men (2006)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/56",
                            "name": "New X-Men Vol. III: New Worlds (2004)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
                            "name": "Uncanny X-Men (1963 - 2011)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/2265",
                            "name": "X-Men (1991 - 2001)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/9906",
                            "name": "X-Men (2010 - 2013)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/1319",
                            "name": "X-Men: Eve of Destruction (2005)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/1304",
                            "name": "X-Statix Vol. 4: X-Statix Vs. the Avengers (2004)"
                        }
                    ],
                    "returned": 13
                },
                "stories": {
                    "available": 21,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009553/stories",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/18921",
                            "name": "Incredible Hulk (1962) #386",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/18922",
                            "name": "Little Hitler",
                            "type": ""
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/18923",
                            "name": "Incredible Hulk (1962) #387",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/18924",
                            "name": "Hiding Behind Mosques",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/22453",
                            "name": "Current Events",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/22455",
                            "name": "With Friends Like These...",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/28276",
                            "name": "The Shot Heard Round The World (The Magneto War Part One)",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/28280",
                            "name": "Mansions In Heaven",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/29143",
                            "name": "Prelude to Destruction",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/29272",
                            "name": "The End of Days",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/29274",
                            "name": "Heart of the Matter",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/29275",
                            "name": "Operation Zero Tolerance: The Conclusion",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/29276",
                            "name": "Last Exit",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/29285",
                            "name": "Identity Crisis !",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/30438",
                            "name": "Ambient Magnetic Fields",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/31624",
                            "name": "Cover #31624",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/31628",
                            "name": "Fruits of the Wound",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/91029",
                            "name": "Amazing Spider-Man (1999) #685",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92534",
                            "name": "X-Men (2010) #37",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92544",
                            "name": "X-Men (2010) #36",
                            "type": "cover"
                        }
                    ],
                    "returned": 20
                },
                "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009553/events",
                    "items": [],
                    "returned": 0
                },
                "urls": [
                    {
                        "type": "detail",
                        "url": "http://marvel.com/characters/1972/sabra?utm_campaign=apiRef&utm_source=49ad38851c732c5c9318e995fdb3e9f7"
                    },
                    {
                        "type": "wiki",
                        "url": "http://marvel.com/universe/Sabra?utm_campaign=apiRef&utm_source=49ad38851c732c5c9318e995fdb3e9f7"
                    },
                    {
                        "type": "comiclink",
                        "url": "http://marvel.com/comics/characters/1009553/sabra?utm_campaign=apiRef&utm_source=49ad38851c732c5c9318e995fdb3e9f7"
                    }
                ]
            }
        ]
    }
}
```

### Fetches list of comic stories with a limit of 1

**URL:** https://gateway.marvel.com:443/v1/public/stories?apikey=XXXXXXXX&ts=1&hash=XXXXXXXX&limit=1

**Results:**
```
{
    "code": 200,
    "status": "Ok",
    "copyright": "© 2024 MARVEL",
    "attributionText": "Data provided by Marvel. © 2024 MARVEL",
    "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2024 MARVEL</a>",
    "etag": "c3555108836baf510882453a9a112cd770edd60c",
    "data": {
        "offset": 0,
        "limit": 1,
        "total": 137553,
        "count": 1,
        "results": [
            {
                "id": 7,
                "title": "Investigating the murder of a teenage girl, Cage suddenly learns that a three-way gang war is under way for control of the turf",
                "description": "",
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/7",
                "type": "story",
                "modified": "1969-12-31T19:00:00-0500",
                "thumbnail": null,
                "creators": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/stories/7/creators",
                    "items": [],
                    "returned": 0
                },
                "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/stories/7/characters",
                    "items": [],
                    "returned": 0
                },
                "series": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/stories/7/series",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/6",
                            "name": "CAGE HC (2002)"
                        }
                    ],
                    "returned": 1
                },
                "comics": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/stories/7/comics",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/941",
                            "name": "CAGE HC (Hardcover)"
                        }
                    ],
                    "returned": 1
                },
                "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/stories/7/events",
                    "items": [],
                    "returned": 0
                },
                "originalIssue": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/941",
                    "name": "CAGE HC (Hardcover)"
                }
            }
        ]
    }
}
```

### Fetches lists of comic stories featuring a specific character (i.e. Wolverine) with optional filters

**URL(S):** 

**Get Wolverine's Character ID:** https://gateway.marvel.com/v1/public/characters?apikey=49ad38851c732c5c9318e995fdb3e9f7&ts=1&hash=176950db2cf5f8c64200ff1452fa55e3&nameStartsWith=wolverine&limit=1

```
{
"id": 1009718,
"name": "Wolverine",
"description": "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.",
"modified": "2016-05-02T12:21:44-0400",
"thumbnail": 
}
```

Based on the Character ID of 1009718, we can retrieve comics associated with that character

**Get a single comic associated with Wolverine:** 

**Results:**

```
{
    "code": 200,
    "status": "Ok",
    "copyright": "© 2024 MARVEL",
    "attributionText": "Data provided by Marvel. © 2024 MARVEL",
    "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2024 MARVEL</a>",
    "etag": "a3baa727b69ddd911ae15b731c98aeb8620fdedd",
    "data": {
        "offset": 0,
        "limit": 1,
        "total": 3578,
        "count": 1,
        "results": [
            {
                "id": 459,
                "title": "Featuring the return of legendary X-Men artist Marc Silvestri. In a tale inspired by the classic",
                "description": "",
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/459",
                "type": "cover",
                "modified": "1969-12-31T19:00:00-0500",
                "thumbnail": null,
                "creators": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/stories/459/creators",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/creators/5044",
                            "name": "Marc Silvestri",
                            "role": "penciller (cover)"
                        }
                    ],
                    "returned": 1
                },
                "characters": {
                    "available": 5,
                    "collectionURI": "http://gateway.marvel.com/v1/public/stories/459/characters",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                            "name": "Beast"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009478",
                            "name": "Cassandra Nova"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009327",
                            "name": "Jean Grey"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011271",
                            "name": "New X-Men"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                            "name": "Wolverine"
                        }
                    ],
                    "returned": 5
                },
                "series": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/stories/459/series",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/339",
                            "name": "NEW X-MEN VOL. 7: HERE COMES TOMORROW (2011)"
                        }
                    ],
                    "returned": 1
                },
                "comics": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/stories/459/comics",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1288",
                            "name": "NEW X-MEN VOL. 7: HERE COMES TOMORROW (Trade Paperback)"
                        }
                    ],
                    "returned": 1
                },
                "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/stories/459/events",
                    "items": [],
                    "returned": 0
                },
                "originalIssue": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1288",
                    "name": "NEW X-MEN VOL. 7: HERE COMES TOMORROW (Trade Paperback)"
                }
            }
        ]
    }
}
```

# References & Resources

- https://www.postman.com/alex-postman-workspace/workspace/marvel-api-workspace/documentation/11320063-5d70d457-7b01-4587-8733-de2b5eef7083
- Hash Generator: https://www.md5.cz/ 
- https://www.freecodecamp.org/news/tcp-vs-udp/
- https://www.freecodecamp.org/news/http-full-course/