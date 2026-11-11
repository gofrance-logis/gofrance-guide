/* 고프랑 셀프존 가이드 — 화면에 나오는 글은 이 파일 한 곳에서 고칩니다. */
window.GUIDE = {
  addr: "103 rue du Cherche-Midi, 75006 Paris",
  hours: "예약 방문제 · 동절기 9:00–18:00 · 하절기 8:00–20:00",
  kakao: "http://pf.kakao.com/_qMxfxjn/chat",
  phone: "+33 6 95 69 02 15",
  remember: [
    { k: "code", t: "출입 코드 2개는 카톡으로, 열쇠는 간판 뒤에", d: "코드는 방문 당일 카톡으로 보내드려요. 사무실 문 열쇠는 고프랑 간판 뒤에 있어요." },
    { k: "postit", t: "다 싸면 노란 포스트잇 + 사진 한 장", d: "이름·사용한 박스·무게·결제 방법을 적어 붙이고 카톡으로 보내주세요." },
    { k: "button", t: "파란 대문은 오른쪽 벽 흰 버튼", d: "나갈 때 대문은 자동으로 열리지 않아요." }
  ],
  beforeVisit: [
    { t: "방문 날짜·시간을 카톡으로 확정했어요", d: "예약 방문제예요. 시간이 바뀌면 미리 알려주세요." },
    { t: "국제배송 신청서를 작성했어요", d: "작성 전이라면 오시기 전에 작성해 주세요.", link: "https://gofran.co.kr/Booking?svc=intl", linkT: "신청서 작성하기" },
    { t: "보내면 안 되는 물건을 뺐어요", d: "노트북·휴대폰 같은 전자기기, 배터리, 스프레이·가스류, 소시송·햄·소시지 같은 육가공식품은 보낼 수 없어요. 짐 싸기 전에 꼭 확인해 주세요.", link: "https://gofran.co.kr/Information/?bmode=view&idx=780673", linkT: "금지 품목 확인하기", important: true }
  ],
  parts: [
    {
      id: "visit", nav: "방문하기", fr: "Entrer", title: "오는 법", lead: "파란 대문에서 고프랑 사무실까지 사진과 함께 안내해 드려요.\n천천히 따라오셔도 2분이면 도착합니다.",
      steps: [
        { t: "103번 파란 대문", fr: "Le portail bleu nº 103", d: "Cave à Manger와 인테리어 가게 사이의 남색 대문이에요.", img: "exterior", alt: "103번지 남색 대문 외관" },
        { t: "대문 왼쪽 디지코드", fr: "Digicode à gauche du portail", d: "대문 왼쪽 벽의 디지코드에 아래 번호를 누르세요.", img: "digicode", alt: "대문 왼쪽 벽의 디지코드", code: "B2306A", codeT: "대문 코드" },
        { t: "안뜰로 쭉 직진", fr: "Tout droit dans la cour", d: "문이 열리면 멈추지 말고 안뜰 안쪽까지 들어오세요.", img: "courtyard", alt: "안뜰 끝 흰색 유리문을 가리키는 화살표" },
        { t: "정면의 흰색 유리문", fr: "La porte vitrée blanche", d: "유리문 왼쪽 디지코드에 아래 번호를 누르세요.", img: "glassdoor", alt: "안뜰 정면의 흰색 유리문", code: "1959A", codeT: "유리문 코드" },
        { t: "작은 계단 위, 왼쪽 첫 번째 문", fr: "1ʳᵉ porte à gauche", d: "건물 안 작은 계단을 올라가면 왼쪽 첫 번째 문이에요.", img: "stairs", img2: "officedoor", alt: "건물 안 작은 계단", alt2: "왼쪽 첫 번째 흰 문" },
        { t: "간판 뒤 열쇠로 문 열기", fr: "La clé derrière le panneau", d: "문 옆 고프랑 간판 뒤에 열쇠가 있어요. 열쇠로 문을 열고 들어오세요.", img: "sign", alt: "고프랑 방문 환영 손글씨 간판, 이 간판 뒤에 열쇠가 있어요" }
      ]
    },
    {
      id: "pack", nav: "박스포장", fr: "Emballer", title: "박스포장하는 법", lead: "박스 선택부터 포장, 계측까지 직접 하실 수 있도록 준비해 두었어요.\n포장을 마치고 사진을 보내주시면 확인 후 배송비를 안내해 드립니다.",
      steps: [
        { t: "짐에 맞는 박스 고르기", fr: "Choisir un carton", d: "결제 금액은 배송비 + 박스값이에요.", img: "boxsamples", alt: "선반 위 박스 샘플", table: true },
        { t: "박스는 선반, 도구는 카트", fr: "Étagère et chariot", d: "박스는 무게별로 선반에(1–5kg / 6–10kg / 15·20kg), 테이프·가위·매직은 카트에 있어요.", img: "shelf", img2: "cart", alt: "박스 선반", alt2: "포장 도구 카트" },
        { t: "빈 공간 없이 채우고 단단히 막기", fr: "Caler et fermer", d: "짐이 흔들리지 않게 빈 곳 없이 채워 주세요.\n재활용 박스라면 예전 송장은 떼어 주세요." },
        { t: "계측하고 노란 포스트잇 쓰기", fr: "Mesurer, puis le post-it jaune", d: "저울로 무게를, 줄자로 가로·세로·높이를 재고, 포스트잇에 적어 박스 위에 붙여 주세요. 사진을 찍어 카톡으로 보내주시면 돼요.", perks: true, postit: true, calc: true }
      ],
      offer: { t: "셀프존 무료 제공", fr: "Offert", list: ["물 · 1인 1병, 냉장고에 있어요", "충전기·선풍기 · 자유롭게 쓰셔도 돼요", "화장실 · 사무실에서 나와 왼쪽 코너 “Privée” 문, 열쇠는 벽에 걸려 있어요"] },
      coffee: { t: "15kg 이상 보내셨다면, 커피 한 잔", d: "실제 저울 무게 15kg 이상 박스를 보내신 고객님께 커피값을 지원해 드려요.", steps: ["사무실의 고카페 포스트잇에 짧은 후기 쓰기", "근처 카페에서 음료와 포스트잇을 한 장에 찍기", "카톡으로 사진 보내기"], link: "https://gofrance-logis.github.io/gofrance-plus/", linkT: "이벤트 자세히 보기", modal: "cafe" }
    },
    {
      id: "exit", nav: "마무리", fr: "Avant de partir", title: "마무리하는 법", lead: "네 가지를 확인해 주시면 모든 과정이 마무리됩니다.",
      check: "before-leave",
      steps: [
        { t: "포스트잇 붙이고 사진을 카톡으로 보냈어요", fr: "Photo envoyée", d: "사진을 받으면 실측 후 배송비를 보내드려요.", kakao: true },
        { t: "박스는 작업대 아래에 두었어요", fr: "Sous la table", d: "직원이 수거해서 실측해요." },
        { t: "문을 잠그고 열쇠는 간판 뒤에 다시 넣었어요", fr: "Clé derrière le panneau", d: "사무실 문을 잠근 뒤, 열쇠는 처음 꺼내신 간판 뒤에 넣어 주세요.", img: "sign", alt: "열쇠를 다시 넣는 고프랑 간판" },
        { t: "파란 대문은 오른쪽 벽 흰 버튼으로 열어요", fr: "Le bouton à droite", d: "건물 유리문은 안에서 밀고 나오시면 돼요.\n파란 대문은 오른쪽 벽의 흰 버튼을 눌러야 열려요.", img: "exitbutton", alt: "대문 안쪽 오른쪽 벽의 흰 버튼" }
      ]
    }
  ],
  rates: [{kg:1,size:"23·19·12",ship:19,box:3,pop:false},{kg:2,size:"33·20·14",ship:25,box:3,pop:false},{kg:3,size:"35·22·17",ship:31,box:3,pop:true},{kg:4,size:"38·25·20",ship:37,box:3,pop:false},{kg:5,size:"40·27·22",ship:43,box:3,pop:true},{kg:6,size:"41·28·22",ship:49,box:3.5,pop:false},{kg:7,size:"42·31·26",ship:55,box:3.5,pop:false},{kg:8,size:"45·31·27",ship:61,box:3.5,pop:false},{kg:10,size:"50·33·29",ship:73,box:3.5,pop:true},{kg:15,size:"60·40·30",ship:103,box:4,pop:true},{kg:20,size:"60·40·40",ship:133,box:4.5,pop:true}],
  tariff: [19,25,31,37,43,49,55,61,67,73,79,85,91,97,103,109,115,121,127,133,139,145,151,157,163,169,175,181,187,193],
  boxNote: "박스 이름의 kg은 담을 수 있는 최대 무게예요. 배송비는 실제로 계측한 무게로 계산돼요 (예: 15kg 박스에 12kg을 담으면 €85). 한 박스가 25kg 이상이면 헤비차지가 붙어요.",
  tarif: "https://gofran.co.kr/tarif-korea",
  banned: "https://gofran.co.kr/Information/?bmode=view&idx=780673",
  maps: "https://www.google.com/maps/dir/?api=1&destination=103+rue+du+Cherche-Midi+75006+Paris",
  boxSale: [["1·2·3·4·5kg 박스","€3"],["6·7·8·10kg 박스","€3.5"],["15kg 박스","€4"],["20kg 박스","€4.5"],["25kg 이상 특수박스","€8"]],
  heavy: [["25–29kg","€10"],["30–39kg","€25"],["40–49kg","€35"],["50–59kg","€45"],["60–69kg","€55"]],
  carrier: [[10,78],[11,84.5],[12,91],[13,97.5],[14,104],[15,110.5],[16,117],[17,123.5],[18,130],[19,136.5],[20,143],[21,149.5],[22,156],[23,162.5],[24,169],[25,175.5],[26,182],[27,188.5],[28,195],[29,201.5],[30,208],[31,214.5],[32,221],[33,227.5],[34,234],[35,240.5],[36,247],[37,253.5],[38,260],[39,266.5],[40,273],[41,279.5],[42,286]],
  cafe: { target: "파리 사무실을 방문해 15kg 이상 귀국짐을 보낸 고객님", steps: [["포스트잇 챙기기","사무실에 있는 고카페 포스트잇에 짧은 후기를 적어요"],["인증샷 찍기","카페에서 주문한 음료(음식)와 포스트잇을 한 장에"],["카톡 보내기","받고 싶은 지급 방법과 함께 사진을 보내요"],["혜택 받기","€6(약 1만 원)을 선택한 방법으로 드려요"]], payout: "계좌 송금 · 트래블월렛 · 트래블로그 · 쏠트래블 · 배송비 차감", note: "박스 개수와 상관없이 고객님 한 분께 한 번 보내드려요.\n음료와 포스트잇이 한 사진에 함께 나오게 찍어 주시면 바로 확인해 드릴게요." },
  pay: [["한화 송금 (당일 구매환율)","우리은행 1005-603-190807 · (주)고프랑인터내셔널"],["유로 송금","카톡으로 계좌 안내를 요청해 주세요"],["앱 송금","트래블월렛 · 트래블로그 · 쏠트래블"]]
};

