
const AllProducts = {
            spades : {
                title: 'Spades',
                headline: 'Combining athleticism with style',
                imagePath: '/spades.jpeg',
                description: 'Introducing the "Spades Kick" — a contemporary sneaker artfully designed for the modern enthusiast. Its distinct spade patterns, intricately woven into the shoe\'s fabric, are a nod to classic card designs. The shoe\'s sleek curves, paired with its bold lace and cushioned sole, meld both comfort and style, making it a must-have for any footwear aficionado.'
            }, 
            southOxford : {
                title: 'South Oxford',
                headline: 'A harmonious blend of simplicity and innovation',
                imagePath: '/SouthOxford.jpg',
                description: 'This shoe design features a muted color palette, evoking a sense of timeless elegance. The structured panels seamlessly combine with delicate stitching, showcasing a meticulous attention to detail. The result is a footwear masterpiece that is both understated and sophisticated, perfect for the discerning individual.'
            },
            maz : {
                title: 'maz',
                headline: 'the essence of futuristic fashion',
                imagePath: '/maz.jpeg',
                description: 'Behold \'The Maz\' shoe, a creation by Mac Mogul, exuding modern elegance. With its cool blue undertones and striking contrast of linear designs, this shoe captures the essence of futuristic fashion. Enhanced by cushioned soles and refined laces, it represents a blend of comfort and avant-garde style. An embodiment of art and utility, it\'s a testament to visionary footwear design.'
            },
            jamaaca : {
                title: 'Jamaaca',
                headline: 'A contemporary take on classic denim',
                imagePath: '/jamaacaJeans.jpeg',
                description: 'These jeans feature a textured, stonewashed finish, beautifully contrasting with bold, earth-toned accents. The strategic placements of pockets and stitching not only enhance functionality but also add a touch of flair. These jeans represent the perfect fusion of style and comfort, tailor-made for the modern fashion aficionado.'
            },
            colorVienz : {
                title: 'color Vienz',
                headline: 'Avant-garde expression of denim fashion',
                imagePath: '/colorVienzJeans.png',
                description: 'Introducing \'The Mogul "Color Vienz" Jeans\': a bold, avant-garde expression of denim fashion. This pair showcases an artistic splash of vibrant colors on a classic blue canvas. Distinct patches, reminiscent of modern art, combined with the neon trim, set these jeans apart as a statement piece. A nod to the audacious spirit of the modern-day mogul, these jeans are for those who wish to stand out and make a statement.'
            },
            mogulPants : {
                title: 'Mogul Pants',
                headline: 'A redefined denim experience!',
                imagePath: '/mogulPants.jpg',
                description: 'Discover a redefined denim experience with this avant-garde pair. From the radiant red stitching that weaves a tale of boldness to the abstract paint smears, every detail resonates with an artisan touch. The unique patchwork adds a whimsical flair, while the denim retains a rich, authentic hue. Designed for the fearless and the fashion-forward, this pair of jeans is a testament to individuality and creative expression.'
            },
            xHoodie : {
                title: 'xhoodie',
                headline: 'Stand out from the crowd',
                imagePath: '/xhoodie.jpeg',
                description: 'Dive into the future of streetwear with the \'X Hoodie\'. Its high-definition rendering reveals a sophisticated blend of subtle pastels, bold branding, and intricate details. The sleek \'X\' emblem at the front sets a statement, while the meticulous accents on the sleeves showcase your refined taste. Coupled with a soft, luxurious fabric, this hoodie isn\'t just a piece of clothing; it\'s a declaration of style. Stand out, stay warm, and let the \'X\' mark your spot in the fashion world.'
            },
            theHula : {
                title: 'The Hula',
                headline: 'Embodying the essence of sophistication and femininity',
                imagePath: '/theHula.jpeg',
                description: 'Introducing the \'Hula Jumper\', a timeless masterpiece by Mac Mogul. Embodying the essence of sophistication and femininity, this design seamlessly marries classic and contemporary. The soft, subtle textures contrast beautifully with the defined stitching, creating a silhouette that flatters and flows. Its unique buttoned front and tailored waistband offer both style and comfort, making it the perfect ensemble for the modern woman. Step into elegance and make a statement with every move in the \'Huca Jumper\'.'
            },
            theMilitia : {
                title: 'The Militia',
                headline: 'an iconic ensemble crafted with precision and flair',
                imagePath: '/theMilitia.jpeg',
                description: 'Unveiling the \'Militia Husband Bretta Suit\', an iconic ensemble crafted with precision and flair by "ALD", exclusively for the D1VA Collection \'05. This avant-garde design showcases an audacious blend of muted earth tones accentuated with vibrant green pockets, exuding a military-inspired charm. The sharp, sculpted lines of the vest harmonize with the relaxed fit of the shorts, giving it a modern edge. With a visionary influence that shines through, this outfit is not just a statement piece, but a testament to modern fashion\'s daring spirit.'
            },
            theTiff : {
                title: 'The Tiff',
                headline: 'A radiant masterpiece',
                imagePath: '/theTiff.jpeg',
                description: 'Introducing the \'Tiff Husband Bretta\', a radiant masterpiece conceptualized by "ALD" solely for the D1VA Collection \'05. With its ethereal blue tones juxtaposed against a sunlit amber, this ensemble evokes the poetic dance of the sky at dawn. The dreamy texture of the fabric, reminiscent of a watercolor canvas, is perfectly balanced by the bold, sculpted accents in amber, creating a harmonious symphony of color and form. Every stitch and detail embodies visionary artistry, ensuring that the wearer stands out as the epitome of contemporary elegance.'
            },
            theQueen : {
                title: 'The Queen',
                headline: 'An ode to regal allure',
                imagePath: '/theQueen.jpeg',
                description: 'Presenting \'The Queen Husband Bretta\', an ode to regal allure crafted exclusively by "ALD" for the D1VA Collection \'05. Dipped in the golden hues of royal tapestries, this ensemble captures the essence of timeless elegance. Its sultry, contoured design accentuates grace, while the sun-kissed golden wash infuses an air of noble sophistication. The structured cuts and detailing, influenced by visionary aesthetics, promise to elevate every silhouette, ensuring that its wearer reigns supreme in the realm of fashion.'
            },
            theRoyalty : {
                title: 'The Royalty',
                headline: 'Serene azure tones juxtaposed with regal gold patches',
                imagePath: '/theRoyalty.jpeg',
                description: 'Introducing \'The Royalty Husband Beetta JemSuit\', a masterful creation by "ALD" exclusively for the D1VA Collection \'05. Bathed in serene azure tones juxtaposed with regal gold patches, this piece is the epitome of royal luxury and sophistication. Its modern cuts and contours come together to enhance the feminine form, while the visionary designs by ALD ensure it stands unparalleled in the world of high fashion. A celebration of classic charm and contemporary elegance, this ensemble promises to turn heads, leaving an indelible mark on every beholder.'
            }, 
            theGarterSet : {
                title: 'The Garter Set',
                headline: 'A daring fusion of vintage allure and modern panache',
                imagePath: '/theGarterSet.png',
                description: 'Presenting \'The Garter Set\' from mogulufashions.com — a daring fusion of vintage allure and modern panache. This ensemble takes inspiration from classic burlesque styles, reimagined for the contemporary fashionista. The intricately designed bodice highlights the elegance of the upper torso, while the fishnet detailing offers a bold and edgy contrast. Not to be overshadowed, the accompanying ankle boots exude both grace and strength, featuring a unique curve design that pays homage to the natural silhouette of the foot. Together, they create a set that speaks to confidence, allure, and timeless style.' 
            },
            Gangsta : {
                title: 'Gangsta',
                headline: 'Stand Resolute. Stand True.',
                imagePath: '/Gangsta.png',
                description: 'Embrace the ethos of unyielding integrity with our "Gangsta: Cradle to the Grave" tee. A powerful testament to unwavering fidelity to one\'s ideals, this shirt is more than just a fashion statement—it\'s a declaration of commitment, from the beginning to the very end. Crafted with precision, the design features bold, fiery lettering set against a backdrop of silhouetted hands reaching upwards, symbolizing the undying pursuit of one\'s beliefs and the strength to uphold them. The sunset hues not only captivate the eye but also represent the journey from the dawn of one\'s convictions to the twilight of one\'s life.Whether you\'re out on the town or simply looking to make a statement, this tee ensures you wear your principles on your sleeve—quite literally. Its soft, breathable fabric ensures comfort, while its striking design guarantees a lasting impression.Features:  100% Premium CottonBreathable and LightweightHigh-quality print that doesn\'t fadeModern fit, suitable for all body typesDurable and designed for regular wearCelebrate your unwavering integrity and let the world know that you stand true to your ideals, from the cradle to the grave.' 
            },
            Here : {
                title: 'Here',
                headline: 'Embrace Your Unique Presence',
                imagePath: '/Here.png',
                description: 'In a world where genuine presence and transparency have become rarities, wearing our "Here" tee is not just a bold statement, but a beacon of authenticity. This shirt represents not only the power of being present but also the courage to remain transparent and firm in a world that often rewards conformity.The vivid purple alien at the center of the design embodies the sentiment of feeling like an outsider, of not belonging. Yet, it\'s this very uniqueness, this \'otherness,\' that makes one stand out, be remembered, and truly seen. The bold, contrasting texts, "We\'re Here!\", declare a sense of unity, a message to all who feel they don\'t fit the mold, reminding them they\'re not alone.Features:100% Soft, Premium CottonBreathable and Comfortable FitResilient Print QualityModern Design, suitable for all stylesCrafted for those who dare to be differentIn a world where blending in is the norm, dare to be different, dare to be transparent. Wear your authenticity with pride and let the world know, "We\'re Here!"' 
            },
            better : {
                title: 'better',
                headline: 'Embrace the Balance of Risk and Security',
                imagePath: '/better.png',
                description: 'Life is all about finding that delicate balance between taking chances and ensuring security. Our "Better" tee captures this essence perfectly, weaving together the excitement of rolling the dice with the comfort of having all four walls intact.\'Prominently featuring a series of dice, this design is a nod to the unpredictable nature of life, the ups and downs, and the choices we\'re faced with daily. Each roll signifies a decision, a leap of faith, or a calculated risk. The vibrant "4" in the center stands as a bold reminder that while we take these chances, we always ensure that our four corners, our foundations, remain unshaken.Features:100% Premium Quality CottonSoft, Comfortable, and BreathableStriking Print QualityModern, Statement DesignCrafted for the risk-takers who never compromise on security In a game of chances, let the world know you play with both heart and strategy. With the "Better" tee, wear your mantra: Take chances, but always have your four walls covered.' 
            },
            creamPuff : {
                title: 'creamPuff',
                headline: '',
                imagePath: '/creamPuff.png',
                description: '' 
            },
            facebookFollowers : {
                title: 'facebook followers',
                headline: '',
                imagePath: '/facebookFollowers.png',
                description: '' 
            },
            mogulOne : {
                title: 'Mogul One',
                headline: '',
                imagePath: '/mogulShirt.png',
                description: '' 
            },
            mogulTwo : {
                title: 'Mogul Two',
                headline: '',
                imagePath: '/mogulShirtTwo.png',
                description: '' 
            }
}

export default AllProducts;