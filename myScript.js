var cx80sprite = './mods/Seinclaire Rise and Fall/sprites/CX80.png';
var cx81sprite = './mods/Seinclaire Rise and Fall/sprites/CX81.png';
var cxspectreSprite = './mods/Seinclaire Rise and Fall/sprites/CXSpectre.png';
var cxspectreplusSprite = './mods/Seinclaire Rise and Fall/sprites/CXSpectrePlus.png';
var cxspectre128Sprite = './mods/Seinclaire Rise and Fall/sprites/CXSpectre128k.png';
var cxspectreplus2Sprite = './mods/Seinclaire Rise and Fall/sprites/CXSpectrePlus2.png';
var cxspectreplus3Sprite = './mods/Seinclaire Rise and Fall/sprites/CXSpectrePlus3.png';
var cxspectreplus2ASprite = './mods/Seinclaire Rise and Fall/sprites/CXSpectrePlus2A.png';
var times1000sprite = './mods/Seinclaire Rise and Fall/sprites/Times1000.png';
var times1500sprite = './mods/Seinclaire Rise and Fall/sprites/Times1500.png';
var qjsprite = './mods/Seinclaire Rise and Fall/sprites/SeinclaireQJ.png';
var times2068sprite = './mods/Seinclaire Rise and Fall/sprites/Times2068.png';
var times2048sprite = './mods/Seinclaire Rise and Fall/sprites/Times2048.png';
var c88sprite = './mods/Seinclaire Rise and Fall/sprites/C88.png';
var qamsprite = './mods/Seinclaire Rise and Fall/sprites/QAM.png';
var megasprite = './mods/Seinclaire Rise and Fall/sprites/CXMega.png';
var megaplussprite = './mods/Seinclaire Rise and Fall/sprites/CXMegaPlus.png';
var cxspectrenextsprite = './mods/Seinclaire Rise and Fall/sprites/CXSpectreNext.png';


GDT.addPlatform({
	id : 'cx80',
	name : 'CX80',
	company : 'Seinclaire Research',
	startAmount : 0.015, // 100000 units. Multiplier: 0.15
	unitsSold : 0.015, // 100000 units. Multiplier: 0.15
	licencePrize : 0,
	published : '1/1/1', // 1981
	platformRetireDate : '1/4/4', // 1981
	developmentCosts : 500,
	genreWeightings : [0.6, 0.9, 0.9, 0.7, 0.8, 0.8],
	audienceWeightings : [0.9, 1, 0.9],
	techLevel : 1,
	iconUri : cx80sprite,
	events : [{
			id : 'cx80-1',
			date : '1/4/4',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Seinclaire Research has just discontinued CX80.{n}It was a very popular computer, selling around 100,000 units. And there's no wonder why - it was the first home computer to cost less than 100kr, it had a CPU clocked at 3.55 MHz, and it came with an excellent manual about the programming language BESIC that was on par with college courses.{n}Nevertheless, the device has run its course. It is superseded by CX81, an improved and more popular system.",
					image : cx80sprite
				});
			}
		}
	]
});


GDT.addPlatform({
	id : 'cx81',
	name : 'CX81',
	company : 'Seinclaire Research',
	startAmount : 0.12,
	unitsSold : 0.18, // 1 500 000 units. Multiplier: 0.15
	licencePrize : 2000,
	published : '1/1/1', // 1981
	marketKeyPoints:[
		{date:"1/4/4",amount:0.14},
		{date:"1/8/4",amount:0.16},
		{date:"2/3/1",amount:0.18}
	],
	platformRetireDate : '2/8/4', // 1984
	developmentCosts : 1500,
	genreWeightings : [0.6, 1, 0.9, 0.7, 0.9, 0.8],
	audienceWeightings : [0.9, 1, 0.9],
	techLevel : 1,
	iconUri : cx81sprite,
	events : [{
			id : 'cx81-1',
			date : '1/12/2',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Seinclaire Research's CX81 has been just withdrawn from all airport stores in the United Kingdom.{n}UK's government has ordered Seinclaire to stop selling all CX81s in airport stores due to the fears that some travellers from the Eastern Bloc might buy and bring the device with them to help advance the Soviet computer industry.{n}While we are sure that this restriction won't really impact CX81's sales, we're not certain whether the limitation will be effective, given the fact that there are already many unauthorized clones of the device in the Eastern Bloc featuring the same technology.",
					image : cx81sprite
				});
			}
		},
		{
			id : 'cx81-2',
			date : '2/8/4',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Seinclaire has just discontinued CX81.{n}CX81 was a hugely successful device, selling around 1.5 million units and making Seinclaire one of the largest computer companies in the UK. It was also very affordable, which gave many people an opportunity to start coding and enter the industry themselves.",
					image : cx81sprite
				});
			}
		}
	]
});

