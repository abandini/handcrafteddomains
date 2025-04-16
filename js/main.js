// main.js

// Domain Categories Structure
const categories = {
    "ai-tech": {
        name: "AI & Technology",
        icon: "robot",
        description: "Future-proof domains for the AI revolution",
        subcategories: {
            "ai-core": "Core AI",
            "machine-learning": "Machine Learning",
            "ai-health": "AI Health Tech",
            "cybersecurity": "Cybersecurity"
        }
    },
    "health": {
        name: "Health & Wellness",
        icon: "heartbeat",
        description: "Domains for health innovation",
        subcategories: {
            "aging": "Aging & Longevity",
            "biotech": "Biotech & Research",
            "mental-health": "Mental Health",
            "medical": "Medical Services"
        }
    },
    "cannabis": {
        name: "Cannabis & CBD",
        icon: "leaf",
        description: "Premium cannabis industry domains",
        subcategories: {
            "lifestyle": "Lifestyle & Culture",
            "products": "Products & Retail"
        }
    },
    "food": {
        name: "Food & Beverage",
        icon: "utensils",
        description: "Culinary and beverage domains",
        subcategories: {
            "spicy": "Hot Sauce & Spice",
            "brewing": "Beer & Brewing",
            "specialty": "Specialty Foods",
            "restaurants": "Restaurants & Bars"
        }
    },
    "future-tech": {
        name: "Future Tech",
        icon: "microchip",
        description: "Next-generation technology domains",
        subcategories: {
            "quantum": "Quantum Technology",
            "robotics": "Robotics & Automation",
            "industrial": "Industrial Technology"
        }
    },
    "business": {
        name: "Business & Services",
        icon: "briefcase",
        description: "Premium domains for business and professional services",
        subcategories: {
            "marketing": "Marketing & SEO",
            "consulting": "Consulting Services",
            "ecommerce": "E-commerce",
            "productivity": "Productivity & Planning"
        }
    },
    "entertainment": {
        name: "Entertainment & Media",
        icon: "film",
        description: "Captivating domains for entertainment and media ventures",
        subcategories: {
            "storytelling": "Storytelling & Content",
            "gaming": "Gaming & Interactive",
            "media": "Media & Publishing"
        }
    },
    "lifestyle": {
        name: "Lifestyle & Recreation",
        icon: "umbrella-beach",
        description: "Premium domains for lifestyle and recreational brands",
        subcategories: {
            "beach": "Beach & Water",
            "fashion": "Fashion & Apparel",
            "home": "Home & Decor"
        }
    },
    "history": {
        name: "History & Heritage",
        icon: "monument",
        description: "Distinctive domains connecting to history and cultural heritage",
        subcategories: {
            "artifacts": "Historical Artifacts",
            "cultural": "Cultural Heritage"
        }
    }
};

