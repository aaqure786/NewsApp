import React , { useEffect,useState} from 'react'
import Newsitems from './Newsitems'
// import axios from 'axios';
export default function New() {
// let article = [
//      {
//         "source": {
//             "id": null,
//             "name": "ESPN"
//         },
//         "author": "Katie Barnes",
//         "title": "Women's NCAA tournament 2022 - UConn's double-overtime win over NC State an instant classic - ESPN",
//         "description": "UConn and NC State went to the wire -- twice! -- in the first double-overtime game in women's Elite Eight history, and the top game of the 2022 tournament so far.",
//         "url": "https://www.espn.com/womens-college-basketball/story/_/id/33618415/women-ncaa-tournament-2022-uconn-double-win-nc-state-instant-classic",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0329%2Fr992499_1296x729_16%2D9.jpg",
//         "publishedAt": "2022-03-29T03:28:13Z",
//         "content": "BRIDGEPORT, Conn. -- By the time the first overtime tipped off Monday night in the Bridgeport Regional final of the 2022 women's NCAA tournament, the game was already an instant classic.\r\nNever mind … [+5093 chars]"
//     },
//     {
//         "source": {
//             "id": "politico",
//             "name": "Politico"
//         },
//         "author": null,
//         "title": "Trump likely committed felony obstruction, federal judge rules - POLITICO",
//         "description": "A federal judge ruled that former President Donald Trump “more likely than not” attempted to illegally obstruct Congress.",
//         "url": "https://www.politico.com/news/2022/03/28/trump-judge-felony-obstruction-insurrection-00020918",
//         "urlToImage": "https://static.politico.com/4f/cd/97f6588449708d670b11bcbedb67/ap22086151077765.jpg",
//         "publishedAt": "2022-03-29T03:02:22Z",
//         "content": "Carters sweeping and historic ruling came as he ordered the release to the Houses Jan. 6 committee of 101 emails from Trump ally John Eastman, rejecting Eastmans effort to shield them via attorney-cl… [+6876 chars]"
//     },
//     {
//         "source": {
//             "id": "cbs-news",
//             "name": "CBS News"
//         },
//         "author": "Scott MacFarlane, Rebecca Kaplan, Caroline Linton",
//         "title": "House January 6 committee refers contempt charges for Navarro and Scavino - CBS News",
//         "description": "\"In short: these two men played key roles in the ex-President's efforts to overturn the results of the 2020 election,\" committee chair Bennie Thompson said in a statement.",
//         "url": "https://www.cbsnews.com/news/peter-navarro-dan-scavino-house-january-6-committee-refers-contempt-charge/",
//         "urlToImage": "https://cbsnews3.cbsistatic.com/hub/i/r/2022/03/24/ad61988f-664d-4079-9160-ff5e8647c456/thumbnail/1200x630/533db46b962bbd368940cd9904e5e667/scavino-navarro.jpg",
//         "publishedAt": "2022-03-29T02:03:00Z",
//         "content": "The House select committee investigating the January 6 attack on the U.S. Capitol unanimously voted Monday night to recommend that former Trump aides Peter Navarro and Dan Scavino be held in contempt… [+8048 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "MLB Trade Rumors"
//         },
//         "author": "Darragh McDonald",
//         "title": "Cardinals Sign Albert Pujols - MLB Trade Rumors",
//         "description": "Albert Pujols' career has come full-circle, as the Cardinals announced Monday afternoon they'd agreed to a deal to bring him back to &hellip;",
//         "url": "https://www.mlbtraderumors.com/2022/03/cardinals-to-sign-albert-pujols.html",
//         "urlToImage": "https://cdn.mlbtraderumors.com/files/2022/03/Albert_Pujols_Dodgers-1024x682.jpg",
//         "publishedAt": "2022-03-29T01:59:56Z",
//         "content": "Albert Pujols’ career has come full-circle, as the Cardinals announced Monday afternoon they’d agreed to a deal to bring him back to St. Louis. The MVP Sports Group client will reportedly be guarante… [+3272 chars]"
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": null,
//         "title": "Dow Jones Futures Fall Ahead Of Russia-Ukraine Talks; Tesla Stock Surges Near Buy Point - Investor's Business Daily",
//         "description": null,
//         "url": "https://news.google.com/__i/rss/rd/articles/CBMilgFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC9zdG9jay1tYXJrZXQtdG9kYXkvZG93LWpvbmVzLWZ1dHVyZXMtcnVzc2lhLXVrcmFpbmUtY2Vhc2UtZmlyZS10YWxrcy1vbi1kZWNrLXRlc2xhLXN0b2NrLXN1cmdlcy1uZWFyLWJ1eS1wb2ludC_SAQA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2022-03-29T01:24:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "the-verge",
//             "name": "The Verge"
//         },
//         "author": "Richard Lawler",
//         "title": "Apex Legends Warriors event includes upgrades for PS5 and Xbox Series X and S - The Verge",
//         "description": "EA and Respawn Entertainment are launching new features for the PlayStation 5 and Xbox Series X / S versions of Apex Legends on March 29th. They’ll add 4K and HDR output now, with 120Hz support coming soon.",
//         "url": "https://www.theverge.com/2022/3/28/22999936/apex-legends-ps5-xbox-series-x-s-warriors-update",
//         "urlToImage": "https://cdn.vox-cdn.com/thumbor/yKLLNAIzQerMKxj_Totl6GG7-Oc=/0x42:2100x1141/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23351639/APEX_Legends_Screenshots_S12_Map_SabotagedOlympus__1200.jpg",
//         "publishedAt": "2022-03-29T01:08:52Z",
//         "content": "120Hz and adaptive trigger support on the PS5 will take a little longer."
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "NBCSports.com"
//         },
//         "author": "Peter King",
//         "title": "Peter King's Football Morning In America - OT Rule Proposal + Tyreek Hill Trade - NBC Sports - NBC Sports",
//         "description": "We could be looking at one of the all-time sleepy NFL meetings if the one thing that matters this week—the proposal to make overtime fair—doesn’t pass when it comes to a vote in Palm Beach, Fla.I canvassed a few people at the meetings over the weekend. Some a…",
//         "url": "https://profootballtalk.nbcsports.com/2022/03/28/nfl-overtime-rule-tyreek-hill-trade-fmia-peter-king/",
//         "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/03/GettyImages-1387530525.jpg",
//         "publishedAt": "2022-03-29T00:20:25Z",
//         "content": "We could be looking at one of the all-time sleepy NFL meetings if the one thing that matters this weekthe proposal to make overtime fairdoesnt pass when it comes to a vote in Palm Beach, Fla.\r\nI canv… [+53946 chars]"
//     },
//     {
//         "source": {
//             "id": "the-verge",
//             "name": "The Verge"
//         },
//         "author": "Sheena Vasani",
//         "title": "The best cheap Sonos speaker and soundbar deals March 2022 - The Verge",
//         "description": "Sonos offers high-quality speakers and soundbars, but they don’t come cheap. Thankfully, there are a couple of Sonos deals to take advantage of right now on items ranging from the Sonos Roam to the last-gen Sonos One and Beam.",
//         "url": "https://www.theverge.com/good-deals/22979801/sonos-deals-speakers-soundbars-subwoofers-sale",
//         "urlToImage": "https://cdn.vox-cdn.com/thumbor/E1rwlAfHyPxAE43gW23p0UeYLg4=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22422273/RoamSidetable.jpg",
//         "publishedAt": "2022-03-29T00:19:22Z",
//         "content": "There are new and refurbished deals alike\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nThe Sonos Roam launched last year is now on sale in refu… [+9558 chars]"
//     },
//     {
//         "source": {
//             "id": "cnn",
//             "name": "CNN"
//         },
//         "author": "Maegan Vazquez, Kevin Liptak and Alex Marquardt, CNN",
//         "title": "Biden says he was 'expressing my outrage' but not making a policy change when he said Putin 'cannot remain in power' - CNN",
//         "description": "President Joe Biden reiterated on Monday that he was not announcing a change in US policy when he had said that Russian President Vladimir Putin \"cannot remain in power\" -- a remark that caught American and international officials off-guard, sending the White…",
//         "url": "https://www.cnn.com/2022/03/28/politics/biden-putin-ukraine-russia/index.html",
//         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220326150731-biden-speech-poland-russia-ukraine-0326-super-tease.jpg",
//         "publishedAt": "2022-03-29T00:18:00Z",
//         "content": "(CNN)President Joe Biden reiterated on Monday that he was not announcing a change in US policy when he had said that Russian President Vladimir Putin \"cannot remain in power\" -- a remark that caught … [+10438 chars]"
//     },
//     {
//         "source": {
//             "id": "cnn",
//             "name": "CNN"
//         },
//         "author": "Jamie Gangel and Zachary Cohen, CNN",
//         "title": "January 6 Committee will seek interview with Ginni Thomas, sources say - CNN",
//         "description": "The House Select Committee investigating January 6 will seek an interview with conservative activist Virginia \"Ginni\" Thomas, wife of Supreme Court Justice Clarence Thomas, according to multiple sources familiar with the investigation.",
//         "url": "https://www.cnn.com/2022/03/28/politics/january-6-committee-ginni-thomas/index.html",
//         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220327185809-january-6-committee-ginni-thomas-super-tease.jpg",
//         "publishedAt": "2022-03-28T23:40:00Z",
//         "content": "(CNN)The House Select Committee investigating January 6 will seek an interview with conservative activist Virginia \"Ginni\" Thomas, wife of Supreme Court Justice Clarence Thomas, according to multiple… [+5655 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "New York Post"
//         },
//         "author": "Jorge Fitz-Gibbon",
//         "title": "Watch: motorist leaps out of truck's path in deadly Pennsylvania pileup - New York Post ",
//         "description": "Wild dashcam video captures the moment a stranded motorist lept for his life as a truck barreled into an 18-wheeler on a Pennsylvania highway.",
//         "url": "https://nypost.com/2022/03/28/video-shows-motorist-leap-out-of-trucks-path-in-fatal-pileup/",
//         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/03/interstate-crash-jump-1.jpg?quality=90&strip=all&w=1024",
//         "publishedAt": "2022-03-28T23:36:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "the-washington-post",
//             "name": "The Washington Post"
//         },
//         "author": "Cate Cadell, Dan Lamothe, Mariana Alfaro",
//         "title": "Ukraine claws back territory in country's north ahead of talks in Istanbul - The Washington Post",
//         "description": "",
//         "url": "https://www.washingtonpost.com/national-security/2022/03/28/ukraine-claws-back-territory-countys-north-ahead-talks-istanbul/",
//         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EHEEJPFOWQI6ZHN5BVDATVCMDQ.jpg&w=1440",
//         "publishedAt": "2022-03-28T23:06:33Z",
//         "content": "In Washington, President Biden defended unscripted comments he made in Poland over the weekend when he said that Russian President Vladimir Putin cannot remain in power. He clarified that he was expr… [+7705 chars]"
//     },
//     {
//         "source": {
//             "id": "politico",
//             "name": "Politico"
//         },
//         "author": null,
//         "title": "U.S. training Ukrainian troops in Poland, Biden seems to reveal - POLITICO",
//         "description": "Fixing a previous gaffe in a Monday press conference, the president appeared to let slip an undisclosed detail of the U.S. effort to bolster Ukraine's fighting forces.",
//         "url": "https://www.politico.com/news/2022/03/28/u-s-training-ukrainian-troops-poland-biden-00021123",
//         "urlToImage": "https://static.politico.com/d7/6c/8bef09f747d9beff97d33e02a131/https-delivery.gettyimages.com/downloads/1388239384",
//         "publishedAt": "2022-03-28T23:04:50Z",
//         "content": "But to date, the Biden administration has painstakingly made the case that that is as far as theyll go. On March 22, Jake Sullivan denied that Americans were currently training Ukrainians. We do, of … [+4013 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "YourTango"
//         },
//         "author": "Kate Rose",
//         "title": "The 3 Zodiac Signs Who Have The Best Horoscopes On March 29, 2022 - YourTango",
//         "description": "For Aquarius, Capricorn, and Leo, who have the best horoscopes on March 29, 2022, this Tuesday, the skies turn quieter today helping you bring home some important lessons from yesterday’s astrology.",
//         "url": "https://www.yourtango.com/2022349316/zodiac-signs-best-horoscopes-march-29-2022",
//         "urlToImage": "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/zodiac-signs-best-horoscopes-march-29-2022.png?itok=d1UKtr_p",
//         "publishedAt": "2022-03-28T23:04:02Z",
//         "content": "The skies turn quieter today, helping you bring home some important lessons from yesterdays astrology.\r\nWhile there was a great amount of activity yesterday, today offers only a couple of different i… [+6213 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "YouTube"
//         },
//         "author": null,
//         "title": "New Details Emerge About The Death Of Foo Fighters Drummer Taylor Hawkins - ET Canada",
//         "description": "Fans around the world were left shocked after Taylor Hawkins died in Bogota, Colombia on March 25. Now, an initial forensic medical study by Colombia Attorne...",
//         "url": "https://www.youtube.com/watch?v=Ib6ChX2VX7A",
//         "urlToImage": "https://i.ytimg.com/vi/Ib6ChX2VX7A/hqdefault.jpg",
//         "publishedAt": "2022-03-28T22:58:17Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "cnn",
//             "name": "CNN"
//         },
//         "author": "Tasnim Ahmed, CNN",
//         "title": "Men's use of diabetes drug just before conception is linked to a 40% increase in birth defects, study finds - CNN",
//         "description": "Metformin use by men in the three-month period before they conceived a child was linked to a 40% higher risk of birth defects in the offspring, according to a study published Monday in the journal Annals of Internal Medicine.",
//         "url": "https://www.cnn.com/2022/03/28/health/paternal-metformin-use-birth-defects/index.html",
//         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/160324161342-fda-black-box-drugs-metformin-super-tease.jpg",
//         "publishedAt": "2022-03-28T22:48:00Z",
//         "content": "(CNN)Metformin use by men in the three-month period before they conceived a child was linked to a 40% higher risk of birth defects in the offspring, according to a study published Monday in the journ… [+3231 chars]"
//     },
//     {
//         "source": {
//             "id": "cnn",
//             "name": "CNN"
//         },
//         "author": "Nathan Hodge, CNN and Julia Presniakova in Lviv",
//         "title": "Mariupol evacuation corridors 'in the hands of the occupiers' as mayor tells everyone to leave - CNN",
//         "description": "Ukrainian forces \"continue to maintain circular defense\" in the besieged Ukrainian city of Mariupol, the Ukrainian general staff said early Tuesday, even as Russian forces consolidated control around the southeastern port city.",
//         "url": "https://www.cnn.com/2022/03/28/europe/mariupol-mayor-ukraine-occupiers-intl/index.html",
//         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220328153002-02-mariupol-occupation-super-tease.jpg",
//         "publishedAt": "2022-03-28T22:22:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Page Six"
//         },
//         "author": "Caroline Blair",
//         "title": "How Will Smith's ex-wife, Sheree Zampino, reacted to Oscars slap - Page Six",
//         "description": "“Epic Night! Congratulations again – when 1 wins we all win! #family1st,” Zampino wrote on Instagram following her ex-husband’s controversial night at the Oscars 2022.",
//         "url": "https://pagesix.com/2022/03/28/how-will-smiths-ex-wife-sheree-zampino-reacted-to-oscars-slap/",
//         "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/03/Sheree-Zampino-Will-Smith-Oscars-2022_HP-1.jpg?quality=90&strip=all&w=1200",
//         "publishedAt": "2022-03-28T22:21:00Z",
//         "content": "Will Smiths ex-wife, Sheree Zampino, apparently skedaddled from a 2022 Oscars viewing party after the actor slapped Chris Rock during Sundays ceremony.\r\nShe left. Shes hanging out with him and the fa… [+2324 chars]"
//     },
//     {
//         "source": {
//             "id": "axios",
//             "name": "Axios"
//         },
//         "author": "Shawna Chen, Selene San Felice",
//         "title": "DeSantis signs \"Don't Say Gay\" bill into law - Axios",
//         "description": "The new law bans classroom instruction on sexual orientation and gender identity from kindergarten through 3rd grade.",
//         "url": "https://www.axios.com/dont-say-gay-bill-desantis-578593fc-5d6e-4098-b69a-c838b017ce24.html",
//         "urlToImage": "https://images.axios.com/6PY1F1NXL0L53KIYqsqUiVBFez4=/0x0:3000x1687/1366x768/2022/03/28/1648487637435.jpg",
//         "publishedAt": "2022-03-28T21:59:40Z",
//         "content": "Florida Gov. Ron DeSantis (R) on Monday signed into law the controversial Parental Rights in Education Bill dubbed by critics the \"Don't Say Gay\" bill to ban classroom instruction on sexual orientati… [+2913 chars]"
//     },
//     {
//         "source": {
//             "id": "breitbart-news",
//             "name": "Breitbart News"
//         },
//         "author": "Penny Starr",
//         "title": "Stanford Redefines Parents as ‘Mother Pairs’ and ‘Mixed-Gender’ in Birth Study - Breitbart",
//         "description": "A Stanford University study found “mother pairs” had more medical problems during or after giving birth than couples made up of a man and a woman.",
//         "url": "https://www.breitbart.com/politics/2022/03/28/stanford-redefines-parents-mother-pairs-mixed-gender-birth-study/",
//         "urlToImage": "https://media.breitbart.com/media/2022/03/MATERNITY-DELIVERY-640x335.jpg",
//         "publishedAt": "2022-03-28T21:47:30Z",
//         "content": "Stanford Universitys School of Medicine released the results of a study of 1.5 million pregnant women, including 2,572 lesbian couples, and found that mother pairs had more medical problems than “mix… [+2307 chars]"
//     }
// ]
const [news,setNews] = useState([])
useEffect(function effectFunction() {
    async function fetchBooks() {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=3bff3fe16d114f428be8c5c345cc203b');
        const json = await response.json();
        setNews(json.data);
    }
    fetchBooks();
}, []);


  return (
    <div>
        <div className="container">
            <div className="row my-2">
            {
                news.map((newsItem)=> {
                    return  <div className="col-md-4 my-2" key={newsItem.url} >
                 <Newsitems  title ={newsItem.title} description = {newsItem.description} imgurl={newsItem.urlToImage} gotoUrl={newsItem.url}/>
                </div>
                        })
            }     
        </div>
  </div>
    </div>
  )
}
