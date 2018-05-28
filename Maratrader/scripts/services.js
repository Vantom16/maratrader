'use strict';

angular.module('maratraderApp')

    .service('courseFactory', function(){
    
   
     
    var chapters=[
                
                         {
                         _id:0,
                         name: 'Chapter 1:  Forex Introduction',
                         image:'images/technical-analysis.png',
                         category: 'Basic course',
                         description: 'Foreign currency exchange is the act of exchanging one country currency with currency from another country. Major players in forex market are international banks, large financial institutions, multi-national corporations or companies and retail traders like me and you. Foreign currency market is also known as FOREX or Forex Market. Open market trades non-stop from Sunday 4PM Central America time to 4PM Friday. Forex market is the largest and most liquid market in the world with an average daily turnover of $5.3 trillion a day according to Bank for international settlements. Foreign exchange is an over the counter (OTC) market, that means that there is no central exchange and clearing house where orders are matched. Main Geographic trading locations around the world are London, New York, Tokyo, Sydney. Foreign exchange deals are made between traders based on trust and reputation to deliver on an agreement. especially when banks trade with one another. In retail market, individual traders sign a written legally accepted contract between themselves and their broker, in exchange of a deposit of funds on which basis the customer may trade. Forex market exits to facilitate international trade and investment by allowing businesses and travellers to convert one currency into another. Example, a US business may import goods from Europe and pay in EURO, even though the business is based in US and operates in US dollars. Also provides a medium for speculation which works to add deeper liquidity to the market, making exchange rates less volatile. The Carry-Trade is facilitated via the Forex market, this is a trade in which investors can buy high-yielding currencies against low yielding currencies and profit from the higher yielding interest rate. Forex currency rates are determined by: (a)Economic factors such as government and central banks economic policies, country economic conditions as described in economic reports as well as economic indicators such as unemployment rate(b)Political conditions- International, national and regional political conditions.(c)Market Psychology- Psychology of market participants can influence the foreign exchange market in numerous ways, like fear and excitement. All this affect the way traders enter and exit market. (d)Trading Robots or Algorithms- Electronic trading based on algorithms or robot trading is becoming more and more popular, thus having a large effect on Forex currency rates. Are many advantages of trading the forex market: (a) Is largest market in the world, with daily volumes exceeding $5 trillions per day. This makes it easy to get in and out of positions due to large market liquidity. (b) Trade any time you want as is no opening bell. Enter and exit atrade whenever you want from Sunday 4pm central time to Friday 4pm central time. (c) You can fund your trading account with as little as $250 at many retail brokers and begin trading the same day in some cases. Market orders excutions allow you to trade at the click of a mouse. (d) Fewer currency pairs to focus on, unlike stock market that involves alot of companies financial statements to analyze. (e) freedom to trade anywher in the world with the only requirements of having mobile phone, laptop or desktop and internet connection. (f)Commission free trading with many retail market brokers and overal lower transaction costs than stocks and commodities. (h)Greater liquidity makes forex market have a well defined long term trends that respond well to technical analysis and charting methods. Traders can profit in any market conditions. No inherent structural market bias like the long bias of the stock market, so traders have equal opportunity to profit in rising or falling markets. The most traded forex currencies are USD, EUR, JPY, GBP, AUD, CHF.',
                             comments: [
                               {
                                   rating:5,
                                   comment:"Great introduction",
                                   author:"Ben Limo",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Experirnce matters in trading",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Good work",
                                   author:"Paul Barasa",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Mom",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your best. Keep it up",
                                   author:"Jane",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                              
                        {
                        _id:1,
                        name: 'Chapter 2:  Forex Terminology',
                        category:'Basic course',
                        description: 'Basic idea of trading the market is to buy low and sell high or sell high and buy low. This may sound a little confusing to some of you because you are probably used to stock market, where we only buy low and exit high. Or thinking how can I sell what I dont own? Well, in forex market when you sell a currency pair you are actually buying the quote currency(second currency pair) and selling the base currency(first currency in the pair).TERMINOLOGIES(a)Pips: Unit by which a currency pair price quote changes. While trading forex you will often hear about spread. Is normally revealed when you compare the bid price and the ask price. Example, EURUSD is quoted at a bid price of 1.4502 and ask price of 1.4505. The difference is USD 0.0003, which is equal to 3 pips. In most currencies, the 4th decimal place is equal to 1 pip, example 0.0002-0.0001=1 pip. JPY pairs show the 1 pip in the second decimal place. Example: USDJPY 111.05-111.04=1 Pip.(b)Exchange Rate: Value of one currency expressed in terms of another. Example, if GBP/USD is 1.4000, 1 Pound is worth USD$1.40000.(c)Bid Price:Bid is the price at which the market or broker will buy a specific currency pair from you. Thus, at the bid price, you as atrader can sell the base currency to their broker.(d) Ask price: is the price at which the market or broker will sell a specific currency pair to you. Thus, at ask price you can buy the base currency from your broker. (e)Spread: The spread is the difference between the price that you can sell currency at and the price you can buy currency at. Spread on major currencies may range from 2 to 3 pips under normal market conditions. Dealer or broker makes his money on spread, as are no commissions with most forex brokers.(e)Going Long: Means buying the currency pair and then later sell it back to the market.(f)Going Short: Means selling the currency pair and then buy it back later(h)Margin and Leverage: You buy and sell assets that represent more value than the capital in your account. Example, margin of 1% means you can trade upto USD 1000000 even though you may have only have USD 10000 capital in your trading account. Using leverage enables you to make profits very fast if market goes your way and lose faster if it goes against you. To be a successful forex trader you need to apply strict capital management and position size modelling, relative to your account size and personal risk profile. Forex typically offers 100:1 leverage on capital, except in USA where traders get only 50:1 leverage Forex Pairs Nicknames: (1).EURUSD or Euro Dollar= nickname is Euro, (2).GBPUSD-Pound  = nickname is cable, Pound Sterling or The Beast , (3). USDJPY Japanese Yen= nickname is carry trade or yen or Jap,(4) USDCHF or swiss Franc = nickname is Swiss/Swissie/Chief (5) AUDUSD Australian Dollar = nickname is Aussie, (6) USDCAD Canadian Dollar= nickname is CAD or Loony. Cross Rate: When currency is traded against any currency other than the USD. Examples: EURGBP, EURJPY, GBPJPY or AUDCAD. Understanding Forex Currency Pair Quotes: Before starting to trade forex market, you need to understand currency pair quotes. Exchange rate of two currencies is quoted in terms of pairs, such as USDJPY. Which means how of one currency you can get for another. Reason being, in any foreign exchange transaction you are simultaneously buying one currency and selling another. In our case USD is Base Currency and JPY is Quote currency. Short Term Day Traders: Enter and exit a trade within 24 to 48 hours. They hold trades in a short period. Adopts a short term view of currency market price. Face disadvantage because they trade more and have to overcome the spread more often. Pay a lot of attention to the live market on a continuous basis. A much talked aspect of trading that take toll on traders by increasing stress of trading and make whole experience unpleasant. Long term Traders: Enter and stay in trades for longer than a day, week or longer. Adopts a longer term price view of the currency. Varying from a few days, weeks to months. is less time consuming since you dont have to watch the live market all the the time. Forex Trading Sessions: Forex trades 24/6 (Sunday to Friday). Trade commences in Wellington New Zealand on Monday 8am (Sunday 5pm in New York). Close on Friday Evening in New York. Trading is most active during European and US trading sessions. Asian session is generally much quiet. On daily price charts we monitor, our day begins just after the New York session closes at 5PM NY time(8am New Zealand time.)',
                            comments: [
                               {
                                   rating:5,
                                   comment:"Great work!",
                                   author:"Justo Brown",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Easy to understand",
                                   author:"John Wafula",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Wonderful!",
                                   author:"Mike",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ben",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"Well done.",
                                   author:"Paul Nash",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                        {
                        _id:2,
                        name: 'Chapter 3: Lots, Calculating Profits and Losses',
                        category: 'Basic course',
                        description: 'What is a Lot in Forex? In the past, spot forex was only traded in specific amounts called lots. The standard size for a lot is 100,000 units. There are also a mini, micro, and nano lot sizes that are 10,000, 1,000, and 100 units respectivel  Lot Number of Units: Standard 	100,000, Mini 	10,000, Micro 	1,000 and Nano 	100. As you may already know, the change in currency value relative to another is measured in “pips,” which is a very, very small percentage of a unit of currency’s value. To take advantage of this minute change in value, you need to trade large amounts of a particular currency in order to see any significant profit or loss. Let’s assume we will be using a 100,000 unit (standard) lot size. We will now recalculate some examples to see how it affects the pip value. USD/JPY at an exchange rate of 119.80(.01 / 119.80) x 100,000 = $8.34 per pip USD/CHF at an exchange rate of 1.4555(.0001 / 1.4555) x 100,000 = $6.87 per pip. In cases where the U.S. dollar is not quoted first, the formula is slightly different. EUR/USD at an exchange rate of 1.1930(.0001 / 1.1930) X 100,000 = 8.38 x 1.1930 = $9.99734 rounded up will be $10 per GBP/USD at an exchange rate or 1.8040(.0001 / 1.8040) x 100,000 = 5.54 x 1.8040 = 9.99416 rounded up will be $10 per pip. Your broker may have a different convention for calculating pip value relative to lot size but whichever way they do it, they’ll be able to tell you what the pip value is for the currency you are trading is at the particular time. As the market moves, so will the pip value depending on what currency you are currently trading. What the heck is leverage? You are probably wondering how a small investor like yourself can trade such large amounts of money. Think of your broker as a bank who basically fronts you $100,000 to buy currencies. All the bank asks from you is that you give it $1,000 as a good faith deposit, which he will hold for you but not necessarily keep. Sounds too good to be true? This is how forex trading using leverage works.The amount of leverage you use will depend on your broker and what you feel comfortable with. Typically the broker will require a trade deposit, also known as “account margin” or “initial margin.” Once you have deposited your money you will then be able to trade. The broker will also specify how much they require per position (lot) traded. For example, if the allowed leverage is 100:1 (or 1% of position required), and you wanted to trade a position worth $100,000, but you only have $5,000 in your account. No problem as your broker would set aside $1,000 as down payment, or the “margin,” and let you “borrow” the rest. Of course, any losses or gains will be deducted or added to the remaining cash balance in your accountThe minimum security (margin) for each lot will vary from broker to broker. In the example above, the broker required a one percent margin. This means that for every $100,000 traded, the broker wants $1,000 as a deposit on the position. How the heck do I calculate profit and loss?  So now that you know how to calculate pip value and leverage, let’s look at how you calculate your profit or loss. Let’s buy U.S. dollars and Sell Swiss francs. The rate you are quoted is 1.4525 / 1.4530. Because you are buying U.S. dollars you will be working on the “ask” price of 1.4530, or the rate at which traders are prepared to sell. So you buy 1 standard lot (100,000 units) at 1.4530.  A few hours later, the price moves to 1.4550 and you decide to close your trade. The new quote for USD/CHF is 1.4550 / 1.4555. Since you’re closing your trade and you initially bought to enter the trade, you now sell in order to close the trade so you must take the “bid” price of 1.4550. The price traders are prepared to buy at. The difference between 1.4530 and 1.4550 is .0020 or 20 pips. Using our formula from before, we now have (.0001/1.4550) x 100,000 = $6.87 per pip x 20 pips = $137.40 Remember, when you enter or exit a trade, you are subject to the spread in the bid/offer quote. When you buy a currency, you will use the offer or ask price and when you sell, you will use the bid price.',
                             comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the money",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Thanks for thinking about us",
                                   author:"Paul John",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Risk management is key",
                                   author:"Tom Brown",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars",
                                   author:"Rymond Junior",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's a classic",
                                   author:"Mary",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                         
                         {
                        _id:3,
                        name: 'Chapter 4:  Order Types',
                        category: 'Basic course',
                        description: 'Types of Forex Orders: The term “order” refers to how you will enter or exit a trade. Here we discuss the different types of forex orders that can be placed into the forex market. Be sure that you know which types of orders your broker accepts. Different brokers accept different types of forex orders. There are some basic order types that all brokers provide and some others that sound weird. Forex Order Types: Market order: A market order is an order to buy or sell at the best available price. For example, the bid price for EUR/USD is currently at 1.2140 and the ask price is at 1.2142. If you wanted to buy EUR/USD at market, then it would be sold to you at the ask price of 1.2142. You would click buy and your trading platform would instantly execute a buy order at that exact price. If you ever shop on Amazon.com, it’s kinda like using their 1-Click ordering. You like the current price, you click once and it’s yours! The only difference is you are buying or selling one currency against another currency instead of buying a Justin Bieber CD. Limit Entry Order A limit entry is an order placed to either buy below the market or sell above the market at a certain price. For example, EUR/USD is currently trading at 1.2050. You want to go short if the price reaches 1.2070. You can either sit in front of your monitor and wait for it to hit 1.2070 (at which point you would click a sell market order), or you can set a sell limit order at 1.2070 (then you could walk away from your computer to attend your ballroom dancing class). If the price goes up to 1.2070, your trading platform will automatically execute a sell order at the best available price. You use this type of entry order when you believe price will reverse upon hitting the price you specified! Stop-Entry Order. A stop-entry order is an order placed to buy above the market or sell below the market at a certain price. For example, GBP/USD is currently trading at 1.5050 and is heading upward. You believe that price will continue in this direction if it hits 1.5060. You can do one of the following to play this belief: sit in front of your computer and buy at market when it hits 1.5060 OR set a stop-entry order at 1.5060. You use stop-entry orders when you feel that price will move in one direction! Stop-Loss Order. A stop-loss order is a type of order linked to a trade for the purpose of preventing additional losses if price goes against you. REMEMBER THIS TYPE OF ORDER. A stop-loss order remains in effect until the position is liquidated or you cancel the stop-loss order. For example, you went long (buy) EUR/USD at 1.2230. To limit your maximum loss, you set a stop-loss order at 1.2200. This means if you were dead wrong and EUR/USD drops to 1.2200 instead of moving up, your trading platform would automatically execute a sell order at 1.2200 the best available price and close out your position for a 30-pip loss (eww!). Stop-losses are extremely useful if you don’t want to sit in front of your monitor all day worried that you will lose all your money. You can simply set a stop-loss order on any open positions so you won’t miss your basket weaving class or elephant polo game. Trailing Stop: A trailing stop is a type of stop-loss order attached to a trade that moves as price fluctuates. Let’s say that you’ve decided to short USD/JPY at 90.80, with a trailing stop of 20 pips. This means that originally, your stop loss is at 91.00. If the price goes down and hits 90.60, your trailing stop would move down to 90.80 (or breakeven). Just remember though, that your stop will STAY at this new price level. It will not widen if market goes higher against you. Going back to the example, with a trailing stop of 20 pips, if USD/JPY hits 90.40, then your stop would move to 90.60 (or lock in 20 pips profit). Your trade will remain open as long as price does not move against you by 20 pips. Once the market price hits your trailing stop price, a market order to close your position at the best available price will be sent and your position will be closed. Good Till Cancelled (GTC): A GTC order remains active in the market until you decide to cancel it. Your broker will not cancel the order at any time. Therefore, it is your responsibility to remember that you have the order scheduled. Good for the Day (GFD): A GFD order remains active in the market until the end of the trading day. Because foreign exchange is a 24-hour market, this usually means 5:00 pm EST since that’s the time U.S. markets close, but we’d recommend you double check with your broker. One-Cancels-the-Other (OCO):An OCO order is a mixture of two entry and/or stop-loss orders. Two orders with price and duration variables are placed above and below the current price. When one of the orders is executed the other order is canceled. Let’s say the price of EUR/USD is 1.2040. You want to either buy at 1.2095 over the resistance level in anticipation of a breakout or initiate a selling position if the price falls below 1.1985. The understanding is that if 1.2095 is reached, your buy order will be triggered and the 1.1985 sell order will be automatically canceled. One-Triggers-the-Other: An OTO is the opposite of the OCO, as it only puts on orders when the parent order is triggered. You set an OTO order when you want to set profit taking and stop loss levels ahead of time, even before you get in a trade.  For example, USD/CHF is currently trading at 1.2000. You believe that once it hits 1.2100, it will reverse and head downwards but only up to 1.1900. The problem is that you will be gone for an entire week because you have to join a basket weaving competition at the top of Mt. Fuji where there is no internet. In order to catch the move while you are away, you set a sell limit at 1.2000 and at the same time, place a related buy limit at 1.1900, and just in case, place a stop-loss at 1.2100. As an OTO, both the buy limit and the stop-loss orders will only be placed if your initial sell order at 1.2000 gets triggered. In conclusion: The basic forex order types (market, limit entry, stop-entry, stop loss, and trailing stop) are usually all that most traders ever need. Unless you are a veteran trader (don’t worry, with practice and time you will be), don’t get fancy and design a system of trading requiring a large number of forex orders sandwiched in the market at all times. Stick with the basic stuff first. Make sure you fully understand and are comfortable with your broker’s order entry system before executing a trade. Also, always check with your broker for specific order information and to see if any rollover fees will be applied if a position is held longer than one day. Keeping your ordering rules simple is the best strategy. DO NOT trade with real money until you have an extremely high comfort level with the trading platform you are using and its order entry system. Erroneous trades are more common than you think!',
                              comments: [
                               {
                                   rating:5,
                                   comment:"Buy only 2% of your capital",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Pay attention to risk managemet",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Stay a float",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"Live another day.",
                                   author:"Junior",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                         {
                        _id:4,
                        name: 'Chapter 5:  Three Types of Forex Market Analysis',
                        image:'images/fundamental-analysis.png',
                        category: 'Basic course',
                        description: 'To begin, let’s look at three ways on how you would analyze and develop ideas to trade the market. There are three basic types of forex market analysis: Technical Analysis, Fundamental Analysis, Sentiment Analysis. There has always been a constant debate as to which analysis is better, but to tell you the truth, you need to know all three. Three types of forex market analysis. It’s kind of like standing on a three-legged stool – if one of the legs is weak, the stool will break under your weight and you’ll fall flat on your face. The same holds true in trading. If your analysis on any of the three types of trading is weak and you ignore it, there’s a good chance that it will cause you to lose out on your trade. Technical Analysis: Technical analysis is the framework in which forex traders study price movement. The theory is that a person can look at historical price movements and determine the current trading conditions and potential price movement. The main evidence for using technical analysis is that, theoretically, all current market information is reflected in price. If price reflects all the information that is out there, then price action is all one would really need to make a trade. Now, have you ever heard the old adage, “History tends to repeat itself“?  Well, that’s basically what technical analysis is all about! If a price level held as a key support or resistance in the past, traders will keep an eye out for it and base their trades around that historical price level. Technical analysts look for similar patterns that have formed in the past, and will form trade ideas believing that price will act the same way that it did before. Technical analysis: Price unable to break support and resistance levels. In the world of currency trading, when someone says technical analysis, the first thing that comes to mind is a chart. Technical analysts use charts because they are the easiest way to visualize historical data! You can look at past data to help you spot trends and patterns which could help you find some great trading opportunities. What’s more is that with all the traders who rely on technical analysis out there, these price patterns and indicator signals tend to become self-fulfilling. As more and more forex traders look for certain price levels and chart patterns, the more likely that these patterns will manifest themselves in the markets. You should know though that technical analysis is VERY subjective. Fundamental analysis is a way of looking at the forex market by analyzing economic, social, and political forces that may affect the supply and demand of an asset. If you think about it, this makes a whole lot of sense! Just like in your Economics 101 class, it is supply and demand that determines price, or in our case, the currency exchange rate. Using supply and demand as an indicator of where price could be headed is easy. The hard part is analyzing all of the factors that affect supply and demand. In other words, you have to look at different factors to determine whose economy is rockin’ like a Taylor Swift song, and whose economy sucks. You have to understand the reasons of why and how certain events like an increase in the unemployment rate affects a country’s economy and monetary policy which ultimately, affects the level of demand for its currency. The idea behind this type of analysis is that if a country’s current or future economic outlook is good, their currency should strengthen. The better shape a country’s economy is, the more foreign businesses and investors will invest in that country. This results in the need to purchase that country’s currency to obtain those assets. In a nutshell, this is what fundamental analysis is:  For example, let’s say that the U.S. dollar has been gaining strength because the U.S. economy is improving. As the economy gets better, raising interest rates may be needed to control growth and inflation. Higher interest rates make dollar-denominated financial assets more attractive. In order to get their hands on these lovely assets, traders and investors have to buy some greenbacks first. As a result, the value of the dollar will likely increase. Later on in the course, you will learn which economic data points tends to drive currency prices, and why they do so. You will know who the Fed Chairman is and how retail sales data reflects the economy. You’ll be spitting out interest rates like baseball statistics.  But for now, just know that fundamental analysis is a way of analyzing the potential moves of a currency through the strength or weakness of that country’s economic outlook.  Forex Sentiment Analysis: Earlier, we said that price action should theoretically reflect all available market information. Unfortunately for us forex traders, it isn’t that simple. The forex markets do not simply reflect all of the information out there because traders will all just act the same way. Of course, that isn’t how things work. This is why sentiment analysis is important. Each trader has his or her own opinion of why the market is acting the way it does. The market is just like Facebook – it’s a complex network made up of individuals who want to spam our news feeds. Kidding aside, the market basically represents what all traders – you, Pipcrawler, or Celine from the donut shop – feel about the market. Each trader’s thoughts and opinions, which are expressed through whatever position they take, helps form the overall sentiment of the market regardless of what information is out there. The problem is that as retail traders, no matter how strongly you feel about a certain trade, you can’t move the forex markets in your favor. Even if you truly believe that the dollar is going to go up, but everyone else is bearish on it, there’s nothing much you can do about it (unless you’re one of the GSs – George Soros or Goldman Sachs!). As a trader, you have to take all this into consideration. You need to perform sentiment analysis. It’s up to you to gauge how the market is feeling, whether it is bullish or bearish, and you decide how you want to incorporate your perception of market sentiment into your trading strategy. If you choose to simply ignore market sentiment, that’s your choice. But hey, we’re telling you now, it’s your loss! Being able to gauge market sentiment aka sentiment analysis can be an important tool in your toolbox.',
                             comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the greens",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my child to learn",
                                   author:"Paul Titus",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Do you have a blog",
                                   author:"Michael Grace",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's refreshing",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                         {
                        _id:5,
                        name: 'Chapter 6: Professional Trader',
                        image:'images/technical-analysis.png',
                        category: 'Advanced course',
                        description:'A professional Forex trader is someone who uses price movement in the Foreign exchange currency market to make profit. The aim of any Forex trader is to win as many trades as possible and also to maximize those winning trades. A professional Forex chart technician uses price charts to analyze and trade the market. By trading with an EDGE in the market, professional traders can put the odds in their favor to successfully trade price movement from point A to point B. Forex trading is not a ‘get-rich-quick’ scheme and it is more difficult to make money in Forex than what most popular Forex system-selling websites would have you believe. To trade profitably, you must not only have winning trades, but you must also cut your losing trades short so that your winners out-pace your losers. You see, losing is an enviable part of trading the Forex markets, and you must learn to lose properly by taking small losses relative to your winners. This means you must (ALWAYS) trade with a stop loss on (EVERY) trade you take and make sure the dollar amount you have at risk is an amount you are 100% comfortable with losing. Professional Forex price-chart traders have a winning edge which is developed via Technical Analysis. There are also Fundamental Analysis traders and traders who use a combination of both analysis techniques; we will discuss all of these later. A professional Forex trader understands that reading a price chart is both art and skill, and as such, they do not try to mechanize or automate the process of trading as each moment in the market is unique, so it takes a flexible and dynamic trading strategy to trade the markets with a high-probability edge. How do pro traders trade the Forex markets?  There are many different trading strategies and systems that pro traders use to trade the markets with, but generally speaking, professional traders do not use overly-complicated trading methods and rely mainly on the raw price data of the market to make their analysis and predictions. To be comprehensive, I wanted to give you a brief overview of all the primary different styles and ways people trade the Forex market: Automated / Robot Trading: Software-based trading systems, also known as forex trading robots, are created by converting a set of trading rules into code that a computer can make use of. The computer will then run this code via trading software that scans the markets for trades that meet the requirements of the trading rules contained in the code. The trades are then executed automatically via the trader’s broker. Discretionary Trading: Discretionary Forex trading depends on a trader’s ‘gut’ trading feel or discretionary trading skill to analyze and trade the markets. Discretionary trading allows for a more flexible approach than automated trading but it does take a certain amount of time to develop your discretionary trading skill. Most professional Forex traders are discretionary traders because they understand the market is a dynamic and constantly flowing entity that is best traded by the human mind. Technical Trading: Technical trading, or technical analysis, involves analysis of a market’s price chart for making one’s trading decisions. Technical analysis traders use price patterns or ‘technical signals’ to trade the market with an edge. The common belief among technical analysis traders is that all economic variables are represented by and factored into the price movement on a price chart. Fundamental Trading: Fundamental trading, or news trading, is a trading technique where traders rely heavily on market news to make their trading analysis and predictions. Fundamental news does ‘drive’ price movement, but often times the market will react differently than what a particular news release would imply due to the fact that market participants often buy on expectations of future events and sell once the reality of said future event occurs. This is another main reason many pro traders rely more heavily on technical analysis than fundamental analysis, although many do use a combination of the two.  Day Trading: Traders who day-trade the Forex market are in and out of the market within one day. This means they typically buy and sell currencies over a very short period of time and they may enter and exit numerous trades in one day. Scalping: Scalping is similar to day-trading but it relies on more frequent and shorter-term trades than even day-trading does. It is a trading style that refers to jumping in and out of the market many times a day to ‘scalp’ a few pips here and a few pips there, generally with little regard for placing logical stop-losses. Scalping is generally not recommended by experienced / pro traders because it is essentially just gambling. Swing Trading / Position Trading: This style of trading involves taking a short to mid-term view on the market and traders who swing trade will be in a trade anywhere from a few hours to several days or weeks. Swing or position traders are generally looking to trade with the near-term daily chart momentum and typically enter anywhere from 2 to 10 trades per month, on average. Range Trading: Range trading involves trading a market that is consolidating between obvious support and resistance levels. By watching for trading signals near the support and resistance boundaries of the trading range, traders have a high-probability entry scenario with obvious risk and reward placement. Trend Trading: Trend traders are traders who wait for the market to trend and then take advantage of this high-probability movement by looking for entries within the trend. An uptrend is considered to be in place when a market is making higher highs and higher lows, and a downtrend is in place when a market is making lower highs and lower lows. By looking for entries within a trending market, traders have the best chance at making a large profit on their risk. Traders who continually try to trade against the trend by trying to pick the top and bottom of the market, generally lose money quite quickly. Professional Fx traders are largely trend-traders. Counter-trend Trading: Trends do indeed end, and if you are a savvy and skilled trader you can successful trade a counter-trend move, but this should not be tried until trend-trading has been mastered as counter-trend trading is inherently more risky than trend-trading and there can be many false tops or bottoms in a trend before the real one emerges. Carry Trading: Carry trading, or simply ‘the carry trade’ as it is called, is the strategy of simply buying a high interest-rate currency against a low interest-rate currency and holding the position for what is usually a long period of time. Forex brokers will pay traders the interest rate difference, or ‘swap’, between the two currencies for each day the position is held. The trick here is that higher-yielding currencies are susceptible to large sell-offs if the market loses risk appetite since these currencies are generally considered riskier than safe-haven currencies like the U.S. dollar or Japanese yen, so it’s a good idea to trail your stop loss up to lock in profit as the carry trade moves in your favor. Professional Forex traders vs. amateur Forex tradersProfessional Forex trading might seem like something of an elusive or difficult goal for those of you struggling to trade profitably or just beginning to trade. But, there are a few key differences between pro traders and amateur traders that you should be aware of to help you improve your trading or get started on the right track if you are a newbie:  Characteristics of Professional Forex Traders:1.Have mastered an effective trading strategy. 2.have and use a Forex trading plan.  3.Have and use aa Forex trading journal. 4.Manage risk effectively on every trade.  5.Dont become emotional before, during or after a trade. 6.Take or lock in profits as they become available. 7.Never lose more than they are comfortable with per trade. 8.Dont over trade. Amateur Forex Traders: 1.Often over trade. 2. Have not mastered an effective trading strategy.  3.Do not have a trading plan or dont use one.  4.Dont have trading journal or dont use one.  5. Dont manage risk or money effectively.  6.Often become emotional in the markets. 7. Hold profitable trades until they turn into losers.  8.Often lose more than they are comfortable with.  The important role of Banks in Forex trading. Banks play a very important role in FOREX trading. In fact, most of the market plays against larger banks, hedge funds and big-money players. Commercial banks (such as Deutsche Bank and Barclays) provide liquidity to the Forex market due to the trading volume they handle every day. Some of this trading represents foreign currency conversions on behalf of customers’ needs while some is carried out by the banks’ proprietary trading desk for speculative purpose. The bottom line is that we retail Forex traders are small-change compared to the bigger players like commercial banks, hedge funds, and other big players. We can profit from the moves these big players cause in the market by finding our own edge in the market and trading it with discipline.',
                              comments: [
                               {
                                   rating:5,
                                   comment:"Good work!",
                                   author:"John Noberts",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Do you have hard copy?",
                                   author:"Joshua",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Nice Topic",
                                   author:"Victor",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate Course",
                                   author:"Enock",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"When is volume two coming up?",
                                   author:"Joy",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                         {
                        _id:6,
                        name: 'Chapter 7:  Japanese Candlesticks',
                        image:'images/japanese candlestick.png',
                        category: 'Advanced course',
                        description:'Japanese Candlestick Patterns.  A Brief History of Japanese Candlestick Charting Patterns. Candlestick charts originated in Japan during the 18th century. Since no defined currency standard existed in Japan during this period, rice represented a medium of exchange. Various feudal lords deposited rice in warehouses in Osaka and would then sell or trade the coupon receipts, thus rice become the first futures market. In the 1700s legendary Japanese rice trader Homma Munehisa studied all aspects of rice trading from the fundamentals to market psychology.  Homma subsequently dominated the Japanese rice markets and built a huge fortune. His trading techniques and principles eventually evolved into the candlestick methodology which was then used by Japanese technical analysts when the Japanese stock market began in the 1870s. The method was picked up by famed market technician Charles Dow around 1900 and remains arguably the most popular form of technical analysis chart in use by today’s traders of financial instruments.  Why use Candlestick Charts?  Candlestick charts show the same information as bar charts but in a graphical format that provides a more detailed and accurate representation of price action. Candlestick charts visually display the supply and demand situation by showing who is winning the battle between the bulls and the bears. Candlestick charts reveal another dimension of the given period’s price action by pictorially displaying the force (or lack of force) behind each price bar’s movement.  Candlestick formations make all single bar and multi-bar patterns significantly easier to spot in real time, thus increasing your chances of catching high probability trade setups. In addition, because candlestick charts use the same data as bar charts (open, high, low, and close), all Western technical signals used on a bar chart can easily be applied to a candlestick chart.  Candlestick charts offer everything bar charts do and more, using them is a win-win situation because you can use all the trading signals normally used on bar charts with the added clarity and additional signals generated by candlesticks. Candlesticks charts are more fun to look at. The Anatomy of a Candle. Candlesticks have a central portion that displays the price distance between the open and the close. This area is known as the real body or simply the body.  The price distance between the open and the high for the period being analyzed is called the upper shadow, sometimes referred to as an “upper wick” as well. The highest price paid for a particular period is marked by the high of the upper shadow. The price distance between the close and the low for the period being analyzed is called the lower shadow, sometimes referred to as a “lower wick”. The real body displays the opening and closing price of the security being traded. Closing prices have added significance because they determine the conviction of the bulls or bears. If the security closed higher than it opened, the real body is green or unfilled, with the opening price at the bottom of the real body and the closing price at the top. If the security closed lower than it opened, the real body is red, with the opening price at the top and the closing price at the bottom. Depending on the price action for the period being analyzed a candlestick might not have a body or a wick. To better highlight or visualize price movements, modern candlestick charts (especially those displayed digitally) often replace the black or white of the candlestick real body with colors such as red (for a lower closing) and blue or green (for a higher closing).  Core Candlestick Patterns:  There are multiple forms of candlestick patterns; here is a brief overview of the most popular and widely used single and multi-bar patterns commonly used today.  Bullish Candle:  Signals uptrend movement, they occur in different lengths; the longer the body, the more significant the price increase. Bearish Candle: Signals downtrend movement, they occur in different lengths; the longer the body, the more significant the price decrease. Long Lower Shadow: These candles provide a bullish signal, the lower shadow must be at least the size of the real body; the longer the lower shadow the more reliable the signal. Long upper shadow: These candles provide a bearish signal, the upper shadow must be at least the size of the real body; the longer the upper shadow the more reliable the signal. Hammer: The hammer is a bullish signal that occurs during a downtrend. The lower shadow should be at least twice the length of the real-body. Hammers have little or no upper shadow. When a hammer occurs during an uptrend it is known as a “hanging man” and is a bearish signal. Because of the bullish long lower shadow however, this pattern needs bearish confirmation by a close under the hanging man’s real body. Shooting Star:  This candle has a long upper shadow with little, or no lower shadow, and a small real body near the lows of the session that develops during or after and uptrend. Harami: The Harami is a two-candlestick pattern in which a small real body forms within the prior session’s larger real body.  Doji:  The Doji is a candlestick in which the session’s open and close are the same, or almost the same. There are a few different varieties of Dojis, depending on where the opening and closing are in relation to the bar’s range. Dragonfly doji: The Dragonfly Doji has a long lower shadow, the open, high, and close are at or very near the session’s high. This pattern often signals reversal of downtrend. Gravestone:  The Gravestone Doji has a long upper shadow, the open, low, and close are at or very near the session’s low. This pattern often signals reversal of an uptrend. High wave candle / long-legged doji:   This candle has a very long upper or lower shadow and a small real body. If the opening and closing price are the same the candle has no real body and is then called a Long-Legged Doji. The first picture is a high wave candle the second is a Long-Legged Doji. Engulfing candles: The bullish engulfing pattern consists of large white real body that engulfs a small black real body in a downtrend. The bearish engulfing pattern occurs when the bears overwhelm the bulls and is reflected by a long black real body engulfing a small white real body in an uptrend. Spinning tops: Spinning tops are simply candles with small real bodies. Pin Bars: The pin bar can include the following previously described candlestick patterns; long lower shadow candles and long upper shadow candles, hammers and shooting stars, dragonfly and gravestone dojis. Inside Bars: Inside bars can technically encompass any candlestick pattern because they are simply a series of at least two candlesticks where the first candlestick completely engulfs the entire range of the subsequent candlestick, however, more often than not inside bars end up being spinning tops or dojis. Note, the inside bar is different from the “engulfing pattern” because it includes the entire range of the bar, from high to low, where as the engulfing pattern only includes engulfment of the real body of the candle. I generally trade inside bars in the context of a strongly trending market as they are often great entry points into trends. However, often times inside bars will occur at major market turning points as well as the previous trend loses momentum, pauses and forms an inside bar, and then changes direction. The Fakey Setup:  Fakey setup is essentially a multi-bar pattern that consists of a false break from an inside bar pattern or a key level. The fakey can consist of a number of different candlestick patterns. Often times the fakey setup will consist of a bullish or bearish engulfing pattern which is completely engulfing the range of a spinning top or doji candle which gives rise to a false break bar that can take the form of any of the candlesticks above that qualify as pin bars. In Conclusion: Candlestick charts offer a more vivid depiction of price action than what a standard bar chart can provide. Candlestick patterns in and of themselves are useful, however there are many different names and interpretations of candlestick patterns which often can induce confusion and can be hard to keep track of.',
                              comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the green candles",
                                   author:"Shirley",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Good history",
                                   author:"Paul Jones",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Master it",
                                   author:"Michael Brown",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Roy",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"Good ebook",
                                   author:"Eli",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                         {
                        _id:7,
                        name: 'Chapter 8:Trend Analysis',
                        image:'images/Trending.png',
                        category: 'Advanced course',
                        description:'Market Trends: When a market is moving in one general direction from left to right on the chart, either up or down is called a trend. If market is moving up, its called an uptrend or a bullish trend. If moving down its said to be downtrend or bearish trend. Both trends may also be referred to as a bullish bias or bearish bias respectively. Most obvious and important trend for us as swing traders, is seen on daily, weekly or monthly charts. Trends might be large in size or small depending on time frame you are trading on. Short-term counter trends (trends against the the broader trend) tend to fail and will result in major losses. Over 70% of counter trend movements fail, so its important we stick with major trends on daily,weekly or monthly where possible. Dominant market trends are like comparing a ship to a runabout speed boat. Dominant trends are slow, cumbersome and take a long time to gain momentum. They are the most important influence on price behavior on all time frames being traded. To determine the dominant daily, weekly or monthly chart trend we generally want to look at the last 3months to 10 years of price data. Short term trends that are in line with the long term trends tend to result in trend continuation and increase our profit potential as well as increase risk reward scenarios. To determine the short term trend we look at the last 1 to 3 months of price data. It is important always to check and see what time frames above the one you are looking at are doing. Example: if trading daily chart, be sure to check what weekly chart is doing and whether or not it is trending and which direction it is trending if it is! You always want to make sure any intraday trade you are considering makes sense with the weekly chart price action and trend. As a market trends, it creates swing points. Trends ebb and flow and they will often retrace back to the previous swing point or slightly beyond it, before the trend resumes again. In an uptrend, this means when a market retraces to the downside, that retrace will often terminate around the previous swing high as that old resistance becomes new support. In a downtrend it is opposite, the old support will often act as new resistance. NOTE: A market will not always retrace to the previous swing point, but when it does, it is an important clue to pay attention to, because a price action signal in-line with the trend, at a swing point following a retrace, is usually a high probability trade setup. Also, in strong trends, the market will often just blow right through the previous swing point and not retrace back to it.', 
                         },
                         
                         {
                         name: 'Chart Time Frames',
                        image:'images/chart2.png',
                        category: 'Advanced course',
                        description:'Chart time frames range between 1 minute to 1 month. I recommend you look at only 1 hour time frames and up. Specifically, 1 hour, 4 hour, daily, weekly and monthly. Larger time frames, tend to provide more reliable/stronger trends and price signals. This means that a trend formation on a weekly or daily chart has more weight than that of 1 or 4 hours charts. NOTE: The higher the timeframe, the more weight the trend and price action trade signal it has. Simply observing a market raw price action, from left to right, is easiest and most effective way to identify a trend and to spot high probability entries within it. As market moves higher or lower, its previous turning points, or swing points as are called by traders, becomes reference point that we can use to determine the trend of a market. Most basic way to identify a trend is to check and see if a market is making a pattern of higher highs and high lows for an uptrend, or lower highs and lower lows for a downtrend.  Often, a market will trend for a while before a while before going into a long consolidation/ranging pattern, prior to trending again. An easy way to identify a range-bound market is if a market is swinging between a horizontal level of support and a horizontal level of resistance. Trading ranges can be big or small, if they are small we call it choppy, when a market is choppy and in a very tight trading range, we can not really trade it. Is best to sit on side line and wait for larger swinging trading ranges. 50% retrace in trending market: Often times, you will notice that a retrace within a trend will end at about the 50% level of the last move. 50% retraces will also sometimes line up with the previous swing high or low like we just discussed. When we have multiple supporting factors coming together like this, its called confluence. When a price action signal forms from a confluent level in the market it is a strong signal and something to definitely take note of and a potential trade. The 50% retrace phenomenon does not just happen in perfectly trending markets. If you look at any chart, you will notice that many moves, both big and small will tend to eventually retrace approximately 50% before moving back in the direction of the initial dominant trend move. Knowing this, we can watch for price action signals at these 50% levels to enter the market, as they are often high probability trades Trends can have large swings in direction or smaller tight ones. You need to be flexible when reading and trading price action. After a while, you will get better at seeing what the market is doing and be able to differentiate a trending and non trending markets, even when trend is not obvious.',
                         },
                         {
                         name: 'Laws of the Market',
                        category: 'Advanced course',
                        description:'Large players, hedge funds, banks, corporations, etc, take positions with a very informed bias. Their activity in the market movement, and the ebb and flow from this movement creates market rotation and price action. Is no single factor that drives the market movement, instead, it is a group of catalysts which create volatility, turning points and trends.Price moves around a central point that is called the MEAN or moving average or center line of bollinger bands. Trending or rotational price behavior will always be either moving back towards the mean or a way form the mean. As a trader, when a defined trend is identified, we trade in direction and in line with the slope of the mean. Advanced traders will also trade from extremes(areas distant from the mean), in attempt to capture profit as price rotates back towards the mean. However, they will mostly employ this method once a price signal is printed. Trading from extreme is more profitable when there is no major trend or when market in sideways to neutral market periods. Trading with a trend, and trading from extremes are 2 different strategies that can be employed. However, the most reliable events in markets arise from trading from the mean(average price)within a trending market, static support and resistance(simple horizontal levels), dynamic moving support(trending moving averages), swing points and of course, price action signals. Counter trend trades have less chance to successed, unless the price action signal is from a major level, we avoid fighting the dominant daily, weekly or monthly charts trend. NOTE: Every trading pattern or event in the market will always fall back on the above variables. Is the trade in line with the trend, or moving back to the mean or against the the trend? These are questions a trader must ask and learn to be successful forex trader.',
                         },
                         {
                         name: 'Mean and Bollinger Bands/Moving Averages',
                        image:'images/bollinger-band.png',
                        category: 'Advanced course',
                        description:'Mean line is the heart of all market movement. Price is either moving away from mean or back towards the mean. in high trending volatility will see a market move substantially in one direction before a retracement occurs. Low trending volatility will see a minor fluctuation around the mean. (choppy trend movement or minor slope). Note: The mean is another word for an average. It is the average price over acertain number of time periods. Example: 21 period moving average shows the mean price or average price over the last 21 time periods, be it days, weeks or months. It is a known fact that all trends, will retrace at some future point, even if it takes days, weeks or months, the mean or moving average will be tested. In short, prices move back to mean from an outer extreme or move a way from mean to an outer extreme or in the case of a range-bound market, they oscillate back and forth across the mean. (POINTS TO KNOW): Mean acts as a dynamic trend line (value point). Broader term price trends move in line with the long term moving average or bollinger band (mean) direction. This is why counter-trend signals fail so often. Aim to sell strength in falling markets and buy weakness in rising markets. Or incase of range markets buy or sell from price extremes(support or resistance), where we expect price to head back towards the mean. Key Point: Price rotation, trading ranges and trends all have one sipmple law, price have to move up to move down and move down to move up. Knowing this, we can now understand why prices rotate the way they do. As well as why so many break out fade or are used as opportunity to take a trade in the opposite direction. How often do you see a textbook break out pattern fail? How often do you see a forex pair make a new recent gigh or low and then snap back in the opposite direction? Forex market trading gane is designed to trap you, to trick and test your nerve. If trading was easy, we will all get rich, this is why the simple textbook strategies dont work. Key take away here is that you can not just get long because a market is moving higher or get short because its moving lower. Often, just when it looks or feels safe to enter a strong move in a market, it is about ready to retrace back to the mean or other direction. Is main reason many beginning and struggling traders get stopped out and lose money, they do not understand price dynamics and how the market work.',
                         },
                         {
                         name: 'Using Bollinger Bands to Buy and Sell from Value.',
                        category: 'Advanced course',
                        description:'To avoid getting sucked out by all the false breaks that occur in the market. We can do so by waiting for price action signals from value points in the trend, that is to say, waiting for markets to rterace/rotate back to the mean or middle of bollinger bands/moving average following a push in the direction of the trend. A value point can be a horizontal level of support/resistance, a small consolidation area that price has recently liked to trade in for a while(this will also be referred to as a support or resistance zone or area sometimes), or it can be an EMA (exponential moving average) dynamic support or resistance layer.Exponential Moving Average: An exponential moving average (EMA), sometimes called an exponentially weighted moving average(EWMA). Applies weighting factors which decrease exponentially. The weighting for each older data point decreases exponentially, giving much more importance to recent observations while still not discarding older observations entirely. Moving average can also be defined as the average of a series of numbers (days) over a peiod of time which is constantly updated by dropping the oldest value and the adding the newest value and recalculating the average. Example: 21 days moving average/bollinger band of prices would add up the closing prices for the last 21 days and then divide that total by 21. After the next trading day, we ould drop the oldest day and calculate the average with the latest day price in its place. Therefore, overtime the average moves as new data is added and old data is dropped. NOTE: EMAs smooth out fluctuations in prices, thereby making it easier to spot trends, depending on your time frames. MA/Bollinger bands are lagging indicators, they do not react instantly to price behavior and thus are used only as trend filters and value reference points. MA have a smoothing effect on price chart. Higher the time chart is, MA will be smoother. Shorter the chart timeframes, MA will be more zigzag. MA slope on a larger time frame tells us the long term bias in the market. Slope of short term MA on shorter timeframes tells us shorter term bias in the market. When the 2 are combined and diverge in the same direction, your trend is stronger. When price spend more time below or above the middle line of the bollinger, we can define a bias in the market. Below the middle line of the bollinger bands, price is bearish and when is above, the bias is bullish. Middle line of bollinger bands also acts as the dynamic mean and become support and resistance point when the market is trending strongly over time. Is also referred to as dynamic support/resistance.',
                         },
                         {
                         name: 'Trading Ranges',
                        image:'images/chart4.png',
                        category: 'Advanced course',
                        description:'Markets dont always trend all the time. In fact they spend majority of time in trading range or in consolidation. We can trade trading range, but we need to stay away from choppy ones. Trading choppy ones is easiest way to empty your account. A trading range is simply when price is oscillating betwen a horizontal level of support and resistance. In our case when price bounces on top and bottom of bollinger bands. Typically, the levels will be easy to see and price will respect them exactly or almost exactly and turn around to opposite direction.',
                         },
                         {
                         name: ' Exiting Trade',
                        category: 'Advanced course',
                        description:'If you have been trading for a while, you probably already know that exiting trades is alot more harder than entering them. Is hard both emotionally and logically. For this reason, we will discuss some general guidelines to use when planning trade exits. Also remember that each trade is differnt and is no strict rule that this ebook can give you which will magically let you exit every trade perfectly. You will leave sometimes pips on the table, because you cant squeeze every pip out or every move and you are going to have losses sometimes, these things are part of being a trader. If you let them affect you too much emotionally, you will be on a quick lane to blow up your account. ',
                        },
                         {
                         name: 'Psychology of Exiting a Trade',
                        category: 'Advanced course',
                        description:' We will start here because it is typically after exiting a trade that traders are most emotional and at high risk of making bad emotion trading mistake.  First, accept the consequence of your trade exit. Whether was a win, loss or break even. Make sure you dont let resuls of that trade affect you too heavily and cause to do something stupid like jumping right back into the market after a nice win or get revenge for your trade loss. This is when many traders experience their biggest draw down periods because want revenge or over confident and their perception of risk has declined. Most importantly, remember you will be most emotional (fragile) after exiting trade. Make sure it does not negatively affect your trading. The most effective way is to simply remove yourself from your computer or trading platform for a day or two, even the rest of that week. To let your emotions cool down and get back to an objective trading mind set after exiting a trade. ',
                        },
                         {
                        name: 'Exit: Using Stop Losses ',
                        image:'images/10pipstoploss.png',
                        category: 'Advanced course',
                        description:'Trade exits do not just include profit targets and rewards. Also include stop losses and honestly you should spend more time thinking about your stop loss than profit targets. How you manage your trades will dictate whether you succeed long term in trading and placing your stop loss properly is a big part of proper trade and risk management.',
                        },
                         {
                        name: 'Profit Targets',
                        category: 'Advanced course',
                        description: 'Placing profit targets and exiting trades is perhaps the most technically and emotionally difficult aspect of trading. The trick is to exit a trade when you’re up and have respectable profit, rather than waiting for the market to come crashing back against you and exiting out of fear. The difficulty of this is that it’s human nature not to want to exit a trade when it’s up with a nice profit and moving in your favor, because it ‘feels’ like the trade will continue on in your favor and so you don’t’ want to exit at that point. The irony is that not exiting when the trade is significantly in your favor typically means you will make an emotional exit as the trade comes crashing back against your position. So, what you need to learn is that you have to take respectable profits of 1:2 risk:reward ratio or greater when they are available, unless you have pre-determined before entering that you will try to let the trade run further. General profit target placement theory: After determining the most logical placement for your stop loss, your attention should then shift to finding a logical profit target placement and also to risk reward ratio. You need to be sure a decent risk reward ratio is possible on a trade; otherwise it’s really not worth taking. Now, what I mean by that is this; you have to determine the most logical place for your stop loss, as we discussed above, and then determine the most logical place for your profit target. If after doing that, there is a decent risk reward ratio possible on the trade, it’s a trade that’s probably worth taking. However, you have to be honest with yourself here, don’t get into a game of ignoring key market levels or obvious obstacles that are in your way to achieving a decent risk reward just because you want to enter a trade. So, what are some of the things you will consider when deciding where to place your profit target? It’s really pretty simple,  basically analyze the overall market conditions and structure, things like support and resistance levels, major turning points in the market, bar highs and lows, etc. Try to determine if there is some key level that would make a logical profit target, or if there is some key level obstructing your trade’s path to make a decent profit.Final note: A trader is really a business person, and each trade is a business deal. Think about Warren Buffet doing a big business deal to buy a new hotel development…he is carefully weighing the risk and the reward from the deal and deciding if it’s worth taking or not. As a trader, that’s what we do too; we first consider the risk on the trade and then we consider the potential reward, how we can obtain the reward, and if it’s realistically possible to obtain it given the surrounding market structure, and then we make our final decision about the trade. Whether you have a $100 account or a $100,000 account, the process of weighing the potential risk vs. the potential reward on a trade is exactly the same, and that also goes for stop and target placement; it’s the same no matter how big or small your account is. Your number one concern as trader is capital preservation. That means getting the most ‘distance’ out of our trading capital. Professional traders do not waste their trading capital, they use it only when the risk reward profile of a trade setup makes sense and is logical. You will always have to justify the risk we are taking on any one trade, that’s how you should think about every trade you take; justify the money you are laying on the line, and if you can’t make a good case for risking that money given the setup and market structure, then don’t take the trade. Each trade you take needs careful planning and consideration and you never want to rush to enter a trade because it’s far better to miss an opportunity than it is to jump to a conclusion that we came to emotionally rather than logically.',
                              comments: [
                               {
                                   rating:5,
                                   comment:"Nice topic",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends me a hard copy",
                                   author:"Ruth",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Lovely",
                                   author:"Michael Marwa",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"Lona",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                         {
                        _id:8,
                        name: 'Chapter 9: Trading Psychology',
                        category: 'Advanced course',
                        description:'A great trading method is useles without mastering your own emotions and learning about market psychology. You can not be a successful trader if you dont have money, method and be in good mind. It does not matter if you are skilled trader, if you do not understand how your mindset affects your trading and how it can get you into trouble, you will never make money in the market. You have to make clear effort to control your mindset as you trade, so that you do not make stupid decisions like trading when there is no set up present or risking too much on a trade. If you do not make a clear effort to understand and control your mind and your emotions as you trade, the market will chew you and spit you out faster than you can imagine. Here are some of the emotions you need to control. (1)FEAR: Fear can be due to losing money, being wrong, unknown, missing out and leaving money on the table. Fear can immobilize a trader and lead to inaction and drive out knowledge. We can manage fear by learning to manage emotions and small fears. Accept consecutive losses without changing your strategy. Protect your capital by using stop losses. Accept financial risk for an out come that you have no control over if you want to be a consisently successful trader. Trading is a probability game and nothing is certain. Trade only with money you can afford to lose and set realistic goals. Dont try to make some un realistic amount of money in your first year. Trade in a calm and an emotionally un attached state of mind. Know what you are good at and what you are good at. (2).GREED: Aggressive traders will enter too many trades or stay in trades too long and the trades turn against them. Is no need to become greedy in a trade as another good trade opportunity will show up very soon. Do not try to have one big trade that will make you wealthy. If you had a predefined profit target set at a 1:2 or 1:3 risk reward ratio, but as price gets close to that target you move it further a way because you think price will keep going for an even bigger gain that is greed and it will almost always result in you making less than you would have if you just exited at your predetermined profit target. It can be difficult to exit a trade when it looks good and is in your favor, but most of the time, that is precisely when you should be exiting. many traders hold trades too long, move their targets further out or set unrealistically large profit targets. All of these are due to greed and they will all result in making less money than when you are not greedy. (3).HOPE AND EXPECTATIONS: Hope is essentially the expectation that something will happen or a strong desire for it to happen. When you trade with too much hope,you often hope yourselve right of making money. Hope can make you move stop losses further away or delete them all together because you hope the market will turn around in your favor, allowing you to avoid a losing trade. Hope works in tandem with greed when traders hope for an unrealistic large profit and move profit targets further out. This typically ends up with the trader taking a very small profit because they never take the profit when it is at a decent dollar amount in their favor, hoping it will keep going and going. Traders also often hoping that a losing trade will turn back in their favor. This becomes dangerous when it results in them moving stop losses further a way from their initial placement or not trading with stop losses at all. Thi is how traders accounts get blown out very quickly. Is better to take a realistic view on every trade and that means understanding that while you might have an effective trading strategy, that does not mean every trade will be a winner. (4).OVER-CONFIDENCE:An over confident trader might trade too frequently or take on too much risk for too little reward. Get to know how successful a pattern has been in the past, do not go with a hunch and jump in without thinking or doing your homework. Over confidence leads to euphoria. Euphoria is feeling you can do no wrong. Since trading is a game of probabilities, traders will experience times when they can do no wrong but these times are temporary. Danger is that you will take one risk too many and end up with a huge loss. You have to be careful after a winning trade as you are after a losing trade. Remain disciplined even in the face of the feelings you will inevitably experience after a winner or losing trade. Is KEY to all trading success persistent discipline. Stick to your method, stick to your pre-determined risk amount. Do not increase arbitrarily. I recommend you stick with the same 1:2 risk ratio until you double or tripple your account.(5).CONFIDENCE: Is big difference between real good confidence and being over confident/arrogant/careless we discussed above. Successful traders build up real confidence by using their method again and again until they know how successful their methods are. This means sticking with their method and NOT over trading or risking too much even in the face of the emotions and feelings that will come their way following a trade. You get to the point of having REAL trading confidence by following your method and sticking to your trading plan over a long period of time, even in the face of the constant adversity the market throws at you. Once you begin to develop real trading confidence, you will be well on your way to consistence profitable trading. (6). INABILITY TO PULL THE TRIGGER: If you are a currency trader, you want to be paid for the time and effort you put into trading. You have to be in market to make money. You have to make decision quickly to enter in the trade or will enter when it is retracing back. (7) EXITING A TRADE PREMATURELY: Dont bail out of agood trade as soon as it starts to retrace slightly. Successful traders let their profits run to their tragets. Price zig-zags. Retracements are expected and price does not go straight up or straight up or straight down. Many successful traders place a trade with a stop loss and a limit order to take a profit at a certain level and then they walk a way from the chart and watch TV or go for a walk so that the trade has a chance to develop without interference by the trader. (8). JUDGEMENT: As a trader, you will develop good judgement and intuition from your experience. Therefore, dont give up. Your trading will improve with time and persistence. Watching charts on screen over time and gut feel develop your abilities over time. (9)CHECKLIST: Using a checklist or trading plan, will help you not to overlook a setup or pattern you should have noticed.  Trading checklist will also give you more confidence. More you stick to it and remain disciplined, the more it will reinforce positive trading habits into your mindset. Having persistent discipline to stick to your strategy and trading plan will re wire your brain and make you  a patient and disciplined trader. Traits necessary for consistent trading success. (10). WORKING ON YOUR CRAFT: You need to love to find chart patterns and researching. Most good traders love the game for itself, and getting paid is just a bonus. (11).DISCIPLINE:Do not deviate from your methodology once you start. Trade your method over and over again to exploit your edge. Repetition builds your skills. Discipline determines a traders commitment to following trading rules, handling emotions and sticking to money management rules. If is no signal, you must not place a trade. (12):COMMITMENT: Trader should have a passion to successed in trading and enjoy it. Be willing todo whatever is necessary to achieve your goal. Commitment will ensure that the trader can go through the occasional losing streak and trade profitably after it. Successful traders are highly committed, disciplined and ambitious people. (13). FOCUS: Do not learn to many systems and entry methods, you must stick to what you have and concentrate. (14)PATIENCE: Patience is a virture forex trader should have, will help you avoid many mistakes. Such as early entries and exits. Have you ever wondered why big cats on African savanna are great predators and hunter? Is all about patience! By being patience, are willing to wait until the prey comes to them and bounce to kill when least expected. Using less energy and good reward. Patience reinforces positive trading habits, whereas emotional trading reinforces negative ones. Once you begin to trade patiently you will see how using your claws wisely. You need only few good trades a month to make a respectable return in the markets, after you achieve this via patience, you will learn to enjoy NOT being in the markets all the time. But hunt your prey. Trade simple and follow rules so you can make money on a consistent basis. Profits will vary from week to week and yes you will have some losing weeks or months. Try to be on sidelines, rather than in the market as much as possible. Wait patiently for setups, set your trades up and walk a way for a while.',
                              comments: [
                               {
                                   rating:5,
                                   comment:"Master your emotions",
                                   author:"Irene",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Fear and emotions kill many traders",
                                   author:"Amos",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Enter and close the computer",
                                   author:"Jeremiah",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Anna",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"Mastering your fears and emotions is key",
                                   author:"Busa",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                         {
                        _id:9,
                        name: 'Chapter 10:  Risk Management',
                        category: 'Advanced course',
                        description:'Most important job of a trader is risk management, and is one many traders like to ignore and many educators dont talk much about. Is not exciting on the surface, but once you understand the significance of it and how it can affect your emotions as you trade, you will realize it really is the difference between becoming a successful/profitable trader and just and just being another failed trader. You can not be successful trader if you are not focused on managing their risk and reward properly. Think Risk and Return in dollars lossed or earned and not as percentage or pips. Pips gained or lost only tell half the story. Number of lots you trade affect your dollars risked or earned, thus no trader should ever measure returns as just pips or percentage. How to manage risk.(1).Position Sizing:  Position sizing is more important than pips risked. is a tool that is very ignored by many traders or simply do not know anything a bout. Position sizing is simply the number of lots you are trading per trade, whether they are standard, mini or micro lots. Example, if you are trading 2 mini lots of GBPUSD than this means you have either bought or sold $20000 worth of US dollars and depending on whether or not the exchange rate between the British Pound and US dollar moves in your favor you will win or lose an amount of money equal to $2 per pip X number of pips moved. So if you made 100 pips you would have profited $200. To break this all down, 1 standard lot allows you to control approximately $100000 worth of currency and is worth about $10 per pip profit or loss. 1 mini lot lets you control about $10000 and is equal to $1 per pip, 1 micro lot lets you control about $1000 and is equal to 0.10 cents per pip. In conclusion, the actual size of your position depends on whether you have a standard or mini account and most brokers dont offer strictly micro accounts. This information is important to know so that you can build your understanding of position sizing on a solid fundamental base. It is absolutely paramount to your consistent profitability in the forex market that you understand the importance of risk to reward ratio and how it relates to position sizing. Before you enter any trade you need to know the exact dollar amount you want to risk and exact reward you can make the risk. Example: if trading a micro lot of $50 on a trade with a 100 pip stop loss than your position size will be 0.5, 0.5*100=$50. So you would have a position size of 5 mini lots, risking $50 with a per pip value of 0.50 cents. Adjust your position size to maintain desired risk amount. Determine your risk to reward ratio on the trade before entering. You should always aim for :2 risk reward ratio. Build your risk management plan a round position sizing and risk to reward ratios.  Managing your trading capital is really about preserving it. Preserve your capital for obvious/confluent high profitability price action setups, this way you maximize your profit potential. Where traders go wrong is abusing and over use of their trading capital. They quickly give back profits mostly because they dont have the patience to stay out of the market and wait for another high quality price action signal to form. Think of your trading capital as real money, not just numbers on your computer screen. You may want to withdrawal some profits each month and hold the cold hard cash in your hands and realize that ypu can use it to pay bills or buy things.  (2) protective Stop losses:  All good trading methodologies use stop losses. A protective stop loss is an order to exit a long or short position should prices move against you to a specified price. The stop loss insures against an unusually large loss and has to be used in one way or another. An initial stop loss can be placed with your order on the trading platform. The trade will be closed automatically if stop loss is hit. If you buy or go long your stop loss will be below the market price. If selling or going short, your stop should be placed above the market. (3)Trailing Stop Loss: This is an automatic stop set up on platform at a certain range away from price to trail and lock in profit as price moves your way. (3)Emergency Stop Loss: Is placed 100 pips below or above your entry price to protect you incase you have a computer failure, internet loss or unexpected news event spike.',
                              comments: [
                               {
                                   rating:5,
                                   comment:"Risk management is key to your success",
                                   author:"John Baker",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"use only 5% of capital most",
                                   author:"Mike",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"watch as greens pile",
                                   author:"Lamb",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"Good subject",
                                   author:"Isme",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                        {
                        _id:10,
                        name: 'Chapter 11:  Trading Plan',
                        category: 'Advanced course',
                        description:'How to Make a Forex Trading Plan:  Having a Forex trading plan is one of the key elements to becoming a successful Forex trader. Many traders never even make a trading plan, let alone use one regularly. It’s very important that you do both; make a trading plan and use the one you make…don’t just make one and then never look at it like many traders do. Here are some important points to consider regarding Forex trading plans: Follow a plan, have a journal, log trades. You need to do three essential things to become and remain an organized and disciplined Forex trader. These things are the following: 1) Create a Forex trading plan, 2) Create (or use an existing) Forex trading journal, 3) ACTUALLY use BOTH of them. The process of creating a Forex trading plan around an effective trading strategy like price action trading, will work to solidify your understanding of the trading strategy and will also provide you with a blueprint for what you need to do each time you interact with the market. Having this market blueprint is essential for developing the type of ice-cold discipline that it takes to succeed in the Forex currency market over the long-term.  Logging your trades in a trading journal is critical to your success because it allows you to have a visual representation of your ability (or lack thereof) to trade the markets, it also creates a track record for you that you can use which will show you how your trading edge plays out over time, this will allow you to ‘tweak’ and adjust your trading strategy as you see fit. Trading plans contain a routine and check list: To put it simply, you NEED to have a routine in your trading activities; otherwise you will just end up running and gunning the seat of your pants. I have a trading philosophy that revolves around trading Forex like a sniper and not a machine gunner, if you want to trade like a sniper you have to have a routine that you follow, and you have to be disciplined…a sniper in the military is an extremely disciplined individual, and you need to think of the Forex market like it’s a war, and you are a sniper trying to take only the ‘easiest prey’; your ‘prey’ in the markets consists of only the most obvious trade setups. Your trading plan should include a checklist that you follow; this will include things that you look for in the market and what you want to see before entering a trade. If you can tick all the boxes then you enter the trade, if not then you hold off until your trading edge appears again. You can actually formulate your whole trading plan as a checklist; this will make it a smooth format that allows you to quickly decide if any potential trade setup is worth taking.Trading plans contain written guidelines of what a trader will do and look for as well as images of trade setups. Your trading plan should contain a written description of what you will do in the markets. This includes things like what your trading edge is, how you trade it, when you trade it, what time frames you trade (I prefer daily Forex chart trading), your strategy for risk management and profit taking, and your overall goals as a trader. You should also include images of your trading edge setups, so that you are constantly reminded of what an “ideal” setup looks like. Eventually, after you follow your written guidelines and “ideal” trade setup images long enough, you will burn them into your brain to the point of knowing exactly what you are looking for in the market, which will work to build your confidence as a trader. Trades planned in advance and ‘anticipated’ work best. One of the main reasons to create a Forex trading plan is because pre-planning your trades and pre-determining what you are looking for in the markets is the best way to profit over the long-run. You will never be more objective and calm then when you are NOT in the market, so if you can plan out all your trades when you are not in the markets, you will be totally uninfluenced by market variables when you are in a trade, and this will work to protect you from becoming an emotional Forex trader. Be patient and wait for the conditions of a plan to unfold – don’t force the issue. Patience is perhaps the most important virtue that a Forex trader can possess. When you are a patient trader it means you know what you are looking for in the markets and you wait for your trading edge to appear before you execute a trade. Trading in this manner eliminates many losing trades that are the result of trading emotionally…or without patience. A large part of trading, and perhaps the largest part, is simply waiting for an “ideal” price action setup or other trade setup to form in the market. Traders who don’t wait for an ideal setup to form, end up losing their money quickly because they negate their trading edge and are simply gambling instead. Make sure you stress the importance of patience in your trading plan, this way you will be reminded every time you read it why being a patient trader is so important to making money in the Forex market.',
                             comments: [
                               {
                                   rating:5,
                                   comment:"Always have one",
                                   author:"Speke",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Is a must to be a successful trader",
                                   author:"Jeff",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"great sample",
                                   author:"Robert",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Victoria",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"Lovely subject",
                                   author:"Mariana",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                         },
                        {
                        _id:11,
                        name: 'Chapter 12:  Summary',
                        category: 'Advanced course',
                        description:'Are three things you need to master as a trader. Mind, Money management and method. Without mastering all three the other two wont matter to much. Are all inter-connected and depend on each other. If your money management is off, it will negatively impact your trading mindset which will in turn cause you to deviate from your method and over trade the market. If your mind set is off, you will not have the focus or discipline to stick to proper money management and risk control which will result in you taking too much risk leading to big losses and eventually blowing out your trading account. If you have not mastered the strategy or method, and learn to wait patiently for the most obvious/confluent setups like the examples discussed in the course, it wont matter much if your mind and money management is right, because you will be wasting them on low probability trades.',
                             comments: [
                               {
                                   rating:5,
                                   comment:"Nice summary",
                                   author:"Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Not bad",
                                   author:"Sammy",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Excellent work",
                                   author:"David",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Elizabeth",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"Poor work",
                                   author:"helen",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                    
                ];
    
    this.getChapters =function(){
        
        return chapters;
        
        };
    this.getChapter = function (index) {
                    
            return chapters[index];
        };
    
})

;