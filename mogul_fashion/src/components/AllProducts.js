import './App.scss';

const AllProducts = {
    men : {
        sneakers : {
            spades : {
                title: 'Spades',
                headline: 'Combining athleticism with style',
                imagePath: './spades.jpeg',
                description: 'Introducing the "Spades Kick" — a contemporary sneaker artfully designed for the modern enthusiast. Its distinct spade patterns, intricately woven into the shoe\'s fabric, are a nod to classic card designs. The shoe\'s sleek curves, paired with its bold lace and cushioned sole, meld both comfort and style, making it a must-have for any footwear aficionado.'
            }, 
            southOxford : {
                title: 'South Oxford',
                headline: 'A harmonious blend of simplicity and innovation',
                imagePath: './SouthOxford.jpg',
                description: 'This shoe design features a muted color palette, evoking a sense of timeless elegance. The structured panels seamlessly combine with delicate stitching, showcasing a meticulous attention to detail. The result is a footwear masterpiece that is both understated and sophisticated, perfect for the discerning individual.'
            },
            maz : {
                title: 'maz',
                headline: 'the essence of futuristic fashion',
                imagePath: './maz.jpeg',
                description: 'Behold \'The Maz\' shoe, a creation by Mac Mogul, exuding modern elegance. With its cool blue undertones and striking contrast of linear designs, this shoe captures the essence of futuristic fashion. Enhanced by cushioned soles and refined laces, it represents a blend of comfort and avant-garde style. An embodiment of art and utility, it\'s a testament to visionary footwear design.'
            }
        }, 
        pants : {
            jamaaca : {
                title: 'Jamaaca',
                headline: 'A contemporary take on classic denim',
                imagePath: './jamaacaJeans.jpeg',
                description: 'These jeans feature a textured, stonewashed finish, beautifully contrasting with bold, earth-toned accents. The strategic placements of pockets and stitching not only enhance functionality but also add a touch of flair. These jeans represent the perfect fusion of style and comfort, tailor-made for the modern fashion aficionado.'
            },
            colorVienz : {
                title: 'color Vienz',
                headline: 'Avant-garde expression of denim fashion',
                imagePath: './colorVienzJeans.png',
                description: 'Introducing \'The Mogul "Color Vienz" Jeans\': a bold, avant-garde expression of denim fashion. This pair showcases an artistic splash of vibrant colors on a classic blue canvas. Distinct patches, reminiscent of modern art, combined with the neon trim, set these jeans apart as a statement piece. A nod to the audacious spirit of the modern-day mogul, these jeans are for those who wish to stand out and make a statement.'
            },
            mogulPants : {
                title: 'Mogul Pants',
                headline: 'A redefined denim experience!',
                imagePath: './mogulPants.jpg',
                description: 'Discover a redefined denim experience with this avant-garde pair. From the radiant red stitching that weaves a tale of boldness to the abstract paint smears, every detail resonates with an artisan touch. The unique patchwork adds a whimsical flair, while the denim retains a rich, authentic hue. Designed for the fearless and the fashion-forward, this pair of jeans is a testament to individuality and creative expression.'
            }
        }, 
        hoodies : {
            xHoodie : {
                title: 'xhoodie',
                headline: 'Stand out from the crowd',
                imagePath: './xhoodie.jpeg',
                description: 'Dive into the future of streetwear with the \'X Hoodie\'. Its high-definition rendering reveals a sophisticated blend of subtle pastels, bold branding, and intricate details. The sleek \'X\' emblem at the front sets a statement, while the meticulous accents on the sleeves showcase your refined taste. Coupled with a soft, luxurious fabric, this hoodie isn\'t just a piece of clothing; it\'s a declaration of style. Stand out, stay warm, and let the \'X\' mark your spot in the fashion world.'
            }
        }
    },
    woman : {
        dresses : {
            theHula : {
                title: 'The Hula',
                headline: 'Embodying the essence of sophistication and femininity',
                imagePath: './theHula.jpeg',
                description: 'Introducing the \'Hula Jumper\', a timeless masterpiece by Mac Mogul. Embodying the essence of sophistication and femininity, this design seamlessly marries classic and contemporary. The soft, subtle textures contrast beautifully with the defined stitching, creating a silhouette that flatters and flows. Its unique buttoned front and tailored waistband offer both style and comfort, making it the perfect ensemble for the modern woman. Step into elegance and make a statement with every move in the \'Huca Jumper\'.'
            },
            theMilitia : {
                title: 'The Militia',
                headline: 'an iconic ensemble crafted with precision and flair',
                imagePath: './theMilitia.jpeg',
                description: 'Unveiling the \'Militia Husband Bretta Suit\', an iconic ensemble crafted with precision and flair by "ALD", exclusively for the D1VA Collection \'05. This avant-garde design showcases an audacious blend of muted earth tones accentuated with vibrant green pockets, exuding a military-inspired charm. The sharp, sculpted lines of the vest harmonize with the relaxed fit of the shorts, giving it a modern edge. With a visionary influence that shines through, this outfit is not just a statement piece, but a testament to modern fashion\'s daring spirit.'
            },
            theTiff : {
                title: 'The Tiff',
                headline: 'A radiant masterpiece',
                imagePath: './theTiff.jpeg',
                description: 'Introducing the \'Tiff Husband Bretta\', a radiant masterpiece conceptualized by "ALD" solely for the D1VA Collection \'05. With its ethereal blue tones juxtaposed against a sunlit amber, this ensemble evokes the poetic dance of the sky at dawn. The dreamy texture of the fabric, reminiscent of a watercolor canvas, is perfectly balanced by the bold, sculpted accents in amber, creating a harmonious symphony of color and form. Every stitch and detail embodies visionary artistry, ensuring that the wearer stands out as the epitome of contemporary elegance.'
            }
        },
        skirts : {
            theQueen : {
                title: 'The Queen',
                headline: '',
                imagePath: './theQueen.jpeg',
                description: ''
            },
            theRoyalty : {
                title: 'The Royalty',
                headline: '',
                imagePath: './theRoyalty.jpeg',
                description: ''
            }
        }, 
        sets : {
            theGarterSet : {
                title: 'The Garter Set',
                headline: '',
                imagePath: './theGarterSet.png',
                description: '' 
            }
        }
    }
}