/* 공통 조각: 표, 부피무게, 포스트잇, 하단 메뉴, 위로가기 */
window.GX = (function(){
  var G = window.GUIDE;
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function img(name, alt, cls){ return name ? '<img class="'+(cls||"ph")+'" src="img/'+name+'.webp" alt="'+esc(alt||"")+'" loading="lazy">' : ""; }
  function photos(s, cls){
    if(!s.img) return "";
    if(s.img2) return '<div class="pair">'+img(s.img,s.alt,cls)+img(s.img2,s.alt2,cls)+'</div>';
    return img(s.img,s.alt,cls);
  }
  function table(){
    return '<div class="tbl rate"><table><thead><tr><th>무게</th><th>박스 크기 cm</th><th>배송비</th><th>박스값</th></tr></thead><tbody>'+
      G.rates.map(function(r){ return '<tr'+(r.pop?' class="pop"':'')+'><td>'+r.kg+'kg'+(r.pop?' <i>자주 써요</i>':'')+'</td><td>'+(r.size||'')+'</td><td>€'+r.ship+'</td><td>€'+r.box.toFixed(1)+'</td></tr>'; }).join("")+
      '</tbody></table></div>'+feeHow()+'<div class="links"><button class="chip" type="button" data-modal="rates">전체 가격 보기</button><button class="chip" type="button" data-modal="carrier">캐리어 요금 보기</button></div>';
  }
  function feeHow(){
    return '<div class="howfee"><b class="hf-t">배송비는 이렇게 정해져요</b>'+
      '<div class="hf-row"><span class="hf-k">실무게</span><span>저울로 잰 박스 무게</span></div>'+
      '<div class="hf-row"><span class="hf-k">부피무게</span><span>가로 × 세로 × 높이(cm) ÷ 5,000</span></div>'+
      '<div class="hf-row hf-on"><span class="hf-k">비용책정 무게</span><span>둘 중 <b>더 큰 쪽</b>, 소수점은 다음 kg</span></div>'+
      '<div class="hf-ex"><span class="hf-et">예시</span>'+
        '<div class="hf-case"><div><b>10kg 박스</b> 50·33·29<br>실무게 8.4kg · 부피무게 9.6kg</div><div class="hf-res">10kg<strong>€73</strong></div></div>'+
        '<div class="hf-case"><div><b>15kg 박스</b> 60·40·30<br>실무게 12kg · 부피무게 14.4kg</div><div class="hf-res">15kg<strong>€103</strong></div></div></div>'+
      '<p class="note">가볍고 부피가 큰 짐일수록 부피무게로 계산되기 쉬워요.</p><p class="note">한 박스가 25kg 이상이면 헤비차지가 붙어요.</p></div>';
  }
  function volume(){
    return '<div class="formula">가로 × 세로 × 높이 ÷ 5,000 = 부피무게 kg</div><p class="note">60×40×30은 15kg, 60×40×40은 20kg. 실무게와 부피무게 중 무거운 쪽으로 계산돼요. <a href="'+G.banned+'" target="_blank" rel="noopener">보내면 안 되는 물건</a></p>';
  }
  function postitBox(){
    return '<div class="postit" aria-label="박스 포스트잇 작성 예시"><span class="ex">박스 예시</span><b>국제배송</b><dl><dt>이름</dt><dd>홍길동</dd><dt>박스</dt><dd>사용한 박스 또는 크기<br><span class="e">예) 10kg 박스 / 50·33·29</span></dd><dt>무게</dt><dd>계측한 무게<br><span class="e">예) 8.4 kg</span></dd><dt>결제</dt><dd>한화 · 유로 · 앱 송금 중 하나</dd></dl></div>';
  }
  function postitCarrier(){
    return '<div class="postit" aria-label="캐리어 포스트잇 작성 예시"><span class="ex">캐리어 예시</span><b>국제배송 · 캐리어</b><dl><dt>이름</dt><dd>홍길동</dd><dt>크기</dt><dd>캐리어 크기<br><span class="e">예) 28인치</span></dd><dt>무게</dt><dd>잰 무게<br><span class="e">예) 21.3 kg</span></dd><dt>결제</dt><dd>한화 · 유로 · 앱 송금 중 하나</dd></dl></div>';
  }
  function postit(){
    return '<figure class="pfig"><div class="postits">'+postitBox()+postitCarrier()+'</div><figcaption>예시 그대로 적지 말고, 내 박스·무게·결제 방법을 적어 주세요.</figcaption><div class="appay"><b>앱 송금</b><span>트래블월렛 · 트래블로그 · 쏠트래블</span></div></figure>';
  }
  function code(s){ return s.code ? '<div class="code"><span class="ct">'+esc(s.codeT)+'</span><span class="slot">'+esc(s.code)+'</span></div>' : ""; }
  function extras(s){ return code(s)+(s.table?table():"")+(s.volume?volume():"")+(s.postit?postit():"")+(s.perks?'<div class="perks-slot"></div>':"")+(s.calc?'<div class="calc-slot"></div>':""); }
  function after(p){
    if(!p.after) return "";
    var a=p.after, body = a.list ? '<ul>'+a.list.map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul>' : '<p>'+esc(a.d)+'</p>';
    return '<div class="after"><h3>'+esc(a.t)+'</h3>'+body+(a.link?'<a href="'+a.link+'" target="_blank" rel="noopener">'+esc(a.linkT)+'</a>':'')+'</div>';
  }
  function pay(){
    return '<div class="after pay"><h3>결제 방법</h3>'+G.pay.map(function(p){return '<div><b>'+esc(p[0])+'</b><span>'+esc(p[1])+'</span></div>';}).join("")+'</div>';
  }
  var ICON = {
    visit:'<path d="M4 21V9l8-6 8 6v12"/><path d="M9 21v-7h6v7"/>',
    pack:'<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    exit:'<circle cx="12" cy="12" r="8.5"/><path d="M8.2 12.3l2.6 2.6 5-5.4"/>',
    talk:'<path d="M12 4C7 4 3 7.1 3 11c0 2.4 1.5 4.5 3.9 5.8L6 20l3.6-2.3c.8.2 1.6.3 2.4.3 5 0 9-3.1 9-7s-4-7-9-7z"/>'
  };
  function bottomNav(current){
    var items = G.parts.map(function(p){ return '<a href="#'+p.id+'" data-go="'+p.id+'"'+(p.id===current?' aria-current="page"':'')+'><svg viewBox="0 0 24 24" aria-hidden="true">'+ICON[p.id]+'</svg><span>'+esc(p.nav)+'</span></a>'; }).join("");
    return '<nav class="bnav" aria-label="가이드 메뉴">'+items+'<a href="'+G.kakao+'" target="_blank" rel="noopener" class="talk"><svg viewBox="0 0 24 24" aria-hidden="true">'+ICON.talk+'</svg><span>카톡 문의</span></a></nav>';
  }
  function setNav(id){
    document.querySelectorAll('.bnav [data-go]').forEach(function(a){ if(a.getAttribute('data-go')===id){a.setAttribute('aria-current','page')} else {a.removeAttribute('aria-current')} });
  }
  function toTop(){
    var b=document.createElement('button'); b.type='button'; b.className='totop'; b.setAttribute('aria-label','맨 위로'); b.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
    document.body.appendChild(b);
    function upd(){ b.classList.toggle('show', window.scrollY > 500); }
    window.addEventListener('scroll', upd, {passive:true}); upd();
    b.addEventListener('click', function(){ window.scrollTo({top:0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto':'smooth'}); });
  }
  function copyAddr(btn){
    btn.addEventListener('click', function(){
      function ok(){ btn.textContent='복사됨'; setTimeout(function(){ btn.textContent='주소 복사'; },1600); }
      function fb(){ btn.textContent=G.addr; }
      if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(G.addr).then(ok,fb); } else { fb(); }
    });
  }
  function route(def){ var h=location.hash.slice(1); return G.parts.some(function(p){return p.id===h;}) ? h : def; }
  return { postitCarrier:postitCarrier, esc:esc, img:img, photos:photos, extras:extras, after:after, pay:pay, bottomNav:bottomNav, setNav:setNav, toTop:toTop, copyAddr:copyAddr, route:route, table:table, postit:postit };
})();
