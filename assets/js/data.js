/* ==========================================================================
   4KILO MARKETPLACE — Catalog data
   A curated marketplace for independent makers, importers and small brands.
   Prices in ETB (Ethiopian Birr).
   ========================================================================== */

const CURRENCY = { code: 'ETB', symbol: 'Br', rateNote: 'Prices include VAT' };

const CATEGORIES = [
  { id: 'electronics', name: 'Electronics', blurb: 'Audio, imaging & carry tech', art: 'headphones', cw: 'obsidian' },
  { id: 'fashion', name: 'Fashion', blurb: 'Wear made to last', art: 'sneaker', cw: 'clay' },
  { id: 'home', name: 'Home & Living', blurb: 'Furniture, light, texture', art: 'chair', cw: 'sand' },
  { id: 'craft', name: 'Handmade', blurb: 'Woven, thrown, carved', art: 'basket', cw: 'ember' },
  { id: 'coffee', name: 'Coffee & Spice', blurb: 'Single origin, small lot', art: 'coffee', cw: 'forest' },
  { id: 'beauty', name: 'Beauty', blurb: 'Botanical & considered', art: 'perfume', cw: 'plum' },
  { id: 'outdoors', name: 'Outdoors', blurb: 'Move, ride, wander', art: 'bike', cw: 'teal' },
  { id: 'books', name: 'Books & Paper', blurb: 'Print worth keeping', art: 'books', cw: 'cobalt' }
];

const SELLERS = {
  s1: { id: 's1', name: 'Kuriftu Audio', since: 2019, city: 'Addis Ababa', rating: 4.8, sales: 12480, verified: true, bio: 'Importers and tuners of studio-grade audio. Every unit bench-tested in our Bole workshop before it ships.' },
  s2: { id: 's2', name: 'Entoto Leatherworks', since: 2016, city: 'Addis Ababa', rating: 4.9, sales: 8930, verified: true, bio: 'Third-generation tannery and atelier. Vegetable-tanned hide, hand-stitched, built to outlive trends.' },
  s3: { id: 's3', name: 'Sheba Home', since: 2020, city: 'Bishoftu', rating: 4.7, sales: 5410, verified: true, bio: 'Furniture and lighting made from reclaimed eucalyptus and locally cast brass.' },
  s4: { id: 's4', name: 'Gojo Collective', since: 2018, city: 'Bahir Dar', rating: 4.9, sales: 15200, verified: true, bio: 'A cooperative of 140 weavers and basket makers. Every purchase pays the maker directly.' },
  s5: { id: 's5', name: 'Yirga Roasters', since: 2015, city: 'Yirgacheffe', rating: 5.0, sales: 22600, verified: true, bio: 'Washing station to roastery in one hand. Lot-traceable coffee, roasted the week it ships.' },
  s6: { id: 's6', name: 'Adey Botanics', since: 2021, city: 'Addis Ababa', rating: 4.6, sales: 3980, verified: true, bio: 'Cold-pressed oils and steam-distilled botanicals from highland farms.' },
  s7: { id: 's7', name: 'Rift Valley Outfitters', since: 2017, city: 'Hawassa', rating: 4.7, sales: 6720, verified: true, bio: 'Field-tested gear for the Rift. If it breaks on the trail, we replace it.' },
  s8: { id: 's8', name: 'Mesob Press', since: 2019, city: 'Addis Ababa', rating: 4.8, sales: 4310, verified: true, bio: 'Independent publisher and paper studio. Letterpress, smyth-sewn, printed locally.' },
  s9: { id: 's9', name: 'Axum Optics', since: 2022, city: 'Addis Ababa', rating: 4.5, sales: 2140, verified: false, bio: 'Acetate frames cut and polished in-house, prescription-ready.' },
  s10: { id: 's10', name: 'Nile Craft Co.', since: 2014, city: 'Gondar', rating: 4.8, sales: 9860, verified: true, bio: 'Hand-hammered cookware and cast serveware from a family foundry.' }
};

/* ---------- helpers used to keep product records terse ---------- */
let _pid = 0;
function P(o) {
  const id = o.slug || 'p' + (++_pid);
  return Object.assign({
    id, slug: id, colors: [], sizes: [], badges: [], stock: 20 + (id.length * 7) % 60,
    reviews: 0, rating: 4.6, was: null, shipDays: 3
  }, o, { slug: id });
}

