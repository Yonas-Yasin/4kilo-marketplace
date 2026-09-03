/* ==========================================================================
   4KILO MARKETPLACE — Application shell
   Header, footer, cart, wishlist, search, theme, toasts, reveal.
   ========================================================================== */

/* ---------- tiny DOM helpers ---------- */
const qs = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => [...r.querySelectorAll(s)];
const on = (el, ev, fn, o) => el && el.addEventListener(ev, fn, o);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- money ---------- */
function money(n) {
  return CURRENCY.symbol + ' ' + Number(n).toLocaleString('en-US', { maximumFractionDigits: 0 });
}

/* ---------- icon set (stroke, 24px grid) ---------- */
const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>',
  cart: '<path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/>',
  heart: '<path d="M12 20s-7.5-4.6-9.3-9A5 5 0 0 1 12 6.6 5 5 0 0 1 21.3 11c-1.8 4.4-9.3 9-9.3 9z"/>',
  user: '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z"/>',
  chevron: '<path d="M9 6l6 6-6 6"/>',
  chevronDown: '<path d="M6 9l6 6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="M4 12.5l5 5L20 6.5"/>',
  shield: '<path d="M12 3l7.5 3v6c0 4.6-3.1 7.9-7.5 9-4.4-1.1-7.5-4.4-7.5-9V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
  truck: '<path d="M3 6.5h11v10H3z"/><path d="M14 10h4l3 3.2v3.3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-1.2 5"/><path d="M20 5v6h-6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z"/>',
  filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
  tag: '<path d="M3 12.5V4h8.5L21 13.5 13.5 21z"/><circle cx="7.5" cy="7.5" r="1.4"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  box: '<path d="M12 3l8 4.2v9.6L12 21l-8-4.2V7.2z"/><path d="M4 7.2l8 4.3 8-4.3M12 11.5V21"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  wallet: '<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18"/><circle cx="17" cy="14" r="1.3"/>',
  chat: '<path d="M20 12a7 7 0 0 1-7 7H8l-4 3v-4.5A7 7 0 0 1 8 5h5a7 7 0 0 1 7 7z"/>',
  pin: '<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  leaf: '<path d="M4 20c0-9 6-15 16-15 0 10-6 15-16 15z"/><path d="M4 20c4-6 8-9 12-10"/>',
  spark: '<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  minus: '<path d="M5 12h14"/>',
  trash: '<path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13"/>',
  eye: '<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/>',
  sliders: '<path d="M4 8h10M18 8h2M4 16h4M12 16h8"/><circle cx="16" cy="8" r="2"/><circle cx="10" cy="16" r="2"/>'
};
function icon(name, cls = '') {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}
function iconFilled(name) {
  return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

/* ---------- persistent state ---------- */
const Store = {
  read(k, d) { try { return JSON.parse(localStorage.getItem('4kilo:' + k)) ?? d; } catch { return d; } },
  write(k, v) { try { localStorage.setItem('4kilo:' + k, JSON.stringify(v)); } catch { } }
};

const Cart = {
  items: Store.read('cart', []),
  save() { Store.write('cart', this.items); this.sync(); },
  key(id, variant) { return id + '::' + (variant || ''); },
  add(id, qty = 1, variant = '', size = '') {
    const k = this.key(id, variant + size);
    const found = this.items.find((i) => i.k === k);
    if (found) found.q += qty;
    else this.items.push({ k, id, q: qty, variant, size });
    this.save();
  },
  setQty(k, q) {
    const it = this.items.find((i) => i.k === k);
    if (!it) return;
    it.q = Math.max(0, q);
    if (it.q === 0) this.items = this.items.filter((i) => i.k !== k);
    this.save();
  },
  remove(k) { this.items = this.items.filter((i) => i.k !== k); this.save(); },
  clear() { this.items = []; this.save(); },
  get count() { return this.items.reduce((n, i) => n + i.q, 0); },
  get lines() {
    return this.items.map((i) => {
      const p = PRODUCTS.find((x) => x.id === i.id);
      return p ? { ...i, p } : null;
    }).filter(Boolean);
  },
  get subtotal() { return this.lines.reduce((n, l) => n + l.p.price * l.q, 0); },
  get saved() { return this.lines.reduce((n, l) => n + (l.p.was ? (l.p.was - l.p.price) * l.q : 0), 0); },
  shipping() { return this.subtotal === 0 ? 0 : this.subtotal >= 2500 ? 0 : 120; },
  get total() { return this.subtotal + this.shipping(); },
  sync() {
    qsa('[data-cart-count]').forEach((n) => {
      n.textContent = this.count;
      n.dataset.count = this.count;
    });
    renderCartDrawer();
    document.dispatchEvent(new CustomEvent('cart:change'));
  }
};

const Wish = {
  ids: Store.read('wish', []),
  has(id) { return this.ids.includes(id); },
  toggle(id) {
    this.ids = this.has(id) ? this.ids.filter((x) => x !== id) : [...this.ids, id];
    Store.write('wish', this.ids);
    qsa('[data-fav]').forEach((b) => b.classList.toggle('is-on', this.has(b.dataset.fav)));
    qsa('[data-wish-count]').forEach((n) => { n.textContent = this.ids.length; n.dataset.count = this.ids.length; });
    return this.has(id);
  },
  sync() {
    qsa('[data-fav]').forEach((b) => b.classList.toggle('is-on', this.has(b.dataset.fav)));
    qsa('[data-wish-count]').forEach((n) => { n.textContent = this.ids.length; n.dataset.count = this.ids.length; });
  }
};

/* ---------- theme ---------- */
const Theme = {
  init() {
    const saved = Store.read('theme', null);
    const sys = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = saved || sys;
  },
  toggle() {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    Store.write('theme', next);
    qsa('[data-theme-btn]').forEach((b) => { b.innerHTML = icon(next === 'dark' ? 'sun' : 'moon'); });
  }
};
Theme.init();

/* ---------- toasts ---------- */
function toast(msg, ico = 'check') {
  let box = qs('.toasts');
  if (!box) { box = document.createElement('div'); box.className = 'toasts'; document.body.appendChild(box); }
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = icon(ico) + '<span>' + esc(msg) + '</span>';
  box.appendChild(t);
  setTimeout(() => { t.classList.add('is-out'); setTimeout(() => t.remove(), 320); }, 2600);
}

/* ---------- stars ---------- */
function stars(rating, size) {
  const full = Math.round(rating);
  return `<span class="stars" ${size ? `style="--s:${size}"` : ''} aria-label="${rating} out of 5">` +
    Array.from({ length: 5 }, (_, i) =>
      `<svg viewBox="0 0 24 24" fill="${i < full ? 'currentColor' : 'none'}" stroke="currentColor"
        stroke-width="1.5" class="${i < full ? '' : 'off'}">${ICONS.star}</svg>`).join('') + '</span>';
}

/* ---------- product card ---------- */
const BADGE_LABEL = {
  bestseller: ['Bestseller', 'badge--gold'],
  new: ['New', 'badge--green'],
  deal: ['Deal', 'badge--red'],
  editors: ["Editors' pick", 'badge--solid'],
  handmade: ['Handmade', 'badge--green']
};

function productCard(p, opts = {}) {
  const flags = (p.badges || []).map((b) => {
    const [label, cls] = BADGE_LABEL[b] || [b, ''];
    return `<span class="badge ${cls}">${label}</span>`;
  }).join('');
  const disc = p.discount ? `<span class="badge badge--red">-${p.discount}%</span>` : '';
  return `<article class="card reveal" data-id="${p.id}">
  <a class="card__media" href="product.html?id=${p.id}" aria-label="${esc(p.title)}">
    ${ART.product(p.art, p.cw)}
  </a>
  <div class="card__flags">${disc}${flags}</div>
  <button class="card__fav ${Wish.has(p.id) ? 'is-on' : ''}" data-fav="${p.id}"
          aria-label="Save ${esc(p.title)}">${icon('heart')}</button>
  ${opts.noQuick ? '' : `<div class="card__quick">
    <button class="btn btn--dark btn--sm btn--block" data-add="${p.id}">${icon('cart')} Add to basket</button>
  </div>`}
  <div class="card__body">
    <span class="card__cat">${esc(p.sub || '')}</span>
    <a class="card__title" href="product.html?id=${p.id}">${esc(p.title)}</a>
    <span class="card__seller">${p.sellerObj.verified ? icon('shield') : ''}${esc(p.sellerObj.name)}</span>
    <div class="card__foot">
      <span class="card__price">${money(p.price)}</span>
      ${p.was ? `<span class="card__was">${money(p.was)}</span>` : ''}
      <span class="card__rate">${iconFilled('star')}${p.rating.toFixed(1)}<span class="muted">(${p.reviews})</span></span>
    </div>
  </div>
</article>`;
}

/* ---------- header / footer ---------- */
function headerHTML() {
  const page = document.body.dataset.page || '';
  const nav = [
    ['browse.html', 'Browse', 'browse'],
    ['browse.html?cat=craft', 'Handmade', 'craft'],
    ['browse.html?sort=deals', 'Deals', 'deals'],
    ['sell.html', 'Sell on 4KILO', 'sell'],
    ['dashboard.html', 'Dashboard', 'dashboard']
  ];
  return `
<div class="strip" aria-label="Announcements">
  <div class="strip__track">
    ${[1, 2].map(() => `
      <span>${icon('truck')} Free delivery in Addis Ababa over <b>Br 2,500</b></span>
      <span>${icon('shield')} <b>4KILO Protect</b> on every order — refunded in full if it does not arrive as described</span>
      <span>${icon('leaf')} <b>1,240</b> verified makers, paid every Friday</span>
      <span>${icon('spark')} New this week: <b>Guji Anaerobic Natural</b> from Yirga Roasters</span>
    `).join('')}
  </div>
</div>
<header class="header" id="siteHeader">
  <div class="wrap header__bar">
    <a class="brand" href="index.html" aria-label="4KILO Marketplace home">
      <span class="brand__mark">${ART.logo()}</span>
      <span class="brand__name">4KILO<span>.</span></span>
    </a>

    <nav class="nav" aria-label="Primary">
      ${nav.map(([h, t, k]) => `<a href="${h}" ${page === k ? 'aria-current="page"' : ''}>${t}</a>`).join('')}
    </nav>

    <div class="spacer"></div>

    <div class="search" role="search">
      ${icon('search', 'search__icon')}
      <input type="search" id="siteSearch" placeholder="Search 1,240 makers and 8,400 products"
             autocomplete="off" aria-label="Search the marketplace">
      <span class="search__kbd hide-sm">/</span>
      <div class="suggest" id="siteSuggest" role="listbox"></div>
    </div>

    <button class="icon-btn" data-theme-btn aria-label="Switch colour theme">
      ${icon(document.documentElement.dataset.theme === 'dark' ? 'sun' : 'moon')}
    </button>
    <a class="icon-btn hide-sm" href="browse.html?view=saved" aria-label="Saved items">
      ${icon('heart')}<span class="icon-btn__count" data-wish-count data-count="0">0</span>
    </a>
    <button class="icon-btn" id="cartBtn" aria-label="Open basket">
      ${icon('cart')}<span class="icon-btn__count" data-cart-count data-count="0">0</span>
    </button>
    <button class="icon-btn menu-btn" id="menuBtn" aria-label="Open menu">${icon('menu')}</button>
  </div>
</header>

<div class="drawer-nav" id="mobileNav">
  <div class="scrim is-open" data-close-nav></div>
  <div class="drawer-nav__panel">
    <div class="row row--between" style="margin-bottom:18px">
      <span class="brand__name">Menu</span>
      <button class="icon-btn" data-close-nav aria-label="Close menu">${icon('close')}</button>
    </div>
    ${nav.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}
    <a href="browse.html?view=saved">Saved items</a>
    <div style="margin-top:22px">
      <a class="btn btn--primary btn--block" href="sell.html">Start selling</a>
    </div>
  </div>
</div>`;
}

function footerHTML() {
  const cols = [
    ['Marketplace', [['browse.html', 'Browse everything'], ['browse.html?sort=deals', "Today's deals"],
      ['browse.html?cat=craft', 'Handmade & craft'], ['browse.html?cat=coffee', 'Coffee & spice'],
      ['browse.html?sort=new', 'New this week']]],
    ['For makers', [['sell.html', 'Start selling'], ['dashboard.html', 'Seller dashboard'],
      ['sell.html#fees', 'Fees & payouts'], ['sell.html#studio', 'Photo studio'], ['sell.html#faq', 'Seller FAQ']]],
    ['Support', [['index.html#faq', 'Help centre'], ['index.html#faq', 'Delivery & returns'],
      ['index.html#protect', '4KILO Protect'], ['index.html#faq', 'Track an order'], ['index.html#faq', 'Contact us']]],
    ['Company', [['index.html#story', 'Our story'], ['index.html#makers', 'Meet the makers'],
      ['index.html#story', 'Careers'], ['index.html#story', 'Press'], ['index.html#story', 'Impact report']]]
  ];
  return `
<footer class="footer">
  <div class="wrap footer__grid">
    <div>
      <a class="brand" href="index.html">
        <span class="brand__mark">${ART.logo()}</span>
        <span class="brand__name">4KILO<span>.</span></span>
      </a>
      <p style="margin-top:14px;font-size:13.5px;max-width:34ch;color:#A9BFB2">
        A marketplace for things made by people you can name. Founded in Addis Ababa, 2019.
      </p>
      <form class="newsletter" onsubmit="event.preventDefault();toast('Subscribed — look for us on Thursday.');this.reset();">
        <input type="email" placeholder="Your email" required aria-label="Email address">
        <button class="btn btn--gold" type="submit">Join</button>
      </form>
      <div class="socials">
        <a href="#" aria-label="Instagram">${icon('grid')}</a>
        <a href="#" aria-label="Telegram">${icon('chat')}</a>
        <a href="#" aria-label="Newsletter">${icon('spark')}</a>
      </div>
    </div>
    ${cols.map(([h, links]) => `
      <div>
        <h5>${h}</h5>
        <ul>${links.map(([u, t]) => `<li><a href="${u}">${t}</a></li>`).join('')}</ul>
      </div>`).join('')}
  </div>
  <div class="wrap footer__bottom">
    <span>© ${new Date().getFullYear()} 4KILO Marketplace PLC · Addis Ababa, Ethiopia</span>
    <span class="row" style="gap:18px;flex-wrap:wrap">
      <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a>
      <span style="color:#5F7568">·</span>
      <span style="display:inline-flex;gap:14px;align-items:center;opacity:.7">
        ${['telebirr', 'cbe', 'chapa', 'visa'].map((n) =>
    `<span class="pay-badge">${ART.partner(n)}</span>`).join('')}
      </span>
    </span>
  </div>
</footer>`;
}

function cartDrawerHTML() {
  return `
<div class="scrim" id="scrim"></div>
<aside class="drawer" id="cartDrawer" aria-label="Basket" aria-hidden="true">
  <div class="drawer__head">
    <h3>Your basket <span class="muted mono" data-cart-count data-count="0">0</span></h3>
    <button class="icon-btn" id="cartClose" aria-label="Close basket">${icon('close')}</button>
  </div>
  <div class="drawer__body" id="cartBody"></div>
  <div class="drawer__foot" id="cartFoot"></div>
</aside>`;
}

function renderCartDrawer() {
  const body = qs('#cartBody'), foot = qs('#cartFoot');
  if (!body) return;
  const lines = Cart.lines;
  if (!lines.length) {
    body.innerHTML = `<div class="empty">
      ${ART.emptyCart()}
      <h4>Nothing in here yet</h4>
      <p>Have a look at what our makers sent in this week.</p>
      <a class="btn btn--primary" href="browse.html">${icon('arrow')} Browse the market</a>
    </div>`;
    foot.innerHTML = '';
    return;
  }
  body.innerHTML = lines.map((l) => `
    <div class="line">
      <a class="line__img" href="product.html?id=${l.p.id}">${ART.product(l.p.art, l.variant || l.p.cw)}</a>
      <div>
        <a class="line__t" href="product.html?id=${l.p.id}">${esc(l.p.title)}</a>
        <div class="line__m">${esc(l.p.sellerObj.name)}${l.size ? ' · Size ' + esc(l.size) : ''}</div>
        <div class="qty">
          <button data-q="-1" data-k="${l.k}" aria-label="Decrease quantity">−</button>
          <span>${l.q}</span>
          <button data-q="1" data-k="${l.k}" aria-label="Increase quantity">+</button>
        </div>
        <br><a class="link-x" data-rm="${l.k}" role="button">Remove</a>
      </div>
      <div class="line__p">${money(l.p.price * l.q)}
        ${l.p.was ? `<div class="line__m" style="text-decoration:line-through">${money(l.p.was * l.q)}</div>` : ''}
      </div>
    </div>`).join('');

  const ship = Cart.shipping();
  const gap = 2500 - Cart.subtotal;
  foot.innerHTML = `
    ${gap > 0 ? `<div style="font-size:12.5px;color:var(--muted);margin-bottom:12px">
        ${icon('truck')} Add ${money(gap)} more for free Addis delivery
        <div class="bar__track" style="margin-top:7px"><div class="bar__fill" style="width:${Math.min(100, Cart.subtotal / 25)}%"></div></div>
      </div>` : `<div class="badge badge--green" style="margin-bottom:12px">${icon('check')} Free delivery unlocked</div>`}
    <div class="totals">
      <div><span>Subtotal</span><span>${money(Cart.subtotal)}</span></div>
      ${Cart.saved ? `<div style="color:var(--danger)"><span>You saved</span><span>−${money(Cart.saved)}</span></div>` : ''}
      <div><span>Delivery</span><span>${ship ? money(ship) : 'Free'}</span></div>
      <div class="grand"><span>Total</span><span>${money(Cart.total)}</span></div>
    </div>
    <a class="btn btn--primary btn--lg btn--block" href="checkout.html">${icon('shield')} Secure checkout</a>
    <p class="muted" style="font-size:11.5px;text-align:center;margin-top:10px">
      Protected by 4KILO Protect · ${CURRENCY.rateNote}
    </p>`;
}

function openCart() {
  qs('#cartDrawer').classList.add('is-open');
  qs('#cartDrawer').setAttribute('aria-hidden', 'false');
  qs('#scrim').classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  qs('#cartDrawer').classList.remove('is-open');
  qs('#cartDrawer').setAttribute('aria-hidden', 'true');
  qs('#scrim').classList.remove('is-open');
  document.body.style.overflow = '';
}

/* ---------- search suggestions ---------- */
function searchIndex(q) {
  q = q.trim().toLowerCase();
  if (!q) return [];
  return PRODUCTS
    .map((p) => {
      const hay = (p.title + ' ' + p.sub + ' ' + p.cat + ' ' + p.sellerObj.name + ' ' + (p.tagline || '')).toLowerCase();
      let score = 0;
      if (p.title.toLowerCase().startsWith(q)) score += 10;
      if (hay.includes(q)) score += 5;
      q.split(/\s+/).forEach((w) => { if (hay.includes(w)) score += 1; });
      return { p, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || b.p.reviews - a.p.reviews)
    .slice(0, 6)
    .map((r) => r.p);
}

function wireSearch() {
  const input = qs('#siteSearch'), box = qs('#siteSuggest');
  if (!input) return;
  let idx = -1, results = [];

  const render = () => {
    if (!results.length) {
      box.innerHTML = `<div class="suggest__empty">No match. Try “coffee”, “leather” or “rug”.</div>`;
      return;
    }
    box.innerHTML = results.map((p, i) => `
      <a class="suggest__item ${i === idx ? 'is-active' : ''}" href="product.html?id=${p.id}" role="option">
        <span class="suggest__thumb">${ART.product(p.art, p.cw)}</span>
        <span>
          <span class="suggest__t">${esc(p.title)}</span>
          <span class="suggest__s">${esc(p.sellerObj.name)} · ${money(p.price)}</span>
        </span>
      </a>`).join('') +
      `<a class="suggest__item" href="browse.html?q=${encodeURIComponent(input.value)}">
        <span class="suggest__thumb" style="display:grid;place-items:center">${icon('search')}</span>
        <span class="suggest__t">See all results for “${esc(input.value)}”</span>
      </a>`;
  };

  on(input, 'input', () => {
    results = searchIndex(input.value); idx = -1;
    box.classList.toggle('is-open', input.value.trim().length > 0);
    render();
  });
  on(input, 'keydown', (e) => {
    if (e.key === 'Escape') { box.classList.remove('is-open'); input.blur(); }
    if (e.key === 'Enter' && input.value.trim()) {
      location.href = idx >= 0 && results[idx]
        ? 'product.html?id=' + results[idx].id
        : 'browse.html?q=' + encodeURIComponent(input.value);
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      idx = Math.max(-1, Math.min(results.length - 1, idx + (e.key === 'ArrowDown' ? 1 : -1)));
      render();
    }
  });
  on(input, 'focus', () => { if (input.value.trim()) box.classList.add('is-open'); });
  on(document, 'click', (e) => { if (!e.target.closest('.search')) box.classList.remove('is-open'); });
  on(document, 'keydown', (e) => {
    if (e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)) {
      e.preventDefault(); input.focus();
    }
  });
}

/* ---------- scroll reveal ---------- */
function wireReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
  qsa('.reveal').forEach((el, i) => {
    el.style.transitionDelay = Math.min(i % 8, 6) * 45 + 'ms';
    io.observe(el);
  });
}
window.wireReveal = wireReveal;

/* ---------- accordions ---------- */
function wireAccordions(root = document) {
  qsa('.acc__btn', root).forEach((b) => on(b, 'click', () => {
    const item = b.closest('.acc__item');
    const open = item.classList.contains('is-open');
    if (!item.closest('.acc').dataset.multi) {
      qsa('.acc__item', item.closest('.acc')).forEach((x) => x.classList.remove('is-open'));
    }
    item.classList.toggle('is-open', !open);
    b.setAttribute('aria-expanded', String(!open));
  }));
}
window.wireAccordions = wireAccordions;

/* ---------- boot ---------- */
function boot() {
  // Keep the skip link as the first focusable thing on the page.
  const skip = qs('.skip');
  if (skip) skip.insertAdjacentHTML('afterend', headerHTML());
  else document.body.insertAdjacentHTML('afterbegin', headerHTML());
  document.body.insertAdjacentHTML('beforeend', footerHTML() + cartDrawerHTML());

  Cart.sync();
  Wish.sync();
  wireSearch();
  wireReveal();
  wireAccordions();

  on(qs('#cartBtn'), 'click', openCart);
  on(qs('#cartClose'), 'click', closeCart);
  on(qs('#scrim'), 'click', closeCart);
  on(document, 'keydown', (e) => { if (e.key === 'Escape') closeCart(); });

  qsa('[data-theme-btn]').forEach((b) => on(b, 'click', () => Theme.toggle()));

  const mob = qs('#mobileNav');
  on(qs('#menuBtn'), 'click', () => { mob.classList.add('is-open'); document.body.style.overflow = 'hidden'; });
  qsa('[data-close-nav]', mob).forEach((b) =>
    on(b, 'click', () => { mob.classList.remove('is-open'); document.body.style.overflow = ''; }));

  // sticky header shadow
  const hdr = qs('#siteHeader');
  const onScroll = () => hdr.classList.toggle('is-stuck', window.scrollY > 8);
  on(window, 'scroll', onScroll, { passive: true }); onScroll();

  // delegated actions
  on(document, 'click', (e) => {
    const add = e.target.closest('[data-add]');
    if (add) {
      e.preventDefault();
      const p = PRODUCTS.find((x) => x.id === add.dataset.add);
      Cart.add(p.id, 1, p.cw);
      toast(p.title.split('—')[0].trim() + ' added to your basket');
      openCart();
      return;
    }
    const fav = e.target.closest('[data-fav]');
    if (fav) {
      e.preventDefault();
      const nowOn = Wish.toggle(fav.dataset.fav);
      toast(nowOn ? 'Saved to your list' : 'Removed from your list', 'heart');
      return;
    }
    const q = e.target.closest('[data-q]');
    if (q) {
      const line = Cart.items.find((i) => i.k === q.dataset.k);
      if (line) Cart.setQty(q.dataset.k, line.q + Number(q.dataset.q));
      return;
    }
    const rm = e.target.closest('[data-rm]');
    if (rm) { Cart.remove(rm.dataset.rm); toast('Removed from basket', 'trash'); }
  });
}

/* This file is loaded at the end of <body>, after the page's own markup has been
   parsed, so we boot immediately rather than waiting for DOMContentLoaded — the
   per-page inline scripts that follow depend on the header already existing. */
if (document.body) boot();
else document.addEventListener('DOMContentLoaded', boot);