// Domain Details Database
const domainDetails = {
    // AI & Technology
    '40hz.ai': {
        category: "ai-tech",
        subcategory: "ai-health",
        story: "At the intersection of neuroscience and artificial intelligence lies the future of cognitive health. 40hz.ai represents groundbreaking technology that harnesses specific brain frequencies to enhance cognitive function and combat neurological decline.",
        targetList: [
            "Neurotechnology startups",
            "Brain health companies",
            "Cognitive enhancement platforms",
            "Medical device manufacturers"
        ],
        features: [
            "Memorable and scientifically relevant name",
            "Growing market in brain health technology",
            "Premium .ai domain extension",
            "Perfect for health tech branding"
        ],
        premium: true,
        price_tier: 3
    },
    
    'secureclone.com': {
        category: "ai-tech",
        subcategory: "cybersecurity",
        story: "In an age of digital vulnerability, secureclone.com represents the future of data protection and system replication. Perfect for cybersecurity companies offering secure backup and cloning solutions.",
        targetList: [
            "Cybersecurity companies",
            "Data protection services",
            "System backup providers",
            "Enterprise security solutions"
        ],
        features: [
            "Clear and descriptive branding",
            "Growing cybersecurity market",
            "Instantly communicates value proposition",
            "Versatile for multiple security applications"
        ],
        premium: true,
        price_tier: 2
    },
    
    // Health & Wellness
    'agingundone.com': {
        category: "health",
        subcategory: "aging",
        story: "Rewriting the story of time. agingundone.com represents a revolutionary approach to longevity and vitality, perfect for companies at the forefront of anti-aging research and wellness.",
        targetList: [
            "Anti-aging clinics",
            "Longevity research companies",
            "Wellness brands",
            "Health technology startups"
        ],
        features: [
            "Powerful, memorable branding",
            "Growing anti-aging market",
            "Perfect for wellness industry",
            "Strong commercial appeal"
        ],
        premium: true,
        price_tier: 2
    },

    'curetoenailfungus.com': {
        category: "health",
        subcategory: "medical",
        story: "A direct and solution-focused domain for the millions seeking relief from a common but stubborn condition. This domain speaks directly to a specific audience with a clear value proposition.",
        targetList: [
            "Podiatrists and foot care specialists",
            "Pharmaceutical companies",
            "Natural remedy producers",
            "Medical product marketers"
        ],
        features: [
            "Highly targeted niche domain",
            "Clear solution-based messaging",
            "Strong search potential",
            "Direct-to-consumer appeal"
        ],
        premium: true,
        price_tier: 2
    },
    
    // Cannabis
    'blazinboomers.com': {
        category: "cannabis",
        subcategory: "lifestyle",
        story: "Reimagining senior wellness through cannabis education and community. A perfect blend of humor and purpose for the growing senior cannabis market.",
        targetList: [
            "Senior cannabis education",
            "Wellness communities",
            "CBD brands",
            "Cannabis lifestyle companies"
        ],
        features: [
            "Memorable and engaging name",
            "Growing demographic market",
            "Perfect for community building",
            "Strong brand potential"
        ],
        premium: true,
        price_tier: 2
    },

    // Food & Beverage
    'jawmelter.com': {
        category: "food",
        subcategory: "spicy",
        story: "For the heat seekers and flavor enthusiasts. jawmelter.com embodies the intense experience of premium hot sauces and spicy foods that leave a lasting impression.",
        targetList: [
            "Hot sauce manufacturers",
            "Specialty food brands",
            "Spice retailers",
            "Food challenge events"
        ],
        features: [
            "Evocative and memorable name",
            "Growing specialty food market",
            "Perfect for bold food brands",
            "Strong visual branding potential"
        ],
        premium: true,
        price_tier: 2
    },
    'CLEVELANDKOLSCH.COM': {
        category: "food",
        subcategory: "brewing",
        story: "A perfect blend of local pride and craft brewing tradition. This domain combines geographic specificity with a popular beer style, creating an instant connection with local consumers.",
        targetList: [
            "Craft breweries",
            "Local beverage brands",
            "Brew pubs",
            "Regional distributors"
        ],
        features: [
            "Strong local branding",
            "Perfect for craft beer market",
            "Geographic specificity",
            "Ready-made audience"
        ],
        premium: true,
        price_tier: 2
    },
    'donutjuicing.com': {
        category: "food",
        subcategory: "specialty",
        story: "A playful and intriguing domain that combines two popular food trends. Perfect for innovative food businesses that blend traditional treats with modern health-conscious approaches.",
        targetList: [
            "Specialty bakeries",
            "Juice bars with expanded offerings",
            "Innovative food franchises",
            "Health-conscious dessert brands"
        ],
        features: [
            "Unique and memorable concept",
            "Conversation-starting brand name",
            "Appeals to both indulgence and health markets",
            "Versatile for creative food concepts"
        ],
        premium: true,
        price_tier: 2
    },
    'spicefarming.com': {
        category: "food",
        subcategory: "spicy",
        story: "From seed to sensation. This domain represents the entire journey of spice cultivation, perfect for businesses focused on authentic, farm-to-table spice production and education.",
        targetList: [
            "Spice producers and importers",
            "Culinary education platforms",
            "Specialty food retailers",
            "Farm-to-table businesses"
        ],
        features: [
            "Clear and descriptive branding",
            "Growing interest in food origins",
            "Educational and commercial potential",
            "Appeals to culinary enthusiasts"
        ],
        premium: true,
        price_tier: 2
    },
    'guardiansbeer.com': {
        category: "food",
        subcategory: "brewing",
        story: "A powerful name that evokes protection, tradition, and craftsmanship. Perfect for breweries with a bold approach and a commitment to quality and community.",
        targetList: [
            "Craft breweries",
            "Sports-themed bars",
            "Veteran-owned businesses",
            "Community-focused beverage brands"
        ],
        features: [
            "Strong, memorable branding",
            "Community and protection associations",
            "Sports team connection potential",
            "Excellent for storytelling"
        ],
        premium: true,
        price_tier: 2
    },
    'beerquestions.com': {
        category: "food",
        subcategory: "brewing",
        story: "The perfect domain for beer education, reviews, and community building. Ideal for creating the go-to resource for everything beer-related, from brewing techniques to tasting notes.",
        targetList: [
            "Beer education platforms",
            "Craft beer review sites",
            "Homebrewing communities",
            "Beer tourism businesses"
        ],
        features: [
            "Clear, direct branding",
            "Strong SEO potential",
            "Community-building focus",
            "Educational and commercial applications"
        ],
        premium: true,
        price_tier: 2
    },
    'ohiobeers.com': {
        category: "food",
        subcategory: "brewing",
        story: "A celebration of Ohio's rich brewing heritage and thriving craft beer scene. Perfect for businesses showcasing the best beers from across the Buckeye State.",
        targetList: [
            "Regional beer festivals",
            "Ohio brewery collectives",
            "Beer tourism companies",
            "Local beverage distributors"
        ],
        features: [
            "Strong geographic focus",
            "Community and regional pride",
            "Ready-made local audience",
            "Perfect for regional events"
        ],
        premium: true,
        price_tier: 2
    },
    'mysportsbar.com': {
        category: "food",
        subcategory: "restaurants",
        story: "The ultimate domain for sports entertainment venues. Perfect for creating memorable experiences where great food, drinks, and sports viewing come together.",
        targetList: [
            "Sports bar chains",
            "Restaurant franchises",
            "Entertainment venues",
            "Sports-themed restaurants"
        ],
        features: [
            "Clear and direct branding",
            "Broad appeal to sports enthusiasts",
            "Versatile for multiple concepts",
            "Strong commercial potential"
        ],
        premium: true,
        price_tier: 3
    },
    'seaweedery.com': {
        category: "food",
        subcategory: "specialty",
        story: "A clever play on 'brewery' for the emerging seaweed and ocean-based foods market. Perfect for innovative food businesses focused on sustainable, nutritious ocean harvests.",
        targetList: [
            "Seaweed product manufacturers",
            "Sustainable food companies",
            "Health food innovators",
            "Ocean-to-table restaurants"
        ],
        features: [
            "Unique and memorable branding",
            "Growing sustainable food market",
            "Health and environmental appeal",
            "Distinctive niche positioning"
        ],
        premium: true,
        price_tier: 2
    },

    // Future Tech
    'quantumsensors.io': {
        category: "future-tech",
        subcategory: "quantum",
        story: "At the quantum frontier of detection technology. quantumsensors.io represents cutting-edge innovation in the rapidly evolving field of quantum sensing and measurement.",
        targetList: [
            "Quantum technology startups",
            "Research institutions",
            "Precision instrument manufacturers",
            "Advanced R&D companies"
        ],
        features: [
            "Technical and professional",
            "Premium .io extension",
            "Future-focused branding",
            "Perfect for deep tech"
        ],
        premium: true,
        price_tier: 3
    },
    'treethane.com': {
        category: "future-tech",
        subcategory: "industrial",
        story: "A powerful blend of nature and chemistry. treethane.com represents innovative materials derived from sustainable resources, perfect for eco-conscious industrial applications.",
        targetList: [
            "Sustainable materials manufacturers",
            "Green chemistry companies",
            "Eco-friendly construction firms",
            "Bioplastic innovators"
        ],
        features: [
            "Memorable and descriptive name",
            "Growing sustainable materials market",
            "Appeals to eco-conscious businesses",
            "Versatile for multiple applications"
        ],
        premium: true,
        price_tier: 2
    },
    'predictivemachineshop.com': {
        category: "future-tech",
        subcategory: "industrial",
        story: "Where AI meets manufacturing. This domain represents the future of smart manufacturing with predictive maintenance and machine learning optimization.",
        targetList: [
            "Smart manufacturing companies",
            "Industrial IoT providers",
            "Predictive maintenance services",
            "Manufacturing technology consultants"
        ],
        features: [
            "Clear value proposition",
            "Growing Industry 4.0 market",
            "Combines traditional industry with future tech",
            "Strong B2B potential"
        ],
        premium: true,
        price_tier: 2
    },
    
    // Business & Services
    'seosuccess.com': {
        category: "business",
        subcategory: "marketing",
        story: "The ultimate domain for search engine optimization services. Direct, clear, and promising the results that businesses are looking for.",
        targetList: [
            "SEO agencies",
            "Digital marketing firms",
            "Online business consultants",
            "Content marketing services"
        ],
        features: [
            "Clear value proposition",
            "Excellent keyword potential",
            "Instantly communicates services",
            "Strong lead generation potential"
        ],
        premium: true,
        price_tier: 3
    },
    'amerisourcing.com': {
        category: "business",
        subcategory: "consulting",
        story: "A powerful domain for American-based sourcing and procurement services. Perfect for businesses helping companies navigate domestic supply chains.",
        targetList: [
            "Procurement consultancies",
            "Supply chain management firms",
            "Manufacturing consultants",
            "Reshoring service providers"
        ],
        features: [
            "Clear geographic and service focus",
            "Growing domestic sourcing trend",
            "Strong B2B application",
            "Professional and trustworthy"
        ],
        premium: true,
        price_tier: 2
    },
    'dealstretchers.com': {
        category: "business",
        subcategory: "ecommerce",
        story: "Making every dollar count. This domain is perfect for discount retailers, coupon services, or budget shopping platforms that help consumers maximize value.",
        targetList: [
            "Discount retailers",
            "Coupon and savings platforms",
            "Budget shopping services",
            "Deal aggregator websites"
        ],
        features: [
            "Clear value proposition",
            "Memorable and descriptive",
            "Appeals to budget-conscious consumers",
            "Strong e-commerce potential"
        ],
        premium: true,
        price_tier: 2
    },
    'dailysuccessplanner.com': {
        category: "business",
        subcategory: "productivity",
        story: "Empowering achievement one day at a time. This domain is perfect for productivity tools, planning systems, and personal development platforms.",
        targetList: [
            "Productivity app developers",
            "Personal development coaches",
            "Planner and journal manufacturers",
            "Time management consultants"
        ],
        features: [
            "Clear product description",
            "Growing productivity market",
            "Appeals to achievement-oriented audience",
            "Subscription model potential"
        ],
        premium: true,
        price_tier: 2
    },
    
    // Entertainment & Media
    'storybordz.com': {
        category: "entertainment",
        subcategory: "storytelling",
        story: "A creative twist on storyboarding for the digital age. Perfect for innovative content creators, animation studios, or collaborative storytelling platforms.",
        targetList: [
            "Animation studios",
            "Content creation platforms",
            "Digital storytelling services",
            "Educational media companies"
        ],
        features: [
            "Creative and modern spelling",
            "Instantly recognizable purpose",
            "Appeals to creative professionals",
            "Versatile for multiple media applications"
        ],
        premium: true,
        price_tier: 2
    },
    'whistlz.com': {
        category: "entertainment",
        subcategory: "media",
        story: "A short, catchy domain with unlimited potential. Perfect for audio platforms, alert services, or trendy social applications with a distinctive sound component.",
        targetList: [
            "Audio streaming services",
            "Social media platforms",
            "Alert and notification apps",
            "Sports and referee-related businesses"
        ],
        features: [
            "Short and memorable",
            "Modern Z spelling",
            "Versatile applications",
            "Strong brand potential"
        ],
        premium: true,
        price_tier: 2
    },
    'thedailydouble.com': {
        category: "entertainment",
        subcategory: "media",
        story: "A powerful reference to a well-known game show concept. Perfect for news platforms, betting services, or content that offers twice the value.",
        targetList: [
            "News and media outlets",
            "Sports betting platforms",
            "Financial information services",
            "Daily deal websites"
        ],
        features: [
            "Instantly recognizable phrase",
            "Strong cultural reference",
            "Versatile for multiple industries",
            "Premium, authoritative presence"
        ],
        premium: true,
        price_tier: 3
    },
    'connectogram.com': {
        category: "entertainment",
        subcategory: "gaming",
        story: "A perfect blend of 'connection' and 'gram' suggesting a visual network or puzzle. Ideal for social games, puzzle applications, or networking platforms.",
        targetList: [
            "Mobile game developers",
            "Puzzle app creators",
            "Social networking platforms",
            "Educational technology companies"
        ],
        features: [
            "Creative and modern name",
            "Suggests both connection and visual elements",
            "Versatile for multiple applications",
            "Strong brand potential"
        ],
        premium: true,
        price_tier: 2
    },
    
    // Lifestyle & Recreation
    'myjacobeach.com': {
        category: "lifestyle",
        subcategory: "beach",
        story: "A perfect domain for beach properties, vacation rentals, or coastal lifestyle brands connected to this specific location. Creates an immediate sense of place and belonging.",
        targetList: [
            "Vacation rental companies",
            "Coastal real estate agencies",
            "Beach lifestyle brands",
            "Local tourism businesses"
        ],
        features: [
            "Strong geographic specificity",
            "Personal connection with 'my' prefix",
            "Perfect for local businesses",
            "Ready-made audience of visitors and residents"
        ],
        premium: true,
        price_tier: 2
    },
    'beachgel.com': {
        category: "lifestyle",
        subcategory: "beach",
        story: "A versatile domain perfect for beach-related products, from sunscreen to hair care. Clear, memorable, and instantly communicates a coastal lifestyle connection.",
        targetList: [
            "Sunscreen manufacturers",
            "Beach beauty product brands",
            "Hair care companies",
            "Coastal lifestyle retailers"
        ],
        features: [
            "Short and memorable",
            "Clear product category suggestion",
            "Strong lifestyle association",
            "Versatile for multiple products"
        ],
        premium: true,
        price_tier: 2
    },
    'basshats.com': {
        category: "lifestyle",
        subcategory: "fashion",
        story: "A perfect domain for fishing enthusiasts or music lovers. This versatile name works for headwear brands targeting bass fishermen or music-themed apparel.",
        targetList: [
            "Fishing apparel brands",
            "Music merchandise companies",
            "Outdoor lifestyle retailers",
            "Specialty headwear manufacturers"
        ],
        features: [
            "Dual-meaning potential",
            "Clear product category",
            "Appeals to specific enthusiast markets",
            "Strong visual branding potential"
        ],
        premium: true,
        price_tier: 2
    },
    'tonguewear.com': {
        category: "lifestyle",
        subcategory: "fashion",
        story: "An intriguing and distinctive domain perfect for innovative oral accessories, tongue jewelry, or avant-garde fashion concepts.",
        targetList: [
            "Body jewelry retailers",
            "Alternative fashion brands",
            "Dental accessory companies",
            "Innovative fashion designers"
        ],
        features: [
            "Unique and conversation-starting",
            "Clear product category suggestion",
            "Appeals to alternative fashion market",
            "Distinctive brand positioning"
        ],
        premium: true,
        price_tier: 2
    },
    'histhong.com': {
        category: "lifestyle",
        subcategory: "fashion",
        story: "A cheeky, attention-grabbing domain perfect for men's underwear brands or gender-specific intimate apparel. Bold, memorable, and clearly targeted.",
        targetList: [
            "Men's underwear brands",
            "Intimate apparel retailers",
            "Fashion e-commerce sites",
            "LGBTQ+ focused retailers"
        ],
        features: [
            "Memorable and distinctive",
            "Clear gender and product targeting",
            "Conversation-starting brand potential",
            "Strong niche market appeal"
        ],
        premium: true,
        price_tier: 2
    },
    'beliefbarn.com': {
        category: "lifestyle",
        subcategory: "home",
        story: "A warm, community-focused domain perfect for spiritual gatherings, faith-based organizations, or rural retreat centers. Combines tradition with spiritual connection.",
        targetList: [
            "Rural spiritual centers",
            "Faith-based communities",
            "Retreat and workshop venues",
            "Religious education organizations"
        ],
        features: [
            "Warm, welcoming imagery",
            "Combines spirituality with rural tradition",
            "Community and gathering associations",
            "Distinctive positioning in spiritual market"
        ],
        premium: true,
        price_tier: 2
    },
    
    // History & Heritage
    'pictishsymbolstone.com': {
        category: "history",
        subcategory: "cultural",
        story: "A specialized domain perfect for historical education, Scottish heritage tourism, or archaeological interests focused on ancient Pictish culture.",
        targetList: [
            "Scottish heritage organizations",
            "Archaeological education platforms",
            "Historical tourism companies",
            "Celtic art and history resources"
        ],
        features: [
            "Highly specific historical focus",
            "Educational and cultural value",
            "Appeals to history enthusiasts",
            "Perfect for specialized content"
        ],
        premium: true,
        price_tier: 2
    },
    'tombstones.io': {
        category: "history",
        subcategory: "artifacts",
        story: "A powerful domain with multiple applications, from memorial services to historical databases of cemetery records. The modern .io extension adds a tech-forward element.",
        targetList: [
            "Memorial service providers",
            "Genealogy and ancestry platforms",
            "Cemetery record databases",
            "Historical research organizations"
        ],
        features: [
            "Direct and powerful name",
            "Modern tech extension",
            "Strong historical and memorial associations",
            "Versatile for both traditional and digital applications"
        ],
        premium: true,
        price_tier: 3
    },
    'thethirdtablet.com': {
        category: "history",
        subcategory: "artifacts",
        story: "An intriguing domain suggesting lost knowledge, ancient wisdom, or the next chapter in a historical narrative. Perfect for educational content or alternative perspectives.",
        targetList: [
            "Educational content creators",
            "Historical fiction publishers",
            "Alternative history platforms",
            "Religious or spiritual organizations"
        ],
        features: [
            "Mysterious and intriguing concept",
            "Suggests exclusive or hidden knowledge",
            "Strong storytelling potential",
            "Appeals to history and mystery enthusiasts"
        ],
        premium: true,
        price_tier: 2
    },
    
    // Additional Domains
    '216dmd.com': {
        category: "business",
        subcategory: "consulting",
        story: "A concise, professional domain with area code specificity. Perfect for local businesses, particularly in the Cleveland area (216 area code), with the 'dmd' potentially suggesting digital media design or similar services.",
        targetList: [
            "Cleveland-based businesses",
            "Digital media design agencies",
            "Local service providers",
            "Area-specific consultancies"
        ],
        features: [
            "Local area code recognition",
            "Short and memorable",
            "Versatile for multiple business types",
            "Strong local branding potential"
        ],
        premium: true,
        price_tier: 2
    },
    'ringtimes.com': {
        category: "business",
        subcategory: "marketing",
        story: "A versatile domain perfect for scheduling services, notification platforms, or telecommunications businesses. Clear, descriptive, and widely applicable.",
        targetList: [
            "Telecommunications companies",
            "Scheduling software providers",
            "Notification service platforms",
            "Time management applications"
        ],
        features: [
            "Clear and descriptive name",
            "Multiple industry applications",
            "Strong service suggestion",
            "Easily brandable"
        ],
        premium: true,
        price_tier: 2
    },
    'zaom.com': {
        category: "business",
        subcategory: "consulting",
        story: "A short, distinctive four-letter domain with a modern feel. Versatile for tech startups, consulting firms, or innovative brands looking for a unique identity.",
        targetList: [
            "Tech startups",
            "Consulting firms",
            "Digital agencies",
            "Modern brands seeking unique identity"
        ],
        features: [
            "Short and memorable",
            "Modern and distinctive sound",
            "Versatile for multiple industries",
            "Premium four-letter domain"
        ],
        premium: true,
        price_tier: 3
    },
    'peakpetrol.com': {
        category: "business",
        subcategory: "consulting",
        story: "A strong domain for petroleum industry services, fuel optimization, or energy consulting. The alliteration makes it memorable and suggests premium quality.",
        targetList: [
            "Petroleum industry consultants",
            "Fuel distribution companies",
            "Energy efficiency services",
            "Gas station chains"
        ],
        features: [
            "Memorable alliteration",
            "Clear industry focus",
            "Suggests premium quality",
            "Strong B2B potential"
        ],
        premium: true,
        price_tier: 2
    },
    'purpleknif.com': {
        category: "entertainment",
        subcategory: "gaming",
        story: "A distinctive, quirky domain perfect for gaming communities, creative design studios, or unique product brands. The unusual spelling of 'knif' adds character and memorability.",
        targetList: [
            "Gaming communities",
            "Creative design studios",
            "Unique product brands",
            "Alternative lifestyle businesses"
        ],
        features: [
            "Unique and memorable name",
            "Distinctive color + object combination",
            "Creative spelling increases availability",
            "Strong visual branding potential"
        ],
        premium: true,
        price_tier: 2
    },
    'shagspecialist.com': {
        category: "lifestyle",
        subcategory: "home",
        story: "A domain with multiple applications, from carpet and rug specialists to hair styling professionals. The double meaning creates intrigue while maintaining professional credibility.",
        targetList: [
            "Carpet and flooring businesses",
            "Hair styling professionals",
            "Interior design specialists",
            "Textile companies"
        ],
        features: [
            "Multiple meaning potential",
            "Clear service specialization",
            "Conversation-starting brand name",
            "Strong in specific niches"
        ],
        premium: true,
        price_tier: 2
    },
    'betrascal.com': {
        category: "entertainment",
        subcategory: "gaming",
        story: "A playful, character-driven domain perfect for gaming platforms, children's entertainment, or mischievous brand personalities. Suggests fun, adventure, and a bit of harmless trouble.",
        targetList: [
            "Gaming platforms",
            "Children's entertainment brands",
            "Character-based businesses",
            "Playful food or beverage companies"
        ],
        features: [
            "Playful and character-driven",
            "Suggests personality and story",
            "Appeals to both children and adults",
            "Strong mascot potential"
        ],
        premium: true,
        price_tier: 2
    },
    'drinkingware.com': {
        category: "lifestyle",
        subcategory: "home",
        story: "A clear, descriptive domain for businesses selling cups, glasses, mugs, and other beverage containers. The direct nature makes it excellent for e-commerce and search visibility.",
        targetList: [
            "Drinkware manufacturers",
            "Kitchen and home goods retailers",
            "Custom mug and tumbler businesses",
            "Bar supply companies"
        ],
        features: [
            "Clear product category",
            "Excellent search potential",
            "Direct e-commerce application",
            "Broad market appeal"
        ],
        premium: true,
        price_tier: 3
    },
    'hopwash.com': {
        category: "food",
        subcategory: "brewing",
        story: "A clever domain perfect for brewery cleaning services, beer education, or craft brewing supplies. The name suggests both the key ingredient in beer and cleanliness.",
        targetList: [
            "Brewery cleaning services",
            "Craft brewing suppliers",
            "Beer education platforms",
            "Brewing equipment manufacturers"
        ],
        features: [
            "Clever brewing industry reference",
            "Clear service suggestion",
            "Niche but growing market",
            "Memorable and distinctive"
        ],
        premium: true,
        price_tier: 2
    },
    'dankbutter.com': {
        category: "food",
        subcategory: "specialty",
        story: "A modern, trendy domain with multiple applications in specialty foods, cannabis-infused products, or gourmet butter brands. The term 'dank' adds contemporary appeal.",
        targetList: [
            "Specialty food producers",
            "Cannabis edible manufacturers",
            "Gourmet butter brands",
            "Modern food startups"
        ],
        features: [
            "Contemporary language appeal",
            "Multiple product applications",
            "Appeals to younger demographics",
            "Strong in emerging food markets"
        ],
        premium: true,
        price_tier: 2
    }
};

