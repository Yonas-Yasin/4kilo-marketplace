/* ==========================================================================
   4KILO MARKETPLACE — Original artwork library
   Every illustration, icon, avatar and logo on this site is hand-authored
   SVG generated here. No stock photography, no external image assets.
   ========================================================================== */

const ART = (function () {
  let _n = 0;
  const uid = () => 'g' + (++_n).toString(36);

  /* ---------- colour helpers ---------- */
  const clamp = (v) => Math.max(0, Math.min(255, Math.round(v)));
  function hex2rgb(h) {
    h = h.replace('#', '');
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  const rgb2hex = (r, g, b) =>
    '#' + [r, g, b].map((v) => clamp(v).toString(16).padStart(2, '0')).join('');
  /** amt > 0 lightens toward white, amt < 0 darkens toward black */
  function shade(hex, amt) {
    const [r, g, b] = hex2rgb(hex);
    const t = amt > 0 ? 255 : 0;
    const p = Math.abs(amt);
    return rgb2hex(r + (t - r) * p, g + (t - g) * p, b + (t - b) * p);
  }
  /** very pale tint used for illustration backdrops */
  const wash = (hex) => shade(hex, 0.86);

  /** Build the working palette an illustration draws with. */
  function pal(base, accent) {
    return {
      base,
      hi: shade(base, 0.26),
      lo: shade(base, -0.24),
      xlo: shade(base, -0.45),
      xhi: shade(base, 0.6),
      wash: wash(base),
      wash2: shade(base, 0.75),
      accent: accent || '#D99A2B',
      ink: '#161A14',
      paper: '#FFFFFF'
    };
  }

  /* ---------- shared frame ---------- */
  /**
   * Wraps illustration body in a consistent 400x340 stage:
   * washed backdrop, halo, contact shadow.
   */
  function stage(body, c, opts = {}) {
    const g = uid();
    const halo = opts.halo === false ? '' :
      `<circle cx="200" cy="158" r="112" fill="url(#${g}h)"/>`;
    const shadow = opts.shadow === false ? '' :
      `<ellipse cx="200" cy="283" rx="104" ry="13" fill="url(#${g}s)"/>`;
    return `<svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="${g}b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${c.wash}"/><stop offset="1" stop-color="${c.wash2}"/>
    </linearGradient>
    <radialGradient id="${g}h" cx=".42" cy=".36" r=".72">
      <stop offset="0" stop-color="#fff" stop-opacity=".85"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${g}s" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="${c.xlo}" stop-opacity=".26"/>
      <stop offset="1" stop-color="${c.xlo}" stop-opacity="0"/>
    </radialGradient>
    ${opts.defs || ''}
  </defs>
  <rect width="400" height="340" fill="url(#${g}b)"/>
  ${halo}${shadow}
  ${body}
</svg>`;
  }

  /* ======================================================================
     PRODUCT ILLUSTRATIONS
     Each receives the palette `c` and returns SVG body markup.
     ====================================================================== */
  const SHAPES = {

    headphones(c) {
      const g = uid();
      return stage(`
  <g>
    <path d="M112 176v-24a88 88 0 0 1 176 0v24" fill="none" stroke="${c.lo}" stroke-width="19" stroke-linecap="round"/>
    <path d="M112 172v-20a88 88 0 0 1 176 0v20" fill="none" stroke="${c.base}" stroke-width="13" stroke-linecap="round"/>
    <path d="M126 150a74 74 0 0 1 148 0" fill="none" stroke="${c.hi}" stroke-width="3.5" stroke-linecap="round" opacity=".55"/>
    <g>
      <rect x="86" y="158" width="54" height="90" rx="26" fill="${c.xlo}"/>
      <rect x="90" y="154" width="52" height="88" rx="25" fill="${c.base}"/>
      <rect x="99" y="166" width="34" height="64" rx="17" fill="${c.xlo}" opacity=".55"/>
      <rect x="103" y="171" width="26" height="54" rx="13" fill="${c.lo}"/>
      <rect x="96" y="160" width="14" height="30" rx="7" fill="${c.xhi}" opacity=".35"/>
    </g>
    <g>
      <rect x="260" y="158" width="54" height="90" rx="26" fill="${c.xlo}"/>
      <rect x="258" y="154" width="52" height="88" rx="25" fill="${c.base}"/>
      <rect x="267" y="166" width="34" height="64" rx="17" fill="${c.xlo}" opacity=".55"/>
      <rect x="271" y="171" width="26" height="54" rx="13" fill="${c.lo}"/>
      <circle cx="284" cy="252" r="4" fill="${c.accent}"/>
    </g>
    <path d="M200 64v-8" stroke="${c.accent}" stroke-width="4" stroke-linecap="round" opacity=".0"/>
  </g>`, c, { defs: `<linearGradient id="${g}"><stop offset="0" stop-color="${c.hi}"/></linearGradient>` });
    },

    sneaker(c) {
      return stage(`
  <g>
    <path d="M76 236c-4-16 2-30 6-44 5-18 7-34 8-46 1-9 8-13 16-11l30 8c6 2 9 6 10 12l3 18 46 20c22 10 44 14 66 16 22 2 34 10 36 26 1 9-5 15-15 15H92c-9 0-14-5-16-14z" fill="${c.lo}"/>
    <path d="M76 230c-4-16 2-30 6-44 5-18 7-34 8-46 1-9 8-13 16-11l30 8c6 2 9 6 10 12l3 18 46 20c22 10 44 14 66 16 22 2 34 10 36 26 1 9-5 15-15 15H92c-9 0-14-5-16-14z" fill="${c.base}"/>
    <path d="M124 143l3 18 46 20c10 5 21 8 31 11-14 4-30 3-44-3-16-7-27-20-32-36z" fill="${c.hi}" opacity=".6"/>
    <path d="M90 140c1-9 8-13 16-11l30 8c6 2 9 6 10 12l-56-9z" fill="${c.xhi}" opacity=".5"/>
    <g stroke="${c.paper}" stroke-width="4.5" stroke-linecap="round" opacity=".92">
      <path d="M116 168l26 4"/><path d="M112 184l30 6"/><path d="M108 200l32 7"/>
    </g>
    <path d="M170 196c14 8 26 18 34 30" stroke="${c.accent}" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M74 244h242c8 0 14 6 14 14s-6 12-14 12H88c-10 0-16-6-17-15z" fill="${c.xlo}"/>
    <path d="M74 244h242c8 0 14 5 14 11H72z" fill="${c.paper}" opacity=".9"/>
    <circle cx="112" cy="258" r="3" fill="${c.paper}" opacity=".5"/>
    <circle cx="150" cy="258" r="3" fill="${c.paper}" opacity=".5"/>
    <circle cx="188" cy="258" r="3" fill="${c.paper}" opacity=".5"/>
    <circle cx="226" cy="258" r="3" fill="${c.paper}" opacity=".5"/>
  </g>`, c);
    },

    watch(c) {
      const g = uid();
      return stage(`
  <g>
    <path d="M170 96h60l-5-38a10 10 0 0 0-10-9h-30a10 10 0 0 0-10 9z" fill="${c.lo}"/>
    <path d="M170 224h60l-5 38a10 10 0 0 1-10 9h-30a10 10 0 0 1-10-9z" fill="${c.lo}"/>
    <g stroke="${c.xlo}" stroke-width="1.5" opacity=".4">
      <path d="M172 70h56M173 82h54M172 240h56M173 252h54"/>
    </g>
    <rect x="248" y="146" width="12" height="26" rx="5" fill="${c.xlo}"/>
    <circle cx="200" cy="160" r="66" fill="${c.xlo}"/>
    <circle cx="200" cy="160" r="62" fill="${c.base}"/>
    <circle cx="200" cy="160" r="52" fill="url(#${g}d)"/>
    <circle cx="200" cy="160" r="52" fill="none" stroke="${c.xhi}" stroke-width="1" opacity=".3"/>
    <g stroke="${c.paper}" stroke-width="2.5" stroke-linecap="round" opacity=".75">
      <path d="M200 116v8M200 196v8M244 160h-8M164 160h-8"/>
    </g>
    <g stroke="${c.paper}" stroke-width="1.5" stroke-linecap="round" opacity=".4">
      <path d="M222 122l-4 6M178 198l-4 6M238 182l-7-4M169 138l-7-4"/>
    </g>
    <path d="M200 160V128" stroke="${c.paper}" stroke-width="4" stroke-linecap="round"/>
    <path d="M200 160l24 14" stroke="${c.paper}" stroke-width="3" stroke-linecap="round"/>
    <path d="M200 160l-16 20" stroke="${c.accent}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="200" cy="160" r="4.5" fill="${c.accent}"/>
    <path d="M162 128a52 52 0 0 1 34-24" stroke="#fff" stroke-width="6" stroke-linecap="round" fill="none" opacity=".16"/>
  </g>`, c, {
        defs: `<radialGradient id="${g}d" cx=".36" cy=".3" r=".85">
        <stop offset="0" stop-color="${c.xlo}"/><stop offset="1" stop-color="#0B0D0A"/></radialGradient>`
      });
    },

    camera(c) {
      const g = uid();
      return stage(`
  <g>
    <path d="M158 108l10-18a10 10 0 0 1 9-5h46a10 10 0 0 1 9 5l10 18z" fill="${c.lo}"/>
    <rect x="82" y="104" width="236" height="146" rx="22" fill="${c.lo}"/>
    <rect x="82" y="104" width="236" height="140" rx="22" fill="${c.base}"/>
    <rect x="82" y="104" width="236" height="30" rx="22" fill="${c.hi}" opacity=".35"/>
    <rect x="94" y="180" width="212" height="60" rx="14" fill="${c.xlo}" opacity=".45"/>
    <g opacity=".5">
      <path d="M100 188h200M100 196h200M100 204h200M100 212h200" stroke="${c.xlo}" stroke-width="2"/>
    </g>
    <circle cx="200" cy="166" r="62" fill="${c.xlo}"/>
    <circle cx="200" cy="166" r="55" fill="${c.lo}"/>
    <circle cx="200" cy="166" r="44" fill="url(#${g}l)"/>
    <circle cx="200" cy="166" r="30" fill="#0C110E"/>
    <circle cx="200" cy="166" r="21" fill="url(#${g}i)"/>
    <circle cx="186" cy="150" r="9" fill="#fff" opacity=".38"/>
    <circle cx="214" cy="184" r="4" fill="${c.accent}" opacity=".7"/>
    <rect x="256" y="122" width="42" height="16" rx="8" fill="${c.xhi}" opacity=".5"/>
    <circle cx="112" cy="128" r="7" fill="${c.accent}"/>
    <rect x="120" y="86" width="34" height="20" rx="7" fill="${c.xlo}"/>
  </g>`, c, {
        defs: `<radialGradient id="${g}l" cx=".35" cy=".3" r=".8">
        <stop offset="0" stop-color="${c.hi}"/><stop offset="1" stop-color="${c.xlo}"/></radialGradient>
      <radialGradient id="${g}i" cx=".4" cy=".35" r=".8">
        <stop offset="0" stop-color="#5B7FA8"/><stop offset=".6" stop-color="#22364B"/><stop offset="1" stop-color="#0A0F14"/></radialGradient>`
      });
    },

    chair(c) {
      return stage(`
  <g>
    <path d="M132 262l-14 44M268 262l14 44M148 264l-6 42M252 264l6 42" stroke="${c.xlo}" stroke-width="9" stroke-linecap="round"/>
    <path d="M118 262c-6-48-4-88 6-116 6-17 20-26 40-28 24-3 48-3 72 0 20 2 34 11 40 28 10 28 12 68 6 116z" fill="${c.lo}"/>
    <path d="M122 258c-6-46-4-84 6-111 6-16 19-24 38-26 23-3 45-3 68 0 19 2 32 10 38 26 10 27 12 65 6 111z" fill="${c.base}"/>
    <path d="M146 132c34-5 74-5 108 0-4 34-4 72 0 106-34 5-74 5-108 0 4-34 4-72 0-106z" fill="${c.hi}" opacity=".45"/>
    <g stroke="${c.xlo}" stroke-width="2" opacity=".28">
      <path d="M172 122v148M200 120v152M228 122v148"/>
    </g>
    <path d="M104 252h192c10 0 17 7 17 16s-7 15-17 15H104c-10 0-17-6-17-15s7-16 17-16z" fill="${c.xlo}"/>
    <path d="M104 252h192c9 0 16 6 17 13H87c1-7 8-13 17-13z" fill="${c.accent}" opacity=".85"/>
    <ellipse cx="200" cy="118" rx="56" ry="8" fill="${c.xhi}" opacity=".3"/>
  </g>`, c);
    },

    lamp(c) {
      const g = uid();
      return stage(`
  <g>
    <path d="M200 150c40 0 70 30 70 66h-140c0-36 30-66 70-66z" fill="url(#${g}gl)" opacity=".55"/>
    <path d="M148 152h104l26 74H122z" fill="${c.base}"/>
    <path d="M148 152h52v74h-78z" fill="${c.hi}" opacity=".45"/>
    <path d="M122 226h156v10H122z" fill="${c.lo}"/>
    <ellipse cx="200" cy="152" rx="52" ry="9" fill="${c.xhi}" opacity=".6"/>
    <ellipse cx="200" cy="152" rx="52" ry="9" fill="none" stroke="${c.lo}" stroke-width="1.5"/>
    <circle cx="200" cy="205" r="15" fill="${c.accent}" opacity=".92"/>
    <circle cx="200" cy="205" r="9" fill="#FFF4DC"/>
    <path d="M197 236h6v42h-6z" fill="${c.xlo}"/>
    <path d="M158 288h84c6 0 10 4 10 9s-4 9-10 9h-84c-6 0-10-4-10-9s4-9 10-9z" fill="${c.xlo}"/>
    <path d="M170 278h60l6 10h-72z" fill="${c.lo}"/>
    <g stroke="${c.accent}" stroke-width="3" stroke-linecap="round" opacity=".5">
      <path d="M92 128l14 10M308 128l-14 10M200 96v-16"/>
    </g>
  </g>`, c, {
        defs: `<radialGradient id="${g}gl" cx=".5" cy="0" r="1">
        <stop offset="0" stop-color="${c.accent}" stop-opacity=".9"/>
        <stop offset="1" stop-color="${c.accent}" stop-opacity="0"/></radialGradient>`
      });
    },

    backpack(c) {
      return stage(`
  <g>
    <path d="M148 118c0-24 16-40 52-40s52 16 52 40" fill="none" stroke="${c.lo}" stroke-width="14"/>
    <path d="M110 156c0-32 24-56 90-56s90 24 90 56v92c0 16-11 26-28 26H138c-17 0-28-10-28-26z" fill="${c.lo}"/>
    <path d="M112 154c0-30 24-54 88-54s88 24 88 54v88c0 15-10 25-26 25H138c-16 0-26-10-26-25z" fill="${c.base}"/>
    <path d="M112 154c0-30 24-54 88-54v142H112z" fill="${c.hi}" opacity=".22"/>
    <path d="M112 168c22-14 54-20 88-20s66 6 88 20v22c-22-14-54-21-88-21s-66 7-88 21z" fill="${c.xlo}" opacity=".45"/>
    <path d="M146 210h108c11 0 18 7 18 17v34c0 6-5 11-11 11H139c-6 0-11-5-11-11v-34c0-10 7-17 18-17z" fill="${c.lo}"/>
    <path d="M146 210h108c10 0 17 6 18 15H128c1-9 8-15 18-15z" fill="${c.hi}" opacity=".5"/>
    <rect x="180" y="234" width="40" height="12" rx="6" fill="${c.accent}"/>
    <circle cx="200" cy="240" r="3.5" fill="${c.xlo}"/>
    <path d="M132 120c-10 22-14 46-12 72" stroke="${c.xhi}" stroke-width="4" stroke-linecap="round" fill="none" opacity=".35"/>
    <rect x="120" y="192" width="12" height="26" rx="6" fill="${c.xlo}"/>
    <rect x="268" y="192" width="12" height="26" rx="6" fill="${c.xlo}"/>
  </g>`, c);
    },

    coffee(c) {
      return stage(`
  <g>
    <path d="M128 120h144l14 152c1 12-8 22-20 22H134c-12 0-21-10-20-22z" fill="${c.lo}"/>
    <path d="M130 120h140l13 148c1 11-7 20-18 20H135c-11 0-19-9-18-20z" fill="${c.base}"/>
    <path d="M130 120h58v168h-53c-11 0-19-9-18-20z" fill="${c.hi}" opacity=".25"/>
    <path d="M120 100h160l-8 22H128z" fill="${c.xlo}"/>
    <path d="M124 92h152c5 0 8 4 8 8s-3 8-8 8H124c-5 0-8-4-8-8s3-8 8-8z" fill="${c.xhi}" opacity=".85"/>
    <rect x="152" y="160" width="96" height="86" rx="10" fill="${c.paper}" opacity=".93"/>
    <path d="M200 176a17 17 0 0 1 17 17 17 17 0 0 1-34 0 17 17 0 0 1 17-17z" fill="none" stroke="${c.accent}" stroke-width="3"/>
    <path d="M191 193c4-8 14-8 18 0" stroke="${c.accent}" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M200 176v34" stroke="${c.accent}" stroke-width="2.5"/>
    <g fill="${c.xlo}">
      <rect x="168" y="220" width="64" height="4" rx="2"/>
      <rect x="180" y="230" width="40" height="3" rx="1.5" opacity=".6"/>
    </g>
    <g stroke="${c.xlo}" stroke-width="3" stroke-linecap="round" opacity=".5" fill="none">
      <path d="M182 74c0-8 8-8 8-16s-8-8-8-16"/>
      <path d="M200 70c0-8 8-8 8-16s-8-8-8-16"/>
      <path d="M218 74c0-8 8-8 8-16s-8-8-8-16"/>
    </g>
  </g>`, c);
    },

    plant(c) {
      const leaf = (x, y, r, s) =>
        `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">
          <path d="M0 0c-28-6-46-30-42-58 28-4 52 14 58 40z" fill="${c.base}"/>
          <path d="M0 0c-22-10-34-30-32-52" stroke="${c.xlo}" stroke-width="2" fill="none" opacity=".4"/>
        </g>`;
      return stage(`
  <g>
    <path d="M200 210V128" stroke="${c.lo}" stroke-width="6" stroke-linecap="round"/>
    <path d="M200 180c-18-10-30-24-36-40M200 168c18-12 28-28 32-46" stroke="${c.lo}" stroke-width="5" stroke-linecap="round" fill="none"/>
    ${leaf(164, 142, -14, 1.05)}
    ${leaf(240, 128, 172, 1.0)}
    ${leaf(200, 96, 82, .82)}
    ${leaf(150, 190, -32, .78)}
    ${leaf(256, 186, 200, .74)}
    <path d="M142 208h116l-13 82c-1 9-9 15-18 15h-54c-9 0-17-6-18-15z" fill="${c.accent}"/>
    <path d="M142 208h58v97h-25c-9 0-17-6-18-15z" fill="#000" opacity=".1"/>
    <path d="M134 196h132c5 0 9 4 9 9v6H125v-6c0-5 4-9 9-9z" fill="${c.accent}"/>
    <path d="M134 196h132c5 0 9 4 9 9H125c0-5 4-9 9-9z" fill="#fff" opacity=".22"/>
    <path d="M154 240h92" stroke="#000" stroke-width="3" opacity=".12"/>
    <ellipse cx="200" cy="207" rx="56" ry="6" fill="#3A2A16" opacity=".55"/>
  </g>`, c);
    },

    laptop(c) {
      const g = uid();
      return stage(`
  <g>
    <path d="M118 92h164c8 0 14 6 14 14v122H104V106c0-8 6-14 14-14z" fill="${c.lo}"/>
    <rect x="114" y="102" width="172" height="116" rx="6" fill="url(#${g}s)"/>
    <rect x="114" y="102" width="172" height="116" rx="6" fill="none" stroke="${c.xlo}" stroke-width="1"/>
    <g opacity=".5">
      <rect x="128" y="118" width="52" height="6" rx="3" fill="#fff"/>
      <rect x="128" y="132" width="88" height="4" rx="2" fill="#fff" opacity=".6"/>
      <rect x="128" y="142" width="70" height="4" rx="2" fill="#fff" opacity=".6"/>
      <rect x="128" y="164" width="46" height="40" rx="6" fill="${c.accent}" opacity=".8"/>
      <rect x="182" y="164" width="46" height="40" rx="6" fill="#fff" opacity=".28"/>
      <rect x="236" y="164" width="46" height="40" rx="6" fill="#fff" opacity=".18"/>
    </g>
    <path d="M86 228h228l14 24c3 6-1 12-8 12H80c-7 0-11-6-8-12z" fill="${c.base}"/>
    <path d="M86 228h228l6 10H80z" fill="${c.hi}" opacity=".55"/>
    <rect x="168" y="248" width="64" height="6" rx="3" fill="${c.xlo}" opacity=".5"/>
    <circle cx="200" cy="96" r="2.5" fill="${c.xhi}"/>
  </g>`, c, {
        defs: `<linearGradient id="${g}s" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c.xlo}"/><stop offset="1" stop-color="#0C1410"/></linearGradient>`
      });
    },

    phone(c) {
      const g = uid();
      return stage(`
  <g>
    <rect x="136" y="60" width="128" height="230" rx="30" fill="${c.xlo}"/>
    <rect x="140" y="64" width="120" height="222" rx="27" fill="${c.base}"/>
    <rect x="147" y="71" width="106" height="208" rx="22" fill="url(#${g}s)"/>
    <rect x="180" y="71" width="40" height="12" rx="6" fill="${c.xlo}"/>
    <g opacity=".85">
      <rect x="160" y="100" width="46" height="5" rx="2.5" fill="#fff" opacity=".55"/>
      <rect x="160" y="112" width="80" height="4" rx="2" fill="#fff" opacity=".3"/>
      <rect x="160" y="132" width="80" height="52" rx="9" fill="${c.accent}" opacity=".75"/>
      <rect x="160" y="192" width="38" height="38" rx="8" fill="#fff" opacity=".2"/>
      <rect x="202" y="192" width="38" height="38" rx="8" fill="#fff" opacity=".14"/>
      <rect x="176" y="248" width="48" height="4" rx="2" fill="#fff" opacity=".35"/>
    </g>
    <rect x="264" y="110" width="4" height="30" rx="2" fill="${c.xlo}"/>
    <rect x="132" y="106" width="4" height="20" rx="2" fill="${c.xlo}"/>
    <g transform="translate(0 0)">
      <rect x="158" y="82" width="0" height="0"/>
    </g>
    <g opacity=".9">
      <rect x="284" y="96" width="52" height="66" rx="16" fill="${c.lo}" opacity=".0"/>
    </g>
  </g>`, c, {
        defs: `<linearGradient id="${g}s" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c.lo}"/><stop offset=".55" stop-color="${c.xlo}"/><stop offset="1" stop-color="#0A0F0C"/></linearGradient>`
      });
    },

    guitar(c) {
      return stage(`
  <g>
    <path d="M200 106c26 0 44 14 44 34 0 14-8 24-8 40 0 34 24 44 24 76 0 28-28 48-60 48s-60-20-60-48c0-32 24-42 24-76 0-16-8-26-8-40 0-20 18-34 44-34z" fill="${c.lo}"/>
    <path d="M200 110c24 0 41 13 41 31 0 13-8 23-8 39 0 32 23 42 23 72 0 26-26 45-56 45s-56-19-56-45c0-30 23-40 23-72 0-16-8-26-8-39 0-18 17-31 41-31z" fill="${c.base}"/>
    <path d="M159 141c0-18 17-31 41-31v242c-30 0-56-19-56-45 0-30 23-40 23-72 0-16-8-26-8-39z" fill="${c.hi}" opacity=".22"/>
    <circle cx="200" cy="196" r="27" fill="${c.xlo}"/>
    <circle cx="200" cy="196" r="27" fill="none" stroke="${c.accent}" stroke-width="4"/>
    <circle cx="200" cy="196" r="34" fill="none" stroke="${c.accent}" stroke-width="1.5" opacity=".5"/>
    <rect x="188" y="240" width="24" height="9" rx="3" fill="${c.xlo}"/>
    <rect x="190" y="46" width="20" height="76" rx="4" fill="${c.xlo}"/>
    <path d="M186 24h28c4 0 7 3 7 7v18h-42V31c0-4 3-7 7-7z" fill="${c.xlo}"/>
    <g stroke="${c.paper}" stroke-width="1.1" opacity=".8">
      <path d="M194 48v196M197 48v196M200 48v196M203 48v196M206 48v196"/>
    </g>
    <g fill="${c.accent}">
      <circle cx="182" cy="34" r="3"/><circle cx="182" cy="44" r="3"/>
      <circle cx="218" cy="34" r="3"/><circle cx="218" cy="44" r="3"/>
    </g>
    <path d="M190 122h20" stroke="${c.paper}" stroke-width="3"/>
  </g>`, c);
    },

    perfume(c) {
      const g = uid();
      return stage(`
  <g>
    <rect x="182" y="52" width="36" height="34" rx="6" fill="${c.xlo}"/>
    <rect x="186" y="56" width="28" height="26" rx="4" fill="${c.hi}" opacity=".5"/>
    <rect x="190" y="86" width="20" height="20" fill="${c.lo}"/>
    <path d="M144 122c0-10 8-18 18-18h76c10 0 18 8 18 18v140c0 12-9 22-21 22h-70c-12 0-21-10-21-22z" fill="${c.lo}" opacity=".55"/>
    <path d="M148 124c0-9 7-16 16-16h72c9 0 16 7 16 16v136c0 11-8 20-19 20h-66c-11 0-19-9-19-20z" fill="url(#${g}b)"/>
    <path d="M156 180h88v78c0 10-7 18-17 18h-54c-10 0-17-8-17-18z" fill="${c.base}" opacity=".92"/>
    <rect x="172" y="200" width="56" height="52" rx="6" fill="${c.paper}" opacity=".9"/>
    <text x="200" y="224" font-family="Georgia,serif" font-size="17" fill="${c.xlo}" text-anchor="middle" font-style="italic">4K</text>
    <path d="M178 234h44" stroke="${c.accent}" stroke-width="2"/>
    <text x="200" y="247" font-family="Helvetica,Arial" font-size="7" letter-spacing="2" fill="${c.xlo}" text-anchor="middle">PARFUM</text>
    <path d="M160 128c0-6 5-11 11-11h10v54h-21z" fill="#fff" opacity=".3"/>
  </g>`, c, {
        defs: `<linearGradient id="${g}b" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${c.xhi}" stop-opacity=".9"/>
        <stop offset=".45" stop-color="${c.hi}" stop-opacity=".55"/>
        <stop offset="1" stop-color="${c.lo}" stop-opacity=".7"/></linearGradient>`
      });
    },

    speaker(c) {
      const g = uid();
      return stage(`
  <g>
    <rect x="126" y="88" width="148" height="184" rx="40" fill="${c.lo}"/>
    <rect x="130" y="84" width="140" height="180" rx="38" fill="${c.base}"/>
    <rect x="130" y="84" width="60" height="180" rx="38" fill="${c.hi}" opacity=".2"/>
    <rect x="146" y="104" width="108" height="118" rx="28" fill="${c.xlo}" opacity=".65"/>
    <g fill="${c.xlo}" opacity=".8">
      ${Array.from({ length: 7 }, (_, r) =>
        Array.from({ length: 9 }, (_, i) =>
          `<circle cx="${157 + i * 11.5}" cy="${118 + r * 15}" r="2.6"/>`).join('')).join('')}
    </g>
    <rect x="158" y="236" width="84" height="14" rx="7" fill="${c.xlo}" opacity=".5"/>
    <circle cx="176" cy="243" r="3.5" fill="${c.accent}"/>
    <g stroke="${c.xhi}" stroke-width="2" opacity=".55" fill="none">
      <path d="M200 243h6M212 240v6M220 240v6"/>
    </g>
    <path d="M298 140c12 12 12 44 0 56M312 126c20 20 20 72 0 92" stroke="${c.accent}" stroke-width="4" stroke-linecap="round" fill="none" opacity=".55"/>
    <path d="M102 140c-12 12-12 44 0 56M88 126c-20 20-20 72 0 92" stroke="${c.accent}" stroke-width="4" stroke-linecap="round" fill="none" opacity=".55"/>
    <rect id="${g}" x="0" y="0" width="0" height="0"/>
  </g>`, c);
    },

    sunglasses(c) {
      const g = uid();
      return stage(`
  <g>
    <path d="M64 138c0-8 6-14 14-14h244c8 0 14 6 14 14v6c0 6-4 10-10 11l-14 2v10c0 34-26 60-58 60-30 0-54-22-58-52h-2c-4 30-28 52-58 52-32 0-58-26-58-60v-10l-14-2c-6-1-10-5-10-11z" fill="${c.lo}"/>
    <path d="M78 142h114c6 0 10 5 9 11l-3 24c-3 26-25 45-51 45-28 0-50-22-50-50v-20c0-6 4-10 9-10h-28z" fill="url(#${g}l)"/>
    <path d="M208 142h114c5 0 9 4 9 10v20c0 28-22 50-50 50-26 0-48-19-51-45l-3-24c-1-6 3-11 9-11z" fill="url(#${g}l)"/>
    <path d="M78 132h244c6 0 10 4 10 10v2H68v-2c0-6 4-10 10-10z" fill="${c.base}"/>
    <path d="M190 148h20c4 0 7 3 7 7v4h-34v-4c0-4 3-7 7-7z" fill="${c.base}"/>
    <path d="M88 150c14-4 34-4 48 0" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35" fill="none"/>
    <path d="M218 150c14-4 34-4 48 0" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".28" fill="none"/>
    <circle cx="200" cy="155" r="4" fill="${c.accent}"/>
  </g>`, c, {
        defs: `<linearGradient id="${g}l" x1="0" y1="0" x2=".6" y2="1">
        <stop offset="0" stop-color="${c.xlo}" stop-opacity=".92"/>
        <stop offset="1" stop-color="${c.base}" stop-opacity=".62"/></linearGradient>`
      });
    },

    jacket(c) {
      return stage(`
  <g>
    <path d="M152 88l48 22 48-22 46 26c9 5 13 15 11 25l-14 60-28-8v96c0 8-6 14-14 14H149c-8 0-14-6-14-14v-96l-28 8-14-60c-2-10 2-20 11-25z" fill="${c.lo}"/>
    <path d="M154 92l46 21 46-21 43 25c8 4 12 13 10 22l-13 55-26-7v92c0 7-5 13-12 13h-96c-7 0-12-6-12-13v-92l-26 7-13-55c-2-9 2-18 10-22z" fill="${c.base}"/>
    <path d="M154 92l46 21v186h-48c-7 0-12-6-12-13v-92l-26 7-13-55c-2-9 2-18 10-22z" fill="${c.hi}" opacity=".22"/>
    <path d="M200 113l-46-21 12 34 34 20 34-20 12-34z" fill="${c.xlo}" opacity=".5"/>
    <path d="M200 146v154" stroke="${c.xlo}" stroke-width="2.5" opacity=".55"/>
    <g fill="${c.accent}">
      <circle cx="207" cy="168" r="4"/><circle cx="207" cy="200" r="4"/>
      <circle cx="207" cy="232" r="4"/><circle cx="207" cy="264" r="4"/>
    </g>
    <path d="M148 236h34v10h-34zM218 236h34v10h-34z" fill="${c.xlo}" opacity=".45"/>
    <path d="M120 152l-10 42M280 152l10 42" stroke="${c.xlo}" stroke-width="2" opacity=".35"/>
  </g>`, c);
    },

    basket(c) {
      const w = (y, h, f) => `<path d="M${118 + (y - 130) * .12} ${y}h${164 - (y - 130) * .24}l-3 ${h}H${121 + (y - 130) * .12}z" fill="${f}"/>`;
      return stage(`
  <g>
    <path d="M112 128h176l-24 148c-2 12-12 20-24 20H160c-12 0-22-8-24-20z" fill="${c.lo}"/>
    <path d="M116 130h168l-23 142c-2 11-11 18-22 18h-78c-11 0-20-7-22-18z" fill="${c.base}"/>
    ${w(140, 12, c.accent)}${w(168, 12, c.xlo)}${w(196, 12, c.accent)}
    ${w(224, 12, c.xlo)}${w(252, 12, c.accent)}
    <g stroke="${c.paper}" stroke-width="1.6" opacity=".45">
      <path d="M140 132l-14 156M170 132l-9 156M200 132v156M230 132l9 156M260 132l14 156"/>
    </g>
    <path d="M104 116h192c6 0 11 5 11 11s-5 11-11 11H104c-6 0-11-5-11-11s5-11 11-11z" fill="${c.xlo}"/>
    <path d="M104 116h192c6 0 10 4 11 9H93c1-5 5-9 11-9z" fill="${c.accent}" opacity=".8"/>
    <path d="M200 116V88a34 34 0 0 0-34-34" stroke="${c.xlo}" stroke-width="7" fill="none" stroke-linecap="round" opacity=".0"/>
  </g>`, c);
    },

    cookware(c) {
      return stage(`
  <g>
    <path d="M296 176h34c9 0 16 7 16 16s-7 16-16 16h-34z" fill="${c.xlo}"/>
    <path d="M100 156h200v82c0 24-20 44-44 44H144c-24 0-44-20-44-44z" fill="${c.lo}"/>
    <path d="M104 158h192v78c0 22-18 40-40 40h-112c-22 0-40-18-40-40z" fill="${c.base}"/>
    <path d="M104 158h60v118h-20c-22 0-40-18-40-40z" fill="${c.hi}" opacity=".25"/>
    <ellipse cx="200" cy="156" rx="100" ry="16" fill="${c.xlo}"/>
    <ellipse cx="200" cy="152" rx="100" ry="16" fill="${c.hi}"/>
    <ellipse cx="200" cy="150" rx="82" ry="12" fill="${c.xlo}" opacity=".35"/>
    <rect x="188" y="120" width="24" height="26" rx="8" fill="${c.accent}"/>
    <circle cx="200" cy="118" r="11" fill="${c.xlo}"/>
    <path d="M120 250h160" stroke="${c.xlo}" stroke-width="3" opacity=".3"/>
    <path d="M156 100c0-10 10-10 10-20s-10-10-10-20M200 96c0-10 10-10 10-20s-10-10-10-20M244 100c0-10 10-10 10-20s-10-10-10-20"
      stroke="${c.xlo}" stroke-width="3" stroke-linecap="round" fill="none" opacity=".35"/>
  </g>`, c);
    },

    rug(c) {
      const band = (y, f, h) => `<rect x="86" y="${y}" width="228" height="${h}" fill="${f}"/>`;
      const zig = (y, f) => {
        let d = `M86 ${y}`;
        for (let x = 86; x < 314; x += 19) d += ` l9.5 -9 l9.5 9`;
        return `<path d="${d}" fill="none" stroke="${f}" stroke-width="3.5"/>`;
      };
      const dia = (y, f) => Array.from({ length: 6 }, (_, i) =>
        `<path d="M${105 + i * 38} ${y}l14 14-14 14-14-14z" fill="${f}"/>`).join('');
      return stage(`
  <g>
    <rect x="82" y="70" width="236" height="204" rx="4" fill="${c.lo}"/>
    <rect x="86" y="74" width="228" height="196" fill="${c.base}"/>
    ${band(74, c.xlo, 14)}${band(256, c.xlo, 14)}
    ${dia(96, c.accent)}
    ${zig(140, c.xlo)}
    ${band(154, c.accent, 10)}
    ${dia(178, c.xhi)}
    ${zig(228, c.xlo)}
    <g stroke="${c.hi}" stroke-width="1" opacity=".28">
      ${Array.from({ length: 24 }, (_, i) => `<path d="M${86 + i * 10} 74v196"/>`).join('')}
    </g>
    <g stroke="${c.xlo}" stroke-width="2.5" opacity=".7">
      ${Array.from({ length: 20 }, (_, i) => `<path d="M${90 + i * 12} 270v10"/>`).join('')}
      ${Array.from({ length: 20 }, (_, i) => `<path d="M${90 + i * 12} 64v10"/>`).join('')}
    </g>
  </g>`, c);
    },

    bike(c) {
      return stage(`
  <g>
    <circle cx="112" cy="216" r="62" fill="none" stroke="${c.xlo}" stroke-width="9"/>
    <circle cx="288" cy="216" r="62" fill="none" stroke="${c.xlo}" stroke-width="9"/>
    <g stroke="${c.lo}" stroke-width="2" opacity=".5">
      ${Array.from({ length: 10 }, (_, i) => {
        const a = (i * Math.PI) / 5;
        return `<path d="M112 216l${(Math.cos(a) * 56).toFixed(1)} ${(Math.sin(a) * 56).toFixed(1)}"/>
                <path d="M288 216l${(Math.cos(a) * 56).toFixed(1)} ${(Math.sin(a) * 56).toFixed(1)}"/>`;
      }).join('')}
    </g>
    <path d="M112 216l52-84h72l-40 84zM164 132l84 84M236 132l52 84" fill="none" stroke="${c.base}" stroke-width="10" stroke-linejoin="round"/>
    <path d="M236 132h30" stroke="${c.base}" stroke-width="8" stroke-linecap="round"/>
    <path d="M266 128c8-6 18-4 22 4" stroke="${c.xlo}" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M150 128h34l-8 14h-30z" fill="${c.accent}"/>
    <circle cx="196" cy="216" r="16" fill="none" stroke="${c.xlo}" stroke-width="6"/>
    <circle cx="196" cy="216" r="5" fill="${c.accent}"/>
    <path d="M196 216l16 22M196 216l-16-22" stroke="${c.xlo}" stroke-width="5" stroke-linecap="round"/>
    <circle cx="112" cy="216" r="8" fill="${c.lo}"/>
    <circle cx="288" cy="216" r="8" fill="${c.lo}"/>
  </g>`, c);
    },

    jewelry(c) {
      return stage(`
  <g>
    <path d="M112 96c0 68 40 116 88 116s88-48 88-116" fill="none" stroke="${c.lo}" stroke-width="7"/>
    <path d="M112 96c0 66 40 112 88 112s88-46 88-112" fill="none" stroke="${c.accent}" stroke-width="3.5"/>
    <g fill="${c.accent}">
      ${Array.from({ length: 15 }, (_, i) => {
        const t = i / 14, a = Math.PI * t;
        const x = 200 - Math.cos(a) * 88;
        const y = 96 + Math.sin(a) * 112;
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5"/>`;
      }).join('')}
    </g>
    <path d="M200 208l32 34-32 46-32-46z" fill="${c.base}"/>
    <path d="M200 208l32 34h-64z" fill="${c.hi}"/>
    <path d="M168 242h64l-32 46z" fill="${c.lo}" opacity=".85"/>
    <path d="M200 208l-14 34 14 46 14-46z" fill="${c.xhi}" opacity=".55"/>
    <path d="M186 216l-10 22" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>
    <g fill="${c.paper}" opacity=".9">
      <path d="M296 108l4 10 10 4-10 4-4 10-4-10-10-4 10-4z"/>
      <path d="M104 148l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/>
    </g>
  </g>`, c);
    },

    books(c) {
      const bk = (x, y, w, h, f, tilt) =>
        `<g transform="rotate(${tilt} ${x + w / 2} ${y + h})">
          <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${f}"/>
          <rect x="${x}" y="${y}" width="9" height="${h}" fill="#000" opacity=".14"/>
          <rect x="${x + 16}" y="${y + 10}" width="${w - 30}" height="4" rx="2" fill="#fff" opacity=".45"/>
          <rect x="${x + 16}" y="${y + h - 18}" width="${w - 44}" height="3" rx="1.5" fill="#fff" opacity=".3"/>
        </g>`;
      return stage(`
  <g>
    ${bk(96, 232, 208, 42, c.lo, 0)}
    ${bk(106, 194, 188, 38, c.base, -1.5)}
    ${bk(116, 158, 170, 36, c.accent, 1.6)}
    ${bk(126, 124, 150, 34, c.hi, -2.2)}
    <g transform="rotate(-8 200 100)">
      <path d="M140 74h120v46H140z" fill="${c.paper}"/>
      <path d="M140 74h120v46" fill="none" stroke="${c.xlo}" stroke-width="2"/>
      <path d="M200 74v46" stroke="${c.xlo}" stroke-width="2"/>
      <g stroke="${c.xlo}" stroke-width="1.5" opacity=".45">
        <path d="M150 88h40M150 96h40M150 104h30M210 88h40M210 96h40M210 104h30"/>
      </g>
    </g>
  </g>`, c);
    },

    bag(c) {
      return stage(`
  <g>
    <path d="M156 132V108a44 44 0 0 1 88 0v24" fill="none" stroke="${c.lo}" stroke-width="11"/>
    <path d="M104 132h192l16 132c2 14-9 26-23 26H111c-14 0-25-12-23-26z" fill="${c.lo}"/>
    <path d="M108 134h184l15 126c2 13-8 24-21 24H114c-13 0-23-11-21-24z" fill="${c.base}"/>
    <path d="M108 134h92v150h-86c-13 0-23-11-21-24z" fill="${c.hi}" opacity=".2"/>
    <path d="M96 176h208l3 24H93z" fill="${c.accent}" opacity=".9"/>
    <circle cx="200" cy="188" r="13" fill="${c.xlo}"/>
    <circle cx="200" cy="188" r="6" fill="${c.xhi}"/>
    <path d="M132 226h56M132 242h34" stroke="${c.xlo}" stroke-width="3" stroke-linecap="round" opacity=".35"/>
  </g>`, c);
    }
  };

  /* ---------- product colourways ---------- */
  const COLORWAYS = {
    obsidian: ['#2C3230', '#D99A2B'],
    forest: ['#2E7D5E', '#F0C874'],
    clay: ['#C2724C', '#3E5C4E'],
    sand: ['#C9A96A', '#3A4A42'],
    cobalt: ['#33559B', '#F0C874'],
    plum: ['#6B4373', '#E9B44C'],
    rose: ['#C4677A', '#3F5B52'],
    slate: ['#5A6B75', '#D99A2B'],
    olive: ['#6E7A45', '#E3B34A'],
    ember: ['#B3462F', '#EBC276'],
    ivory: ['#D8CFBE', '#2E7D5E'],
    teal: ['#2C6E70', '#E9B44C']
  };

  function product(kind, colorway) {
    const draw = SHAPES[kind] || SHAPES.bag;
    const cw = COLORWAYS[colorway] || COLORWAYS.forest;
    return draw(pal(cw[0], cw[1]));
  }

  /* ======================================================================
     BRAND MARK
     A stacked "4K" monogram inside a market-stall arch.
     ====================================================================== */
  function logo(mono) {
    const g = uid();
    const brand = mono ? 'currentColor' : `url(#${g}a)`;
    return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="4KILO">
  <defs>
    <linearGradient id="${g}a" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2E7D5E"/><stop offset="1" stop-color="#0F2E24"/>
    </linearGradient>
  </defs>
  <path d="M32 3 60 17v34a10 10 0 0 1-6 9L32 61 10 60a10 10 0 0 1-6-9V17z" fill="${brand}"/>
  <path d="M32 3 60 17v9L32 12 4 26v-9z" fill="${mono ? 'currentColor' : '#D99A2B'}" opacity="${mono ? '.45' : '1'}"/>
  <path d="M30 22v14h-9l9-14z" fill="none"/>
  <path d="M31.5 21v13.5H23z" fill="none" stroke="#FBF9F4" stroke-width="3.4" stroke-linejoin="round"/>
  <path d="M31.5 34.5v10" stroke="#FBF9F4" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M38.5 44.5V21M38.5 33l8-12M38.5 33l9 11.5" stroke="#FBF9F4" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;
  }

  /* ======================================================================
     HERO SCENE
     An isometric market stall arcade — the marketplace, illustrated.
     ====================================================================== */
  function hero() {
    const g = uid();
    const stall = (x, y, s, roofA, roofB, body, goods) => `
    <g transform="translate(${x} ${y}) scale(${s})">
      <path d="M0 40h120v96a10 10 0 0 1-10 10H10a10 10 0 0 1-10-10z" fill="${body}"/>
      <path d="M0 40h60v106H10a10 10 0 0 1-10-10z" fill="#fff" opacity=".12"/>
      <path d="M-12 40 60 4l72 36z" fill="${roofA}"/>
      <path d="M-12 40 60 4v36z" fill="${roofB}"/>
      <path d="M-12 40h144v10H-12z" fill="${roofB}" opacity=".8"/>
      <g>${goods}</g>
    </g>`;

    return `<svg viewBox="0 0 720 560" xmlns="http://www.w3.org/2000/svg" role="img"
   aria-label="Illustration of a 4KILO market arcade with stalls, produce, textiles and shoppers">
  <defs>
    <linearGradient id="${g}sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#F7EFE0"/><stop offset="1" stop-color="#EBE3D2"/>
    </linearGradient>
    <linearGradient id="${g}sun" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#F0C874"/><stop offset="1" stop-color="#D99A2B"/>
    </linearGradient>
    <radialGradient id="${g}glow" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#F0C874" stop-opacity=".55"/>
      <stop offset="1" stop-color="#F0C874" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="${g}clip"><rect width="720" height="560" rx="30"/></clipPath>
  </defs>

  <g clip-path="url(#${g}clip)">
    <rect width="720" height="560" fill="url(#${g}sky)"/>
    <circle cx="540" cy="150" r="180" fill="url(#${g}glow)"/>
    <circle cx="540" cy="150" r="66" fill="url(#${g}sun)"/>

    <!-- distant skyline -->
    <g opacity=".2" fill="#0F2E24">
      <rect x="30" y="230" width="52" height="140"/><rect x="92" y="196" width="40" height="174"/>
      <rect x="142" y="252" width="64" height="118"/><rect x="216" y="212" width="36" height="158"/>
      <rect x="262" y="244" width="58" height="126"/><rect x="330" y="188" width="44" height="182"/>
      <rect x="384" y="240" width="70" height="130"/><rect x="464" y="216" width="38" height="154"/>
      <rect x="512" y="256" width="62" height="114"/><rect x="584" y="204" width="46" height="166"/>
      <rect x="640" y="246" width="56" height="124"/>
    </g>
    <g opacity=".35">
      <path d="M0 372h720v18H0z" fill="#0F2E24"/>
    </g>

    <!-- back row of stalls -->
    <g opacity=".55">
      ${stall(70, 226, .78, '#2E7D5E', '#1E5B45', '#FBF9F4', '')}
      ${stall(470, 226, .78, '#B3392F', '#8E2C24', '#FBF9F4', '')}
    </g>

    <!-- ground -->
    <path d="M0 388h720v172H0z" fill="#E3DAC7"/>
    <g stroke="#C9BFA8" stroke-width="2" opacity=".8">
      <path d="M0 412h720M0 448h720M0 492h720M0 542h720"/>
      <path d="M120 388v172M300 388v172M480 388v172M640 388v172"/>
    </g>

    <!-- main stalls -->
    ${stall(96, 236, 1, '#D99A2B', '#B87A14', '#FFFFFF', `
      <rect x="16" y="66" width="88" height="10" rx="3" fill="#E3DAC7"/>
      <g>
        <circle cx="30" cy="58" r="9" fill="#B3462F"/><circle cx="50" cy="58" r="9" fill="#C2724C"/>
        <circle cx="70" cy="58" r="9" fill="#6E7A45"/><circle cx="90" cy="58" r="9" fill="#D99A2B"/>
        <circle cx="40" cy="46" r="8" fill="#8E2C24"/><circle cx="60" cy="46" r="8" fill="#2E7D5E"/>
        <circle cx="80" cy="46" r="8" fill="#B3462F"/>
      </g>
      <rect x="16" y="86" width="88" height="44" rx="5" fill="#F2EEE4"/>
      <g fill="#2E7D5E" opacity=".7">
        <rect x="24" y="94" width="30" height="12" rx="3"/><rect x="60" y="94" width="34" height="12" rx="3"/>
        <rect x="24" y="112" width="42" height="10" rx="3"/><rect x="72" y="112" width="22" height="10" rx="3"/>
      </g>`)}

    ${stall(300, 216, 1.1, '#2E7D5E', '#1E5B45', '#FFFFFF', `
      <rect x="14" y="60" width="92" height="72" rx="6" fill="#F2EEE4"/>
      <g>
        <rect x="22" y="68" width="34" height="26" rx="4" fill="#33559B"/>
        <rect x="62" y="68" width="36" height="26" rx="4" fill="#C4677A"/>
        <rect x="22" y="100" width="76" height="8" rx="3" fill="#D99A2B"/>
        <rect x="22" y="114" width="50" height="8" rx="3" fill="#6B4373"/>
        <rect x="78" y="114" width="20" height="8" rx="3" fill="#2C6E70"/>
      </g>`)}

    ${stall(520, 240, .95, '#B3462F', '#8E2C24', '#FFFFFF', `
      <rect x="16" y="62" width="88" height="14" rx="4" fill="#C9A96A"/>
      <rect x="16" y="82" width="88" height="14" rx="4" fill="#6E7A45"/>
      <rect x="16" y="102" width="88" height="14" rx="4" fill="#2C6E70"/>
      <rect x="16" y="122" width="60" height="10" rx="4" fill="#D99A2B"/>`)}

    <!-- hanging bulbs -->
    <path d="M40 214q180 46 340 0t340 22" fill="none" stroke="#0F2E24" stroke-width="2" opacity=".35"/>
    <g fill="#F0C874">
      ${Array.from({ length: 13 }, (_, i) => {
        const t = i / 12, x = 40 + t * 680;
        const y = 214 + Math.sin(t * Math.PI) * 34 + t * 12;
        return `<circle cx="${x.toFixed(0)}" cy="${(y + 8).toFixed(0)}" r="5"/>
                <path d="M${x.toFixed(0)} ${(y).toFixed(0)}v4" stroke="#0F2E24" stroke-width="1.5" opacity=".4"/>`;
      }).join('')}
    </g>

    <!-- shoppers -->
    <g>
      <g transform="translate(200 400)">
        <ellipse cx="0" cy="86" rx="26" ry="6" fill="#0F2E24" opacity=".14"/>
        <path d="M-16 26h32c7 0 12 6 11 13l-6 44h-42l-6-44c-1-7 4-13 11-13z" fill="#33559B"/>
        <path d="M-13 83h10l3 22h-13zM3 83h10l3 22h-13z" fill="#2C3230"/>
        <circle cx="0" cy="10" r="15" fill="#8A5A3B"/>
        <path d="M-15 8a15 15 0 0 1 30 0c0-10-6-16-15-16s-15 6-15 16z" fill="#2C2018"/>
        <path d="M16 40l20 12" stroke="#33559B" stroke-width="8" stroke-linecap="round"/>
        <rect x="30" y="48" width="26" height="24" rx="4" fill="#D99A2B"/>
        <path d="M36 48v-6a7 7 0 0 1 14 0v6" fill="none" stroke="#B87A14" stroke-width="3"/>
      </g>
      <g transform="translate(392 412)">
        <ellipse cx="0" cy="80" rx="24" ry="6" fill="#0F2E24" opacity=".14"/>
        <path d="M-15 24h30c7 0 12 6 11 13l-7 41h-38l-7-41c-1-7 4-13 11-13z" fill="#B3462F"/>
        <path d="M-12 78h10l2 20h-12zM2 78h10l2 20h-12z" fill="#2C3230"/>
        <circle cx="0" cy="8" r="14" fill="#6E4326"/>
        <path d="M-14 8c0-12 6-18 14-18s14 6 14 18c0-6-28-6-28 0z" fill="#1A1410"/>
        <path d="M-16 38l-18 14" stroke="#B3462F" stroke-width="8" stroke-linecap="round"/>
        <circle cx="-40" cy="58" r="12" fill="#2E7D5E"/>
      </g>
      <g transform="translate(576 396)">
        <ellipse cx="0" cy="90" rx="26" ry="6" fill="#0F2E24" opacity=".14"/>
        <path d="M-17 28h34c7 0 12 6 11 13l-7 47h-42l-7-47c-1-7 4-13 11-13z" fill="#6B4373"/>
        <path d="M-13 88h11l2 22h-13zM4 88h11l2 22h-13z" fill="#2C3230"/>
        <circle cx="0" cy="12" r="15" fill="#9C6B45"/>
        <path d="M-15 10c-2-12 5-20 15-20s17 8 15 20z" fill="#241A12"/>
      </g>
    </g>

    <!-- foreground produce crate -->
    <g transform="translate(60 452)">
      <path d="M0 20h96l-8 62H8z" fill="#C2724C"/>
      <path d="M0 20h96l-3 12H3z" fill="#A85C38"/>
      <g stroke="#8E4A2C" stroke-width="2" opacity=".5"><path d="M24 32l-3 50M48 32v50M72 32l3 50"/></g>
      <g><circle cx="20" cy="16" r="12" fill="#B3462F"/><circle cx="44" cy="12" r="13" fill="#D99A2B"/>
         <circle cx="70" cy="16" r="12" fill="#6E7A45"/><circle cx="32" cy="2" r="11" fill="#8E2C24"/>
         <circle cx="58" cy="2" r="11" fill="#2E7D5E"/></g>
    </g>
    <g transform="translate(600 470)">
      <path d="M0 16h80l-6 54H6z" fill="#2C6E70"/>
      <path d="M0 16h80l-2 10H2z" fill="#215557"/>
      <g fill="#F2EEE4" opacity=".85">
        <rect x="10" y="30" width="26" height="8" rx="3"/><rect x="44" y="30" width="26" height="8" rx="3"/>
        <rect x="10" y="44" width="60" height="8" rx="3"/>
      </g>
    </g>
  </g>
</svg>`;
  }

  /* ======================================================================
     AVATARS — deterministic geometric portraits from a seed string
     ====================================================================== */
  const SKIN = ['#8A5A3B', '#6E4326', '#A9764E', '#5C3A22', '#C08E62', '#7A4E2E'];
  const HAIR = ['#1A1410', '#2C2018', '#3B2A1C', '#241A12', '#141414'];
  const BGS = ['#2E7D5E', '#D99A2B', '#33559B', '#B3462F', '#6B4373', '#2C6E70', '#6E7A45', '#C4677A'];

  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return Math.abs(h);
  }

  function avatar(seed) {
    const h = hash(String(seed || 'a'));
    const bg = BGS[h % BGS.length];
    const skin = SKIN[(h >> 3) % SKIN.length];
    const hair = HAIR[(h >> 5) % HAIR.length];
    const style = (h >> 7) % 4;
    const shirt = BGS[(h >> 9) % BGS.length];
    const hairShapes = [
      `<path d="M18 34c-2-16 8-26 22-26s24 10 22 26c-2-8-10-12-22-12s-20 4-22 12z" fill="${hair}"/>`,
      `<circle cx="40" cy="30" r="23" fill="${hair}"/><circle cx="40" cy="38" r="18" fill="${skin}"/>`,
      `<path d="M17 36c0-18 10-28 23-28s23 10 23 28c0-10-4-14-10-14H27c-6 0-10 4-10 14z" fill="${hair}"/>
       <path d="M17 36c-3 10-2 20 3 26-6-14-3-22-3-26zM63 36c3 10 2 20-3 26 6-14 3-22 3-26z" fill="${hair}"/>`,
      `<path d="M20 32c0-14 9-24 20-24s20 10 20 24c0-6-40-6-40 0z" fill="${hair}"/>
       <circle cx="20" cy="34" r="7" fill="${hair}"/><circle cx="60" cy="34" r="7" fill="${hair}"/>`
    ];
    return `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Member avatar">
  <rect width="80" height="80" fill="${bg}"/>
  <circle cx="40" cy="26" r="30" fill="#fff" opacity=".08"/>
  <path d="M40 58c16 0 29 10 31 24H9c2-14 15-24 31-24z" fill="${shirt}"/>
  <path d="M40 58c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z" fill="${skin}" opacity=".9"/>
  <rect x="30" y="44" width="20" height="16" rx="8" fill="${skin}"/>
  <circle cx="40" cy="34" r="19" fill="${skin}"/>
  ${hairShapes[style]}
  <g fill="#1A1410"><circle cx="33" cy="35" r="2.2"/><circle cx="47" cy="35" r="2.2"/></g>
  <path d="M35 43c3 2.5 7 2.5 10 0" stroke="#1A1410" stroke-width="1.8" stroke-linecap="round" fill="none" opacity=".75"/>
</svg>`;
  }

  /* ======================================================================
     EMPTY / SUCCESS STATE ART
     ====================================================================== */
  function emptyCart() {
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Empty basket">
  <circle cx="100" cy="100" r="76" fill="#2E7D5E" opacity=".08"/>
  <path d="M48 72h104l-12 78c-1 9-9 16-18 16H78c-9 0-17-7-18-16z" fill="#2E7D5E" opacity=".85"/>
  <path d="M48 72h52v94H78c-9 0-17-7-18-16z" fill="#fff" opacity=".16"/>
  <path d="M44 62h112c4 0 7 3 7 7s-3 7-7 7H44c-4 0-7-3-7-7s3-7 7-7z" fill="#1E5B45"/>
  <path d="M74 62V48a26 26 0 0 1 52 0v14" fill="none" stroke="#1E5B45" stroke-width="7" stroke-linecap="round"/>
  <g stroke="#fff" stroke-width="3" opacity=".5"><path d="M78 96v46M100 96v46M122 96v46"/></g>
  <g fill="#D99A2B"><circle cx="152" cy="52" r="6"/><circle cx="40" cy="112" r="4"/><circle cx="164" cy="120" r="5"/></g>
</svg>`;
  }

  function successArt() {
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Order confirmed">
  <circle cx="100" cy="100" r="78" fill="#2E7D5E" opacity=".1"/>
  <circle cx="100" cy="100" r="56" fill="#2E7D5E"/>
  <path d="M74 100l18 19 36-40" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <g fill="#D99A2B">
    <path d="M168 46l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/>
    <path d="M30 60l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/>
    <circle cx="42" cy="150" r="5"/><circle cx="164" cy="142" r="7"/>
  </g>
</svg>`;
  }

  /* ======================================================================
     PARTNER / PAYMENT WORDMARKS (fictional, drawn as type + mark)
     ====================================================================== */
  function partner(name) {
    const marks = {
      telebirr: `<circle cx="12" cy="12" r="10" fill="currentColor" opacity=".2"/><path d="M7 12l3.5 3.5L17 9" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
      cbe: `<rect x="2" y="4" width="20" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2 9h20" stroke="currentColor" stroke-width="2"/>`,
      chapa: `<path d="M4 18L12 4l8 14z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>`,
      visa: `<path d="M3 8h18l-3 8H6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>`,
      dhl: `<path d="M2 8h12l-3 4H2zM6 14h14l-3 4H6z" fill="currentColor"/>`
    };
    const label = { telebirr: 'telebirr', cbe: 'CBE Birr', chapa: 'Chapa', visa: 'VISA', dhl: 'Swift Post' }[name] || name;
    return `<svg viewBox="0 0 132 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">
  <g>${marks[name] || marks.chapa}</g>
  <text x="30" y="17" font-family="Inter,Helvetica,Arial,sans-serif" font-size="14" font-weight="700"
        letter-spacing="-.4" fill="currentColor">${label}</text>
</svg>`;
  }

  return {
    product, logo, hero, avatar, emptyCart, successArt, partner,
    shapes: Object.keys(SHAPES), colorways: Object.keys(COLORWAYS), shade, pal, stage
  };
})();

if (typeof module !== 'undefined') module.exports = ART;
