// ============================================================
// 1. DADOS DO SITE: nacionalidades, ligas, times e estatísticas
// ============================================================
const nations = [
  ['Alemanha', '🇩🇪'],
  ['Argélia', '🇩🇿'],
  ['Argentina', '🇦🇷'],
  ['Arábia Saudita', '🇸🇦'],
  ['Bélgica', '🇧🇪'],
  ['Brasil', '🇧🇷'],
  ['Cabo Verde', '🇨🇻'],
  ['Canadá', '🇨🇦'],
  ['Catar (Qatar)', '🇶🇦'],
  ['Costa do Marfim', '🇨🇮'],
  ['Croácia', '🇭🇷'],
  ['Dinamarca', '🇩🇰'],
  ['Egito', '🇪🇬'],
  ['Escócia', '🏴󠁧󠁢󠁳󠁣󠁴󠁿'],
  ['Espanha', '🇪🇸'],
  ['Estados Unidos', '🇺🇸'],
  ['Finlândia', '🇫🇮'],
  ['França', '🇫🇷'],
  ['Gales', '🏴󠁧󠁢󠁷󠁬󠁳󠁿'],
  ['Gana', '🇬🇭'],
  ['Hungria', '🇭🇺'],
  ['Indonésia', '🇮🇩'],
  ['Inglaterra', '🏴󠁧󠁢󠁥󠁮󠁧󠁿'],
  ['Iraque', '🇮🇶'],
  ['Irlanda', '🇮🇪'],
  ['Irlanda do Norte', '🇬🇧'],
  ['Islândia', '🇮🇸'],
  ['Itália', '🇮🇹'],
  ['Japão', '🇯🇵'],
  ['Marrocos', '🇲🇦'],
  ['México', '🇲🇽'],
  ['Noruega', '🇳🇴'],
  ['Países Baixos', '🇳🇱'],
  ['Polônia', '🇵🇱'],
  ['Portugal', '🇵🇹'],
  ['República Tcheca (Chequia)', '🇨🇿'],
  ['Romênia', '🇷🇴'],
  ['Suécia', '🇸🇪'],
  ['Ucrânia', '🇺🇦'],
];
const leagues = {
  'Bundesliga': {
    mark: 'BL',
    teams: [
      'FC Bayern München',
      'Borussia Dortmund',
      'Sport-Club Freiburg',
      'RasenBallsport Leipzig',
    ],
  },
  'Eredivisie': { mark: 'ED', teams: ['PSV Eindhoven', 'Ajax'] },
  'La Liga': {
    mark: 'LL',
    teams: [
      'Futbol Club Barcelona',
      'Real Madrid',
      'Atlético de Madrid',
      'Real Betis',
      'Real Sociedad',
    ],
  },
  'Liga Profesional de Fútbol': { mark: 'LPF', teams: ['River Plate', 'Boca Juniors', 'Racing Club', 'Independiente'] },
  'Liga Portugal Betclic': { mark: 'PT', teams: ['Sporting CP', 'Benfica', 'FC Porto'] },
  'Ligue 1': { mark: 'L1', teams: ['Paris Saint-Germain', 'Olympique de Marseille', 'Monaco', 'Lyon'] },
  'Major League Soccer': { mark: 'MLS', teams: ['Inter Miami CF', 'LA Galaxy', 'Los Angeles FC'] },
  'Premier League': {
    mark: 'PL',
    teams: [
      'Manchester City',
      'Arsenal',
      'Liverpool',
      'Chelsea',
      'Manchester United',
      'Tottenham Hotspur',
      'Newcastle',
    ],
  },
  'Roshn Saudi League': { mark: 'RSL', teams: ['Al-Hilal', 'Al-Nassr'] },
  'Serie A Enilive': { mark: 'SA', teams: ['Internazionale', 'Juventus', 'AC Milan', 'Napoli', 'AS Roma'] },
  'SPFL': { mark: 'SP', teams: ['Celtic'] },
  'Série A Brasileirão': {
    mark: 'BR',
    teams: [
      'Palmeiras',
      'Flamengo',
      'Botafogo',
      'Fortaleza',
      'São Paulo',
      'Internacional',
      'Cruzeiro',
      'Vasco da Gama',
      'Atlético Mineiro',
      'Corinthians',
      'Grêmio',
      'Athletico Paranaense',
      'Fluminense',
    ],
  },
};
const teamInitials = {
  'FC Bayern München': 'FCB',
  'Borussia Dortmund': 'BVB',
  'Sport-Club Freiburg': 'SCF',
  'RasenBallsport Leipzig': 'RBL',
  'PSV Eindhoven': 'PSV',
  'Ajax': 'AJA',
  'Futbol Club Barcelona': 'BAR',
  'Real Madrid': 'RMA',
  'Atlético de Madrid': 'ATM',
  'Real Betis': 'BET',
  'Real Sociedad': 'RSO',
  'River Plate': 'RIV',
  'Boca Juniors': 'BOC',
  'Racing Club': 'RAC',
  'Independiente': 'IND',
  'Sporting CP': 'SCP',
  'Benfica': 'SLB',
  'FC Porto': 'FCP',
  'Paris Saint-Germain': 'PSG',
  'Olympique de Marseille': 'OM',
  'Monaco': 'ASM',
  'Lyon': 'OL',
  'Inter Miami CF': 'MIA',
  'LA Galaxy': 'LAG',
  'Los Angeles FC': 'LAFC',
  'Manchester City': 'MCI',
  'Arsenal': 'ARS',
  'Liverpool': 'LIV',
  'Chelsea': 'CHE',
  'Manchester United': 'MUN',
  'Tottenham Hotspur': 'TOT',
  'Newcastle': 'NEW',
  'Al-Hilal': 'HIL',
  'Al-Nassr': 'NAS',
  'Internazionale': 'INT',
  'Juventus': 'JUV',
  'AC Milan': 'MIL',
  'Napoli': 'NAP',
  'AS Roma': 'ROM',
  'Celtic': 'CEL',
  'Palmeiras': 'PAL',
  'Flamengo': 'FLA',
  'Botafogo': 'BOT',
  'Fortaleza': 'FOR',
  'São Paulo': 'SAO',
  'Internacional': 'INT',
  'Cruzeiro': 'CRU',
  'Vasco da Gama': 'VAS',
  'Atlético Mineiro': 'CAM',
  'Corinthians': 'COR',
  'Grêmio': 'GRE',
  'Athletico Paranaense': 'CAP',
  'Fluminense': 'FLU',
};
const fieldStats = [
  ['PAC', 'Ritmo'],
  ['SHO', 'Finalização'],
  ['PAS', 'Passe'],
  ['DRI', 'Condução'],
  ['DEF', 'Defesa'],
  ['PHY', 'Físico'],
];
const keeperStats = [
  ['DIV', 'Elasticidade'],
  ['HAN', 'Manejo'],
  ['KIC', 'Chute'],
  ['REF', 'Reflexos'],
  ['SPD', 'Velocidade'],
  ['POS', 'Posicionamento'],
];
const defaults = {
  PAC: 89,
  SHO: 84,
  PAS: 78,
  DRI: 86,
  DEF: 42,
  PHY: 81,
  DIV: 82,
  HAN: 80,
  KIC: 78,
  REF: 86,
  SPD: 51,
  POS: 84,
};
// ============================================================
// 2. ESTADO DO SITE E FUNÇÕES AUXILIARES
// ============================================================
const $ = id => document.getElementById(id);
let photoData = null;
let activeStats = { ...defaults };
const nationInput = $('nationInput');
const leagueInput = $('leagueInput');
const teamInput = $('teamInput');
const positionInput = $('positionInput');
function fillDatalist(id, items) {
  $(id).innerHTML = items
    .map(x => `<option value="${escapeHtml(x)}"></option>`)
    .join('');
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]));
}
fillDatalist('nationOptions', nations.map(n => n[0]));
fillDatalist('leagueOptions', Object.keys(leagues));
function leagueForTeam(team) { return Object.keys(leagues).find(l => leagues[l].teams.includes(team)); }
function currentLeague() {
  return Object.keys(leagues).find(
    l => l.toLowerCase() === leagueInput.value.trim().toLowerCase(),
  );
}
function currentTeam() { const l = leagueForTeam(teamInput.value.trim()); return l ? teamInput.value.trim() : null; }
function updateTeamOptions() {
  const league = currentLeague();
  const teams = league
    ? leagues[league].teams
    : Object.values(leagues).flatMap(item => item.teams);

  fillDatalist('teamOptions', teams);

  if (league && !leagues[league].teams.includes(teamInput.value)) {
    teamInput.value = leagues[league].teams[0];
  }

  if (!league && teamInput.value && !currentTeam()) {
    teamInput.value = '';
  }

  $('teamHint').textContent = league
    ? `Escolha um time da liga ${league}.`
    : 'Selecione uma liga para filtrar os times, ou escolha um time para preencher a liga.';

  updateAffiliations();
}
// ============================================================
// 3. IMAGENS: bandeiras, logotipos de ligas e escudos dos times
// Para trocar uma imagem, comece por leagueImages/teamAssetNames.
// ============================================================
const nationCodes = {
  'Alemanha': 'de',
  'Argélia': 'dz',
  'Argentina': 'ar',
  'Arábia Saudita': 'sa',
  'Bélgica': 'be',
  'Brasil': 'br',
  'Cabo Verde': 'cv',
  'Canadá': 'ca',
  'Catar (Qatar)': 'qa',
  'Costa do Marfim': 'ci',
  'Croácia': 'hr',
  'Dinamarca': 'dk',
  'Egito': 'eg',
  'Escócia': 'gb-sct',
  'Espanha': 'es',
  'Estados Unidos': 'us',
  'Finlândia': 'fi',
  'França': 'fr',
  'Gales': 'gb-wls',
  'Gana': 'gh',
  'Hungria': 'hu',
  'Indonésia': 'id',
  'Inglaterra': 'gb-eng',
  'Iraque': 'iq',
  'Irlanda': 'ie',
  'Irlanda do Norte': 'gb-nir',
  'Islândia': 'is',
  'Itália': 'it',
  'Japão': 'jp',
  'Marrocos': 'ma',
  'México': 'mx',
  'Noruega': 'no',
  'Países Baixos': 'nl',
  'Polônia': 'pl',
  'Portugal': 'pt',
  'República Tcheca (Chequia)': 'cz',
  'Romênia': 'ro',
  'Suécia': 'se',
  'Ucrânia': 'ua',
};
// Nome do arquivo de cada liga. Os arquivos ficam na pasta 'league-logos'.
// Altere somente o nome do arquivo entre aspas, mantendo a extensão.
const leagueImages = {
  'Bundesliga': 'league_bundesliga.png',
  'Eredivisie': 'league_eredivisie.png',
  'La Liga': 'league_la-liga.png',
  'Liga Profesional de Fútbol': 'league_liga-profesional-de-futbol.png',
  'Liga Portugal Betclic': 'league_liga-portugal.png',
  'Ligue 1': 'league_ligue-1.png',
  'Major League Soccer': 'league_mls.png',
  'Premier League': 'league_premier-league.png',
  'Roshn Saudi League': 'league_roshn-saudi-league.png',
  'Serie A Enilive': 'league_serie-a.png',
  'SPFL': 'league_spfl.png',
  'Série A Brasileirão': 'league_brasileirao.png',
};