// Initialize modal functionality
window.showDomainDetails = function(domainName) {
    const modal = document.getElementById('domainModal');
    const modalDomainName = document.getElementById('modalDomainName');
    const modalContent = document.getElementById('modalContent');
    
    const details = domainDetails[domainName] || {
        story: "Domain details coming soon.",
        targetList: [],
        features: []
    };

    modalDomainName.textContent = domainName;
    modalContent.innerHTML = `
        <div class="space-y-4">
            <p class="text-lg">${details.story}</p>
            ${details.targetList.length ? `
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Perfect For:</h4>
                    <ul class="list-disc list-inside">
                        ${details.targetList.map(target => `<li>${target}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            ${details.features.length ? `
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Key Features:</h4>
                    <ul class="list-none">
                        ${details.features.map(feature => `
                            <li class="flex items-start gap-2 mb-2">
                                <i class="fas fa-check text-blue-500 mt-1"></i>
                                <span>${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
            ${details.price_tier ? `
                <div class="mt-4 text-right">
                    <span class="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full">
                        Price Tier: ${details.price_tier}
                    </span>
                </div>
            ` : ''}
        </div>
    `;

    modal.style.display = 'flex';
};

window.closeDomainModal = function() {
    const modal = document.getElementById('domainModal');
    modal.style.display = 'none';
};

// Function to handle domain offers
window.makeOffer = function(domainName) {
    // Set the hidden field value
    document.getElementById('domain_interest').value = domainName;
    
    // Also set the visible domain field value for user reference
    document.getElementById('domain').value = domainName;
    
    // Scroll to the contact form
    const contactForm = document.querySelector('.contact-form-container');
    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
        
        // Add a visual highlight to the form to draw attention
        contactForm.classList.add('highlight-form');
        setTimeout(() => {
            contactForm.classList.remove('highlight-form');
        }, 1500);
    }
};

// Initialize all functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission and redirect
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Store the form data in localStorage to potentially use it on the thank you page
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                domain: document.getElementById('domain').value,
                message: document.getElementById('message').value,
                domain_interest: document.getElementById('domain_interest').value
            };
            localStorage.setItem('formSubmission', JSON.stringify(formData));
        });
    }
    // Category filtering
    const categoryButtons = document.querySelectorAll('.category-button');
    const domainCards = document.querySelectorAll('.domain-card');

    // Initialize all cards as visible
    domainCards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const selectedCategory = this.dataset.category;
            
            // Filter domains
            domainCards.forEach(card => {
                if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close modal on outside click
    const modal = document.getElementById('domainModal');
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeDomainModal();
        }
    });

    // Prevent modal content clicks from closing the modal
    const modalContent = modal.querySelector('.modal-content');
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});