const PRODUCTS = [
  /* ---------------- Electronics ---------------- */
  P({
    slug: 'kuriftu-atlas-over-ear', title: 'Atlas Over-Ear Headphones — Active Noise Cancelling',
    cat: 'electronics', sub: 'Audio', price: 18400, was: 22900, art: 'headphones',
    seller: 's1', rating: 4.8, reviews: 412, badges: ['bestseller'], shipDays: 2,
    colors: [['obsidian', 'Obsidian'], ['sand', 'Desert Sand'], ['forest', 'Deep Forest']],
    tagline: '40 hours of quiet, tuned in Addis.',
    desc: 'Atlas pairs a 40 mm bio-cellulose driver with four-mic hybrid ANC that reads the room forty thousand times a second. We retune every batch against a reference curve in our own anechoic box — so what you hear is what the mastering engineer heard.',
    highlights: ['Hybrid ANC with transparency dial', '40 h playback, 5 min = 4 h fast charge', 'Memory-foam earcups wrapped in protein leather', 'Multipoint Bluetooth 5.3 + USB-C lossless', 'Folds flat into a hardshell case'],
    specs: [['Driver', '40 mm bio-cellulose dynamic'], ['Frequency response', '8 Hz – 40 kHz'], ['Battery', '820 mAh · 40 h ANC on'], ['Codecs', 'LDAC, aptX Adaptive, AAC, SBC'], ['Weight', '268 g'], ['Warranty', '2 years, local service']]
  }),
  P({
    slug: 'kuriftu-field-mirrorless', title: 'Field 24 Mirrorless Camera Body',
    cat: 'electronics', sub: 'Imaging', price: 96500, art: 'camera', seller: 's1',
    rating: 4.9, reviews: 138, badges: ['new'], shipDays: 4,
    colors: [['obsidian', 'Graphite'], ['slate', 'Slate']],
    tagline: 'A 24 MP back-illuminated sensor in a body you will actually carry.',
    desc: 'Weather-sealed magnesium alloy, in-body stabilisation good for six stops, and a shutter rated to 300,000 actuations. Built for the person who shoots a wedding on Saturday and the Simien escarpment on Sunday.',
    highlights: ['24.2 MP BSI CMOS, dual-gain readout', '6-stop 5-axis IBIS', '4K/60 10-bit internal, no crop', 'Dust and splash sealed to IP53', 'Dual UHS-II card slots'],
    specs: [['Sensor', '24.2 MP BSI CMOS'], ['ISO', '100 – 51,200 (exp. 204,800)'], ['Burst', '14 fps mechanical'], ['Mount', '4K-Mount, 62 native lenses'], ['Weight', '612 g with battery'], ['Warranty', '2 years']]
  }),
  P({
    slug: 'kuriftu-drift-speaker', title: 'Drift Portable Speaker — 24 h, IP67',
    cat: 'electronics', sub: 'Audio', price: 6900, was: 8400, art: 'speaker', seller: 's1',
    rating: 4.6, reviews: 289, badges: ['deal'],
    colors: [['ember', 'Ember'], ['teal', 'Lake Teal'], ['obsidian', 'Obsidian']],
    tagline: 'Dust-proof, drop-proof, dinner-party-proof.',
    desc: 'Two 45 mm drivers and a pair of passive radiators push far more low end than a can this size has any right to. Sealed to IP67 — rinse it under the tap when the dust of Meskel Square gets to it.',
    highlights: ['24 h at conversational volume', 'IP67 dust and water sealed', 'Stereo pair two units over BLE', 'USB-C in, 5 W power-out for your phone'],
    specs: [['Drivers', '2 × 45 mm + 2 passive radiators'], ['Output', '30 W RMS'], ['Battery', '24 h / 4,800 mAh'], ['Rating', 'IP67'], ['Weight', '640 g']]
  }),
  P({
    slug: 'kuriftu-slate-14-laptop', title: 'Slate 14 Ultraportable — 16 GB / 1 TB',
    cat: 'electronics', sub: 'Computing', price: 148000, was: 162000, art: 'laptop', seller: 's1',
    rating: 4.7, reviews: 96, shipDays: 5,
    colors: [['slate', 'Slate'], ['obsidian', 'Midnight']],
    tagline: '1.1 kg. 18 hours. No fan.',
    desc: 'A passively cooled 14-inch machine that stays silent through a full workday. The 3K display covers 100% of DCI-P3, so colour work travels with you.',
    highlights: ['14" 3K 120 Hz, 100% DCI-P3', '16 GB unified memory, 1 TB NVMe', '18 h mixed-use battery', 'Fanless — genuinely silent', 'Two USB-C 4, HDMI 2.1, SD'],
    specs: [['Display', '14.2" 3024×1964 120 Hz'], ['Memory', '16 GB LPDDR5X'], ['Storage', '1 TB NVMe'], ['Weight', '1.12 kg'], ['Warranty', '2 years']]
  }),
  P({
    slug: 'kuriftu-meridian-watch', title: 'Meridian Automatic — 38 mm Sapphire',
    cat: 'electronics', sub: 'Watches', price: 32000, art: 'watch', seller: 's1',
    rating: 4.9, reviews: 174, badges: ['editors'],
    colors: [['obsidian', 'Black Dial'], ['forest', 'Forest Dial'], ['cobalt', 'Cobalt Dial']],
    tagline: 'No battery. No app. Just a rotor and 42 hours.',
    desc: 'A 24-jewel automatic movement behind a domed sapphire crystal, in a 38 mm case that suits most wrists. Hand-finished bridges you will only see if you open it — which is rather the point.',
    highlights: ['24-jewel automatic, 42 h reserve', 'Domed sapphire, AR-coated both sides', '100 m water resistance', 'Quick-release strap system'],
    specs: [['Movement', 'Automatic, 28,800 vph'], ['Case', '38 mm × 10.4 mm, 316L steel'], ['Crystal', 'Sapphire, dual AR'], ['Water', '10 ATM'], ['Warranty', '5 years']]
  }),
  P({
    slug: 'kuriftu-pulse-phone', title: 'Pulse 5 Smartphone — 256 GB',
    cat: 'electronics', sub: 'Mobile', price: 54900, was: 61000, art: 'phone', seller: 's1',
    rating: 4.5, reviews: 331, badges: ['deal'],
    colors: [['forest', 'Forest'], ['plum', 'Plum'], ['obsidian', 'Obsidian']],
    tagline: 'Two-day battery and a camera that behaves in low light.',
    desc: 'A 5,400 mAh cell, a 50 MP main sensor with OIS, and seven years of security patches. Dual SIM with local band support across Ethio Telecom and Safaricom.',
    highlights: ['6.5" 120 Hz LTPO OLED', '5,400 mAh · 67 W wired', '50 MP OIS main + 12 MP ultrawide', '7 years of OS and security updates'],
    specs: [['Display', '6.5" 2400×1080 LTPO'], ['Storage', '256 GB UFS 4.0'], ['Battery', '5,400 mAh'], ['SIM', 'Dual nano + eSIM'], ['Warranty', '2 years']]
  }),

  /* ---------------- Fashion ---------------- */
  P({
    slug: 'entoto-roam-sneaker', title: 'Roam Low Sneaker — Vegetable-Tanned Leather',
    cat: 'fashion', sub: 'Footwear', price: 8900, was: 11200, art: 'sneaker', seller: 's2',
    rating: 4.8, reviews: 526, badges: ['bestseller', 'handmade'],
    colors: [['ivory', 'Bone'], ['clay', 'Clay'], ['obsidian', 'Black'], ['forest', 'Forest']],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    tagline: 'Vegetable-tanned, hand-lasted, resoleable.',
    desc: 'Cut from full-grain hide tanned with mimosa bark rather than chrome, then hand-lasted over a Blake-stitched sole so a cobbler can resole it twice over. They mark, they crease, they get better.',
    highlights: ['Full-grain vegetable-tanned upper', 'Blake stitched — fully resoleable', 'Natural crepe rubber outsole', 'Unlined heel that moulds to you', 'Made in Addis Ababa'],
    specs: [['Upper', 'Full-grain veg-tan leather'], ['Sole', 'Natural crepe rubber'], ['Construction', 'Blake stitch'], ['Fit', 'True to size, roomy toe'], ['Care', 'Brush + neutral cream']]
  }),
  P({
    slug: 'entoto-carryall-tote', title: 'Carryall Tote — 18 L Bridle Leather',
    cat: 'fashion', sub: 'Bags', price: 12400, art: 'bag', seller: 's2',
    rating: 4.9, reviews: 287, badges: ['handmade'],
    colors: [['clay', 'Chestnut'], ['obsidian', 'Black'], ['sand', 'Sand']],
    tagline: 'One piece of hide, sixty hand stitches, no zips to fail.',
    desc: 'A tote cut from a single 3.5 mm bridle shoulder, saddle-stitched with waxed linen thread. It holds a 16-inch laptop, a week of markets, and — eventually — a patina you could not buy.',
    highlights: ['3.5 mm bridle leather', 'Hand saddle-stitched, waxed linen', 'Fits a 16" laptop', 'Solid brass hardware, no plating', 'Free re-stitching for life'],
    specs: [['Capacity', '18 litres'], ['Dimensions', '38 × 32 × 14 cm'], ['Hardware', 'Solid brass'], ['Weight', '1.1 kg'], ['Warranty', 'Lifetime stitching']]
  }),
  P({
    slug: 'entoto-highland-jacket', title: 'Highland Field Jacket — Waxed Cotton',
    cat: 'fashion', sub: 'Outerwear', price: 14600, was: 17800, art: 'jacket', seller: 's2',
    rating: 4.7, reviews: 163, badges: ['deal'],
    colors: [['olive', 'Olive'], ['obsidian', 'Charcoal'], ['sand', 'Stone']],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tagline: 'Rewaxable. Repairable. Rain-shedding.',
    desc: 'Eight-ounce waxed cotton with a corduroy collar, four bellows pockets and a poacher pocket across the back. Rewax it every second year and it will outlast the decade.',
    highlights: ['8 oz British-milled waxed cotton', 'Four bellows + one rear poacher pocket', 'Corduroy collar, brass storm snaps', 'Two-way brass main zip', 'Free rewax service, year two'],
    specs: [['Shell', '8 oz waxed cotton'], ['Lining', 'Cotton tartan, quilted body'], ['Pockets', '5 exterior, 2 interior'], ['Care', 'Sponge clean, rewax annually']]
  }),
  P({
    slug: 'axum-meridian-sun', title: 'Meridian Sunglasses — Hand-Polished Acetate',
    cat: 'fashion', sub: 'Eyewear', price: 4800, art: 'sunglasses', seller: 's9',
    rating: 4.5, reviews: 118,
    colors: [['obsidian', 'Black'], ['clay', 'Tortoise'], ['teal', 'Sea'], ['rose', 'Rosewater']],
    tagline: 'Italian acetate, cut and tumbled here.',
    desc: 'Blocks of Mazzucchelli acetate, milled in-house and tumble-polished for three days until the shine is in the material rather than on it. CR-39 lenses, prescription-ready at any local optician.',
    highlights: ['Mazzucchelli acetate blocks', '72-hour tumble polish', 'CR-39 lenses, 100% UV400', 'Prescription-ready', 'Includes hard case + cloth'],
    specs: [['Frame', 'Cellulose acetate'], ['Lens', 'CR-39, UV400'], ['Lens width', '52 mm'], ['Bridge', '20 mm'], ['Temple', '145 mm']]
  }),
  P({
    slug: 'entoto-summit-pack', title: 'Summit 28 Daypack — Waxed Canvas & Leather',
    cat: 'fashion', sub: 'Bags', price: 9600, art: 'backpack', seller: 's2',
    rating: 4.8, reviews: 244, badges: ['bestseller'],
    colors: [['olive', 'Olive'], ['obsidian', 'Black'], ['clay', 'Tobacco']],
    tagline: 'Twenty-eight litres that carries like eighteen.',
    desc: 'A roll-top daypack in 18 oz waxed canvas with leather base and straps. The harness is lifted from our trekking line, so a full load still sits on your hips rather than your shoulders.',
    highlights: ['28 L roll-top main', '18 oz waxed canvas, leather base', 'Padded 16" laptop sleeve', 'Load-lifter harness', 'YKK hardware throughout'],
    specs: [['Capacity', '28 litres'], ['Fabric', '18 oz waxed canvas'], ['Laptop', 'Fits 16"'], ['Weight', '1.35 kg'], ['Warranty', '10 years']]
  }),

  /* ---------------- Home & Living ---------------- */
  P({
    slug: 'sheba-arat-lounge', title: 'Arat Lounge Chair — Reclaimed Eucalyptus',
    cat: 'home', sub: 'Seating', price: 26800, was: 31500, art: 'chair', seller: 's3',
    rating: 4.9, reviews: 87, badges: ['editors', 'handmade'], shipDays: 10,
    colors: [['sand', 'Natural Boucle'], ['forest', 'Forest Wool'], ['clay', 'Rust Wool'], ['slate', 'Slate Wool']],
    tagline: 'Reclaimed frame, wool you can actually sit on.',
    desc: 'The frame is milled from eucalyptus salvaged from Addis construction sites, kiln-dried and joined without a single screw. Upholstered in a wool boucle woven 90 minutes north of the workshop.',
    highlights: ['Reclaimed eucalyptus, mortise-and-tenon', 'Ethiopian highland wool boucle', 'High-resilience foam, 8-year rating', 'Removable, washable covers', 'Assembles in 10 minutes, no tools'],
    specs: [['Dimensions', 'W 78 × D 82 × H 74 cm'], ['Seat height', '42 cm'], ['Frame', 'Reclaimed eucalyptus'], ['Cover', '100% wool, removable'], ['Lead time', '7–10 days']]
  }),
  P({
    slug: 'sheba-halo-lamp', title: 'Halo Table Lamp — Cast Brass & Linen',
    cat: 'home', sub: 'Lighting', price: 7400, art: 'lamp', seller: 's3',
    rating: 4.7, reviews: 156,
    colors: [['sand', 'Raw Linen'], ['forest', 'Forest'], ['ember', 'Terracotta']],
    tagline: 'Cast, spun and wired by four people in Bishoftu.',
    desc: 'A sand-cast brass base that develops its own patina, under a hand-sewn linen shade. Dimmable to a candle-low 5% so it can end the evening as well as start it.',
    highlights: ['Sand-cast solid brass base', 'Hand-sewn linen shade', 'Dimmable to 5%', 'Includes 2700 K LED, 25,000 h', '2 m braided fabric cord'],
    specs: [['Height', '46 cm'], ['Shade', '32 cm dia., linen'], ['Base', 'Cast brass, 1.9 kg'], ['Bulb', 'E27 LED, 8 W included'], ['Cord', '2 m braided']]
  }),
  P({
    slug: 'nile-hammered-pot', title: 'Hammered Copper Pot — 4 L, Tin-Lined',
    cat: 'home', sub: 'Kitchen', price: 11200, art: 'cookware', seller: 's10',
    rating: 4.8, reviews: 203, badges: ['handmade'],
    colors: [['clay', 'Copper'], ['ivory', 'Brushed'], ['obsidian', 'Patina']],
    tagline: 'Twelve thousand hammer strikes. One pot.',
    desc: 'Two millimetres of solid copper, raised by hand and lined with pure tin. Copper answers a change in heat almost instantly — which is the whole argument for cooking in it.',
    highlights: ['2 mm solid copper, hand-raised', 'Pure tin lining, re-tinnable', 'Cast bronze handles, riveted', 'Works on gas, electric, induction disc', 'Re-tinning service available'],
    specs: [['Capacity', '4 litres'], ['Material', '2 mm copper, tin lined'], ['Diameter', '24 cm'], ['Weight', '2.4 kg'], ['Care', 'Hand wash, no dishwasher']]
  }),
  P({
    slug: 'gojo-tigray-rug', title: 'Tigray Flatweave Rug — 170 × 240 cm',
    cat: 'home', sub: 'Textiles', price: 19800, was: 24000, art: 'rug', seller: 's4',
    rating: 4.9, reviews: 112, badges: ['handmade', 'deal'], shipDays: 7,
    colors: [['ember', 'Ochre & Rust'], ['forest', 'Forest & Bone'], ['cobalt', 'Indigo'], ['sand', 'Sand & Charcoal']],
    tagline: 'Six weeks on the loom. One weaver. Her name is on the label.',
    desc: 'Hand-spun highland wool, dyed with madder, indigo and weld, then flatwoven on a pit loom in Tigray. Reversible, and the pattern is structural rather than printed — it cannot wear off.',
    highlights: ['Hand-spun highland wool', 'Natural plant dyes only', 'Reversible flatweave', 'Signed by the weaver', '100% of the maker fee paid direct'],
    specs: [['Size', '170 × 240 cm'], ['Material', '100% hand-spun wool'], ['Weave', 'Flatweave, reversible'], ['Weight', '6.2 kg'], ['Care', 'Professional clean']]
  }),
  P({
    slug: 'gojo-mesob-basket', title: 'Mesob Serving Basket — Hand-Coiled',
    cat: 'craft', sub: 'Basketry', price: 5600, art: 'basket', seller: 's4',
    rating: 5.0, reviews: 341, badges: ['bestseller', 'handmade'],
    colors: [['ember', 'Classic Red'], ['forest', 'Green & Straw'], ['sand', 'Natural'], ['cobalt', 'Indigo']],
    tagline: 'The table that the meal is built around.',
    desc: 'Coiled from highland grass over a reed core, the way it has been made for a very long time. Dyed with natural pigment, tight enough to hold a full injera without a plate.',
    highlights: ['Hand-coiled highland grass', 'Natural pigment dyes', 'Food-safe, sealed interior', 'Two weeks of work per basket', 'Made by the Gojo weaving cooperative'],
    specs: [['Diameter', '52 cm'], ['Height', '58 cm with lid'], ['Material', 'Grass over reed core'], ['Care', 'Wipe with a damp cloth']]
  }),
  P({
    slug: 'gojo-highland-plant', title: 'Highland Fiddle-Leaf in Terracotta',
    cat: 'home', sub: 'Green', price: 3200, art: 'plant', seller: 's3',
    rating: 4.4, reviews: 89, shipDays: 2,
    colors: [['forest', 'Terracotta Pot'], ['ivory', 'Bone Pot'], ['obsidian', 'Charcoal Pot']],
    tagline: 'Grown in Bishoftu, so it is already used to your climate.',
    desc: 'A metre-tall fiddle-leaf raised in open shade outside Bishoftu — no shock when it reaches a Addis living room. Ships in a hand-thrown terracotta pot with drainage.',
    highlights: ['80–110 cm at delivery', 'Hand-thrown terracotta pot included', 'Acclimatised to highland conditions', 'Care card + first feed included', '30-day replacement guarantee'],
    specs: [['Height', '80–110 cm'], ['Pot', '24 cm terracotta, drained'], ['Light', 'Bright indirect'], ['Water', 'Weekly, let dry 3 cm down']]
  }),

  /* ---------------- Coffee & Spice ---------------- */
  P({
    slug: 'yirga-kochere-washed', title: 'Kochere Washed — Yirgacheffe, 1 kg Whole Bean',
    cat: 'coffee', sub: 'Single Origin', price: 1850, art: 'coffee', seller: 's5',
    rating: 5.0, reviews: 892, badges: ['bestseller', 'editors'], shipDays: 1,
    colors: [['forest', 'Whole Bean'], ['ember', 'Espresso Grind'], ['sand', 'Filter Grind']],
    tagline: 'Jasmine, bergamot, white peach. Roasted this week.',
    desc: 'Grown at 2,050 m in Kochere, fully washed at our own station, dried on raised beds for eleven days. We roast to order every Tuesday and it leaves the same afternoon.',
    highlights: ['Lot-traceable to the washing station', 'Roasted the week you order', 'Altitude 2,050 m, heirloom varietals', 'Cupping score 87.5', 'Resealable degassing valve bag'],
    specs: [['Origin', 'Kochere, Yirgacheffe'], ['Process', 'Fully washed, 11-day raised bed'], ['Altitude', '2,050 m'], ['Roast', 'Light–medium'], ['Score', '87.5 SCA'], ['Weight', '1 kg']]
  }),
  P({
    slug: 'yirga-guji-natural', title: 'Guji Natural — Anaerobic, 500 g',
    cat: 'coffee', sub: 'Single Origin', price: 1420, was: 1650, art: 'coffee', seller: 's5',
    rating: 4.9, reviews: 456, badges: ['deal'], shipDays: 1,
    colors: [['plum', 'Whole Bean'], ['ember', 'Espresso Grind']],
    tagline: 'Strawberry, cacao nib, and a finish like red wine.',
    desc: 'Seventy-two hours of anaerobic fermentation in sealed tanks before a slow twenty-one day dry. Loud, fruit-forward, and completely unlike a washed coffee from four kilometres away.',
    highlights: ['72 h anaerobic fermentation', '21-day slow sun dry', 'Cupping score 88.25', 'Micro-lot, 40 bags only'],
    specs: [['Origin', 'Uraga, Guji'], ['Process', 'Anaerobic natural'], ['Altitude', '1,950 m'], ['Roast', 'Light'], ['Score', '88.25 SCA'], ['Weight', '500 g']]
  }),

  /* ---------------- Beauty ---------------- */
  P({
    slug: 'adey-nectar-parfum', title: 'Nectar Eau de Parfum — Frankincense & Neroli',
    cat: 'beauty', sub: 'Fragrance', price: 6200, art: 'perfume', seller: 's6',
    rating: 4.6, reviews: 178, badges: ['new'],
    colors: [['plum', '50 ml'], ['sand', '100 ml']],
    tagline: 'Frankincense from Borena, distilled forty kilometres from where it is tapped.',
    desc: 'Green neroli over Borena frankincense and a base of vetiver and warm amber. Twenty-two percent concentration, so it stays put for eight hours without shouting.',
    highlights: ['22% parfum concentration', 'Ethiopian frankincense, single source', 'Alcohol from sugarcane, not petroleum', 'No synthetic musk', 'Refill programme at 40% off'],
    specs: [['Concentration', '22% EdP'], ['Top', 'Neroli, pink pepper, bergamot'], ['Heart', 'Frankincense, jasmine'], ['Base', 'Vetiver, amber, cedar'], ['Volume', '50 ml']]
  }),
  P({
    slug: 'adey-black-seed-oil', title: 'Cold-Pressed Black Seed Oil — 100 ml',
    cat: 'beauty', sub: 'Skincare', price: 1180, art: 'perfume', seller: 's6',
    rating: 4.7, reviews: 267,
    colors: [['olive', '100 ml'], ['forest', '250 ml']],
    tagline: 'One ingredient. Pressed below 40 °C.',
    desc: 'Nigella sativa pressed slowly at low temperature so the thymoquinone survives the process. Nothing added, nothing filtered out. Bottled in violet glass against light.',
    highlights: ['Single ingredient, cold-pressed', 'Pressed below 40 °C', 'Miron violet glass', 'Batch-tested for purity'],
    specs: [['Ingredients', '100% Nigella sativa oil'], ['Process', 'Cold-pressed < 40 °C'], ['Volume', '100 ml'], ['Shelf life', '24 months sealed']]
  }),

  /* ---------------- Outdoors ---------------- */
  P({
    slug: 'rift-tulu-gravel-bike', title: 'Tulu Gravel Bike — Steel Frame, 1×11',
    cat: 'outdoors', sub: 'Cycling', price: 78000, was: 89000, art: 'bike', seller: 's7',
    rating: 4.8, reviews: 64, badges: ['deal'], shipDays: 6,
    colors: [['teal', 'Lake Teal'], ['ember', 'Rift Red'], ['obsidian', 'Basalt']],
    sizes: ['S 52', 'M 54', 'L 56', 'XL 58'],
    tagline: 'Steel, because the road to Debre Libanos is not a road.',
    desc: 'A double-butted chromoly frame with clearance for 45 mm tyres, three bottle mounts and rack bosses front and rear. Steel absorbs what carbon transmits — over eight hours of corrugated gravel, you will care.',
    highlights: ['Double-butted 4130 chromoly', '45 mm tyre clearance', '1×11 drivetrain, 11–46 cassette', 'Flat-mount hydraulic discs', 'Rack + fender mounts, 3 bottle cages'],
    specs: [['Frame', '4130 double-butted chromoly'], ['Fork', 'Carbon, 12 mm thru-axle'], ['Drivetrain', '1×11, 40 T front'], ['Brakes', 'Hydraulic disc, 160 mm'], ['Weight', '10.4 kg (M)'], ['Warranty', 'Lifetime frame']]
  }),
  P({
    slug: 'rift-trail-pack-45', title: 'Trail 45 Trekking Pack',
    cat: 'outdoors', sub: 'Packs', price: 13400, art: 'backpack', seller: 's7',
    rating: 4.7, reviews: 142,
    colors: [['teal', 'Teal'], ['olive', 'Moss'], ['ember', 'Ember']],
    sizes: ['S/M torso', 'L/XL torso'],
    tagline: 'Forty-five litres, adjustable harness, made for the Bale traverse.',
    desc: 'A ventilated back panel and a genuinely adjustable torso length, so the load transfers to your hips instead of grinding on your shoulders at hour six.',
    highlights: ['45 L, adjustable torso length', 'Suspended mesh back panel', 'Rain cover in base pocket', '210D ripstop nylon, silicone-treated', 'Free field repairs, forever'],
    specs: [['Capacity', '45 L + 6 L collar'], ['Fabric', '210D ripstop nylon'], ['Weight', '1.48 kg'], ['Load rating', 'Up to 20 kg'], ['Warranty', 'Lifetime']]
  }),

  /* ---------------- Books & Paper ---------------- */
  P({
    slug: 'mesob-highland-anthology', title: 'The Highland Anthology — Smyth-Sewn Hardcover',
    cat: 'books', sub: 'Literature', price: 1980, art: 'books', seller: 's8',
    rating: 4.8, reviews: 209, badges: ['editors'],
    colors: [['cobalt', 'Indigo Cloth'], ['ember', 'Ochre Cloth'], ['forest', 'Forest Cloth']],
    tagline: 'Forty-one writers. Three languages. One binding that opens flat.',
    desc: 'A collection of contemporary Ethiopian short fiction and essays in Amharic, Afaan Oromoo and English, printed locally on cream 90 gsm and smyth-sewn so the spine survives a second reader.',
    highlights: ['41 contributors, 3 languages', 'Smyth-sewn, opens flat', 'Cream 90 gsm uncoated stock', 'Letterpress-blocked cloth cover', 'Printed and bound in Addis Ababa'],
    specs: [['Pages', '412'], ['Binding', 'Smyth-sewn hardcover'], ['Size', '145 × 210 mm'], ['Paper', '90 gsm cream uncoated'], ['ISBN', '978-99944-0-812-3']]
  }),
  P({
    slug: 'mesob-notebook-set', title: 'Field Notebook Set — Three, Letterpress',
    cat: 'books', sub: 'Stationery', price: 720, was: 900, art: 'books', seller: 's8',
    rating: 4.6, reviews: 384, badges: ['deal'],
    colors: [['sand', 'Bone'], ['forest', 'Forest'], ['ember', 'Ochre'], ['cobalt', 'Indigo']],
    tagline: 'Fountain-pen friendly. Actually.',
    desc: 'Three 48-page pocket notebooks on 100 gsm stock that will not feather under a wet nib. Letterpress covers printed on a 1962 Heidelberg that lives in our basement.',
    highlights: ['3 × 48 pages, 100 gsm', 'No feathering, minimal ghosting', 'Letterpress covers', 'Lies flat, saddle-stitched', 'Dot grid, ruled and blank — one of each'],
    specs: [['Count', '3 notebooks'], ['Pages', '48 each'], ['Paper', '100 gsm uncoated'], ['Size', '90 × 140 mm'], ['Ruling', 'Dot / ruled / blank']]
  }),

  /* ---------------- Handmade ---------------- */
  P({
    slug: 'gojo-brass-collar', title: 'Hand-Forged Brass Collar Necklace',
    cat: 'craft', sub: 'Jewellery', price: 4400, art: 'jewelry', seller: 's4',
    rating: 4.8, reviews: 156, badges: ['handmade'],
    colors: [['sand', 'Raw Brass'], ['ember', 'Warm Patina'], ['obsidian', 'Oxidised']],
    tagline: 'Forged from recycled brass, one at a time.',
    desc: 'Melted down from salvaged fittings, drawn into wire and forged over an anvil in Gondar. Each collar takes a day, and no two close quite the same way.',
    highlights: ['100% recycled brass', 'Hand-forged, one per day', 'Adjustable 38–46 cm', 'Nickel and lead free', 'Comes with a polishing cloth'],
    specs: [['Material', 'Recycled brass'], ['Length', 'Adjustable 38–46 cm'], ['Weight', '46 g'], ['Care', 'Polish with the included cloth']]
  }),
  P({
    slug: 'nile-serving-board', title: 'Olive Wood Serving Board — Live Edge',
    cat: 'craft', sub: 'Kitchen', price: 2900, art: 'cookware', seller: 's10',
    rating: 4.7, reviews: 198, badges: ['handmade'],
    colors: [['sand', 'Natural'], ['clay', 'Dark Oiled']],
    tagline: 'One slab, one tree, one live edge left alone.',
    desc: 'Cut from a single piece of highland olive wood and finished with food-safe walnut oil. The grain does what it wants — that is the reason to buy wood rather than composite.',
    highlights: ['Single-slab olive wood', 'Live edge preserved', 'Food-safe walnut oil finish', 'Each board is unique', 'Re-oil once a season'],
    specs: [['Size', 'approx. 45 × 22 × 2.5 cm'], ['Wood', 'Highland olive'], ['Finish', 'Walnut oil'], ['Care', 'Hand wash, re-oil seasonally']]
  })
];