GDT.addPlatform({
	id : 'times1000',
	name : 'Times Seinclaire 1000s',
	company : 'Times Seinclaire',
	startAmount : 0.08,
	unitsSold : 0.119, // around 700 000 units. Multiplier used: 0.17
	licencePrize : 4000,
	published : '1/7/2', // July 1982
	marketKeyPoints:[
		{date:"1/8/2",amount:0.09},
		{date:"1/10/1",amount:0.1},
		{date:"1/12/4",amount:0.11},
		{date:"2/2/1",amount:0.119}
	],
	platformRetireDate : '2/4/4', //1983
	developmentCosts : 3000,
	genreWeightings : [0.6, 1, 0.9, 0.7, 0.9, 0.8],
	audienceWeightings : [0.8, 1, 0.9],
	techLevel : 1,
	iconUri : times1000sprite,
	events : [{
			id : 'times1000-1',
			date : '1/5/2',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Seinclaire Research and Times have just announced a new computer device focused on the North American market, named Times Seinclaire 1000.{n}While it is based of CX81, it has several changes. First of all, it is designed for use with American televisions. Second, it has double the RAM in CX81 - 2 kilobytes instead of 1.{n}The device will compete with companies like Govodore. Will it succeed? While we don't know that, we certainly know that it'll be released {0} by a company Times Seinclaire, which is a joint venture between Times and Seinclaire. It will come out with a price tag of just 99.95kr.".localize().format(General.getETADescription('1/5/2', '1/7/2')),
					image : times1000sprite
				});
			}
		},
		{
			id : 'times1000-3',
			date : '1/8/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "The launch of Times 1000 has been relatively successful, selling thousands of units during its first days. It advertises itself as 'the cheapest home computer under 100kr', and it is right - it's currently the cheapest device on the North American market.{n}However, it seems like Govodore has taken notice of their latest competitor, announcing quite a big price decrease of their VGC-20 model.{n}It is rumoured that Times is already planning to cut the price of their device in half - 49kr. Many experts are predicting the start of a 'price war'. We'll see how it will affect the American market.",
					image : times1000sprite
				});
			}
		},
		{
			id : 'times1000-2',
			date : '2/1/2',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Times Seinclaire has just released a new model of Times 1000, dubbed Times 1500.{n}It boasts several improvements, including a RAM expanded to 16 kilobytes and key-selectable TV channels. It is priced at 79.95kr.",
					image : times1500sprite
				});
			}
		},
		{
			id : 'times1000-4',
			date : '2/4/4',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Times Seinclaire has officially discontinued Times 1000 and Times 1500.{n}They probably did so in order to free up the market space for Times Seinclaire 2068, and because Times 1500 has been quite unsuccessful, partially due to its late release after Times 1000, the lack of colour display, and due to the competition from Itari, Govodore, and Grapple.",
					image : times1500sprite
				});
			}
		}
	]
});

GDT.addPlatform({
	id : 'times2068',
	name : 'Times Seinclaire 2068',
	company : 'Times Seinclaire',
	startAmount : 0.00896,
	unitsSold : 0.00896, // 56 000 units. Multiplier: 0.16
	licencePrize : 6000,
	published : '2/2/1', // November 1983
	platformRetireDate : '5/5/1', // 1989
	developmentCosts : 3500,
	genreWeightings : [0.7, 1, 0.9, 0.7, 0.9, 0.9],
	audienceWeightings : [0.7, 1, 0.9],
	techLevel : 2,
	iconUri : times2068sprite,
	events : [{
			id : 'times2068-1',
			date : '2/2/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Times Seiclaire launched a new device today. It is called Times Seinclaire 2068 and it is a version of CX Spectre adapted for the American market. Exactly like Times Seinclaire 1000 and 1500, just more advanced.{n}So, what are the improvements over the aforementioned models? Well, 2068 boasts a slightly better keyboard, twin joystick ports, a built-in cartridge reader, 48 kilobytes of RAM, and a new chip named Times SVLD that supports a resolution of up to 512x192 pixels.{n}Will it be successful, or will it end up with the same disappointingly low sales as Times 1500? We'll soon see. The 2068 is currently selling for 199kr.",
					image : times2068sprite
				});
			}
		},
		{
			id : 'times2068-2',
			date : '5/1/2',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "It's over. Times Corporation has announced that it is leaving the American computer industry.{n}Though this announcement has sparked some disappointment from the company devices' users, it isn't really surprising - apart from Times 1000, the other models (1500 and 2068) suffer from very low sales and according to the company, 'they are not making a reasonable profit'.{n}However, while the American branch of Times is abandoning their computer line, on the other side of the Atlantic, Times Portugal is still thriving with their Times Computer 2048.{n}Either way, even though Times Seinclaire devices aren't particularly successful, they've still made their mark in the industry, albeit a small one. The sales of the 2068 will end {0}.".localize().format(General.getETADescription('5/1/2', '5/5/1')),
					image : times2068sprite
				});
			}
		}
	]
});