// Nomes de arquivos alternativos na Wikimedia Commons.
// O código tenta cada nome até encontrar uma imagem que carregue.
const leagueCommonsFiles = {
  // Nomes de arquivos baseados nos títulos indicados nas fontes fornecidas.
  'Bundesliga': ['Bundesliga logo (2017).png', 'Bundesliga logo.svg'],
  'Eredivisie': ['Eredivisie nuovo logo.png', 'Eredivisie logo.svg'],
  'La Liga': ['LaLiga logo 2023.svg', 'LaLiga logo.svg'],
  'Liga Profesional de Fútbol': ['Logo lpf afa.png', 'Liga Profesional de Fútbol logo.svg'],
  'Liga Portugal Betclic': ['Liga Portugal Betclic 2023.png', 'Liga Portugal logo.svg'],
  'Ligue 1': ['Ligue 1 2024 Logo.png', 'Ligue 1 logo.svg'],
  // Para estas ligas, o material fornecido aponta o site, mas não a URL direta do arquivo.
  'Major League Soccer': ['Major League Soccer logo.svg', 'MLS crest logo.svg'],
  'Premier League': ['Premier League Logo.svg', 'Premier League logo.svg'],
  'Roshn Saudi League': ['Saudi Pro League logo.svg', 'Saudi Professional League logo.svg'],
  'Serie A Enilive': ['Serie A Enilive logo.png', 'Serie A logo 2024.svg', 'Serie A logo.svg'],
  'SPFL': ['Scottish Professional Football League logo.svg', 'SPFL logo.svg'],
  'Série A Brasileirão': [
    'Campeonato Brasileiro Série A logo (2024).svg',
    'Brasileiro Série A logo (2024).svg',
  ],
};