/* ---------- attach seller objects & derived fields ---------- */
PRODUCTS.forEach((p) => {
  p.sellerObj = SELLERS[p.seller];
  p.cw = (p.colors[0] && p.colors[0][0]) || 'forest';
  p.discount = p.was ? Math.round((1 - p.price / p.was) * 100) : 0;
});

/* ---------- review generator (deterministic per product) ---------- */
const REVIEW_NAMES = ['Selam T.', 'Dawit M.', 'Hanna G.', 'Yonas A.', 'Meron K.', 'Abel B.', 'Tigist W.',
  'Nahom S.', 'Lidya F.', 'Bereket H.', 'Ruth D.', 'Samuel N.', 'Eden Z.', 'Kalkidan A.', 'Mikias T.'];
const REVIEW_BODIES = [
  'Arrived in two days, packaging was genuinely considered — no plastic anywhere. The quality is a step above what I expected at this price.',
  'I have been using it daily for three months now. Zero complaints. The seller answered a question about care within the hour.',
  'Bought one, then bought a second as a gift. That is the review.',
  'The photos undersell it. In person the finish is much richer, and the weight tells you it was not made in a hurry.',
  'Small mark on delivery, messaged the seller and they had a replacement out the same day. That is why I keep coming back to 4KILO.',
  'Exactly as described. I compared three sellers and this one had the clearest specs and the fairest shipping.',
  'Not the cheapest option on the site, and after two months I understand why. Buy once.',
  'Good, with one caveat — check the sizing chart carefully, it runs slightly generous. Otherwise excellent.',
  'The maker included a hand-written note. It sounds like a small thing and it absolutely was not.'
];

