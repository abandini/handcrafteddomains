// main.js

// Domain Categories Structure
const categories = {
    "mindful-movement": {
        name: "Mindful Movement & Awe-Driven Wellness",
        icon: "walking",
        description: "Premium domains for mindfulness practices, awe-inspired wellness, and transformative movement experiences",
        subcategories: {
            "mindful-walking": "Mindful Walking & Hiking",
            "awe-wellness": "Awe-Driven Wellness",
            "movement-therapy": "Movement Therapy",
            "nature-connection": "Nature Connection Practices"
        }
    },
    "y2k-luxe": {
        name: "Y2K Luxe & Retro Accessories",
        icon: "gem",
        description: "Premium domains for Y2K-inspired fashion, retro luxury accessories, and nostalgic style brands",
        subcategories: {
            "y2k-fashion": "Y2K Fashion Revival",
            "retro-accessories": "Retro Luxury Accessories",
            "vintage-style": "Vintage Style Brands",
            "nostalgic-luxury": "Nostalgic Luxury Items"
        }
    },
    "mood-decor": {
        name: "Mood-Boost Décor & Neuro-Aesthetic Living",
        icon: "brain",
        description: "Premium domains for mood-enhancing décor, neuro-aesthetic design, and cognitive wellness living spaces",
        subcategories: {
            "mood-decor": "Mood-Enhancing Décor",
            "neuro-design": "Neuro-Aesthetic Design",
            "cognitive-spaces": "Cognitive Wellness Spaces",
            "sensory-home": "Sensory Home Environments"
        }
    },
    "hot-spicy": {
        name: "Hot & Spicy",
        icon: "pepper-hot",
        description: "Premium domains for spicy food brands, hot sauce makers, and fiery culinary experiences",
        subcategories: {
            "sauces": "Hot Sauces & Condiments",
            "foods": "Spicy Foods & Snacks",
            "restaurants": "Spicy Restaurants & Eateries",
            "challenges": "Spicy Food Challenges"
        }
    },
    "home-kitchen": {
        name: "Home & Kitchen",
        icon: "home",
        description: "Premium domains for home goods, kitchen appliances, and interior design",
        subcategories: {
            "appliances": "Appliances & Kitchen Gadgets",
            "interiors": "Interior Design & Decor",
            "furniture": "Furniture & Home Goods",
            "smart-home": "Smart Home Technology"
        }
    },
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
    },
    "sports": {
        name: "Sports & Athletics",
        icon: "futbol",
        description: "Premium domains for sports teams, events, and athletic brands",
        subcategories: {
            "soccer": "Soccer/Football",
            "events": "Sporting Events",
            "teams": "Sports Teams",
            "fitness": "Fitness & Training"
        }
    },
    "farming": {
        name: "Gardening & Farming",
        icon: "seedling",
        description: "Premium domains for agriculture, gardening, and sustainable farming",
        subcategories: {
            "agriculture": "Agriculture & Farming",
            "gardening": "Gardening & Horticulture",
            "sustainable": "Sustainable & Eco-Farming"
        }
    },
    "pets": {
        name: "Pets & Animals",
        icon: "paw",
        description: "Premium domains for pet services, animal care, and pet-related businesses",
        subcategories: {
            "dogs": "Dog Care & Services",
            "cats": "Cat Care & Products",
            "petservices": "Pet Services & Training",
            "veterinary": "Veterinary & Animal Health"
        }
    },
    "romance": {
        name: "Romance & Relationships",
        icon: "heart",
        description: "Premium domains for dating services, relationship coaching, and intimate products",
        subcategories: {
            "dating": "Dating & Matchmaking",
            "coaching": "Relationship Coaching",
            "intimacy": "Intimacy & Couples",
            "products": "Intimate Products"
        }
    }
};