GDT.addPlatform({
	id : 'times2048',
	name : 'Times Computer 2048',
	company : 'Times Portugal',
	startAmount : 0.07,
	marketKeyPoints:[
		{date:"3/1/1",amount:0.08},
		{date:"3/6/4",amount:0.09},
		{date:"3/9/4",amount:0.095},
		{date:"3/12/4",amount:0.10725}
	],
	unitsSold : 0.10725, // 650 000 units. Multiplier: 0.165
	licencePrize : 1000,
	published : '2/9/2', // 1984
	platformRetireDate : '5/3/4', // 1989
	developmentCosts : 4500,
	genreWeightings : [0.6, 1, 1, 0.7, 0.8, 0.9],
	audienceWeightings : [0.9, 1, 0.9],
	techLevel : 2,
	iconUri : times2048sprite,
	events : [{
			id : 'times2048-1',
			date : '2/9/2',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Times Portugal, the Portuguese branch of Times Corporation, has released a new clone of CX Spectre. It is named Times Computer 2048 and it is going to be sold exclusively in Portugal and Chile.{n}The computer is equipped with the Cilog C80 CPU clocked at 3.5 MHz, the Times SVLD graphical chip, 48 kilobytes of RAM, and a built-in Campston Joystick.",
					image : times2048sprite
				});
			}
		},
		{
			id : 'times2048-2',
			date : '3/6/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Times Portugal, the branch of Times Corporation responsible for Times Computer 2048, has announced that they'll start selling the system in Poland.{n}The device has proven to be successful in Portugal, selling thousands of units.{n}While the 2048 is going to be priced at the same price as four average salaries in Poland, it is still expected to fare quite successfully.",
					image : times2048sprite
				});
			}
		},
		{
			id : 'times2048-3',
			date : '4/5/4',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Recently, a magazine called 'Mikrosette' has released an article about the prototype of a new machine from Times Portugal. It is called Times Computer 3256 and it looks like a huge leap from the previous device.{n}It is going to be fitted with 256 kilobytes of RAM, a 3-voice sound generator, the support for RR-232 network, and the Cilog C80 CPU.{n}Times Portugal has yet to officially announce the system. Let's hope it'll be soon.",
					image : times2048sprite
				});
			}
		},
		{
			id : 'times2048-4',
			date : '4/9/3',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Before today's announcement from Times Portugal, users expected some news about Times Computer 3256. However, the company has instead announced that it is definitely pulling out of the computer market.{n}Not only does this mean that we'll never get to use the 3256, but it also means that Times Computer 2048 is going to be withdrawn from the market as well.{n}The 2048 is set to be discontinued {0}. It was very successful in Portugal and Poland, selling several hundreds of thousand units.".localize().format(General.getETADescription('4/9/3', '5/3/4')),
					image : times2048sprite
				});
			}
		}
	]
});