function reviewsFor(p, n = 5) {
  const h = (s) => { let x = 5381; for (const c of s) x = (x * 33 + c.charCodeAt(0)) >>> 0; return x; };
  const base = h(p.id);
  return Array.from({ length: n }, (_, i) => {
    const k = (base + i * 2654435761) >>> 0;
    const stars = [5, 5, 5, 4, 5, 4, 5, 3, 5][k % 9];
    return {
      name: REVIEW_NAMES[k % REVIEW_NAMES.length],
      stars,
      body: REVIEW_BODIES[(k >> 4) % REVIEW_BODIES.length],
      days: 2 + ((k >> 8) % 120),
      verified: (k >> 12) % 5 !== 0,
      variant: (p.colors[(k >> 3) % Math.max(1, p.colors.length)] || ['', 'Standard'])[1]
    };
  });
}

/* ---------- editorial ---------- */
const TESTIMONIALS = [
  { q: 'I have furnished most of a flat through 4KILO. What keeps me here is that I can see who made the thing and message them directly.', n: 'Selamawit Bekele', r: 'Architect · Addis Ababa', s: 'selam1' },
  { q: 'We moved our whole basket business onto 4KILO in 2021. Payouts land in three days and the cooperative now supports 140 weavers instead of 40.', n: 'Almaz Tesfaye', r: 'Gojo Collective · Bahir Dar', s: 'almaz2' },
  { q: 'Ordered coffee on a Tuesday, it was roasted Wednesday and on my desk Thursday. I have stopped buying from anywhere else.', n: 'Daniel Habte', r: 'Software engineer · Hawassa', s: 'daniel3' }
];