// Domain Details Database
const domainDetails = {
    'awewalks.com': {
        category: "mindful-movement",
        subcategory: "awe-wellness",
        story: `<h3>Transformative Walking Experiences for Wellness & Awe</h3>
        <p>AweWalks.com is the perfect domain for brands specializing in mindful walking experiences that inspire awe, wonder, and deep nature connection for improved mental and physical wellness.</p>
        <p>This premium domain directly connects to the growing science-backed practice of awe walks - intentional walking experiences that cultivate a sense of wonder and perspective, shown to improve mental health and overall wellbeing.</p>
        <p>With increasing interest in mindfulness practices and nature-based wellness solutions, AweWalks.com offers an instantly recognizable brand identity for wellness practitioners, tour operators, and mindfulness apps focused on this transformative practice.</p>`,
        targetList: [
            "Mindfulness and wellness practitioners",
            "Nature tour operators and guides",
            "Mental health and wellness apps",
            "Outdoor recreation and hiking companies",
            "Wellness retreat organizers"
        ],
        features: [
            "Directly communicates the concept of awe-inspiring walking experiences",
            "Connects to the growing research on awe as a wellness practice",
            "Perfect for SEO in the mindfulness and wellness markets",
            "Appeals to health-conscious consumers seeking nature connection"
        ],
        premium: true,
        price_tier: 2,
        visit_site: "https://awewalks.com"
    },
    'baguettebags.com': {
        category: "y2k-luxe",
        subcategory: "retro-accessories",
        story: `<h3>Y2K-Inspired Luxury Handbag Revival</h3>
        <p>BaguetteBags.com is the perfect domain for brands specializing in the iconic baguette-style handbags that defined Y2K fashion and are experiencing a massive revival in today's luxury accessory market.</p>
        <p>This premium domain directly references the beloved silhouette made famous in the late 90s and early 2000s, positioning your brand at the intersection of nostalgic fashion and contemporary luxury.</p>
        <p>With vintage and Y2K aesthetics continuing to dominate fashion trends, BaguetteBags.com offers an instantly recognizable brand identity for retailers, designers, and marketplaces focused on this lucrative niche.</p>`,
        targetList: [
            "Luxury handbag retailers and designers",
            "Vintage and Y2K fashion marketplaces",
            "Accessory brands focusing on nostalgic styles",
            "Fashion influencers and content creators"
        ],
        features: [
            "Instantly communicates product category",
            "Capitalizes on the ongoing Y2K fashion revival",
            "Perfect for SEO in the luxury handbag market",
            "Appeals to both vintage collectors and trend-conscious shoppers"
        ],
        premium: true,
        price_tier: 3,
        visit_site: "https://baguettebags.com"
    },
    'dopdec.com': {
        category: "mood-decor",
        subcategory: "neuro-design",
        story: `<h3>Dopamine-Boosting Décor for Cognitive Wellness</h3>
        <p>DopDec.com represents the intersection of neuroscience and interior design, focusing on creating living spaces that naturally boost dopamine and enhance cognitive wellness.</p>
        <p>This premium domain is perfect for brands specializing in mood-enhancing décor, neuro-aesthetic design principles, and products that create dopamine-optimized living environments.</p>
        <p>As awareness of the impact of our surroundings on mental health continues to grow, DopDec.com positions your brand at the forefront of this emerging wellness category.</p>`,
        targetList: [
            "Interior design firms specializing in wellness",
            "Manufacturers of mood-enhancing home products",
            "Neuro-aesthetic consultants and designers",
            "Mental wellness-focused home décor retailers"
        ],
        features: [
            "Memorable and intuitive brand name",
            "Directly communicates the dopamine-décor connection",
            "Perfect for the growing neuro-aesthetic market",
            "Ideal for content marketing about cognitive wellness in living spaces"
        ],
        premium: true,
        price_tier: 2,
        visit_site: "https://dopdec.com"
    },
    'jawmelters.com': {
        category: "hot-spicy",
        subcategory: "sauces",
        story: "JawMelters.com is the perfect domain for brands specializing in extremely hot sauces, spicy condiments, and fiery food products. This memorable and descriptive name instantly communicates intense heat that will 'melt your jaw' - appealing to spice enthusiasts and hot sauce aficionados who are always seeking the next level of heat.",
        targetList: [
            "Craft hot sauce manufacturers",
            "Spicy food product companies",
            "Ghost pepper and Carolina Reaper product makers",
            "Hot sauce subscription services",
            "Spicy food challenge brands"
        ],
        features: [
            "Instantly communicates extreme heat and intensity",
            "Memorable and descriptive name that stands out",
            "Appeals to the growing market of spice enthusiasts",
            "Perfect for building a brand around extreme heat challenges",
            "Great for content marketing about spicy foods and sauces"
        ],
        premium: true,
        price_tier: 2,
        visit_site: "https://jawmelters.com"
    },
    'mantuaries.com': {
        category: "home-kitchen",
        subcategory: "furniture",
        story: "Mantuaries.com is an exceptional domain for businesses specializing in mantuary design and creation - those dedicated masculine spaces in the home like man caves, home bars, entertainment rooms, and home offices. This premium domain instantly communicates expertise in creating stylish, functional spaces tailored to men's preferences and interests.",
        targetList: [
            "Interior designers specializing in masculine spaces",
            "Custom furniture manufacturers for home bars and entertainment rooms",
            "Home theater and entertainment system installers",
            "Man cave accessory and décor retailers",
            "Home office design specialists"
        ],
        features: [
            "Catchy and memorable blend of 'man' and 'sanctuaries'",
            "Directly communicates the concept of dedicated masculine spaces",
            "Growing market niche as more homeowners invest in personalized spaces",
            "Perfect for content marketing about home design trends",
            "Excellent for e-commerce selling man cave furniture and accessories"
        ],
        premium: true,
        price_tier: 3,
        visit_site: "https://mantuaries.com"
    },
    'appliancegarages.com': {
        category: "home-kitchen",
        subcategory: "appliances",
        story: "ApplianceGarages.com is the perfect domain for businesses specializing in kitchen organization solutions, particularly appliance garages - those sleek cabinets designed to hide countertop appliances while keeping them accessible. This premium domain instantly communicates expertise in kitchen organization and modern design.",
        targetList: [
            "Kitchen cabinet manufacturers",
            "Custom kitchen designers",
            "Home organization retailers",
            "Kitchen renovation companies",
            "Interior designers specializing in kitchens"
        ],
        features: [
            "Descriptive and specific to a growing kitchen design niche",
            "Appeals to the modern trend of clean, clutter-free kitchens",
            "Excellent SEO potential for kitchen organization searches",
            "Perfect for e-commerce selling cabinet solutions",
            "Ideal for content marketing about kitchen organization"
        ],
        premium: true,
        price_tier: 2,
        visit_site: "https://appliancegarages.com"
    },
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
    
    'ceilp.com': {
        category: "health",
        subcategory: "medical",
        story: "Ceilp.com is a concise, memorable domain perfect for health technology platforms, wellness applications, and innovative medical services. The short, distinctive name has a modern feel that resonates with health-conscious consumers and healthcare professionals alike. This domain is ideal for companies focused on patient care improvement, health analytics platforms, or wellness tracking applications.",
        targetList: [
            "Healthcare technology startups",
            "Patient care improvement platforms",
            "Health analytics services",
            "Wellness tracking applications",
            "Telemedicine providers",
            "Medical practice management solutions"
        ],
        features: [
            "Short, memorable, and easy to pronounce",
            "Modern feel perfect for health tech branding",
            "Versatile application across healthcare sectors",
            "Strong potential for brand development",
            "Distinctive in the crowded healthcare market"
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
    
    'banneraddepot.com': {
        category: "business",
        subcategory: "marketing",
        story: "Banneraddepot.com is the perfect domain for businesses specializing in banner advertising, digital marketing, and promotional display solutions. This versatile domain name clearly communicates its purpose while providing a strong foundation for both online and physical banner advertising services. As businesses continue to seek effective advertising solutions across multiple channels, this domain positions your company as the go-to destination for all banner advertising needs.",
        targetList: [
            "Digital marketing agencies",
            "Banner ad designers and producers",
            "Outdoor advertising companies",
            "Trade show display providers",
            "Online advertising platforms",
            "Print shops specializing in banners"
        ],
        features: [
            "Clear and descriptive domain name that instantly communicates purpose",
            "Versatile for both digital and physical banner advertising services",
            "Strong SEO potential with industry-specific keywords",
            "Perfect for building a comprehensive banner advertising business",
            "Appeals to both B2B and B2C advertising markets"
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
    
    // Sports Entertainment & Media
    'TRIPLECROWNGIRLS.COM': {
        category: "entertainment",
        subcategory: "sports",
        story: "TRIPLECROWNGIRLS.COM is a premium domain that combines the prestige of the Triple Crown sporting events with a focus on female athletes and women's sports content. This powerful domain name creates an immediate association with achievement, excellence, and the breaking of barriers in traditionally male-dominated sporting arenas.\n\nThe Triple Crown concept resonates across multiple sports - from horse racing's prestigious three races (Kentucky Derby, Preakness Stakes, and Belmont Stakes) to baseball's batting achievement or surfing's elite competitions. This versatility makes the domain perfect for various sports media ventures, female athlete spotlights, or entertainment platforms celebrating women's achievements in competitive sports.\n\nAs women's sports continue to gain mainstream attention and investment, this domain positions your brand at the forefront of this growing market. It's ideal for building communities around prestigious sporting events, creating content featuring female athletes, or developing platforms that elevate women's participation and recognition in competitive sports.",
        targetList: [
            "Sports media companies focusing on women's athletics",
            "Horse racing platforms highlighting female jockeys and trainers",
            "Women's sports leagues and organizations",
            "Female athlete representation agencies",
            "Sports documentary producers and content creators",
            "Event management companies for women's sporting events",
            "Sports betting platforms with women's sports markets"
        ],
        features: [
            "Combines prestigious 'Triple Crown' concept with focus on women athletes",
            "Perfect for the rapidly growing women's sports media market",
            "Versatile across multiple sports categories",
            "Ideal for community building around women's sporting achievements",
            "Strong branding potential for sports entertainment ventures",
            "Appeals to the increasing audience for women's competitive sports",
            "Excellent SEO value for women's sports and Triple Crown event keywords"
        ],
        premium: true,
        price_tier: 3
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
    },
    
    // Memory Science & Cognitive Technology
    'mnemogenics.com': {
        category: "health",
        subcategory: "biotech",
        story: "At the intersection of memory science and genetic technologies, mnemogenics.com represents cutting-edge research in neuroscience and cognitive enhancement. As research in neuroplasticity, memory enhancement, and cognitive modification accelerates, this domain is perfectly aligned with emerging technologies focused on understanding and enhancing human cognitive abilities.",
        targetList: [
            "Neuroscience research institutions",
            "Cognitive health clinics",
            "Memory enhancement programs",
            "Neuropharmaceutical companies"
        ],
        features: [
            "Distinctive and scientifically meaningful name",
            "Rapidly growing cognitive assessment market",
            "Strong SEO potential with built-in industry terms",
            "Perfect for brain health technology ventures"
        ],
        premium: true,
        price_tier: 3
    },
    
    // IoT & Mesh Networking
    'meshmerized.com': {
        category: "future-tech",
        subcategory: "industrial",
        story: "Meshmerized.com combines the technical term 'mesh' (network topology) with 'mesmerized' (to captivate), creating a powerful brand for companies revolutionizing mesh networking, IoT connectivity, and smart technology. Ideal for businesses in the rapidly expanding mesh networking and IoT technology sectors that aim to captivate their audience with innovative connectivity solutions.",
        targetList: [
            "Mesh networking providers",
            "IoT platform developers",
            "Smart city technology companies",
            "Network infrastructure innovators"
        ],
        features: [
            "Memorable and distinctive branding",
            "Growing IoT market with billions of connected devices",
            "Perfect positioning for connectivity technologies",
            "Clear communication of technical expertise"
        ],
        premium: true,
        price_tier: 3
    },
    
    // Sports & Entertainment
    'worldcupfutbol.com': {
        category: "sports",
        subcategory: "soccer",
        story: "worldcupfutbol.com represents the pinnacle of global football branding. This premium domain combines the world's most watched sporting event with the international term for soccer, creating an instantly recognizable platform for football content, merchandise, or fan communities centered around the beautiful game.",
        targetList: [
            "Sports media and news sites",
            "Soccer merchandise retailers",
            "Football clubs and organizations",
            "World Cup content creators and fan communities"
        ],
        features: [
            "Global appeal with worldwide soccer fanbase",
            "Instantly communicates football/soccer focus",
            "Valuable combination of World Cup and futbol terms",
            "Perfect for monetizing during World Cup cycles"
        ],
        premium: true,
        price_tier: 3
    },
    
    // Travel & Lifestyle
    'costaricahappyhour.com': {
        category: "lifestyle",
        subcategory: "beach",
        story: "costaricahappyhour.com captures the essence of tropical leisure and Costa Rican hospitality. This premium domain is perfect for tourism businesses, travel blogs, vacation rentals, or hospitality ventures looking to highlight the relaxed, welcoming atmosphere of Costa Rica's beach towns and tourist hotspots.",
        targetList: [
            "Costa Rican tourism companies",
            "Beach bars and restaurants",
            "Vacation rental properties",
            "Travel influencers and content creators",
            "Tour operators and experience providers"
        ],
        features: [
            "Instantly conveys tropical vacation atmosphere",
            "Geographically specific for Costa Rica tourism",
            "Appeals to visitors seeking authentic experiences",
            "Perfect for hospitality and leisure industry",
            "Captures the 'pura vida' lifestyle Costa Rica is known for"
        ],
        premium: true,
        price_tier: 3
    },
    
    // Luxury Costa Rica Travel
    'elegantcostarica.com': {
        category: "lifestyle",
        subcategory: "beach",
        story: "elegantcostarica.com embodies the luxury travel experience in one of the world's most beautiful destinations. This premium domain is ideal for high-end tourism services, luxury accommodations, and exclusive travel experiences that showcase the natural beauty and refined hospitality of Costa Rica.",
        targetList: [
            "Luxury travel agencies",
            "Upscale resorts and boutique hotels",
            "Exclusive tour operators",
            "Private villa rentals",
            "High-end adventure and eco-tourism providers"
        ],
        features: [
            "Perfect combination of 'elegant' and 'Costa Rica' for upscale positioning",
            "Appeals to affluent travelers seeking premium experiences",
            "Ideal for showcasing luxury accommodations and exclusive tours",
            "Captures the growing luxury eco-tourism market",
            "Distinctive branding for high-end travel services"
        ],
        premium: true,
        price_tier: 3
    },
    
    // Costa Rica Surf Community
    'costaricasurfergirls.com': {
        category: "lifestyle",
        subcategory: "beach",
        story: "costaricasurfergirls.com celebrates and empowers the growing female surf culture in Costa Rica's world-renowned beaches. This premium domain is perfect for surf schools focused on women, female surf retreats, community-building initiatives, and businesses that support the rapidly expanding women's surfing movement in one of the world's top surfing destinations.",
        targetList: [
            "Women's surf schools and instructors",
            "Female-focused surf retreats and camps",
            "Surf apparel and equipment brands for women",
            "Adventure tourism operators",
            "Women's empowerment and community organizations"
        ],
        features: [
            "Directly targets the growing women's surf market",
            "Combines Costa Rica's reputation as a surf paradise with female focus",
            "Perfect for building community around women's surfing",
            "Ideal for educational content and surf tourism services",
            "Appeals to the adventure travel and women's empowerment movements"
        ],
        premium: true,
        price_tier: 3
    },
    
    // Mountain Lifestyle
    '8700feet.com': {
        category: "lifestyle",
        subcategory: "mountain",
        story: "8700feet.com represents the elevation of mountain lifestyle branding. This distinctive, altitude-inspired domain creates an immediate connection to high-altitude living, recreation, and adventure. At 8,700 feet (approximately 2,650 meters), this elevation represents the sweet spot of many premier mountain destinations worldwide - high enough for spectacular alpine views and winter sports, yet still comfortably habitable year-round.\n\nThis premium domain is perfect for mountain resorts, ski destinations, high-altitude real estate developments, outdoor recreation businesses, and lifestyle brands that want to associate with the prestige and adventure of mountain living. The specific numerical reference creates intrigue and memorability while instantly communicating the alpine positioning of your brand.",
        targetList: [
            "Mountain and ski resorts",
            "High-altitude real estate developments",
            "Alpine tourism and adventure companies",
            "Outdoor gear and apparel brands",
            "Mountain lifestyle publications and content creators",
            "Winter sports facilities and training centers",
            "High-elevation wellness retreats and spas"
        ],
        features: [
            "Distinctive numerical branding that instantly communicates mountain elevation",
            "Perfect for businesses in premier mountain destinations worldwide",
            "Appeals to affluent mountain enthusiasts and adventure seekers",
            "Ideal for content about mountain living, recreation, and real estate",
            "Versatile for both winter sports and year-round mountain activities",
            "Creates immediate association with high-altitude prestige and lifestyle",
            "Memorable and intriguing name that stands out in the outdoor recreation market"
        ],
        premium: true,
        price_tier: 3
    },
    
    // Alternative Fashion & Body Jewelry
    'tonguewear.com': {
        category: "lifestyle",
        subcategory: "fashion",
        story: "tonguewear.com is a bold, distinctive domain that instantly communicates its niche in the body jewelry and oral fashion accessory market. This premium domain name is perfect for businesses specializing in tongue piercings, oral jewelry, and innovative accessories that make a statement.\n\nThe body modification and piercing industry continues to grow as self-expression becomes increasingly mainstream. This domain positions your brand at the forefront of this trend, with a clear focus on a specific and profitable niche within the larger body jewelry market. The name is memorable, descriptive, and instantly communicates the product category to potential customers.\n\nBeyond traditional piercing jewelry, tonguewear.com could also represent innovative oral accessories, dental fashion items, or unique lifestyle products that challenge conventional fashion boundaries. The domain's distinctive nature makes it perfect for brands looking to stand out in the alternative fashion and self-expression markets.",
        targetList: [
            "Body jewelry manufacturers and retailers",
            "Piercing studios and body modification professionals",
            "Alternative fashion brands and marketplaces",
            "Lifestyle brands focused on self-expression",
            "Dental fashion and oral accessory innovators",
            "E-commerce stores specializing in unique personal accessories",
            "Influencers and content creators in the body modification community"
        ],
        features: [
            "Instantly communicates product category and market niche",
            "Memorable and distinctive in the fashion and accessories space",
            "Perfect for e-commerce with clear product positioning",
            "Appeals to the growing market for self-expression and body modification",
            "Versatile for various oral fashion accessories beyond traditional piercings",
            "Strong potential for building a community around alternative fashion",
            "Excellent SEO value for specific tongue jewelry and oral accessory keywords"
        ],
        premium: true,
        price_tier: 3
    },
    
    // Costa Rica Agricultural Investment
    'farmlandincostarica.com': {
        category: "farming",
        subcategory: "agriculture",
        story: "farmlandincostarica.com represents the exceptional opportunity for agricultural investment and sustainable farming in Costa Rica's lush, fertile regions. With year-round growing seasons, abundant rainfall, and rich volcanic soil, Costa Rica offers some of the most productive agricultural land in the Americas. This premium domain is perfect for showcasing farmland properties, agricultural investment opportunities, sustainable farming operations, and eco-development projects that harmonize agriculture with Costa Rica's world-renowned commitment to environmental conservation and biodiversity.\n\nCosta Rica has become a global leader in sustainable agriculture, with over 98% renewable energy and a national commitment to carbon neutrality. The country's stable democracy, strong property rights, and growing expat community make it an increasingly attractive destination for foreign agricultural investors seeking both financial returns and lifestyle benefits in a tropical paradise.",
        targetList: [
            "Agricultural real estate agencies and land brokers",
            "Sustainable and organic farming operations",
            "Foreign investors in Costa Rican agriculture and farmland",
            "Eco-development and permaculture projects",
            "Agricultural tourism and farm-stay ventures",
            "Coffee, cacao, and tropical fruit exporters",
            "Regenerative agriculture consultants and educators"
        ],
        features: [
            "Clear geographical and purpose-specific branding that instantly communicates value",
            "Appeals to the rapidly growing sustainable agriculture and farmland investment markets",
            "Perfect for showcasing farmland listings, property details, and agricultural opportunities",
            "Ideal for educational content about Costa Rica's unique agricultural advantages",
            "Combines real estate, agriculture, and Costa Rica's eco-friendly reputation",
            "Targets the growing demographic of agricultural investors seeking international diversification",
            "Excellent SEO potential for farmland investment and Costa Rica agriculture keywords"
        ],
        premium: true,
        price_tier: 3
    },
    
    // Costa Rica Luxury Real Estate
    'topcostaricarealestate.com': {
        category: "farming",
        subcategory: "agriculture",
        story: "topcostaricarealestate.com is the premier domain for showcasing Costa Rica's most exclusive agricultural and rural properties. This premium domain positions your business at the intersection of luxury real estate and agricultural investment in one of Central America's most stable and environmentally conscious countries.\n\nCosta Rica's real estate market has seen consistent growth, particularly in agricultural properties and farm estates that offer both lifestyle benefits and investment potential. From coffee plantations in the Central Valley to sustainable farms on the Pacific coast, the country offers diverse agricultural opportunities in breathtaking settings. This domain is perfect for real estate agencies specializing in high-end rural properties, farm estates, and agricultural investments that combine luxury living with sustainable land stewardship.\n\nWith Costa Rica's strong property rights, growing expat community, and reputation as an eco-tourism destination, agricultural real estate has become increasingly attractive to international investors looking for both financial returns and a connection to the land in this tropical paradise.",
        targetList: [
            "Luxury real estate agencies specializing in rural properties",
            "Farm and agricultural property specialists",
            "Investment advisors for international agricultural portfolios",
            "High-net-worth individuals seeking farm estates",
            "Developers of eco-luxury agricultural communities",
            "Boutique agencies focusing on specialty agricultural properties",
            "Retirement and relocation services for farm living"
        ],
        features: [
            "Direct and authoritative domain name that instantly communicates premium positioning",
            "Perfect for showcasing high-end agricultural properties and farm estates",
            "Excellent SEO potential for competitive real estate keywords",
            "Appeals to affluent international buyers seeking agricultural investments",
            "Ideal for content marketing about Costa Rica's agricultural advantages",
            "Positions your business as the authority in Costa Rica's farm real estate market",
            "Versatile for both agricultural investment properties and luxury farm estates"
        ],
        premium: true,
        price_tier: 3
    },
    
    // Pet Care & Services
    'wagginways.com': {
        category: "pets",
        subcategory: "dogs",
        story: "wagginways.com is a playful, memorable domain that instantly creates a positive emotional connection for pet owners. The name cleverly combines the happy image of a wagging tail with the suggestion of paths, routes, or methods - perfect for dog walking services, pet care businesses, and canine training programs.\n\nThe pet industry continues to experience remarkable growth, with Americans spending over $100 billion annually on their pets. This premium domain positions your business to capture a share of this thriving market with a name that's both descriptive and emotionally resonant. The friendly, approachable nature of the domain instantly communicates a passion for pets and their well-being.\n\nBeyond traditional dog walking, this versatile domain is ideal for a range of pet services including pet sitting, dog training academies, pet-friendly travel services, or even a multi-service pet care platform. The name suggests movement, happiness, and the special bond between pets and their owners - all key elements for successful branding in the pet care industry.",
        targetList: [
            "Dog walking and pet sitting services",
            "Pet care franchises and chains",
            "Canine training programs and academies",
            "Pet-friendly travel and accommodation services",
            "Mobile pet grooming businesses",
            "Pet transportation services",
            "Dog daycare and boarding facilities"
        ],
        features: [
            "Instantly memorable and emotionally appealing to pet owners",
            "Clear connection to pet services with the playful 'wagging' reference",
            "Versatile for various pet care business models",
            "Perfect for building a friendly, approachable brand identity",
            "Excellent for local SEO targeting pet service keywords",
            "Appeals to the growing market of dedicated pet parents",
            "Short, catchy, and easy to remember for word-of-mouth marketing"
        ],
        premium: true,
        price_tier: 3
    },
    
    // Relationship Advice & Intimacy
    'lovewispers.com': {
        category: "romance",
        subcategory: "intimacy",
        story: "lovewispers.com is an evocative and intimate domain that creates an immediate emotional connection with audiences seeking relationship guidance, romantic advice, or deeper intimacy. The name beautifully combines 'love' with 'whispers,' suggesting gentle guidance, intimate communication, and the sharing of secrets that strengthen relationships.\n\nIn today's fast-paced digital world, meaningful connections and intimate relationships require nurturing and guidance. This premium domain is perfect for relationship coaches, couples therapists, intimacy educators, or content creators focusing on romantic relationships. The name conveys trust, discretion, and a gentle approach to sensitive topics.\n\nBeyond traditional relationship coaching, this versatile domain could serve as a platform for podcasts about love and relationships, subscription services offering romantic advice, or educational content about emotional and physical intimacy. The soft, approachable nature of 'whispers' creates a safe space for exploring vulnerable topics, while the direct reference to 'love' clearly communicates the domain's focus.",
        targetList: [
            "Relationship coaches and therapists",
            "Couples counselors and marriage therapists",
            "Intimacy educators and workshops",
            "Dating advice platforms and services",
            "Romantic content creators and podcasters",
            "Subscription services for relationship guidance",
            "Authors and publishers of relationship books"
        ],
        features: [
            "Emotionally resonant name that instantly communicates relationship focus",
            "Suggests intimacy, trust, and gentle guidance",
            "Perfect for building a brand around relationship expertise",
            "Versatile for various relationship-focused business models",
            "Appeals to audiences seeking authentic connection and intimacy",
            "Excellent for content marketing around relationship topics",
            "Memorable and evocative for strong brand recognition"
        ],
        premium: true,
        price_tier: 3
    },
    
    // Entertainment & Media
    'betrascal.com': {
        category: "entertainment",
        subcategory: "comedy",
        story: "betrascal.com offers a playful, mischievous brand identity perfect for comedy and entertainment ventures. This clever domain name combines the concept of betting or gambling with the playful character of a rascal, creating an engaging and memorable platform for content that amuses, entertains, and perhaps occasionally breaks the rules.",
        targetList: [
            "Comedy websites and content creators",
            "Entertainment brands with a playful edge",
            "Podcast networks and humor publications",
            "Gaming platforms with a mischievous theme",
            "Satirical news and media outlets"
        ],
        features: [
            "Memorable and distinctive brand name",
            "Evokes a sense of fun and playful mischief",
            "Versatile application across entertainment niches",
            "Appeals to audiences seeking clever, humorous content",
            "Short, catchy, and easy to remember"
        ],
        premium: true,
        price_tier: 3
    },
    'digitalbudtenders.com': {
        category: "cannabis",
        subcategory: "cannabis-education",
        story: `<h3>Virtual Cannabis Guidance for the Digital Age</h3>
        <p>DigitalBudtenders.com is the perfect domain for businesses providing online cannabis education, virtual dispensary guidance, and digital budtender services in today's expanding cannabis market.</p>
        <p>This premium domain combines the traditional role of knowledgeable dispensary staff with modern digital delivery, positioning your brand at the intersection of cannabis expertise and technology.</p>
        <p>With increasing cannabis legalization and the growing need for reliable education, DigitalBudtenders.com offers an instantly recognizable brand identity for online platforms, apps, and services focused on guiding consumers through their cannabis journey.</p>`,
        targetList: [
            "Online cannabis education platforms",
            "Virtual dispensary consultation services",
            "Cannabis e-commerce with personalized guidance",
            "Cannabis recommendation apps and tools",
            "Budtender training and certification programs"
        ],
        features: [
            "Clearly communicates the digital cannabis guidance concept",
            "Appeals to both consumers and industry professionals",
            "Perfect for SEO in the cannabis education market",
            "Positions brand as innovative in the cannabis space"
        ],
        premium: true,
        price_tier: 2,
        visit_site: "https://digitalbudtenders.com"
    },
    'brain-break.com': {
        category: "mindful-movement",
        subcategory: "cognitive-wellness",
        story: `<h3>Mindful Mental Breaks for Cognitive Wellness</h3>
        <p>Brain-Break.com is the perfect domain for brands offering mindful mental breaks, cognitive rest solutions, and brain wellness practices for improved focus and mental health.</p>
        <p>This premium domain directly communicates the concept of intentional pauses for mental recovery, positioning your brand at the intersection of cognitive science and mindfulness practices.</p>
        <p>With increasing awareness of mental fatigue and burnout in our digital age, Brain-Break.com offers an instantly recognizable brand identity for wellness apps, meditation platforms, and cognitive health services focused on helping people restore mental clarity and focus.</p>`,
        targetList: [
            "Mindfulness and meditation apps",
            "Cognitive wellness platforms",
            "Mental health service providers",
            "Corporate wellness programs",
            "Productivity and focus enhancement tools"
        ],
        features: [
            "Clearly communicates the concept of mental rest and recovery",
            "Connects to growing research on cognitive breaks and productivity",
            "Perfect for SEO in the mental wellness and mindfulness markets",
            "Appeals to both individual consumers and corporate wellness programs"
        ],
        premium: true,
        price_tier: 2,
        visit_site: "https://brain-break.com"
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
            ${details.visit_site ? `
                <div class="mt-4 text-center">
                    <a href="${details.visit_site}" target="_blank" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <i class="fas fa-external-link-alt mr-2"></i>Visit Example Site
                    </a>
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
    // Check for domain parameter in URL and populate form fields
    const urlParams = new URLSearchParams(window.location.search);
    const domainParam = urlParams.get('domain');
    
    if (domainParam) {
        // Set the hidden field value
        const domainInterestField = document.getElementById('domain_interest');
        const domainField = document.getElementById('domain');
        
        if (domainInterestField) domainInterestField.value = domainParam;
        if (domainField) domainField.value = domainParam;
        
        // Highlight the form to draw attention
        const contactForm = document.querySelector('.contact-form-container');
        if (contactForm) {
            contactForm.classList.add('highlight-form');
            setTimeout(() => {
                contactForm.classList.remove('highlight-form');
            }, 1500);
        }
    }
    
    // Handle form submission and redirect
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitFormBtn');
    
    if (contactForm && submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check form validity
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }
            
            // Store the form data in localStorage to use on the thank you page
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                domain: document.getElementById('domain').value,
                message: document.getElementById('message').value,
                domain_interest: document.getElementById('domain_interest').value
            };
            localStorage.setItem('formSubmission', JSON.stringify(formData));
            
            // Create FormData object from the form
            const formDataObj = new FormData(contactForm);
            
            // Disable the submit button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing...';
            
            // Submit the form using fetch API
            fetch(contactForm.action, {
                method: 'POST',
                body: formDataObj,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                // Redirect to thank you page regardless of response
                window.location.href = 'thank-you.html';
            })
            .catch(error => {
                console.error('Error:', error);
                // Still redirect to thank you page on error
                window.location.href = 'thank-you.html';
            });
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
                // Debug logging
                console.log('Card:', card.querySelector('.domain-name').textContent);
                console.log('Card categories:', card.dataset.category);
                console.log('Selected category:', selectedCategory);
                
                // For 'all' category or if the card's category contains the selected category
                if (selectedCategory === 'all' || 
                    card.dataset.category.split(' ').indexOf(selectedCategory) !== -1 || 
                    card.dataset.category === selectedCategory) {
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