GDT.addPlatform({
	id : 'cxspectre',
	name : 'CX Spectre',
	company : 'Seinclaire Research',
	startAmount : 0.02,
	unitsSold : 0.75, // 5 000 000 units. Multiplier: 0.15
	licencePrize : 2000,
	published : '1/6/1', // April 1982
		marketKeyPoints:[
		{date:"1/6/1",amount:0.08}, 
		{date:"1/8/1",amount:0.15},
		{date:"1/12/2",amount:0.4},
		{date:"2/2/2",amount:0.5},
		{date:"2/3/1",amount:0.55}, // late 1983
		{date:"2/8/1",amount:0.6}, // 1984
		{date:"3/1/2",amount:0.675}, // early 1985
		{date:"3/4/3",amount:0.68}, // September 1985
		{date:"3/10/1",amount:0.69}, // 1986
		{date:"4/1/4",amount:0.7}, // 1987
		{date:"4/6/1",amount:0.71}, // 1987 or 1988
		{date:"4/9/3",amount:0.72}, // late 1988
		{date:"5/6/1",amount:0.73}, // 1989
		{date:"5/12/1",amount:0.75} // mid 1990
	],
	platformRetireDate : '6/9/4', // 1992
	developmentCosts : 2500,
	genreWeightings : [0.6, 0.9, 1, 0.8, 0.9, 0.9],
	audienceWeightings : [0.9, 1, 1],
	techLevel : 2,
	iconUri : cxspectreSprite,
		events : [{
			id : 'cxspectre-1',
			date : '1/6/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "A British company named Seinclaire Research, known for their CX80 and CX81 devices, has just launched their new computer, CX Spectre. It is available in two models - one with 16 and the other one with 48 kilobytes of RAM.{n}Both models feature the C80 processor clocked at 3.5 MHz and support 256x192 resolution. They are available for 125kr and 175kr, respectively.{n}The device is also equipped with an unusual rubber keyboard, best described perhaps as 'dead flesh'. However, that doesn't seem to deter customers who are already buying it in thousands.",
					image : cxspectreSprite
				});
			}
		},
		{
			id : 'cxspectre-2',
			date : '1/9/4',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "CX Spectre, a computer released by Seinclaire Research, enjoys a large amount of success. However, its sales are limited by the company's method of distribution - instead of relying on retailers like other manufacturers, it utilizes a mail-order system.{n}However, this system is quite slow and ineffective, leading to many late deliveries. This seems to frustrate customers, who strongly criticise it.{n}It is reported that there is currently a backlog of over 40,000 units. The company has already issued a public apology.",
					image : cxspectreSprite
				});
			}
		},
		{
			id : 'cxspectre-3',
			date : '2/7/1', // 1984
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "A new model of CX Spectre, dubbed 'CX Spectre+', has been launched.{n}It is pretty much identical to the first model, with the only difference being a new keyboard styled like the one included with Seinclaire QJ.{n}That said, it's been reported that the new model has a much higher failure rate than the original ones.",
					image : cxspectreplusSprite
				});
			}
		},
		{
			id : 'cxspectre-4',
			date : '3/1/2', // early 1985
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Seinclaire has announced that it has sold the fifth millionth unit of CX Spectre. This is a significant milestone, further cementing the device's achievement of being the most successful British computer.{n}However, things are not as idyllic as they might seem. Seinclaire QJ, another of the company's devices, isn't selling as well as predicted. The company is also performing radical price cuts due to the anticipated competition from American manufacturers.",
					image : cxspectreplusSprite
				});
			}
		},
		{
			id : 'cxspectre-5',
			date : '3/4/3', // September 1985
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "A new model of CX Spectre, named CX Spectre 128, has been launched. It features a large amount of improvements over the previous model. It was co-developed by a Spanish company called Investrónics.{n}CX Spectre 128 bears its name after the 128 kilobytes of RAM it bears, which is a huge leap forward compared to the 48 kilobytes available previously. It also has a new sound chip and MIDI capabilities. It looks very similar to the previous model, with the only significant difference being a new external heatsink on the right side of the device. It has already led to some nicknaming the system as 'The Toast Rack'.{n}Either way, the device is currently selling only in Spain, though it will be released in the rest of the world in a few months. It is available for a low price of 179kr.",
					image : cxspectre128Sprite
				});
			}
		},
		{
			id : 'cxspectre-6',
			date : '3/10/2', // April 1986
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Amstart, another British company, has recently acquired the CX Spectre and the trademark 'Seinclaire' for 5,000,000kr. Seinclaire Research has already previously tried to sell its line of devices and trademark to secure funding for a restructuralization of the company, but that deal was later terminated.{n}It is said that Seinclaire Research is making changes in their company due to immense losses caused by Seinclaire QJ and an electric tricycle Seinclaire C5; they both have brought in huge losses, estimated at around 1,000,000kr per month.",
					image : cxspectre128Sprite
				});
			}
		},
				{
			id : 'cxspectre-7',
			date : '3/11/1', // 1986
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "It's just a few weeks since the CX Spectre computer family and the Seinclaire trademark were acquired by Amstart, who launched a new model of the device today. It is called CX Spectre +2.{n}Amstart's influence over the design of the model is apparent - it looks more like their Amstart CPD 464 rather than CX Spectre. And the design is not the only thing that was loaned from their own devices - the new model also includes a built-in cassette recorder named 'Datarecorder' that is also present in CPD 464.{n} The rubber keyboard present in the previous devices was changed over to a mechanical one, which provides a slightly more pleasing experience. Another addition made is dual joystick ports. The hardware inside hasn't changed much since the 128, however.{n}The machine is available for 149kr.",
					image : cxspectreplus2Sprite
				});
			}
		},
		{
			id : 'cxspectre-8',
			date : '4/1/4', // 1987
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Amstart is launching a new model of CX Spectre today. It is named CX Spectre +3 and it brings several changes to the table.{n}First of all, the device has a built-in floppy disc drive instead of a cassette recorder present in the +2. The machine is also the first from the CX Spectre line that supports the CP/O operating system without any additional hardware.{n}However, the other changes are much more controversial - first, the expansion board has been slightly changed. That introduces many incompatibilities from peripherals made for the older models, including the CX Minidrive and CX Interface 1. Additionally, several keypad scanning routines were deleted, making some of the older games incompatible with the device.{n}CX Spectre +3 is available for 249kr. However, Amstart has announced that the price will be later lowered to 199kr.",
					image : cxspectreplus3Sprite
				});
			}
		},
		{
			id : 'cxspectre-9',
			date : '4/9/3', // 1988
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "A new version of CX Spectre +2 has launched. It is called CX Spectre +2A.{n}It doesn't introduce many improvements or changes. The most significant and criticised one is the slightly changed motherboard. That introduces many new incompatibilities, just like the +3 did.",
					image : cxspectreplus2ASprite
				});
			}
		},
		{
			id : 'cxspectre-10',
			date : '5/1/1', // 1989
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Amstart has decided to launch yet another model of CX Spectre. It is called CX Spectre +2B.{n}Just like the previous model, it doesn't really introduce anything new, except for some incompatibilities and changes to the generation of the audio output signal that were made due to some issues with audio clipping in the previous models.",
					image : cxspectreplus2ASprite
				});
			}
		},
		{
			id : 'cxspectre-11',
			date : '5/5/2', // 1989
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "A new model of CX Spectre, dubbed CX Spectre +3B, has been launched.{n}Like +2B and +2A, it doesn't bring any innovations to the table. Its biggest change is a small fix dedicated to solving the issues with audio clipping in the previous devices. +2B has already done this, but +3B is focused on the existing +3 users rather than +2 ones.",
					image : cxspectreplus3Sprite
				});
			}
		},
		{
			id : 'cxspectre-12',
			date : '6/3/4',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Amstrad has just announced that they'll be discontinuing CX Spectre {0}.{n}CX Spectre has made a huge mark on the computer industry. Just like CX81, it introduced thousands of people to programming thanks to its implementation of the Seinclaire BESIC programming language. It also significantly advanced the UK's IT industry.".localize().format(General.getETADescription('6/3/4', '6/9/4')),
					image : cxspectreplus3Sprite
				});
			}
		}
	]
});