const HOW_IT_WORKS = [
  { t: 'Find something real', d: 'Every listing names its maker, its materials and where it was made. Filter by craft, origin or lead time — not just by price.' },
  { t: 'Buy with cover', d: '4KILO Protect holds your payment until the item arrives as described. If it does not, you are refunded in full within five days.' },
  { t: 'Track to the door', d: 'Live tracking from workshop to doorstep across 11 cities, with same-week delivery inside Addis Ababa.' },
  { t: 'Keep it going', d: 'Repairs, refills, re-soling and re-waxing are offered by the original maker. We index them so you can find them years later.' }
];

const SELL_STEPS = [
  { t: 'Open a shop in 10 minutes', d: 'Business licence or individual TIN, a bank account, and a phone. No listing fee, no monthly charge.' },
  { t: 'List with our photo studio', d: 'Bring your product to our Bole studio and we shoot, retouch and upload it for free on your first ten listings.' },
  { t: 'We handle the logistics', d: 'Print a label, hand it to a courier. Pickup is free above five orders a week.' },
  { t: 'Get paid every Friday', d: 'A flat 6% commission — no payment processing fee, no advertising surcharge, no hidden deduction.' }
];

const FAQS = [
  ['How does 4KILO Protect work?', 'When you pay, the money is held by 4KILO rather than passed straight to the seller. It is released 48 hours after delivery is confirmed. If the item never arrives, or arrives materially different from its listing, you open a claim from your order page and we refund in full — typically within five working days.'],
  ['What does delivery cost?', 'Inside Addis Ababa, delivery is 120 Br and usually same-week; free above 2,500 Br. To the other ten cities we serve it is 250–400 Br depending on weight, typically 2–5 days. Oversized items such as furniture are quoted at checkout.'],
  ['Can I return something I simply do not like?', 'Yes — 14 days from delivery on everything except perishables (coffee, botanicals) and made-to-order furniture. The item needs to come back in the condition it left in. Return shipping is on you unless the item was faulty or misdescribed.'],
  ['How are sellers vetted?', 'Every seller submits a trade licence or TIN, a bank account in the same name, and photographs of their workshop. Verified sellers carry a badge. We also audit the top 100 shops in person once a year.'],
  ['Which payment methods work?', 'telebirr, CBE Birr, Chapa, Amole, and international Visa or Mastercard. Cash on delivery is available inside Addis Ababa for orders under 5,000 Br.'],
  ['I am a maker — what does it cost to sell?', 'A flat 6% of the item price. That is the whole fee: no listing charge, no monthly subscription, no payment processing cut, no pay-to-rank advertising. Payouts run every Friday.']
];

const CITIES = ['Addis Ababa', 'Bahir Dar', 'Hawassa', 'Adama', 'Mekelle', 'Dire Dawa', 'Gondar', 'Jimma', 'Bishoftu', 'Dessie', 'Harar'];