// Nome do arquivo de cada escudo. Os arquivos ficam na pasta 'club-logos'.
// A chave precisa ser exatamente igual ao nome do time na lista 'leagues'.
const teamAssetNames = {
  'FC Bayern München': 'clubs_bayern-munich.png',
  'Borussia Dortmund': 'clubs_borussia-dortmund.png',
  'Futbol Club Barcelona': 'club_barcelona.png',
  'Real Madrid': 'club_real-madrid.png',
  'Atlético de Madrid': 'club_atletico-madrid.png',
  'Real Betis': 'club_real-betis.png',
  'Real Sociedad': 'club_real-sociedad.png',
  'PSV Eindhoven': 'club_psv.png',
  'Ajax': 'club_ajax.png',
  'River Plate': 'club_river-plate.png',
  'Boca Juniors': 'club_boca-juniors.png',
  'Sporting CP': 'club_sporting-cp.png',
  'Benfica': 'club_benfica.png',
  'FC Porto': 'club_porto.png',
  'Paris Saint-Germain': 'clubs_psg.png',
  'Olympique de Marseille': 'club_marseille.png',
  'Inter Miami CF': 'clubs_inter-miami.png',
  'LA Galaxy': 'clubs_la-galaxy.png',
  'Los Angeles FC': 'clubs_los-angeles-fc.png',
  'Manchester City': 'clubs_manchester-city.png',
  'Arsenal': 'clubs_arsenal.png',
  'Liverpool': 'clubs_liverpool.png',
  'Chelsea': 'clubs_chelsea.png',
  'Manchester United': 'clubs_manchester-united.png',
  'Tottenham Hotspur': 'clubs_tottenham-hotspur.png',
  'Newcastle': 'clubs_newcastle-united.png',
  'Internazionale': 'clubs_inter-milan.png',
  'Juventus': 'clubs_juventus.png',
  'AC Milan': 'clubs_ac-milan.png',
  'Napoli': 'clubs_napoli.png',
  'AS Roma': 'clubs_roma.png',
  'Palmeiras': 'club_palmeiras.png',
  'Flamengo': 'club_flamengo.png',
  'Botafogo': 'club_botafogo.png',
  'São Paulo': 'club_sao-paulo.png',
  'Corinthians': 'club_corinthians.png',
  'Grêmio': 'club_gremio.png',
  'Fluminense': 'club_fluminense.png',
  'Cruzeiro': 'club_cruzeiro.png',
  'Vasco da Gama': 'club_vasco-da-gama.png',
  'Atlético Mineiro': 'club_atletico-mineiro.png',
  'Internacional': 'club_internacional.png',
};
// Endereço principal do repositório de imagens.
// Se mudar de repositório, atualize esta URL.
const assetBase = 'https://sachawd.github.io/wc26-assets/';
function setImageSymbol(el, urls, fallback, kind) {
  // Tenta fontes alternativas; se todas falharem, mostra um emblema legível com as iniciais.
  const candidates = [...new Set((Array.isArray(urls) ? urls : [urls]).filter(Boolean))];
  // Último recurso embutido no próprio site: evita emblemas vazios quando
  // servidores externos falham ou não possuem o arquivo solicitado.
  const safeLabel = String(fallback || 'YP').replace(/[&<>"']/g, '').slice(0, 5);
  const shieldSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 112">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#d9f99d"/>
          <stop offset="1" stop-color="#65a30d"/>
        </linearGradient>
      </defs>
      <path d="M50 4 91 18 86 67 50 106 14 67 9 18Z" fill="#111827" stroke="url(#g)" stroke-width="5"/>
      <path d="M50 14 80 24 76 63 50 90 24 63 20 24Z" fill="#1f2937"/>
      <text
        x="50"
        y="59"
        text-anchor="middle"
        dominant-baseline="middle"
        font-family="Arial,sans-serif"
        font-size="${safeLabel.length > 3 ? 19 : 25}"
        font-weight="900"
        fill="#ecfccb"
      >${safeLabel}</text>
    </svg>
  `;
  const fallbackImage = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(shieldSvg);
  candidates.push(fallbackImage);
  const attemptId = (el._imageAttempt || 0) + 1;
  el._imageAttempt = attemptId;
  el.classList.add('image-symbol', `image-symbol-${kind}`);
  el.classList.remove('has-image');
  el.innerHTML = '';
  let index = 0;
  const tryNext = () => {
    if (el._imageAttempt !== attemptId)
      return;
    if (index >= candidates.length) {
      el.innerHTML = '';
      el.classList.remove('image-symbol', `image-symbol-${kind}`, 'has-image');
      el.textContent = fallback;
      el.setAttribute('aria-label', fallback);
      return;
    }
    const img = document.createElement('img');
    img.alt = '';
    img.loading = 'eager';
    img.decoding = 'async';
    img.onerror = () => {
      if (el._imageAttempt !== attemptId)
        return; index++; tryNext();
    };
    img.onload = () => {
      if (el._imageAttempt !== attemptId)
        return; el.classList.add('has-image'); el.setAttribute('aria-label', fallback);
    };
    img.src = candidates[index];
    el.innerHTML = '';
    el.appendChild(img);
  };
  tryNext();
}
// Wikimedia Commons transforma o nome do arquivo em uma URL de imagem.
 // Se o nome não existir exatamente no Commons, a próxima alternativa será tentada.
function filePath(name) {
  return 'https://commons.wikimedia.org/wiki/Special:FilePath/' +
    encodeURIComponent(name);
}
// Arquivos adicionais sugeridos pelos títulos das fontes fornecidas.
 // Os nomes são tentativas: o título de uma página nem sempre é o nome exato
 // do arquivo hospedado, então o carregador continua para a próxima opção.
const teamSourceFiles = {
  'FC Bayern München': ['FC Bayern München Logo 2017.png'],
  'Borussia Dortmund': ['Borussia Dortmund logo.svg'],
  'Sport-Club Freiburg': ['SC Freiburg.png'],
  'RasenBallsport Leipzig': ['RB Leipzig 2020 Logo.png'],
  'PSV Eindhoven': ['PSV Eindhoven escudo.png'],
  'Ajax': ['AFC Ajax Amsterdam.svg'],
  'Futbol Club Barcelona': ['FCBarcelona.svg'],
  'Real Madrid': ['Real Madrid CF Logo transparent PNG.png'],
  'Atlético de Madrid': ['Atletico Madrid Logo.png'],
  'Real Betis': ['Real Betis Logo.png'],
  'Real Sociedad': ['Real Sociedad Logo.png'],
  'River Plate': ['River Plate Logo.png'],
  'Boca Juniors': ['Boca Juniors Logo.png'],
  'Racing Club': ['Racing Club Logo.png'],
  'Independiente': ['Independiente Logo.png'],
  'Sporting CP': ['Sporting CP Logo.png'],
  'Benfica': ['Benfica Logo.png'],
  'FC Porto': ['FC Porto Logo.png'],
  'Paris Saint-Germain': ['Paris Saint-Germain Logo.png'],
  'Olympique de Marseille': ['Olympique de Marseille Logo.png'],
  'Monaco': ['Monaco Logo.png'],
  'Lyon': ['Lyon Logo.png'],
  'Inter Miami CF': ['Inter Miami Logo.png'],
  'LA Galaxy': ['LA Galaxy Logo.png'],
  'Los Angeles FC': ['Los Angeles FC Logo.png'],
  'Manchester City': ['Manchester City Logo.png'],
  'Arsenal': ['Arsenal Logo.png'],
  'Liverpool': ['Liverpool Logo.png'],
  'Chelsea': ['Chelsea Logo.png'],
  'Manchester United': ['Manchester United Logo.png'],
  'Tottenham Hotspur': ['Tottenham Hotspur Logo.png'],
  'Newcastle': ['Newcastle United Logo.png'],
  'Al-Hilal': ['Al Hilal Logo.png'],
  'Al-Nassr': ['Al Nassr Logo.png'],
  'Internazionale': ['Inter Milan Logo.png'],
  'Juventus': ['Juventus Logo.png'],
  'AC Milan': ['AC Milan Logo.png'],
  'Napoli': ['Napoli Logo.png'],
  'AS Roma': ['AS Roma Logo.png'],
  'Celtic': ['Celtic FC logo.png'],
  'Palmeiras': ['Palmeiras Logo.png'],
  'Flamengo': ['Flamengo Logo.png'],
  'Botafogo': ['Botafogo Logo.png'],
  'Fortaleza': ['Fortaleza Logo.png'],
  'São Paulo': ['São Paulo Logo.png'],
  'Internacional': ['Internacional Logo.png'],
  'Cruzeiro': ['Cruzeiro Logo.png'],
  'Vasco da Gama': ['Vasco da Gama Logo.png'],
  'Atlético Mineiro': ['Atlético Mineiro Logo.png'],
  'Corinthians': ['Corinthians Logo.png'],
  'Grêmio': ['Grêmio Logo.png'],
  'Athletico Paranaense': ['Athletico Paranaense Logo.png'],
  'Fluminense': ['Fluminense Logo.png'],
};

function teamLogoUrls(team) {
  const urls = [];

  // 1. Arquivos adicionais citados na lista de fontes recebida.
  for (const sourceFile of (teamSourceFiles[team] || [])) {
    urls.push(filePath(sourceFile));
  }

  const fileName = teamAssetNames[team];

  // 1. Primeiro tenta o repositório principal de escudos.
  if (fileName) {
    urls.push(`${assetBase}club-logos/${fileName}`);

    // Alguns repositórios usam "club_" e outros usam "clubs_".
    const alternateName = fileName.startsWith('clubs_')
      ? fileName.replace(/^clubs_/, 'club_')
      : fileName.startsWith('club_')
        ? fileName.replace(/^club_/, 'clubs_')
        : null;

    if (alternateName) {
      urls.push(`${assetBase}club-logos/${alternateName}`);
    }
  }

  // 2. Nomes de arquivos conhecidos na Wikimedia Commons.
  const knownFiles = {
     'FC Bayern München': ['FC Bayern München Logo 2017.png', 'FC Bayern München.svg', 'FC Bayern München logo.svg'],
    'Borussia Dortmund': ['Borussia Dortmund logo.svg', 'Borussia Dortmund Logo.svg'],
    'Sport-Club Freiburg': ['SC Freiburg.png', 'SC Freiburg.svg', 'SC Freiburg logo.svg'],
    'RasenBallsport Leipzig': ['RB Leipzig 2020 Logo.png', 'RB Leipzig.svg', 'RB Leipzig logo.svg'],
    'PSV Eindhoven': ['PSV Eindhoven escudo.png', 'PSV Eindhoven.svg', 'PSV Eindhoven logo.svg'],
    'Ajax': ['AFC Ajax Amsterdam.svg', 'AFC Ajax logo.svg', 'Ajax Amsterdam.svg'],
    'Futbol Club Barcelona': ['FCBarcelona.svg', 'FC Barcelona (crest).svg', 'FC Barcelona logo.svg'],
    'Real Madrid': ['Real Madrid CF Logo transparent PNG.png', 'Real Madrid CF.svg', 'Real Madrid CF logo.svg'],
    'Atlético de Madrid': ['Atletico Madrid Logo.png', 'Atletico Madrid 2017 logo.svg', 'Atlético de Madrid logo.svg'],
    'Real Betis': ['Real Betis Logo.png', 'Real Betis Balompié.svg', 'Real Betis logo.svg'],
    'Real Sociedad': ['Real Sociedad Logo.png', 'Real Sociedad logo.svg', 'Real Sociedad de Fútbol.svg'],
    'River Plate': ['Club Atlético River Plate logo.svg', 'River Plate logo.svg'],
    'Boca Juniors': ['Boca Juniors logo.svg', 'Club Atlético Boca Juniors logo.svg'],
    'Racing Club': ['Racing Club de Avellaneda.svg', 'Racing Club logo.svg'],
    'Independiente': ['Club Atlético Independiente.svg', 'Independiente logo.svg'],
    'Sporting CP': ['Sporting Clube de Portugal.svg', 'Sporting CP logo.svg'],
    'Benfica': ['SL Benfica logo.svg', 'Sport Lisboa e Benfica.svg'],
    'FC Porto': ['FC Porto.svg', 'FC Porto logo.svg'],
    'Paris Saint-Germain': ['Paris Saint-Germain F.C..svg', 'Paris Saint-Germain logo.svg'],
    'Olympique de Marseille': ['Olympique de Marseille logo.svg', 'Olympique de Marseille.svg'],
    'Monaco': ['AS Monaco FC.svg', 'AS Monaco logo.svg'],
    'Lyon': ['Olympique Lyonnais.svg', 'Olympique Lyonnais logo.svg'],
    'Inter Miami CF': ['Inter Miami CF logo.svg', 'Inter Miami CF logo.png'],
    'LA Galaxy': ['LA Galaxy logo.svg', 'LA Galaxy.svg'],
    'Los Angeles FC': ['Los Angeles FC logo.svg', 'Los Angeles FC.svg'],
    'Manchester City': ['Manchester City FC badge.svg', 'Manchester City FC logo.svg'],
    'Arsenal': ['Arsenal FC.svg', 'Arsenal FC logo.svg'],
    'Liverpool': ['Liverpool FC.svg', 'Liverpool FC logo.svg'],
    'Chelsea': ['Chelsea FC.svg', 'Chelsea FC logo.svg'],
    'Manchester United': ['Manchester United FC crest.svg', 'Manchester United FC logo.svg'],
    'Tottenham Hotspur': ['Tottenham Hotspur.svg', 'Tottenham Hotspur FC logo.svg'],
    'Newcastle': ['Newcastle United Logo.svg', 'Newcastle United FC logo.svg'],
    'Al-Hilal': ['Al-Hilal FC Logo.svg', 'Al Hilal SFC logo.svg'],
    'Al-Nassr': ['Al-Nassr FC Logo.svg', 'Al Nassr FC logo.svg'],
    'Internazionale': ['Inter Milan logo.svg', 'Inter Milan 2021.svg'],
    'Juventus': ['Juventus FC 2017 logo.svg', 'Juventus logo.svg'],
    'AC Milan': ['AC Milan logo.svg', 'Logo of AC Milan.svg'],
    'Napoli': ['SSC Napoli.svg', 'SSC Napoli logo.svg'],
    'AS Roma': ['AS Roma logo.svg', 'AS Roma.svg'],
    'Celtic': ['Celtic FC.svg', 'Celtic FC logo.svg'],
    'Palmeiras': ['Palmeiras_logo.svg', 'Sociedade Esportiva Palmeiras.svg'],
    'Flamengo': ['Flamengo_braz_logo.svg', 'Clube de Regatas do Flamengo logo.svg'],
    'Botafogo': ['Botafogo de Futebol e Regatas.svg', 'Botafogo FR logo.svg'],
    'Fortaleza': ['Fortaleza Esporte Clube.svg', 'Fortaleza EC logo.svg'],
    'São Paulo': ['São Paulo FC (oficial) - Escudo.svg', 'São Paulo FC logo.svg'],
    'Internacional': ['Sport Club Internacional logo.svg', 'SC Internacional.svg'],
    'Cruzeiro': ['Cruzeiro Esporte Clube (logo).svg', 'Cruzeiro EC logo.svg'],
    'Vasco da Gama': ['CR Vasco da Gama logo.svg', 'Club de Regatas Vasco da Gama.svg'],
    'Atlético Mineiro': ['Clube Atlético Mineiro.svg', 'Atlético Mineiro logo.svg'],
    'Corinthians': ['Sport Club Corinthians Paulista.svg', 'Corinthians Paulista logo.svg'],
    'Grêmio': ['Grêmio FBPA logo.svg', 'Grêmio Foot-Ball Porto Alegrense.svg'],
    'Athletico Paranaense': ['Club Athletico Paranaense.svg', 'Athletico Paranaense logo.svg'],
    'Fluminense': ['Fluminense FC.svg', 'Fluminense Football Club logo.svg'],
  };

  if (knownFiles[team]) {
    for (const file of knownFiles[team]) {
      urls.push(filePath(file));
    }
  }

  // 3. Últimas tentativas automáticas antes de mostrar o escudo alternativo.
  urls.push(
    filePath(`${team} logo.svg`),
    filePath(`${team}.svg`),
    filePath(`${team} logo.png`),
  );

  return urls;
}
function updateAffiliations() {
  const nation = nations.find(x => x[0].toLowerCase() === nationInput.value.trim().toLowerCase());
  const code = nationCodes[nation?.[0]];
  const flagUrl = code ? `https://flagcdn.com/w80/${code}.png` : '';
  if (flagUrl) {
    setImageSymbol($('nationFlag'), [flagUrl], nation?.[1] || '🌐', 'flag');
    setImageSymbol($('cardFlag'), [flagUrl], nation?.[1] || '🌐', 'flag-card');
  }
  else {
    $('nationFlag').textContent = '🌐';
    $('cardFlag').textContent = '🌐';
  }
  const league = currentLeague();
  const team = teamInput.value.trim();
  const mark = league ? leagues[league].mark : 'YP';
  if (league) {
    const file = leagueImages[league];
    const urls = [];
    if (file) {
      urls.push(assetBase + 'league-logos/' + file);
    }

    // Tenta os nomes específicos do Wikimedia Commons indicados para cada liga.
    const commonsFiles = leagueCommonsFiles[league] || [];
    for (const commonsFile of commonsFiles) {
      urls.push(filePath(commonsFile));
    }

    // Últimas tentativas genéricas caso os nomes específicos não funcionem.
    urls.push(
      filePath(league + '.svg'),
      filePath(league + ' logo.svg'),
      filePath(league + '.png'),
    );
    setImageSymbol($('leagueSymbol'), urls, mark, 'league');
    setImageSymbol($('cardLeagueMark'), urls, mark, 'league-card');
  }
  else {
    $('leagueSymbol').textContent = 'YP';
    $('cardLeagueMark').textContent = 'YP';
  }
  const initials = teamInitials[team] || 'YP';
  if (team && leagueForTeam(team)) {
    const urls = teamLogoUrls(team);
    setImageSymbol($('teamSymbol'), urls, initials, 'crest');
    setImageSymbol($('cardCrest'), urls, initials, 'crest-card');
  }
  else {
    $('teamSymbol').textContent = initials;
    $('cardCrest').textContent = initials;
  }
}
// ============================================================
// 4. ATUALIZAÇÃO DOS CAMPOS E DAS IMAGENS
// ============================================================
function setLeague(leagueName) {
  leagueInput.value = leagueName;
  fillDatalist('teamOptions', leagues[leagueName].teams);

  if (!leagues[leagueName].teams.includes(teamInput.value)) {
    teamInput.value = leagues[leagueName].teams[0];
  }

  updateTeamOptions();
  updateOVR();
}

function setTeam(teamName) {
  teamInput.value = teamName;
  const leagueName = leagueForTeam(teamName);

  if (leagueName) {
    leagueInput.value = leagueName;
  }

  const teams = leagues[currentLeague()]?.teams
    || Object.values(leagues).flatMap(item => item.teams);
  fillDatalist('teamOptions', teams);

  updateAffiliations();
  updateOVR();
}
// ============================================================
// 5. ESTATÍSTICAS E CÁLCULO DO OVERALL (GER)
// ============================================================
function renderStats() {
  const isGoalkeeper = positionInput.value === 'GK';
  const stats = isGoalkeeper ? keeperStats : fieldStats;
  const grid = $('statsGrid');

  $('statsModeLabel').textContent = isGoalkeeper ? 'GOLEIRO' : 'JOGADOR DE LINHA';

  // Cria um controle numérico e uma barra deslizante para cada atributo.
  grid.innerHTML = stats.map(([code, label]) => {
    const value = activeStats[code];
    const fillPercent = ((value - 1) / 98) * 100;

    return `
      <div class="stat-control">
        <div class="stat-control-top">
          <div>
            <span class="stat-code">${code}</span>
            <span class="stat-name">${label}</span>
          </div>
          <input class="stat-number" type="number" min="1" max="99"
            value="${value}" data-stat-number="${code}" aria-label="${label}" />
        </div>
        <input class="stat-range" type="range" min="1" max="99"
          value="${value}" data-stat-range="${code}"
          aria-label="${label} de 1 a 99" style="--fill:${fillPercent}%" />
      </div>`;
  }).join('');

  grid.querySelectorAll('[data-stat-number]').forEach(input => {
    input.addEventListener('input', () => changeStat(input.dataset.statNumber, input.value));
  });

  grid.querySelectorAll('[data-stat-range]').forEach(input => {
    input.addEventListener('input', () => changeStat(input.dataset.statRange, input.value));
  });
}

function changeStat(code, value) {
  let newValue = Number(value);
  if (!Number.isFinite(newValue)) return;

  // Limita os atributos ao intervalo de 1 a 99.
  newValue = Math.max(1, Math.min(99, Math.round(newValue)));
  activeStats[code] = newValue;

  const numberInput = document.querySelector(`[data-stat-number="${code}"]`);
  const rangeInput = document.querySelector(`[data-stat-range="${code}"]`);

  if (numberInput && numberInput.value !== String(newValue)) {
    numberInput.value = newValue;
  }

  if (rangeInput) {
    rangeInput.value = newValue;
    rangeInput.style.setProperty('--fill', `${((newValue - 1) / 98) * 100}%`);
  }

  updateOVR();
}

// Approximate position-weighted OVR model for a custom card, not EA's official formula.
const weights = {
  ST: { PAC: .12, SHO: .42, PAS: .08, DRI: .18, DEF: .02, PHY: .18 },
  CF: { PAC: .13, SHO: .30, PAS: .17, DRI: .25, DEF: .02, PHY: .13 },
  LW: { PAC: .24, SHO: .20, PAS: .12, DRI: .30, DEF: .02, PHY: .12 },
  RW: { PAC: .24, SHO: .20, PAS: .12, DRI: .30, DEF: .02, PHY: .12 },
  LM: { PAC: .20, SHO: .12, PAS: .20, DRI: .22, DEF: .08, PHY: .18 },
  RM: { PAC: .20, SHO: .12, PAS: .20, DRI: .22, DEF: .08, PHY: .18 },
  CAM: { PAC: .12, SHO: .18, PAS: .28, DRI: .27, DEF: .02, PHY: .13 },
  CM: { PAC: .10, SHO: .10, PAS: .25, DRI: .20, DEF: .17, PHY: .18 },
  CDM: { PAC: .08, SHO: .03, PAS: .16, DRI: .13, DEF: .38, PHY: .22 },
  LB: { PAC: .20, SHO: .03, PAS: .14, DRI: .12, DEF: .31, PHY: .20 },
  RB: { PAC: .20, SHO: .03, PAS: .14, DRI: .12, DEF: .31, PHY: .20 },
  LWB: { PAC: .22, SHO: .03, PAS: .15, DRI: .13, DEF: .27, PHY: .20 },
  RWB: { PAC: .22, SHO: .03, PAS: .15, DRI: .13, DEF: .27, PHY: .20 },
  CB: { PAC: .06, SHO: .01, PAS: .10, DRI: .05, DEF: .48, PHY: .30 },
};
function calculateOVR() {
  // Fórmula aproximada para a carta personalizada; não é a fórmula oficial do FC 26.
  if (positionInput.value === 'GK') {
    return Math.round(
      activeStats.DIV * 0.14
      + activeStats.HAN * 0.14
      + activeStats.KIC * 0.08
      + activeStats.REF * 0.20
      + activeStats.SPD * 0.08
      + activeStats.POS * 0.36,
    );
  }

  const positionWeights = weights[positionInput.value] || weights.ST;
  const weightedTotal = Object.entries(positionWeights).reduce(
    (total, [statCode, weight]) => total + activeStats[statCode] * weight,
    0,
  );

  return Math.round(weightedTotal);
}

function updateOVR() {
  const overall = calculateOVR();
  const isGoalkeeper = positionInput.value === 'GK';
  const stats = isGoalkeeper ? keeperStats : fieldStats;
  const shortNames = { PAC: 'RIT', SHO: 'FIN', PAS: 'PAS', DRI: 'CON', DEF: 'DEF', PHY: 'FÍS' };

  $('ovr').textContent = overall;
  $('smallOVR').textContent = overall;
  $('cardPosition').textContent = positionInput.value;
  $('cardName').textContent = $('nameInput').value.trim() || 'SEU JOGADOR';

  $('cardStats').innerHTML = stats.map(([code]) => `
    <div class="stat">
      <b>${activeStats[code]}</b>
      <span>${isGoalkeeper ? code : shortNames[code]}</span>
    </div>`).join('');

  updateAffiliations();
}

// ============================================================
// 6. EVENTOS DOS CAMPOS E BOTÕES
// ============================================================
function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
nationInput.addEventListener('input', updateAffiliations);
nationInput.addEventListener('change', () => {
  if (!nations.some(n => n[0].toLowerCase() === nationInput.value.trim().toLowerCase()))
    nationInput.value = 'Brasil'; updateAffiliations();
});
leagueInput.addEventListener('input', () => {
  const l = currentLeague(); if (l) {
    fillDatalist('teamOptions', leagues[l].teams);
    if (!leagues[l].teams.includes(teamInput.value))
      teamInput.value = '';
  } updateAffiliations();
});
leagueInput.addEventListener('change', () => {
  const l = currentLeague(); if (l)
    setLeague(l);
  else {
    leagueInput.value = Object.keys(leagues)[0];
    setLeague(leagueInput.value);
  }
});
teamInput.addEventListener('input', () => {
  const t = currentTeam(); if (t) {
    const l = leagueForTeam(t);
    leagueInput.value = l;
    fillDatalist('teamOptions', leagues[l].teams);
  } updateAffiliations();
});
teamInput.addEventListener('change', () => {
  const t = currentTeam(); if (t)
    setTeam(t);
  else if (currentLeague())
    teamInput.value = leagues[currentLeague()].teams[0];
  else
    teamInput.value = 'Palmeiras'; setTeam(teamInput.value);
});
$('nameInput').addEventListener('input', updateOVR);
positionInput.addEventListener('change', () => { renderStats(); updateOVR(); });
document.querySelectorAll('[data-random]').forEach(btn => btn.addEventListener('click', () => {
  const type = btn.dataset.random; if (type === 'nation') {
    nationInput.value = nations[rand(0, nations.length - 1)][0];
    updateAffiliations();
  } if (type === 'league')
    setLeague(Object.keys(leagues)[rand(0, Object.keys(leagues).length - 1)]); if (type === 'team') {
      const all = Object.values(leagues).flatMap(l => l.teams);
      setTeam(all[rand(0, all.length - 1)]);
    }
}));
$('randomStatsBtn').addEventListener('click', () => {
  const stats = positionInput.value === 'GK' ? keeperStats : fieldStats;
  stats.forEach(([code]) => {
    activeStats[code] = rand(1, 99);
  });
  renderStats();
  updateOVR();
});
// Randomize every editable player detail except the user's name and photo.
const randomEverythingBtn = $('randomEverythingBtn');
if (randomEverythingBtn)
  randomEverythingBtn.addEventListener('click', () => {
    nationInput.value = nations[rand(0, nations.length - 1)][0];
    const leagueNames = Object.keys(leagues);
    const chosenLeague = leagueNames[rand(0, leagueNames.length - 1)];
    leagueInput.value = chosenLeague;
    const teamList = leagues[chosenLeague].teams;
    teamInput.value = teamList[rand(0, teamList.length - 1)];
    const positions = Array.from(positionInput.options).map(option => option.value);
    positionInput.value = positions[rand(0, positions.length - 1)];
    (positionInput.value === 'GK' ? keeperStats : fieldStats).forEach(([code]) => activeStats[code] = rand(1, 99));
    updateTeamOptions();
    renderStats();
    updateOVR();
  });
// ============================================================
// 7. FOTO DO JOGADOR E EXPORTAÇÃO DO CARD EM PNG
// ============================================================
$('photoInput').addEventListener('change', event => {
  const file = event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    alert('Selecione um arquivo de imagem.');
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    photoData = reader.result;
    $('playerPhoto').src = photoData;
    $('playerPhoto').hidden = false;
    $('photoPlaceholder').hidden = true;
  };
  reader.readAsDataURL(file);
});

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
$('downloadBtn').addEventListener('click', exportCardPNG);

function exportCardPNG() {
  const canvas = document.createElement('canvas');
  canvas.width = 900;
  canvas.height = 1250;

  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const background = ctx.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, '#f3e9bd');
  background.addColorStop(0.5, '#d8c27c');
  background.addColorStop(1, '#b8a25e');

  // Fundo e borda do card.
  ctx.fillStyle = background;
  roundRect(ctx, 0, 0, width, height, 42);
  ctx.fill();
  ctx.strokeStyle = '#756331';
  ctx.lineWidth = 5;
  roundRect(ctx, 18, 18, width - 36, height - 36, 32);
  ctx.stroke();

  // Overall, posição, bandeira, time e liga.
  ctx.fillStyle = '#172018';
  ctx.textAlign = 'left';
  ctx.font = '900 145px Arial';
  ctx.fillText(calculateOVR(), 65, 160);
  ctx.font = 'bold 48px Arial';
  ctx.fillText(positionInput.value, 70, 220);

  const nation = nations.find(item => item[0].toLowerCase() === nationInput.value.trim().toLowerCase());
  ctx.font = '48px Arial';
  ctx.fillText(nation ? nation[1] : '🌐', 70, 280);

  ctx.textAlign = 'right';
  ctx.font = 'bold 34px Arial';
  ctx.fillText(teamInitials[teamInput.value] || 'YP', width - 70, 100);
  ctx.font = 'bold 27px Arial';
  ctx.fillText(leagues[currentLeague()]?.mark || 'YP', width - 70, 150);

  // Desenha nome e atributos depois de carregar a foto, se houver.
  const finishCard = () => {
    ctx.textAlign = 'center';
    ctx.fillStyle = '#172018';
    ctx.font = '900 66px Arial';
    const playerName = ($('nameInput').value.trim() || 'SEU JOGADOR').toUpperCase().slice(0, 22);
    ctx.fillText(playerName, width / 2, 850);

    ctx.strokeStyle = '#74602d';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(75, 885);
    ctx.lineTo(width - 75, 885);
    ctx.stroke();

    const stats = positionInput.value === 'GK' ? keeperStats : fieldStats;
    const shortNames = { PAC: 'RIT', SHO: 'FIN', PAS: 'PAS', DRI: 'CON', DEF: 'DEF', PHY: 'FÍS' };

    stats.forEach(([code], index) => {
      const x = 150 + (index % 3) * 300;
      const y = 960 + Math.floor(index / 3) * 100;
      ctx.textAlign = 'center';
      ctx.font = '900 52px Arial';
      ctx.fillText(String(activeStats[code]), x, y);
      ctx.font = 'bold 23px Arial';
      ctx.fillText(positionInput.value === 'GK' ? code : shortNames[code], x + 58, y);
    });

    ctx.font = 'bold 22px Arial';
    ctx.fillText('YOURPLAYER  •  FC 26 INSPIRED', width / 2, 1190);

    const downloadLink = document.createElement('a');
    downloadLink.download = 'yourplayer-carta.png';
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.click();
  };

  if (!photoData) {
    finishCard();
    return;
  }

  const photo = new Image();
  photo.onload = () => {
    const photoBox = { x: 180, y: 235, width: 540, height: 560 };
    const scale = Math.min(photoBox.width / photo.width, photoBox.height / photo.height);
    const drawWidth = photo.width * scale;
    const drawHeight = photo.height * scale;

    ctx.drawImage(
      photo,
      photoBox.x + (photoBox.width - drawWidth) / 2,
      photoBox.y + (photoBox.height - drawHeight) / 2,
      drawWidth,
      drawHeight,
    );
    finishCard();
  };
  photo.onerror = finishCard;
  photo.src = photoData;
}

// ============================================================
// 8. RESTAURAR VALORES INICIAIS E INICIAR O SITE
// ============================================================
$('resetBtn').addEventListener('click', () => {
  if (!confirm('Restaurar a carta para os valores iniciais?'))
    return;

  $('nameInput').value = 'Seu Jogador';
  nationInput.value = 'Brasil';
  leagueInput.value = 'Série A Brasileirão';
  teamInput.value = 'Palmeiras';
  positionInput.value = 'ST';
  activeStats = { ...defaults };
  photoData = null;
  $('photoInput').value = '';
  $('playerPhoto').hidden = true;
  $('playerPhoto').removeAttribute('src');
  $('photoPlaceholder').hidden = false;
  updateTeamOptions();
  renderStats();
  updateOVR();
});
// Initialize
updateTeamOptions();
renderStats();
updateOVR();