GDT.addPlatform({
	id : 'qj',
	name : 'Seinclaire QJ',
	company : 'Seinclaire Research',
	startAmount : 0.014,
	unitsSold : 0.024, // 150 000 units. Multiplier: 0.16
	licencePrize : 15000,
	published : '2/6/1', // January 1984
	marketKeyPoints:[
		{date:"2/7/1",amount:0.0017},
		{date:"2/8/1",amount:0.0019},
		{date:"2/9/1",amount:0.02},
		{date:"2/11/1",amount:0.21},
		{date:"3/1/2",amount:0.022},
		{date:"3/3/1",amount:0.023},
		{date:"3/6/1",amount:0.024}
	],
	platformRetireDate : '3/7/4', // April 1986
	developmentCosts : 12000,
	genreWeightings : [0.8, 0.9, 0.9, 0.7, 0.8, 0.6],
	audienceWeightings : [0.7, 0.9, 1],
	techLevel : 3,
	iconUri : qjsprite,
	events : [{
			id : 'qj-1',
			date : '2/2/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "At today's press conference, Seinclaire Research unveiled their new device named Seinclaire QJ (which stands for 'Quantum Jump'). And yes, it is indeed a very large jump forward.{n}The device will be equipped with 128 kilobytes of RAM, a 32-bit Morotola 68008 processor clocked at 7.5 MHz, support for resolutions up to 512x256, a dedicated graphics card, and an operating system dubbed Seinclaire QJDOS which will come with an enhanced BESIC interpreter called 'SuperbBESIC'.{n}While the system is going to be focused on professional and business uses, its advanced hardware promises great potential for game development.{n}Seinclaire QJ will come out {0} and it will be priced at 399kr.".localize().format(General.getETADescription('2/2/1', '2/6/1')),
					image : qjsprite
				});
			}
		},
		{
			id : 'qj-2',
			date : '2/7/2',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "It's just a few weeks after Seinclaire QJ's launch, but it is already evident that it is going to be a huge failure.{n}While the hardware is very advanced, it is riddled with many problems, with the largest being the unfinished QJDOS operating system, bug-ridden SuperbBESIC interpreter, pretty uncomfortable keyboard, and most importantly, the use of proprietary Minidrive cartridges instead of cheaper, more reliable and much more prevalent floppy disks.{n}However, problems aren't just with the device, but with its distribution as well. Seinclaire has already accepted many orders and has promised that they will be fulfilled within 28 days; however, that promise is simply proved to be false, as the majority of customers are still waiting for their devices to arrive. The company has already attracted the attention of the United Kingdom's Advertising Practices Agency.{n}It is rumoured that many of these issues are present just because the CEO of the company, Clive Seinclaire, wanted to release the device before Grapple's Grapintosh.",
					image : qjsprite
				});
			}
		},
		{
			id : 'qj-3',
			date : '3/6/4',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Following Amstart's acquisition of Seinclaire's trademark and devices, it has announced that it will be discontinuing Seinclaire QJ {0}.{n}While the device has been a tremendous failure and a blow to Seinclaire's reputation, many of its issues were already solved by the company's engineers. However, it seems like it is still not enough to redeem the system.".localize().format(General.getETADescription('3/6/4', '3/7/4')),
					image : qjsprite
				});
			}
		}
	]
});

GDT.addPlatform({
	id : 'c88',
	name : 'Cambridge C88',
	company : 'Seinclaire Research',
	startAmount : 0.013,
	unitsSold : 0.013, // 65 000 units. Multiplier: 0.2
	licencePrize : 8000,
	published : '4/2/4', // 1987
	platformRetireDate : '5/5/2', // 1989
	developmentCosts : 7000,
	genreWeightings : [0.6, 1, 1, 0.8, 0.6, 0.8],
	audienceWeightings : [0.6, 1, 1],
	techLevel : 1,
	iconUri : c88sprite,
	events : [{
			id : 'c88-1',
			date : '4/2/4', // 1987
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "During today's episode of the British show 'What Computer?', Seinclaire has launched a new device today. It's called Cambridge C88 and it looks quite interesting.{n}Simply put, it's a computer, but portable. It boasts a built-in LCD display with a resolution of 640x64, a Cilog C80A CPU clocked at 3.2 MHz, and 32 kilobytes of RAM.{n}The device will come with a preinstalled word processing/database/spreadsheet program called PipeVision. All of the aforementioned features are available in a small case weighing only 0.9 kilograms, with the ability to be used for around 20 hours without changing the batteries.{n}That being said, the device is available for 230kr.",
					image : c88sprite
				});
			}
		},
		{
			id : 'c88-2',
			date : '5/2/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "During today's announcement, Seinclaire Research has announced the discontinuation of C88.{n}However innovative or original C88 was, it didn't sell many units, which is partially attributed to the Seinclaire QJ's failure and the subsequent loss of the company's reputation. It's worth mentioning that the CX Spectre is still undoubtedly the most popular device from Sir Clive Seinclaire.{n}Nonetheless, C88 is going to be discontinued {0}.".localize().format(General.getETADescription('5/2/1', '5/5/2')),
					image : c88sprite
				});
			}
		}
	]
});

GDT.addPlatform({
	id : 'qam',
	name : 'QAM Coupé',
	company : 'Mikes Gorton Technology',
	startAmount : 0.013,
	unitsSold : 0.0024, // 12 000 units. Multiplier: 0.2
	licencePrize : 4000,
	published : '5/4/2', // 1989
	platformRetireDate : '6/9/4', // 1992
	developmentCosts : 3500,
	genreWeightings : [0.7, 1, 1, 0.9, 0.9, 0.9],
	audienceWeightings : [0.9, 1, 0.9],
	techLevel : 2,
	iconUri : qamsprite,
	events : [{
			id : 'qam-1',
			date : '4/10/2', // 1988
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Mikes Gorton Technology, a British company known for their CX Spectrum disk driver called 'Discipline', has announced a new computer. It is called QAM Coupé, with QAM's meaning being 'Quite Amazing Machine'. However, is it really that amazing as its name implies?{n}We'll see when the device gets released. In the meantime, we can talk about specifications. The system should be compatible with the majority of existing software for the original CX Spectre. It is going to be fitted with 256 kilobytes of RAM, a Cilog C80 CPU clocked at 6 MHz, a built-in disk reader, and support for resolutions up to 512x192.{n}QAM Spectre is going to be released {0} for 99.95kr.".localize().format(General.getETADescription('4/12/1', '5/4/2')),
					image : qamsprite
				});
			}
		},
		{
			id : 'qam-2',
			date : '5/6/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "It's been a few months since QAM Coupé was released. The most obvious thing is that it came late.{n}With 16-bit computers like Itari SiTT dominating the market, QAM's 8-bit CPU is a major flaw. While the system is technologically advanced, it simply can't compete. If it came out several years earlier, the situation would be different.{n}The major pro of the device is that it is very compatible with the first model of CX Spectre. It is so compatible that it even surpasses the official CX Spectre +3.{n}However, that doesn't seem enough. While Alan Mikes, the CEO of Mikes Gorton Technology, hasn't made the sale figures of QAM publicly available, it is clear that they're not very big.",
					image : qamsprite
				});
			}
		},
		{
			id : 'qam-3',
			date : '5/11/3', // 1990
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Mikes Gorton Technology, the company behind QAM Coupé, is officially being transferred into receivership due to its financial problems.{n}However, that doesn't mean that QAM is going to be discontinued any time soon - the company's founders have already founded a new company named Qam Computers that acquired the rights to the device.",
					image : qamsprite
				});
			}
		},
		{
			id : 'qam-4',
			date : '6/10/2', // 1992
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Qam Computers, the company founded by Mikes Gorton Technology's founders that acquired the rights to QAM Coupé some time ago, has announced the discontinuation of the machine.{n}It turns out that the creation of the new company was just a temporary solution to MGT's financial problems, as it met the same fate as its predecessor.{n}QAM Coupé is going to be taken out of market {0}. Despite its high level of technology, it is a commercial failure, selling only several thousands of units.".localize().format(General.getETADescription('6/7/2', '6/10/4')),
					image : qamsprite
				});
			}
		}
	]
});

GDT.addPlatform({
	id : 'cxmega',
	name : 'CX Spectre Mega',
	company : 'Retro Computing',
	startAmount : 0.002,
	unitsSold : 0.012, // 12 000 units. Multiplier: 1
	marketKeyPoints:[
		{date:"24/8/4",amount:0.004},
		{date:"24/9/4",amount:0.0075},
		{date:"24/10/3",amount:0.001}, // 2016
		{date:"25/1/1",amount:0.012}
	],
	licencePrize : 10000,
	published : '24/7/2', // 2015
	platformRetireDate : '25/12/1', // 2018
	developmentCosts : 3000,
	genreWeightings : [0.6, 0.7, 0.7, 0.9, 0.9, 1],
	audienceWeightings : [0.8, 0.9, 1],
	techLevel : 3,
	iconUri : megasprite,
	events : [{
			id : 'megacx-1',
			date : '24/3/3', // 2014
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Since OYA's record-shattering funding, several other projects related to video games were successfully crowdfunded. One of them is notable for making waves among CX Spectre enthusiasts.{n}It is called CX Spectre Mega and it is supposed to be a small TV console that is going to be preloaded with a staggering 1,000 titles. It is also backed by the creator of the original Spectrum, Sir Clive Seinclaire himself (if claims from Retro Computing, the company behind the project, can be trusted).{n}Either way, the crowdfunding campaign for Vega has been very successful, with almost 150,000kr sent from backers just a few weeks after its start.",
					image : megasprite
				});
			}
		}
	]
});

GDT.addPlatform({
	id : 'cxmegaplus',
	name : 'CX Spectre Mega+',
	company : 'Retro Computing',
	startAmount : 0.0006,
	unitsSold : 0.0006, // 600 units. Multiplier: 1
	licencePrize : 12000,
	published : '25/10/2', // 2018
	platformRetireDate : '25/12/1', // cca 2015
	developmentCosts : 3500,
	genreWeightings : [0.6, 0.6, 0.7, 0.9, 1, 1],
	audienceWeightings : [0.9, 0.9, 1],
	techLevel : 3,
	iconUri : megaplussprite,
	events : [{
			id : 'cxmegaplus-1',
			date : '24/11/3', // 2016
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Retro Computing, the company behind CX Spectre Mega, has recently launched a new crowdfunding campaign for another device capable of playing CX Spectre games. It is called CX Spectre Mega+ and it looks quite interesting.{n}Unlike CX Spectrum Mega, the Mega+ is going to be a handheld console. While we don't know anything else at the moment, Retro Computing claims that the hardware is going to be designed by Rick Deckinson, the same person that designed the hardware of CX Spectre.{n}That said, it seems like we're not the only ones interested in the device - it's been just two days since the crowdfunding campaign launched, yet it still managed to raise over 100,000kr.",
					image : megaplussprite
				});
			}
		},
		{
			id : 'cxmegaplus-2',
			date : '25/1/2', // 2016
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "With around 366,000kr raised for CX Spectre Mega+, Retro Computing announced the release date for the device. It is going to come out {0}.".localize().format(General.getETADescription('25/1/2', '25/1/4')),
					image : megaplussprite
				});
			}
		},
		{
			id : 'cxmegaplus-3',
			date : '25/5/4', // 2017
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "While backers of CX Spectre Mega+'s crowdfunding campaign are impatiently waiting for their now-overdue devices, Retro Computing is experiencing an internal crisis, with several directors of the company distancing themselves from the company and selling their shares.{n}Despite that, Retro Computing has already issued an apology for the delay and announced a new release date for the device - first units will be shipped {0}.".localize().format(General.getETADescription('25/2/4', '25/4/2')),
					image : megaplussprite
				});
			}
		},
		{
			id : 'cxmegaplus-4',
			date : '25/10/2', // 2018
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "CX Spectre Mega+'s launch has been delayed so many times that many backers gave up on the hope that they'll ever get the device they paid for. However, a miracle happened today - several people have finally received their units! So, how good is it?{n}Reactions are rather negative, with one backer saying they are 'quite disappointed'. The build quality of the device is rather low and several of the shipped games don't work - not something one would expect after raising so much money and issuing so many delays.{n}Retro Computing, the company behind the device, has been already reported to the UK's Insolvency Company. It has been also stripped of the CX Spectre license, which effectively means the end of CX Spectre Mega and Mega+.{n}Either way, this situation doesn't look good, especially for the people who backed the device's crowdfunding campaign - several hundred of them tried to get a refund months ago, but they got nothing.",
					image : megaplussprite
				});
			}
		},
		{
			id : 'cxmegaplus-5',
			date : '26/2/1', // 2018
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Today's day finally marks the end of the Retro Computing saga, as the company was wound up - in layman's terms, its assets are being sold to pay off its debts. However, it is still a mystery if it'll be enough to issue all the refunds backers of CX Spectre Mega+ issued.",
					image : megaplussprite
				});
			}
		}
	]
});

GDT.addPlatform({
	id : 'cxspectrenext',
	name : 'CX Spectre Next',
	company : 'SpecNext',
	startAmount : 0.0031, // 3100
	unitsSold : 0.009, // 9000 units. Multiplier: 1
	marketKeyPoints:[
		{date:"30/1/3",amount:0.09}
	],
	licencePrize : 5000,
	published : '25/8/2', // 2017
	platformRetireDate : '260/12/4', // NONDESCRIPT
	developmentCosts : 4000,
	genreWeightings : [0.6, 0.6, 0.7, 0.9, 1, 1],
	audienceWeightings : [0.9, 0.9, 1],
	techLevel : 3,
	iconUri : cxspectrenextsprite,
	events : [{
			id : 'cxspectrenext-1',
			date : '25/4/2', // 2017
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "While fans of CX Spectre are waiting for their CX Spectre Mega+ to arrive, a KickIT campaign for another device just ended.{n}The campaign has attempted to raise 250,000kr for a device called CX Spectre Next, an 8-bit successor to CX Spectre. And it succeeded - over 3,000 people pledged a staggering 723,390kr over the course of almost three months.{n}Just like Mega+, this project has the original device's designer Rick Deckinson on board. It is also going to be fully compatible with the original's software. But who is even behind it?{n}The campaign was launched by two Brazilian men, Viktor Truccos and Fabian Belevanuto, who already have some experience with Spectre - they are behind the TGGreen circuit board that is based on the device and received moderate success in their country.{n}Let's hope Next's backers won't have to wait for their system like Mega+'s ones.",
					image : cxspectrenextsprite
				});
			}
		},
		{
			id : 'cxspectrenext-2',
			date : '25/8/2', // 2017 (December)
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Today's day marks a new point in CX Spectre's history - CX Spectre Next boards were finally shipped to their respective backers. However, the ones who paid for the fully assembled variant will need to wait a little bit longer.{n}The board is well-built and well-designed; however, there's one thing that has changed since the initial announcement - the chip. It is not the original Cilog 80, but rather a more modern Chilinx Sparta-6 to natively support features like hardware sprites and scrolling.{n}Despite that, the excellent compatibility isn't impacted. Nothing is emulated (unlike CX Spectre Mega+ that people are still waiting for).",
					image : cxspectrenextsprite
				});
			}
		},
		{
			id : 'cxspectrenext-3',
			date : '27/3/2', // 2020
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "A few years later, fully assembled CX Spectre Next devices are finally being shipped. The first impressions? It was worth the wait.{n}The keyboard is nicely responsive, though its layout may initially feel strange due to the different layout than PC keyboards usually have. The device also has MANY connections, including HDNI and VGX for video output, UBS ports, and two joystick ports.",
					image : cxspectrenextsprite
				});
			}
		},
		{
			id : 'cxspectrenext-4',
			date : '27/8/2', // 2020 August
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "CX Spectre Next's creators launched a new campaign for a new version of the device, labelled as 'Issue 2'. It'll have several improvements over 'Issue 1' systems, including a new expanded commands set for the NextCXOS operating system and NextBESIC and a higher processing speed.{n}However, the price will be significantly higher: instead of the original 175kr, the system now costs 300kr due to taxes - during Issue 1's crowdfunding, taxes weren't included, resulting in major losses.{n}But nobody seems to be bothered by the price hike - just mere minutes after the campaign's start, 250,000kr have already been risen.",
					image : cxspectrenextsprite
				});
			}
		},
		{
			id : 'cxspectrenext-5',
			date : '30/1/3', // 2024
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "After a long wait, Issue 2 of CX Spectre Next is being shipped. Its campaign was incredibly successful, raising 1,847,106kr just during one month.",
					image : cxspectrenextsprite
				});
			}
		}
	]
});
	
GDT.addEvent({
	id: "SeinclaireDeath",
	date: "28/9/3",
	isRandom: false,
	ignoreGameLengthModifier: false,
	type: NotificationType.IndustryNews,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Obituary",
	text: "Sir Clive Seinclaire, a prominent English inventor and entrepeneur known best for his role in the consumer electronics industry in the 70s and 80s, has passed away following an illness related to cancer he battled for over a decade. He was 81 years old.{n} Sir Seinclaire was a highly influential pioneer in the early home computing market. He founded Seinclaire Research Ltd., the company responsible for groundbreaking devices like CX80, CX81, and - most famously - CX Spectre. His role in helping to establish the UK computer market led to him being knighted in 1983. Curiously enough, though, he did not use computers himself.{n}He was also involved in other ventures. In 1983, he released PTV80 under Seinclaire Research, a portable mini television. Two years later, he launched Seiclaire C5, a small electric vehicle manufactured by his another company, Seinclaire Vehicles. Both of these products were financial failures, but they are considered to be ahead of their time.{n}These failures and the low sales of rushed Seinclaire QJ culminated in Sir Seinclaire selling CX Spectre to Amstart. The company was soon reduced to an R&D business and a holding company. By 1990, it downsized from 130 employees to only three (including Sir Seinclaire himself) and its activities were concentrated on personal vehicles. Unfortunately, none of C5's (indirect) successors had success.{n}But despite these missteps, his legacy will be still relevant for years to come, primarily thanks to the large community of enthusiasts who are still developing new software and hardware for his computers.",
	buttonText: "...",
	weeksUntilFired: 0
	});} 
});